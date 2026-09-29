import styles from "./groups.module.css";

type Props = {
  groups: string[][];
};

export default function Groups({
  groups,
}: Props) {
  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <div
          key={group[0]}
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
      ))}
    </div>
  );
}
