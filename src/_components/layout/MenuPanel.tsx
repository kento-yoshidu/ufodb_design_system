import { Fragment, type ReactNode } from "react";
import styles from "./menuPanel.module.css";

export type Action = "insert" | "merge" | "same" | "size" | "unmerge" | "delete";
export type Mode = "row" | "graph";

type Props = {
  active: Action | null;
  onSelect: (action: Action | null) => void;
  mode: Mode;
  onChangeMode: (mode: Mode) => void;
  children?: ReactNode;
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// 対になる操作（足す・取り消す）を同じグループに並べる。グループの間には区切り線を入れる
const actionGroups: { id: Action; icon: ReactNode; label: string }[][] = [
  [
    {
      id: "insert",
      icon: <Icon><path d="M12 5v14M5 12h14" /></Icon>,
      label: "Insert",
    },
    {
      id: "delete",
      icon: <Icon><path d="M5 12h14" /></Icon>,
      label: "Delete",
    },
  ],
  [
    {
      id: "merge",
      icon: <Icon><path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" /></Icon>,
      label: "Merge",
    },
    {
      id: "unmerge",
      icon: <Icon><path d="M9 17H7A5 5 0 0 1 7 7M15 7h2a5 5 0 0 1 4 8M8 12h4M2 2l20 20" /></Icon>,
      label: "Unmerge",
    },
  ],
  [
    {
      id: "same",
      icon: <Icon><path d="M5 9h14M5 15h14" /></Icon>,
      label: "Same",
    },
    {
      id: "size",
      icon: <Icon><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" /></Icon>,
      label: "Size",
    },
  ],
];

const modes: Mode[] = ["row", "graph"];

export default function MenuPanel({
  active,
  onSelect,
  mode,
  onChangeMode,
  children,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.menu}>
        {actionGroups.map((group, i) => (
          <Fragment key={group[0].id}>
            {i > 0 && <hr className={styles.divider} />}

            <ul className={styles.actions}>
              {group.map((action) => (
                <li key={action.id}>
                  <button
                    type="button"
                    className={`${styles.item} ${active === action.id ? styles.active : ""}`}
                    aria-pressed={active === action.id}
                    onClick={() => onSelect(active === action.id ? null : action.id)}
                  >
                    <span className={styles.icon}>{action.icon}</span>
                    {action.label}
                  </button>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}

        <hr className={styles.divider} />

        <div
          className={styles.toggle}
          role="group"
          aria-label="表示の切り替え"
        >
          {modes.map((m) => (
            <button
              key={m}
              type="button"
              className={`${styles.segment} ${mode === m ? styles.selected : ""}`}
              aria-pressed={mode === m}
              onClick={() => onChangeMode(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </nav>

      {active && (
        <section className={styles.popover}>
          <button
            type="button"
            className={styles.close}
            aria-label="閉じる"
            onClick={() => onSelect(null)}
          >
            ×
          </button>

          {children}
        </section>
      )}
    </div>
  );
}
