import router from 'koa-route';
import { getHome, serveAdmin } from '../controllers/home';

const routes = (app) => {
  app.use(router.get('/home', getHome));
  app.use(router.get('/admin', serveAdmin));
};

export default routes;
