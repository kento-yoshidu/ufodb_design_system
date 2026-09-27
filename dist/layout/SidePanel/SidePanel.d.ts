import type { Dispatch, SetStateAction } from "react";
type Props = {
    isOpen: boolean;
    keyValue: string;
    setKey: Dispatch<SetStateAction<string>>;
    keyA: string;
    setKeyA: Dispatch<SetStateAction<string>>;
    keyB: string;
    setKeyB: Dispatch<SetStateAction<string>>;
    insert: () => void;
    handleMerge: () => void;
};
export default function SidePanel({ isOpen, keyValue, setKey, keyA, setKeyA, keyB, setKeyB, insert, handleMerge, }: Props): import("react").JSX.Element;
export {};
