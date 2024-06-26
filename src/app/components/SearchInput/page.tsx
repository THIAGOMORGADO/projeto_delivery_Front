'use client'

import { useState } from 'react'
import styles from './SearchInput.module.css'

type Props = {
    mainColor: string;
    onSearch: (searchValue: string) => void;
}

export const SearchInput = ({ mainColor, onSearch }: Props) => {
    const [focused, setFocused] = useState(false);
    const [searchValue, setSeearchValue] = useState('');

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            onSearch(searchValue);
        }
    }

    return(
        <div className={styles.container} 
        style={{ borderColor: focused ? mainColor : '#FFFFF' }}
        >
            <div className={styles.button} onClick={()=>onSearch(searchValue)}></div>
            <input 
            type='text' 
            className={styles.input} 
            placeholder='Digite o nome do que produto' 
            onFocus={() => setFocused(true)} 
            onBlur={() => setFocused(false)}
            onKeyUp={handleKeyUp}
            value={searchValue}
            onChange={(e)=>setSeearchValue(e.target.value)}
            />
        </div>
    )
}