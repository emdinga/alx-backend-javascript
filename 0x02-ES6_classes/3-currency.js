class Currency {
	constructor(code, name) {
		this.code = code;
		this.name = name;
	}

	/**
	 * @param {string} code
	 */
	set code(code) {
		if (typeof code !== 'string') {
			throw new TypeError('Code must be a String');
		}
		this._code = code;
	}

	get code() {
		return this._code;
	}

	/**
	 * @param {string} name
	 */

	set name(name) {
		if (tyoeof name !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = name;
	}

	get name() {
		return this._name;
	}

	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}

export default Currency;
