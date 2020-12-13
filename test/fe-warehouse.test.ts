import { html, fixture, expect } from '@open-wc/testing';

import {FeWarehouse} from '../src/FeWarehouse.js';
import '../src/fe-warehouse.js';

describe('FeWarehouse', () => {
  let element: FeWarehouse;
  beforeEach(async () => {
    element = await fixture(html`
      <fe-warehouse></fe-warehouse>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
