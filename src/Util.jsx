import { useEffect } from 'react';
import { useLocation  } from 'react-router';

export function ScrollToTop({children}) {
  const location = useLocation()
  useEffect(() => {
  	window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [location])

  return <>{children}</>;
}