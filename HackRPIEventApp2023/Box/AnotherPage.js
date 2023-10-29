import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AnotherPage = ({ route }) => {
  const { hackerData } = route.params;
  const handleCheckOff = () => {
    // Add your logic for handling the "Check off" button click here.
    // You can toggle the checkmark state or perform any other action.
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.labelStyle}>Name: </Text>
          <Text style={styles.descriptionStyle}>{hackerData.Hacker_Name}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.labelStyle}>Table: </Text>
          <Text style={styles.descriptionStyle}>{hackerData.Table}</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        {hackerData ? (
          <View>
            {hackerData.BriefDescription ? (
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.descriptionLabel}>Brief Description: </Text>
                <Text style={styles.description}>{hackerData.BriefDescription}</Text>
              </View>
            ) : null}
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.descriptionLabel}>Description: </Text>
              <Text style={styles.description}>{hackerData.Description}</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.centeredText}>Nothing to display</Text>
        )}
        <TouchableOpacity
          onPress={handleCheckOff}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonText}>Check off</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  },
  topSection: {
    flex: 0,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionStyle: {
    fontSize: 18,
    color: 'white',
  },
  centeredText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  descriptionLabel: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  description: {
    fontSize: 25,
    color: 'white',
  },
});

export default AnotherPage;
