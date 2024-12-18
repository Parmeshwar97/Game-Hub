import logo from '../assets/logo.webp'
const NavBar = () => {
    return (
        <nav className='flex items-center'>
            <img src={logo} alt="website-logo" className='w-20' />
            <p>Navbar</p>
        </nav>
    )
}

export default NavBar;