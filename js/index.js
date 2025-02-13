import { slotMachine } from "./slotMachine.js";

function init() {
	console.log("Init");
	// Log the document using console.log to test if you can get access to it
	console.log(document);

	// Log the submit button. If that works, store that button in a variable
	const submitButton = document.getElementById("button");
	console.log(submitButton);

	// Attach an event listener to that button and show a log "button clicked"
	if (submitButton) {
		submitButton.addEventListener("click", () => {
			console.log("button clicked");
			// If the submit button is clicked, the lever is pulled (= call that function)
			pullLever();
		});
	}
}

function pullLever() {
	// TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
	// Spin the slot machine
	const result = slotMachine.spin();
	if (result && result.slots && result.win !== undefined) {
		// Show slots and win status
		showSlots(result.slots);
		showGameResult(result.win);
	} else {
		console.error("Invalid result from slotMachine.spin()", result);
	}
}

function showSlots(slots) {
	// Show the slot symbols in HTML
	const slotsContainer = document.getElementById("result");
	if (slotsContainer) {
		slotsContainer.innerHTML = slots.join(" ");
	}
}
function showGameResult(win) {
	// Show a win or lose message in HTML
	const resultContainer = document.getElementById("status");
	if (resultContainer) {
		resultContainer.innerHTML = win ? "JE WINT 🎉💰" : "JE VERLIEST 😭🥺";
	}
}

init();
