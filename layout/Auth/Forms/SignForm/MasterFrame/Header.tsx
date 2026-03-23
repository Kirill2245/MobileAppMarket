import StyledText from "@/components/StyledText";
import { Image, StyleSheet, View } from "react-native";

const Header = () => {
    return (
        <View style = {styles.header}>
            <View style = {styles.logoContain}>
                <Image
                    source={require('@assets/images/iconLable.png')}
                    style = {styles.logo}
                />
                <StyledText variant="title" size="semi-large" >Light</StyledText>
            </View>
            <StyledText variant="title" size="medium-large" style = {{width:239, textAlign:'center'}}>
                AI маркетплейс для фрилансеров
            </StyledText>
            <StyledText variant="subtitle-grey" style = {{ textAlign:'center'}}>Находите проекты, которые идеально подходят вашим навыкам</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContain:{
        flexDirection:'row',
        alignItems:'center',
        gap:15.2
    },
    logo:{
        width:64,
        height:64
    },
    header:{
        gap:12,
        alignItems:'center',
        marginBottom:32.4
    }
})

export default Header