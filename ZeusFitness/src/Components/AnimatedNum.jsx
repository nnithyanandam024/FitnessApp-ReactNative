import React, { useEffect, useRef, useState } from 'react';
import { Text, Animated } from 'react-native';

const AnimatedNumber = ({ isDarkMode }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 95, 
      duration: 2000, 
      useNativeDriver: false,
    }).start();

    animatedValue.addListener((v) => {
      setDisplayNumber(Math.round(v.value));
    });

    return () => animatedValue.removeAllListeners();
  }, []);

  return (
    <Text style={{ fontSize: 50, color: isDarkMode ? "white" : "black", fontWeight: 'bold' }}>
      {displayNumber}
    </Text>
  );
};

export default AnimatedNumber;
