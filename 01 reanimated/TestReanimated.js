import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const SIZE = 100.0;

const handleRotation = (progress) => {
  'worklet';

  return `${progress.value * 2 * Math.PI}rad`;
}

const TestReanimated = () => {

  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: progress.value * SIZE / 2,
      transform: [
        { scale: scale.value }, { rotate: handleRotation(progress) }
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, [])

  return (
    <View style={ styles.container }>
      <Animated.View
        style={ [
          { height: SIZE, width: SIZE, backgroundColor: 'blue' },
          reanimatedStyle,
        ] }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestReanimated;