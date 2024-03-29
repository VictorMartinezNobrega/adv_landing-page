import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='divFooterMaster'>
      <div className='divFooter'>
        <div className='div-logo'>
          <img 
                style={{
                  height: 100
                }}
          src="https://png.pngtree.com/png-vector/20221217/ourmid/pngtree-example-sample-grungy-stamp-vector-png-image_15560590.png" 
          alt="Exemple"/>
        </div>
        <div className='div-options'>
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