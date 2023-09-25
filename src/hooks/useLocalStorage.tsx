import React, { useState, useEffect } from 'react'

const useLocalStorage = (key: any, init: any): any => {
    const sortTasks = (data: any) => {
        // let sortedTask = data.map((it: any) => {
        //     if (it.isImp){
        //         return it
        //     }
        //     if()
        // })
        return data
    }

    const [value, setValue] = useState(() => {
        let data: any = window.localStorage.getItem(key);
        data = sortTasks(data)
        return data ? JSON.parse(data) : init;
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])



    return [value, setValue]
}

export default useLocalStorage