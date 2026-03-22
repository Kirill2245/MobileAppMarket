import { Role } from "@/types/role.enum";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import AccountTypeSelector from "./AccountTypeSelector";
import LoginForm from "./Forms/LoginForm";
import SignForm from "./Forms/SignForm";

type AuthScreen = 'selectType' | 'login' | 'signUp';

const Auth = () => {
    const [currentScreen, setCurrentScreen] = useState<AuthScreen>('selectType');
    const [selectedRole, setSelectedRole] = useState<Role | undefined>(undefined);

    const handleSelectType = () => {
        setCurrentScreen('login');
    };

    const handleBackToSelect = () => {
        setCurrentScreen('selectType');
        setSelectedRole(undefined);
    };

    const handleSwitchToSignUp = (role: Role) => {
        setSelectedRole(role);
        setCurrentScreen('signUp');
    };

    const handleSwitchToLogin = () => {
        setCurrentScreen('login');
    };

    return (
        <View style={styles.auth}>
            {currentScreen === 'selectType' && (
                <AccountTypeSelector 
                    isOpenLogin={handleSelectType}
                    isOpenSign={handleSwitchToSignUp}
                />
            )}
            
            {currentScreen === 'login' && (
                <LoginForm 
                    isOpenSelectForm={handleBackToSelect}
                    onSwitchToSignUp={handleSwitchToSignUp}
                />
            )}
            
            {currentScreen === 'signUp' && selectedRole && (
                <SignForm 
                    type={selectedRole}
                    onSwitchToLogin={handleSwitchToLogin}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    auth: {
        flex: 1
    }
})

export default Auth