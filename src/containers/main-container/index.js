import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../css/responsive.css';
import '../../handlers';
import '../../components/header';
import '../../components/filter';
import '../../components/metapackage';

class MainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		content.id = 'container';
		const header = document.createElement('atg-header');
		const filter = document.createElement('main-filter');
		const metapackage = document.createElement('meta-package');
		content.append(header, filter, metapackage);
		return content;
	}
}

window.customElements.define('main-container', MainContainer);
