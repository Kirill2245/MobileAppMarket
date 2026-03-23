// ArrowCurveIcon.tsx
import React from "react";
import Svg, { Path } from "react-native-svg";

type ArrowCurveIconProps = {
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
};

const ArrowCurveIcon: React.FC<ArrowCurveIconProps> = ({ 
    width = 24, 
    height = 24,
    color = "#6E6E73",
    strokeWidth = 2
}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M22 7L13.5 15.5L8.5 10.5L2 17"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16 7H22V13"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default ArrowCurveIcon;