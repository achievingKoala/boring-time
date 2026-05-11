1. todo 邮件通知

2. done 不要赌注 ，不要结束并结算，打开网页后自动结算

3. done 打断后 不要 显示抓到你了
只要记录有声 时长 和 无声总时长即可

4. done 不要结束并结算改成 

被打断（其他 App 抢走焦点）→ 显示"检测到干扰"，记录打断时长 ,停止播放

回到页面 → 点击继续专注后播放，开始继续计时

5. todo 一分钟进度条条展示 无声时长

 时间轴展示什么时候 有声, 什么时候 无声

6. todo 陀螺仪 判断久坐

7. 打断后 不用抢了，立刻停止播放音乐和计时 等用户回来后要 点击继续专注按钮 再计时

8. todo: 
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录执行
vercel


9. todo:
增加时间轴展 今天每次专注的开始/结束时间段（像日历条）

10. todo: cloud supabase

11. todo: 网页 音量调节

12. todo: 登录 todo: 打断后邮件提醒

13. todo : 不要 结束专注 改暂停 专注 屏幕上显示的今日专注总时长 不要

14. done: 检测到干扰就停止计时 无论是否在网页上 

15. todo: 不要每天清零

16. todo: 时间轴倒叙

17. todo: 今日 百分比 

18. done bug: 跨日 计算今日专注时 把 昨天的时长也算上了

19. done： bug 今日时长不对

20. done:  当被打断时 停止播放 打断停止后 也不继续播放 直到用户回到页面点击继续专注


git commit --amend -m "fix auto play bug when interrupted"

21. done: 响应式 优化

22. 写个脚本测跨日： 昨天23:00 到 今天凌晨1点 

23. 写个脚本测 在专注时跨日 今日累计需要清理


24. slogan: 保护你的安静时间

25. 分享按钮

26. todo： 深度专注中 呼吸效果

27. todo: 开始专注后 当前专注和总专注时间  刷新前保存

28. todo : supabase 建表格 埋点

开始专注、结束专注、被打断、页面加载 都要。 用户操作表。匿名用户

const supabaseClient = window.supabase.createClient(
            'https://bbvghqizsardpusrgxzm.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidmdocWl6c2FyZHB1c3JneHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3ODk2NjEsImV4cCI6MjA4ODM2NTY2MX0.6io59HEeT1kiaG0lpA9YUBtZGArHk-P-ppMNbCh-Zho',
); 


29. todo： 
白噪音循环 播放
加一首：
add https://elckemvmphbjjlpzgoqy.supabase.co/storage/v1/object/public/white-sound/waterfall.mp3

https://elckemvmphbjjlpzgoqy.supabase.co/storage/v1/object/public/white-sound/thunder.mp3

https://elckemvmphbjjlpzgoqy.supabase.co/storage/v1/object/public/white-sound/waves.mp3




30. todo: 中断 5s 后继续 可以不算中断

31. todo: 分享按钮 ：弹出弹窗 
记算 八点 到现在 的 专注时间 和 有声时间
下面画出饼状图

拿脚本造一些数据

分享框底下 带 logo 和 silent time
突出专注时间 缩小有声时间

32. todo bug: 跨日时 今日日志没有刷新