import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <Nav/>
        <main>
          {children}
        </main>
    </>
  )
}

export default Layout