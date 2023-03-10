# **π Chapter 2. The basics of PanGestureHandler**

## π± **μ€ν νλ©΄**

<br/>

![PanGestureHandler](https://user-images.githubusercontent.com/98210863/220142544-973bd4bb-9023-4aa9-a3a8-de97bfac7c80.gif)

---

## βοΈ **reanimated hook**

- **useAnimatedGestureHandler**

  ```js
  // μ μ€μ³ μ΄λ²€νΈ μ²λ¦¬
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(
        translateX.value ** 2 + translateY.value ** 2,
      );

      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });
  ```

  ```ts
  useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {}>(handlers: GestureHandlers<Readonly<GestureEventPayload & PanGestureHandlerEventPayload>, {}>, deps?: DependencyList | undefined): OnGestureEvent<...>
  ```

## βοΈ **gesture handler hook**

- **GestureHandlerRootView**

  ```js
  // μ μ€μ³ κ°μν  μμΉμ wrap ν΄μ£Όλ root view
  <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  </GestureHandlerRootView>
  ```

- **PanGestureHandler**
  ```js
  // onGestureEvent μμ±μΌλ‘ μ μ€μ³ μ΄λ²€νΈλ₯Ό λ°μμν€κ² νλ νκ·Έ
  <PanGestureHandler onGestureEvent={panGestureEvent}>
    <Animated.View style={[styles.square, rStyle]} />
  </PanGestureHandler>
  ```
