import { CircularProgress, Skeleton } from "@mui/material";
import React from "react";
import { useGetItemsQuery } from "../../redux/api/itemsApi";
import { useAppDispatch } from "../../redux/hooks/hook";
import { fetchItems } from "../../redux/slices/ActionCreators";
import Card from "../Card";
import s from "./Recomendations.module.scss";

interface Recomendations {
  category: string;
}

const Recomendations: React.FC<Recomendations> = ({ category }) => {
  const dispatch = useAppDispatch();
  const {
    data: items,
    error,
    isLoading,
  } = useGetItemsQuery({ limit: 4, category });

  React.useLayoutEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <>
      <div className={s.rec}>
        <h2>Рекомендации</h2>
        <div className={s.items}>
          {items && items.map((el) => <Card key={el.id} {...el} />)}
        </div>
      </div>
    </>
  );
};

export default Recomendations;