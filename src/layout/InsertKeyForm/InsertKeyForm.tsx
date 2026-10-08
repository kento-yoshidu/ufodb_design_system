import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
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
        <h3 className={styles.formTitle}>キーの挿入</h3>

        <p>任意の文字列を入力しInsertしてください。右側に新たなキーが表示されます。既に存在しているキーを入力してInsertした場合は変化はありません。</p>

        <div className={styles.row}>
          <Input
            value={key}
            onChange={setKey}
            placeholder="Enter a key..."
          />

          <Button
            text="insert"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
