 

import styles from './styles.module.css'
import { RoutersLink } from '../../RoutersLink';
 


 export function Footer () {
    
  
    return (
       <footer className={styles.foot}>
        <RoutersLink href="/About-pomodoro">Entenda como funciona a técnica de Pomodoro 🍅 </RoutersLink>
        <RoutersLink href="/">Chronos Pomodoro &copy;{new Date().getFullYear()} - feito com 💙</RoutersLink>
       </footer>
    ); 
}