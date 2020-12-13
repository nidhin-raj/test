import { LitElement, html, css, customElement, property } from 'lit-element';
import { fetchProducts } from '../shared/warehouse.services';
import { Product } from '../models/product';
import './product';

@customElement('app-products')
export class Products extends LitElement {
  @property({ type: Array }) products: Product[] = [];
  @property({ type: Boolean }) isLoading = true;

  static get styles() {
    return css`
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
    return html` ${
      this.isLoading
        ? html`<p>Loading....</p>`
        : html`<div>
            ${this.products.map(
              (product: Product) =>
                html`<app-product .product="${product}"></app-product>`
            )}
          </div>`
    } </div>`;
  }
}
