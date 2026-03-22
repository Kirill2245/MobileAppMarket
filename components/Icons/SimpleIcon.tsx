// SimpleRectIcon.tsx
import React from "react";
import Svg, { Path } from "react-native-svg";

type SimpleRectIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const SimpleRectIcon: React.FC<SimpleRectIconProps> = ({ 
    width = 44, 
    height = 43,
    color = "#0A0A0A"
}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 44 43" fill="none">
            <Path
                d="M0 40.24H32V8.24H0V40.24Z"
                fill={color}
            />
        </Svg>
    );
};

export default SimpleRectIcon;