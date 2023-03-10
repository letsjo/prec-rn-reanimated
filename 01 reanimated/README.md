# **๐ Chapter 1. Reanimated Intro**

## ๐ฑ **์คํ ํ๋ฉด**

<br/>

![Reanimated](https://user-images.githubusercontent.com/98210863/220127121-db2b7b0d-79cf-469f-a9be-bd294a6cf8f3.gif)

---

## โ๏ธ **reanimated hook**

- **useSharedValue**

  ```ts
  // animated ๋ฅผ ์ํ Value ๊ฐ ์ด๊ธฐํ
  const progress = useSharedValue(1);

  useSharedValue<number>(initialValue: number): SharedValue<number>
  ```

- **useAnimatedStyle**

  ```ts
  // animated ์คํ์ผ ๋ฐ ์์ง์ ์ฒ๋ฆฌ
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
  // withRepeat: animated๋ฅผ ๋ช ๋ฒ ๋ฐ๋ณตํ ์ง ? reverse ํ  ๊ฑด์ง?
  // withSpring, withTiming : animated ํจ๊ณผ๋ฅผ ์ด๋ป๊ฒ ์ค์ง? ๋ช ์ด ๋์ ๋๊ป์ง

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
