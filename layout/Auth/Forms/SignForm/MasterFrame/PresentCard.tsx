import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, View } from "react-native";

interface PresentCardProps{
    title:string,
    subtitle:string,
    icon: React.ComponentType<any>
}
const PresentCard:React.FC<PresentCardProps> = ({title, subtitle, icon:Icon}) => {
    return (
        <View style = {styles.card}>
            <View style = {styles.iconBox}>
                <Icon />
            </View>
            <StyledText variant="title" size="ower-small">AI подбор проектов</StyledText>
            <StyledText variant="subtitle-grey" size="ower-small" >Умный алгоритм найдёт идеальные заказы для вас</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        padding:16.8,
        backgroundColor:'white',
        borderRadius:16,
        borderWidth:0.8,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        maxWidth:173,
        maxHeight:164.35000610351562,
         shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,   
        shadowRadius: 2.5,     
        
        elevation: 2,
    },
    iconBox:{
        width:40,
        height:40,
        backgroundColor:COLORS.SVG_BG,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:14,
        marginBottom:12.6
    }
})
export default PresentCard