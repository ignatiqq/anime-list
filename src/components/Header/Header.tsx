import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import moonIcon from "../../assets/images/moonIcon.png";
import sunIcon from "../../assets/images/sunIcon.png";
import githubIcon from "../../assets/images/githubIcon.png";


const Header = () => {

  const dispatch = useAppDispatch();

  const { theme } = useAppSelector(({generalSettings}) => {
    return {
      theme: generalSettings.theme
    }
  })

  const changeThemeHandler = () => {
    dispatch({type: "SET_THEME"});
  }

  React.useEffect(() => {
    if(theme) {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  return (
    <header className='p-6 max-w-[62rem] margin my-0 mx-auto flex justify-between flex-wrap'>
        <div>
            <a target="_blank" href="https://github.com/ignatiqq">
              <img className='max-w-[32px]' src={githubIcon} alt="github" />
            </a>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>AniWorld</h1>
        </div>
        <div>
            <button onClick={changeThemeHandler} className='max-w-[32px]'>
              <img className='max-w-[32px]' src={theme === "dark" ? moonIcon : sunIcon} alt="change theme" />
            </button>
        </div>
    </header> 
  )
}

export default Header;