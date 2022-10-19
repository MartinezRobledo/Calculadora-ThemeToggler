const toggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
toggleBtn.addEventListener("click", ()=>{
    calculator.classList.toggle("dark");
    toggleBtn.classList.toggle("active");
});