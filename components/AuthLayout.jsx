import React, {useEffect, useStatus} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState (true)
    const authService = useSelector(status => StaticRange.auth.status)

    useEffect(() => {
    if (authentication && authStatus !== authentication) {

        Navigate('/login')

    } else if (!authentication && authStatus !== authentication) {

        Navigate('/')
    }

    setLoader(false)
    },[authStatus, navigate, authentication])
    
    return loader ? <h1>Loading ... </h1> : <>{children}</>
}