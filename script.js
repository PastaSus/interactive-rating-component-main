"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".rating-card__form");

  const thankCard = document.querySelector(".thank-card");
  const ratingCard = document.querySelector(".rating-card");

  const selectedRating = document.querySelector("#selected-rating");
  const errorText = document.querySelector("#rating-error");

  // ✅ Form submission logic
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const rating = formData.get("rating");

    if (rating) {
      selectedRating.textContent = rating;
      ratingCard.style.display = "none";
      thankCard.style.display = "grid";
    } else if (!rating) {
      errorText.textContent = "Please select a rating.";
    }
  });
});
