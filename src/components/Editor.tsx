import { yaml } from "@codemirror/lang-yaml";
import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";

const editorTheme = EditorView.theme({
  "&": {
    color: "var(--c-text-sub)",
    fontSize: "var(--fs-sm)",
  },
  ".cm-content": {
    padding: "var(--sp-md) 0",
  },
  ".cm-line": {
    padding: "0 var(--sp-md) 0 var(--sp-sm)",
  },
  ".cm-gutters": {
    border: "none",
    backgroundColor: "var(--c-bg-alt)",
    color: "var(--c-text-lighter)",
  },
  ".cm-lineNumbers .cm-gutterElement": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 var(--sp-xs) 0 var(--sp-md)",
    fontSize: "var(--fs-xs)",
  },
});

const yamlHighlightStyle = HighlightStyle.define([
  {
    tag: tags.definition(tags.propertyName),
    color: "var(--c-link)",
    fontWeight: "600",
  },
  {
    tag: [tags.separator, tags.special(tags.string), tags.lineComment],
    color: "var(--c-text-light)",
  },
]);

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Editor = ({ value, onChange }: Props) => {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      extensions={[
        EditorView.lineWrapping,
        yaml(),
        editorTheme,
        syntaxHighlighting(yamlHighlightStyle),
      ]}
      height="100%"
    />
  );
};
