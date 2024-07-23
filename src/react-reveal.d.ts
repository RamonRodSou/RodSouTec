declare module 'react-reveal/Fade' {
    import { ComponentType, CSSProperties } from 'react';
  
    interface FadeProps {
      left?: boolean;
      right?: boolean;
      top?: boolean;
      bottom?: boolean;
      opposite?: boolean;
      duration?: number;
      distance?: string;
      count?: number;
      forever?: boolean;
      delay?: number;
      cascade?: boolean;
      damping?: number;
      when?: boolean;
      spy?: any;
      style?: CSSProperties;
      children?: React.ReactNode;
    }
  
    const Fade: ComponentType<FadeProps>;
  
    export default Fade;
  }
  