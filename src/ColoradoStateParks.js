import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import { trees, wildlife, elevation} from "./parks/RockyMountain.js"
import * as RockyFunctions from "./parks/RockyMountain.js"
function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
   console.log(RockyFunctions.trees);
   RockyFunctions.wildlife()
   RockyFunctions.elevation()

  return (
    <div>
      <MesaVerde />
  <h1>Colorado State Parks!</h1>
  </div>
  )
}

export default ColoradoStateParks