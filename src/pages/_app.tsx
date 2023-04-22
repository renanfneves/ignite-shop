import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'

import { globalStyles } from '../styles/global'

import { DefaultLayout } from '../layouts/DefaultLayout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      stripe={process.env.STRIPE_PUBLIC_KEY!}
      mode="payment"
      cartMode="client-only"
      successUrl={`${process.env.NEXT_URL}/success`}
      cancelUrl={`${process.env.NEXT_URL}/?success=false`}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
      shouldPersist
    >
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </CartProvider>
  )
}
