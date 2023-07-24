import {Fragment} from 'react'
import mealimage from '../../asset/rachel-park-hrlvr2ZlUNk-unsplash.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCardButton'
function Header(props){
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Foodie</h1>
                <HeaderCartButton clickHandler={props.clickHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealimage}/>
            </div>
        </Fragment>
    )
}
export default Header