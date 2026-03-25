import { COLORS } from '@/constants/color.const';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

interface ToggleSwitchProps {
  isOn?: boolean;
  onToggle?: (value: boolean) => void;
  label?: string;
}

const StyledToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  isOn: externalIsOn, 
  onToggle,
  label
}) => {
  const [isOn, setIsOn] = useState<boolean>(externalIsOn || false);
  const translateX = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  useEffect(() => {
    if (externalIsOn !== undefined) {
      setIsOn(externalIsOn);
    }
  }, [externalIsOn]);

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: isOn ? 1 : 0,
      useNativeDriver: true,
      tension: 100,
      friction: 10,
    }).start();
  }, [isOn]);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onToggle) {
      onToggle(newValue);
    }
  };

  const sliderTransform = translateX.interpolate({
    inputRange: [0, 1.05],
    outputRange: [0.83, 24.84],
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableWithoutFeedback onPress={handleToggle}>
        <View style={[styles.track, isOn && styles.trackOn]}>
          <Animated.View
            style={[
              styles.slider,
              isOn && {
                elevation: 2,
                shadowColor: '#000',
                shadowOffset: { width: 0.83, height: 1 },
                shadowOpacity: 0.661,
                shadowRadius: 2,
              },
              {
                transform: [{ translateX: sliderTransform }],
              },
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  track: {
    width: 51,
    height: 31,
    backgroundColor: COLORS.PRIMARY_BORDER_GREY,
    borderRadius: 19.83,
    padding: 0.83,
    justifyContent: 'center',
  },
  trackOn: {
    backgroundColor: COLORS.SEMI_BLUE_COLOR,
  },
  slider: {
    width: 27,
    height: 27,
    backgroundColor: 'white',
    borderRadius: '50%'
  },
});

export default StyledToggleSwitch;