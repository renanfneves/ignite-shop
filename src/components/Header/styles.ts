import { styled } from '@/src/styles'

export const HeaderContainer = styled('header', {
  position: 'relative',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CartButton = styled('button', {
  position: 'relative',
  background: 'transparent',
  border: 'none',
  color: '$white',
  padding: '0.5rem',
  cursor: 'pointer',

  span: {
    position: 'absolute',
    right: '-7px',
    top: '-7px',
    background: '$green500',
    border: '3px solid #121214',
    borderRadius: '50%',
    fontSize: '0.875rem',
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
