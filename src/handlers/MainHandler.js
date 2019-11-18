/*
* DEFAULT HANDLER
*/

const MainDefaultState = {
	value: 1,
	filterValues: {
		departMonth: '',
		departDate:'',
		duration: '12 Days',
		pax: {
			addult: 1,
			children: 0,
			infant: 0
		}
	},
	tagCategories: [
		{
			title: 'Hotels',
			tags: ['suite', 'swimming pool', 'romance', 'internet access', 'luxury']
		},
		{
			title: 'Flights',
			tags: ['first class', 'round trip', 'multiple cities']
		},
		{
			title: 'Tours',
			tags: ['VIP', 'romance', 'adventure', 'beach', 'montain', 'jungle', 'tropico']
		},
	]
};

export default {
	MainDefaultState,
	MainHandler: {
		'INCREMENT': (action, state) => {
			state.Main.value += 1;
			return { newState: state };
		}
	}
};
