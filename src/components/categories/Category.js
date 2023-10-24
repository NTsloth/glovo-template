import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Category.module.css";

const data = {
  food: {
    title: "საკვები",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/tvt1qtdilysc9ou9tpwj",
  },
  supermarket: {
    title: "სურსათი",
    img: "https://res.cloudinary.com/glovoapp/w_120,h_120,c_fit,e_trim,f_auto,q_auto:best/CategoryGroups/t8mg0jsyv6tp2v2s80le",
  },
  glovo: {
    title: "გლოვო მოლი",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/ysjmi6njm34kd7k8a14y",
  },
  what_you_want: {
    title: "რაც გინდა",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/o2g7fmssjbb4cvpqu1jz",
  },
  drinks: {
    title: "სასმელები",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/jh0211ctphv20i7sjxo1",
  },
  delivery: {
    title: "აფთიაქები",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/CategoryGroups/g0d6wamwybbu8xoppxja",
  },
  fast_delivery: {
    title: "სწრაფი გზავნილი",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/rxwj3qz0vtqngpychvwi",
  },
  travel_fair: {
    title: "თრეველფაი",
    img: "https://res.cloudinary.com/glovoapp/w_60,h_60,c_fit,f_auto,q_auto:best/StoreCategories/h7oczs0lo8w5zm7dzbye",
  },
};

const Category = (props) => {
  const category = useParams();

  return (
    <div className={styles.dummy}>
      <h1>{data[category.id].title}</h1>
      <img src={data[category.id].img} alt="საკვები" />
    </div>
  );
};

export default Category;
