import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'pb8lzqs5',
  dataset: 'production',
  apiVersion: '2022-07-20',
  useCdn: true,
  token:
    'sk0aid4NwEXqsHMVtRN28AVPqv9NAsCrvbpKKDghJ3nDup1Q2wo89HOoaZPLP5ddvoXbGVDeiaaSi9wbmtLnynpcZMw997dp4YgEmQZltrZzX4MPM85UtV8LlVTudSUzqs0UCS5h0XbYgMRcBTkv1YeM2cIbAczmH6rUdS1UjFyGnXAQkcTZ',
})

async function fetchDataFromSanity(query) {
  const result = await client.fetch(`*[name match "${query}*"]{...}`)
  return result
}

export default fetchDataFromSanity

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
