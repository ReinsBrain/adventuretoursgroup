# Adventure Tour Group

ATG Main Application

## Usage:

* install dependencies:
npm install

* start webpack-dev-server:
npm start

* build the application
npm run build


## Folder Structure
├── CNAME  
├── package.json  
├── package-lock.json  
├── public  
│   └── index.html  
├── README.md  
├── src  
│   ├── components  
│   │   └── header  
│   │       ├── index.css  
│   │       └── index.js  
│   ├── containers  
│   │   └── main-container  
│   │       └── index.js  
│   ├── css  
│   │   ├── general.css  
│   │   └── icons  
│   │       ├── clock-regular.svg  
│   │       ├── comment-alt-solid.svg  
│   │       ├── crown-solid.svg  
│   │       ├── facebook-square-brands.svg  
│   │       ├── instagram-brands.svg  
│   │       └── star-solid.svg  
│   ├── handlers  
│   │   ├── index.js  
│   │   └── MainHandler.js  
│   └── main  
│       └── index.js  
├── travis.provision.sh  
└── webpack.config.js  

## Components
```js
import { MetaComponent } from '@rebelstack-io/metaflux';
class ComponentName extends MetaComponent {
    constructor() {
        super(global.storage) // the storage parameter is optional
    }
    // Mandatory expect to return a String or HTMLElement
    render(){
        return `
            <BLOCK-OF-HTML>
        `
    }
    // Is mandatory only if the storage parameter is pass in the constructor
    // expect to return an object, here is where you listen the store changes
    handleStoreEvenets() {
        return {
            'MY-STORE-EVENT': () => {
                // do something
            }
        }
    }
    // Optional, here you can define the DOM Events
    addListeners() {
        document.querySelector('#myID')
        .addEventLister('click', () => {
            // do something
        })
    }
}
// Define our new webcomponent
window.customElements.define('component-name', ComponentName);
```
    our new webcompnent can be created as html
```html
<compnent-name></component-name>
```