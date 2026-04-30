import StyledText from "@/components/StyledText";
import { DEV } from "@/constants/dev.const";
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
    if (loading && !DEV.IS_DEV_NO_DB) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
                <StyledText>Loading...</StyledText>
            </View>
        );
    }
    
    // Если пользователь авторизован - показываем Main
    if (isAuthUser || DEV.IS_DEV_NO_DB) {
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