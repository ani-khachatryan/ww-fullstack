
import BgImage from '../components/BgImage'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import navStyles from '../styles/NavbarLink.module.css'


export default function About() {
  return (
    <div>
        <BgImage hide={true}>
        <div className={styles.center}>
            <p>Whoops! Seems like we&apos;re still working on this one...</p>
            <p>You can see some awesome Wonder Windows on our <div className={`${navStyles.link} ${navStyles.inlineLink}`}>
          <Link href="/image">home page</Link>
        </div>though </p>
        </div>
        </BgImage>
    </div>
  )
}
