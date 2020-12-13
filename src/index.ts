import './FeWarehouse.js';
import './components/header.js';
import './components/navigation.js';

import { Router } from '@vaadin/router';

const routes = [
  {
    path: '/',
    component: 'app-products',
    action: async () => {
      await import('./components/products.js');
    }
  },
  {
    path: 'sale',
    component: 'app-sale',
    action: async () => {
      await import('./components/sale.js');
    }
  },
  {
    path: '(.*)',
    component: 'app-not-found',
    action: async () => {
      await import('./components/not-found');
    }
  }
];

const outlet = document.getElementById('route-outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
