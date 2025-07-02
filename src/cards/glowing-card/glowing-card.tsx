import { HomeIcon } from 'lucide-react';
import { MouseEvent, useEffect, useState } from 'react';

interface GlowingCardProps {
  /**
   * The top gradient color of the card
   */
  bgGradientStart?: string;
  /**
   * The bottom gradient color of the card
   */
  bgGradientEnd?: number;
  /**
   * The top shadow color of the card
   */
  innerShadow1Color?: string;
  /**
   * The second shadow color of the card
   */
  innerShadow2Color?: string;
  /**
   * The third shadow color of the card
   */
  innerShadow3Color?: string;
  /**
   * The fourth shadow color of the card
   */
  innerShadow4Color?: string;
}

export function GlowingCard(props: GlowingCardProps) {
  const {
    bgGradientStart = '#0A0909',
    bgGradientEnd = '#09101F',
    innerShadow1Color = '#144CCDFF',
    innerShadow2Color = '#6694FF88',
    innerShadow3Color = '#FFFFFFBB',
    innerShadow4Color = '#2365FF25',
  } = props;

  return (
    <div
      className="h-60 w-72 rounded-3xl overflow-hidden p-5"
      style={{
        background: `linear-gradient(180deg, ${bgGradientStart} 0%, ${bgGradientEnd} 100%)`,
        boxShadow: [
          createBoxShadowString(true, 0, -15, 20, -10, innerShadow3Color),
          createBoxShadowString(true, 0, -80, 60, -50, innerShadow1Color),
          createBoxShadowString(true, 0, -30, 30, -5, innerShadow2Color),
          createBoxShadowString(true, 0, 10, 6, -2, innerShadow4Color),
        ].join(', '),
      }}
    >
      Asd
    </div>
  );
}

function createBoxShadowString(
  isInset: boolean,
  offsetX: number,
  offsetY: number,
  blurRadius: number,
  spreadRadius: number,
  color: string
): string {
  return `${isInset ? 'inset ' : ''}${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
}
