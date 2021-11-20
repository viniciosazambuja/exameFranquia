import styles from '../styles/Header.module.scss'

import Link from 'next/link'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Header(props) {

  const [stateMenuLateral, setStateMenuLateral] = useState(false);

  return(
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <a>
          <h1>Exame</h1>
        </a>
      </Link>
      <nav className={styles.nav}>
        <FontAwesomeIcon onClick={() => setStateMenuLateral(!stateMenuLateral)} className={styles.icon} icon={faBars} />
        <menu className={`${styles.menu} ${stateMenuLateral ? styles.active : ''}`}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href="/">
                <a>Opção o menu</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a>Opção o menu</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a>Opção o menu</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a>Opção o menu</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a>Opção o menu</a>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/">
                <a>Opção o menu</a>
              </Link>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  )
}