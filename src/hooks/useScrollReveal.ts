import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}
