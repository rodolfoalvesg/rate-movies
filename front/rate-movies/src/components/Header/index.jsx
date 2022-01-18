import {HeaderMain, HeaderInternal} from './style';
import login from '../../assets/login.svg'
import logo from '../../assets/logo.svg'

function Header(){
    return(
        <HeaderMain>
            <HeaderInternal>
                <img src={logo} alt="logo" className="logo"/>
                <h1>Administrador</h1>
                <img src={login} alt="Login" className="login"/>
            </HeaderInternal>
        </HeaderMain>
    );
}

export default Header;