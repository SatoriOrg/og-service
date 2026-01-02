import { Hono } from 'hono';
import { getDefaultTemplate } from '../templates/Default';

const defaultRouter = new Hono();

defaultRouter.get('/', (c) => {
  return c.html(getDefaultTemplate());
});

export { defaultRouter };
