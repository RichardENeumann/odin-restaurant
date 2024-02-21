"use strict";

import "../style/main.css";
import loadHome from  "./inc-home.js";
import loadMenu from "./inc-menu.js";
import loadContact from "./inc-contact.js";

const display = document.getElementById("content");

const btHome = document.getElementById("home");
btHome.addEventListener("click", () => { loadHome(display); });

const btMenu = document.getElementById("menu");
btMenu.addEventListener("click", () => { loadMenu(display); });

const btContact = document.getElementById("contact");
btContact.addEventListener("click", () => { loadContact(display); });

loadHome(display);