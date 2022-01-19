import React from 'react';
import style from './Timers.module.sass'
import MinusOutlined from "@ant-design/icons/lib/icons/MinusOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

const BreakTimer = (props) => {

    const minutes = Math.floor(props.breakSeconds / 60);
    const seconds = props.breakSeconds % 60;

    const increaseMinutes = () => {
        props.changeMinutes(true)
    }

    const decreaseMinutes = () => {
        props.changeMinutes(false)
    }

    return (
        <>
            <h2 className={style.title}>Break</h2>
            <div className={style.timer}>
                <button className={style.btn} disabled={props.isStarted} onClick={decreaseMinutes}><MinusOutlined /></button>
                <h3 className={style.clock}>
                    {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}
                </h3>
                <button className={style.btn} disabled={props.isStarted} onClick={increaseMinutes}><PlusOutlined /></button>
            </div>

        </>
    );
};

export default BreakTimer;