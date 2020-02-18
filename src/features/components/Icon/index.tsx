import React from 'react';
interface IconProps {
  iconName: string;
  className: string;
}

const Icon = ({ iconName, className }: IconProps) => {
  return <img className={className} alt={`${iconName} icon`} src={`assets/${iconName}-icon.png`} />;
};

export default Icon;