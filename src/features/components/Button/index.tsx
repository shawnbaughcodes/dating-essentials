import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
  type: string;
}

const Button = ({ title, onClick, type }: ButtonProps) => {
  return () => {
    switch (type) {
      case 'pill':
        return <button className="pill" title={title} onClick={onClick} />
    
      default:
        return <button className="default" title={title} onClick={onClick} />
    }
  }
};

export default Button;