import { Canvas } from "@react-three/fiber"
import {Environment, Center, Backdrop} from "@react-three/drei"
import CameraRig from "./CameraRig"
import Shirt from "./Shirt"

const CanvasModel = () => {
  return (
  <Canvas>
    <ambientLight intensity={0.5} />
    <Environment preset="city"/>
    <CameraRig>
    {/* <Backdrop/> */}
    <Center>
      <Shirt/>
    </Center>
    </CameraRig>
  </Canvas>
  )
}

export default CanvasModel
