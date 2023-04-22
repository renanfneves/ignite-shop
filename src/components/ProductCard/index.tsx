import { CartEntry } from 'use-shopping-cart/core'
import {
  DetailsContainer,
  ImageContainer,
  ProductCardContainer,
} from './styles'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'

interface ProductCardProps {
  product: CartEntry
}

export function ProductCard({ product }: ProductCardProps) {
  const { removeItem } = useShoppingCart()

  function handleRemoveItem() {
    removeItem(product.id)
  }

  return (
    <ProductCardContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={80} height={80} />
      </ImageContainer>
      <DetailsContainer>
        <h3>{product.name}</h3>
        <span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price / 100)}
        </span>
        <button onClick={handleRemoveItem}>remover</button>
      </DetailsContainer>
    </ProductCardContainer>
  )
}
