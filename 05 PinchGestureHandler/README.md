# **📌 Chapter 5. PinchGestureHandler**

## 📱 **실행 화면**

<br/>

![PinchGestureHandler](https://velog.velcdn.com/images/gusdh2/post/7f9059b7-f24f-4549-9397-d88ab94354da/image.gif)

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

  ![](https://velog.velcdn.com/images/gusdh2/post/8fbd7837-e62d-4872-a4ff-2c6aa6f66407/image.gif)

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
