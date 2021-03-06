import React from 'react';
import { TIcon } from '@/types/TIcon';

export default function SvgComponent(props: TIcon) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" />
    </svg>
  );
}
