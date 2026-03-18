import StyledButton from "@/components/StyledButton";
import { COLORS, GRADIENT_PRYMARY_BG } from "@/constants/color.const";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import Card from "./card";
import CardDesiner from "./cardDesiner";
import Header from "./header";

interface Slide3Props {

    isShowFormAuth: () => void
}
const Slide3:React.FC<Slide3Props> = ({isShowFormAuth}) => {

    return (
        <LinearGradient 
            colors={GRADIENT_PRYMARY_BG.PRYMARY.LIST_COLORS}
            locations={GRADIENT_PRYMARY_BG.PRYMARY.COUNT_COLORS}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}   
            style = {styles.contain}
        >
            <Header/>
            <StyledButton 
                lable="Присоединиться как фрилансер" 
                variantText="button-text-blue" 
                variant="transparment-border"
                style = {{height:60, width:'100%'}}
                onPress={isShowFormAuth}
            />
            <Card/>
            <CardDesiner/>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_BG,
        paddingTop: 48.4,
        paddingBottom:15,
        paddingHorizontal: 16,
        alignItems:'center',

    },
});

export default Slide3;