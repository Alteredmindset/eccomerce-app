// pages/subsubcategory/[subsubcategory].js
import { useRouter } from 'next/router'
import { urlFor, client } from '../../lib/client'
import Product from '../../components/Product'

const SubSubCategoryPage = ({ products }) => {
  const router = useRouter()
  const { subsubcategory } = router.query

  return (
    <div>
      <h1>Categories for {subsubcategory}</h1>
      <div className="product-subcategory">
        {products?.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async context => {
  const subsubcategory = context.params.subsubcategory
  const products = await client.fetch(
    `*[_type == "product" && Subsubcategory == $subsubcategory]`,
    { subsubcategory }
  )

  return {
    props: { products },
  }
}

export default SubSubCategoryPage
