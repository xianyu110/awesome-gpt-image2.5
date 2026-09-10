---
name: 官方提示与选型
description: >-
  use this when writing prompts or choosing Flare vs Sunburst per OpenAI Image Prompting guidance
---
# Images 2.5 · 官方提示与选型

## When
要按官方推荐写 prompt / 选型 Flare·Sunburst / 规范改图与验收。

## Steps
1. **先选型**：Image 2 已够用 → 先试 Flare 降延迟；复杂案 Image 2 不够 → 先 Sunburst 证质量，再同 prompt 试 Flare。
2. **再调 quality**：固定模型后，不够好先抬档；达标再降档换延迟。`xhigh`/`max` 仅在确有缺口时用。
3. **写结果定义**：用途 + 主体 + 构图/画幅 + 约束；复杂请求用 scene / subject / details / constraints 分段。
4. **补可见细节**：材质、光、色、媒介；写实要明示；人物写取景/视线/互动；必出文字放引号并禁多余字。
5. **改图一次一事**：只改 X + must-stay；参考图按序号分工；每轮只改一件，漂移就重申约束。
6. **透明与尺寸**：透明用 PNG/WebP + 真 alpha；自定义尺寸遵守边长/16 倍数/3:1/像素区间。
7. **验收**：文字、身份/产品、改图局部性、真实 alpha。
8. **交付**：成图 + 可复制最终 prompt（含 model / quality / size / must-stay）。

## Official guidance
- 方法论摘要：[docs/playbooks/official-image-prompting.md](https://github.com/xianyu110/awesome-gpt-image2.5/blob/main/docs/playbooks/official-image-prompting.md)
- 原文：[OpenAI Image prompting](https://developers.openai.com/api/docs/guides/image-prompting)

## Notes
- 社区玩法见首页画廊；本 Skill 对齐官方方法论，不替代案例抄作业。
- 像素级不变区域请自行合成，勿只靠提示。

## Agent instructions
- You are helping the user run this Images 2.5 workflow in ChatGPT Images (web) or API.
- Prefer Flare-first for validated Image-2 quality; Sunburst-first when Image-2 quality fails, then retest Flare.
- Sketch / Templates / annotation edits: ChatGPT web only (not Codex @Sketch).
- Deliver: outputs + copyable final prompts (include model/quality/size/must-stay).
- Link gallery: https://xianyu110.github.io/awesome-gpt-image2.5/
- When the user asks for the full official digest, fetch the playbook markdown above; do not invent shortened substitutes that drop constraints.
