import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Edudeck About</title>
            <meta name="description" content="Login Page For Edudeck" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Edudeck About Page
            </h1>
    
            <div className={styles.card}>
              <p className={styles.description}>
                What is Edudeck?
              </p>
            </div> 
    
            <div className={styles.grid}>
              <a className={styles.card}>
                <h2>Info:</h2>
                <p>Edudeck is a multi-purpose online interactive website designed for teachers and students</p>
              </a>
            </div>

            <div className={styles.grid}>
              <a className={styles.card}>
                <h2>Designed by:</h2>
                <p>yuyusio</p>
              </a>
            </div>

          </main>
        </div>
      )
}