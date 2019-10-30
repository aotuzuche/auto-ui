import dva from 'dva'
import { createHashHistory } from 'history'
import './assets/style/reset.css'
import router from './routes/index'
import './utils/flexible'
import './utils/polyfill'

const app = dva({ history: createHashHistory() })

app.router(r => router(r!.history))
app.start('#root')
