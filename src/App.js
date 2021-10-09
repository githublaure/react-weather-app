import React from "react";
import "./App.css";
import Weather from "./Weather.js";
export default function App() {
  return (
    <div className="App">
      {" "}
      <div className="container"></div>
      <h1>Weather App</h1>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/githublaure/" target="_blank">
          Laure Agrech
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/githublaure/react-weather-app-laure"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
