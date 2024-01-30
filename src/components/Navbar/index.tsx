import './index.scss';

interface Iprops {
    webLogo: string;
    webAbout: string;
    isLoggedIn: boolean;
    setIsLoggedIn: ( val: boolean ) => void;
}

const Navbar = ( { webLogo, webAbout, isLoggedIn, setIsLoggedIn }: Iprops ) => {
    return (
        <nav>
            <ul className='navbar-list'>
                <li><a href="/">{ webLogo.toUpperCase() }</a></li>
                <li><a href="/">home</a></li>
                <li><a href="/">{ webAbout }</a></li>
                <li><a href="/">contact</a></li>
                <button onClick={ () => setIsLoggedIn( !isLoggedIn ) }>{ isLoggedIn ? "LogOut" : "LogIn" }</button>
            </ul>
        </nav>
    );
};
export default Navbar;