import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function () {
        //setResponse({...response, loading: true})
        fetch(url, { method })
            .then(resp => {console.log(resp); resp.json()})
            .then(json => {console.log(json); setResponse({
                data: json,
                loading: false
            })})
    }, [url, method])

    return response
}