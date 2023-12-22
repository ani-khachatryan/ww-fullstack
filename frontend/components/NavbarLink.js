import * as React from 'react';
import styles from '../styles/NavbarLink.module.css'
import Link from 'next/link'

export default function NavbarLink({text, href}) {
  return (
    <>
        <div className={styles.link}>
          <Link href={href}>{text}</Link>
        </div>
    </>
  );
}