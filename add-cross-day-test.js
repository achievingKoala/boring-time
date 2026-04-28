(function() {
    const existing = JSON.parse(localStorage.getItem('silent_sessions') || '[]');

    const now = new Date();

    // 昨天 23:00
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(23, 0, 0, 0);

    // 今天 01:00
    const today1am = new Date(now);
    today1am.setHours(1, 0, 0, 0);

    const session = {
        start: yesterday.getTime(),
        end: today1am.getTime(),
        duration: Math.floor((today1am - yesterday) / 1000) // 7200s = 2h
    };

    localStorage.setItem('silent_sessions', JSON.stringify([...existing, session]));
    console.log(`已写入：${yesterday.toLocaleString()} → ${today1am.toLocaleString()}，时长 ${session.duration / 3600}h`);
    location.reload();
})();
