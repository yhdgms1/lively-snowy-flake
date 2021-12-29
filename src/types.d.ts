declare global {
  interface Window {
    livelyPropertyListener: (name: string, value: string | number) => void;
  }
}

export {};
