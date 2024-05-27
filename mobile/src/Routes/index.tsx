import { NavigationContainer } from "@react-navigation/native";
import TabBottom from "./TabBottom";
import MessageAlert from "../components/MessageAlert";

export default function Routers() {
  return (
    <>
      <NavigationContainer>
        <TabBottom />
      </NavigationContainer>
    </>
  );
}
