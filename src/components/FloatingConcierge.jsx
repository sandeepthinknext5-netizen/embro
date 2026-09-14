import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingConcierge() {
  const phoneNumber = '9812387456';
  const whatsappNumber = '919812387456';
  const whatsappMessage = encodeURIComponent(
    'Hello Embroshyal Atelier, I would like to inquire about your bespoke furniture and luxury interior design services.'
  );

  return (
    <aside aria-label="Quick Concierge Support" className="floating-concierge-container">
      
      {/* 1. WhatsApp Button with Pulse Ring & Floating Animation */}
      <div className="concierge-btn-holder whatsapp-holder">
        <span className="pulse-ripple-ring whatsapp-pulse"></span>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="concierge-floating-btn whatsapp-btn"
          aria-label="Chat with Embroshyal Concierge on WhatsApp"
        >
          <span className="concierge-btn-tooltip">WhatsApp Concierge</span>
          
          <svg 
            viewBox="0 0 24 24" 
            width="24" 
            height="24" 
            fill="currentColor"
            className="whatsapp-icon-svg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29s-1.47-.73-1.7-.81c-.23-.09-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43z"/>
          </svg>
        </a>
      </div>

      {/* 2. Direct Phone Call Button with Golden Pulse & Wiggle Animation */}
      <div className="concierge-btn-holder phone-holder">
        <span className="pulse-ripple-ring phone-pulse"></span>
        <a 
          href={`tel:${phoneNumber}`}
          className="concierge-floating-btn phone-btn"
          aria-label="Call Embroshyal Luxury Concierge"
        >
          <span className="concierge-btn-tooltip">Call 9812387456</span>
          <Phone size={22} className="phone-icon-svg animated-phone-icon" />
        </a>
      </div>

      <style>{`
        .floating-concierge-container {
          position: fixed;
          bottom: 30px;
          right: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 9950;
          animation: conciergeEntry 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .concierge-btn-holder {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Floating levitation sync */
        .whatsapp-holder {
          animation: gentleFloat 3.8s ease-in-out infinite alternate;
        }

        .phone-holder {
          animation: gentleFloat 4.2s ease-in-out 0.4s infinite alternate;
        }

        /* Pulsing Radar Ring */
        .pulse-ripple-ring {
          position: absolute;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        .whatsapp-pulse {
          background: rgba(37, 211, 102, 0.45);
          animation: radarPulseWhatsApp 2.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }

        .phone-pulse {
          background: rgba(194, 155, 56, 0.45);
          animation: radarPulsePhone 2.8s cubic-bezier(0.24, 0, 0.38, 1) 1.2s infinite;
        }

        @keyframes radarPulseWhatsApp {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.65);
            opacity: 0;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes radarPulsePhone {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.65);
            opacity: 0;
          }
          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes gentleFloat {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-6px);
          }
        }

        @keyframes conciergeEntry {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.85);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Floating Action Buttons */
        .concierge-floating-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 2;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.32);
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .concierge-floating-btn:hover {
          transform: scale(1.15) rotate(5deg);
        }

        /* WhatsApp Styling */
        .whatsapp-btn {
          background: linear-gradient(135deg, #25D366 0%, #1EBE5D 100%);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .whatsapp-btn:hover {
          background: linear-gradient(135deg, #29E870 0%, #20BA5A 100%);
          box-shadow: 0 14px 34px rgba(37, 211, 102, 0.55);
        }

        .whatsapp-icon-svg {
          transition: transform 0.3s ease;
        }

        .whatsapp-btn:hover .whatsapp-icon-svg {
          transform: scale(1.12);
        }

        /* Phone Styling */
        .phone-btn {
          background: linear-gradient(135deg, #1C1917 0%, #12100E 100%);
          color: #C29B38;
          border: 1px solid rgba(194, 155, 56, 0.45);
        }

        .phone-btn:hover {
          background: linear-gradient(135deg, #C29B38 0%, #AD872C 100%);
          color: #12100E;
          border-color: #D4AB47;
          box-shadow: 0 14px 34px rgba(194, 155, 56, 0.55);
        }

        /* Phone periodic wobble ring */
        .animated-phone-icon {
          animation: phoneRinging 4.5s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes phoneRinging {
          0%, 80%, 100% {
            transform: rotate(0deg);
          }
          82% {
            transform: rotate(14deg);
          }
          84% {
            transform: rotate(-14deg);
          }
          86% {
            transform: rotate(10deg);
          }
          88% {
            transform: rotate(-10deg);
          }
          90% {
            transform: rotate(6deg);
          }
          92% {
            transform: rotate(0deg);
          }
        }

        /* Luxury Tooltip Pill */
        .concierge-btn-tooltip {
          position: absolute;
          right: 68px;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          background: rgba(20, 18, 16, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #FFFFFF;
          font-family: var(--font-sans, sans-serif);
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 0.45rem 0.95rem;
          border-radius: 50px;
          white-space: nowrap;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(194, 155, 56, 0.3);
        }

        .concierge-floating-btn:hover .concierge-btn-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(-50%) translateX(0px);
        }

        @media (max-width: 900px) {
          .floating-concierge-container {
            bottom: 82px;
            right: 18px;
            gap: 12px;
          }

          .concierge-floating-btn, .pulse-ripple-ring {
            width: 46px;
            height: 46px;
          }

          .concierge-btn-tooltip {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
