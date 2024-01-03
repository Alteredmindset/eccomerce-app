import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { useUser } from '@clerk/clerk-react'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'
import GooglePayButton from '../components/'

const Cart = () => {
  const cartRef = useRef()
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext()

  const { user } = useUser()

  const saveCartToLocal = () => {
    if (user) {
      // Check if the user is logged in
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }

  useEffect(() => {
    if (user) {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'))
      if (savedCartItems) {
        // Set the cart items in your state.
        // Use your context or state management logic to update the cartItems state.
      }
    }
  }, [user])

  useEffect(() => {
    if (!user && cartItems.length > 0) {
      // Clear the cart items in your state.
      // Use your context or state management logic to update the cartItems state.
      localStorage.removeItem('cartItems')
    }
  }, [user, cartItems])

  // const qwww = async () => {
  //   const stripe = await getStripe()

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartItems),
  //   })

  //   if (response.statusCode === 500) return

  //   const data = await response.json()

  //   toast.loading('Redirecting...')

  //   stripe.redirectToCheckout({ sessionId: data.id })
  // }

  const sendToWhatsApp = () => {
    let cartDetails = 'Your Order:\n'
    cartItems.forEach(item => {
      cartDetails += `Item: ${item.name}, Price: $${item.price}, Quantity: ${item.quantity}\n`
    })
    cartDetails += `Total Price: $${totalPrice}`

    // encode the cart details to be URL friendly
    const encodedCartDetails = encodeURIComponent(cartDetails)

    // replace the phone number with your own phone number
    const phoneNumber = '+18683662121'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedCartDetails}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map(item => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="num">{item.quantity}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={sendToWhatsApp}>
                Buy all Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
