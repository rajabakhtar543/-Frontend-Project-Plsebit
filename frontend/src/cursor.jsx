import React, { useEffect, useRef } from 'react';
import './cursor.css';

const Cursor = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  
  const colors = [
    "#aaff00", // Bright lime green
    "#99e600", // Slightly darker lime green
    "#88cc00", // Medium lime green
    "#77b300", // More muted lime green
    "#66a300", // Softened lime green
    "#559900", // Dark lime green
    "#448800", // Deeper lime green
    "#337700", // Dark olive green
    "#226600", // Even darker olive green
    "#115500", // Deep forest green
    "#004400", // Dark green
    "#1b5e20", // Forest green
    "#2e7d32", // Darker shade of lime
    "#43a047", // Medium green with lime tint
    "#64dd17", // Light bright lime green
    "#76ff03", // Very light lime green
    "#66bb6a", // Muted lime green
    "#388e3c", // Darker forest green
    "#33691e", // Dark lime green, more brownish
    "#4caf50", // A balanced lime green
    "#81c784", // Lighter, soft lime green
    "#aed581"  // Pastel lime green
  ];
  

  useEffect(() => {
    const circles = circlesRef.current;

    // Initialize circle colors and positions
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {new Array(22).fill(0).map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default Cursor;
