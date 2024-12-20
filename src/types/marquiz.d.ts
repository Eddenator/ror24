interface Window {
  Marquiz?: {
    add: (config: [string, MarquizConfig]) => void;
  }
}

interface MarquizConfig {
  id: string;
  buttonText: string;
  bgColor: string;
  textColor: string;
  rounded: boolean;
  shadow: string;
  blicked: boolean;
}