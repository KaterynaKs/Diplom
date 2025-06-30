import '../../styles/style.scss';
import { useState, useEffect } from 'react';
import dark from '../../assets/images/mode_dark.svg';
import light from '../../assets/images/mode_light.svg';

const ModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  const toggleTheme = (e) => {
    e.preventDefault();
    setIsDark(prev => !prev);
  };

  return (
    <button onClick={toggleTheme}>
      <img className="theme-toggle" src={isDark ? dark : light} alt="mode" />
    </button>
  );
};

export default ModeToggle;