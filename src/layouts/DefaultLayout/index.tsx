import { ShoppingCart } from '@/src/components/ShoppingCart'
import { useShoppingCart } from 'use-shopping-cart'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  const { shouldDisplayCart } = useShoppingCart()

  return (
    <LayoutContainer>
      <Header />
      {children}
      {shouldDisplayCart && <ShoppingCart />}
    </LayoutContainer>
  )
}
