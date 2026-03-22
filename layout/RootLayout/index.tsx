import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Auth from "../Auth";
import Main from "../Main";
import Onboarding from "../Onboarding";

const RootLayout = () => {
    const [isShowFormAuth, setIsShowFormAuth] = useState(false)
    const { isAuthUser } = useAuth();
    // Если пользователь авторизован - показываем Main
    if (isAuthUser) {
        return <Main />;
    }

    if (isShowFormAuth){
        return <Auth/>;
    }
    
    return <Onboarding isShowFormAuth={() => setIsShowFormAuth(true)} />;
};

const styles = StyleSheet.create({
    contain:{
        flex:1,
    }
})

export default RootLayout