import TourItem from "./TourItem";

interface ITour {
  id: string;
  name: string;
  decs: string;
  image: string;
  quantity: number;
}

export default function TourTable({ tours }: { tours: ITour[] }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Delete</th>
          <th>Edit</th>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Quantity</th>
        </tr>
        {tours?.map((tour: ITour, index: number) => {
          return (
            <tr key={index}>
              <TourItem tour={tour} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
