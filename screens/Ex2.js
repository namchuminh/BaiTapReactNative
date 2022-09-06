import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

function Ex2(props){
    const clicked = () => { alert("Hello") }
    return(
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.button} onPress={clicked}>
                <Text style={{
                    color: "white",
                    fontSize: 25,
                    fontWeight: "bold"
                }}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        
    },
    button: {
        alignItems: "center",
        backgroundColor: "red",
        height: 50,
        marginHorizontal: 100,
        padding: 8
        
    }
})

export default Ex2;