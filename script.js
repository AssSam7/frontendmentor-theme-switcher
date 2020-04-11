const toggleSwitch = document.querySelector("#switch");

// DOM Elements
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const profileCards = document.querySelectorAll(".profile__card");

const headerTitle = document.querySelector(".header__head > h1");
const headerText = document.querySelector(".header__head > h3");
const handleNames = document.querySelectorAll(".card__top > h4");
const detailCounts = document.querySelectorAll(".details > .count");
const detailFollowers = document.querySelectorAll(".details > h3");
const overviewTitle = document.querySelector(".overview > h2");
const overviewCardTitle = document.querySelectorAll(".left > h3");
const overviewCounts = document.querySelectorAll(".left > h1");

// Toggling between checked and unchecked events
toggleSwitch.addEventListener("click", (event) => {
  if (toggleSwitch.checked) {
    body.classList.add("bodyToggle");
    headerTitle.classList.add("headerTitleToggle");
    headerText.classList.add("headerTextToggle");
    cards.forEach((card) => {
      card.classList.add("cardToggle");
    });
    handleNames.forEach((name) => {
      name.classList.add("handleNameToggle");
    });
    detailCounts.forEach((count) => {
      count.classList.add("detailCountToggle");
    });
    detailFollowers.forEach((follower) => {
      follower.classList.add("detailFollowersToggle");
    });
    profileCards.forEach((card) => {
      card.classList.add("cardToggle");
    });
    overviewCardTitle.forEach((cardTitle) => {
      cardTitle.classList.add("overviewCardTitle");
    });
    overviewCounts.forEach((count) => {
      count.classList.add("overviewCountToggle");
    });
  } else {
    body.classList.remove("bodyToggle");
    headerTitle.classList.remove("headerTitleToggle");
    headerText.classList.remove("headerTextToggle");
    cards.forEach((card) => {
      card.classList.remove("cardToggle");
    });
    handleNames.forEach((name) => {
      name.classList.add("handleNameToggle");
    });
    detailCounts.forEach((count) => {
      count.classList.remove("detailCountToggle");
    });
    detailFollowers.forEach((follower) => {
      follower.classList.remove("detailFollowersToggle");
    });
    profileCards.forEach((card) => {
      card.classList.remove("cardToggle");
    });
    overviewCardTitle.forEach((cardTitle) => {
      cardTitle.classList.remove("overviewCardTitle");
    });
    overviewCounts.forEach((count) => {
      count.classList.remove("overviewCountToggle");
    });
  }
});
