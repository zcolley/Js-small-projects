const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.closest(".single-question"));
    e.currentTarget.closest(".single-question").classList.toggle("show-text");
  });
});
