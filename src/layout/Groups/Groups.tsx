import type { CSSProperties } from "react";
import { groupColor } from "../../util/groupColor";
import styles from "./groups.module.css";

type Props = {
  groups: string[][];
};

export default function Groups({
  groups,
}: Props) {
  return (
    <div className={styles.groups}>
      {groups.map((group) => {
        const color = groupColor(group);

        return (
          <div
            key={group[0]}
            style={
              {
                "--group-color": color,
              } as CSSProperties
            }
            className={styles.group}
          >
            {group.map((node) => (
              <p
                key={node}
                className={styles.node}
              >
                {node}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
