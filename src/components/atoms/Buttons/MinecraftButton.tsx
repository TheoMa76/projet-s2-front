import React from 'react';
import './/css/minecraftButton.css';


type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const playClickSound = () => {
  const audio = document.getElementById('click-sound') as HTMLAudioElement;
  console.log("OUHOH");
  
  audio.play();
}

const MinecraftButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick = playClickSound,
  disabled = false,
  style = '',
  className = '',
  label = '',
  icon,
  type = 'button',
}) => {
  const baseClasses = 'MinecraftButton py-2 px-4 tracking-wide text-xl text-white';
  const hoverClasses = 'hover:scale-105';


  return (
    <>
  <audio controls id="click-sound" src="./src/sound/test.mp3">
    </audio>
    <button
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      type={type}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </button>
    </>
  );
};

export default MinecraftButton;
