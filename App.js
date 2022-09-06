import { Ex2 } from "./screens/index.js"
import Square from "./components/Square.js";
import { View } from "react-native";
export default function App() {
  return (
    <View style={{
        flex: 1,
        flexDirection: 'row',
    }}>
      <Square content="Square 1"/>
      <Square content="Square 2"/>
      <Square content="Square 3"/>
    </View>
  );
}
