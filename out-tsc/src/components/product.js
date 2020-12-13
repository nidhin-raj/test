import { __decorate } from "tslib";
import { LitElement, html, css, customElement, property } from 'lit-element';
let Products = class Products extends LitElement {
    constructor() {
        super();
        this.product = {};
    }
    static get styles() {
        return css `
      :host {
        display: flex;
        flex-direction: column;
      }
      .product {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .articles-group {
        display: flex;
        flex-direction: column;
      }
      .article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `;
    }
    render() {
        return html `<div class="product">
        <p>${this.product.name}</p>
        <p>${this.product.amountInStock}</p>
      </div>
      <div class="articles-group">
        ${this.product.articles.map(article => html `<div class="article">
            <p>${article.name}</p>
            <p>${article.amountRequired}</p>
          </div>`)}
      </div>`;
    }
};
__decorate([
    property({ type: Object })
], Products.prototype, "product", void 0);
Products = __decorate([
    customElement('app-product')
], Products);
export { Products };
//# sourceMappingURL=product.js.map