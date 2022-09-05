import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { LOGIN } from "../../queries";
import "./Login.scss";
interface IForm {
  email: string;
  password: string;
}
export default function Login() {
  const [login, { loading, error, data }] = useMutation(LOGIN);
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });
  const [notify, setNotify] = useState("");
  const handleChange = (option: string) => (e: any) => {
    setForm({ ...form, [option]: e.target.value });
  };
  useEffect(() => {
    if (loading) {
      setNotify("loading");
    }
    if (error) {
      console.log(JSON.stringify(error));
      setNotify(error.message);
    }
    if (data) {
      localStorage.setItem("token", data.login.token);
      setNotify("Login successful");
    }
  }, [loading, error, data]);
  const handleLogin = (e: any) => {
    e.preventDefault();
    login({ variables: { account: form } });
  };
  return (
    <div className="Login">
      <div>{notify}</div>
      <form onSubmit={handleLogin}>
        <input value={form.email} onChange={handleChange("email")} type="text" placeholder="username" />
        <input value={form.password} onChange={handleChange("password")} type="text" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
