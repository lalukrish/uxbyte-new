"use client";

import { useEffect, useState } from "react";
import TestComponent from "../test-component";
// import TestComponent from "./test-component";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // match your animation time

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <TestComponent />;

  return children;
}
