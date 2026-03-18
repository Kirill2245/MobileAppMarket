// @/components/icons/SearchIcon.js
import Svg, { Path } from 'react-native-svg';

const SearchIcon = ({ focused, color, size }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke={color}
            strokeWidth={focused ? 2.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M21 21L16.7 16.7"
            stroke={color}
            strokeWidth={focused ? 2.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default SearchIcon;