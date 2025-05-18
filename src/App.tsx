import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import type { SplineEvent } from '@splinetool/react-spline';
import './App.css';

function App() {
  const onLoad = useCallback((splineApp: any) => {
    console.log('Spline scene loaded');
  }, []);

  const onMouseDown = useCallback((e: any) => {
    if (e.target?.name) {
      console.log('Clicked on object:', e.target.name);
    }
  }, []);

  return (
    <div className="App">
      <Spline
        scene="https://prod.spline.design/aQiimP0gzGY3cfho/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
      />
    </div>
  );
}

export default App;
