# **📌 Chapter 1. Reanimated Intro**

## 📱 **실행 화면**

<br/>

![Reanimated](https://user-images.githubusercontent.com/98210863/220127121-db2b7b0d-79cf-469f-a9be-bd294a6cf8f3.gif)

---

## ⚙️ **reanimated hook**

- **useSharedValue**

  ```ts
  // animated 를 위한 Value 값 초기화
  const progress = useSharedValue(1);

  useSharedValue<number>(initialValue: number): SharedValue<number>
  ```

- **useAnimatedStyle**

  ```ts
  // animated 스타일 및 움직임 처리
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: progress.value * SIZE / 2,
      transform: [
        { scale: scale.value }, { rotate: handleRotation(progress) }
      ],
    };
  }, []);

  useAnimatedStyle<{
      opacity: number;
      borderRadius: number;
      transform: ({
          scale: number;
          rotate?: undefined;
      } | {
          rotate: string;
          scale?: undefined;
      })[];
  }>(updater: () => {
      opacity: number;
      borderRadius: number;
      transform: ({
          scale: number;
          rotate?: undefined;
      } | {
          ...;
      })[];
  }, deps?: DependencyList | ... 1 more ... | undefined): {
      opacity: number;
      borderRadius: number;
      transform: ({
          scale: number;
          rotate?: undefined;
      } | {
          ...;
      })[];
  }
  ```

- **withRepeat** / **withSpring** / **withTiming**

  ```js
  // withRepeat: animated를 몇 번 반복할지 ? reverse 할 건지?
  // withSpring, withTiming : animated 효과를 어떻게 줄지? 몇 초 동안 돌껀지

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);
  ```

  ```ts
  withRepeat<0.5>(animation: 0.5, numberOfReps?: number | undefined, reverse?: boolean | undefined, callback?: AnimationCallback | undefined): 0.5
  ```

  ```ts
  withSpring<0.5>(toValue: 0.5, userConfig?: WithSpringConfig | undefined, callback?: AnimationCallback | undefined): 0.5
  ```

  ```ts
  withTiming<T extends AnimatableValue>(toValue: T, userConfig?: WithTimingConfig, callback?: AnimationCallback): T
  ```
