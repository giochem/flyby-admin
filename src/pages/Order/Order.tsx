import { useQuery } from "@apollo/client";
import QueryResult from "../../components/QueryResult";
import { ORDERS } from "../../queries/orders";
import OrderTable from "./OrderTable";
export default function Order() {
  const { loading, error, data } = useQuery(ORDERS);

  return (
    <div className="Order">
      <QueryResult data={data} loading={loading} error={error}>
        <OrderTable orders={data?.orders} />
      </QueryResult>
    </div>
  );
}
