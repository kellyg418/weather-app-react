import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div class="container">
      <div class="weather-app-body">
        <div class="weather-app">
          <form id="search-form" class="mb-3">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  autofocus="on"
                  autocomplete="off"
                  id="city-input"
                  class="form-control"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <ul>
              <li class="city" id="city">
                Los Angeles
              </li>
              <li>
                <span id="date">March 14, 2023</span>
              </li>
              <li id="description">Sunny</li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                id="icon"
              />
              <strong class="current-temperature" id="temperature"></strong>
              <span class="units">
                <a href="#" class="celsius-unit" id="celsius-link">
                  20°C
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  Humidity: 50<span id="humidity"></span>%
                </li>
                <li>
                  Wind: 20 <span id="wind"></span> m/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <small>
        This application was coded by Kelly Granados and is
        <a href="https://github.com/kellyg418/my-weather-app" target="_blank">
          Open-sourced
        </a>
      </small>
    </div>
  );
}
