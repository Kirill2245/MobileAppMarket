import { authApi } from "@/api/endpoints/auth";
import StyledButton from "@/components/StyledButton";

import { useApiError } from "@/hooks/useFormError";
import { Role } from "@/types/role.enum";
import React, { useState } from "react";
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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        middleName:'',
        email: '',
        password: '',
        passwordReapeat:'',
        role:Role.CUSTOMER
    });

    const { handleApiError, showSuccess } = useApiError();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSign = async () => {
        setIsLoading(true);
        
        try {

            
            await authApi.register(formData);
            showSuccess('Регистрация прошла успешно!');
            nextStep();
        } catch (err) {
            handleApiError(err, 'Registration');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <View style = {styles.step}>
            <HeaderStep title="Создайте аккаунт" subtitle="Присоединяйтесь к Light AI и находите лучших специалистов"/>
            <FormMainInfo 
                role={Role.CUSTOMER} 
                formData={formData} 
                setFormData={setFormData}
            />
            <StyledButton lable="Продолжить" variant="forms-btn" onPress={handleSign}/>
            <SocialLogin/>
            <GoToLogin onSwitchToLogin={onSwitchToLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    step:{
        flex:1
    }
})

export default Step1