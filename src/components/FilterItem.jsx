const FilterItem = ({ filter, setFilter, limit, setLimit }) => (
  <div className="FilterItem">
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />

    <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
    </select>
  </div>
)

export default FilterItem