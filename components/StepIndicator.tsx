// components/StepIndicator.tsx
import React from "react";
import { StyleSheet, View } from "react-native";

interface StepIndicatorProps {
    currentStep: number;
    totalSteps?: number;
    activeColor?: string;
    inactiveColor?: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
    currentStep,
    totalSteps = 4,
    activeColor = "#B7C5F9",
    inactiveColor = "#E5E5E7"
}) => {
    const renderSteps = () => {
        const steps = [];
        
        for (let i = 1; i <= totalSteps; i++) {
            const isActive = i <= currentStep;
            
            steps.push(
                <View
                    key={i}
                    style={[
                        styles.step,
                        isActive ? styles.activeStep : styles.inactiveStep,
                        {
                            backgroundColor: isActive ? activeColor : inactiveColor,
                        }
                    ]}
                />
            );
        }
        
        return steps;
    };
    
    return (
        <View style={styles.container}>
            {renderSteps()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    step: {
        height: 6,
        borderRadius: 3,
    },
    activeStep: {
        width: 32, // Длинная линия для активных шагов
    },
    inactiveStep: {
        width: 6, // Точка для неактивных шагов
    },
});

export default StepIndicator;