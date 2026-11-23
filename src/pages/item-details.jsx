import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import Status from '../components/Status'

const BASE_URL = 'https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en'

const ItemDetailsPage = ({ items, loading, error }) => {
  const { type, id } = useParams()

  const item = items.find((i) => i.id === id)

  const rarity =
    typeof item?.rarity === 'object' ? item.rarity?.name : item?.rarity

  return (
    <main>
      <Link to={`/category/${type}`}>← Volver a {type}</Link>
      <Status loading={loading} error={error} />

      {!loading && !error && !item && <p>Item no encontrado.</p>}

      {item && (
        <>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} width="250" />
          {item.description && <p>{item.description}</p>}
          {rarity && <p>Rareza: {rarity}</p>}
          {item.type && <p>Tipo: {item.type}</p>}
          {item.first_sale_date && <p>Primera venta: {item.first_sale_date}</p>}
        </>
      )}
    </main>
  )
}

export default ItemDetailsPage