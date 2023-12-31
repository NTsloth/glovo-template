import React from "react";
import styles from "./More.module.css";

const More = () => {
  return (
    <div className={styles.more}>
      <div className={styles.moreAbout}>
        <div className={styles.moreLogo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="121"
            height="82"
            fill="none"
          >
            <path
              fill="#00A082"
              fillRule="evenodd"
              d="M53.184 80.004C77.8 73.779 105 61.57 105 37.928c0-23.641-22.687-30.813-46.144-35.116C35.398-1.49 16 21.981 16 45.63c0 23.647 12.567 40.594 37.184 34.375z"
              clipRule="evenodd"
            />
            <path
              fill="#fff"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.104"
              d="M95.573 36.315L77.834 18.576 50.158 46.252 67.897 63.99l27.676-27.675z"
            />
            <path
              fill="#fff"
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.104"
              d="M78.958 53.722l-2.456-2.456-8.778-8.779-10.63-10.63 3.462-4.107a7.483 7.483 0 00-8.859-1.29l-8.617-8.616-20.174 20.174 22.107 22.106L56.248 71.36l.08.08c1.41 1.33 3.624 1.289 4.953-.08 1.369-1.37 1.369-3.584.08-4.953l2.457 2.456c1.369 1.37 3.664 1.37 5.033 0 1.37-1.369 1.37-3.664 0-5.033 1.37 1.369 3.665 1.369 5.034 0 1.369-1.37 1.369-3.664 0-5.034 1.369 1.37 3.664 1.37 5.033 0a3.61 3.61 0 00.04-5.073z"
            />
            <path
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.104"
              d="M61.321 66.406l-7.006-7.007M69.053 63.99l-9.624-9.624M74.086 58.957l-9.624-9.624"
            />
            <path
              fill="#fff"
              d="M63.617 35.199l-3.625 3.624c-3.261 3.261-8.536 3.261-11.758 0l11.074-11.074c2.94-2.94 7.753-2.363 10.692.576"
            />
            <path
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.104"
              d="M63.617 35.199l-3.625 3.624c-3.261 3.261-8.536 3.261-11.758 0l11.074-11.074c2.94-2.94 7.753-2.363 10.692.576"
            />
            <path
              fill="#fff"
              stroke="#1A1A1A"
              strokeWidth="2.104"
              d="M49.724 70.513c-1.329-1.329-1.329-3.543 0-4.872l.322-.322c1.33-1.329 3.544-1.329 4.873 0 1.328 1.329 1.328 3.543 0 4.872l-.322.322c-1.33 1.33-3.544 1.33-4.873 0z"
            />
            <path
              fill="#fff"
              stroke="#1A1A1A"
              strokeWidth="2.104"
              d="M44.852 65.641c-1.329-1.329-1.329-3.543 0-4.872l.322-.322c1.329-1.329 3.544-1.329 4.873 0 1.328 1.329 1.328 3.543 0 4.872l-.323.322c-1.328 1.33-3.543 1.33-4.872 0zM35.107 55.896c-1.329-1.329-1.329-3.543 0-4.872l.322-.322c1.329-1.33 3.544-1.33 4.872 0 1.33 1.329 1.33 3.543 0 4.872l-.322.322c-1.369 1.329-3.543 1.329-4.872 0z"
            />
            <path
              fill="#fff"
              stroke="#1A1A1A"
              strokeWidth="2.104"
              d="M39.979 60.768c-1.329-1.329-1.329-3.543 0-4.872l1.53-1.53c1.329-1.33 3.544-1.33 4.873 0 1.328 1.329 1.328 3.543 0 4.872l-1.53 1.53c-1.33 1.33-3.544 1.33-4.873 0zM43.257 17.703L27.854 2.299 2 28.152l15.404 15.404 25.853-25.853zM103.675 44.551l15.404-15.404L93.226 3.294 77.822 18.698l25.853 25.853z"
            />
            <path
              stroke="#1A1A1A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.104"
              d="M53.319 13.814l-2.113-1.359M56.63 10.861l-1.165-2.276M60.972 9.87l.085-2.49M65.217 11.237l1.359-2.112M68.17 14.549l2.277-1.165"
            />
          </svg>
        </div>
        <h2>შემოგვიერთდით</h2>
      </div>
      <div className={styles.moreCategories}>
        <div className={styles.moreCategorie}>
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch//w_254,h_220,c_fit,f_auto,q_auto:best/dpr_auto/https://glovoapp.com/images/corporate/rider-image.png"
            alt=""
          />
          <h3>გახდი კურიერი</h3>
          <p>
            იყავი საკუთარი თავის უფროსი! ისარგებლე მოქნილი და თავისუფალი
            გრაფიკით Glovo-სთან ერთად.
          </p>
          <button className={styles.categoriesBtn}>შემოგვიერთდი</button>
        </div>
        <div className={styles.moreCategorie}>
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch//w_254,h_220,c_fit,f_auto,q_auto:best/dpr_auto/https://glovoapp.com/images/corporate/partners-image.png"
            alt=""
          />
          <h3>ვაკანსიები</h3>
          <p>
            მზად ხარ საინტერესო ახალი გამოწვევისთვის? თუ ხარ ამბიციური,
            მიზანდასახული, და გიყვარს სხვებთან მუშაობა, მაშინ გელოდებით!
          </p>
          <button className={styles.categoriesBtn}>შემოგვიერთდი</button>
        </div>
        <div className={styles.moreCategorie}>
          <img
            src="https://res.cloudinary.com/glovoapp/image/fetch//w_254,h_220,c_fit,f_auto,q_auto:best/dpr_auto/https://glovoapp.com/images/corporate/carrers-image.png"
            alt=""
          />
          <h3>გახდი კურიერი</h3>
          <p>
            იყავი საკუთარი თავის უფროსი! ისარგებლე მოქნილი და თავისუფალი
            გრაფიკით Glovo-სთან ერთად.
          </p>
          <button className={styles.categoriesBtn}>შემოგვიერთდი</button>
        </div>
      </div>
    </div>
  );
};

export default More;
