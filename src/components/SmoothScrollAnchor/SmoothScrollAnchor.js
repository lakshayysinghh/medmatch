import React from 'react';

const SmoothScrollAnchor = ({ id, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(id);
    const navbarHeight = document.querySelector('nav').offsetHeight; // Get the height of the navbar

    if (target) {
      window.scrollTo({
        top: target.offsetTop - navbarHeight, // Adjust the scroll position by the navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={id} className="nav-link" onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollAnchor;