import React from 'react';
import { TIcon } from '../../types/TIcon';

export default function SvgComponent(props: TIcon) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
      <circle cx="416" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
      <circle cx="96" cy="256" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
    </svg>
  );
}
