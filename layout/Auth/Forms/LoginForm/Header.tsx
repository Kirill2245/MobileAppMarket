import StyledText from "@/components/StyledText";
import { Image, StyleSheet, View } from "react-native";

const  Header = () => {
    return (
        <View style = {styles.header}>
            <Image
                source={require('@assets/images/iconLable.png')}
            />
            <View style = {styles.textContain}>
                <StyledText variant="title" size="medium-large" style = {{width:278, textAlign:'center'}}>
                    Добро пожаловать в Light
                </StyledText>
                <StyledText variant="subtitle-grey" size="small" style = {{textAlign:'center'}}>
                    Войдите, чтобы продолжить свой путь
                </StyledText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:192,
        alignItems:'center',
        justifyContent:'center',
        gap:13.2,
        marginBottom:40
    },
    textContain:{
        gap:7.8
    }
})

export default Header