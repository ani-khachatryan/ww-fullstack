import * as React from 'react';
import styles from '../styles/BgImage.module.css'
import { useEffect, useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { getNextImage } from '../lib/images'


export default function BgImage({hide, children}) {
  const [src, setSrc] = useState("");
  const [uuid, setUuid] = useState("");
  const [id, setId] = useState("");
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
      setLoading(true)
      let a = await getNextImage(id)
      if (uuid == a.url) {
        setLoading(false)
      }
      setId(a.id)
      setUuid(a.url)
      setSrc(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/image/${a.url}`)
      let newCitites = [a.location[0], a.location[1]];
      setLocations(newCitites);
  }

  const setLoaded = () => {
    setLoading(false)
  }
  
  useEffect(async () => {
      load();
  }, [])

  return (
    <>
      <img onLoad={setLoaded} className={`${styles.imgWrapper} ${loading ? styles.loading : ""}`} src={src} />
      {!hide && <div className={styles.openWindow}>
        <Link href="/image"  >
          <h1 onClick={load} className={styles.open}> Open a new window </h1>
        </Link>
      </div>
      }
      {children}
      <div className={styles.location}>
        <Image className={styles.locationIcon} src="/location_icon.png" alt="me" width="39" height="26"/>
        <div className={styles.locationList}>
        {locations.map( (l) =>
           <div key={l} className={styles.locationEl}> {l} </div>
        )}
        </div>
      </div>
    </>
  );
}