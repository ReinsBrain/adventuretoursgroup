import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class MetaPackage extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const MPList = this.storage.getState().Main.metaPackages;
		return `
			<div class="meta-body">
				${
					this.getMPColumns(MPList)
				}
			</div>
		`
	}
	/**
	 * create Metapackages columns
	 * @param {Array} MPList 
	 */
	getMPColumns(MPList) {
		return MPList.map(MP => {
			return `
				<div class="meta-column">
					<h3>${ MP.title }</h3>
					<div class='meta-amount'>
						<span>${ MP.amount }</span>
						<p>${ MP.arrive }</p>
						<i class="fas fa-long-arrow-alt-right"></i>
						<p>${ MP.depart }</p>
					</div>
					<div class="meta-background" style="background:url(${ MP.img })">
						<pretty-button type="danger" value="Book now"></pretty-button>
					</div>
					<div class="meta-items">
						${this.getItemsBox(MP.items)}
					</div>
				</div>
			`
		}).join('')
	}
	/**
	 * 
	 * @param {Array} items 
	 */
	getItemsBox (items) {
		console.log(items)
		return items.map(item => {
			return `
				<div class="meta-item">
					${item.icon ? `<pretty-tag icon="${item.icon}"></pretty-tag>` : ''}
					<pretty-collapse>
						<pretty-collapse-item ${item.isExpanded ? 'expanded' : ''} title="${item.title}">
							${item.items
								? this.getItemsBox(item.items)
								: `<i>${item.description}</i>`
							}
						</pretty-collapse-item>
					</pretty-collapse>
				</div>
			`
		}).join('');
	}

	handleStoreEvents() {
		return {
			//handle store events
		}
	}
}

window.customElements.define('meta-package', MetaPackage);