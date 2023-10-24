// Products.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

const products = [
  {
    title: "საკვები",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/tvt1qtdilysc9ou9tpwj",
    link: "/categories/food",
  },
  {
    title: "სურსათი",
    img: "https://res.cloudinary.com/glovoapp/w_120,h_120,c_fit,e_trim,f_auto,q_auto:best/CategoryGroups/t8mg0jsyv6tp2v2s80le",
    link: "/categories/supermarket",
  },
  {
    title: "გლოვო მოლი",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/ysjmi6njm34kd7k8a14y",
    link: "/categories/glovo",
  },
  {
    title: "რაც გინდა",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/o2g7fmssjbb4cvpqu1jz",
    link: "/categories/what_you_want",
  },
  {
    title: "სასმელები",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/jh0211ctphv20i7sjxo1",
    link: "/categories/drinks",
  },
  {
    title: "აფთიაქები",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/g0d6wamwybbu8xoppxja",
    link: "/categories/delivery",
  },
  {
    title: "სწრაფი გზავნილი",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/rxwj3qz0vtqngpychvwi",
    link: "/categories/fast_delivery",
  },
  {
    title: "თრეველფაი",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/h7oczs0lo8w5zm7dzbye",
    link: "/categories/travel_fair",
  },
];

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.productsView}>
        {products.map((product, index) => (
          <div className={styles.product1} key={index}>
            <Link to={product.link}>
              <img src={product.img} alt={product.title} />
              <span>{product.title}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
