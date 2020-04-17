import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export const MainScreen = ({navigation}) => {
  const goToPost = () => {
    navigation.navigate('Post')
  }

  return <View style={styles.center}>
    <Text>MainScreen</Text>
    <Button title="Go to Post" onPress={goToPost} />
  </View>
}

MainScreen.navigationOptions = {
  headerTitle: "Мой блог"
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})