import { Callback } from "./Callback"
import { Memohook } from "./Memohook"
import { Reducerhook } from "./Reducerhook"
function App(){

  return(
    <>
    <h1 style={{textAlign:"center"}}> Hooks</h1>
    {/* <Memohook/>
    <Reducerhook/> */}
    <div className="left_margin">

    <h2>Callback hook</h2>
    <Callback/>
    </div>
    </>
  )
}
export default App