import React, { useRef, useEffect, useState } from 'react';
type LazyLoadImageProps = {
    src:String 
}
const LazyLoadImage: React.FC<LazyLoadImageProps> = (props) => {
    const { src = '', ...other } = props
    const [URL, setURL] = useState('')
    const img = useRef(null)

    useEffect(() => {
        var io = new IntersectionObserver((entries) => {
            // @ts-ignore
            if (entries[0].intersectionRatio > -10) {
                setURL(src as React.SetStateAction<string>)
                img.current && io.unobserve(img.current)
            }
        }, {})

        if (img.current) {
            io.observe(img.current)
        }
    }, [])
    return (
        <img ref={img} src={URL} {...other} />
    )
}

export default LazyLoadImage;