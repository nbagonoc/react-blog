import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchPosts } from '../../../redux/posts/postsSlice'

const Search = () => {
    const dispatch = useDispatch()
    const [queryFilter, setQueryFilter] = useState('')

    const handleOnChange = (e) => {
        setQueryFilter(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(searchPosts(queryFilter))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search employees'
                    className='search-input'
                    value={queryFilter}
                    onChange={handleOnChange}
                />
                <button
                    type='submit'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search
