import styled from 'styled-components/native'
import { theme } from '../../styles/theme'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.black};;
  width: 360px;
  height: 360px;
`
export const Content = styled.Image`
  width: 360px;
  height: 320px;
`