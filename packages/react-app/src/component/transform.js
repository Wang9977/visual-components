import { transform } from '@babel/core';
import presetReact from '@babel/preset-react';

const sourceCode = `
function App() {

  const chartRef = useRef(null)
  useEffect(() => {
    chartRef.current.setData(mock)
    console.log(111,chartRef.current.setData,mock);
  }, [])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <my-component ref={chartRef}></my-component>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
`;

const result = transform(sourceCode, {
  presets: [presetReact],
});

console.log(result.code); // 输出转换后的 JavaScript 代码