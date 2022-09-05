export default function Inputs({
  values = [],
  handleChange,
  name,
}: {
  values: string[];
  handleChange: any;
  name: string;
}) {
  return (
    <>
      {values.map((value: string) => (
        <div key={value}>
          <input type="checkbox" value={value} onChange={handleChange(name)} />
          {value}
        </div>
      ))}
    </>
  );
}
