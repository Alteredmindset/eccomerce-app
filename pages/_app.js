import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import CookieConsent from 'react-cookie-consent'
import { ClerkProvider } from '@clerk/clerk-react'
import '../styles/globals.css'
import Link from 'next/link'
import Cookies from 'js-cookie'

const clerkPubKey = 'pk_test_c3VwZXJiLWNoaWNrZW4tMjIuY2xlcmsuYWNjb3VudHMuZGV2JA'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // Facebook Pixel Code
  useEffect(() => {
    const FACEBOOK_PIXEL_ID = '706033334197775'

    const pageview = () => {
      window.fbq('track', 'PageView')
    }

    // Initialize the Facebook Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(
      window,
      document,
      'script',
      `https://connect.facebook.net/en_US/fbevents.js`
    )
    fbq('init', FACEBOOK_PIXEL_ID)

    // Trigger the pageview event
    pageview()

    // Bind the event to every route change
    router.events.on('routeChangeComplete', pageview)

    // Cleanup event on component unmount
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  useEffect(() => {
    // Check if user has already accepted cookies
    if (Cookies.get('userAcceptedCookies')) {
      // If they have, hide the backdrop immediately
      document.getElementById('backdrop').style.display = 'none'
    }
  }, [])

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <StateContext>
        <Layout>
          {/* Backdrop */}
          <div
            id="backdrop"
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: '999',
            }}
          />
          <CookieConsent
            location="center"
            buttonText="Accept Cookies 🍪"
            cookieName="userAcceptedCookies"
            onAccept={() => {
              // Remove the backdrop when cookies are accepted
              document.getElementById('backdrop').style.display = 'none'
            }}
            style={{
              background: '#fff',
              borderRadius: '9px',
              width: '432px',
              height: '339px',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              zIndex: '1000',
            }}
            buttonStyle={{
              color: '#fff',
              fontSize: '13px',
              backgroundColor: '#000',
              marginBottom: '10px',
              position: 'relative',
              top: '100px',
              right: '330px',
              padding: '10px 70px',
              paddingLeft: '70px',
              paddingRight: ' 70px',
              borderRadius: '10px',
            }}
            expires={150} // days
          >
            <div>
              <h1
                style={{ color: '#000', fontWeight: '600', marginTop: '10px' }}
              >
                Heres a Cookie 🍪
              </h1>
              <h4
                style={{ color: '#000', fontWeight: '400', marginTop: '30px' }}
              >
                This website uses cookies to enhance the user experience as
                specified in the{' '}
                <span style={{ fontSize: '15px', marginTop: '10px' }}>
                  <Link href="/CookiePolicy">
                    <a style={{ color: 'blue' }}>Cookie Policy</a>
                  </Link>
                  .
                </span>
              </h4>
              <h4
                style={{ color: '#000', fontWeight: '400', marginTop: '20px' }}
              >
                You can consent to the use of cookies by using the “Accept”
                button.
              </h4>
            </div>
          </CookieConsent>
          <Toaster />

          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ClerkProvider>
  )
}

export default MyApp
