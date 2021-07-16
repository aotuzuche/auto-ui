import React from 'react'
import { isH5 } from '../__utils/env'

const isSupportLoading = isH5 && 'loading' in new Image()

let io: IntersectionObserver

if ((window as any).IntersectionObserver) {
  io = new IntersectionObserver(
    entry => {
      entry.forEach(item => {
        if (item.isIntersecting) {
          const ele = item.target
          // @ts-ignore
          if (!ele.src && ele && ele.dataset && ele.dataset._src) {
            // @ts-ignore
            ele.setAttribute('src', ele.dataset._src)
          }
        }
      })
    },
    {
      rootMargin: '100px 0px',
    },
  )
}

const LazyImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = props => {
  const { src, ...rest } = props
  const imgRef = React.useRef(null)
  React.useEffect(() => {
    if (!isSupportLoading && io && imgRef.current) {
      io.observe(imgRef.current!)
      return () => {
        io.unobserve(imgRef.current!)
      }
    }
  }, [])

  if (isSupportLoading) {
    // @ts-ignore
    return <img src={src} loading="lazy" {...rest} />
  }
  if (!(window as any).IntersectionObserver) {
    return <img src={src} {...rest} />
  }
  // @ts-ignore
  return <img ref={imgRef} data-_src={src} {...rest} lazyLoad={true}/>
}

export default LazyImg
