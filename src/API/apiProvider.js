class API {
	constructor() {
		this.baseUrl = `https://api.apilayer.com/exchangerates_data/`;
		this.currencySymbolsUrl = `symbols`;
		this.options = {
			method: "GET",
			redirect: "follow",
			headers: { apikey: "Hq57SF4XLLJOTeb2XLaj7vFMooMGdfqB" },
		};
	}

	getCurrencySymbols() {
		return this._fetch(this.options, `${this.currencySymbolsUrl}`);
	}
	_fetch(options, additionalPath = "") {
		const url = this.baseUrl + additionalPath;
		return fetch(url, options).then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			return Promise.reject(resp);
		});
	}
}

export default API;
