import { useId } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: string[][];
};

export default function ComboBox({
  value,
  onChange,
  placeholder,
  options,
}: Props) {
  const id = useId();

  const keys = options.flat().toSorted();

  return (
    <>
      <input
        list={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />

      <datalist id={id}>
        {keys.map((key) => (
          <option value={key} />
        ))}
      </datalist>
    </>
  );
}
