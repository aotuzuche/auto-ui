import dva from 'dva';
import router from './routes/index';
import { createHashHistory } from 'history';
import './assets/style/reset.css';
import './utils/flexible';
import './utils/polyfill';

// fastclick
const FastClick = require('fastclick');
FastClick.attach(document.body);

const app = dva({ history: createHashHistory() });

app.router(r => router(r!.history));
app.start('#root');
