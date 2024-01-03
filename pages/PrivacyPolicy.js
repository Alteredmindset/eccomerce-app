import React from 'react'

const PrivacyPolicy = () => {
  const containerStyle = {
    margin: '40px',
    fontFamily: 'Arial, sans-serif',
  }

  const headingStyle = {
    textDecoration: 'underline',
  }

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy for Ruggmobile Imports</h1>
      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
      </p>
      <ul>
        <li>Email: ruggmobile@gmail.com</li>
      </ul>
      <h2>Information We Collect</h2>
      <p>
        We do not directly collect personal information from users. However, we
        use Clerk authentication for user signup and login.
      </p>
      <h2>Purpose of Data Collection</h2>
      <p>We collect data for the following purposes:</p>
      <ul>
        <li>Customer Service: To provide customer support and assistance.</li>
        <li>Marketing: To send marketing communications and updates.</li>
        <li>Analytics: To analyze website usage and improve our services.</li>
      </ul>
      <h2>Data Sharing</h2>
      <p>
        We may share data with the following third-party services for the
        specified purposes:
      </p>
      <ul>
        <li>Stripe: For processing payments.</li>
        <li>Facebook Event Manager: For marketing and analytics.</li>
        <li>Sanity: For backend content management.</li>
        <li>Clerk Authentication: For user authentication.</li>
      </ul>
      <h2>User Rights</h2>
      <p>
        Users have the following rights regarding their personal information:
      </p>
      <ul>
        <li>
          Right to Access: Users can request access to their personal data.
        </li>
        <li>
          Right to Correction: Users can request correction of inaccuracies in
          their data.
        </li>
        <li>
          Right to Deletion: Users can request the deletion of their
          information.
        </li>
      </ul>
      <h2>Data Security</h2>
      <p>
        We use Clerk Authentication to protect user information. We have
        implemented security measures to protect data from unauthorized access
        or breaches.
      </p>
      <h2>Children's Data</h2>
      <p>
        Our website is not intended for children, and we do not knowingly
        collect or store information related to minors.
      </p>
      <h2>Cookies and Tracking Technologies</h2>
      <p>We use the following tracking technologies:</p>
      <ul>
        <li>Facebook Event Manager: For tracking marketing events.</li>
        <li>Google Analytics: For website analytics.</li>
      </ul>
      <p>
        Users can manage or opt-out of these technologies through their browser
        settings or the settings provided by these services.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy to reflect changes in
        our data practices. The latest version will be posted on our website.
      </p>
    </div>
  )
}

export default PrivacyPolicy
