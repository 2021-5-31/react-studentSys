import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

function useHeader() {
  const navigate = useNavigate()
  const router = useLocation()
  let [path, setPath] = useState(router.pathname)
  const jump = (path) => {
    setPath(path)
    navigate(path)
  }
  useEffect(() => {
    setPath(router.pathname)
  }, [router.pathname])
  return (
    <nav className="header-container">
      <div className={`item ${path === '/' ? 'active' : ''}`} onClick={() => { jump('/') }}>首页</div>
      <div className={`item ${path === '/student' ? 'active' : ''}`} onClick={() => { jump('/student') }}>学生列表</div>
    </nav>
  )
}
export default useHeader