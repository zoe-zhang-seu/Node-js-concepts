const p = new Promise((resolve, reject) => {
  // 假设某个异步操作
  setTimeout(() => resolve('OK'), 100);
});

p.then(result => {
  console.log('成功回调：', result);
}).catch(err => {
  console.error('失败回调：', err);
}).finally(() => {
  console.log('不论成功还是失败，最后都会执行这个回调');
});