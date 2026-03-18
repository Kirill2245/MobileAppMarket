import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "../Main";
import Onboarding from "../Onboarding";

const RootLayout = () => {
    const [isShowFormAuth, setIsShowFormAuth] = useState(false)
    return (
        <View style = {styles.contain}>
            {isShowFormAuth ? <Main/> : <Onboarding isShowFormAuth={() => setIsShowFormAuth(true)}/>}
            
        </View>
    )
};

const styles = StyleSheet.create({
    contain:{
        flex:1,
    }
})

export default RootLayout