import React, { useState, useEffect } from 'react'

const useLocalStorage = (key: any, init: any): any => {
    const [value, setValue] = useState(() => {

        const data = window.localStorage.getItem(key);
        console.log(data);
        return data ? JSON.parse(data) : init;

    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocalStorage