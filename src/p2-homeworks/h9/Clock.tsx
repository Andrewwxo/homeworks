import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {brotliCompress} from 'zlib';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() || <br/> // fix with date
    const stringDate = date?.toLocaleDateString() || <br/>// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ?  (
                <div>
                    {stringDate}
                </div>
            ) : (
                <br/>
                )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
