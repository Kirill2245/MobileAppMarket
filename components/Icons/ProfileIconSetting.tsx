import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ProfileIconProps {
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
}

const ProfileIconSetting: React.FC<ProfileIconProps> = ({ 
    width = 20, 
    height = 20, 
    color = "#8E8E93",
    strokeWidth = 1.66667
}) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
            <Path
                d="M15.8332 17.5V15.8333C15.8332 14.9493 15.482 14.1014 14.8569 13.4763C14.2317 12.8512 13.3839 12.5 12.4998 12.5H7.49984C6.61578 12.5 5.76794 12.8512 5.14281 13.4763C4.51769 14.1014 4.1665 14.9493 4.1665 15.8333V17.5"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.99984 9.16667C11.8408 9.16667 13.3332 7.67428 13.3332 5.83333C13.3332 3.99238 11.8408 2.5 9.99984 2.5C8.15889 2.5 6.6665 3.99238 6.6665 5.83333C6.6665 7.67428 8.15889 9.16667 9.99984 9.16667Z"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default ProfileIconSetting;