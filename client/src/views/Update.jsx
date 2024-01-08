import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom"

const Update = ({obj, setObj, setShowUpdateModal}) => {
    const navigate = useNavigate()
    let [errors, setErrors] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/myobj/${obj._id}}`, obj)
            .then(res => {
                console.log("SUCCESS UPDATE", res.data);
                setObj(res.data)
                setShowUpdateModal(false)
            })
            .catch(err => {
                console.log("UPDATE", err);
                setErrors(err.response.data)
            })
    }



    return (
        <section>
            <h1>Update</h1>
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
                            strAtt: e.target.value
                        })
                        } />
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
                        onChange={e => setObj({
                            ...obj,
                            boolAtt: !obj.boolAtt
                        })} />
                </label>
                <label>
                    enumAtt:
                    {
                        (errors && errors.enumAtt) &&
                        <span className='bk-red block'>
                            {errors.enumAtt.message}
                        </span>
                    }
                    <select value={obj.enumAtt} onChange={e => setObj({
                        ...obj,
                        enumAtt: e.target.value
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
                            numAtt: e.target.value
                        })} />
                </label>

                <input type="submit" value="Change Me!" />
            </form>
        </section>
    )
}

export default Update