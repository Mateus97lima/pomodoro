import { BrowserRouter, Route, Routes } from "react-router";
import { useLocation } from 'react-router'
import { Home } from "../../pages/Home";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { NotFood } from "../../pages/NotFood";
import { useEffect } from "react";
import { History } from "../../pages/History";

function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
  window.scrollTo({top:0});
  
    },[pathname])

    return null;
}

export function MainRouters () {

    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/History" element={<History />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/About-pomodoro" element={<AboutPomodoro/>}/>
          <Route path="*" element={<NotFood/>}/>
        </Routes>
        <ScrollToTop/>
      </BrowserRouter>
    );

}