type Props = {
    text: string;
    type?: "submit" | "button";
    onClick?: () => void;
};
export default function Button({ text, type, onClick, }: Props): import("react").JSX.Element;
export {};
