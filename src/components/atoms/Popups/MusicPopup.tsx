import './popup.css';
import React from 'react';

interface MusicPopupProps {
  onAccept: () => void;
  onDecline: () => void;
}

const MusicPopup: React.FC<MusicPopupProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Voulez-vous activer la musique de fond ?</h2>
        <button onClick={onAccept}>Oui</button>
        <button onClick={onDecline}>Non</button>
      </div>
    </div>
  );
};

export default MusicPopup;
