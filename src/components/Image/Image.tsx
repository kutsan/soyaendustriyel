// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useEffect, useState, useRef } from 'react'
import { lazyload } from 'react-lazyload'

import './Image.css'

type ImageContainerProps = {
    children: React.ReactNode;
};

const ImageContainer = ({ children }: ImageContainerProps) => (
  <div className='image-container'>
    <div className='image-wrapper'>{children}</div>
  </div>
)

type ImageProps = {
    id?: string;
};

const Image = ({ id }: ImageProps) => {
  const imgEl = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    if (!imgEl.current.complete) {
      setLoading(true)
    }
  }, [imgEl])

  return (
    <ImageContainer>
      {loading && <div className='image-spinner' />}

      <picture>
        <source srcSet={`/${id}.webp`} type='image/webp' />
        <img
          ref={imgEl}
          alt='Ürün resmi'
          className={`image ${loading ? '' : 'image--loaded'}`}
          src={`/${id}.jpg`}
          onLoad={() => setLoading(false)}
        />
      </picture>
    </ImageContainer>
  )
}

const Placeholder = () => (
  <ImageContainer>
    <div className='image'></div>
  </ImageContainer>
)

// @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
export default lazyload({
  once: true,
  offset: 0,
  placeholder: <Placeholder />
})(Image)
