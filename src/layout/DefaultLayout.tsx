import Header from "./components/Header";
export default function DefaultLayout({ children }: any) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
