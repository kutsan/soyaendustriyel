import * as React from 'react'
import { useEffect, useState, useRef, ReactNode, ReactElement } from 'react'
import LazyLoad from 'react-lazyload'

import './Image.css'

type ImageContainerProps = {
  children: ReactNode
}

const ImageContainer = ({ children }: ImageContainerProps) => (
  <div className="image-container">
    <div className="image-wrapper">{children}</div>
  </div>
)

const Placeholder = () => (
  <ImageContainer>
    <div className="image" />
  </ImageContainer>
)

const Image = ({ id }: { id: string }): ReactElement => {
  const imgEl = useRef<HTMLImageElement>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (imgEl && !imgEl?.current?.complete) {
      setLoading(true)
    }
  }, [imgEl])

  return (
    <LazyLoad once offset={0} placeholder={<Placeholder />}>
      <ImageContainer>
        {loading && <div className="image-spinner" />}

        <picture>
          <source srcSet={`/${id}.webp`} type="image/webp" />
          <img
            ref={imgEl}
            alt="Ürün resmi"
            className={`image ${loading ? '' : 'image--loaded'}`}
            src={`/${id}.jpg`}
            onLoad={() => setLoading(false)}
          />
        </picture>
      </ImageContainer>
    </LazyLoad>
  )
}

export default Image
