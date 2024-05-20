import { Button, Text, View } from "react-native";
import { dispatchNotification } from "../../dispatches/notification.dispatch";

export default function Settings() {
  return (
    <View>
      <Text>Settings</Text>

      <Button title="Notificação" onPress={() => dispatchNotification({ body: 'Ai dentro', title: 'Ai dentro', type: 'chat' })} />
    </View>
  )
}