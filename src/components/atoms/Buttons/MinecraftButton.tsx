import React from 'react';
import './css/minecraftButton.css';

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
  const audio = new Audio('./sound/minecraft-menu-button.mp3');
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  } else {
    console.error("Audio element not found");
  }
}

const MinecraftButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick = playClickSound,
  disabled = false,
  style = {},
  className = '',
  label = '',
  icon,
  type = 'button',
}) => {
  const baseClasses = 'MinecraftButton py-2 px-4 tracking-wide text-xl text-white';
  const hoverClasses = 'hover:scale-105 before:bg-stone';

  return (
    <>
      <button
        className={`${baseClasses} ${hoverClasses} ${className}`}
        onClick={() => {
          playClickSound();
          if (onClick) onClick();
        }}
        disabled={disabled}
        aria-label={label}
        type={type}
        style={style}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span>{label}</span>
      </button>
    </>
  );
};

export default MinecraftButton;
