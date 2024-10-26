import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [borderColor, setBorderColor] = useState('white'); 
    const [visible, setVisible] = useState(false); 
    const circleSize = 50; // Increased size for text
    const [delayPosition, setDelayPosition] = useState({ x: 0, y: 0 }); 

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!visible) {
                setVisible(true); 
            }
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [visible]);

    useEffect(() => {
        const checkBackgroundColor = () => {
            const bgColor = getComputedStyle(document.body).backgroundColor;
            const rgb = bgColor.match(/\d+/g);
            if (rgb) {
                const r = parseInt(rgb[0]);
                const g = parseInt(rgb[1]);
                const b = parseInt(rgb[2]);

                const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                setBorderColor(brightness < 128 ? 'white' : 'gray');
            }
        };

        checkBackgroundColor();
        window.addEventListener('resize', checkBackgroundColor);

        return () => {
            window.removeEventListener('resize', checkBackgroundColor);
        };
    }, []);

    useEffect(() => {
        const updateDelayPosition = () => {
            const animationFrameId = requestAnimationFrame(() => {
                setDelayPosition(position);
            });

            return () => cancelAnimationFrame(animationFrameId);
        };

        updateDelayPosition();
    }, [position]);

    // Ensure the position is within screen bounds
    const adjustedPosition = {
        x: Math.max(circleSize / 2, Math.min(delayPosition.x, window.innerWidth - circleSize / 2)),
        y: Math.max(circleSize / 2, Math.min(delayPosition.y, window.innerHeight - circleSize / 2)),
    };

    return (
        <div
            className="circle"
            style={{
                left: `${adjustedPosition.x}px`,
                top: `${adjustedPosition.y}px`,
                transform: 'translate(-50%, -50%)',
                border: `1px solid ${borderColor}`,
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                pointerEvents: 'none',
                opacity: visible ? 1 : 0, // Control visibility with opacity
                transition: 'opacity 0.3s', // Smooth transition for visibility
                position: 'absolute', // Ensure position is absolute
                display: 'flex', // Center text
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%', // Make it circular
                overflow: 'hidden', // To clip text overflow
            }}
        >
            <span
                style={{
                    color: borderColor,
                    transition: 'transform 0.3s',
                }}
                className="text-zoom"
            >
                Hover
            </span>
        </div>
    );
};

export default MouseFollower;
