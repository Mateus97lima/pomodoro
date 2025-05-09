 
import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css'
import { RoutersLink } from '../../RoutersLink';
 


 export function Logo () {
    
  
    return (
        <div className={styles.logo}>
            <RoutersLink className={styles.logoLink} href="/">
                <TimerIcon/>
                <span>Chronos</span>
            </RoutersLink>
        </div>
    ); 
}