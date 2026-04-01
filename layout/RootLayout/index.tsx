import StyledText from "@/components/StyledText";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Auth from "../Auth";
import Main from "../Main";
import Onboarding from "../Onboarding";

const RootLayout = () => {
    const [isShowFormAuth, setIsShowFormAuth] = useState(false);
    const { isAuthUser, loading } = useAuth(); 

    // Показываем загрузку, пока проверяем авторизацию
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <StyledText>Loading...</StyledText>
            </View>
        );
    }
    
    // Если пользователь авторизован - показываем Main
    if (isAuthUser) {
        return <Main />;
    }

    if (isShowFormAuth) {
        return <Auth />;
    }
    
    return <Onboarding isShowFormAuth={() => setIsShowFormAuth(true)} />;
};

const styles = StyleSheet.create({
    contain:{
        flex:1,
    }
})

export default RootLayout