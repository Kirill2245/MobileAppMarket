import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/color.const";
import { ScrollView, StyleSheet, View } from "react-native";
import CardProfile from "./card-profile";
import SettingFrame from "./SettingFrame";
import StatsFrame from "./StatsFrame";


const Profile = () => {
    const data = {
        image: "https://storage.yandexcloud.net/stock-market-storage/users/d25daa09-2e0b-4b83-ab96-6ef6c21d053a.webp",
        firstName: "Алекс",
        lastName: "Джонсон",
        location: "Москва, Россия",
        createdAt: "2026-03-19 20:55:51.707",
        specialization: "Основатель Tech-стартапа"
    }
    
    const statData = [
        {
            id: '1',
            nameStats: "Созданно проектов",
            countStats: "24"
        },
        {
            id: '2',
            nameStats: "Рейтинг найма",
            countStats: "89%"
        },
        {
            id: '3',
            nameStats: "Всего потрачено",
            countStats: "4.8М₽"
        },
        {
            id: '4',
            nameStats: "Ср. ответ",
            countStats: "2.3ч"
        }
    ]
    
    
    return (
        <ScrollView style={styles.profile}>
            <View style={styles.contentContainer}>
                <StyledText size="semi-large" variant="title">Профиль</StyledText>
                <CardProfile {...data}/>
                <StatsFrame list={statData}/>
                <SettingFrame/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        backgroundColor: COLORS.CARD_BG
    },
    contentContainer: {
        paddingTop: 34.4,
        paddingHorizontal: 16,
        paddingBottom: 64,
        gap: 24,
    },

})

export default Profile