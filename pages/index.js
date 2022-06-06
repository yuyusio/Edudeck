import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Edudeck</title>
          <meta name="description" content="Online Interactive Education Assistance Tool" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            This is <a href="../login">Edudeck</a>
          </h1>

          <p className={styles.description}>
            Free and Easy to Use 
          </p>

          <div className={styles.grid}>
            <a href="" className={styles.card}>
              <h2>Libraries &rarr;</h2>
              <p>Find various free libraries avalaible online</p>
            </a>

            <a href="" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn by watching lectures from passionate teachers</p>
            </a>

            <a
              href=""
              className={styles.card}
            >
              <h2>Practical &rarr;</h2>
              <p>Familiar yourself with practical experiments</p>
            </a>

            <a
              href=""
              className={styles.card}
            >
              <h2>Internship &rarr;</h2>
              <p>
                Search for internship opportunities
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
  )
}
