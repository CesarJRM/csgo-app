const Status = ({ loading, error }) => {
  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error}</p>
  return null
}

export default Status