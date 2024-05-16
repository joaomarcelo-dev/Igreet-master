import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';

type ButtonFabProps = {
  onPress?: () => void;
}

export default function ButtonFab({ onPress }: ButtonFabProps) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Ionicons name='add-outline' size={25} color='#fff' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: '#8257E5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});