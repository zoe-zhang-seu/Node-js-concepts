// io-example.js
const fs = require('fs');
const http = require('http');

console.log('启动 HTTP 服务器并立即发起文件读取');

// 异步读文件 —— 宏任务
fs.readFile('./config.json', 'utf8', (err, data) => {
  if (err) return console.error('文件读取出错:', err);
  console.log('📄 config.json 内容：', data);
});

// 创建简单 HTTP 服务器 —— I/O 回调同样也是宏任务
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('你好，世界！');
}).listen(3000, () => {
  console.log('🌐 Server listening on http://localhost:3000');
});

console.log('脚本末尾，同步代码执行完毕');
