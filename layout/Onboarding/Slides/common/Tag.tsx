import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, View } from "react-native";
interface TagProps{
    title:string
}
const Tag:React.FC<TagProps> = ({title}) => {
    return (
        <View style = {styles.contain}>
            <StyledText variant="tag" size="medium">{title}</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    contain:{
        paddingVertical:9.4,
        paddingLeft:11.91,
        paddingRight:17.6,
        borderWidth:1,
        borderColor:COLORS.PRIMARY_BORDER_COLOR,
        borderRadius:26843500, 
        alignSelf: 'flex-start', 
        flexDirection: 'row',

    }
})
export default Tag