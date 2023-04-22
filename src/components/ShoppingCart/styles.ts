import { styled } from '@/src/styles'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export const ShoppingCartContainer = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '480px',
  background: '$gray800',
  zIndex: 1,
  padding: '1.5rem',

  h2: {
    marginTop: '1.5rem',
    fontWeight: 700,
    color: '$gray100',
    fontSize: '$lg',
  },
})

export const CloseButton = styled('button', {
  background: 'transparent',
  border: 'none',
  alignSelf: 'flex-end',
  cursor: 'pointer',
})

export const ProductListRoot = styled(ScrollArea.Root, {
  height: '60%',
  marginTop: '2rem',
})

export const ProductList = styled('ul', {
  gap: '1.5rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const SubmitButton = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})

export const CheckoutDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const TotalPriceLabel = styled('span', {
  fontWeight: 700,
  fontSize: '$md',
})

export const TotalPriceValue = styled(TotalPriceLabel, {
  fontSize: '$xl',
})
