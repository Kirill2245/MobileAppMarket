import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { Role } from "@/types/role.enum";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Form from "./Form";
import Header from "./Header";
import SocialLogin from "./SocialLogin";

interface LoginFormProps {
    isOpenSelectForm: () => void;
    onSwitchToSignUp: (role: Role) => void; // Добавляем пропс для передачи роли
}

const LoginForm: React.FC<LoginFormProps> = ({ isOpenSelectForm, onSwitchToSignUp }) => {
    return (
        <ScrollView 
            style={styles.form}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={true}
            bounces={true}
        >
            <Header/>
            <Form/>
            <SocialLogin/>
            <StyledButton variant="txt-btn" onPress={isOpenSelectForm}>
                <StyledText style={{textAlign:'center'}} variant="subtitle-grey" size="small">
                    Нет аккаунта?
                </StyledText>
            </StyledButton>
            <View style={styles.variantReg}>
                <StyledButton 
                    variant="txt-btn" 
                    lable="Зарегистрироваться как клиент" 
                    variantText="blue-btn-text"
                    onPress={() => onSwitchToSignUp(Role.CUSTOMER)}
                />
                <StyledButton 
                    variant="txt-btn" 
                    lable="Зарегистрироваться как фрилансер" 
                    variantText="blue-btn-text"
                    onPress={() => onSwitchToSignUp(Role.MASTER)}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 24,
        paddingTop: 50,
        paddingBottom: 30,
        flexGrow: 1,
    },
    contain: {
        width: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    variantReg: {
        marginTop: 12,
        marginBottom: 20,
    }
})

export default LoginForm