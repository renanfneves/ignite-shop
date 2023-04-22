import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import logoImg from '../../assets/logo.svg'
import { CartButton, HeaderContainer } from './styles'

export function Header() {
  const { handleCartClick, cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Image width={130} height={52} src={logoImg.src} alt="" />
      <CartButton onClick={() => handleCartClick()}>
        <Handbag size={24} weight="bold" />
        {Boolean(cartCount) && <span>{cartCount}</span>}
      </CartButton>
    </HeaderContainer>
  )
}
