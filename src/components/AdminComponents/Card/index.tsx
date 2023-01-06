import {
  TableCellsIcon,
  TrashIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks/hook";
import { fetchItems } from "../../../redux/slices/ActionCreators";
import { deleteItem } from "../../../redux/slices/itemsSlice";
import s from "./Card.module.scss";

interface Card {
  img: string[];
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
}

const Card: React.FC<Card> = ({ img, id, price, title, category, description }) => {
  const [deleteMenuShow, setDeleteMenuShow] = React.useState(false);
  const [updateMenuShow, setUpdateMenuShow] = React.useState(false);

  const [newImg1, setNewImg1] = React.useState("");
  const [newImg2, setNewImg2] = React.useState("");
  const [newImg3, setNewImg3] = React.useState("");
  const [newImg4, setNewImg4] = React.useState("");
  const [newPrice, setNewPrice] = React.useState(0);
  const [newTitle, setNewTitle] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("Кроссовки");
  const [activeDescription, setActiveDescription] = React.useState('')

  React.useEffect(() => {
    setActiveCategory(category)
    setActiveDescription(description)
  }, [])

  const dispatch = useAppDispatch();

  const onDeleteClick = () => {
    axios.delete(`https://63625d277521369cd06ba3c2.mockapi.io/items/${id}`);
    setDeleteMenuShow(false);
    dispatch(deleteItem(id));
  };

  const onUpdateMenuClick = () => {
    axios.put(`https://63625d277521369cd06ba3c2.mockapi.io/items/${id}`, {
      title: !newTitle ? title : newTitle,
      img: [!newImg1 ? img[0] : newImg1, !newImg2 ? img[1] : newImg2, !newImg3 ? img[2] : newImg3, !newImg4 ? img[3] : newImg4],
      price: !newPrice ? price : newPrice,
      description: activeDescription,
      category: activeCategory

    });
    setUpdateMenuShow(false);
  };

  return (
    <div className={s.card}>
      <img src={img[0]} alt="изображение товара" />
      <h3>{title}</h3>
      <p>Цена: {price} руб</p>
      <div className={s.react}>
        <button onClick={() => setDeleteMenuShow(true)}>
          <TrashIcon width={20} />
        </button>
        <button onClick={() => setUpdateMenuShow(true)}>
          <WrenchScrewdriverIcon width={20} />
        </button>
      </div>
      {deleteMenuShow && (
        <div className={s.deleteMenu} onClick={() => setDeleteMenuShow(false)}>
          <div className={s.deleteBlock}>
            Вы действительно хотите удалить этот товар?
            <button onClick={onDeleteClick}>Да</button>
            <button onClick={() => setDeleteMenuShow(false)}>Нет</button>
          </div>
        </div>
      )}
      {updateMenuShow && (
        <div className={s.updateMenu}>
          <div className={s.updateBlock}>
            <h1>Редактировать товар</h1>
            <div className={s.content}>
              <div className={s.inputMenu}>
                <div className={s.input}>
                  <p>Введите новое название: </p>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div className={s.input}>
                  <p>Введите ссылки на изображения:</p>
                  <input
                    type="text"
                    value={newImg1}
                    onChange={(e) => setNewImg1(e.target.value)}
                  />
                  <input
                    type="text"
                    value={newImg2}
                    onChange={(e) => setNewImg2(e.target.value)}
                  />
                  <input
                    type="text"
                    value={newImg3}
                    onChange={(e) => setNewImg3(e.target.value)}
                  />
                  <input
                    type="text"
                    value={newImg4}
                    onChange={(e) => setNewImg4(e.target.value)}
                  />
                </div>
                <div className={s.input}>
                  <p>Введите новую цену:</p>
                  <input
                    type="text"
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                  />
                </div>
                <div className={s.input}>
              <p>Выберите категорию:</p>
              {["Кроссовки", "Кофты", "Джинсы"].map((el, index) => (
                <h2
                  key={index}
                  className={
                    activeCategory.toLowerCase() === el.toLowerCase()
                      ? s.selectedItem
                      : s.item
                  }
                  onClick={() => setActiveCategory(el.toLowerCase())}
                >
                  {el}
                </h2>
              ))}
            </div>
            <div className={s.input}>
              <p>Описание:</p>
              <textarea
                value={activeDescription}
                onChange={(e) => setActiveDescription(e.target.value)}
              />
            </div>
              </div>
              <div className={s.preview}>
                <h2>{!newTitle ? title : newTitle}</h2>
                <div>
                  <img className={s.previewImg} src={!newImg1 ? img[0] : newImg1} alt="" />
                  <div>
                    <img src={!newImg1 ? img[0] : newImg1} alt="" />
                    <img src={!newImg2 ? img[1] : newImg2} alt="" />
                    <img src={!newImg3 ? img[2] : newImg3} alt="" />
                    <img src={!newImg4 ? img[3] : newImg4} alt="" />
                  </div>
                  <p>Цена: {!newPrice ? price : newPrice}</p>
                  <p style={{"wordBreak": "break-all", "width": "400px"}}>Описание: {activeDescription}</p>
                </div>
              </div>
            </div>
            <div className={s.buttons}>
              <button onClick={onUpdateMenuClick}>Сохранить</button>
              <button onClick={() => setUpdateMenuShow(false)}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
