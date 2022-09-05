import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CUSTOM_ACCOUNT } from "../../../queries";
import "./CustomAccount.scss";
import Inputs from "./Inputs";

interface IInputAccount {
  email: string;
  password: string;
  phone: string;
  roles: [];
  permissions: [];
}

export default function CustomAccount() {
  const [customAccount, { error, data }] = useMutation(CUSTOM_ACCOUNT);
  const [form, setForm] = useState<IInputAccount>({
    email: "",
    password: "",
    phone: "",
    roles: [],
    permissions: [],
  });
  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error));
    }
    if (data) {
      alert(JSON.stringify(data));
    }
  }, [data, error]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const configForm = { ...form, phone: +form.phone };
    customAccount({ variables: { account: configForm } });
  };
  const handleChange = (option: string) => (e: any) => {
    const { value, checked } = e.target;
    if (option === "roles" || option === "permissions") {
      if (checked) {
        setForm({
          ...form,
          [option]: [...form[option], value],
        });
      } else {
        setForm({
          ...form,
          [option]: form[option]?.filter((e) => e !== value),
        });
      }
    } else {
      setForm({
        ...form,
        [option]: value,
      });
    }
  };
  return (
    <form className="CustomAccount" onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={handleChange("email")} value={form.email} type="text" />
      <input placeholder="Password" onChange={handleChange("password")} value={form.password} type="text" />
      <input placeholder="Phone" onChange={handleChange("phone")} value={form.phone} type="number" />
      <p>Roles</p>
      <Inputs values={["admin", "marketer", "tourist"]} handleChange={handleChange} name="roles" />
      <p>Permissions:</p>
      <Inputs
        values={[
          "read:any",
          "create:any",
          "update:any",
          "delete:any",
          // tourist
          "read:own_account",
          "create:own_order",
          "update:own_account",
          "delete:own_order",
        ]}
        handleChange={handleChange}
        name="permissions"
      />
      <button>Submit</button>
    </form>
  );
}
