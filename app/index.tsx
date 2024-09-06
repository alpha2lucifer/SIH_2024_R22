import { Text, View } from "react-native";
import Login from '../components/Login';
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,                    // Takes up the full available screen space
        justifyContent: "center",    // Vertically centers the content
        alignItems: "center",        // Horizontally centers the content
      }}
    >
      {/* <Login/> */}
      <Redirect href={'/Home'}/>
    </View>
  );
}