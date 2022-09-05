import OrderItem from "./OrderItem";
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
export default function OrderTable({ orders }: { orders: IOrder[] }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Delete</th>
          <th>Id</th>
          <th>Account</th>
          <th>Tour</th>
        </tr>
        {orders?.map((order: IOrder, index: number) => {
          return (
            <tr key={index}>
              <OrderItem order={order} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
