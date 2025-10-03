import type { PropsWithChildren } from 'react';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

type Props = PropsWithChildren;

export default function ParallaxScrollView({ children }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
      {children}
    </Animated.ScrollView>
  );
}
