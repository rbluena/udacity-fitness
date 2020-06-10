import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const DateHeader = ({ date }) => {
  return (
    <View>
      <Text>{date}</Text>
    </View>
  );
};

DateHeader.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateHeader;
