import { X } from '@phosphor-icons/react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useShoppingCart } from 'use-shopping-cart'
import { theme } from '@/src/styles'
import { useFormatLineItems } from '@/src/hooks/useFormatLinesItems'

import {
  CheckoutDetails,
  CloseButton,
  ProductList,
  ProductListRoot,
  ShoppingCartContainer,
  SubmitButton,
  TotalPriceLabel,
  TotalPriceValue,
} from './styles'
import { ProductCard } from '../ProductCard'
import { useCallback, useMemo, useState } from 'react'
import { CartEntry } from 'use-shopping-cart/core'
import axios from 'axios'

export function ShoppingCart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { handleCloseCart, cartDetails, totalPrice, cartCount } =
    useShoppingCart()

  const { formatLineItems } = useFormatLineItems()

  const products = useMemo(() => {
    if (!cartDetails) {
      return []
    }

    const products: CartEntry[] = []

    new Map(Object.entries(cartDetails)).forEach((product) => {
      products.push(product)
    })

    return products
  }, [cartDetails])

  const totalItems = useMemo(() => {
    const metric = cartCount === 1 ? 'item' : 'itens'
    return `${cartCount} ${metric}`
  }, [cartCount])

  const handleBuyButton = useCallback(async () => {
    try {
      if (!cartDetails) {
        return
      }

      setIsCreatingCheckoutSession(true)
      const lineItems = formatLineItems(cartDetails)

      const response = await axios.post('/api/checkout', {
        products: lineItems,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }, [cartDetails, formatLineItems])

  return (
    <ShoppingCartContainer>
      <CloseButton onClick={() => handleCloseCart()}>
        <X size={32} weight="bold" color={String(theme.colors.gray300)} />
      </CloseButton>
      <h2>Sacola de Compras</h2>
      <ProductListRoot>
        <ScrollArea.Viewport style={{ height: '100%' }}>
          <ProductList>
            {products.map((product: CartEntry) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductList>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ProductListRoot>
      <CheckoutDetails>
        <div>
          <span>Quantidade</span>
          <span>{totalItems}</span>
        </div>

        <div>
          <TotalPriceLabel>Valor total</TotalPriceLabel>
          <TotalPriceValue>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalPrice! / 100)}
          </TotalPriceValue>
        </div>
      </CheckoutDetails>
      <SubmitButton
        onClick={handleBuyButton}
        disabled={!products.length || isCreatingCheckoutSession}
      >
        Finalizar compra
      </SubmitButton>
    </ShoppingCartContainer>
  )
}
