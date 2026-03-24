import { StyleSheet, View } from "react-native";

type PasswordStrength = 'weak' | 'medium' | 'strong';


const PasswordStrengthIndicator = ({ strength }: { strength: PasswordStrength }) => {
    const getColor = (index: number): string => {
        if (!strength) return "#E5E5E7";
        
        switch (strength) {
            case 'weak':
                return index === 0 ? "#EF4444" : "#E5E5E7";
            case 'medium':
                return index <= 1 ? "#F59E0B" : "#E5E5E7";
            case 'strong':
                return "#88D3B0";
            default:
                return "#E5E5E7";
        }
    };

    return (
        <View style={styles.strengthContainer}>
            <View style={[styles.strengthLine, { backgroundColor: getColor(0) }]} />
            <View style={[styles.strengthLine, { backgroundColor: getColor(1) }]} />
            <View style={[styles.strengthLine, { backgroundColor: getColor(2) }]} />
        </View>
    );
};

const styles = StyleSheet.create({
        strengthContainer: {
        flexDirection: 'row',
        gap: 4,
        marginTop: 8,
        flex:1
    },
    strengthLine: {
        flex:1,
        height: 4,
        borderRadius: 2,
    },
    strengthWrapper: {
        marginTop: 8,
    },
    strengthText: {
        marginTop: 4,
    }
})

export default PasswordStrengthIndicator