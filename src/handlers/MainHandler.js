/*
* DEFAULT HANDLER
*/

Date.prototype.addDays = function(days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

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
	metaPackages: [
		{ 
			title: 'Lima Deluxe',
			arrive: new Date().toLocaleString().split(',')[0],
			depart: new Date().addDays(12).toLocaleString().split(',')[0],
			img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/06/71/13/86.jpg',
			amount: 'USD 3,199.99',
			items: [
				{
					icon: 'fas fa-plane-departure',
					title: 'Flight fom NYC to LIM',
					description: '03:00PM JFK 06:45AM LIM 04:45 PM LIM 1 05:35 AM JFK'
				},
				{
					icon: 'fas fa-taxi',
					title: 'English speaking airport pickup'
				},
				{
					icon: 'fab fa-airbnb',
					title: 'Miraflores premiere rooms',
					description: 'Beautiful and spacious rooms with fine finishes, with air conditioning, swimming pool, wifi, cable TV'
				},
				{
					title: 'CITY TOUR - HUACAS DE LIMA',
					items: [
						{
							icon: 'fas fa-route',
							title: 'Huaca Huallamarca. & Huaca Pucllana',
							description: '8:30am 1:30-english speaking guide-Pick up and return to the hotel by tourist transport.'
						}, {
							icon: 'fas fa-utensils',
							title: 'Lima Ultimate Peruvian Food Tour',
							description: 'Discover one of Lima’s most interesting neighborhood – artsy and bohemian Barranco and sample more than 15 Peruvian foods and drinks. Meet with our local hosts to learn how to prepare the famous ceviche and pisco sour during these two interactive workshops. Attend the preparation of your lomo saltado, inside the kitchens of the restaurant. Learn the history and culture behind each dish that you will have the chance to taste during this 4-hour walking food tour of Barranco.'
						}
					]
				}
			]
		}
	],
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
