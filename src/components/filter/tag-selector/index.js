import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';
import '../../../handlers';

class TagSelector extends MetaComponent {
	constructor() {
		super(global.storage);
	}
	// eslint-disable-next-line
	render () {
		return global.storage.getState().Main.tagCategories.map(el => {
			return `
				<div class="category-box">
					<span>${el.title}</span>
					<div class="tags-box">
						${
							el.tags.map(t => {
								return `
								<pretty-tag value="${t}" class="selected" selectable>
								</pretty-tag>
								`
							}).join('')
						}
					</div>
				</div>
			`
		}).join('');
	}
	/**
	 * 
	 * @param {*} isSelected 
	 * @param {*} element 
	 */
	onSelect(isSelected, element) {
		console.log(isSelected, element);
	}
	handleStoreEvents() {
		return {

		}
	}

}

window.customElements.define('tag-selector', TagSelector);