import { CartDetails } from 'use-shopping-cart/core'

export function useFormatLineItems() {
  function formatLineItems(cartDetails: CartDetails) {
    const lineItems: any = []

    new Map(Object.entries(cartDetails)).forEach((product) => {
      if (product.defaultPriceId)
        lineItems.push({
          price: product.defaultPriceId,
          quantity: product.quantity,
        })
    })

    return lineItems
  }

  return { formatLineItems }
}
