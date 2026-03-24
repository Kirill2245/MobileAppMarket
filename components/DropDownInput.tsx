import { COLORS } from "@/constants/color.const";
import { DropdownInputProps, DropdownItem } from "@/types/drop-input-props.type";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    Modal,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import StyledText from "./StyledText";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const DropdownInput: React.FC<DropdownInputProps> = ({
    items,
    value,
    onSelect,
    placeholder = "Выберите значение",
    variant = 'forms-input',
    disabled = false,
    error,
    dropdownHeight = 300,
    searchable = false,
    searchPlaceholder = "Поиск...",
    containerStyle,
    inputContainerStyle,
    inputStyle,
    leftIcon,
    rightIcon,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const containerRef = useRef<View>(null);
    const inputRef = useRef<any>(null);

    const selectedItem = items.find(item => item.value === value);

    const filteredItems = searchable && searchQuery
        ? items.filter(item => 
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : items;

    const handleOpen = () => {
        if (disabled) return;
        setIsVisible(true);
        setSearchQuery("");
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleSelect = (item: DropdownItem) => {
        onSelect?.(item);
        handleClose();
    };

    const getDisplayValue = () => {
        if (selectedItem) return selectedItem.label;
        return "";
    };

    return (
        <>
            <View 
                ref={containerRef} 
                collapsable={false}
                style={[styles.container, containerStyle]}
            >
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleOpen}
                    disabled={disabled}
                >
                    <View pointerEvents="none">
                        <Input
                            {...props}
                            containerStyle={[
                                styles.inputContainer,
                                containerStyle
                            ]}
                            inputContainerStyle={[
                                styles.inputContainerBase,
                                variant === 'forms-input' && styles.formsInput,
                                error && styles.errorBorder,
                                isVisible && styles.focused,
                                inputContainerStyle
                            ]}
                            inputStyle={[
                                styles.inputBase,
                                selectedItem && styles.hasValue,
                                inputStyle
                            ]}
                            leftIcon={leftIcon}
                            rightIcon={
                                <Icon 
                                    name={isVisible ? "chevron-up" : "chevron-down"} 
                                    size={20} 
                                    color={disabled ? COLORS.PRIMARY_PLACEHOLDER : COLORS.TITLE_GREY}
                                />
                            }
                            placeholder={placeholder}
                            placeholderTextColor={COLORS.PRIMARY_PLACEHOLDER}
                            value={getDisplayValue()}
                            editable={false}
                            pointerEvents="none"
                        />
                    </View>
                </TouchableOpacity>

                {error && (
                    <StyledText 
                        size="small" 
                        variant="subtitle-grey"
                        style={styles.errorText}
                    >
                        {error}
                    </StyledText>
                )}
            </View>

            <Modal
                visible={isVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={handleClose}
            >
                <TouchableWithoutFeedback onPress={handleClose}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <View style={[
                                    styles.dropdown,
                                    {
                                        maxHeight: dropdownHeight,
                                    }
                                ]}>
                                    {searchable && (
                                        <View style={styles.searchContainer}>
                                            <Icon name="search" size={18} color={COLORS.PRIMARY_PLACEHOLDER} />
                                            <TextInput
                                                style={styles.searchInput}
                                                placeholder={searchPlaceholder}
                                                placeholderTextColor={COLORS.PRIMARY_PLACEHOLDER}
                                                value={searchQuery}
                                                onChangeText={setSearchQuery}
                                                autoFocus
                                            />
                                            {searchQuery.length > 0 && (
                                                <TouchableOpacity onPress={() => setSearchQuery("")}>
                                                    <Icon name="close" size={18} color={COLORS.PRIMARY_PLACEHOLDER} />
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    )}

                                    <FlatList
                                        data={filteredItems}
                                        keyExtractor={(item) => item.value.toString()}
                                        showsVerticalScrollIndicator={true}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                style={[
                                                    styles.dropdownItem,
                                                    selectedItem?.value === item.value && styles.selectedItem
                                                ]}
                                                onPress={() => handleSelect(item)}
                                            >
                                                <StyledText 
                                                    size="medium"
                                                    style={[
                                                        styles.dropdownItemText,
                                                        selectedItem?.value === item.value && styles.selectedItemText
                                                    ]}
                                                >
                                                    {item.label}
                                                </StyledText>
                                                {selectedItem?.value === item.value && (
                                                    <Icon name="checkmark" size={18} color={COLORS.PRIMARY_BUTTON_TEXT} />
                                                )}
                                            </TouchableOpacity>
                                        )}
                                        ListEmptyComponent={
                                            <View style={styles.emptyContainer}>
                                                <StyledText 
                                                    size="small" 
                                                    variant="subtitle-grey"
                                                    style={styles.emptyText}
                                                >
                                                    Ничего не найдено
                                                </StyledText>
                                            </View>
                                        }
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 0,
        margin: 0,
    },
    inputContainerBase: {
        width: '100%',
        height: 48,
        borderRadius: 14,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        margin: 0,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: '#ffffff00',
    },
    inputBase: {
        fontSize: 16,
        color: '#000000',
        padding: 0,
        margin: 0,
    },
    hasValue: {
        color: '#000000',
    },
    formsInput: {
        borderWidth: 1.6,
        borderColor: COLORS.PRIMARY_BORDER_GREY,
    },
    focused: {
        borderColor: COLORS.PRIMARY_BORDER_COLOR,
        borderWidth: 1,
    },
    errorBorder: {
        borderColor: COLORS.PRYMARY_RED_COLOR || '#FF3B30',
        borderWidth: 1,
    },
    errorText: {
        marginTop: 4,
        marginLeft: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: SCREEN_WIDTH * 0.85, // 85% от ширины экрана
        maxWidth: 400, // Максимальная ширина
        borderRadius: 14,
        overflow: 'hidden',
    },
    dropdown: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY_BORDER_GREY,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        backgroundColor: '#FFFFFF',
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        marginLeft: 8,
        marginRight: 8,
        padding: 0,
        color: '#000000',
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    selectedItem: {
        backgroundColor: '#F8F9FA',
    },
    dropdownItemText: {
        flex: 1,
    },
    selectedItemText: {
        color: COLORS.PRIMARY_BUTTON_TEXT,
        fontWeight: '500',
    },
    emptyContainer: {
        padding: 20,
        alignItems: 'center',
    },
    emptyText: {
        textAlign: 'center',
    },
});

export default DropdownInput;