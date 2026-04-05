import { authApi } from "@/api/endpoints/auth";
import AppleIcon from "@/components/Icons/AppleIcon";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import YandexIcon from "@/components/Icons/YandexIcon";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const SocialLogin = () => {
    const [loading, setLoading] = useState<string | null>(null);
    const { showToast } = useToast();
    const {setOAuth} = useAuth()
    const router = useRouter();
    const btnData = [
        {
            lable: "Google",
            icon: GoogleIcon,
            method: 'google',
        },
        {
            lable: "Яндекс",
            icon: YandexIcon,
            method: 'yandex',
        },
        {
            lable: "Apple",
            icon: AppleIcon,
            method: null, // Apple требует отдельной реализации
        },
    ];
    const handleOAuthLogin = async (method: string, providerName: string) => {
        setLoading(providerName);
        
        try {

            const result = await authApi.oAuthLogin(method);
            
            if (result) {
                showToast(`Успешный вход через ${providerName}`, 'success');
                
                if (result.user) {
                    setOAuth(result.user)
                }
                
            }
        } catch (error: any) {
            console.error(`${providerName} login error:`, error);
            
            let errorMessage = `Ошибка при входе через ${providerName}`;
            if (error.message) {
                errorMessage = error.message;
            }
            
            showToast(errorMessage, 'error');
        } finally {
            setLoading(null);
        }
    };
    return (
        <View style={styles.contain}>
            <View style={styles.container}>
                <View style={styles.line} />
                <View style={styles.textContainer}>
                    <StyledText variant="subtitle-grey" size="ower-small">
                        или войдите через
                    </StyledText>
                </View>
                <View style={styles.line} />
            </View>
            <View style={styles.listBtn}>
                {btnData.map((item, index) => (
                    <StyledButton
                        key={index}
                        variant="forms-transparent-btn"
                        style={index === 2 ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}
                        onPress={() => {
                                if (item.method) {
                                    handleOAuthLogin(item.method, item.lable);
                                } else {
                                    showToast('Apple авторизация будет доступна позже', 'info');
                                }
                            }}
                    >
                        <item.icon width={20} height={20} />
                        <StyledText style={index === 2 ? { color: 'white' } : { color: 'black' }}>
                            {item.lable}
                        </StyledText>
                    </StyledButton>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain: {
        width: '100%',
        marginTop: 24,
        gap: 24,
        marginBottom:6.4
    },
    listBtn: {
        gap: 12,
        width: '100%',
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    line: {
        flex: 1,
        height: 0,
        borderTopWidth: 0.8,
        borderTopColor: COLORS.PRIMARY_BORDER_GREY,
    },
    textContainer: {
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SocialLogin