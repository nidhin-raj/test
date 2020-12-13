import { __decorate } from "tslib";
import { LitElement, html, css, customElement } from 'lit-element';
let Products = class Products extends LitElement {
    /* @property({type : propType}) propName = propValue */
    static get styles() {
        return css `...`;
    }
    render() {
        return html `<p>Sale works</p>`;
    }
};
Products = __decorate([
    customElement('app-sale')
], Products);
//# sourceMappingURL=sale.js.map