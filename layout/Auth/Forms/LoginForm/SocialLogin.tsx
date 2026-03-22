import AppleIcon from "@/components/Icons/AppleIcon";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import YandexIcon from "@/components/Icons/YandexIcon";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { StyleSheet, View } from "react-native";

const SocialLogin = () => {
    const btnData = [
        {
            lable: "Google",
            icon: GoogleIcon
        },
        {
            lable: "Яндекс",
            icon: YandexIcon
        },
        {
            lable: "Apple",
            icon: AppleIcon
        },
    ]
    
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
        marginBottom:31.8
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