import Header from './components/Header'
import './css/index.css'
import { BrowserRouter } from "react-router-dom"
import 'antd/dist/reset.css'
import Router from './router/index'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div className='main'>
            <Router />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
