export const Button = {
  baseStyle: {
    fontWeight: 'medium',
    fontSize: 'md',
    fontFamily: 'Open Sans',
  },
  variants: {
    ghost: {
      fontWeight: '500',
      fontSize: '15px',
      color: '#EAAA00',
      _hover: {
        color: '#F7C728'
      },
      _active: {
        bg: '#FFDC52'
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
        bg: '#EAAA00',
        color: "#030308",
        border: 'none',
      },
      _active: {
        bg: '#FFDC52',
        color: "#030308",
        border: 'none',
      }
    },
    solid: {
      bg: '#EAAA00',
      color: '#030308',
      fontWeight: '700',
      borderRadius: '12px',
      fontSize: '16px',
      lineHeight: '22px',
      px: '24px',
      _hover: {
        bg: '#F7C728'
      },
      _active: {
        bg: '#FFDC52'
      }
    }
  },
  defaultProps: {
    // size: 'md',
    variant: 'solid'
  }
}
