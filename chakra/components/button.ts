export const Button = {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'md',
    height: '48px',
    maxH: '48px',
    fontFamily: 'Open Sans',
  },
  variants: {
    ghost: {
      fontWeight: '500',
      fontSize: '15px',
      _hover: {
        bg: 'none'
      },
      _active: {
        bg: 'none'
      }
    },
    outline: {
      border: '1px solid',
      borderColor: '#EAAA00',
      color: "#EAAA00",
      borderRadius: '12px',
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: '700',
      px: '24px',
      _hover: {
        bg: null
      },
      _active: {
        bg: null
      }
    },
    solid: {
      bg: '#EAAA00',
      color: '#003232',
      fontWeight: '700',
      borderRadius: '12px',
      fontSize: '16px',
      lineHeight: '22px',
      px: '24px',
      _hover: {
        bg: '#EAAA00'
      },
      _active: {
        bg: '#EAAA00'
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'solid'
  }
}
