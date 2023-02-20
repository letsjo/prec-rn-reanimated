# **📌 Chapter 4. Interpolate Color**

## 📱 **실행 화면**

<br/>

![InterpolateColor](https://velog.velcdn.com/images/gusdh2/post/103b4288-71d1-4390-9898-61f6cd5610ff/image.gif)

---

## ⚙️ **reanimated hook**

- useDerivedValue

  ```js
  // 공유 값을 업데이트에 따라 변경될 수 있도록 하는 hook
  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);
  ```

  ```ts
  useDerivedValue<0 | 1>(processor: () => 0 | 1, deps?: DependencyList | undefined): Readonly<Animated.SharedValue<0 | 1>>
  ```

- interpolateColor

  ```js
  // 출력할 색상의 입력 범위를 정한다.
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

## ⚙️ **gesture handler hook**

- Switch
  ```js
  // 토글 버튼
  <Switch
    value={theme === 'dark'}
    onValueChange={(toggled) => {
      setTheme(toggled ? 'dark' : 'light');
    }}
    trackColor={SWITCH_TRACK_COLOR}
    thumbColor={'violet'}
  />
  ```
