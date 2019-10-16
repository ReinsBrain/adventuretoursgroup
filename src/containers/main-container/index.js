import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/header';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.id = 'container';
		const header = document.createElement('atg-header');
		content.appendChild(header);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);