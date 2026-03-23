import StepIndicator from "@/components/StepIndicator";
import StyledButton from "@/components/StyledButton";
import StyledText from "@/components/StyledText";
import { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";

const MasterSign = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const fadeAnim = useState(new Animated.Value(1))[0];
    
    const backStep = () => {
        if (currentStep > 1) {
            animateStepChange(() => {
                setCurrentStep(currentStep - 1);
            });
        }
    };
    
    const nextStep = () => {
        if (currentStep < 4) {
            animateStepChange(() => {
                setCurrentStep(currentStep + 1);
            });
        }
    };
    
    const animateStepChange = (callback: () => void) => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start();
        callback();
    };
    
    return (
        <View style={styles.frame}>
            <View style={styles.header}>
                {currentStep !== 1 && <StyledButton 
                    icon="chevron-back" 
                    variant="txt-btn" 
                    sizeIcon={24} 
                    onPress={backStep}
                />}
                <View style={styles.stepInfo}>
                    <StyledText size="small" variant="subtitle-grey">
                        Шаг {currentStep} из 4
                    </StyledText>
                    <StepIndicator 
                        currentStep={currentStep} 
                        totalSteps={4}
                    />
                </View>
            </View>
            
            <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
                <StyledText>Содержимое шага {currentStep}</StyledText>
            </Animated.View>
            
            {currentStep < 4 && (
                <StyledButton 
                    lable="Далее" 
                    onPress={nextStep}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom:33
    },
    header: {
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    stepInfo: {
        flex:1,
        justifyContent: 'flex-end',
        gap: 8,
        flexDirection:'row'
    },
    content: {
        flex: 1,
    },
});

export default MasterSign;