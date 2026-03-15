import { COLORS } from "@/constants/color.const";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Tag from "./common/Tag";

interface Slide1Props {
    onNext?: () => void; 
}

const Slide2: React.FC<Slide1Props> = ({ onNext }) => {
    const tagList = [
        { title: '✓ Проверено' },
        { title: '🔒 Безопасные Платежи' },
        { title: '⭐ 5 Звезд' },        
    ];

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.contain}>

                    <ScrollView
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.list}
                        nestedScrollEnabled={true}
                        style={styles.scrollView}
                    >
                        {tagList.map((item) => (
                            <Tag key={item.title} title={item.title} />
                        ))}
                    </ScrollView>
                    
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_BG,
        paddingTop: 48.4,
        paddingHorizontal: 16,
    },
    scrollView: {
        maxHeight: 60, // Ограничиваем высоту области скролла
    },
    list: {
        gap: 12,
        paddingVertical: 5,
    }
});

export default Slide2;