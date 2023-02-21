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

  ![](https://velog.velcdn.com/images/gusdh2/post/7ce75484-6ea9-47c3-b406-c431eae7f257/image.png)

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
