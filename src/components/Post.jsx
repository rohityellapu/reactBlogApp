import React from 'react'
import { Link } from 'react-router-dom'

function Post({ post }) {

    return (
        <Link className='w-9/12' to={ `/blog/${post.id}` }>
            <div className='bg-blue-600 rounder-md p-4 m-4 hover:saturate-200'
            >
                <h3 className='text-white'>{ post.title }</h3>
            </div>
        </Link>

    )
}

export default Post