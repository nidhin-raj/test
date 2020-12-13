import { __decorate } from "tslib";
import { LitElement, html, css, property, customElement } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
let FeWarehouse = class FeWarehouse extends LitElement {
    constructor() {
        super(...arguments);
        this.page = 'main';
        this.title = '';
    }
    render() {
        return html `
      <main>
        <div class="logo">${openWcLogo}</div>
        <h1>My app</h1>

        <p>Edit <code>src/FeWarehouse.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/developing/#code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
    }
};
FeWarehouse.styles = css `
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }

    main {
      flex-grow: 1;
    }

    .logo > svg {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;
__decorate([
    property({ type: String })
], FeWarehouse.prototype, "page", void 0);
__decorate([
    property({ type: String })
], FeWarehouse.prototype, "title", void 0);
FeWarehouse = __decorate([
    customElement('fe-warehouse')
], FeWarehouse);
export { FeWarehouse };
//# sourceMappingURL=FeWarehouse.js.map