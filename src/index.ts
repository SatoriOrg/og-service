import { Hono } from 'hono';
import { defaultRouter } from './routes/default';
import { ogRouter } from './routes/og';

const app = new Hono();

app.route('/api/og', ogRouter);
app.route('*', defaultRouter);

export default app;
