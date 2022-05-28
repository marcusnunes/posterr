import React from 'react';

export default function SvgComponent(props: any) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" />
    </svg>
  );
}
