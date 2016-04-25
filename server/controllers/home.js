import fs from 'co-fs';

export function* getHome() {
  console.log('Home content request');
  this.body = { message: 'Home content' };
}

export function* serveAdmin() {
  this.body = yield fs.readFile(`${__dirname}/../../public/admin.html`, 'utf8');
}
