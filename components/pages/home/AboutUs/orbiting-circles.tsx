"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  parentHeight?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  parentHeight = 500,
  delay = 0,
  ...props
}: OrbitingCirclesProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="absolute size-full ">
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none overflow-visible absolute inset-0 size-full"
          viewBox="0 0 280 280"
        >
          <circle
            className="stroke-[#215F67] stroke-1 dark:stroke-white/10"
            cx="140"
            cy="140"
            r={radius * (200 / (parentHeight * 0.5))}
            fill="none"
          />
        </svg>
      )}
      {childrenArray.map((child, index) => {
        const angle = 180 * (index + 1);
        const initialRotation = angle;

        return (
          <motion.div
            // {...props}
            key={index}
            className={cn("absolute hidden sm:block", className)}
            style={{
              width: iconSize,
              height: iconSize,
              left: "50%",
              top: "50%",
              marginLeft: -iconSize / 2,
              marginTop: -iconSize / 2,
            }}
            initial={{ rotate: initialRotation }}
            animate={{
              rotate: reverse ? initialRotation - 360 : initialRotation + 360,
            }}
            transition={{
              duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay,
            }}
          >
            <motion.div
              className="absolute"
              style={{
                x: radius,
                y: 0,
              }}
              animate={{
                rotate: reverse ? 360 : -360,
              }}
              transition={{
                duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay,
              }}
            >
              {child}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
