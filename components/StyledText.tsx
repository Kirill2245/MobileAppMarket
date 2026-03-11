import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type StyledTextProps = TextProps & {
    variant?: 
    "title" | 
    "subtitle" | 
    "button-text" 
    size?:
    "small" | 
    "medium" |
    "large"
}

const StyledText: React.FC<StyledTextProps> = ({style,variant,size = 'medium',...props}) => {
    return <Text
        {...props}
        style = {[
            styles.baseFont,
            !style ? styles.base : style,
            variant === 'title' ? styles.title : null,
            variant === 'subtitle' ? styles.subtitle : null,
            size === 'large' ? styles.large : null,
            size === 'medium' ? styles.medium : null
        ]}
    />
}


const styles = StyleSheet.create({
    baseFont:{
        fontFamily:'Inter'
    },
    base:{

    },
    title:{
        color:COLORS.TITLE_GREY,
        fontWeight:700,
    },
    subtitle:{
        color:COLORS.TITLE_GREY,
        fontWeight:400,
    },
    large:{
        fontSize:32,
        lineHeight:35.2,
        letterSpacing:0
    },
    medium:{
        fontSize:16,
        lineHeight:24,
        letterSpacing:0
    }
})
export default StyledText