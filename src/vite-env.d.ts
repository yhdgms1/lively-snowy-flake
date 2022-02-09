/// <reference types="vite/client" />

declare module '*.xht' {
  export default function (): {
    $dom: HTMLElement;
  };
}