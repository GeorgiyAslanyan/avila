import axios from "axios";
import React from "react";
import s from "./AdminCreate.module.scss";
import background from "../../../assets/background.png";

const AdminCreate = () => {
  const [img1, setImg1] = React.useState("");
  const [img2, setImg2] = React.useState("");
  const [img3, setImg3] = React.useState("");
  const [img4, setImg4] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("Кроссовки");
  const [description, setDescription] = React.useState('')

  const onUpdateMenuClick = () => {
    axios.post(`https://63625d277521369cd06ba3c2.mockapi.io/items`, {
      title,
      img: [img1, img2, img3, img4],
      price,
      category: activeCategory,
      description
    });
  };

  return (
    <div className={s.updateMenu}>
      <div className={s.updateBlock}>
        <h1>Редактировать товар</h1>
        <div className={s.content}>
          <div className={s.inputMenu}>
            <div className={s.input}>
              <p>Введите новое название: </p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={s.input}>
              <p>Введите ссылки на изображения:</p>
              <input
                type="text"
                value={img1}
                onChange={(e) => setImg1(e.target.value)}
              />
              <input
                type="text"
                value={img2}
                onChange={(e) => setImg2(e.target.value)}
              />
              <input
                type="text"
                value={img3}
                onChange={(e) => setImg3(e.target.value)}
              />
              <input
                type="text"
                value={img4}
                onChange={(e) => setImg4(e.target.value)}
              />
            </div>
            <div className={s.input}>
              <p>Цена:</p>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className={s.preview}>
            <h2>{!title ? "Название" : title}</h2>
            <div>
              <img
                className={s.mainPreviewImg}
                src={!img1 ? background : img1}
                alt=""
              />
              <div>
              <img
                className={s.previewImg}
                src={!img1 ? background : img1}
                alt=""
              />
                <img
                  className={s.previewImg}
                  src={!img2 ? background : img2}
                  alt=""
                />
                <img
                  className={s.previewImg}
                  src={!img3 ? background : img3}
                  alt=""
                />
                <img
                  className={s.previewImg}
                  src={!img4 ? background : img4}
                  alt=""
                />
              </div>
              <p>Цена: {price} руб.</p>
              <p style={{"wordBreak": "break-all", "width": "80%"}}>Описание: {description}</p>
            </div>
          </div>
        </div>
        <div className={s.buttons}>
          <button onClick={onUpdateMenuClick}>Добавить товар</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCreate;
