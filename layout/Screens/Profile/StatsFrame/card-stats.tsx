import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import React from "react";
import { StyleSheet, View } from "react-native";

interface CardStatsProps{
    nameStats:string
    countStat:string
}
const CardStats:React.FC<CardStatsProps> = ({nameStats,countStat}) => {
    return(
        <View style = {styles.card}>
            <StyledText variant="title" size="medium-large">{countStat}</StyledText>
            <StyledText variant="subtitle-grey" size="ower-small">{nameStats}</StyledText>   
        </View>
    );
}

const  styles = StyleSheet.create({
    card:{
        flex:1,
        backgroundColor:'white',
        padding:16.8,
        borderRadius:16,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        borderWidth:0.8,
        width:165.4
    }
})

export default CardStats