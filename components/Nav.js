import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'


const Nav = () => {
  return (
    <>


      <nav className={navStyles.nav}>
        <ul>
          <li className={navStyles.card}>
            <Link href='/'>Home</Link>
          </li>
          <li className={navStyles.card}>
            <Link href='/about'>About</Link>
          </li>
          <li className={navStyles.card}>
            <Link href='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}


export default Nav