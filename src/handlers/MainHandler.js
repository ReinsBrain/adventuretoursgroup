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
	}
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
