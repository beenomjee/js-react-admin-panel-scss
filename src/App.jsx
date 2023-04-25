import React, { useEffect, useRef, useState } from 'react'
import styles from './App.module.scss'
import { Header, Sidebar } from './components';
import { AdminPage } from './modules';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarContainer = useRef(null);
  const contentContainer = useRef(null);
  const sidebarOpenButtonHandler = (e) => {
    if (isSidebarOpen) {
      sidebarContainer.current.style.width = 0;
      contentContainer.current.style.paddingLeft = 0;
      setIsSidebarOpen(false);
    } else {
      if (window.innerWidth <= 1200) {
        sidebarContainer.current.style.width = '250px';
        setIsSidebarOpen(true);
      } else {
        sidebarContainer.current.style.width = '250px';
        contentContainer.current.style.paddingLeft = '250px';
        setIsSidebarOpen(true);
      }
    }
  }

  useEffect(() => {
    const setDefaults = () => {
      if (window.innerWidth <= 1200) {
        sidebarContainer.current.style.width = 0;
        contentContainer.current.style.paddingLeft = 0;
        setIsSidebarOpen(false);
      } else {
        sidebarContainer.current.style.width = '250px';
        contentContainer.current.style.paddingLeft = '250px';
        setIsSidebarOpen(true);
      }
    }

    window.addEventListener('resize', setDefaults);
    setDefaults();
    return () => {
      window.removeEventListener('resize', setDefaults);
    }
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header callback={sidebarOpenButtonHandler} />
      </div>
      <div className={`${styles.bgWrapper} ${isSidebarOpen && window.innerWidth <= 1200 ? styles.open : ''}`} onClick={sidebarOpenButtonHandler}></div>
      <div className={styles.sidebar} ref={sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.content} ref={contentContainer}>
        <AdminPage />
      </div>
    </div>
  )
}

export default App