import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

interface LampIconProps {
    onPress?: () => void;
    size?: number;
    color?: string;
}

const LampIcon: React.FC<LampIconProps> = ({ 
    onPress, 
    size = 20,
    color = "#F5D76E"
}) => {
    const icon = (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
            <Defs>
                <ClipPath id="clip0_152_1179">
                    <Rect width="20" height="20" fill="white" />
                </ClipPath>
            </Defs>
            <G clipPath="url(#clip0_152_1179)">
                <Path
                    d="M12.5 11.6665C12.6667 10.8332 13.0833 10.2498 13.75 9.58317C14.5833 8.83317 15 7.74984 15 6.6665C15 5.34042 14.4732 4.06865 13.5355 3.13097C12.5979 2.19329 11.3261 1.6665 10 1.6665C8.67392 1.6665 7.40215 2.19329 6.46447 3.13097C5.52678 4.06865 5 5.34042 5 6.6665C5 7.49984 5.16667 8.49984 6.25 9.58317C6.83333 10.1665 7.33333 10.8332 7.5 11.6665"
                    stroke={color}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M7.5 15H12.5"
                    stroke={color}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M8.3335 18.3335H11.6668"
                    stroke={color}
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
        </Svg>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                {icon}
            </TouchableOpacity>
        );
    }

    return icon;
};

export default LampIcon;