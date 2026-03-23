import ArrowCurveIcon from "@/components/Icons/ArrowCurveIcon";
import ShieldIcon from "@/components/Icons/ShieldIcon";
import StarIconSetting from "@/components/Icons/StarIconSetting";
import UsersIcon from "@/components/Icons/UsersIcon";
import { GRADIENTS } from "@/constants/gradient.const";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";
import PresentCard from "./PresentCard";

const Main = () => {
    const cards = [
        {
            title:"AI подбор проектов",
            subtitle:"Умный алгоритм найдёт идеальные заказы для вас",
            icon:StarIconSetting
        },
        {
            title:"Проверенные клиенты",
            subtitle:"Работайте только с надёжными заказчиками",
            icon:UsersIcon
        },
        {
            title:"Рост карьеры",
            subtitle:"Развивайтесь и увеличивайте доход",
            icon:ArrowCurveIcon
        },
        {
            title:"Безопасные сделки",
            subtitle:"Защита оплаты и юридическая поддержка",
            icon:ShieldIcon
        },
    ]
    const rows = [];
    for (let i = 0; i < cards.length; i += 2) {
        rows.push(cards.slice(i, i + 2));
    }
    return (
        <View style = {styles.main}>
            <LinearGradient
                colors={GRADIENTS.PRIMARY_HORIZONTAL.colors}
                locations={GRADIENTS. PRIMARY_DIAGONAL.locations}
                start={GRADIENTS.PRIMARY_DIAGONAL.start}
                end={GRADIENTS.PRIMARY_DIAGONAL.end}
                style={styles.gradient}
                pointerEvents="box-none"
            >
                <Image
                    source = {require('@assets/images/ContainerStar.png')}
                />
            </LinearGradient>
                <View style = {styles.contain}>
                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((item,index) => (
                                <View key={index}>
                                    <PresentCard
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        icon={item.icon}
                                    />
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        gap:56
    },
    gradient:{
        height:200,
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center'
    },
    row: {
        flexDirection: 'row',
        gap: 12,
        marginBottom:0

    },
    contain:{
        gap:12
    }
})

export default Main