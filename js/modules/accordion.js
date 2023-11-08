export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="acordion"] dt');
  const activeClass = "ativo";

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
  }
}
console.log("teste");
