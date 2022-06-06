import Head from 'next/head'
import Image from 'next/image'
import styles from './hwassign.module.css'


import { Router, useRouter } from 'next/router'
import { set, useForm } from 'react-hook-form'
import React, { useCallback } from "react";


export default function Subjects() {
    
    const {register, reset, handleSubmit, formState:{errors}} = useForm();
    const router = useRouter()
    const onSubmit = (data, e) => {};

    let data = {
      class: '',
      subject: '',
      content: '',
      duedate: ''
    }

    const submitFunc = (value) => {
      alert("Done")
      data.class = value.class
      data.subject = value.subject
      data.content = value.content
      data.duedate = value.duedate
      reset()
    }

    // Step: Upload <data> to cloud database

    return (
      <div className={styles.container}>

      <Head>
        <title>Edudeck User</title>
        <meta name="description" content="User Page For Edudeck" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Homework Assign
        </h1>

        <form onSubmit={handleSubmit(submitFunc)}>
          <div className={styles.grid}>
              <h2 className={styles.card2}>
                <p>Class: </p> 
                  <input 
                    {...register('class',{required: "Required"})}
                    className={styles.input}
                    type="username" 
                    id="inputclass" 
                    aria-describedby="usernameHelp" 
                    name="class" 
                    placeholder="Enter CLass">
                  </input>
                <p>Subject: </p> 
                  <input
                    {...register('subject',{required: "Required"})}
                    className={styles.input} 
                    type="username" 
                    id="inputsubject" 
                    aria-describedby="usernameHelp" 
                    name="subject" 
                    placeholder="Enter Subject">
                  </input>
                <p>Content: </p> 
                  <input
                    {...register('content',{required: "Required"})}
                    className={styles.input} 
                    type="username" 
                    id="inputcontent" 
                    aria-describedby="usernameHelp" 
                    name="content" 
                    placeholder="Enter Content">
                  </input>
                <p>Due Date: </p> 
                  <input
                    {...register('duedate',{required: "Required"})}
                    className={styles.input} 
                    type="username" 
                    id="inputduedate" 
                    aria-describedby="usernameHelp" 
                    name="duedate" 
                    placeholder="Enter Due Date">
                  </input>
                
                <input type="submit" className={styles.button}></input>
              </h2>
          </div>
        </form>
      </main>

    </div>

    )
}