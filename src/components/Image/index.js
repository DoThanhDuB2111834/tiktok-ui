import { useState, forwardRef } from 'react';

const defaultImage =
    'https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/346ccca06e4b73acc276109c82645098.jpeg?lk3s=a5d48078&nonce=5178&refresh_token=cd5b6d81a930a2dac141e6fcbc9dfe7b&x-expires=1738292400&x-signature=Vv%2FDMFFzuIXVN4kzAvEtMGnML3w%3D&shp=a5d48078&shcp=81f88b70';

function Image({ src, ...props }, ref) {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        console.log(123);
        setFallBack(defaultImage);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handleError}
            alt=''
        />
    );
}

export default forwardRef(Image);
