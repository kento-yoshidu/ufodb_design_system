import { useState } from "react";
import styles from "./mergeForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

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
        <Input
          value={keyA}
          onChange={setKeyA}
          placeholder="Enter a key..."
        />

        <Input
          value={keyB}
          onChange={setKeyB}
          placeholder="Enter a key..."
        />

        <Button
          text="Merge"
          type="submit"
        />
      </form>
    </div>
  );
}
