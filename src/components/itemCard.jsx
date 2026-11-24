import { Link } from 'react-router'

const ItemCard = ({ item }) => (
  <article className="card">
    <img src={item.image} alt={item.name} width="120" loading="lazy" />
    <h3>{item.name}</h3>
    {item.type && <p>{item.type}</p>}
    <Link to={`/item/${item.id}`}>Ver detalles</Link>
  </article>
)

export default ItemCard