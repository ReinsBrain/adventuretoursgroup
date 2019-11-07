import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class DepartSelect extends MetaComponent {
	constructor() {
		super(global.storage) // the storage parameter is optional
	}
	// Mandatory expect to return a String or HTMLElement
	render(){
		return `
			<div class="select-box">
				<input type="checkbox" id="options-view-button">
				<div id="select-button" class="brd">
					<div id="selected-value">
						<span>Select a month</span>
						<div id="chevrons">
							<i class="fas fa-chevron-up"></i>
							<i class="fas fa-chevron-down"></i>
						</div>
					</div>
				</div>
				<div id="options">
					<div>
						<span> Feb 2020 </span>
					</div>
					<div>
						<span> Mar 2020 </span>
						<i class="fas fa-star"></i>
					</div>
					<div>
						<span> Apr 2020 </span>
					</div>
				</div>
			</div>
		`
	}
	// Is mandatory only if the storage parameter is pass in the constructor
	// expect to return an object, here is where you listen the store changes
	handleStoreEvents() {
		return {
			'MY-STORE-EVENT': () => {
				// do something
			}
		}
	}
	// Optional, here you can define the DOM Events
	addListeners() {
		document.querySelectorAll('#options > *')
		.forEach(el => {
			el.addEventListener('click', () => {
				document.querySelector('#selected-value > span').innerHTML = 
				el.querySelector('span').innerHTML;
				document.querySelector('#options-view-button').checked = false;
			})
		})
	}
}

window.customElements.define('depart-select', DepartSelect);