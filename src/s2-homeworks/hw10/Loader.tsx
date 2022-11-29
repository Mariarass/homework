import s from './Loader.module.css'
import load from './loader.svg'
export const Loader = () => <div className={s.container} >
    <img className={s.loader} src={load}/>
</div>
