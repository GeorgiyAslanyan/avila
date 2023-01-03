import { ArrowLongDownIcon, ArrowLongUpIcon, CalendarDaysIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CircularProgress, Pagination } from "@mui/material";
import React from "react";
import { useDebounce } from "usehooks-ts";
import { useGetItemsQuery } from "../../../redux/api/itemsApi";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks/hook";
import { fetchItems } from "../../../redux/slices/ActionCreators";
import { setPage, setCategory, setOrder, setSortBy } from "../../../redux/slices/itemsSlice";
import Card from "../Card";
import s from "./AdminPosts.module.scss";

const AdminPosts = () => {
  const { category, sortBy, order, page, search } = useAppSelector(
    (state) => state.items.sort
  );
  
  const debouncedSearch = useDebounce(search, 1000);

  const [activeCategory, setActiveCategory] = React.useState("Вся одежда");
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();
  const {
    data: items,
    error,
    isLoading,
  } = useGetItemsQuery({
    page,
    category,
    sortBy,
    order,
    search: debouncedSearch,
  });

  React.useLayoutEffect(() => {
    dispatch(fetchItems());
  }, [search]);

  const onCategoryChange = (el: string) => {
    setActiveCategory(el);
    dispatch(setPage(1));
  };

  const onSetCategory = (el: string) => {
    el !== activeCategory && onCategoryChange(el);
    el !== activeCategory && el !== "вся одежда"
      ? dispatch(setCategory(el))
      : dispatch(setCategory(undefined));
  };

  const onPageChanged = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  const onSortPriceClick = () => {
    sortBy === "price" && order === "asc" && dispatch(setOrder("desc"));
    sortBy === "price" && order === "desc" && dispatch(setOrder("asc"));
    sortBy === "createdAt" &&
      dispatch(setSortBy("price")) &&
      dispatch(setOrder("asc"));
  };

  const onSortCalendarClick = () => {
    sortBy === "createdAt" && order === "asc" && dispatch(setOrder("desc"));
    sortBy === "createdAt" && order === "desc" && dispatch(setOrder("asc"));
    sortBy === "price" &&
      dispatch(setSortBy("createdAt")) &&
      dispatch(setOrder("asc"));
  };

  return (
    <div className={s.adminPosts}>
      <div className={s.content}>
        <div className={s.header}>
          <div className={s.categories}>
            {["Вся одежда", "Кроссовки", "Кофты", "Джинсы"].map((el, index) => (
              <h2
                key={index}
                className={
                  activeCategory.toLowerCase() === el.toLowerCase()
                    ? s.selectedItem
                    : s.item
                }
                onClick={() => onSetCategory(el.toLowerCase())}
              >
                {el}
              </h2>
            ))}
            <div className={s.sortMenu}>
              <div
                className={sortBy === "price" ? s.activePrice : s.price}
                onClick={onSortPriceClick}
              >
                {order === "asc" && sortBy === "price" ? (
                  <ArrowLongUpIcon className={s.arrow} width={30} />
                ) : (
                  <ArrowLongDownIcon className={s.arrow} width={30} />
                )}
                <CurrencyDollarIcon className={s.priceSvg} width={30} />
              </div>
              <div
                className={sortBy === "createdAt" ? s.activeDate : s.date}
                onClick={onSortCalendarClick}
              >
                {order === "asc" && sortBy === "createdAt" ? (
                  <ArrowLongUpIcon className={s.arrow} width={30} />
                ) : (
                  <ArrowLongDownIcon className={s.arrow} width={30} />
                )}
                <CalendarDaysIcon className={s.dateSvg} width={30} />
              </div>
            </div>
          </div>
        </div>
        {items && items.length !== 0 && debouncedSearch && (
          <div className={s.searchResult}>
            <h2>Показаны товары по запросу: {debouncedSearch}</h2>
          </div>
        )}
        {items && items.length === 0 && (
          <div className={s.searchResult}>
            <h2>Товары по запросу "{debouncedSearch}" отсутствуют</h2>
          </div>
        )}
        {isLoading || loading ? (
          <CircularProgress color="inherit" />
        ) : (
          <div className={s.items}>
            {items?.map((el: any) => (
              <Card key={el.id} {...el} />
            ))}
          </div>
        )}

        <div className={s.pagination}>
          <Pagination
            page={page}
            count={5}
            shape={"rounded"}
            onChange={onPageChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;
