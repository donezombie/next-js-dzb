
import { useEffect } from 'react';

const useScrollProgressBar = () => {
  return useEffect(() => {
    const progressBar = document.getElementById("dzb-progress-bar");

    if (progressBar) {
      // initial progress bar
      progressBar.style.position = 'fixed';
      progressBar.style.top = 0;
      progressBar.style.width = '0%';
      progressBar.style.zIndex = 999;

      const scrollFunction = () => {
        const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollY = window.scrollY;
        if (scrollY === 0) {
          progressBar.style.height = '0px';
        } else {
          progressBar.style.height = '3px';
        }
        if (typeof maxHeight === "number") {
          progressBar.style.width = (scrollY / maxHeight) * 100 + "%";
        }
      };
      window.addEventListener("resize", scrollFunction);
      window.addEventListener("scroll", scrollFunction);
      return () => {
        window.removeEventListener("resize", scrollFunction);
        window.removeEventListener("scroll", scrollFunction);
        if (progressBar) {
          progressBar.style.width = '0px';
          progressBar.style.height = '0px';
        }
      }
    }
  }, []);
};

export default useScrollProgressBar;