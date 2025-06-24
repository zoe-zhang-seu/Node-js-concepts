// monitoring.js
import http from 'http';
import fs from 'fs';
import fetch from 'node-fetch'; // 需 `npm install node-fetch`

let config, status = {};

// 1. 启动时读取配置（宏任务）
fs.readFile('./monitor-config.json', 'utf8', (err, data) => {
  if (err) throw err;
  config = JSON.parse(data);
  console.log('✅ 配置加载完毕', config);
});

// 2. 心跳上报（宏任务）
const heartbeat = () => {
  fetch(config.endpoint, { method: 'POST', body: JSON.stringify({ status }) })
    .then(() => console.log('💓 心跳上报成功'))
    .catch(err   => console.error('💔 心跳上报失败', err));
};
setInterval(heartbeat, config.interval);

// 3. HTTP 查询接口（I/O 回调，也是宏任务）
http.createServer((req, res) => {
  if (req.url === '/status') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(status));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(config.port, () => {
  console.log(`🚨 状态服务器启动在 http://localhost:${config.port}`);
});
