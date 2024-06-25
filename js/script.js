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
const shopbtn = document.getElementById("shopbtn");
const dropdown = document.getElementById("dropdown");
const mensbtn = document.getElementById("mensbtn");
const menitem = document.getElementById("menitems");
const mobileshopbtn = document.getElementById("mobileshopbtn");
const mobiledropdown = document.getElementById("mobiledropdown");
const mobilemensbtn = document.getElementById("mobilemensbtn");
const mobilemenitem = document.getElementById("mobilemenitems");
const filterbtn = document.getElementById("filterbtn");
const filtermenu = document.getElementById("filtermenu");
const filterx = document.getElementById("filterx");
const pagelink = document.getElementById("page-link");
const horizontalLine = document.getElementById("horizontal-line");

mobileshopbtn.addEventListener("click", () => {
  if (mobiledropdown.classList.contains("hidden")) {
    mobiledropdown.classList.remove("hidden");
  } else {
    mobiledropdown.classList.toggle("hidden");
  }
});
mobilemensbtn.addEventListener("click", () => {
  if (mobilemenitem.classList.contains("hidden")) {
    mobilemenitem.classList.remove("hidden");
  } else {
    mobilemenitem.classList.toggle("hidden");
  }
});
shopbtn.addEventListener("click", () => {
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.toggle("hidden");
  }
});
mensbtn.addEventListener("click", () => {
  if (menitem.classList.contains("hidden")) {
    menitem.classList.remove("hidden");
  } else {
    menitem.classList.toggle("hidden");
  }
});

searchIcon.addEventListener("click", () => {
  searchbar.classList.remove("hidden");
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

// =========================================Filter=========================================

filterbtn.addEventListener("click", () => {
  horizontalLine.classList.toggle("hidden");
  pagelink.classList.toggle("hidden");
  if (filtermenu.classList.contains("hidden")) {
    filtermenu.classList.remove("hidden");
  } else {
    filtermenu.classList.toggle("hidden");
  }
});

filterx.addEventListener("click", () => {
  filtermenu.classList.toggle("hidden");
  horizontalLine.classList.remove("hidden");

  pagelink.classList.remove("hidden");
});
