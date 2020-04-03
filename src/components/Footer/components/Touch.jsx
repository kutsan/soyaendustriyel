import React from 'react'

import './Touch.css'

import GoogleMapsIcon from '@/assets/icons/google-maps.svg'

const Touch = () => {
	return (
		<div className='footer-touch'>
			<div className='footer-touch__title footer__title'>İLETİŞİM</div>

			<div className='footer-touch__contact-container'>
				<div className='footer-touch__address'>
					<div className='footer__subtitle'>ADRES</div>
					<div className='footer-touch__mailing-address'>
						<div>5300 SOK. NO: 34</div>
						<div>75. YIL MAH. 45030</div>
						<div>YUNUSEMRE/MANİSA</div>
					</div>

					<a
						href='https://g.page/SoyaEndustriyel'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='footer-adress__map-button'>
							<GoogleMapsIcon className='footer-adress__map-icon' />{' '}
							<span className='footer-adress__map-span'>Haritalarda Göster</span>
						</button>
					</a>
				</div>

				<div className='footer-touch__phone-and-email'>
					<div className='footer-touch__phone'>
						<div className='footer__subtitle'>TELEFON</div>
						<div className='footer-touch__phone-number'>+90 236 233 50 54</div>
					</div>

					<div className='footer-touch__email'>
						<div className='footer__subtitle'>EMAIL</div>
						<div className='footer-touch__email-address'>info@soyaendustriyel.com</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Touch
