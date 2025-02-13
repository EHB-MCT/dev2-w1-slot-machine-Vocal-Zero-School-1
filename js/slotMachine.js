export const slotMachine = {
	calculateStatus: function () {
		if (this.slots.length === this.slotsAmount && this.slots.every((symbol) => symbol === this.slots[0])) {
			this.win = true;
		} else {
			this.win = false;
		}
	},
	getRandomSymbol: function () {
		const randomIndex = Math.floor(Math.random() * this.symbols.length);
		return this.symbols[randomIndex];
	},
	reset: function () {
		this.slots = [];
		this.win = false;
	},
	symbols: ["♠", "♥", "♣", "♦"],
	slots: [],
	slotsAmount: 3,
	spin: function () {
		this.reset();
		for (let i = 0; i < this.slotsAmount; i++) {
			this.slots.push(this.getRandomSymbol());
		}
		this.calculateStatus();
		const resultElement = document.getElementById("result");
		resultElement.innerHTML = this.slots
			.map((symbol) => {
				const colorClass = symbol === "♥" || symbol === "♦" ? "red" : "black";
				return `<span class="${colorClass}">${symbol}</span>`;
			})
			.join(" ");
		document.getElementById("status").innerText = this.win ? "JE WINT 🎉💰" : "JE VERLIEST 😭🥺";
		return {
			slots: this.slots,
			win: this.win,
		};
	},
	win: false,
};
