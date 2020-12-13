import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('app-sale')
class Products extends LitElement {

  /* @property({type : propType}) propName = propValue */

  static get styles() {
    return css`...`
  }

  render() {
    return html`<p>Sale works</p>`
  }
}
