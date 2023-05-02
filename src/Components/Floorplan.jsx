import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";
import '../App.css'
function Floorplan(props) {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom />
      <Bedroom />
      <Bedroom />
      <Bath />
      <Bath />
    </div>
  );
}

// Must export the component's function (or class)
export default Floorplan;