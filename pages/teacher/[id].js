import Head from 'next/head'
import Image from 'next/image'
import styles from './teacher.module.css'

import { useRouter } from 'next/router'

export default function Subjects() {
    
    const router = useRouter()
    const { id } = router.query

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

        <a href="./hwassign" className={styles.card}>
          <h2>Assign Homework &rarr;</h2>
          <p>Assign homework for your classes</p>
        </a>
      </main>

    </div>

    )
}