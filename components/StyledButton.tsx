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
        "medge" | 
        'clearBtn'|
        'closeModal'|
        'craete'|
        'transparment'|
        'transparment-border' |
        'image-btn'|
        'setting-btn'|
        'leave-btn'|
        'txt-btn'|
        'forms-btn'|
        'forms-transparent-btn'|
        'add-file-btn'
        ;
    sizeIcon?:number;
    colorIcon?:string;
    skeletonDelay?: number;
    image?: ImageSourcePropType;
    children?: React.ReactNode;
    isActive?:boolean;
    variantText?:VariantText;
    sizeText?:"medium" | "small" | "ower-small"
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
            colorIcon,
            sizeText = 'medium',
            ...props}
    ) => {

    const getVariantText = () => {

    }
    return (
        <TouchableOpacity
            {...props}
            disabled = {disabled}
            style = {[
                styles.base,
                variant === 'transparment' ? styles.transparment : null,
                variant === 'transparment-border' ? styles.transparment_border : null,
                variant === 'medge' ? styles.medge : null,
                variant === 'image-btn' ? styles.image_btn : null,
                variant === 'setting-btn' ? styles.setting_btn : null,
                variant === 'leave-btn' ? styles.leave_btn : null,
                variant === 'txt-btn' ? styles.txt_btn : null,
                variant === 'forms-btn' ? styles.forms_btn : null,
                variant === 'forms-transparent-btn' ? styles.forms_transparent_btn : null,
                variant === 'add-file-btn' ? styles.add_file_btn : null,
                style,
            ]}
        >
            <View 
                style={[
                    styles.contentContainer,
                ]}
            >
                {children}
                {image && <Image source = {image} resizeMode="cover"/>}
                {lable && <StyledText variant = {variantText} size={sizeText}>{lable}</StyledText>}
                {icon && 
                    <Ionicons 
                        name={icon} 
                        size={sizeIcon} 
                        color={colorIcon}
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
        gap:11
    },
    transparment:{
        backgroundColor:'transparent',
        shadowColor:'transparent',
        borderWidth:0
    },
    transparment_border:{
        backgroundColor:'transparent',
        shadowColor:'transparent'
    },
    medge:{
        // width:191.43,
        height:48,
        borderWidth:0
    },
    image_btn:{
        width:36,
        minHeight:36,
        height:36,
        borderWidth:0,
        padding:0,
        borderRadius:18,
    },
    buttonImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
    },
    setting_btn:{
        width:'100%',
        height:52.8,
        justifyContent:'space-between',
        backgroundColor:'transparent',
        borderWidth:0,
        // borderBottomWidth:0.8,
        borderRadius:0,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        shadowColor:'transparent'
    },
    leave_btn:{
        backgroundColor:'white',
        borderRadius:16,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        shadowColor:'transparent',
        borderWidth:0.8
    },
    txt_btn:{
        paddingTop:0,
        paddingHorizontal:0,
        padding:0,
        borderRadius:0,
        backgroundColor:'transparent',
        // backgroundColor:'red',
        shadowColor:'transparent',
        borderWidth:0,
        

    },
    forms_btn:{
        borderWidth:0,
        backgroundColor:COLORS.SEMI_BLUE_COLOR,
        borderRadius:14,
        height:48
    },
    forms_transparent_btn:{
        borderWidth:0.8,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        borderRadius:14,
        height:48,
        shadowColor:'transparent',
        gap:11
    },
    add_file_btn:{
        minHeight:160,
        borderRadius:16,
        backgroundColor:'transparent',
        shadowColor:'transparent',
        borderStyle: "dashed",
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        borderWidth:1.6
    }
})
export default StyledButton