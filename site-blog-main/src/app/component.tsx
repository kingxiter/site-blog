"use client";
import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error("Componente lançando um error");
  }, []);

  return <h2>ErrorComponent</h2>;
};
