import { useState } from 'react';
import { Header } from './components/Header';


import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
