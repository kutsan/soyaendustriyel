// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Contact.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/icons/google-maps.svg... Remove this comment to see the full error message
import GoogleMapsIcon from '@/assets/icons/google-maps.svg'

const Contact = () => (
    <div className='footer-contact'>
      <div className='footer__title'>İLETİŞİM</div>

      <div className='footer-contact__context'>
        <Address />
        <PhoneEmail />
      </div>
    </div>
  )

const Address = () => (
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

const PhoneEmail = () => (
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

export default Contact
