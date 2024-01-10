import React, { useState } from 'react'
import { IoSearchCircleOutline, IoClose } from 'react-icons/io5'

const SearchInput = () => {
  const [query, setQuery] = useState('')
  const [isMenuToggled, setIsMenuToggled] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `/search?query=${query}`
  }

  const handleIconClick = e => {
    e.stopPropagation()
    setIsMenuToggled(!isMenuToggled)
    // Optionally focus on the input when the icon is clicked
    // document.getElementById('popup-search').focus();
  }

  const handleInputClick = e => {
    e.stopPropagation()
  }

  const handleMenuClick = () => {
    setIsMenuToggled(false)
  }

  const handleCloseButtonClick = e => {
    e.stopPropagation()
    setIsMenuToggled(false)
  }

  return (
    <div>
      <div
        id="search-menu"
        className={isMenuToggled ? 'toggled' : ''}
        onClick={handleMenuClick}
      >
        <div className="wrapper">
          <form id="form" action="#" method="" onSubmit={handleSubmit}>
            <input
              id="popup-search"
              type="text"
              name="u"
              placeholder="Search for a user"
              onClick={handleInputClick}
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button id="popup-search-button" type="submit" name="search">
              <i className="ion-ios-search-strong">Enter</i>
            </button>
            <button
              id="close-button"
              type="button"
              onClick={handleCloseButtonClick}
            >
              <IoClose />
            </button>
          </form>
        </div>
      </div>

      <IoSearchCircleOutline id="search-icon" onClick={handleIconClick} />
    </div>
  )
}

export default SearchInput

// <form className="forminput" onSubmit={handleSubmit}>
// <input
//   className="forminput2"
//   type="text"
//   value={query}
//   onChange={e => setQuery(e.target.value)}
//   placeholder="Search products..."
// />
// <button className="form-button1" type="submit">
//   Search
// </button>
// </form>
