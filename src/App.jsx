import { Routes, Route } from 'react-router'

import HomePage from './pages/home'
import CategoryPage from './pages/category'
import ItemDetailsPage from './pages/item-details'
import AboutPage from './pages/about'
import NotFoundPage from './pages/not-found'

import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/category/:type/:id" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App