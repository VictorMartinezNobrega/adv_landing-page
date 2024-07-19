import "./NavBar.css";
import Logo from "../../assets/Images/Logo.png";

const NavBar = () => {
  return (
    <div className='w-auto'>
      <div className='flex bg-blue-dark flex-col items-center'>
        <div className='h-24 inline-flex'>
          <img className="h-24"
            src={Logo}
            alt="Exemple" />
        </div>
        <div className='flex flex-row py-1 text-xs' >
          <a href="#" className="text-base md:text-lg lg:text-xl font-normal tracking-normal text-grayLabel hover:text-white py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 mx-10 cursor-pointer relative">
            Quem somos
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transition-all duration-300"></span>
            <span className="absolute left-0 top-0 w-full h-0.5 bg-white transition-all duration-300"></span>
          </a>
          <a className='btn-options'>Atuação</a>
          <a className='btn-options'>Time</a>
          <a className='btn-options'>Escritórios</a>
          <a className='btn-options'>Blog</a>
        </div>
      </div>
    </div>
  )
}

export default NavBar;