import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { ScrollView, StyleSheet, View } from "react-native";
import Form from "./Form";
import Header from "./Header";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
    return(
        <ScrollView 
            style={styles.form}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={true}
            bounces={true}
        >
            <Header/>
            <Form/>
            <SocialLogin/>
            <StyledText style={{textAlign:'center'}} variant="subtitle-grey" size="small">
                Нет аккаунта?
            </StyledText>
            <View style={styles.variantReg}>
                <StyledButton variant="txt-btn" lable="Зарегистрироваться как клиент" variantText="blue-btn-text"/>
                <StyledButton variant="txt-btn" lable="Зарегистрироваться как фрилансер" variantText="blue-btn-text"/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        // Убираем padding отсюда
    },
    contentContainer: {
        paddingHorizontal: 24,
        paddingTop: 50,
        paddingBottom: 30, // Добавляем отступ снизу
        flexGrow: 1, // Позволяет контенту растягиваться
    },
    contain: {
        width: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    variantReg: {
        marginTop: 12,
        marginBottom: 20, // Добавляем отступ снизу
    }
})

export default LoginForm