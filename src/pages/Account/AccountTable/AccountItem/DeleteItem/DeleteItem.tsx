import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { DELETE_ACCOUNT } from "../../../../../queries";

export default function DeleteItem({ id }: { id: string }) {
  const [deleteAccount, { error, data }] = useMutation(DELETE_ACCOUNT);
  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error));
    }
    if (data) {
      alert(JSON.stringify(data));
    }
  }, [data, error]);
  const handleDeleteAccount = (e: any) => {
    e.preventDefault();
    if (window.confirm("Are you sure?")) {
      deleteAccount({ variables: { deleteAccountId: id } });
    }
  };
  return (
    <>
      <td onClick={handleDeleteAccount} style={{ cursor: "pointer" }}>
        Delete
      </td>
    </>
  );
}
