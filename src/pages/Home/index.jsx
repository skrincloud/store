import Details from '../../components/Details'
import Dropdown from '../../components/Dropdown'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Scanner from '../../components/Scanner'

import './Home.css'

function Home() {
  return (
    <div className="Home">
      <Header />
      <Dropdown
        defaultValue="Luis Barboza"
        icon="person"
        label="Cliente"
        action={{ icon: 'add' }}
      />
      <Scanner />
      <ProductList />
      <Details />
    </div>
  )
}

export default Home
