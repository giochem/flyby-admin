import { useQuery } from "@apollo/client";
import QueryResult from "../../components/QueryResult";
import { TOURS } from "../../queries";
import CreateTour from "./CreateTour";
import TourTable from "./TourTable";

export default function Tour() {
  const { loading, error, data } = useQuery(TOURS);
  return (
    <div className="Tour">
      <QueryResult data={data} loading={loading} error={error}>
        <TourTable tours={data?.tours} />
      </QueryResult>
      <CreateTour />
    </div>
  );
}
