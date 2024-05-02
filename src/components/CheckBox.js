import React from 'react';
import {TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Checkbox = ({ isSelected, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={isSelected ? 'checkbox-outline' : 'square-outline'}
        size={24}
        color={isSelected ? 'green' : 'black'}
      />
    </TouchableOpacity>
  );

export default Checkbox