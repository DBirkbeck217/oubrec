function changeHeader() {
  if (window.innerWidth < 600) {
    document.getElementById("img").src =
      "./img/Oub-Rec-Amazon-Hoodie-Front.png";
  }
}

window.onresize = changeHeader();
