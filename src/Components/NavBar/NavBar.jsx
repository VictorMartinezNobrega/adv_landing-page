import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='w-auto'>
      <div className='flex bg-blue-dark flex-col items-center'>
        <div className='h-24 inline-flex'>
          <img className="h-24"
          src="https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-example-sample-grungy-stamp-vector-png-image_15560590.png" 
          alt="Exemple"/>
        </div>
        <div className='flex flex-row py-1 text-xs' >
          <a className='btn-options'> Quem somos</a>
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