import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface CardProps{
    name:string,
    description:string,
    count:number
}
const Card:React.FC<CardProps> = ({name,description,count}) => {
    return (
        <View style = {styles.card}>
            <View style = {styles.box}>
                <Image
                    source={require('@assets/images/t.jpg')}
                    resizeMode="contain"
                    style = {styles.image}
                />
                <View style = {styles.textBox}>
                    <StyledText variant="title" size="small">{name}</StyledText>
                    <StyledText variant="subtitle-grey" size="ower-small">{description}</StyledText>
                </View>
            </View>
           
            <View style = {styles.contain}>
                <StyledText variant="title" size="small">{count}%</StyledText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        padding:8,
        backgroundColor:COLORS.CARD_BG,
        width:'100%',
        height:72,
        borderRadius:14,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    box:{
        flexDirection:'row',
        gap:9
    },
    image:{
        width:40,
        height:40,
    },
    textBox:{
        gap:0.2
    },
    contain:{
        width:51,
        height:28,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.TAG_BG,
        borderRadius:26843500
    }
})

export default Card