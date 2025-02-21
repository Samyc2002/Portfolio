import { useState, useEffect } from 'react';

function useWindowScroll() {
    const [windowScroll, setWindowScroll] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        // Handler to call on window scroll
        function handleScroll() {
            // Set window x/y to state
            setWindowScroll({
                x: window.scrollX,
                y: window.scrollY,
            });
        }

        // Initial size on mount
        handleScroll();

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowScroll;
}

export default useWindowScroll;
