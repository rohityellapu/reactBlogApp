import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Comments from './Comments';

function Blog() {
    const { id } = useParams();
    const [post, setpost] = useState({})
    const [comments, setcomments] = useState([])

    useEffect(() => {
        (async function fetchData() {
            let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json())

            setpost(data)

            let comments = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`).then(response => response.json())
            setcomments(comments);

        }())
    }, [])
    return (
        <>

            <div className='w-full mt-4 flex bg-slate-800 text-white p-4 flex-col justify-center items-center'>
                <h1 className='text-5xl m-2'>{ post.title }</h1>
                <p className='text-2xl m-2'>{ post.body }</p>
                <p className='text-2xl m-2'>{ post.userId }</p>


            </div>
            <h1 className='text-5xl text-center m-4'>Comments</h1>
            <div className="comments flex flex-col justify-center items-center">
                { comments.map((comment, i) => (
                    <Comments key={ i } comment={ comment } />
                )) }
            </div>

        </>
    )
}

export default Blog