 
import { HistoryIcon, HomeIcon, MoonIcon, Settings,  SunIcon } from 'lucide-react';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { RoutersLink } from '../../RoutersLink';
 
type AvalibTheme = 'Dark'  | 'light'



 export function Menu () {
    
   const [theme,setTheme] = useState <AvalibTheme> (()=>{
      const storageTheme = (localStorage.getItem('theme') as AvalibTheme) || 'Dark';
      
      return storageTheme;
   })
   const nextIcon = {
      Dark:<SunIcon/>,
      light:<MoonIcon/>,
   };

   function handletheme (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
      event.preventDefault();


   setTheme(prevTheme =>{
      const nexTheme =prevTheme === 'Dark' ? 'light': 'Dark'
      
      return nexTheme;
   });

   };
   useEffect(()=>{
     document.documentElement.setAttribute('data-theme',theme)
     localStorage.setItem('theme',theme);
   },[theme]);
   
   
  
    return (
        <nav className={styles.menu}>
         
         <RoutersLink className={styles.menuLink} href="/" aria-label='ir para home' title='ir para home'>
            <HomeIcon/>
         </RoutersLink>

         <RoutersLink className={styles.menuLink} href="/history/" aria-label='Ver historico' title='Ver historico'>
            <HistoryIcon/>
         </RoutersLink>

         <RoutersLink className={styles.menuLink} href="setting]/" aria-label='Ir pras Configuranções' title='Ir pras Configuranções'>
            <Settings/>
         </RoutersLink>

         <RoutersLink className={styles.menuLink} href="#" aria-label='Mudar tema' title='Mudar tema' onClick={handletheme}>
            {nextIcon[theme]}
         </RoutersLink>
        </nav>
    ); 
}