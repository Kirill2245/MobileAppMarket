import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { VariantText } from "../types/typeText.type";

type StyledTextProps = TextProps & {
    variant?: VariantText
    size?:
    "small" | 
    "medium" |
    "large" |
    "regular"|
    "secondary"|
    "ower-small"|
    "semi-large"|
    "medium-large"
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
            variant === 'subtitle-grey' ? styles.subtitle_grey:null,
            variant === 'blue-btn-text' ? styles.blue_btn_text:null,
            variant === 'tag' ? styles.tag : null,
            size === 'large' ? styles.large : null,
            size === 'medium' ? styles.medium : null,
            size === 'regular' ? styles.regular : null,
            size === 'small' ? styles.small : null,
            size === 'secondary' ? styles.secondary : null,
            size === 'semi-large' ? styles.semi_large : null,
            size === 'medium-large' ? styles.medium_large : null
        ]}
    >{children}</Text>
}


const styles = StyleSheet.create({
    baseFont:{
        fontFamily:'Inter'
    },
    base:{
        textDecorationLine:'none'
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
    tag:{
        color:COLORS.PRIMARY_BUTTON_TEXT,
        fontWeight:400
    },
    subtitle_grey:{
        color:COLORS.SUBTITLE_GREY,
        fontWeight:400
    },
    blue_btn_text:{
        color:COLORS.SEMI_BLUE_COLOR,

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
    regular:{
        fontSize:20,
        lineHeight:28,
        letterSpacing:0
    },
    small:{
        fontSize:14,
        lineHeight:20,
        letterSpacing:0
    },
    secondary:{
        fontSize:18,
        lineHeight:28,
        letterSpacing:0
    },
    ower_small:{
        fontSize:12,
        lineHeight:16,
        letterSpacing:0
    },
    semi_large:{
        fontSize:28,
        lineHeight:32.2,
        letterSpacing:0
    },
    medium_large:{
        fontSize:24,
        lineHeight:32,
        letterSpacing:0
    }
})
export default StyledText