import { LitElement, html, customElement } from 'lit-element';

@customElement('app-not-found')
class NotFound extends LitElement {
  render() {
    return html`<p>Not found</p>`;
  }
}
