import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

interface CardTypeAuthProps{
    icon?: React.ComponentType<any>,
    iconText?:string,
    title:string,
    subtitle:string,
    list:string[],
    onPress:() => void

}
const CardTypeAuth:React.FC<CardTypeAuthProps> = ({icon: Icon,title,subtitle,list, iconText, onPress}) => {
    return (
        <View style = {styles.card}>
             {/* <Icon/> */}
             <StyledText style = {{color:'#0A0A0A'}} size="large">{iconText}</StyledText>
            <View style = {styles.header}>
                <StyledText variant="title" size="regular">{title}</StyledText>
                <StyledText variant="subtitle-grey" size="small">{subtitle}</StyledText>   
            </View>
            <View style = {styles.list}>
                {list.map((item,index) => (
                    <View key={index} style = {styles.row}>
                        <Ionicons name="checkmark" size={20} color={COLORS.PRIMARY_BUTTON_TEXT}/>
                        <StyledText variant="subtitle-grey" size="ower-small" style = {{marginBottom:4.4}}>{item}</StyledText>
                    </View>
                ))}
            </View>
            <StyledButton lable="Выбрать " variant="transparment-border" style = {{borderWidth:1.6}} onPress={onPress}></StyledButton>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        backgroundColor:'white',
        paddingLeft:20.8,
        paddingRight:20.8,
        paddingTop:23.2,
        paddingBottom:20.8,
        borderRadius:16,
        boxSizing:'border-box'
    },
    header:{
        marginTop:19.2,
        marginBottom:16,
        gap:4
    },
    list:{
        gap:8,
        marginBottom:20
    },
    row:{
        flexDirection:'row',
        height:26,
        gap:4.99
    }
})

export default CardTypeAuth