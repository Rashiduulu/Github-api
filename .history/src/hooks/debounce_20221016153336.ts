import { useEffect } from 'react';
import { useState } from 'react';
export function useDebounce(value: string, delay = 300) {
    const [debounced, setDebounced] = useState(value)
    useEffect(() => {
      const handler = setTimeout(() => setDebounced(value), delay);
    });
}

