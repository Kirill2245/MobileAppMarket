import StyledButton from "@/components/StyledButton";
import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderStep from "../../../common/HeaderStep";
import Form from "./Form";
import FrameTypeMaster from "./FrameTypeMaster";
interface Slide2Props {
    nextStep:() => void
}
const Step2:React.FC<Slide2Props> = ({nextStep}) => {

    return (
        <View style = {styles.step}>
            <HeaderStep title="Профиль компании" subtitle="Расскажите нам о вашей компании и потребностях"/>
            <Form/>
            <FrameTypeMaster/>
            <StyledButton lable="Продолжить" variant="forms-btn" onPress={nextStep}></StyledButton>
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1
    },
    form:{
        gap:16
    }
})

export default Step2