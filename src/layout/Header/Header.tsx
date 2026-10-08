import type { ReactNode } from "react";
import Logo from "../UI/Logo";
import styles from "./header.module.css";

type Props = {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  title?: string;
  logo?: ReactNode;
};

export default function Header({
  isSidebarOpen,
  onToggleSidebar,
  title = "UFDB GUI APP",
  logo = <Logo />,
}: Props) {
  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.menuButton}
        onClick={onToggleSidebar}
        aria-label="操作パネルの表示切り替え"
        aria-pressed={isSidebarOpen}
      >
        ☰
      </button>

      {logo}

      <h1 className={styles.title}>{title}</h1>
    </header>
  );
}
