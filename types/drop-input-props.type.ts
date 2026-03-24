import { InputProps } from "react-native-elements";

export type DropdownItem = {
    label: string;
    value: string | number;
};

export type DropdownInputProps = Omit<InputProps, 'value' | 'onChangeText'> & {
    items: DropdownItem[];
    value?: string | number;
    onSelect?: (item: DropdownItem) => void;
    placeholder?: string;
    variant?: 'forms-input' | 'forms-fill-input';
    disabled?: boolean;
    error?: string;
    dropdownHeight?: number;
    searchable?: boolean;
    searchPlaceholder?: string;
};