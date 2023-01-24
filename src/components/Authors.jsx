import React, { useEffect, useState } from 'react'
import Author from './Author'

function Authors() {
    const [authors, setauthors] = useState([])
    useEffect(() => {
        (async function fetchUsers() {
            let data = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())

            setauthors(data)
        }())
    }, [])
    return (
        <div className='bg-slate-600 p-4 flex flex-wrap justify-center items-center'>
            { authors.map((auth, i) => (
                <Author key={ i } author={ auth } />
            )) }
        </div>
    )
}

export default Authors