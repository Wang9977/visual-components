import  { useState } from 'react';
import CodeEditor from './component/CodeEditor'; // 我们将要创建的代码编辑器组件
import Preview from './component/Preview'; // 我们将要创建的预览组件

const ContainerComponent = () => {
  const [code, setCode] = useState('<h1>Hello, World!</h1>');

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '10px' }}>
        <CodeEditor code={code} setCode={setCode} />
      </div>
      <div style={{ flex: 1 }}>
        <Preview code={code} />
      </div>
    </div>
  );
};

export default ContainerComponent;
