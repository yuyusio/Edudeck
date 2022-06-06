import Head from 'next/head'
import Image from 'next/image'
import styles from './homework.module.css'


var content = {
  subject: '',
  content: '',
  duedate: ''
}

// if (api receives new data from cloud data base) ->
// assign <content> value
// Example ->
var content = {
  subject: 'Subject: Math',
  content: 'Content: Complete Chapter 2 Practices',
  duedate: 'Due Date: 25/12/22'
}
// Example ->

var newContent = <div className={styles.card}>
                      <h1 className={styles.code}>
                        {content.subject}
                      </h1>
                      <h1 className={styles.code}>
                        {content.content}
                      </h1>
                      <h1 className={styles.code}>
                        {content.duedate}
                      </h1>
                    </div>

var newContentAll = <div></div>

export default function Homework() {
    
    // if (api receives new data from cloud data base) ->
    // update <newContentAll>
    var newContentAll = Object.assign(newContent,newContentAll)


    return (
      <div id="app" className={styles.container}>

        <Head>
          <title>Edudeck User</title>
          <meta name="description" content="User Page For Edudeck" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
        <main className={styles.main}>
          <h1 className={styles.title}>
            Homework
          </h1>
          {newContentAll}
        </main>

      </div>

    )
}