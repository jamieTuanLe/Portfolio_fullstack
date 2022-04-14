import React, { useState } from 'react'

import { client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
import './Footer.scss'

function Footer() {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true)

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message,
        }

        client.create(contact)
            .then(() => {
                setLoading(false)
                setIsFormSubmitted(true)
            })
    }

    return (
        <>
            <h2 className="head-text">Contact <span>Me</span></h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:tuanle.eagle@gmail.com" className="p-text">tuanle.eagle@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile"/>
                    <a href="tel: 0334501000" className="p-text">+84 3345 01 000</a>
                </div>
            </div>
        {!isFormSubmitted ?
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className="p-text" placeholder="Your Name" type="name" name="name" value={name} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input className="p-text" placeholder="Your Email" type="email" name="email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea 
                        className="p-text" 
                        placeholder="Your Message"
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                    />
                </div>
                <button className="p-text" type="button" onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
            </div>
            : <div>
                <h3 className="head-text">Thanks you for getting</h3>
            </div>}
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
    )