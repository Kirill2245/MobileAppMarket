import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { VariantText } from "@/types/typeText.type";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

interface TagsProps {
    title:string,
    color?:string,
    variantText?:VariantText,
    isBorder?:boolean,
    icon?: React.ComponentProps<typeof Ionicons>["name"];  
    iconSize?:number,
    onPress?:() => void
}
const Tags:React.FC<TagsProps> = ({title, color,icon,iconSize,onPress, variantText = 'subtitle',isBorder = false}) => {
    return (
        <View style={[styles.tag, { 
            backgroundColor: color || COLORS.SVG_BG,
            borderWidth:isBorder ? 0.8 : 0
        }]}>
            <StyledText variant={variantText}>{title}</StyledText>
            <Ionicons name={icon} size={iconSize} onPress={onPress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    tag:{
        width:'auto',
        paddingLeft:12,
        paddingRight:8,
        paddingVertical:6,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        borderRadius:26843500,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:6
    }
})

export default Tags