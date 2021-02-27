import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){

    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/DanielFariias.png" alt=" Foto Perfil"/>
            <div>
                <strong>Daniel Farias</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { String(level).padStart(2, '0') }
                    
                </p>
            </div>
        </div>
        
    )
}