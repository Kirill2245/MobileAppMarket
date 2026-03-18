import { COLORS } from "@/constants/color.const";
import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Card from "./Card";
import Tag from "./Tag";



const Slide2 = () => {
    const tagList = [
        { title: '✓ Проверено' },
        { title: '🔒 Безопасные Платежи' },
        { title: '⭐ 5 Звезд' },     
        { title:'🤖 На основе ИИ'}   
    ];
    const cardList = [
        {
            title:"Расскажите, что вам нужно",
            subtitle:"Опишите ваш проект простым языком",
            image: require('@/assets/images/Container1.png')
        },
        {
            title:"AI находит совпадение",
            subtitle:"Наш алгоритм мгновенно анализирует навыки и соответствие",
            image: require('@/assets/images/Container2.png')
        },
        {
            title:"Начните работать безопасно",
            subtitle:"Защищенные платежи и проверенные профили",
            image: require('@/assets/images/Container3.png')
        },
    ]
    const renderCard = ({item}: {item:{title:string, subtitle:string, image: any}}) =>(
        <Card title = {item.title} subtitle = {item.subtitle} imageSource={item.image}/>
    )
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
                    <FlatList
                        data={cardList}
                        renderItem={renderCard}
                        keyExtractor={(item) => item.title}
                        contentContainerStyle = {styles.listCard}
                    />
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
        gap:40
    },
    scrollView: {
        maxHeight: 60, // Ограничиваем высоту области скролла
    },
    list: {
        gap: 12,
        paddingVertical: 5,
    },
    listCard:{
        gap:24
    }
});

export default Slide2;