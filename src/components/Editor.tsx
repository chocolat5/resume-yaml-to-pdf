import { yaml } from "@codemirror/lang-yaml";
import CodeMirror from "@uiw/react-codemirror";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Editor = ({ value, onChange }: Props) => {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      extensions={[yaml()]}
      height="100%"
    />
  );
};
