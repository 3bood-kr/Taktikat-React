import { useState, useEffect } from "react";

import React from 'react'

export default function useDebounce(value: string, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState('');
    useEffect(() => {
        const id = setTimeout(() => {
            if(value.length >= 3){
                setDebouncedValue(value);
            }
        }, delay)
        return () => {
            console.log('clearing timeout')
            clearTimeout(id);
        }
    }, [value, delay]);

    return debouncedValue;
}
