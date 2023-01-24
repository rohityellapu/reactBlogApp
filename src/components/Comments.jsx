import React from 'react'

function Comments({ comment }) {
    return (
        <div className='bg-blue-600 rounded-lg p-4 m-4 w-6/12 text-white flex flex-col'>
            <h3 className=' text-2xl'>Name: { comment.name }</h3>
            <h3 className=' text-2xl'> By: { comment.email }</h3>

            <h4 className='text-lg'> Comment: { comment.body }</h4>
        </div>
    )
}

export default Comments