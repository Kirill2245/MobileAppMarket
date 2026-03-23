import StyledButton from "@/components/StyledButton";
import { Role } from "@/types/role.enum";
import React from "react";
import { StyleSheet, View } from "react-native";
import FormMainInfo from "../../common/FormMainInfo";
import GoToLogin from "../../common/GoToLogin";
import HeaderStep from "../../common/HeaderStep";
import SocialLogin from "../../common/SocialLogin";
interface Slide1Props {
    onSwitchToLogin: () => void;
    nextStep:() => void
}
const Step1:React.FC<Slide1Props> = ({onSwitchToLogin, nextStep}) => {
    return (
        <View style = {styles.step}>
            <HeaderStep title="Создайте аккаунт" subtitle="Расскажите о себе, чтобы клиенты могли вас найти"/>
            <FormMainInfo role={Role.MASTER}/>
            <StyledButton lable="Продолжить" variant="forms-btn" onPress={nextStep}/>
            <SocialLogin/>
            <GoToLogin onSwitchToLogin={onSwitchToLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1,
        backgroundColor:'white'
    }
})

export default Step1