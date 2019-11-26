import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class PaxSelector extends MetaComponent {
	constructor() {
		super()
	}
	// Mandatory expect to return a String or HTMLElement
	render(){
		return `
			<div class="select-box">
				<input type="checkbox" id="options-view-button">
				<div id="select-button" class="brd">
					<div id="selected-value">
						<span id="pax-title">1 Adult</span>
						<div id="chevrons">
							<i class="fas fa-chevron-up"></i>
							<i class="fas fa-chevron-down"></i>
						</div>
					</div>
				</div>
				<div class="pax-opt" id="options">
					<div class="pax-item">
						<span> Adult </span>
						<div class="incrementer ad">
							<i class="fas fa-minus-circle"></i>
							<input type="text" value="1" disabled>
							<i class="fas fa-plus-circle"></i>
						</div>
					</div>
					<div class="pax-item">
						<span> Children </span>
						<div class="incrementer ch">
							<i class="fas fa-minus-circle"></i>
							<input type="text" value="0" disabled>
							<i class="fas fa-plus-circle"></i>
						</div>
					</div>
					<div class="pax-item">
						<span> Infant </span>
						<div class="incrementer in">
							<i class="fas fa-minus-circle"></i>
							<input type="text" value="0" disabled>
							<i class="fas fa-plus-circle"></i>
						</div>
					</div>
				</div>
			</div>
		`
	}
	// Optional, here you can define the DOM Events
	addListeners() {
		document.querySelectorAll('.pax-opt > .pax-item > .incrementer')
		.forEach((el, i) => {
			el.querySelectorAll('i').forEach(opt => {
				opt.addEventListener('click', () => {
					this.increment(opt, el, (i === 0) ? 1 : 0);
				})
			})
		})
	}
	/**
	 * handle the increment and decrement
	 * @param {HtmlElement} opt 
	 * @param {HtmlElement} el 
	 */
	increment(opt, el, min) {
		// find the word plus
		const f = opt.className.match(new RegExp(/\b(\w*plus\w*)\b/g))
		const input = el.querySelector('input');
		if (f !== null) {
			input.value = parseInt(input.value) + 1;
		} else {
			input.value = (parseInt(input.value) - 1) >= min
			? (parseInt(input.value) - 1)
			: min;
		}
		this.updateTitle();
	}

	updateTitle() {
		const ad = parseInt(document.querySelector('.incrementer.ad > input').value);
		const ch = parseInt(document.querySelector('.incrementer.ch > input').value);
		const inf = parseInt(document.querySelector('.incrementer.in > input').value);
		document.querySelector('#pax-title').innerHTML = 
		`${ad} Adult${(ch > 0) ? ', '+ ch +'Children' : ''}${(inf > 0) ? ', '+ inf +'Infant' : ''}`;
	}

}

window.customElements.define('pax-selector', PaxSelector);