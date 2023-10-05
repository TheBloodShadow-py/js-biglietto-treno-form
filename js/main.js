"use strict;";

const kmPirce = 0.21;
const under18Discount = 20 / 100;
const over65Discount = 40 / 100;
const euro = "&euro;";

const domName = document.getElementById("domName");
const domSurname = document.getElementById("domSurname");
const domAge = document.getElementById("domAge");
const domKm = document.getElementById("domKm");
const domBtn = document.getElementById("domBtn");
const domFinalPrice = document.getElementById("finalPrice");
const domFullName = document.getElementById("domFullName");
const domRandomTicketNumber = document.getElementById("randomTicketNumber");

domBtn.addEventListener("click", getPrice);

function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber) + 1;
}

function getPrice() {
  let name = domName.value;
  let surname = domSurname.value;
  let age = domAge.value;
  let km = domKm.value;
  domRandomTicketNumber.innerHTML = "AA" + randomNumber(9999);

  if (!age || !km || !name || !surname) {
    alert("Non puoi lasciare i campi vuoti o inserire del testo");
    return;
  }

  if (km <= 0) {
    alert("Non puoi inserire numeri inferiori a 0");
    return;
  }

  if (![0, 1, 2].includes(parseInt(age))) {
    alert("Non puoi modficare la select :/");
    return;
  }

  let ticketPrice = kmPirce * km;

  if ((age = 0)) {
    ticketPrice = km * kmPirce - km * kmPirce * under18Discount;
  } else if (age > 2) {
    ticketPrice = km * kmPirce - km * kmPirce * over65Discount;
  }

  domFinalPrice.innerHTML = ticketPrice.toFixed(2) + euro;
  domFullName.innerHTML = name + " " + surname;

  return;
}
