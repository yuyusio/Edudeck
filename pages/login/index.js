import Head from 'next/head'
import Image from 'next/image'
import styles from './login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Edudeck Login</title>
            <meta name="description" content="Login Page For Edudeck" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Edudeck Login
            </h1>
    
            <p className={styles.description}>
              Who is this account for?
            </p>
    
            <div className={styles.grid}>
              <a href="../login/student" className={styles.card}>
                <h2>For Students &rarr;</h2>
              </a>
            </div>

            <div className={styles.grid}>
              <a href="../login/teacher" className={styles.card}>
                <h2>For Teachers &rarr;</h2>
              </a>
            </div>
          </main>
        </div>
      )
}