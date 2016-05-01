import koa from 'koa';
import serve from 'koa-static';
import favicon from 'koa-favicon';

const app = koa();
app.use(serve('public'));
app.use(favicon('public/favicon.png'));

app.on('error', (err, ctx) => {
  console.log('Server error', err, ctx);
});

export default app;
