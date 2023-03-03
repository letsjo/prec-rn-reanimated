# **📌 Chapter 5. PinchGestureHandler**

## 📱 **실행 화면**

<br/>

![](https://velog.velcdn.com/images/gusdh2/post/6d9a06e3-680d-47f6-a6d7-269402df5280/image.gif)

---

## ⚙️ **reanimated hook**

- Animated.createAnimatedComponent(Image)

  ```js
  // 움직이는 이미지 태그 처리하기
  const AnimatedImage = Animated.createAnimatedComponent(Image);

  <Animated.View style={{ flex: 1 }}>
    <AnimatedImage
      style={[{ flex: 1 }, rStyle]}
      source={{ uri: imagesUri }}
    />
    <Animated.View style={[style.focalPoint, focalPointStyle]} />
  </Animated.View>;
  ```

## ⚙️ **gesture handler hook**

- PinchGestureHandler

  ![](https://velog.velcdn.com/images/gusdh2/post/3ff8cfae-b092-4074-9728-321fe4b9958e/image.png)

  ```js
  // pinch 제스쳐 이벤트 발생 시키는 태그
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
