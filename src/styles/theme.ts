import { RFValue } from 'react-native-responsive-fontsize'

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000',
    gray_25: '#373737',
    gray_20: '#E5E5E5',
    gray_10:'rgba(229, 229, 229, 0.2)',
    green_300: '#E5FFD9',
    green_400: '#79E09B',
    green_700: '#07BC0C',
    red_200: '#FF0000',
    red_250: '#E64C3C',
    silver_200: '#757581',
  
  },
  fonts: {
    fontFamily: {
      primary: {
        regular: 'Montserrat_400Regular',
        medium: 'Montserrat_500Medium',
        bold: 'Montserrat_700Bold'
      },
      secondary: {
        regular: 'Nunito_400Regular',
        medium: 'Nunito_500Medium',
        bold: 'Nunito_700Bold'
      }
    },
    sizes: {
      titles: {
        small: `${RFValue(14)}px`,
        average: `${RFValue(18)}px`,
        regular: `${RFValue(24)}px`,
        medium: `${RFValue(28)}px`,
        large: `${RFValue(38)}px`
      },
      text: {
        small: `${RFValue(12)}px`,
        regular: `${RFValue(16)}px`,
        medium: `${RFValue(18)}px`,
        large: `${RFValue(24)}px`
      }
    }
  },
  spacing: {
    '1xl': `${RFValue(4)}px`,
    '2xl': `${RFValue(8)}px`,
    '3xl': `${RFValue(12)}px`,
    '4xl': `${RFValue(16)}px`,
    '5xl': `${RFValue(20)}px`,
    '6xl': `${RFValue(24)}px`,
    '7xl': `${RFValue(28)}px`,
    '8xl': `${RFValue(32)}px`,
    '9xl': `${RFValue(36)}px`,
    '10xl': `${RFValue(40)}px`,
    '11xl': `${RFValue(44)}px`,
    '12xl': `${RFValue(48)}px`,
    '13xl': `${RFValue(52)}px`,
    '14xl': `${RFValue(56)}px`,
    '15xl': `${RFValue(60)}px`,
    '16xl': `${RFValue(64)}px`
  },
  radii: {
    px: `${RFValue(4)}px`,
    xs: `${RFValue(8)}px`,
    sm: `${RFValue(16)}px`,
    md: `${RFValue(32)}px`,
    lg: `${RFValue(64)}px`,
    full: `${RFValue(999999)}px`
  }
}
