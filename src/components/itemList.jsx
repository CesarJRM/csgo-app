import ItemCard from './ItemCard'

const ItemList = ({ items, limit = 50 }) => (
  <div>
    {items.slice(0, limit).map((item) => (
      <ItemCard key={item.id} item={item} />
    ))}
  </div>
)

export default ItemList