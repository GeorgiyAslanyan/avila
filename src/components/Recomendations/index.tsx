import React from 'react'
import Card from '../Card';
import s from './Recomendations.module.scss'

const items = [
    {
      id: 0,
      img: "https://ae01.alicdn.com/kf/Uc483e0f143be41e496bf61f97e63f5dbl.jpg",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 1,
      img: "https://nike-off.ru/wp-content/uploads/2021/01/nike-air-Jordan-4-retro-bred-2019-release-308497_060-scaled.jpg",
      title: "Nike air jordan 4",
      price: 18000,
    },
    {
      id: 2,
      img: "https://cdn.tovargo.com/wp-content/uploads/2022/08/nike-man-all-ct2302-100_2424.png",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 3,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 4,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/gjyvetexafxuetf5gej7/air-max-plus-big-kids-shoe-4jCb46.png",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 5,
      img: "https://media.gq.com/photos/62fd35143f91baeb482811d2/master/w_1600%2Cc_limit/GQ0922_Nike_59.jpg",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 6,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/77680ab6-2bfe-418e-a52c-df85e96fb88a/air-huarache-shoes-Ts78zj.png",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 7,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/585f399c-2ae5-4e12-9a4e-df531c0de400/air-jordan-1-retro-high-og-boys-shoe-d4x7Jc.png",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 8,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/398b3bbb-a881-49c3-ae39-26e64d91566d/air-presto-x-hello-kitty-mens-shoes-Tp1Rx6.png",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
    {
      id: 9,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6eb27a3-b72f-4f2c-8741-1677e273a371/air-more-uptempo-96-shoes-444QJd.png",
      title: "Nike air trainer 1 sp",
      price: 12000,
    },
  ];

const Recomendations = () => {
  return (
    <div className={s.rec}>
        <h2>Рекомендации</h2>
        <div className={s.items}>
        {items.slice(0,4).map((el) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  )
}

export default Recomendations