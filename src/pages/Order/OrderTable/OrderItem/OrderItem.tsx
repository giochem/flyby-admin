import Delete from "./Delete";
interface IOrder {
  id: string;
  account: {
    id: string;
    email: string;
    phone: number;
    roles: string[];
    permissions: string[];
  };
  tour: {
    id: string;
    name: string;
    decs: string;
    image: string;
    quantity: number;
  };
}

export default function OrderItem({ order }: { order: IOrder }) {
  return (
    <>
      <Delete id={order?.id} />
      <td>{order?.id}</td>
      <td>{order?.account?.email}</td>
      <td>{order?.tour?.name}</td>
    </>
  );
}
