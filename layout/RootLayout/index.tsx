import { StyleSheet, View } from "react-native";
import Onboarding from "../Onboarding";

const RootLayout = () => {
    return (
        <View style = {styles.contain}>
            <Onboarding/>
        </View>
    )
};

const styles = StyleSheet.create({
    contain:{
        flex:1,
    }
})

export default RootLayout