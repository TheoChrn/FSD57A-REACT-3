"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
type ClientPortalInterface = {
  children: React.ReactNode;
  selector: string;
};

export const Portal = ({ children, selector }: ClientPortalInterface) => {
  const ref = useRef<Element | null>(null);
  const [client, setIsClient] = useState(false);
  console.log(selector);
  console.log(ref.current);
  useEffect(() => {
    setIsClient(true);
    ref.current = document.getElementById(selector);
  }, [selector]);
  return ref.current ? createPortal(children, ref.current) : null;
};
