import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class DatePicker extends MetaComponent {
	constructor() {
		super()
	}
	// Mandatory expect to return a String or HTMLElement
	render(){
		return `
			<div class="date-picker hide">
				<input type="text" placeholder="Select a date" readonly>
			</div>
		`
	}
	// Optional, here you can define the DOM Events
	addListeners() {
		const el = this.querySelectorAll('.date-picker > input');
		flatpickr(el, {
			disableMobile: true,
			altInput: true,
			onChange: function(selectedDates, dateStr, instance) {
				global.storage.dispatch({
					type: 'DATE-PICKER-CHANGE',
					value: dateStr
				})
			}
		});
	}
}

window.customElements.define('date-picker', DatePicker);