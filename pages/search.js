import { useRouter } from 'next/router'
import fetchDataFromSanity from '../lib/client'
import { Product } from '../components'

const SearchResults = ({ products }) => {
  const router = useRouter()
  const query = router.query.query || ''

  return (
    <div>
      <h1 className='search-text'>Search Results for "{query}"</h1>

      {products.length === 0 ? (
        <video
          className="page404"
          src="/images/product.mp4"
          autoPlay
          loop
          muted
        />
      ) : (
        <div className="product-search">
          {products.map(product => (
            <Product key={product.slug.current} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

// Fetch data using getServerSideProps or getStaticProps based on your preference
export async function getServerSideProps(context) {
  const query = context.query.query || ''
  const products = await fetchDataFromSanity(query) // Implement this function

  return {
    props: { products },
  }
}

export default SearchResults
