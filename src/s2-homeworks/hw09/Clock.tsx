import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {


    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [disabled,setDisabled]=useState(true)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    console.log(date)

    const start = () => {

        let id = setInterval(() => {
            setDate(new Date(Date.now()))
        }, 1000)
        setTimerId(+id)
        setDisabled(false)


        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        clearInterval(timerId)
        setDisabled(true)
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    }

    const onMouseEnter = () => {
        setShow(true)

    }
    const onMouseLeave = () => {
        setShow(false)

    }

    function twoDigits(num:number) {
        console.log(date.getMonth())
        //console.log('0'+num)
      //  console.log(('0' + num).slice(-2))
        return num < 10? ('0' + num):num

    }

    const stringTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${twoDigits(date.getDate())}.${twoDigits(date.getMonth()+1)}.${date.getFullYear()}` || <br/> // день.месяц.год (30.03.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем


    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)


    const stringDay = date.toLocaleDateString('en-US', {weekday: 'long'}) || <br/> // пишут студенты
    const stringMonth = date.toLocaleDateString('en-US', {month: 'long'})  || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!disabled} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={disabled} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
