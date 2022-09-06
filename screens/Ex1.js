import { StyleSheet, Text, View } from 'react-native';
function Ex1(props){
    const {abc} = props
    return(
        <View style={Styles.container}>
            <View style={Styles.borderRed}>
                <Text style={Styles.textRed}>{abc}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRed: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    borderRed: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
        justifyContent: 'center'
    }
})
export default Ex1;