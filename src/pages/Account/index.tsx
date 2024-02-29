import React from "react";

import { View, Text, StyleSheet } from 'react-native'

export function Account() {
  return(
    <>
    <View style={style.Container}>
      <Text style={style.text}>
       Sobre sua conta
      </Text>
    </View>
  </>
  )

}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
})