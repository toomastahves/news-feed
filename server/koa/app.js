import koa from 'koa';
import cors from 'koa-cors';
import serve from 'koa-static';
import favicon from 'koa-favicon';
import routes from '../routes/';

const app = koa();
app.use(cors());
app.use(serve('public'));
app.use(favicon('public/favicon.ico'));
routes(app);

app.on('error', (err, ctx) => {
  console.log('Server error', err, ctx);
});

export default app;
