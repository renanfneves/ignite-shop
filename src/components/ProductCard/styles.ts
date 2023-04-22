import { styled } from '@/src/styles'

export const ProductCardContainer = styled('div', {
  width: '100%',
  height: '5.875rem',
  display: 'flex',
  flex: 'row',
  gap: '1.25rem',
})

export const ImageContainer = styled('div', {
  height: '100%',
  width: '6.25rem',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  h3: {
    fontSize: '$md',
    color: '$gray300',
  },

  span: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: '700',
    marginTop: '0.5rem',
    marginBottom: 'auto',
  },

  button: {
    border: 'none',
    background: 'transparent',
    color: '$green500',
    width: 'fit-content',
    marginTop: '0.5rem',
    fontWeight: 700,
  },
})
