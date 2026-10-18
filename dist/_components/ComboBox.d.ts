type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    options: string[][];
};
export default function ComboBox({ value, onChange, placeholder, options, }: Props): import("react").JSX.Element;
export {};
