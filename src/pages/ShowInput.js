import React, { useState } from 'react'

export default function ShowInput(props) {
    const { input } = props
    const [time, setTime] = useState();

    const updateTime = () => {
        setInterval(() => {
            setTime(new Date().toUTCString())
        }, 1000)
    }

    if (Array.isArray(input)) {
        return (
            <div>
                {input.map(i => (
                    <div>{i}</div>
                ))}
            </div>
        )
    } else if (typeof input === 'boolean') {
        return (
            <div>
                {time}
                {updateTime()}
            </div>
        )
    } else {  
        return (
            <div>{input}</div>
        )
    }
}
