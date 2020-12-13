import { __decorate } from "tslib";
import { LitElement, html, css, customElement } from 'lit-element';
let Navigation = class Navigation extends LitElement {
    static get styles() {
        return css `
      nav {
        display: grid;
        width: 100%;
        max-width: 100%;
        grid-template-columns: repeat(auto-fit, 240px);
        justify-content: center;
        border-bottom: 1px solid #efefef;
      }
      nav > a {
        display: block;
        flex: 1;
        font-size: 18px;
        padding: 20px 0;
        text-align: center;
        text-decoration: none;
      }
    `;
    }
    render() {
        return html `<nav>
      <a href="">Products</a>
      <a href="sale/">Sale</a>
    </nav>`;
    }
};
Navigation = __decorate([
    customElement('app-navigation')
], Navigation);
export { Navigation };
//# sourceMappingURL=navigation.js.map