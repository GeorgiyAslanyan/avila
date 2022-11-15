import React from "react";
import s from "./Content.module.scss";
import Card from "../Card";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { fetchItems } from "../../redux/slices/ActionCreators";
import { useGetItemsQuery } from "../../redux/api/itemsApi";
import { setCategory, setPage } from "../../redux/slices/itemsSlice";
import { CircularProgress, Pagination } from "@mui/material";
import { ArrowLongUpIcon, CalendarDaysIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const Content = () => {
  const { category, sortBy, order, page } = useAppSelector(
    (state) => state.items.sort
  );

  const [activeCategory, setActiveCategory] = React.useState("Вся одежда");
  const [loading, setLoading] = React.useState(false)

  const dispatch = useAppDispatch();
  const {
    data: items,
    error,
    isLoading,
  } = useGetItemsQuery({ page, category, sortBy, order });

  

  React.useLayoutEffect(() => {
    dispatch(fetchItems());
  }, []);

  const onCategoryChange = async (el: string) => {
    setActiveCategory(el);
    setLoading(true)
    await dispatch(setPage(1));
    setLoading(false)
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

  return (
    <>
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
                <div className={s.price}><ArrowLongUpIcon className={s.arrow} width={30}/> <CurrencyDollarIcon width={30}/></div>
                <div className={s.date}><ArrowLongUpIcon className={s.arrow} width={30}/> <CalendarDaysIcon width={30} /></div>
            </div>
          </div>
        </div>
        {isLoading || loading ? (
          <CircularProgress color="inherit" />
        ) : (
          <div className={s.items}>
            {items?.map((el) => (
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
    </>
  );
};

export default Content;
