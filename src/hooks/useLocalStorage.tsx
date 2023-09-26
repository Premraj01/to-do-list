import React, { useState, useEffect } from 'react'


const useLocalStorage = (key: any, init: any): any => {

    const sortTasks = (tasks: any) => {
        for (let i = 0; i < tasks.length; i++) {
            let j = 0
            if (tasks[i + 1]?.isImp) {
                if (tasks[i]?.isImp !== tasks[i + 1]?.isImp) {
                    var temp = tasks[i];
                    tasks[i] = tasks[i + 1];
                    tasks[i + 1] = temp;
                } else {
                    i++
                }
            } else {
                if (!tasks[i + 1]?.isCompleted) {
                    var temp = tasks[i + 1];
                    tasks[i] = tasks[tasks.length - j - 1];
                    tasks[tasks.length - j - 1] = temp;
                }
            }
        }

        console.log(tasks);
        return tasks
    }

    const [value, setValue] = useState(() => {
        let tasks: any = window.localStorage.getItem(key);
        tasks = sortTasks(JSON.parse(tasks))
        return tasks ? tasks : init;
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])



    return [value, setValue]
}

export default useLocalStorage