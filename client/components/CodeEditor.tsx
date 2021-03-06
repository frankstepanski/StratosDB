import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/theme/blackboard.css';

// initial Code Editor State types
interface CodeEditorState {
  schemaEntry: string;
  data: object;
  schemaName: string;
  schemaChange: any;
  schemaSubmit: any;
  injectedCode: string;
  emptyInject: any;
}

// Functional component, Code Editor
const CodeEditor: React.FC<CodeEditorState> = (props: CodeEditorState) => {
  // Codemirror module configuration options
  const options = {
    lineNumbers: true, // DIV "CODEMIRROR-GUTTERS CODEMIRROR-LINENUMBERS"
    mode: 'sql',
    theme: 'blackboard',
    lineWrapping: true,
    scrollbarStyle: 'null',
    viewportMargin: Infinity,
    tabSize: 2,
  };

  // check if injectedCode in state is not empty
  // if user imports file, injectedCode will not be empty
  const injectCheck = () => {
    if (props.injectedCode) {
      return (
        <div className='code-mirror-container'>
          <CodeMirror
            value={props.injectedCode}
            onChange={(e) => props.schemaChange(e)}
            options={options}
          />
        </div>
      );
    } else {
      return (
        <div className='code-mirror-container'>
          <CodeMirror
            onChange={(e) => props.schemaChange(e)}
            options={options}
          />
        </div>
      );
    }
  };

  return (
    <div id='code-editor'>
      {injectCheck()}
      <div id='buttons-section'>
        <svg
          id='cancel-button'
          onClick={props.emptyInject}
          xmlns='http://www.w3.org/2000/svg'
          width='75'
          height='75'
          viewBox='0 0 24 24'
        >
          <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z' />
        </svg>
        <svg
          id='submit-button'
          onClick={props.schemaSubmit}
          xmlns='http://www.w3.org/2000/svg'
          width='75'
          height='75'
          viewBox='0 0 24 24'
        >
          <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z' />
        </svg>
      </div>
    </div>
  );
};

export default CodeEditor;
