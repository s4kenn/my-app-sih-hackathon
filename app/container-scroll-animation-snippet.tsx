"use client";
import React from "react";

// Define types for ContainerScroll props
interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

// Define ContainerScroll component with TypeScript
export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  return (
    <div>
      <div>{titleComponent}</div>
      <div>{children}</div>
    </div>
  );
}

// Define the HeroScrollDemo component
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              We now operate <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Worldwide
              </span>
            </h1>
          </>
        }
      >
        <video
          src="https://github.blog/wp-content/uploads/2020/12/graceful-degredation.h264.mp4#t=0.001"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          autoPlay
          loop
          muted
          playsInline
        />
      </ContainerScroll>
    </div>
  );
}
