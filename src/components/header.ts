import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('app-header')
export class Header extends LitElement {
  @property({ type: String }) title = 'Welcome to warehouse';
  @property({ type: String }) description = 'See inventory and register sale.';

  static get styles() {
    return css`
      .header {
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
    return html`<header class="header">
      <h1>${this.title}</h1>
      <h2>${this.description}</h2>
    </header>`;
  }
}
