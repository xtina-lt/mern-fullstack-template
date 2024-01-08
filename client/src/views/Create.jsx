import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom"

const Create = () => {
    let blank = {
        strAtt:"",
        boolAtt: false,
        enumAtt: "",
        numAtt:""
    }
    const [obj, setObj] = useState(blank)
    const navigate = useNavigate()
    let [errors,setErrors] = useState({})

    const handleSubmit= e =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/myobj", obj)
            .then(res=>{
                console.log("SUCCESS CREATE", res.data);
                setObj(blank);
                navigate("/objs")
            })
            .catch(err=> {
                console.log("create", err);
                setErrors(err.response.data)
            })
    }



  return (
    <main>
        <section>
            <h1>Create</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    strAtt:
                    {
                        (errors && errors.strAtt) && 
                            <span className='bk-red block'>
                                {errors.strAtt.message}
                            </span>
                    }
                    <input type="text" 
                        value={obj.strAtt} 
                        onChange={e => setObj({
                                ...obj, 
                                strAtt:e.target.value })
                            }/>
                </label>
                <label>
                    boolAtt
                    {
                        (errors && errors.boolAtt) && 
                            <span className='bk-red block'>
                                {errors.boolAtt.message}
                            </span>
                    }
                    <input type="checkbox" 
                        value={obj.boolAtt}
                        onChange={e=>setObj({
                            ...obj,
                            boolAtt : !obj.boolAtt
                        })}/>
                </label>
                <label>
                    enumAtt:
                    {
                        (errors && errors.enumAtt) && 
                            <span className='bk-red block'>
                                {errors.enumAtt.message}
                            </span>
                    }
                    <select onClick={ e => setObj({
                        ...obj,
                        enumAtt:e.target.value
                    })}>
                        <option value="">Select..</option>
                        <option value={"star"}>⭐</option>
                        <option value={"superstar"}>🌟</option>
                        <option value={"unicorn"}>🦄</option>
                    </select>
                </label>
                <label>
                    numAtt:
                    {
                        (errors && errors.numAtt) && 
                            <span className='bk-red block'>
                                {errors.numAtt.message}
                            </span>
                    }
                    <input type="number" 
                    value={obj.numAtt}
                    onChange={e => setObj({
                        ...obj, 
                        numAtt:e.target.value 
                    })}/>
                </label>

                <input type="submit" value="Go Go Go!" />
            </form>
        </section>

    </main>
  )
}

export default Create