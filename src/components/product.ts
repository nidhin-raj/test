import { LitElement, html, css, customElement, property } from 'lit-element';
import { Product } from '../models/product';

@customElement('app-product')
export class Products extends LitElement {
  @property({ type: Object }) product: Product;

  constructor() {
    super();
    this.product = {} as Product;
  }

  static get styles() {
    return css`
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
    return html`<div class="product">
        <p>${this.product.name}</p>
        <p>${this.product.amountInStock}</p>
      </div>
      <div class="articles-group">
        ${this.product.articles.map(
          article => html`<div class="article">
            <p>${article.name}</p>
            <p>${article.amountRequired}</p>
          </div>`
        )}
      </div>`;
  }
}
