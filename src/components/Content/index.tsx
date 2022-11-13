import React from "react";
import s from "./Content.module.scss";
import Card from "../Card";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { fetchItems } from "../../redux/slices/ActionCreators";
import { useGetItemsQuery } from "../../redux/api/itemsApi";
import { ItemsApi } from "../../types/types";

const Content = () => {
  const [categories, setCategories] = React.useState<string | null>(
    "Вся одежда"
  );
  const [categoryApi, setCategoryApi] = React.useState<string | undefined>(
    undefined
  );
  const [page, setPage] = React.useState<number>(1);

  const dispatch = useAppDispatch();
  const {
    data: items,
    error,
    isLoading,
  } = useGetItemsQuery({ limit: 5, page, category: categoryApi });

  React.useLayoutEffect(() => {
    dispatch(fetchItems());
  }, []);

  const onSetCategory = (el: string) => {
    el !== categories && setCategories(el);
    el !== "Вся одежда"
      ? setCategoryApi(el)
      : setCategoryApi(undefined);
  };

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <div className={s.content}>
          <div className={s.header}>
            <div className={s.categories}>
              {["Вся одежда", "Кроссовки", "Кофты", "Джинсы"].map(
                (el, index) => (
                  <h2
                    key={index}
                    className={categories === el ? s.selectedItem : s.item}
                    onClick={() => onSetCategory(el)}
                  >
                    {el}
                  </h2>
                )
              )}
            </div>
          </div>
          <div className={s.items}>
            {items?.map((el) => (
              <Card key={el.id} {...el} />
            ))}
          </div>
          <div>
            <p onClick={() => setPage(1)}>1</p>
            <p onClick={() => setPage(2)}>2</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
