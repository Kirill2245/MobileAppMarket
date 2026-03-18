import StyledText from "@/components/StyledText";
import { ScrollView, StyleSheet } from "react-native";

const Profile = () => {
    return (
        <ScrollView style = {styles.profile}>
            <StyledText>Профиль</StyledText>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profile:{
        flex:1,
        paddingTop:34.4,
        paddingLeft:16,
        paddingRight:31.2,
        paddingBottom:64
    }
})
export default Profile