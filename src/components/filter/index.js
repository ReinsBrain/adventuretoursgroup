import { MetaComponent } from '@rebelstack-io/metaflux';
import './depart-select';
import './index.css';

class Filter extends MetaComponent {
	constructor() {
		super(global.storage)
	}
	// eslint-disable-next-line class-method-use-this
	render(){
		return `
			<div>
				<div class="departs">
					<div id="dropdown-target" class="depart-type">
						<i class="fas fa-angle-down"></i>
						<span>Depart Month</span> 
					</div>
					<pretty-dropdown target="dropdown-target">
						<div class="p-menu-item">
							Depart month
						</div>
						<div class="p-menu-devider"></div>
						<div class="p-menu-item">
							Depart day
						</div>
					</pretty-dropdown>
					<depart-select></depart-select>
				</div>
				<div class="depart-date">
					<i class="fas fa-chevron-up"></i>
					<input type="text" value="12 Days"/>
					<i class="fas fa-chevron-down"></i>
				<div>
				<div class="pax">
					<pax-selector></pax-selector>
				</div>
			</div>
		`
	}
	// Is mandatory only if the storage parameter is pass in the constructor
	// expect to return an object, here is where you listen the store changes
	handleStoreEvents() {
		return {
			
		}
	}
	// Optional, here you can define the DOM Events
	addListeners() {
		this.querySelectorAll('.p-menu-item').forEach(el => {
			el.addEventListener('click', () => {
				this.querySelector('.depart-type > span').innerHTML = el.innerHTML;
				this.querySelector('.depart-menu').classList.toggle('hidden');
			})
		});
	}
}
// Define our new webcomponent
window.customElements.define('main-filter', Filter);