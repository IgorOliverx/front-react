import Logo from '../assets/LOGO-CAFE.svg';
import { CiSearch } from "react-icons/ci";

const Header = () => {
return (
    <>
        <header className='w-full h-24 bg-slate-300 px-12 flex flex-row justify-between items-center'>
            <img src={Logo} alt="Logo da Zentea Coffe" className='w-24'/>
            <nav className='bg-slate-50 h-12 rounded-3xl flex flex-row gap-10 items-center'>
                <a href="" className='nav-link'>About</a>
                <a href="" className='nav-link'>Coffee</a>
                <a href="" className='nav-link'>Menu</a>
                <a href="" className='nav-link'>Blogs</a>
                <a href="" className='nav-link'>Contact</a>
            </nav>
            <span className='block cursor-pointer'>
                <CiSearch size="3em" />
            </span>
        </header>
    </>
)
}
export default Header;