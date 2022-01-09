import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json";
export default function StatisticsApp() {
  return <Statistics title={"Upload stats"} stats={data} />;
}
