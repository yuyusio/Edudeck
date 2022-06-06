import Head from 'next/head'
import Image from 'next/image'
import styles from './student.module.css'

import { useRouter } from 'next/router'

const newBloc = () => {
  return (
    <div className={styles.grid}>
    <a className={styles.card}>
      <h2>Math</h2>
          <p>Content: </p>
          <p>Due Date: </p>
    </a>
  </div>
  )
}

export default function Subjects() {
    
    const router = useRouter()
    const { id } = router.query

    newBloc()
    
    return (
        <div className={styles.container}>
          <Head>
            <title>Edudeck User {id}</title>
            <meta name="description" content="User Page For Edudeck" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Edudeck User {id}
            </h1>
    
            <p className={styles.description}>
              Greetings {id}
            </p>
    
            <a href="../student/homework" className={styles.card}>
              <h2>Check Homework &rarr;</h2>
              <p>Check homework which are not done yet</p>
            </a>

          </main>
        </div>
      )
}