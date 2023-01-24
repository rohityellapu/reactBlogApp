import React from 'react'

function footer() {
    return (
        <footer className='w-full p-4 bg-gray-900 text-white flex flex-col justify-center items-center h-1/6'>


            <p className='flex flex-row text-2xl text-blue-500'>Built by Rohit Yellapu
                <a href="https://www.linkedin.com/in/rohit-yellapu/" target='_blank'><img
                    className="p-1 h-10 pl-4" src="https://img.icons8.com/color/512/linkedin-2.png" alt="linkedin" /></a>
                <a href="https://twitter.com/rohit_yellapu" target='_blank'><img className="p-1 h-10"
                    src="https://img.icons8.com/color/512/twitter.png" alt="twitter" /></a>
                <a href="https://github.com/rohityellapu" target='_blank'><img className="p-1 h-10"
                    src="https://img.icons8.com/glyph-neue/512/github.png" alt="github" /></a>
            </p>
            <a href="https://github.com/rohityellapu/reactBlogApp" target="_blank" className="text-xl text-blue-500 flex flex-row"><p className=''> Source
                code<img className="inline h-10 p-1"
                    src="https://img.icons8.com/glyph-neue/512/github.png" alt="github" /></p></a>


        </footer>
    )
}

export default footer