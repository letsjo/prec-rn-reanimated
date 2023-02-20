# **📌 Chapter 2. The basics of PanGestureHandler**

## 📱 **실행 화면**

<br/>

![PanGestureHandler](https://user-images.githubusercontent.com/98210863/220142544-973bd4bb-9023-4aa9-a3a8-de97bfac7c80.gif)

---

## ⚙️ **reanimated hook**

- **useAnimatedGestureHandler**

  ```js
  // 제스쳐 이벤트 처리
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

## ⚙️ **gesture handler hook**

- **GestureHandlerRootView**

  ```js
  // 제스쳐 감시할 위치에 wrap 해주는 root view
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
  // onGestureEvent 속성으로 제스쳐 이벤트를 발생시키게 하는 태그
  <PanGestureHandler onGestureEvent={panGestureEvent}>
    <Animated.View style={[styles.square, rStyle]} />
  </PanGestureHandler>
  ```
