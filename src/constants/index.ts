import { Dimensions, Platform } from 'react-native'

const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('window')

const IS_IOS = Platform.OS === 'ios'