const deck1 = [{
	type: 'diamond',
	points: 0,
	price: { diamond: 0, sapphire: 2, emerald: 2, ruby: 0, onyx: 1 }
},
{
	type: 'diamond',
	points: 0,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 2, onyx: 1 }
},
{
	type: 'diamond',
	points: 0,
	price: { diamond: 0, sapphire: 1, emerald: 1, ruby: 1, onyx: 1 }
},
{
	type: 'diamond',
	points: 0,
	price: { diamond: 0, sapphire: 3, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'diamond',
	points: 0,
	price: { diamond: 0, sapphire: 2, emerald: 0, ruby: 0, onyx: 2 }
},
{
	type: 'diamond',
	points: 0,
	price: { diamond: 0, sapphire: 1, emerald: 2, ruby: 1, onyx: 1 }
},
{
	type: 'diamond',
	points: 0,
	price: { diamond: 3, sapphire: 1, emerald: 0, ruby: 0, onyx: 1 }
},
{
	type: 'diamond',
	points: 1,
	price: { diamond: 0, sapphire: 0, emerald: 4, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 0,
	price: { diamond: 2, sapphire: 1, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 0,
	price: { diamond: 0, sapphire: 2, emerald: 0, ruby: 2, onyx: 0 }
},
{
	type: 'emerald',
	points: 0,
	price: { diamond: 1, sapphire: 3, emerald: 1, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 0,
	price: { diamond: 1, sapphire: 1, emerald: 0, ruby: 1, onyx: 1 }
},
{
	type: 'emerald',
	points: 0,
	price: { diamond: 1, sapphire: 1, emerald: 0, ruby: 1, onyx: 2 }
},
{
	type: 'emerald',
	points: 0,
	price: { diamond: 0, sapphire: 1, emerald: 2, ruby: 0, onyx: 2 }
},
{
	type: 'emerald',
	points: 0,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 3, onyx: 0 }
},
{
	type: 'emerald',
	points: 1,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, onyx: 4 }
},
{
	type: 'sapphire',
	points: 0,
	price: { diamond: 1, sapphire: 0, emerald: 0, ruby: 0, onyx: 2 }
},
{
	type: 'sapphire',
	points: 0,
	price: { diamond: 1, sapphire: 0, emerald: 1, ruby: 2, onyx: 1 }
},
{
	type: 'sapphire',
	points: 0,
	price: { diamond: 1, sapphire: 0, emerald: 1, ruby: 1, onyx: 1 }
},
{
	type: 'sapphire',
	points: 0,
	price: { diamond: 0, sapphire: 1, emerald: 3, ruby: 1, onyx: 0 }
},
{
	type: 'sapphire',
	points: 0,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, onyx: 3 }
},
{
	type: 'sapphire',
	points: 0,
	price: { diamond: 1, sapphire: 0, emerald: 2, ruby: 2, onyx: 0 }
},
{
	type: 'sapphire',
	points: 0,
	price: { diamond: 0, sapphire: 0, emerald: 2, ruby: 0, onyx: 2 }
},
{
	type: 'sapphire',
	points: 1,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 4, onyx: 0 }
},
{
	type: 'ruby',
	points: 0,
	price: { diamond: 3, sapphire: 0, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'ruby',
	points: 0,
	price: { diamond: 1, sapphire: 0, emerald: 0, ruby: 1, onyx: 3 }
},
{
	type: 'ruby',
	points: 0,
	price: { diamond: 0, sapphire: 2, emerald: 1, ruby: 0, onyx: 0 }
},
{
	type: 'ruby',
	points: 0,
	price: { diamond: 2, sapphire: 0, emerald: 1, ruby: 0, onyx: 2 }
},
{
	type: 'ruby',
	points: 0,
	price: { diamond: 2, sapphire: 1, emerald: 1, ruby: 0, onyx: 1 }
},
{
	type: 'ruby',
	points: 0,
	price: { diamond: 1, sapphire: 1, emerald: 1, ruby: 0, onyx: 1 }
},
{
	type: 'ruby',
	points: 0,
	price: { diamond: 2, sapphire: 0, emerald: 0, ruby: 2, onyx: 0 }
},
{
	type: 'ruby',
	points: 1,
	price: { diamond: 4, sapphire: 0, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'onyx',
	points: 0,
	price: { diamond: 1, sapphire: 1, emerald: 1, ruby: 1, onyx: 0 }
},
{
	type: 'onyx',
	points: 0,
	price: { diamond: 0, sapphire: 0, emerald: 2, ruby: 1, onyx: 0 }
},
{
	type: 'onyx',
	points: 0,
	price: { diamond: 2, sapphire: 0, emerald: 2, ruby: 0, onyx: 0 }
},
{
	type: 'onyx',
	points: 0,
	price: { diamond: 0, sapphire: 0, emerald: 1, ruby: 3, onyx: 1 }
},
{
	type: 'onyx',
	points: 0,
	price: { diamond: 0, sapphire: 0, emerald: 3, ruby: 0, onyx: 0 }
},
{
	type: 'onyx',
	points: 0,
	price: { diamond: 1, sapphire: 2, emerald: 1, ruby: 1, onyx: 0 }
},
{
	type: 'onyx',
	points: 0,
	price: { diamond: 2, sapphire: 2, emerald: 0, ruby: 1, onyx: 0 }
},
{
	type: 'onyx',
	points: 1,
	price: { diamond: 0, sapphire: 4, emerald: 0, ruby: 0, onyx: 0 }
}];

const deck2 = [{
	type: 'diamond',
	points: 1,
	price: { diamond: 0, sapphire: 0, emerald: 3, ruby: 2, onyx: 2 }
},
{
	type: 'diamond',
	points: 1,
	price: { diamond: 2, sapphire: 3, emerald: 0, ruby: 3, onyx: 0 }
},
{
	type: 'diamond',
	points: 2,
	price: { diamond: 0, sapphire: 0, emerald: 1, ruby: 4, onyx: 2 }
},
{
	type: 'diamond',
	points: 2,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 5, onyx: 0 }
},
{
	type: 'diamond',
	points: 2,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 5, onyx: 3 }
},
{
	type: 'diamond',
	points: 3,
	price: { diamond: 6, sapphire: 0, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 1,
	price: { diamond: 3, sapphire: 0, emerald: 2, ruby: 3, onyx: 0 }
},
{
	type: 'emerald',
	points: 1,
	price: { diamond: 2, sapphire: 3, emerald: 0, ruby: 0, onyx: 2 }
},
{
	type: 'emerald',
	points: 2,
	price: { diamond: 4, sapphire: 2, emerald: 0, ruby: 0, onyx: 1 }
},
{
	type: 'emerald',
	points: 2,
	price: { diamond: 0, sapphire: 0, emerald: 5, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 2,
	price: { diamond: 0, sapphire: 5, emerald: 3, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 3,
	price: { diamond: 0, sapphire: 0, emerald: 6, ruby: 0, onyx: 0 }
},
{
	type: 'sapphire',
	points: 1,
	price: { diamond: 0, sapphire: 2, emerald: 2, ruby: 3, onyx: 0 }
},
{
	type: 'sapphire',
	points: 1,
	price: { diamond: 0, sapphire: 2, emerald: 3, ruby: 0, onyx: 3 }
},
{
	type: 'sapphire',
	points: 2,
	price: { diamond: 5, sapphire: 3, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'sapphire',
	points: 2,
	price: { diamond: 0, sapphire: 5, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'sapphire',
	points: 2,
	price: { diamond: 2, sapphire: 0, emerald: 0, ruby: 1, onyx: 4 }
},
{
	type: 'sapphire',
	points: 3,
	price: { diamond: 0, sapphire: 6, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'ruby',
	points: 1,
	price: { diamond: 0, sapphire: 3, emerald: 0, ruby: 2, onyx: 3 }
},
{
	type: 'ruby',
	points: 1,
	price: { diamond: 2, sapphire: 0, emerald: 0, ruby: 2, onyx: 3 }
},
{
	type: 'ruby',
	points: 2,
	price: { diamond: 1, sapphire: 4, emerald: 2, ruby: 0, onyx: 0 }
},
{
	type: 'ruby',
	points: 2,
	price: { diamond: 3, sapphire: 0, emerald: 0, ruby: 0, onyx: 5 }
},
{
	type: 'ruby',
	points: 2,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, onyx: 5 }
},
{
	type: 'ruby',
	points: 3,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 6, onyx: 0 }
},
{
	type: 'onyx',
	points: 1,
	price: { diamond: 3, sapphire: 2, emerald: 2, ruby: 0, onyx: 0 }
},
{
	type: 'onyx',
	points: 1,
	price: { diamond: 3, sapphire: 0, emerald: 3, ruby: 0, onyx: 2 }
},
{
	type: 'onyx',
	points: 2,
	price: { diamond: 0, sapphire: 1, emerald: 4, ruby: 2, onyx: 0 }
},
{
	type: 'onyx',
	points: 2,
	price: { diamond: 5, sapphire: 0, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'onyx',
	points: 2,
	price: { diamond: 0, sapphire: 0, emerald: 5, ruby: 3, onyx: 0 }
},
{
	type: 'onyx',
	points: 3,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, onyx: 6 }
}];

const deck3 = [{
	type: 'diamond',
	points: 3,
	price: { diamond: 0, sapphire: 3, emerald: 3, ruby: 5, onyx: 3 }
},
{
	type: 'diamond',
	points: 4,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 0, onyx: 7 }
},
{
	type: 'diamond',
	points: 4,
	price: { diamond: 3, sapphire: 0, emerald: 0, ruby: 3, onyx: 6 }
},
{
	type: 'diamond',
	points: 5,
	price: { diamond: 3, sapphire: 0, emerald: 0, ruby: 0, onyx: 7 }
},
{
	type: 'emerald',
	points: 3,
	price: { diamond: 5, sapphire: 3, emerald: 0, ruby: 3, onyx: 3 }
},
{
	type: 'emerald',
	points: 4,
	price: { diamond: 3, sapphire: 6, emerald: 3, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 4,
	price: { diamond: 0, sapphire: 7, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'emerald',
	points: 5,
	price: { diamond: 0, sapphire: 7, emerald: 3, ruby: 0, onyx: 0 }
},
{
	type: 'sapphire',
	points: 3,
	price: { diamond: 3, sapphire: 0, emerald: 3, ruby: 3, onyx: 5 }
},
{
	type: 'sapphire',
	points: 4,
	price: { diamond: 7, sapphire: 0, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'sapphire',
	points: 4,
	price: { diamond: 6, sapphire: 3, emerald: 0, ruby: 0, onyx: 3 }
},
{
	type: 'sapphire',
	points: 5,
	price: { diamond: 7, sapphire: 3, emerald: 0, ruby: 0, onyx: 0 }
},
{
	type: 'ruby',
	points: 3,
	price: { diamond: 3, sapphire: 5, emerald: 3, ruby: 0, onyx: 3 }
},
{
	type: 'ruby',
	points: 4,
	price: { diamond: 0, sapphire: 0, emerald: 7, ruby: 0, onyx: 0 }
},
{
	type: 'ruby',
	points: 4,
	price: { diamond: 0, sapphire: 3, emerald: 6, ruby: 3, onyx: 0 }
},
{
	type: 'ruby',
	points: 5,
	price: { diamond: 0, sapphire: 0, emerald: 7, ruby: 3, onyx: 0 }
},
{
	type: 'onyx',
	points: 3,
	price: { diamond: 3, sapphire: 3, emerald: 5, ruby: 3, onyx: 0 }
},
{
	type: 'onyx',
	points: 4,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 7, onyx: 0 }
},
{
	type: 'onyx',
	points: 4,
	price: { diamond: 0, sapphire: 0, emerald: 3, ruby: 6, onyx: 3 }
},
{
	type: 'onyx',
	points: 5,
	price: { diamond: 0, sapphire: 0, emerald: 0, ruby: 7, onyx: 3 }
}];

module.exports = {
	deck1,
	deck2,
	deck3
};