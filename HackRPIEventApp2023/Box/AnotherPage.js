import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AnotherPage = ({route}) => {
  const { hackerData } = route.params;
  const handleCheckOff = () => {
    // Add your logic for handling the "Check off" button click here.
    // You can toggle the checkmark state or perform any other action.
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {hackerData ? ( // Check if hackerData is defined
        <View>
            <Text>{hackerData.Hacker_Name}</Text>
            <Text>{hackerData.Table}</Text>
            <Text>{hackerData.BriefDescription}</Text>
            <Text>{hackerData.Description}</Text>
        </View>
      ) : (
        <Text>Nothing to display</Text>
      )}
      <TouchableOpacity
        onPress={handleCheckOff}
        style={{
          backgroundColor: 'green',
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white' }}>Check off</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnotherPage;
