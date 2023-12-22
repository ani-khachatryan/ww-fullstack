import * as React from 'react';
import styles from '../styles/Header.module.css'
import Menu from '../components/Menu'
import { useEffect, useState} from 'react';

import Link from 'next/link'
import ProfileLink from '../components/ProfileLink'
import AuthService from '../services/auth.service';


export default function Header() {
  const [auth, setAuth] = useState({})
  useEffect(() => {
    setAuth(AuthService.getCurrentUser())
  }, [])

  return (
    <>
    <div className={styles.headerMain}>
        <Menu />
        <h1 className={styles.title}>
          <Link href="/">Windows of Wonder</Link>
        </h1>
        {auth&&
          <ProfileLink />
        }
    </div>
    </>
  );
}