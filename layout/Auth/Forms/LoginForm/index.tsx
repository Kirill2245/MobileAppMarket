import { StyleSheet, View } from "react-native";
import Form from "./Form";
import Header from "./Header";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
    return(
        <View style = {styles.form}>
            <Header/>
            <Form/>
            <SocialLogin/>
        </View>
    );
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:50
    },
    contain:{
        width:'100%',
        justifyContent:'flex-end',
        flexDirection:'row'
    }
})

export default LoginForm