import { useEffect, useState } from "react";

function Dev() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateDimensions = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        // Update the dimensions on load
        updateDimensions();

        // Add an event listener to update the dimensions when resizing the window
        window.addEventListener("resize", updateDimensions);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return (
        <div
            id="devTools"
            style={{
                border: "1px solid white",
                padding: "10px",
                color: "white",
                position: "fixed",
                top: 10,
                right: 10,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 9999,
            }}
        >
            <p>Viewport Width: {dimensions.width}px</p>
            <p>Viewport Height: {dimensions.height}px</p>
        </div>
    );
}

export default Dev;
