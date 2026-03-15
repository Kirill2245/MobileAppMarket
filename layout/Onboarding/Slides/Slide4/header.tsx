import StyledText from "@/components/StyledText";
import { StyleSheet, View } from "react-native";

const Header = () => {
   return (
    <View style = {styles.header}>
        <StyledText size="small" variant="button-text-blue">Для бизнеса.</StyledText>
        <StyledText size="large" variant="title" style = {{width:262, marginTop:9.8, marginBottom:17.8}}>Наймите за считанные часы</StyledText>
        <StyledText size="medium" variant="subtitle-grey" style ={{width:332}}>Забудьте о бесконечных собеседованиях. Получите подобранных ИИ специалистов, готовых приносить результаты с первого дня.</StyledText>
    </View>
   ); 
}

const styles = StyleSheet.create({
    header:{
        marginBottom:13.2
    }
})
export default Header