import React from 'react'
import { useEffect,useState } from 'react'

const useGoogleFetch = (subject, gApi) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const fetchData = () => {

        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&key=${gApi}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        })
        .then(data => {
            setData(data.items);
        })
        .catch(error => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchData()
    }, [subject, gApi])

   console.log(data)
    return { data, loading, error }

}

export default useGoogleFetch