// components/Circle.js
import React, { useEffect, useState } from 'react';
import '../MouseFollower.css';

const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [borderColor, setBorderColor] = useState('white'); // Default border color
    const circleSize = 50; // Circle size

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Smoothly update position using requestAnimationFrame
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const checkBackgroundColor = () => {
            const bgColor = getComputedStyle(document.body).backgroundColor;
            const rgb = bgColor.match(/\d+/g);
            if (rgb) {
                const r = parseInt(rgb[0]);
                const g = parseInt(rgb[1]);
                const b = parseInt(rgb[2]);

                const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                setBorderColor(brightness < 128 ? 'white' : 'gray'); // Choose border color based on brightness
            }
        };

        checkBackgroundColor();
        window.addEventListener('resize', checkBackgroundColor);

        return () => {
            window.removeEventListener('resize', checkBackgroundColor);
        };
    }, []);

    // Ensure the position is within screen bounds
    const adjustedPosition = {
        x: Math.max(circleSize / 2, Math.min(position.x, window.innerWidth - circleSize / 2)),
        y: Math.max(circleSize / 2, Math.min(position.y, window.innerHeight - circleSize / 2)),
    };

    return (
        <div
            className="circle hidden md:block"
            style={{
                left: `${adjustedPosition.x}px`,
                top: `${adjustedPosition.y}px`,
                transform: 'translate(-50%, -50%)',
                border: `1px solid ${borderColor}`,
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                pointerEvents: 'none', // Prevent interaction blocking
            }}
        ></div>
    );
};

export default MouseFollower;
