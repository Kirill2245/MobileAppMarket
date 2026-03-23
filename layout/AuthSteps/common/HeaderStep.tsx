import StyledText from "@/components/StyledText";
import React from "react";
import { StyleSheet, View } from "react-native";

interface HeaderStepProps{
    title:string,
    subtitle?:string
}
const HeaderStep:React.FC<HeaderStepProps> = ({title, subtitle}) => {
    return (
        <View style = {styles.header}>
            <StyledText variant="title" size="medium-large">{title}</StyledText>
            {subtitle && <StyledText variant="subtitle-grey" size="small">{subtitle}</StyledText>}
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        marginBottom:32,
        gap:7.6
    }
})

export default HeaderStep