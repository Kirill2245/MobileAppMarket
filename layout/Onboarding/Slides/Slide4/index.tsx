import StyledButton from "@/components/StyledButton"
import { GRADIENT_PRYMARY_BG_FOUR } from "@/constants/color.const"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { StyleSheet } from "react-native"
import Frame from "./frame"
import Header from "./header"

interface Slide4Props {

    isShowFormAuth: () => void
}
const Slide4:React.FC<Slide4Props> = ({isShowFormAuth}) => {
    return (
        <LinearGradient
            colors={GRADIENT_PRYMARY_BG_FOUR.PRYMARY.LIST_COLORS}
            locations={GRADIENT_PRYMARY_BG_FOUR.PRYMARY.COUNT_COLORS}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}   
            style = {styles.contain}
        >
            <Header/>
            <StyledButton lable="Разместить проект" variant="medge" variantText="title" style = {{width:191.43}} onPress={isShowFormAuth}/>
            <Frame/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    contain:{
        flex:1,
        paddingTop: 48.4,
        paddingBottom:15,
        paddingHorizontal: 16,
        alignItems:'center'
    }
})

export default Slide4