import { COLORS } from "@/constants/color.const";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { VariantText } from "../types/typeText.type";
import StyledText from "./StyledText";
type StyledButtonProps = TouchableOpacityProps & {
    lable?:string;
    icon?: React.ComponentProps<typeof Ionicons>["name"];
    variant?:
        "small" | 
        "medge" | 
        "cirium" | 
        "larcule" | 
        "square" | 
        'largeLight'|
        'menuBtn'|
        'clearBtn'|
        'closeModal'|
        'craete'|
        'transparment'|
        'transparment-border'
        ;
    sizeIcon?:number;
    skeletonDelay?: number;
    image?: ImageSourcePropType;
    children?: React.ReactNode;
    isActive?:boolean;
    variantText?:VariantText
};
const StyledButton: React.FC<StyledButtonProps> = (
        {
            isActive = false,
            children,
            image ,
            skeletonDelay = 1000, 
            sizeIcon = 41.82 ,
            variant,
            lable,
            icon,
            style,
            disabled,
            variantText,
            ...props}
    ) => {

    const getVariantText = () => {

    }
    return (
        <TouchableOpacity
            {...props}
            disabled = {disabled}
            style = {[
                style,
                styles.base,
                variant === 'transparment' ? styles.transparment : null,
                variant === 'transparment-border' ? styles.transparment_border : null,
                variant === 'medge' ? styles.medge : null
            ]}
        >
            <View 
                style={[
                    styles.contentContainer,
                ]}
            >
                {children}
                {image && <Image source = {image}/>}
                {lable && <StyledText variant = {variantText} size="medium">{lable}</StyledText>}
                {icon && 
                    <Ionicons 
                        name={icon} 
                        size={sizeIcon} 
                    />
                }
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    base:{
        borderRadius:26843500,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:5,
        boxSizing:"border-box",
        backgroundColor:COLORS.PRIMARY_BUTTON_COLOR,
        flexDirection:"row",
        elevation: 20,
        shadowColor: COLORS.PRIMARY_BUTTON_COLOR,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3.84,
        minHeight: 50,
        borderWidth:1,
        borderColor:COLORS.PRIMARY_BORDER_COLOR,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    transparment:{
        backgroundColor:'transparent',
        borderWidth:0
    },
    transparment_border:{
        backgroundColor:'transparent'
    },
    medge:{
        // width:191.43,
        height:48,
        borderWidth:0
    }
})
export default StyledButton