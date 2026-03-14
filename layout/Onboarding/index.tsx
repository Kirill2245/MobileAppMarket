import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Slide1 from './Slides/slide1';
import Slide2 from './Slides/slide2';

const { width } = Dimensions.get('window');

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    
    const slides = [
        { id: '1', component: Slide1 }, 
        { id: '2', component: Slide2 }
    ];

    const goToNextSlide = () => {
        if (currentIndex < slides.length - 1) {
            const nextIndex = currentIndex + 1;
            flatListRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true
            });
            setCurrentIndex(nextIndex);
        }
    };

    const renderItem = ({ item }: { item: typeof slides[0] }) => {
        const Component = item.component;
        return (
            <View style={{ width }}>
                <Component onNext={goToNextSlide} /> 
            </View>
        );
    };

    return (
        <View style={styles.contain}>
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
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />
        </View>
    );
};

const styles = {
    contain: {
        flex: 1,
    }
};

export default Onboarding;