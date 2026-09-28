import { useState } from "react";
import styles from "./insertKeyForm.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

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
        <Input
          value={key}
          onChange={setKey}
          placeholder="Enter a key..."
        />

        <Button
          text="insert"
          type="submit"
        />
      </form>
    </div>
  );
}
