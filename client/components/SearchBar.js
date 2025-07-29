import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({
  value,
  onChange,
  onClose,
  placeholder = "Search...",
  autoFocus = false,
  style = {},
  inputStyle = {},
  ...props
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <TextInput
        style={[styles.input, inputStyle]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor="#bbb"
        autoFocus={autoFocus}
        {...props}
      />
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Ionicons name="close" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    borderRadius: 10,
    borderColor: '#313454',
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 44,
  
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  closeBtn: {
    marginLeft: 4,
    padding: 6,
    borderRadius: 18,
  }
});

export default SearchBar;