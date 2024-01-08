import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const ShowAll = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [objs, setObjs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/myobj")
            .then(e => {
                console.log("Success: ", e.data);
                // generate map when loaded
                setIsLoaded(true)
                setObjs(e.data)
            })
            .catch(e => console.log("show all oops", e))
    }, [])

    return (
        <>
            <h1>ShowAll</h1>
            <main>
                {isLoaded &&
                    objs.map((elem, idx) => (
                        <section key={idx}>
                            <h2>
                                <Link to={`/obj/${elem._id}`}>
                                    {elem.strAtt} 
                                </Link>
                            </h2>
                            <p>
                                {elem.boolAtt ? "🦄" : "🫶"}
                            </p>
                        </section>
                ))}
            </main>
        </>
    )
}

export default ShowAll