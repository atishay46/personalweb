import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import './App.css';

function App() {
  const onLoad = useCallback(() => {
    console.log('Spline scene loaded');
  }, []);

  const onMouseDown = useCallback((e: any) => {
    if (e.target?.name) {
      console.log('Clicked on object:', e.target.name);
    }
  }, []);

  const onMouseOver = useCallback((e: any) => {
    if (e.target?.name) {
      console.log('Hovering over object:', e.target.name);
    }
  }, []);

  const onMouseLeave = useCallback((e: any) => {
    if (e.target?.name) {
      console.log('Mouse left object:', e.target.name);
    }
  }, []);

  return (
    <div className="App">
      <Spline
        scene="https://prod.spline.design/aQiimP0gzGY3cfho/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
}

export default App;
