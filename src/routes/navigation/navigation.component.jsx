import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import './navigation.styles.scss';
import {ReactComponent as AppLogo} from '../../assets/images/logo.svg';

const NavigationBar = () => { 
    return (
      <Fragment>

        {/* Navigation Bar */}
        <div className="navigation">

            <Link className="logo-container" to="/">
                <AppLogo className="logo"/>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>Shop</Link>
            </div>
        </div>

        {/* Outlet for components to render below the nav bar */}
        <Outlet/>
      </Fragment>
    );
}

export default NavigationBar;