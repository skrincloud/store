import { buildImageUrl } from '../../api'
import Details from '../../components/Details'
import Dropdown from '../../components/Dropdown'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Scanner from '../../components/Scanner'
import { useGlobalStore } from '../../store'
import './Home.css'
function Home() {
  const { user } = useGlobalStore()
  const avatar = buildImageUrl(user?.avatar)
  const name = user?.first_name + ' ' + user?.last_name
  const title = 'Mi cielo'

  return (
    <div className="Home">
      <Header title={title} subtitle={name} avatar={avatar} />
      <Dropdown />
      <Scanner />
      <ProductList />
      <Details />
    </div>
  )
}

export default Home
