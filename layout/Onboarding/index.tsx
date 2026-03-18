import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Slide1 from './Slides/Slide1';
import Slide2 from './Slides/Slide2';
import Slide3 from './Slides/Slide3';
import Slide4 from './Slides/Slide4';
import Slide5 from './Slides/Slide5';

const { width } = Dimensions.get('window');
interface OnboardingProps{
    isShowFormAuth: () => void
}
const Onboarding:React.FC<OnboardingProps> = ({isShowFormAuth}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    
    const slides = [
        { id: '1', component: Slide1 }, 
        { id: '2', component: Slide2 },
        { id:'3', component: Slide3 },
        { id:'4', component: Slide4 },
        {id:'5', component: Slide5}
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
                <Component onNext={goToNextSlide} isShowFormAuth={isShowFormAuth}/> 
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