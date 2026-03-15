import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { VariantText } from "./types/typeText.type";

type StyledTextProps = TextProps & {
    variant?: VariantText
    size?:
    "small" | 
    "medium" |
    "large"
    children?: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({style,variant,size = 'medium',children,...props}) => {
    return <Text
        {...props}
        style = {[
            styles.baseFont,
            !style ? styles.base : style,
            variant === 'title' ? styles.title : null,
            variant === 'subtitle' ? styles.subtitle : null,
            variant === 'button-text-blue' ? styles.button_text_blue : null,
            variant === 'button-text-grey' ? styles.button_text_grey : null,
            variant === 'tag' ? styles.tag : null,
            size === 'large' ? styles.large : null,
            size === 'medium' ? styles.medium : null
        ]}
    >{children}</Text>
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
    button_text_grey:{
        color:COLORS.TITLE_GREY,
        fontWeight:600
    },
    button_text_blue:{
        color:COLORS.PRIMARY_BUTTON_TEXT,
        fontWeight:600
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
    },
    tag:{
        color:COLORS.PRIMARY_BUTTON_TEXT,
        fontWeight:400
    }
})
export default StyledText