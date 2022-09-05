import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { DELETE_ORDER } from "../../../../../queries";

export default function Delete({ id }: { id: string }) {
  const [deleteOrder, { error, data }] = useMutation(DELETE_ORDER);
  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error));
    }
    if (data) {
      alert(JSON.stringify(data));
    }
  }, [data, error]);
  const handleDeleteOrder = (e: any) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete")) {
      deleteOrder({ variables: { deleteOrderId: id } });
    }
  };
  return (
    <td onClick={handleDeleteOrder} style={{ cursor: "pointer" }}>
      Delete
    </td>
  );
}
