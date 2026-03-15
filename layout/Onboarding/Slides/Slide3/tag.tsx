import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, View } from "react-native";

interface TagProps{
    name:string
}
const Tag:React.FC<TagProps> = ({name}) => {
    return (
        <View style = {styles.tag}>
            <StyledText variant="button-text-blue" size="ower-small">{name}</StyledText>
        </View>
    );

}

const styles = StyleSheet.create({
    tag:{
        backgroundColor:COLORS.TAG_BG,
        paddingVertical:4,
        paddingLeft:8,
        paddingRight:5.28,
        borderRadius:26843500
    }
})
export default Tag