import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { FlatList, Image, StyleSheet, View } from "react-native";
import Tag from "./tag";

const Card = () => {
    const skillsList = [
        {name:'Figma'},
        {name: 'React'},
        {name: 'Web3'}
    ]
    const renderTag = ({item}: {item:{name:string}}) =>(
        <Tag name={item.name}/>
    )
    return (
        <View style = {styles.card}>
            <View style = {styles.header}>
                <Image
                    source={require('@assets/images/t.jpg')}
                    resizeMode="contain"
                    style = {styles.image}
                />
                <View style = {styles.textBox}>
                    <StyledText size="secondary" variant="title">Сара Чен</StyledText>
                    <StyledText size="small" variant="subtitle-grey">UI/UX Дизайнер</StyledText>
                    <FlatList
                        data={skillsList}
                        renderItem={renderTag}
                        keyExtractor={(item) => item.name}
                        contentContainerStyle = {styles.listTag}
                    />
                </View>
            </View>
            <View style ={styles.footer}>
                <StyledText variant="subtitle-grey" size="small">⭐ 4.9 (127 отзывов)</StyledText>
                <StyledText variant="button-text-blue" size="small">Доступна</StyledText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:184.79,
        backgroundColor:COLORS.CARD_BG,
        borderRadius:24,
        marginTop:31,
        padding:24,
        gap:16
    },
    image:{
        width:64,
        height:64
    },
    header:{
        gap:16,
        flexDirection:'row'
    },
    textBox:{
        gap:4
    },
    listTag:{
        flexDirection:'row',
        gap:8,
        marginTop:4
    },
    footer:{
        flexDirection:'row',
        height:36.8,
        borderTopColor:COLORS.PRIMARY_BORDER_GREY,
        borderTopWidth:0.8,
        justifyContent:'space-between',
        alignItems:'center'
    }
})
export default Card