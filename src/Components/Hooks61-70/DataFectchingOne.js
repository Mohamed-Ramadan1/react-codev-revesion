import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFectchingOne() {
    const [loading, setLoading] = useState(true);    
    const [comments, setComments] = useState({});    
    const [error, setError] = useState('');
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setComments(res.data);
                setError('')
                setLoading(false)
                //console.log(res.data)
            })
            .catch(error => {
                setError('Somthing wrong check the api end point')
                setComments({})
                setLoading(false)
        })
    },[])
    return (
        <div>
            {loading ? "Loading required Data" : comments.map(comment => <h3>{comment.body}</h3>)}
            {error ? error : null}
            { console.log(comments.name)}
        </div>
    )
    }

export default DataFectchingOne
