import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class DayIncrementer extends MetaComponent {
	constructor() {
		super()
	}
	// eslint-disable-next-line class-method-use-this
	render(){
		return `
			<div class="depart-date">
				<label> Duration </label>
				<div>
					<i class="fas fa-chevron-up up"></i>
					<input type="text" value="12 Days" disabled/>
					<i class="fas fa-chevron-down"></i>
				</div>
			</div>
		`
	}

	// Optional, here you can define the DOM Events
	addListeners() {
		// DAY INCREMENTER
		document.querySelectorAll('.depart-date > div > i')
		.forEach(el => {
			el.addEventListener('click', () => {
				if (el.classList.contains('up')) {
					this.incrementDays(1);
				} else {
					this.incrementDays(-1);
				}
			})
		})
	}
	/**
	 * revice 1 or -1 to increment or decrement the amount of days
	 * @param {Integer} factor 
	 */
	incrementDays(factor) {
		const input = document.querySelector('.depart-date input');
		let prev = parseInt(input.value.split(' ')[0]);
		input.value = ((prev + factor) > 1 ? (prev + factor) : 1)
		  + ' '
		  + ((prev + factor) > 1 ? 'Days' : 'Day');
	}
}
// Define our new webcomponent
window.customElements.define('day-incrementer', DayIncrementer);