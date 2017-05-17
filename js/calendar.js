var calendar1 = document.querySelector(".booking-form__calendar--1");
var calendar2 = document.querySelector(".booking-form__calendar--2");
var calendar3 = document.querySelector(".booking-form__calendar--3");
var calendar4 = document.querySelector(".booking-form__calendar--4");


calendar1.querySelector(".next-arrow").addEventListener("click", function(e) {
  e.preventDefault();
  calendar1.classList.remove("booking-form__calendar--show");
  calendar2.classList.add("booking-form__calendar--show");
});

calendar2.querySelector(".prev-arrow").addEventListener("click", function(e) {
  e.preventDefault();
  calendar2.classList.remove("booking-form__calendar--show");
  calendar1.classList.add("booking-form__calendar--show");
});
calendar2.querySelector(".next-arrow").addEventListener("click", function(e) {
  e.preventDefault();
  calendar2.classList.remove("booking-form__calendar--show");
  calendar3.classList.add("booking-form__calendar--show");
});

calendar3.querySelector(".prev-arrow").addEventListener("click", function(e) {
  e.preventDefault();
  calendar3.classList.remove("booking-form__calendar--show");
  calendar2.classList.add("booking-form__calendar--show");
});
calendar3.querySelector(".next-arrow").addEventListener("click", function(e) {
  e.preventDefault();
  calendar3.classList.remove("booking-form__calendar--show");
  calendar4.classList.add("booking-form__calendar--show");
});

calendar4.querySelector(".prev-arrow").addEventListener("click", function(e) {
  e.preventDefault();
  calendar4.classList.remove("booking-form__calendar--show");
  calendar3.classList.add("booking-form__calendar--show");
});
