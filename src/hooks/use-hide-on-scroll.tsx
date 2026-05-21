import { useEffect, useState } from 'react';

export function useHideOnScroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Jika scroll lebih dari 50px dari top, baru aktifkan hide behavior
      if (currentScrollY > 50) {
        // Scroll ke bawah
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        }
        // Scroll ke atas
        else {
          setIsVisible(true);
        }
      } else {
        // Di bagian atas, selalu tampilkan
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
}
