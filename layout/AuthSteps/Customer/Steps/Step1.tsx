import { authApi } from "@/api/endpoints/auth";
import StyledButton from "@/components/StyledButton";
import { useFormError } from "@/hooks/useFormError";
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
    const { errors, generalError, handleError, clearErrors, clearFieldError } = useFormError();
    const [isLoading, setIsLoading] = useState(false);
    // const validateForm = (): boolean => {
    //     clearErrors();
        
    //     if (!formData.firstName.trim()) {
    //         handleError(new Error('Введите имя'), 'Validation');
    //         return false;
    //     }
        
    //     if (!formData.email.trim()) {
    //         handleError(new Error('Введите email'), 'Validation');
    //         return false;
    //     }
        
    //     if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    //         handleError(new Error('Введите корректный email'), 'Validation');
    //         return false;
    //     }
        
    //     if (formData.password.length < 6) {
    //         handleError(new Error('Пароль должен содержать минимум 6 символов'), 'Validation');
    //         return false;
    //     }
        
    //     if (formData.password !== formData.passwordReapeat) {
    //         handleError(new Error('Пароли не совпадают'), 'Validation');
    //         return false;
    //     }
        
    //     return true;
    // };

    const handleSign = async () => {
        // if (!validateForm()) return;
        
        setIsLoading(true);
        try {
            await authApi.register(formData);
            nextStep();
        } catch (err) {
            handleError(err, 'Registration');
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