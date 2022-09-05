import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { UPDATE_ACCOUNT } from "../../../../../queries";

interface IUpdate {
  id: string;
  email: string;
  phone: number | string;
  roles: string;
  permissions: string;
}

export default function Update({ account, setUpdating }: { account: IUpdate; setUpdating: Function }) {
  const [updateAccount, { error, data }] = useMutation(UPDATE_ACCOUNT);
  const [newAccount, setNewAccount] = useState<IUpdate>({
    id: account.id,
    email: account.email,
    phone: account.phone,
    roles: account.roles,
    permissions: account.permissions,
  });
  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error));
    }
    if (data) {
      alert(JSON.stringify(data));
    }
  }, [data, error]);
  const update = (e: any) => {
    e.preventDefault();
    const { id, phone, ...change } = newAccount;
    if (window.confirm("Are you sure you want to update")) {
      updateAccount({
        variables: {
          updateAccountId: account.id,
          account: { phone: +phone, ...change },
        },
      });
      setUpdating(false);
    }
  };
  const handleChange = (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAccount({ ...newAccount, [option]: e.target.value });
  };
  return (
    <>
      <td style={{ cursor: "pointer" }} onClick={update}>
        Update
      </td>
      <td>
        <input onChange={handleChange("id")} value={account.id} type="text" disabled />
      </td>
      <td>
        <input onChange={handleChange("email")} value={newAccount.email} type="text" />
      </td>
      <td>
        <input onChange={handleChange("phone")} value={newAccount.phone} type="text" />
      </td>
      <td>
        <input onChange={handleChange("roles")} value={newAccount.roles} type="text" />
      </td>
      <td>
        <input onChange={handleChange("permissions")} value={newAccount.permissions} type="text" />
      </td>
    </>
  );
}
