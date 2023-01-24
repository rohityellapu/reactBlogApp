import React from 'react'
import { useNavigate } from 'react-router-dom';

function Author({ author }) {
    const navigate = useNavigate();
    return (
        <div className='bg-gray-800 text-white w-96 h-56 flex flex-col p-5 m-4 rounded-lg text-center'>
            <h2 className='font-semibold text-2xl m-2'>{ author.name }</h2>
            <button className='p-2 bg-blue-500 rounded-md m-auto px-4 hover:saturate-200' onClick={ () => {
                navigate(`/profile/${author.id}`, { data: author })
            } }>View Profile</button>
        </div>
    )
}

export default Author