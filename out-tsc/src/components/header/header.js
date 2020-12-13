import { __decorate } from "tslib";
import { LitElement, html, css, customElement, property } from 'lit-element';
let Header = class Header extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Warehouse';
        this.description = 'See inventory and register sale.';
    }
    static get styles() {
        return css `
      :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 150px;
        margin: 0;
        background: linear-gradient(
          0deg,
          rgba(9, 9, 121, 1) 0%,
          rgba(0, 212, 255, 1) 100%
        );
        color: white;
      }
    `;
    }
    render() {
        return html `<h1>${this.title}</h1>
      <h2>${this.description}</h2>`;
    }
};
__decorate([
    property({ type: String })
], Header.prototype, "title", void 0);
__decorate([
    property({ type: String })
], Header.prototype, "description", void 0);
Header = __decorate([
    customElement('app-header')
], Header);
export { Header };
//# sourceMappingURL=header.js.map