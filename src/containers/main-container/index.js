import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../css/responsive.css';
import '../../handlers';
import '../../components/header';
import '../../components/filter';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.id = 'container';
		const header = document.createElement('atg-header');
		const filter = document.createElement('main-filter');
		content.append(header, filter);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
