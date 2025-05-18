import { useCallback, useState } from 'react'
import Spline from '@splinetool/react-spline'
import './App.css'

function App() {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  const onLoad = useCallback(() => {
    // Scene loaded successfully
  }, [])

  const onMouseDown = useCallback((e: any) => {
    if (e.target.name) {
      setSelectedObject(e.target.name);
      
      // Add hover effect by scaling the object
      e.target.scale.x *= 1.1;
      e.target.scale.y *= 1.1;
      e.target.scale.z *= 1.1;

      // Reset scale after animation
      setTimeout(() => {
        e.target.scale.x /= 1.1;
        e.target.scale.y /= 1.1;
        e.target.scale.z /= 1.1;
      }, 200);
    }
  }, [])

  const onMouseHover = useCallback((e: any) => {
    if (e.target.name) {
      // Add subtle hover effect
      e.target.material.emissive = '#ffffff';
      e.target.material.emissiveIntensity = 0.2;
    }
  }, [])

  const onMouseLeave = useCallback((e: any) => {
    if (e.target.name) {
      // Reset hover effect
      e.target.material.emissive = '#000000';
      e.target.material.emissiveIntensity = 0;
    }
  }, [])

  return (
    <div className="App">
      <Spline
        scene="https://prod.spline.design/aQiimP0gzGY3cfho/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        onMouseHover={onMouseHover}
        onMouseLeave={onMouseLeave}
      />
    </div>
  )
}

export default App
