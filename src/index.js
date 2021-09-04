import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Gambar from "./assets/images/gambar1.jpg";
const quotes =
"Disaat payung teduh ku dengar , disitu lah tugastugas terbabat abis";
ReactDOM.render(
<React.StrictMode>
<App />
<CardList
name="Muhammad Ridwan"
nim="21120118120009"
kelompok="37"
isNameBold
image={Gambar}
/>
<Quotes author="Orang" quotes={quotes} />
</React.StrictMode>,
document.getElementById("root")
);