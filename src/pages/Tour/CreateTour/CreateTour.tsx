import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_TOUR } from "../../../queries";

interface IInputTour {
  name: string;
  decs: string;
  image: string;
  quantity: string;
}

export default function CreateTour() {
  const [createTour, { error, data }] = useMutation(CREATE_TOUR);
  const [newTour, setNewTour] = useState<IInputTour>({
    name: "",
    decs: "",
    image: "",
    quantity: "",
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
    setNewTour({ ...newTour, [option]: e.target.value });
  };
  const handleCreateTour = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to create")) {
      const { quantity } = newTour;
      createTour({
        variables: {
          tour: {
            ...newTour,
            quantity: +quantity,
          },
        },
      });
    }
  };
  return (
    <form onSubmit={handleCreateTour}>
      <h2>Create Tour</h2>
      <input placeholder="Name" value={newTour.name} onChange={handleChange("name")} type="text" />
      <input placeholder="Decs" value={newTour.decs} onChange={handleChange("decs")} type="text" />
      <input placeholder="Image" value={newTour.image} onChange={handleChange("image")} type="text" />
      <input placeholder="Quantity" value={newTour.quantity} onChange={handleChange("quantity")} type="number" />
      <button>Submit</button>
    </form>
  );
}
