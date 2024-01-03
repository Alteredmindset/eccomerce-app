import React from 'react'

const SearchInput = () => {
  const [query, setQuery] = React.useState('')
  const [suggestions, setSuggestions] = React.useState([])

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `/search?query=${query}`
  }

  return (
    <div>
    
    <form className="forminput" onSubmit={handleSubmit}>
      <input
        className="forminput2"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <button className="form-button1" type="submit">
        Search
      </button>
    </form>
    </div>
  )
}

export default SearchInput
