// 模拟：专注从昨天 23:59 开始，现在已经是今天 00:01（跨日 2 分钟）
(function() {
    const now = Date.now();
    const yesterday2359 = new Date();
    yesterday2359.setDate(yesterday2359.getDate() - 1);
    yesterday2359.setHours(23, 0, 0, 0);

    // 强制覆盖 state
    state.isFocusing = true;
    state.startTime = yesterday2359.getTime();
    state.currentSessionMs = now - state.startTime;

    console.log('模拟 startTime:', yesterday2359.toLocaleString());
    console.log('currentSessionMs:', state.currentSessionMs, 'ms ≈', Math.floor(state.currentSessionMs/60000), '分钟');
    console.log('startTime 是昨天:', new Date(state.startTime).toDateString());
    console.log('今天是:', new Date().toDateString());
    console.log('getTodayHistorySeconds():', getTodayHistorySeconds(), '秒');

    // 此时 updateTotalDisplay 会把整个跨日时长都算进今日累计 —— 这是 bug
    updateTotalDisplay(state.currentSessionMs);
    console.log('今日累计显示（有 bug）:', document.getElementById('total-time').textContent);
})();