import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import React from "react";
import { StyleSheet, View } from "react-native";

interface GoLoginProps {
    onSwitchToLogin: () => void;
}
const GoToLogin:React.FC<GoLoginProps> = ({onSwitchToLogin}) => {
    return (
        <View style = {styles.contain}>
            <StyledText variant="subtitle-grey" size="small">Уже есть аккаунт?</StyledText>
            <StyledButton lable="Войти" variant="txt-btn" style = {{minHeight:21}} sizeText="small" onPress={onSwitchToLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({

    contain:{
        flexDirection:'row',
        justifyContent:'center',
        gap:4,
        marginTop:14
    }
})

export default GoToLogin