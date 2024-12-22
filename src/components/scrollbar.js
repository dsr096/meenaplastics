import React from 'react';
import "./scrollbar.css"
function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  return (
    <div className="scroll-btn" style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      {/* Up arrow for scrolling to the top */}
      <button id="scrollTop" onClick={scrollToTop} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        ↑
      </button>

      {/* Down arrow for scrolling to the bottom */}
      <button id="scrollBottom" onClick={scrollToBottom} style={{ margin: '5px', padding: '10px', fontSize: '16px' }}>
        ↓
      </button>
    </div>
  );
}

export default ScrollButtons;
