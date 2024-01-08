import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom"
import Update from './Update.jsx';

const ShowOne = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const [obj, setObj] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/myobj/${id}`)
            .then(e => {
                console.log("Success: ", e.data);
                // generate map when loaded
                setIsLoaded(true)
                setObj(e.data)
            })
            .catch(e => console.log("show one oops", e))
    }, [])


    const handleDelete = () => {
        console.log("here")
        axios.delete(`http://localhost:8000/api/myobj/${id}`)
            .then(navigate("/objs"))
            .catch(err => { console.log(err) })
    }

    return (
        <main>
            {
                //  1 ) CHECK IF INFORMATION HAS BEEN GIVEN
                isLoaded &&
                <>
                    {/* 2 ) SHOW OPTIONS */}
                    <section>
                        <h1>{obj.strAtt}</h1>
                        <div>
                            {/* 3 ) DELETE OPTION */}
                            {/* delete pop-up */}
                            <button
                                onClick={() => setShowDeleteModal(true)}>
                                Delete
                            </button>
                            {/* delete modal */}
                            {showDeleteModal && (
                                <section id="modal" className='modal-overlay'>
                                    <p>Are you sure you want to continue?</p>
                                    <button
                                        className='bk-green'
                                        onClick={() => handleDelete()}>
                                        Yes
                                    </button>
                                    <button className='bk-red'
                                        onClick={() => setShowDeleteModal(false)}>
                                            No
                                    </button>
                                </section>
                            )}
                            {/* 4) UPDATE FUNCTIONALITY */}
                            {/* update button */}
                            <button
                                onClick={() => setShowUpdateModal(true)}>
                                Update
                            </button>
                        </div>
                    </section>

                    {
                        // 4) SHOW EITHER UPDATE FORM OR OBJ INFORMATION 
                        showUpdateModal ?
                            // update form
                            // updates object
                            // hides module
                            <Update
                                obj={obj}
                                setObj={setObj}
                                setShowUpdateModal={setShowUpdateModal} 
                            />
                            :
                            <section>
                                <h2>Attributes</h2>
                                {
                                    Object.entries(obj).map(([key, value]) => (
                                        <div key={key}>
                                            <h3> {key}</h3>
                                            {JSON.stringify(value)}
                                        </div>
                                    ))}
                            </section>
                    }
                </>
            }
        </main>
    )
}

export default ShowOne