# **π Chapter 5. PinchGestureHandler**

## π± **μ€ν νλ©΄**

<br/>

![](https://velog.velcdn.com/images/gusdh2/post/6d9a06e3-680d-47f6-a6d7-269402df5280/image.gif)

---

## βοΈ **reanimated hook**

- Animated.createAnimatedComponent(Image)

  ```js
  // μμ§μ΄λ μ΄λ―Έμ§ νκ·Έ μ²λ¦¬νκΈ°
  const AnimatedImage = Animated.createAnimatedComponent(Image);

  <Animated.View style={{ flex: 1 }}>
    <AnimatedImage
      style={[{ flex: 1 }, rStyle]}
      source={{ uri: imagesUri }}
    />
    <Animated.View style={[style.focalPoint, focalPointStyle]} />
  </Animated.View>;
  ```

## βοΈ **gesture handler hook**

- PinchGestureHandler

  ![](https://velog.velcdn.com/images/gusdh2/post/3ff8cfae-b092-4074-9728-321fe4b9958e/image.png)

  ```js
  // pinch μ μ€μ³ μ΄λ²€νΈ λ°μ μν€λ νκ·Έ
  import { PinchGestureHandler } from 'react-native-gesture-handler';

  <PinchGestureHandler onGestureEvent={pinchHandler}>
    <Animated.View style={{ flex: 1 }}>
      <AnimatedImage
        style={[{ flex: 1 }, rStyle]}
        source={{ uri: imagesUri }}
      />
      <Animated.View style={[style.focalPoint, focalPointStyle]} />
    </Animated.View>
  </PinchGestureHandler>;
  ```
