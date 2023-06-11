import React,{useEffect,useReducer,useState} from 'react'
import axios from 'axios'

const init = {
    loading: true,
    comments: {},
    error:''
}

const reducer = (state, action) => {
    switch (action.type) {
        case "data_sucsses" : return{
            loading: false,
            comments: action.payload,
            error: ''
        }

        case "dataNot_Featching": return {
            loading: false,
            comments: {},
            error: "Somthing went wrong"
        }

        default: return state
    }
}




function DataFetchingTwo() {
    const [state, disPatch] = useReducer(reducer, init)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                disPatch({type:"data_sucsses",payload:res.data})               

            })
            .catch(error => {
                disPatch({type:'dataNot_Featching'})
        })
    },[])
    return (
        <div>
            {state.loading ? "Loading the required Data" : state.comments.map(coment => <h2>{coment.email}</h2>)}
            {state.error ? state.error : null}
        
        </div>
    )
}

export default DataFetchingTwo
