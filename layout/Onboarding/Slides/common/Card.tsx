import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

interface CardProps{
    title:string,
    subtitle:string
}
const Card = () => {
    return (
        <View style = {styles.contain}>
            <StyledText variant="title"></StyledText>
            <StyledText variant="subtitle"></StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        borderRadius:24,
        color:COLORS.CARD_BG
    }
})
export default Card