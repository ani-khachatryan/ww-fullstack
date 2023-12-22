import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import AuthService from '../services/auth.service';

export default function Logout() {
    const navigate = useRouter();

    const [auth, setAuth] = useState({})
    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            AuthService.logout()
            window.location.reload()
        } else {
            navigate.replace("/")
        }
    }, [])

    return <>
    </>
}
