import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { UPDATE_TOUR } from "../../../../../queries";

interface ITour {
  readonly id: string;
  name: string;
  decs: string;
  image: string;
  quantity: number;
}

export default function UpdateTour({ tour, setUpdating }: { tour: ITour; setUpdating: Function }) {
  const [updateTour, { error, data }] = useMutation(UPDATE_TOUR);
  const [update, setUpdate] = useState({
    id: tour.id,
    name: tour.name,
    decs: tour.decs,
    image: tour.image,
    quantity: tour.quantity,
  });
  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error));
    }
    if (data) {
      alert(JSON.stringify(data));
    }
  }, [data, error]);

  const handleChange = (option: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdate({ ...update, [option]: e.target.value });
  };

  const handleUpdate = (e: React.MouseEvent<HTMLTableCellElement>) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to update")) {
      const { id, ...data } = update;
      updateTour({
        variables: {
          updateTourId: update.id,
          tour: {
            data,
          },
        },
      });
      setUpdating(false);
    }
  };
  return (
    <>
      <td style={{ cursor: "pointer" }} onClick={handleUpdate}>
        Update
      </td>
      <td>
        <input onChange={handleChange("id")} value={update.id} type="text" />
      </td>
      <td>
        <input onChange={handleChange("name")} value={update.name} type="text" />
      </td>
      <td>
        <input onChange={handleChange("decs")} value={update.decs} type="text" />
      </td>
      <td>
        <input onChange={handleChange("image")} value={update.image} type="text" />
      </td>
      <td>
        <input onChange={handleChange("quantity")} value={update.quantity} type="number" />
      </td>
    </>
  );
}
