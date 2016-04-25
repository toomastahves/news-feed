// For loading CSS modules
import 'css-modules-require-hook';
import 'babel-polyfill';

// For creating in-memory HTML document
import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>', {
  url: 'http://localhost:1337/'
});
global.window = document.defaultView;
global.navigator = global.window.navigator;
