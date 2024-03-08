// Accessing the share button, share box, and share icon image
const shareButton = document.querySelector(".share-icon");
const shareBox = document.querySelector(".sharebox");
const shareIconImage = document.querySelector(".share-icon img");

// Added a click event listener to the share button
shareButton.addEventListener("click", function toggleShare() {
	shareBox.classList.toggle("hide-it");
	shareButton.classList.toggle("active");
	shareIconImage.classList.toggle("active-arrow");
});