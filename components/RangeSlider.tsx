import { COLORS } from "@/constants/color.const";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    GestureResponderEvent,
    PanResponder,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type RangeSliderProps = {
    minValue?: number;
    maxValue?: number;
    value?: number;
    onChange?: (value: number) => void;
    step?: number;
    containerStyle?: any;
};

const RangeSlider: React.FC<RangeSliderProps> = ({
    minValue = 0,
    maxValue = 100000,
    value = 0,
    onChange,
    step = 1000,
    containerStyle,
}) => {
    const [sliderWidth, setSliderWidth] = useState(SCREEN_WIDTH - 64);
    
    const position = useRef(new Animated.Value(0)).current;
    const containerRef = useRef<View>(null);
    const startX = useRef<number>(0);
    const startValue = useRef<number>(0);
    const containerX = useRef<number>(0);
    const isDragging = useRef<boolean>(false);
    const hasMoved = useRef<boolean>(false);

    useEffect(() => {
        if (!isDragging.current) {
            updatePosition(value);
        }
    }, [value]);

    const measureContainerPosition = () => {
        if (containerRef.current) {
            containerRef.current.measure((x, y, width, height, pageX, pageY) => {
                containerX.current = pageX;
            });
        }
    };

    const updatePosition = (val: number) => {
        const percent = (val - minValue) / (maxValue - minValue);
        position.setValue(percent);
    };

    const valueFromPosition = (pos: number) => {
        const percent = Math.min(Math.max(pos / sliderWidth, 0), 1);
        const rawValue = minValue + percent * (maxValue - minValue);
        const steppedValue = Math.round(rawValue / step) * step;
        return Math.min(Math.max(steppedValue, minValue), maxValue);
    };

    const handlePanMove = (evt: GestureResponderEvent) => {
        if (!sliderWidth || !evt.nativeEvent || !isDragging.current) return;
        
        const pageX = evt.nativeEvent.pageX;
        if (!pageX) return;
        
        hasMoved.current = true;
        
        const currentX = pageX - containerX.current;
        const deltaX = currentX - startX.current;
        const valuePerPixel = (maxValue - minValue) / sliderWidth;
        let newValue = startValue.current + (deltaX * valuePerPixel);
        
        newValue = Math.min(Math.max(newValue, minValue), maxValue);
        const steppedValue = Math.round(newValue / step) * step;
        const finalValue = Math.min(Math.max(steppedValue, minValue), maxValue);
        
        onChange?.(finalValue);
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt) => {
                if (!evt.nativeEvent) return;
                
                const pageX = evt.nativeEvent.pageX;
                if (!pageX) return;
                
                isDragging.current = true;
                hasMoved.current = false;
                
                measureContainerPosition();
                
                startX.current = pageX - containerX.current;
                startValue.current = value;
            },
            onPanResponderMove: (evt) => {
                handlePanMove(evt);
            },
            onPanResponderRelease: () => {
                isDragging.current = false;
                hasMoved.current = false;
            },
            onPanResponderTerminate: () => {
                isDragging.current = false;
                hasMoved.current = false;
            },
        })
    ).current;

    const handleTrackPress = (event: any) => {
        if (hasMoved.current || isDragging.current) return;
        
        if (!sliderWidth) return;
        
        const { locationX } = event.nativeEvent;
        if (locationX === undefined) return;
        
        const newValue = valueFromPosition(locationX);
        onChange?.(newValue);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ru-RU').format(price);
    };

    const percent = (value - minValue) / (maxValue - minValue);

    return (
        <View style={[styles.container, containerStyle]}>
            <View 
                ref={containerRef}
                style={styles.sliderContainer}
                onLayout={(event) => {
                    setSliderWidth(event.nativeEvent.layout.width);
                    measureContainerPosition();
                }}
            >
                <TouchableWithoutFeedback onPress={handleTrackPress}>
                    <View style={styles.touchableTrack}>
                        <View style={styles.trackWrapper}>
                            <Svg width="100%" height="8" viewBox="0 0 358 8" preserveAspectRatio="none">
                                <Path
                                    d="M0 4C0 1.79086 1.79086 0 4 0H354C356.209 0 358 1.79086 358 4C358 6.20914 356.209 8 354 8H4C1.79086 8 0 6.20914 0 4Z"
                                    fill="#E5E5E7"
                                />
                            </Svg>
                        </View>

                        <View
                            style={[
                                styles.activeTrackWrapper,
                                {
                                    width: `${percent * 100}%`,
                                },
                            ]}
                        >
                            <Svg width="100%" height="8" viewBox="0 0 358 8" preserveAspectRatio="none">
                                <Defs>
                                    <LinearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <Stop offset="0%" stopColor={COLORS.PRIMARY_BG} />
                                        <Stop offset="50%" stopColor={COLORS.SEMI_BLUE_COLOR}/>
                                        <Stop offset="100%" stopColor={COLORS.PRIMARY_BUTTON_TEXT} />
                                    </LinearGradient>
                                </Defs>
                                <Path
                                    d="M0 4C0 1.79086 1.79086 0 4 0H354C356.209 0 358 1.79086 358 4C358 6.20914 356.209 8 354 8H4C1.79086 8 0 6.20914 0 4Z"
                                    fill="url(#activeGradient)"
                                />
                            </Svg>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <Animated.View
                    style={[
                        styles.thumb,
                        {
                            left: `${percent * 100}%`,
                            transform: [{ translateX: -12 }],
                        },
                    ]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.thumbInner} />
                </Animated.View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
    },
    sliderContainer: {
        position: 'relative',
        height: 60,
        justifyContent: 'center',
        marginVertical: 0,
    },
    touchableTrack: {
        position: 'absolute',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        top: 10,
    },
    trackWrapper: {
        position: 'absolute',
        width: '100%',
        height: 8,
        top: 16,
    },
    activeTrackWrapper: {
        position: 'absolute',
        height: 8,
        top: 16,
        overflow: 'hidden',
    },
    thumb: {
        position: 'absolute',
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        top: 18,
        zIndex: 10,
    },
    thumbInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#101073',
    },
    valueContainer: {
        alignItems: 'center',
        marginTop: 24,
    },
    valueText: {
        fontWeight: '600',
        color: '#000000',
    },
});

export default RangeSlider;