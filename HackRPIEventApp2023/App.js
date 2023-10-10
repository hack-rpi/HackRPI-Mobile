import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import CountdownTimer from './components/CountdownTimer';

export default function App() {
  return (
    <CountdownTimer />
  )
};