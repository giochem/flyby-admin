import { useState } from "react";
import DeleteTour from "./DeleteTour";
import UpdateTour from "./UpdateTour";

interface ITour {
  id: string;
  name: string;
  decs: string;
  image: string;
  quantity: number;
}

export default function TourItem({ tour }: { tour: ITour }) {
  const [updating, setUpdating] = useState<boolean>(false);

  return (
    <>
      <DeleteTour id={tour.id} />
      {!updating ? (
        <>
          <td onClick={() => setUpdating(!updating)} style={{ cursor: "pointer" }}>
            Edit
          </td>
          <td>{tour.id}</td>
          <td>{tour.name}</td>
          <td>{tour.decs}</td>
          <td>
            <a href={tour.image} target="_blank" rel="noreferrer">
              Link
            </a>
          </td>
          <td>{tour.quantity}</td>
        </>
      ) : (
        <UpdateTour tour={tour} setUpdating={setUpdating} />
      )}
    </>
  );
}
