import React from 'react';
import { TIcon } from '../../types/TIcon';

export default function SvgComponent(props: TIcon) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" />
    </svg>
  );
}