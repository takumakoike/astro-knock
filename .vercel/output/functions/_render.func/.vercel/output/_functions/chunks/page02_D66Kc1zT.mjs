export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_BDLOOrBT.mjs').then(n => n.p);

export { page };
