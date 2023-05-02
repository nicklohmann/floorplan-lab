import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";
import '../App.css'
function Floorplan(props) {
  return (
    <div>
      <Bedroom bedNum={1} />
      <Kitchen />
      <LivingRoom />
      <Bath size={"Full"}/>
      <Bedroom bedNum={2}/>
      <Bath size={"Half"}/>
      <Bedroom bedNum={3} />
    </div>
  );
}

// Must export the component's function (or class)
export default Floorplan;