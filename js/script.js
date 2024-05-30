const shopIcon = document.getElementById("shopicon");
const userIcon = document.getElementById("usericon");
// this two icon will show when i click on the cross
const crossIcon = document.getElementById("crossbar");
const mobilemenubar = document.getElementById("mobile-menu");
const searchIcon = document.getElementById("search");
const mainlogo = document.getElementById("logo");
const searchbar = document.getElementById("searchbar");
const menuIcon = document.getElementById("menulogo");
const viewbtn = document.getElementById("buttonview");
const sellbtn = document.getElementById("buttonsell");
const topcards = document.getElementById("topcards");
const sellcards = document.getElementById("sellcards");

searchIcon.addEventListener("click", () => {
  searchbar.classList.remove("hidden");
  searchbar.style.marginLeft = "50px";
  searchbar.style.paddingRight = "20px";
  searchbar.classList.toggle("flex-row-reverse");
  mainlogo.classList.toggle("hidden");
  menulogo.classList.toggle("hidden");
  userIcon.classList.toggle("hidden");
  shopIcon.classList.toggle("hidden");
  searchIcon.classList.toggle("hidden");
  crossIcon.classList.remove("hidden");
});

// cross button work
crossIcon.addEventListener("click", () => {
  searchbar.classList.toggle("hidden");
  searchbar.classList.remove("flex-row-reverse");
  mainlogo.classList.remove("hidden");
  menulogo.classList.remove("hidden");
  userIcon.classList.remove("hidden");
  shopIcon.classList.remove("hidden");
  searchIcon.classList.remove("hidden");
  crossIcon.classList.toggle("hidden");
});

menuIcon.addEventListener("click", () => {
  if (mobilemenubar.classList.contains("hidden")) {
    mobilemenubar.classList.remove("hidden");
  } else {
    mobilemenubar.classList.toggle("hidden");
  }
});

viewbtn.addEventListener("click", () => {
  if (sellcards.classList.contains("flex-col")) {
    sellcards.classList.remove("flex-col");
    viewbtn.innerText = "View All";
  } else if (sellcards.offsetWidth <= 768) {
    sellcards.classList.toggle("flex-col");
    viewbtn.innerText = "View Less";
  }
});
sellbtn.addEventListener("click", () => {
  if (topcards.classList.contains("flex-col")) {
    topcards.classList.remove("flex-col");
    sellbtn.innerText = "View All";
  } else if (topcards.offsetWidth <= 768) {
    topcards.classList.toggle("flex-col");
    sellbtn.innerText = "View Less";
  }
});
