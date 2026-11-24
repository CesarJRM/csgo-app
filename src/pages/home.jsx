import { Link } from 'react-router'

const categories = [
  { id: 'skins', label: 'Skins' },
  { id: 'crates', label: 'Cajas' },
  { id: 'stickers', label: 'Stickers' },
  { id: 'agents', label: 'Agentes' },
  { id: 'keys', label: 'Llaves' },
  { id: 'collectibles', label: 'Coleccionables' },
]

const HomePage = () => (
  <main>
    <h1>CS2 Items</h1>
    <p>Explora los objetos de Counter-Strike 2 por categoría.</p>

    <div className="grid">
      {categories.map((cat) => (
        <Link key={cat.id} to={`/category/${cat.id}`} className="card">
          <h3>{cat.label}</h3>
        </Link>
      ))}
    </div>
  </main>
)

export default HomePage