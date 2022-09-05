import AccountItem from "./AccountItem";

interface IAccount {
  id: string;
  email: string;
  phone: number;
  roles: string;
  permissions: string;
}

export default function AccountTable({ accounts }: { accounts: IAccount[] }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Delete</th>
          <th>Edit</th>
          <th>Id</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Roles</th>
          <th>Permissions</th>
        </tr>
        {accounts?.map((account: IAccount, index: number) => {
          return (
            <tr key={index}>
              <AccountItem account={account} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
