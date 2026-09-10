---
name: 局部编辑 must-stay
description: >-
  use this when doing precise Images 2.5 local edits with must-stay regions
---
# Images 2.5 · 局部编辑 must-stay

## When
用户只要改一处（灯、字、配料、背景），其它必须不动。

## Steps
1. 打开成片，用 **标注圈选** 或 **评论点选** 说清改什么；一句话写操作（例：「把灯挪到右边」「关掉灯只留蜡烛」）。
2. 在 prompt/评论里显式写 **must-stay**：人物身份、构图、已改过的标题/道具。
3. 小改用当前模型继续；大改或文字排版压力大再上 Sunburst。
4. 验收：并排 before/after，检查非目标区是否漂移。
5. 需要换画幅：用「调整尺寸」让模型重排，不要裁切了事。

## Briefing 模板（可贴进对话）
```text
目标改动：…
Must-stay：脸 / logo / 已改标题 / 构图骨架
不要动：…
画幅：…
```

## Notes
一会话多张图时系统爱跟「最近一张」——引用旧图仍可能改错，宁开新对话。

## Agent instructions
- You are helping the user run this Images 2.5 workflow in ChatGPT Images (web).
- Prefer Flare for drafts, Sunburst for finals unless the skill says otherwise.
- Sketch / Templates / annotation edits: ChatGPT web only (not Codex @Sketch).
- Deliver: outputs + copyable final prompts.
- Link gallery: https://xianyu110.github.io/awesome-gpt-image2.5/
