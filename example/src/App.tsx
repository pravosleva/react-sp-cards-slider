import React, { Component } from "react";
import ReactSPCardsSlider from "react-sp-cards-slider";

export default class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: "1136px", margin: "0 auto" }}>
        <ReactSPCardsSlider
          title="Slider like SmartPrice"
          items={[
            {
              src: "https://smartprice.ru/static/img/smartprice/models/apple/iphone-xs-max/_.jpg",
              name: "iPhone Xs Max",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/apple/iphone-x/_.jpg",
              name: "iPhone X",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/apple/iphone-8-plus/_.jpg",
              name: "iPhone 8 Plus",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-fold/_.jpg",
              name: "Samsung Galaxy Fold",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-s10-plus/_.jpg",
              name: "Galaxy S10 plus",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/huawei/p30-pro/_.jpg",
              name: "Huawei P30 PRO",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-s20/_.jpg",
              name: "Samsung Galaxy S20",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-s10-lite/_.jpg",
              name: "Samsung Galaxy S10 lite",
            },
            {
              src: "https://smartprice.ru/static/img/smartprice/models/samsung/galaxy-note-10/_.jpg",
              name: "Samsung Galaxy Note 10",
            },
          ]}
          step={3}
          itemRenderer={(props) => {
            const { src, name } = props;
            return (
              <a style={{ display: "block", boxSizing: "border-box" }}>
                <div className="img-box">
                  <img src={src} alt={name} className="sp-preview" />
                  <div>{name}</div>
                </div>
              </a>
            );
          }}
          itemWidth={265}
          itemsPadding={23}
          mainWidthLimit={1136}
          breakpoints={{
            lg: 1350,
          }}
        />
      </div>
    );
  }
}
