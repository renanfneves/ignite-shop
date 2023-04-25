import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import {
  ImageContainer,
  ProductsImagesContainer,
  SuccessContainer,
} from '../styles/pages/success'

interface SuccessProps {
  costumerName: string
  products: Stripe.Product[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  const countLabel = useMemo(() => {
    const sufix = products.length > 1 ? 'camisetas' : 'camiseta'

    return `${products.length} ${sufix}`
  }, [products])

  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ProductsImagesContainer>
          {products?.map((product) => (
            <ImageContainer key={product.id}>
              {product.images && (
                <Image
                  src={product.images[0]}
                  width={120}
                  height={110}
                  alt=""
                />
              )}
            </ImageContainer>
          ))}
        </ProductsImagesContainer>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de {countLabel} já
          está caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details!.name

  const products = session.line_items?.data
    ?.filter((lineItem) => Boolean(lineItem?.price?.product))
    .map((lineItem) => {
      return lineItem?.price?.product
    })

  return {
    props: {
      costumerName,
      products,
    },
  }
}
