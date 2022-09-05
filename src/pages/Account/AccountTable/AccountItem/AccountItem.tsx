import { useState } from "react";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";
interface IAccount {
  id: string;
  email: string;
  phone: number | string;
  roles: string;
  permissions: string;
}

export default function AccountItem({ account }: { account: IAccount }) {
  const [updating, setUpdating] = useState<boolean>(false);

  return (
    <>
      <DeleteItem id={account.id} />
      {!updating ? (
        <>
          <td
            style={{ cursor: "pointer" }}
            onClick={() => setUpdating(!updating)}
          >
            Edit
          </td>
          <td>{account.id}</td>
          <td>{account.email}</td>
          <td>{account.phone}</td>
          <td>{account.roles}</td>
          <td>{account.permissions}</td>
        </>
      ) : (
        <UpdateItem account={account} setUpdating={setUpdating} />
      )}
    </>
  );
}
