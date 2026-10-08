import type { ReactNode } from "react";
type Props = {
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
    title?: string;
    logo?: ReactNode;
};
export default function Header({ isSidebarOpen, onToggleSidebar, title, logo, }: Props): import("react").JSX.Element;
export {};
