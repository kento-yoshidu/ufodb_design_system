import { useState } from "react";
import styles from "./insertKeyForm.module.css";

type Props = {
  onSubmit: (key: string) => void;
};

export default function InsertKeyForm({
  onSubmit,
}: Props) {
  const [key, setKey] = useState("");

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(key);
        }}
      >
        <input
          value={key}
          onChange={(e) => setKey(e.currentTarget.value)}
          placeholder="Enter a key..."
        />

        <button type="submit">Insert</button>
        </form>
    </div>
  );
}
