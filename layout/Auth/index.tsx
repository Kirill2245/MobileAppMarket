import { useState } from "react";
import { StyleSheet, View } from "react-native";
import LoginForm from "./Forms/LoginForm";
import SignForm from "./Forms/SignForm";

const Auth = () => {
    const [isShowLoginForm, setIsShowLoginForm] = useState(true)
    return (
        <View style = {styles.auth}>
            {isShowLoginForm ? <LoginForm/> : <SignForm/>}
        </View>
    );
}
const styles = StyleSheet.create({
    auth:{
        flex:1
    }
})
export default Auth