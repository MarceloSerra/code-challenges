const getRandomIndexBetween = (offset, limit) => {
	const newLimit = limit - offset;
	return Math.round(Math.random() * newLimit) + offset;
};

const getRandomValuesFromArray = (list, numberOfValuesToReturn) => {
	const listIndexLength = list.length - 1,
		data = [];

	let listIndexOffset = 0;

	while (true) {
		if (data.length === numberOfValuesToReturn) break;

		const index = getRandomIndexBetween(listIndexOffset, listIndexLength);

		const canUseIndex =
			listIndexLength - index + 1 >= numberOfValuesToReturn - data.length;

		if (!canUseIndex) continue;

		listIndexOffset = index + 1;
		const value = list[index];
		data.push(value);
	}

	return data;
};

const getCombinations = ({
	list,
	numberOfValuesToReturn,
	possibleCombinations,
}) => {
	const output = [];
	let i = 0;

	while (i < possibleCombinations) {
		const result = getRandomValuesFromArray(list, numberOfValuesToReturn);
		const stringfiedResult = result.join("");
		const outputContainsResult = output.find(
			(item) => item === stringfiedResult
		);

		if (!outputContainsResult) {
			output.push(stringfiedResult);
			i++;
		}
	}

	return output;
};

const formatCombinations = (combinations) => ({
	_template: (item) => `[${[...item]}]\n`,
	_format: function () {
		const sortedCombinations = combinations.sort();
		return Array.from(sortedCombinations, this._template).join("");
	},
	execute: function () {
		return this._format();
	},
});

const input = {
		list: [1, 2, 3, 4, 5],
		numberOfValuesToReturn: 3,
		possibleCombinations: 10,
	},
	combinations = getCombinations(input);

console.log(formatCombinations(combinations).execute());

/* 
Output:

[1,2,3]
[1,2,4]
[1,2,5]
[1,3,4]
[1,3,5]
[1,4,5]
[2,3,4]
[2,3,5]
[2,4,5]
[3,4,5]

*/
