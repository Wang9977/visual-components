// sandbox.js
self.addEventListener('message', event => {
  // 这里是沙箱中的代码
  console.log('Running code from the Web Worker:', event.data);
  const result = eval(event.data); // 注意：在实际应用中，不要直接使用eval，这里仅作为示例
  postMessage(result);
});