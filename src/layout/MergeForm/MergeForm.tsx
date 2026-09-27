import { useState } from "react";
import styles from "./mergeForm.module.css";

type Props = {
  onSubmit: (keyA: string, keyB: string) => void;
};

export default function MergeForm({
  onSubmit,
}: Props) {
  const [keyA, setKeyA] = useState("");
  const [keyB, setKeyB] = useState("");

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(keyA, keyB);
        }}
      >
        <input
          value={keyA}
          onChange={(e) => setKeyA(e.currentTarget.value)}
          placeholder="Enter a key..."
        />

        <input
          value={keyB}
          onChange={(e) => setKeyB(e.currentTarget.value)}
          placeholder="Enter a key..."
        />

        <button type="submit">Merge</button>
      </form>
    </div>
  );
}
