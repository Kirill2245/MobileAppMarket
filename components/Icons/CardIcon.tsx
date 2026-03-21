import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CardIconProps {
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
}

const CardIcon: React.FC<CardIconProps> = ({ 
    width = 20, 
    height = 20, 
    color = "#8E8E93",
    strokeWidth = 1.66667
}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
            <Path
                d="M16.6665 4.16675H3.33317C2.4127 4.16675 1.6665 4.91294 1.6665 5.83341V14.1667C1.6665 15.0872 2.4127 15.8334 3.33317 15.8334H16.6665C17.587 15.8334 18.3332 15.0872 18.3332 14.1667V5.83341C18.3332 4.91294 17.587 4.16675 16.6665 4.16675Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M1.6665 8.33325H18.3332"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default CardIcon;