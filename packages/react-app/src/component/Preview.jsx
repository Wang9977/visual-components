// Preview.jsx
import { renderToStaticMarkup } from 'react-dom/server';
import  { transform } from '@babel/core' ;
// import presetReact from '@babel/preset-react'
const presetReact = require('@babel/preset-react');
const Preview = ({ code }) => {


  // const htmlContent = renderToStaticMarkup(<div dangerouslySetInnerHTML={{ __html: code }} />);


  // 注意：在实际应用中，你可能需要一个更安全的方法来渲染HTML，比如使用iframe或一个单独的Web Worker。
 // 将 JSX 转换为 JavaScript
 const jsCode = transform(code, { presets: [presetReact] }).code;

 // 创建包含脚本和根元素的 HTML
 const htmlContent = `
   <!DOCTYPE html>
   <html>
   <head>
     <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
     <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
     <script>
       ${jsCode}
     </script>
   </head>
   <body>
     <div id="root"></div>
   </body>
   </html>
 `;
  return (
    <div>
      <iframe
        title="preview"
        srcDoc={htmlContent}
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default Preview;