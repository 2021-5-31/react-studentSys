import Header from './components/Header'
import './css/index.css'
import { BrowserRouter } from "react-router-dom"
import 'antd/dist/reset.css'
import Router from './router/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main'>
          <Router />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
