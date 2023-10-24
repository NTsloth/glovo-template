import React from "react";
import styles from "./Yummy.module.css";

const Yummy = () => {
  return (
    <div className={styles.yummies}>
      <div className={styles.yummyIntro}>
        <div className={styles.yummyIcon}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_48,h_48,f_auto,q_auto:best/CX/new_backend_driven_home_screen/newUserRecommendationsWidgetIconDark"
            alt=""
          />
        </div>
        <h3>ობიექტები, რომლებიც შეიძლება მოგეწონოს</h3>
      </div>
      <div className={styles.yummyOffers}>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/ptrnlfusmtz6y01up1aq"
            alt=""
          />
          <span>ბურგერი</span>
          <div className={styles.yummyTitle}>
            <h3>McDonald's</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                94%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/gbl6jour6mr1ic3yltpi"
            alt=""
          />
          <span>შაურმა</span>
          <div className={styles.yummyTitle}>
            <h3>MacShaurma</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                95%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/o6kl1cs7ws92lbf6vpkk"
            alt=""
          />
          <span>შაურმა</span>
          <div className={styles.yummyTitle}>
            <h3>MARGE</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                94%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/vjhcilxifwnayw1vwslw"
            alt=""
          />
          <span>ჰოთ-დოგი</span>
          <div className={styles.yummyTitle}>
            <h3>Shaurma Club</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                97%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/t31kzonwj8fspp67nr90"
            alt=""
          />
          <span>პასტა</span>
          <div className={styles.yummyTitle}>
            <h3>Pizza Di Roma</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                96%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/vhbqdiumhoueap5kmnn6"
            alt=""
          />
          <span>ქართული</span>
          <div className={styles.yummyTitle}>
            <h3>Khinkali House</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                97%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/tfiy7uwamwgvftaht4do"
            alt=""
          />
          <span>აზიური</span>
          <div className={styles.yummyTitle}>
            <h3>Sushi24.ge</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                97%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/zrasjusikwmno8ppsuoc"
            alt=""
          />
          <span>ჰოთ-დოგი</span>
          <div className={styles.yummyTitle}>
            <h3>Bingo Shaurma</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                92%<p>(500+)</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.yummyIntro}>
        <div className={styles.yummyIcon}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_48,h_48,f_auto,q_auto:best/CX/new_backend_driven_home_screen/bestInCityLight"
            alt=""
          />
        </div>
        <h3>საუკეთესო ქალაქში — Tbilisi</h3>
      </div>
      <div className={styles.yummyOffers}>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/t0adagoqqxgy81vp8xlz"
            alt=""
          />
          <span>დესერტები</span>
          <div className={styles.yummyTitle}>
            <h3>Pizza Bruno</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                100%<p>(69)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/cj6dylkedjynjnx0mmmm"
            alt=""
          />
          <span>პასტა</span>
          <div className={styles.yummyTitle}>
            <h3>Darani</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                100%<p>(29)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/q1yjjbgkzcodcckmaxgk"
            alt=""
          />
          <span>საუზმე</span>
          <div className={styles.yummyTitle}>
            <h3>Living Vino</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                100%<p>(127)</p>
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.yummyOffer}>
          <img
            src="https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/a9eovhluk5vorsh8y2w6"
            alt=""
          />
          <span>ცხოველები</span>
          <div className={styles.yummyTitle}>
            <h3>4Pets</h3>
            <div className={styles.yummyIcons}>
              <img
                src="https://res.cloudinary.com/glovoapp/w_40,h_40,f_auto,q_auto/store_ratings/rating_good.png"
                alt=""
              />
              <h4>
                98%<p>(184)</p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yummy;
