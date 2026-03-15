import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const Header = () => {
   return (
    <View style = {styles.header}>
        <StyledText size="small" variant="button-text-blue">Для талантов.</StyledText>
        <StyledText size="large" variant="title" style = {{width:262, marginTop:9.8, marginBottom:17.8}}>Пусть возможности найдут вас</StyledText>
        <StyledText size="medium" variant="subtitle-grey">Хватит искать работу. Наш AI подберет для вас идеальные проекты на основе ваших навыков и предпочтений.</StyledText>
    </View>
   ); 
}

const styles = StyleSheet.create({
    header:{
        marginBottom:24
    }
})
export default Header