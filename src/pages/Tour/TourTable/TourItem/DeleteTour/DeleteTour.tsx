import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { DELETE_TOUR } from "../../../../../queries";

export default function DeleteTour({ id }: { id: string }) {
  const [deleteTour, { error, data }] = useMutation(DELETE_TOUR, { variables: { deleteTourId: id } });
  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error));
    }
    if (data) {
      alert(JSON.stringify(data));
    }
  });
  const handleDeleteTour = (e: React.MouseEvent<HTMLTableCellElement>) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete")) {
      deleteTour();
    }
  };
  return (
    <td onClick={handleDeleteTour} style={{ cursor: "pointer" }}>
      Delete
    </td>
  );
}
