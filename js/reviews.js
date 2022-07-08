// console.log(document);
// console.log(document.querySelectorAll(".btn-change"));
// document.querySelector("#btn-green").addEventListener("click", () => {
//   console.log("rrr");
//   document.querySelector("#tt").style.color = "yellow";
// });

function hidden() {
  let img = document.querySelector("#services__img");
  let services = document.querySelector(".services__checkbox");
  let watchtime = document.querySelector(".watch__time");
  let discountcitytitle = document.querySelector(".discount__city-title");
  img.addEventListener("click", () => {
    services.classList.toggle("hidden");
    img.classList.toggle("rotate");
    watchtime.classList.toggle("hidden");
    discountcitytitle.classList.toggle("hidden");
  });
}
hidden();

function dots1() {
  let dots = document.querySelector(".reviews__dots");
  let more = document.querySelector(".reviews__more");
  let reviewsfulli = document.querySelector(".reviews__fulli");

  reviewsfulli.addEventListener("click", () => {
    dots.classList.toggle("hidden");
    more.classList.toggle("morem");
  });
}
dots1();



