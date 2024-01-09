import React from 'react'
import WhiteCard from '../../components/WhiteCard'
import './ContactPage.css'
import image from '../../assets/images/contact-img.jpg'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
    return (
        <section className='main-container py-5'>
            <div className="row g-5">
                <div className="col-6">
                    <h1 className='contact-card-heading pb-3'>
                        Contact Us
                    </h1>
                    <div className='contact-image'>
                        <img src={image} />
                    </div>
                </div>
                <div className="col-6 d-flex">
                    <div className="white-card w-100">
                        <WhiteCard >
                            <ContactForm />
                        </WhiteCard>
                    </div>
                </div>
            </div>
        </section>
    )
}
