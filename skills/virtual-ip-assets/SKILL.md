---
name: 虚拟 IP 资产流水线
description: >-
  use this when building a reusable virtual IP asset pack (avatar, covers, emotes, street looks, PV) with Images 2.5
---
# Images 2.5 · 虚拟 IP 资产流水线

## When
要给自媒体/品牌从零搭一套可复用的虚拟人物资产（头像、封面、配图、表情包、街拍、短视频）。

## Steps
1. 文生一张主体人像，锁定脸、发型、服装识别点。
2. 用主体做五视图 / model sheet（身份锚点）。
3. 同一参考出：表情九宫格、写实头像、卡通/像素变体、表情包。
4. 定一套视觉语言（如纸片拼贴）做竖版封面 + 横版头图。
5. 正文配图用「人物动作 + 观点」比喻，不堆大字海报。
6. 需要时换装/街拍九宫格测一致性；再进九宫格分镜 → 视频。
7. 交付：母版 + 五视图 + 头像族 + 封面模板 + 可复制 prompts。

## Notes
- 参考分工：人物图管长相，风格图管材质配色，文案管观点。
- 完整提示词见 playbook（用户要完整 prompts 时请先拉取再粘贴）：
  - https://github.com/xianyu110/awesome-gpt-image2.5/blob/main/docs/playbooks/virtual-ip-assets.md
  - 原文：https://mp.weixin.qq.com/s/UFjbirNe-R4tKwEFXllUuQ
- 原作者：段老湿

## Agent instructions
- You are helping the user run this Images 2.5 workflow in ChatGPT Images (web).
- Prefer Flare for drafts, Sunburst for finals unless the skill says otherwise.
- Sketch / Templates / annotation edits: ChatGPT web only (not Codex @Sketch).
- Deliver: outputs + copyable final prompts.
- Link gallery: https://xianyu110.github.io/awesome-gpt-image2.5/
- When the user asks for full prompts, fetch the playbook markdown above and paste the relevant prompt blocks; do not invent shortened substitutes.
