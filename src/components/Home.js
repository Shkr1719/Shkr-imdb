import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='homeBg'>
        <div className='home'>
            <h1>Search for your favourite movies and tv shows</h1>
            <input type='text' placeholder='Search Movies, TV shows and more...'/>
            <button>
                <Link to='/'>Search</Link>
            </button>
        </div>

    </div>
  )
}

export default Home