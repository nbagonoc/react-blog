import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchPosts } from '../../../redux/posts/postsSlice'

const Search = () => {
    const dispatch = useDispatch()
    const [queryFilter, setQueryFilter] = useState('')

    const handleOnChange = (e) => {
        setQueryFilter(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(searchPosts(queryFilter))
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className='d-flex mb-3'
        >
            <input
                type='text'
                placeholder='Search...'
                className='search-input form-control me-2'
                value={queryFilter}
                onChange={handleOnChange}
            />
            <button
                type='submit'
                className='btn btn-primary'
            >
                Search
            </button>
        </form>
    )
}

export default Search
