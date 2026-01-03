import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FaCompressAlt, FaExpandAlt } from "react-icons/fa";

type EditorProps = {
  language: string;
  displayName: string;
  value: string;
  onChange: any;
};

const Editor = (props: EditorProps) => {
  const [open, setOpen] = useState(true);
  const { language, displayName, value, onChange } = props;
  /**
   * calls the onChange prop with the updated value, which will update the value of the ControlledEditor and trigger a re-render.
   * @param editor CodeMirror instance
   * @param data object that contains information about the change that was made to the editor's content
   * @param value new value of the editor's content after the change has been made
   */
  const handleChange = (editor: any, data: any, value: string) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaCompressAlt /> : <FaExpandAlt />}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
