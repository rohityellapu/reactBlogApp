import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from './Post';

function Profile() {

    const { id } = useParams();
    const [profile, setprofile] = useState({})
    const [posts, setposts] = useState([])

    useEffect(() => {
        (async function fetchUsers() {
            let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json())

            setprofile(data)

            let posts = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`).then(response => response.json())
            setposts(posts);

        }())
    }, [])
    return (
        <>

            <div className='w-full mt-4 flex bg-slate-800 text-white p-4 flex-col justify-center items-center'>
                <h1 className='text-5xl m-2'>{ profile.name }</h1>
                <p className='text-2xl m-2'>{ profile.phone }</p>
                <p className='text-2xl m-2'>{ profile.email }</p>


            </div>
            <h1 className='text-5xl text-center m-4'>Posts</h1>
            { posts.map((post, i) => (
                <Post key={ i } post={ post } />
            )) }
        </>
    )
}

export default Profile