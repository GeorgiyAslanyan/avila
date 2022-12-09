import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Recomendations from "../../components/Recomendations";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hook";
import { addItem } from "../../redux/slices/cartSlice";
import s from "./Post.module.scss";

const Post = React.memo(() => {
  const [obj, setObj] = React.useState<any>();
  const [count, setCount] = React.useState(1);
  const [size, setSize] = React.useState(0);

  const [preview, setPreview] = React.useState(1);
  const dispatch = useAppDispatch();
  const {id} = useParams()
  const cartCount = useAppSelector(state => state.cart.count)
  

  React.useEffect(() => {
    axios
      .get("https://63625d277521369cd06ba3c2.mockapi.io/items/" + id)
      .then((res) => {
        setObj(res.data);
      });
  }, [id]);

  const rightPreview = () => {
    preview < 3 && setPreview(preview + 1);
  };

  const leftPreview = () => {
    preview > 0 && setPreview(preview - 1);
  };

  const onMinusClick = () => {
    count > 1 && setCount(count - 1);
  };

  const onAddClick = () => {
    dispatch(
      addItem({
        cartId: cartCount,
        id: obj.id,
        img: obj.img[0],
        title: obj.title,
        price: obj.price * count,
        size,
        count
      })
    );
  };

  return (
    <>
      {obj && (
        <div className={s.post}>
          <div className={s.preview}>
            <div className={s.arrow}>
              <ChevronRightIcon onClick={rightPreview} className={s.right} />
              <ChevronLeftIcon onClick={leftPreview} className={s.left} />
            </div>
            <img className={s.previewImg} src={obj.img[preview]} alt="" />
            <div className={s.galery}>
              {obj.img.map((el: string, index: number) => (
                <img key={index} src={el} onClick={() => setPreview(index)} />
              ))}
            </div>
          </div>
          <div className={s.menu}>
            <h1>{obj.title}</h1>
            <p>{obj.description}</p>
            <div className={s.sizes}>
              {["xs", "s", "m", "l", "xl", "xxl", "xxxl", "4xl"].map(
                (el, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(index)}
                    className={size === index ? s.buttonActive : s.button}
                  >
                    {el}
                  </button>
                )
              )}
            </div>
            <h2>{obj.price * count} руб.</h2>
            <div className={s.buyMenu}>
              <div className={s.input}>
                <div onClick={onMinusClick}>-</div>
                <div>{count}</div>
                <div onClick={() => setCount(count + 1)}>+</div>
              </div>
              <button onClick={onAddClick}>
                В корзину <ShoppingBagIcon />{" "}
              </button>
            </div>
          </div>
          <Recomendations category={obj.category}/>
        </div>
      )}
      <Footer />
    </>
  );
});

export default Post;
