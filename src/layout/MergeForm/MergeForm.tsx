import { useState } from "react";
import Button from "../UI/Button";
import ComboBox from "../../_components/ComboBox";
import styles from "./mergeForm.module.css";

type Props = {
  onSubmit: (keyA: string, keyB: string) => void;
  options: string[][];
};

export default function MergeForm({
  onSubmit,
  options,
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
        <h3 className={styles.formTitle}>マージ</h3>

        <p>キーのうち、任意のものを2つ入力しMergeしてください。一つのグループに統合されます。</p>
        <p>存在しないキーを入力した場合、キーを新たに作成したうえで統合されます</p>

        <div className={styles.row}>
          <ComboBox
            value={keyA}
            onChange={setKeyA}
            placeholder="Enter a key..."
            options={options}
          />

          <ComboBox
            value={keyB}
            onChange={setKeyB}
            placeholder="Enter a key..."
            options={options}
          />

          <Button
            text="Merge"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
