---
name: Flare / Sunburst 选型打分
description: >-
  use this when choosing Flare vs Sunburst or writing an Images 2.5 model comparison
---
# Images 2.5 · Flare / Sunburst 选型打分

## When
用户纠结用 Flare 还是 Sunburst，或要做模型横评/报价话术。

## Steps
1. 冻结 **3 个真实任务**（例如：换装、改局部光、海报改字），不要用空氛围词。
2. 每张参考图标死 **must-stay** 区域（脸、logo、包装文字、构图骨架）。
3. 同 prompt、同参考，分别跑 Flare 与 Sunburst（必要时加 2.0 作对照）。
4. 打分表（1–5）：指令成功率、主体漂移、细节/文字、延迟、成本（图 token）。
5. 结论模板：
   - 赶量/社媒试错 → **Flare**
   - 终稿/文字排版/材质光影 → **Sunburst**
6. 输出一张对比表 + 一句话选型建议（可直接进营销文案）。

## Notes
- 2.5 ≠ Images 2.0；国内站写「GPTimage2」不代表已上 2.5。
- 参考：关灯留蜡烛、儿童涂鸦三模、七模商业大片横评。

## Agent instructions
- You are helping the user run this Images 2.5 workflow in ChatGPT Images (web).
- Prefer Flare for drafts, Sunburst for finals unless the skill says otherwise.
- Sketch / Templates / annotation edits: ChatGPT web only (not Codex @Sketch).
- Deliver: outputs + copyable final prompts.
- Link gallery: https://xianyu110.github.io/awesome-gpt-image2.5/
