import dva from 'dva';
import router from './routes/index';
import { createHashHistory } from 'history';
import './assets/style/reset';
import './utils/polyfill';
import 'prismjs/themes/prism';

const app = dva({ history: createHashHistory() });

app.router(r => router(r!.history));
app.start('#root');
