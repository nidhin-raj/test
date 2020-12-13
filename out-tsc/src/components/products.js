import { __decorate } from "tslib";
import { LitElement, html, css, customElement, property } from 'lit-element';
import { fetchProducts } from '../shared/warehouse.services';
import './product';
let Products = class Products extends LitElement {
    constructor() {
        super(...arguments);
        this.products = [];
        this.isLoading = true;
    }
    static get styles() {
        return css `
      :host {
        width: 50%;
      }
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        fetchProducts()
            .then(data => {
            this.isLoading = false;
            this.products = data;
            console.log('Success:', data);
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }
    render() {
        return html ` ${this.isLoading
            ? html `<p>Loading....</p>`
            : html `<div>
            ${this.products.map((product) => html `<app-product .product="${product}"></app-product>`)}
          </div>`} </div>`;
    }
};
__decorate([
    property({ type: Array })
], Products.prototype, "products", void 0);
__decorate([
    property({ type: Boolean })
], Products.prototype, "isLoading", void 0);
Products = __decorate([
    customElement('app-products')
], Products);
export { Products };
//# sourceMappingURL=products.js.map