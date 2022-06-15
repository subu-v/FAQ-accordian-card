const showAnswer = document.querySelectorAll(".show-answer");
const faqAnswer = document.querySelectorAll(".faq__answer");
const faqQuestion = document.querySelectorAll(".faq__question");

for (let i = 0; i < showAnswer.length; i++) {
  showAnswer[i].addEventListener("click", function () {
    faqAnswer[i].classList.toggle("hidden");
    showAnswer[i].classList.toggle("rotate--180deg");
    faqQuestion[i].classList.toggle("fw--700");
    faqQuestion[i].classList.toggle("color__blue--desaturated");
  });
}
