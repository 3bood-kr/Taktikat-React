import React from 'react';
import styles from './Toggle.module.css'

interface Props{
    onClick: () => void
}

export default function Toggle({onClick}: Props) {
    return (
        <>
            <label className={styles.switch}>
                <input type='checkbox' id={styles.togBtn} onClick={onClick}/>
                <div className={`${styles.slider} ${styles.round}`}>
                    <span className={styles.on}>Articles</span>
                    <span className={styles.off}>Videos</span>
                </div>
            </label>
        </>
    );
}
