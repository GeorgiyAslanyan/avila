import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React from "react";
import Content from "../../components/Content";
import Recomendations from "../../components/Recomendations";
import s from "./Post.module.scss";

const Post = () => {
  const [obj, setObj] = React.useState<any>();
  const [count, setCount] = React.useState(1);
  const [preview, setPreview] = React.useState(1);
  const [size, setSize] = React.useState(1);

  React.useLayoutEffect(() => {
    axios
      .get("https://63625d277521369cd06ba3c2.mockapi.io/items/2")
      .then((res) => {
        setObj(res.data);
      });
  }, []);

  const rightPreview = () => {
    preview < 3 && setPreview(preview + 1);
  };

  const leftPreview = () => {
    preview > 0 && setPreview(preview - 1);
  };

  const onMinusClick = () => {
    count > 1 && setCount(count - 1);
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
            <img src={obj.img[preview]} alt="" />
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
              <button
                onClick={() => setSize(1)}
                className={size === 1 ? s.buttonActive : s.button}
              >
                11 US-45 EUR-29cm
              </button>
              <button
                onClick={() => setSize(2)}
                className={size === 2 ? s.buttonActive : s.button}
              >
                11 US-45 EUR-29cm
              </button>
              <button
                onClick={() => setSize(3)}
                className={size === 3 ? s.buttonActive : s.button}
              >
                11 US-45 EUR-29cm
              </button>
              <button
                onClick={() => setSize(4)}
                className={size === 4 ? s.buttonActive : s.button}
              >
                11 US-45 EUR-29cm
              </button>
            </div>
            <h2>{obj.price * count} руб.</h2>
            <div className={s.buyMenu}>
              <div className={s.input}>
                <div onClick={onMinusClick}>-</div>
                <div>{count}</div>
                <div onClick={() => setCount(count + 1)}>+</div>
              </div>
              <button>
                В корзину <ShoppingBagIcon />{" "}
              </button>
            </div>
          </div>
          <Recomendations />
        </div>
      )}
    </>
  );
};

export default Post;
