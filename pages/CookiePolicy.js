import React from 'react'

const CookiePolicy = () => {
  const divStyle = {
    margin: '40px',
    color: 'black',
  }

  const headingStyle = {
    textDecoration: 'underline',
  }

  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>Ruggmobile Cookie Policy</h1>
      <p>
        <b>Last updated:</b> [10/2/2023]
      </p>
      <h2>Introduction</h2>
      <p>
        Ruggmobile ("we", "our", or "us") uses cookies on our website. By using
        the service, you consent to the use of cookies. This Cookie Policy
        explains what cookies are, how we use cookies, your choices regarding
        cookies, and further information about cookies.
      </p>
      <h2>What are Cookies</h2>
      <p>
        Cookies are small pieces of text sent by your web browser by a website
        you visit. A cookie file is stored in your web browser and allows the
        service or a third-party to recognize you and make your next visit
        easier and the service more useful to you.
      </p>
      <h2>How Ruggmobile Uses Cookies</h2>
      <p>
        When you use and access our service, we may place several cookie files
        in your web browser. We use cookies for the following purposes:
      </p>
      <ul>
        <li>
          To enable certain functions of the service, including login and signup
          processes.
        </li>
        <li>To provide analytics.</li>
        <li>To store your preferences.</li>
        <li>To enable ad delivery and behavioral targeting.</li>
      </ul>
      <p>
        We use both session and persistent cookies on the service, and we use
        different types of cookies to run the service, including essential
        cookies.
      </p>
      <h2>Your Choices Regarding Cookies</h2>
      <p>
        If you'd like to delete cookies or instruct your web browser to delete
        or refuse cookies, please visit the help pages of your web browser.
        Please note, however, that if you delete cookies or refuse to accept
        them, you might not be able to use all of the features we offer, and
        some of our pages might not display properly.
      </p>
      <h2>Further Information</h2>
      <p>
        For more information about cookies, and how to disable cookies, visit{' '}
        <a
          href="http://www.allaboutcookies.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.allaboutcookies.org
        </a>
        .
      </p>
      <p>
        If you have any questions about our use of cookies, please contact us at
        [+1868366-2121].
      </p>
    </div>
  )
}

export default CookiePolicy
