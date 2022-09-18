/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState } from 'react'

const useScrollHorizontal = (ref, scrollValue = 100) => {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = useCallback(() => {
        setIsHovering(true)
    }, [])

    const handleMouseOut = useCallback(() => {
        setIsHovering(false)
    }, [])

    React.useEffect(() => {
        function handleScroll(e) {
            if (!isHovering) return
            if (e.deltaY > 0) ref.current.scrollLeft += scrollValue
            else ref.current.scrollLeft -= scrollValue
        }
        window.addEventListener('wheel', handleScroll)
        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [isHovering, ref, scrollValue])
    return {
        handleMouseOver,
        handleMouseOut,
    }
}

export default useScrollHorizontal
