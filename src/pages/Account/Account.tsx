import { useQuery } from "@apollo/client";
import QueryResult from "../../components/QueryResult";
import { ACCOUNTS } from "../../queries";
import "./Account.scss";
import AccountTable from "./AccountTable";
import CustomAccount from "./CustomAccount";

export default function Account() {
  const { data, loading, error } = useQuery(ACCOUNTS, {
    variables: { roles: ["tourist", "admin"] },
  });
  return (
    <div className="Account">
      <QueryResult data={data} loading={loading} error={error}>
        <AccountTable accounts={data?.accounts} />
      </QueryResult>
      <CustomAccount />
    </div>
  );
}
