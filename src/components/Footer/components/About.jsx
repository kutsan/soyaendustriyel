import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className='footer-about'>
      <div className='footer__title'>HAKKIMIZDA</div>

      <div className='footer-about__context'>
        <div className='footer-about__company-name'>
          Soya Endüstriyel Tüketim San. Tic. Ltd. Şti.
        </div>

        <div className='footer-about__company-desc'>
          1 Ocak 2020 tarihinde Manisa’da, Yeşiltepe Ticaret şirketinden devir
          alınarak Canalp Soya tarafından endüstriyel tedarik sektöründe
          Yeşiltepe Ticaret’in kazandığı güven ve kalite anlayışını ileri
          taşıyarak hizmet vermeye devam etmektedir.
        </div>
      </div>
    </div>
  )
}

export default About
