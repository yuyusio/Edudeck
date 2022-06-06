import Head from 'next/head'
import Image from 'next/image'
import styles from './teacher.module.css'

import { Router, useRouter } from 'next/router'
import { set, useForm } from 'react-hook-form'

export default function Login() {    

    const {register, handleSubmit, formState:{errors}} = useForm();
    const router = useRouter()

    let data = {
      username: '',
      password: ''
    }

    const formfunc = (value) => {
      if (
        value.username == "alice" &&
        value.password == "wonderland") {
        router.push('/teacher/alice')
      }
    }

    return (
        <div className={styles.container}>
          <Head>
            <title>Edudeck Login For Teachers</title>
            <meta name="description" content="Login Page For Edudeck" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              Edudeck 
            </h1>
    
            <p className={styles.description}>
              Greetings Teacher
            </p>

            <form onSubmit={handleSubmit(formfunc)}>
              <div className={styles.grid}>
                <a className={styles.card2}>
                  <h2>Login</h2>

                    <p>Username: </p> 
                    <input 
                      {...register('username',{required: "Required"})}
                      className={styles.input}
                      type="username" 
                      id="inputUsername" 
                      aria-describedby="usernameHelp" 
                      name="username" 
                      placeholder="Enter Username">
                    </input>

                    <p>Password: </p> 
                    <input
                      {...register('password',{required: "Required"})}
                      className={styles.input} 
                      type="password" 
                      id="inputPassword" 
                      aria-describedby="passwordHelp" 
                      name="password" 
                      placeholder="Enter Password">
                    </input>
                    
                    <input type="submit" className={styles.button}></input>
                </a>
              </div>
            </form> 

          </main>
        </div>
      )
}