import React from 'react'
import { useEffect,useState } from 'react'

const useNYFetch = (listName, api) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    console.log(listName)
   
    const fetchData = () => {

        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${api}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }
            return res.json();
        })
        .then(data => {
            setData(data.results.books);
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
    }, [listName, api])

   
    return { data, loading, error }

}

export default useNYFetch