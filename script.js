// accessing rating card, submit button, rating, result & submit card
const ratingCard = document.querySelector("#ratingcard");
const rating = ratingcard.querySelectorAll(".rating");
const submit = ratingcard.querySelector(".submit");

const result = thankycard.querySelector("#result");
const submitCard = document.querySelector("#thankycard");

// Iterate through each rating button
rating.forEach((button) => {
	button.addEventListener("click", function setActiveBtn() {
		result.innerHTML = `You selected ${button.innerHTML} out of 5`;
	});
});

// added an event listener on submit button
submit.addEventListener("click", function submitRating() {
	ratingCard.classList.toggle("hidden");
	submitCard.classList.toggle("hidden");
});
