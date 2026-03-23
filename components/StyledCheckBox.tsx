
import { COLORS } from "@/constants/color.const";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

type  StyledCheckBoxProps = {
    checked:boolean;
    onCheck: () => void;
    variant?: "circle" | "square" | "circleIcons"
}

const StyledCheckBox: React.FC<StyledCheckBoxProps> = ({onCheck,checked, variant = "square"}) => {
    return (
        <TouchableOpacity 
        onPress={onCheck} 
        style = {[
                variant === "square" ? styles.square : null,
                variant === "circle" ? styles.circle : null,
                variant === 'circleIcons' ? styles.circleIcons : null,
                (checked && (variant === "square")) ? styles.isChecked : null
            ]}
        >
            {(checked && variant === "square") &&<Ionicons 
                name={"checkmark-outline"} 
                size={16} 
                color={'black'}
            />}
            {
                variant === "circleIcons" &&
                <Ionicons
                    name={checked ? "checkmark-circle" : "ellipse-outline"} 
                    size={32} 
                    color={checked ? 'black' : 'while'}
                />
            }

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    square:{
        backgroundColor:"#ffff", 
        width:20, 
        height:20,
        borderWidth:1,
        borderColor:COLORS.PRIMARY_BORDER_GREY,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        backgroundColor:COLORS.PRIMARY_BORDER_GREY, 
        width:24, 
        height:24,
        borderRadius:'50%'
    },
    isChecked:{
        backgroundColor:COLORS.PRIMARY_BUTTON_COLOR, 
    },
    circleIcons:{

    }
})
export default StyledCheckBox