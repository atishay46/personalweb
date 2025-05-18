import { useCallback } from 'react'
import Spline from '@splinetool/react-spline'
import './App.css'

function App() {
  const onLoad = useCallback((splineApp: any) => {
    // You can access the Spline scene here if needed
    console.log('Spline scene loaded')
  }, [])

  const onMouseDown = useCallback((e: any) => {
    if (e.target.name) {
      console.log('Clicked on object:', e.target.name)
      // Add your custom event handling here
    }
  }, [])

  return (
    <div className="App">
      <Spline
        scene="https://prod.spline.design/aQiimP0gzGY3cfho/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
      />
    </div>
  )
}

export default App
