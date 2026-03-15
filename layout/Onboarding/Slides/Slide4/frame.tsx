import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./card";

const Frame = () => {
    const cardList = [
        {
            name:'Алекс Ким',
            description:'Старший React-разработчик',
            count:97
        },
        {
            name:'Мария Сантос',
            description:'Full-stack Инженер',
            count:94
        },
        {
            name:'Джеймс Уилсон',
            description:'React Специалист',
            count:92
        },
    ]
    const renderCard = ({item}: {item:{name:string, description:string, count:number}}) =>(
        <Card name={item.name} description={item.description} count={item.count}/>
    )
    return (
        <View style = {styles.frame}>
            <StyledText variant="title" size="medium">✨ Просто опишите ваши потребности...</StyledText>
            <View style = {styles.textBox}>
                <StyledText variant="subtitle-grey" size="small">"Нужен React-разработчик на 3 месяца..."</StyledText>
            </View>
            <FlatList
                data={cardList}
                renderItem={renderCard}
                keyExtractor={(item) => item.name}
                contentContainerStyle = {styles.listCard}
            />
            <StyledText  variant="subtitle-grey" size="ower-small" style ={{textAlign:'center',width:276}}>AI мгновенно анализирует навыки, портфолио и соответствие.</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    frame:{
        width:'100%',
        height:449.58,
        backgroundColor:'white',
        marginTop:25,
        borderRadius:24,
        alignItems:'center',
        padding:20
    },
    textBox:{
        width:'100%',
        height:53.6,
        borderWidth:0.8,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.CARD_BG,
        marginTop:14.2
    },
    listCard:{
        gap:12,
        marginTop:24,
        marginBottom:16,
        flex:1
    }
})

export default Frame