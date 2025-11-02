import React from 'react'
import Navbar from './Components/Navbar/Navbar'


function App() {


  const current_theme = localStorage.getItem('theme');
  const[theme, setTheme] = React.useState(current_theme ? current_theme : 'light');

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
