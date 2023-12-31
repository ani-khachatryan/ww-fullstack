import BgImage from '../components/BgImage'
import styles from '../styles/Upload.module.css'
import inputs from '../styles/Inputs.module.css'
import { useState, useEffect } from 'react';
import authService from '../services/auth.service';
import { useRouter } from 'next/router'

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState();
  const [city, setCity] = useState("");
  const navigate = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    let user = authService.getCurrentUser()
    if (!user) {
      navigate.replace("/login")
    }
  }, [])

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('city', city);
    formData.append('country', country);
    setLoading(true);
    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/upload/`,
      {
        method: 'POST',
        body: formData,
      }
    ).then(async (r) => {
        await new Promise(r => setTimeout(r, 500));
        setLoading(false);
        if (!r.ok) {
          setSuccess("");
          setError("Form error")

        } else {
          setError("")
          setSuccess("Upload ok!")
        }


    })
  }
  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  }
  return (
<>
<BgImage hide={true}/>

    <div className={styles.formWrapper}>
      <div className={inputs.form}>
        <div className={inputs.row}>
          <label htmlFor="file-upload" className={inputs.fileInputLabel} >
            Click here to choose a file!
          </label>
          <input type="file" required className={inputs.fileInput} id="file-upload" name="file" onChange={changeHandler} />
        </div>
        <div className={inputs.row}>
          <input type="text" required placeholder="City" name="city" value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div className={inputs.row}>
          <input type="text" required placeholder="Country" name="country" value={country} onChange={e=>setCountry(e.target.value)} />
        </div>
        <div className={inputs.row}>
          <div className={`${inputs.loadingButton} ${loading ? inputs.active : "" }`}>
            <button className={inputs.submitButton} onClick={handleSubmission}>Submit</button>
            <div className={inputs.loading}>
            </div>
          </div>
        </div>
        <div className={inputs.row}>
          <div className={styles.err}>{error}</div>
          <div className={styles.success}>{success}</div>
        </div>
      </div>
    </div>
    </>
  )
}
