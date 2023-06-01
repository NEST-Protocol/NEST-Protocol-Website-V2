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
      borderColor: 'rgba(234, 170, 0, 0.4)',
      color: "rgba(234, 170, 0, 0.4)",
      borderRadius: '12px',
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: '700',
      px: '24px',
      _hover: {
        bg: 'rgba(247, 199, 40, 1)',
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
    size: 'md',
    variant: 'solid'
  }
}
