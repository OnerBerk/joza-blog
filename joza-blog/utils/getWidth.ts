import {useEffect, useState} from "react";

const GetWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
}
export default GetWidth;