import React from "react";
import "./Home.css";
import { Product } from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
          title="Apple iPhone 11 (64GB) - (Product) RED"
          price={69900}
          rating={4}
          NofR="470 ratings | 578 answered questions"
        />
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
          title="Apple AirPods Pro"
          price={21349}
          rating={4}
          NofR="5,014 ratings | 1000+ answered questions"
        />
      </div>
      <div className="home__row">
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/71ALTosR9nL._SL1500_.jpg"
          title="Canon EOS 800D 24.2MP Digital SLR Camera"
          price={58999}
          rating={4}
          NofR="83 ratings | 161 answered questions"
        />
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/81DRhqE04BL._SL1500_.jpg"
          title="JBL Flip 3 Stealth Waterproof Bluetooth Speaker"
          price={5290}
          rating={4}
          NofR="7,968 ratings | 948 answered questions"
        />
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/71ZSpNjEl0L._SL1500_.jpg"
          title="Mi Smart Band 4- India's No.1 Fitness Band"
          price={2299}
          rating={4}
          NofR="48,458 ratings | 442 answered questions"
        />
      </div>

      <div className="home__row">
        <Product
          image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SL1500_.jpg"
          title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
          price={63999}
          rating={4}
          NofR="391 ratings | 223 answered questions"
        />
      </div>
    </div>
  );
};

export default Home;
