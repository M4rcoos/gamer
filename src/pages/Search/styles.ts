import styled from 'styled-components/native'
import { theme } from '../../styles/theme'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color:  ${theme.colors.gray_25};
  padding: 16px;
  
`
export const Content = styled.View`
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-top: 18px;
  border-color: ${theme.colors.gray_10} ;
  border-radius:14px;
  border-width: 2px; /* Adiciona uma borda de 2 pixels */
  padding: 10px; 
`
export const Text = styled.Text`
   font-size: 24px;
  color: ${theme.colors.gray_20};
  max-width: 70%;
`
export const Footer = styled.View`
flex-direction:row;
justify-content: space-around;
width: 100%;
padding-bottom:14px;
padding-top:14px;
border-bottom-color: ${theme.colors.gray_20};
border-bottom-width: 2px;
`
export const Favorite = styled.TouchableOpacity`

`
export const Description = styled.View`
flex-direction:row; 
width: 100%;
padding: 10px 18px;
justify-content: space-between;

`