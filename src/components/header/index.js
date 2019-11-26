import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';
class Header extends MetaComponent {
	/**
	 * MetaComponent constructor
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		return `
		<div class="first init">
			<div class="moving-background init"></div>
			<div class="logo fadein">
				<picture> 
					<!-- <source media="(min-width: 650px)" srcset="other-img.jpg"> -->
					<img src="https://res.cloudinary.com/dlia7phdx/image/upload/v1564095577/ATG/atg-logo.png">
				</picture>
			</div>
			<div class="gradient fadein">
				<h1 class="btn-big" style="align-self: center">PLAN YOUR ADVENTURE</h1>
				<!--<button> Pick a date </button>-->
			</div>
		</div>
		`
	}

}

window.customElements.define('atg-header', Header);
