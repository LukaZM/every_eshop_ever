import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ProductImpl } from './Models/ProductImpl';
import { StoreImpl } from './Models/StoreImpl';
import { CategoryImpl } from './Models/CategoryImpl';


const ourStore = new StoreImpl(
  [new CategoryImpl(
    "computers",
    [
        new ProductImpl(
          "Lenovo IdeaPad S540-15IML Abyss Blue kovový",
          "https://cdn.alza.cz/Foto/f9/NT/NT356w9l0.jpg",
          "Notebook - Intel Core i5 10210U Comet Lake, 15.6 IPS antireflexní 1920 × 1080, RAM 8GB DDR4, Intel UHD Graphics, SSD 256GB, numerická klávesnice, podsvícená klávesnice, webkamera, USB 3.2 Gen 1, USB-C, čtečka otisků prstů, WiFi 802.11ac, 4článková baterie 70 Wh, Windows 10 Home"
        )
    ]
  ),
  new CategoryImpl(
    "lawnmawer",
    [
        new ProductImpl(
          "BOSCH EasyGrassCut 23",
          "https://cdn.alza.cz/Foto/f9/BO/BOFAC9w3.jpg",
          "Strunová sekačka s elektrickým pohonem, 280 W, záběr 230 mm, žací systém - struna, hmotnost 1,9 kg"
        ),
        new ProductImpl(
          "Gardena SmallCut Li-23R",
          "https://cdn.alza.cz/Foto/f9/GA/GARD067.jpg",
          "Strunová sekačka s akumulátorovým pohonem, 2 Ah, počet akumulátorů 1, záběr 230 mm, žací systém - nůž, hmotnost 1,7 kg"
        ),
    ]
  )
]
)


ReactDOM.render(
  <React.StrictMode>
    <App store={ourStore} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
