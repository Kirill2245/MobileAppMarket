import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ExitIconProps {
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
}

const ExitIcon: React.FC<ExitIconProps> = ({ 
    width = 20, 
    height = 20, 
    color = "#FF3B30",
    strokeWidth = 1.66667
}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
            <Path
                d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M13.3335 14.1666L17.5002 9.99992L13.3335 5.83325"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M17.5 10H7.5"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default ExitIcon;