import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Global Image Fallback Handler for 100% resilient image loading
window.addEventListener(
  'error',
  (e) => {
    if (e.target && e.target.tagName === 'IMG') {
      const fallbackImages = [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80'
      ];
      const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
      if (!e.target.dataset.triedFallback) {
        e.target.dataset.triedFallback = 'true';
        e.target.src = randomFallback;
      }
    }
  },
  true
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
