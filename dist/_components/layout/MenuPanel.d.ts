import type { ReactNode } from "react";
export type Action = "insert" | "merge" | "same";
export type Mode = "row" | "graph";
type Props = {
    active: Action | null;
    onSelect: (action: Action | null) => void;
    mode: Mode;
    onChangeMode: (mode: Mode) => void;
    children?: ReactNode;
};
export default function MenuPanel({ active, onSelect, mode, onChangeMode, children, }: Props): import("react").JSX.Element;
export {};
