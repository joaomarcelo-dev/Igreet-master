import { Modal, Text, TouchableOpacity, View } from "react-native";

export default function AlertBox({ visible, message, onYesPress, onNoPress }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text>{message}</Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity onPress={onYesPress} style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, marginRight: 10 }}>
              <Text style={{ color: 'white' }}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNoPress} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
              <Text style={{ color: 'white' }}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};