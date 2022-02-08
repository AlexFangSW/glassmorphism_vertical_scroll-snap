let button = document.querySelectorAll(".buttons button");
let front_end = document.querySelectorAll(".front-end");
let ai_nlp = document.querySelectorAll(".ai-nlp");
//Button Front-end
button[0].addEventListener("click", () => {
  button[0].classList.add("active");
  button[1].classList.remove("active");
  //display
  front_end[0].classList.add("active");
  front_end[1].classList.add("active");
  ai_nlp[0].classList.remove("active");
  ai_nlp[1].classList.remove("active");
});
//Button AI (NLP)
button[1].addEventListener("click", () => {
  button[1].classList.add("active");
  button[0].classList.remove("active");
  //display
  front_end[0].classList.remove("active");
  front_end[1].classList.remove("active");
  ai_nlp[0].classList.add("active");
  ai_nlp[1].classList.add("active");
});
// Detect if scrolled to bottom.
let container = document.querySelector(".container");
container.addEventListener("scroll", () => {
  //當影藏的 + 看的到的 == 全長。 代表到底了
  let distence =
    container.scrollTop + container.clientHeight - container.scrollHeight;
  if (distence <= 10 && distence >= -10) {
    document.querySelector(".floating-arrow").style.opacity = "0";
  } else {
    document.querySelector(".floating-arrow").style.opacity = "1";
  }
});
