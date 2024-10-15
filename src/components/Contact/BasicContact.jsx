import React from 'react'
import ShopIcons from '../Shop/ShopIcons'
import '../Shop/style-shop/shopicons.css'
import ContactForm from './ContactForm'
import './style-contact/contactform.css'

const BasicContact = () => {
  return (
    <div>
        <ContactForm />
        <ShopIcons />
    </div>
  )
}

export default BasicContact