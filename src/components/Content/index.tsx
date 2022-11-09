import React from "react";
import s from "./Content.module.scss";
import Card from "../Card";
import { useAppSelector } from "../../hook";


const Content = () => {
  const [categories, setCategories] = React.useState(0);
  const categoriesArr = ["Вся одежда", "Кроссовки", "Кофты", "Джинсы"];
  const items = useAppSelector(state => state.items.itemsArr)

  const onSetCategory = (index: number) => {
    index !== categories && setCategories(index)
  }

  return (
    <div className={s.content}>
      <div className={s.header}>
         <div className={s.categories}>
          {categoriesArr.map((el, index) => (
            <h2
              key={index}
              className={categories === index ? s.selectedItem : s.item}
              onClick={() => onSetCategory(index)}
            >
              {el}
            </h2>
          ))}
        </div>
      </div>
      <div className={s.items}>
        {items.map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Content;
