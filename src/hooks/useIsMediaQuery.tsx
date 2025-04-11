"use client";

import { useEffect, useState } from "react";

const useIsMediaQuery = (screenSize: number) => {
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const watcher = new ResizeObserver(() => {
      if (innerWidth <= screenSize) {
        if (!reached) setReached(true);
      } else {
        if (reached) setReached(false);
      }
    });

    watcher.observe(document.body);

    return () => {
      watcher.observe(document.body);
    };
  }, [reached]);

  return reached;
};

export default useIsMediaQuery;
