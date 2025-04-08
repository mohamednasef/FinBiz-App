import React, { useEffect, useState } from 'react'

const Switcher = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      const saved = localStorage.getItem("theme") === "dark";
      setIsDark(saved);
      document.body.classList.toggle("dark-theme", saved);
    }, []);
  
    const toggleTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      document.body.classList.toggle("dark-theme", newTheme);
    };
  return (
    <div className='theme-switcher'>
 
       
 
    
      <button onClick={toggleTheme}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  )
}

export default Switcher
