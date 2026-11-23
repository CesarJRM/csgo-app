import { NavLink } from 'react-router'

const Header = () => (
  <header>
    <nav>
      <NavLink to="/">Inicio</NavLink>{' '}
      <NavLink to="/category/skins">Skins</NavLink>{' '}
      <NavLink to="/category/crates">Cajas</NavLink>{' '}
      <NavLink to="/category/stickers">Stickers</NavLink>{' '}
      <NavLink to="/category/agents">Agentes</NavLink>{' '}
      <NavLink to="/category/keys">Llaves</NavLink>{' '}
      <NavLink to="/category/collectibles">Coleccionables</NavLink>{' '}
      <NavLink to="/about">Acerca de</NavLink>
    </nav>
  </header>
)

export default Header