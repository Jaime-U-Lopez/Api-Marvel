import BestCharacters from "../components/BestCharacters";
import useFetch from "../components/Api_Hook/UseFetch";
import ListSeries from "../components/ListSeries/ListSeries";
import ListLastSeries from "../components/ListLastSeries";

export default function Series(props) {
  return (
    <div>
      <BestCharacters />
      <ListLastSeries />
    </div>
  );
}
