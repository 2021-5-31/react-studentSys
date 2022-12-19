import Header from './components/Header'
import './css/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import StudentList from './components/StudentList'
import EditStudent from './components/EditStudent'
import 'antd/dist/reset.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<StudentList />} />
            <Route path="/:type/:id" element={<EditStudent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
