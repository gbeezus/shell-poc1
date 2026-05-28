import { useEffect, useState } from 'react';

function useMobileHeader(): boolean {
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    handleChange(mediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return mobile;
}

export default useMobileHeader;
