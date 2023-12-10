import { chakra, BoxProps, ChakraProps, forwardRef } from "@chakra-ui/react";
import { isValidMotionProp, motion, MotionProps } from "framer-motion";

export type MotionBoxProps = Omit<BoxProps, keyof MotionProps> &
  MotionProps & {
    animationDuration?: number;
    animationDelay?: number;
    animationEase?: [number, number, number, number];
  };

// Workaround needed to be able to pass "transition" prop to motion chakra div
const MotionBox = motion(
  forwardRef<MotionProps & ChakraProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );

    return <chakra.div ref={ref} {...chakraProps} />;
  })
);

export const AnimatedBox = ({
  children,
  animationDuration = 0.3,
  animationDelay = 0,
  animationEase,
  ...rest
}: MotionBoxProps) => {
  return (
    <MotionBox
      transition={{
        duration: animationDuration,
        delay: animationDelay,
        ease: animationEase,
      }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};
