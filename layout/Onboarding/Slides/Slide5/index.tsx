import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { GRADIENT_PRYMARY_BG_FIVE } from "@/constants/color.const";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import Frame from "./frame";

interface Slide5Props {

    isShowFormAuth: () => void
}
const Slide5:React.FC<Slide5Props> = ({isShowFormAuth}) => {
    return(
        <LinearGradient
            colors={GRADIENT_PRYMARY_BG_FIVE.PRYMARY.LIST_COLORS}
            locations={GRADIENT_PRYMARY_BG_FIVE.PRYMARY.COUNT_COLORS}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}   
            style = {styles.contain}
        >
            <Frame/>
            <StyledText variant="title" size="semi-large">Готовы работать проще?</StyledText>
            <StyledText 
                variant="button-text-blue" 
                size="medium" 
                style = {{textAlign:'center', width:328, marginTop:26}}
            >Присоединяйтесь к тысячам фрилансеров и компаний, находящих идеальное совпадение с помощью AI.</StyledText>
            <StyledButton lable="Создать бесплатный аккаунт" style = {{width:'100%',marginTop:56, marginBottom:20}} variant="medge" onPress={isShowFormAuth}/>
            <StyledText variant="button-text-blue" size="ower-small"> требуется 2 минуты</StyledText>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        paddingTop: 118.4,
        paddingBottom:15,
        paddingHorizontal: 16,
        alignItems:'center',
    }
})

export default Slide5