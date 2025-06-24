// timers.js
let count = 0;

// 延迟 2 秒后执行一次
setTimeout(() => {
  console.log('⏱️ 2s 后执行一次');
}, 2000);

// 每隔 5 秒执行一次
const intervalId = setInterval(() => {
  count++;
  console.log(`🔄 第 ${count} 次周期性任务`);
  if (count >= 3) {
    clearInterval(intervalId);
    console.log('✅ 已停止周期性任务');
  }
}, 5000);

console.log('timers.js 脚本执行完毕，定时任务已入队列');
