import React from 'react'

import './Contact.css'

import GoogleMapsIcon from '@/assets/icons/google-maps.svg'

const Contact = () => {
  return (
    <div className='footer-contact'>
      <div className='footer__title'>İLETİŞİM</div>

      <div className='footer-contact__context'>
        <Address />
        <PhoneEmail />
      </div>
    </div>
  )
}

const Address = () => {
  return (
    <div className='footer-contact__address-context'>
      <div className='footer__subtitle'>ADRES</div>

      <div className='footer-contact__mailing-address'>
        <div>5300 SOK. NO: 34</div>
        <div>75. YIL MAH. 45030</div>
        <div>YUNUSEMRE/MANİSA</div>
      </div>

      <a
        href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x14b99cc71003d931:0xde300e72410d5fbe?source=g.page.default'
        target='_blank'
        rel='noopener noreferrer'
        className='footer-adress__map-button'
      >
        <GoogleMapsIcon className='footer-adress__map-button-icon' />{' '}
        <span className='footer-adress__map-button-innertext'>
          Haritalarda Göster
        </span>
      </a>
    </div>
  )
}

const PhoneEmail = () => {
  return (
    <div className='footer-contact__communication-context'>
      <div className='footer-contact__phone'>
        <div className='footer__subtitle'>TELEFON</div>

        <a href='tel:+902362335054' className='footer-contact__number'>
          +90 236 233 50 54
        </a>

        <a href='tel:+902362335866' className='footer-contact__number'>
          +90 236 233 58 66
        </a>
      </div>

      <div className='footer-contact__phone'>
        <div className='footer__subtitle'>FAX</div>

        <a href='tel:+902362361107' className='footer-contact__number'>
          +90 236 236 11 07
        </a>
      </div>

      <div className='footer-contact__email'>
        <div className='footer__subtitle'>EMAIL</div>
        <a
          href='mailto:info@soyaendustriyel.com'
          className='footer-contact__email-address'
        >
          info@soyaendustriyel.com
        </a>
      </div>
    </div>
  )
}

export default Contact
