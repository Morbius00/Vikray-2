declare module '@google/model-viewer' {
    interface ModelViewerProps {
      style: React.CSSProperties;
      alt: string;
      src: string;
      ar: boolean;
      arModes: string;
      arPlacement: string;
      cameraControls: boolean;
      poster: string;
      shadowIntensity: number;
      autoRotate: boolean;
    }
  
    class ModelViewer extends React.Component<ModelViewerProps, {}> {}
  }