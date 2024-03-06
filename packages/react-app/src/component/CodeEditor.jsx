// import { Controlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/mode/htmlmixed/htmlmixed'; // 根据需要加载CodeMirror的模式

const CodeEditor = ({ code, setCode }) => {
  return (
    // <CodeMirror
    //   value={code}
    //   options={{
    //     mode: 'htmlmixed',
    //     theme: 'material',
    //     lineNumbers: true,
    //   }}
    //   onBeforeChange={(editor, data, value) => {
    //     setCode(value);
    //   }}
    // />
    <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter JavaScript code here..."
      />
  );
};

export default CodeEditor;