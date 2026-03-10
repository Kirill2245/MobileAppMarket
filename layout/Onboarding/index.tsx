import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import Slide1 from "./Slides/slide1";
import Slide2 from "./Slides/slide2";
const { width } = Dimensions.get('window');
const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const slides = [
        { id: '1', component: <Slide1 /> },
        { id: '2', component: <Slide2 /> }
    ];
    return (
        <View style = {styles.contain}>
            <FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
                renderItem={({ item }) => (
                    <View style={{ width }}>
                        {item.component}
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    contain:{
        flex:1
    }
})

export default Onboarding