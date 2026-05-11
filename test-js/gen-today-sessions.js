/**
 * 生成今日测试数据 — 总专注约 12 小时
 * 在浏览器控制台粘贴运行，页面自动刷新
 *
 * 段落安排（08:00 起，中间留短暂间隔）：
 *   08:00 — 10:30  (150 min)
 *   10:35 — 13:05  (150 min)
 *   13:10 — 15:40  (150 min)
 *   15:45 — 18:15  (150 min)
 *   18:20 — 20:20  (120 min)
 * 合计：720 min = 12 h
 */
(function () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = today.getTime();

    function ts(h, m) {
        return d + h * 3_600_000 + m * 60_000;
    }

    const sessions = [
        { start: ts(8,  0),  end: ts(10, 30), duration: 150 * 60 },
        { start: ts(10, 35), end: ts(13,  5), duration: 150 * 60 },
        { start: ts(13, 10), end: ts(15, 40), duration: 150 * 60 },
        { start: ts(15, 45), end: ts(18, 15), duration: 150 * 60 },
        { start: ts(18, 20), end: ts(20, 20), duration: 120 * 60 },
    ];

    // 覆盖写入（清空旧数据）
    localStorage.setItem('silent_sessions', JSON.stringify(sessions));

    console.log('✅ 已写入今日测试数据（总专注 12h）：');
    sessions.forEach(s => {
        const fmt = t => new Date(t).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
        console.log(`  ${fmt(s.start)} — ${fmt(s.end)}  (${s.duration / 60} min)`);
    });

    location.reload();
})();
