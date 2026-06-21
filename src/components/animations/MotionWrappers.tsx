import React from "react"
import { motion } from "framer-motion"
import type { HTMLMotionProps, Variants } from "framer-motion"
import { theme } from "@/styles/theme"

interface BaseWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  duration?: number
}

/**
 * FadeIn Animates opacity from 0 to 1
 */
export const FadeIn: React.FC<BaseWrapperProps> = ({
  children,
  delay = 0,
  duration = theme.durations.slow,
  ...props
}) => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: theme.easings.studioExpo,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface SlideUpProps extends BaseWrapperProps {
  distance?: number
}

/**
 * SlideUp Animates translation on Y axis from `distance` to 0
 */
export const SlideUp: React.FC<SlideUpProps> = ({
  children,
  delay = 0,
  duration = theme.durations.slow,
  distance = 50,
  ...props
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: theme.easings.studioExpo,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface ScaleInProps extends BaseWrapperProps {
  initialScale?: number
}

/**
 * ScaleIn Animates scale from `initialScale` to 1 with fade
 */
export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = theme.durations.slow,
  initialScale = 0.95,
  ...props
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, scale: initialScale },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: theme.easings.studioExpo,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  staggerDelay?: number
  delayChildren?: number
}

/**
 * StaggerContainer orchestrates child animations
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  ...props
}) => {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerItem is placed inside StaggerContainer to be staggered
 */
export const StaggerItem: React.FC<BaseWrapperProps & { yDistance?: number }> = ({
  children,
  duration = theme.durations.slow,
  yDistance = 30,
  ...props
}) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: yDistance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: theme.easings.studioExpo,
      },
    },
  }

  return (
    <motion.div variants={variants} {...props}>
      {children}
    </motion.div>
  )
}
