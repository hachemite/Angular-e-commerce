
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-e-commerce/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Angular-e-commerce/produit",
    "route": "/Angular-e-commerce"
  },
  {
    "renderMode": 2,
    "route": "/Angular-e-commerce/home"
  },
  {
    "renderMode": 2,
    "route": "/Angular-e-commerce/produit"
  },
  {
    "renderMode": 2,
    "route": "/Angular-e-commerce/panier"
  }
],
  assets: {
    'index.csr.html': {size: 4991, hash: 'e7a17283c2059c122f23a5720763f7d18beed5012c75d5b942acc20cabbba8f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: '37568bb7479b1291a4b5cd648b96a69287f77c315015308ea8358de3df0de709', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13128, hash: '5fc01918692deaf12663339b82b075c5641cf8643db0b4f12f7349ff4f960968', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'produit/index.html': {size: 13251, hash: '5f9a6c424f7aee95b927f712ef08ed82519c2368ec4df2f16fbc44e8dca2cb4b', text: () => import('./assets-chunks/produit_index_html.mjs').then(m => m.default)},
    'panier/index.html': {size: 21711, hash: 'fe307c30ca8a4d09bb641470d455ae3def0ab0f654d66c03da05a98e2a3aa63e', text: () => import('./assets-chunks/panier_index_html.mjs').then(m => m.default)},
    'styles-5XR6DVYU.css': {size: 315271, hash: 'nxbzCijeD8U', text: () => import('./assets-chunks/styles-5XR6DVYU_css.mjs').then(m => m.default)}
  },
};
