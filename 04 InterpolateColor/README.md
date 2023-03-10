# **π Chapter 4. Interpolate Color**

## π± **μ€ν νλ©΄**

<br/>

![InterpolateColor](https://velog.velcdn.com/images/gusdh2/post/103b4288-71d1-4390-9898-61f6cd5610ff/image.gif)

---

## βοΈ **reanimated hook**

- useDerivedValue

  ```js
  // κ³΅μ  κ°μ μλ°μ΄νΈμ λ°λΌ λ³κ²½λ  μ μλλ‘ νλ hook
  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);
  ```

  ```ts
  useDerivedValue<0 | 1>(processor: () => 0 | 1, deps?: DependencyList | undefined): Readonly<Animated.SharedValue<0 | 1>>
  ```

- interpolateColor

  ```js
  // μΆλ ₯ν  μμμ μλ ₯ λ²μλ₯Ό μ νλ€.
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );

    return {
      backgroundColor,
    };
  });
  ```

  ```ts
  interpolateColor<string>(value: number, inputRange: readonly number[], outputRange: readonly string[], colorSpace?: "RGB" | "HSV" | undefined): string
  ```

## βοΈ **gesture handler hook**

- Switch
  ```js
  // ν κΈ λ²νΌ
  <Switch
    value={theme === 'dark'}
    onValueChange={(toggled) => {
      setTheme(toggled ? 'dark' : 'light');
    }}
    trackColor={SWITCH_TRACK_COLOR}
    thumbColor={'violet'}
  />
  ```
