# **๐ Chapter 3. Interpolate with ScrollView**

## ๐ฑ **์คํ ํ๋ฉด**

<br/>

![ScrollView](https://velog.velcdn.com/images/gusdh2/post/fe0319f8-d095-40b4-8d93-061c7a812110/image.gif)

---

## โ๏ธ **reanimated hook**

- useAnimatedScrollHandler

  ```js
  // scroll event ์ฒ๋ฆฌ
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  useAnimatedScrollHandler<{}>(handlers: ScrollHandlers<{}> | ScrollHandler<{}>, deps?: DependencyList | undefined): OnScroll
  ```

- Animate.ScrollView
  ```js
  // scroll event๋ฅผ ๋ฐ์์์ผ์ ์ ๋ฌํด์ฃผ๋ ํ๊ทธ
  <Animated.ScrollView
    pagingEnabled
    horizontal
    onScroll={scrollHandler}
    scrollEventThrottle={16}
    style={styles.container}
  >
    {WORDS.map((title, index) => {
      return (
        <Page
          key={index.toString()}
          title={title}
          index={index}
          translateX={translateX}
        />
      );
    })}
  </Animated.ScrollView>
  ```
