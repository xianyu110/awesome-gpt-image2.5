# Awesome GPT Image 2.5

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://xianyu110.github.io/awesome-gpt-image2.5/)

> ChatGPT Images 2.5 / GPT-Image-2.5（Flare · Sunburst）社区好玩用法精选。每条附原帖；偏一人团队、营销素材、可抄工作流。

维护：MaynorAI / [@xianyu110](https://github.com/xianyu110) · 整理日期：2026-09-11 · **收录 191 条**

配套：[Images 2.5 国内指南](https://github.com/xianyu110/gptimage2.5)（[Pages](https://xianyu110.github.io/gptimage2.5/)）· 姊妹清单 [awesome-gpt-6-astra](https://github.com/xianyu110/awesome-gpt-6-astra)

---

## 先分清型号

| 型号 | 一句话 | 适合 |
| --- | --- | --- |
| **Flare** | 快、便宜、赶量原型 | 批量草稿、社媒试错、先出图再迭代 |
| **Sunburst** | 更慢一点、质量更高 | 抠细节、文字排版、最终成稿 |
| Images 2.0 / gpt-image-2 | 上一世代 | ≠ Images 2.5，别混着买、混着评 |

官方选型与提示详见 [docs/playbooks/official-image-prompting.md](docs/playbooks/official-image-prompting.md)

---

## Contents

- [可复用工作流 Skill](#可复用工作流-skill)
- [选型评测](#选型评测)
- [Sketch](#sketch)
- [海报排版](#海报排版)
- [人像角色](#人像角色)
- [电商改图](#电商改图)
- [场景视觉](#场景视觉)
- [像素动效](#像素动效)
- [UX产品](#ux产品)
- [收录说明](#收录说明)
- [相关链接](#相关链接)

---

## 可复用工作流 Skill

七套从社区案例与官方方法论抽象出来的可抄工作流（站点页：[skills.html](./skills.html)）。

**怎么用：** 这不是插件、不用安装。打开 ChatGPT → 图像 / Images，按「何时用」选一条，从上到下照步骤跑；网页版才有 Sketch / Templates / 标注精修。Flare 赶草稿，Sunburst 出终稿。有 playbook 的条目点进去复制完整提示词。

「点 skills 页「复制给 Agent」可粘贴为 Cursor/Codex 的 SKILL.md；源文件在 [`skills/`](./skills/)。」


| Skill | 一句话 | 适用 |
| --- | --- | --- |
| **Sketch 控形出片** | @Sketch 控形 → Flare 草稿 → 评论改 → Sunburst 终稿 | 要控构图/布局，或「不会画画也想出图」「先草图再精修」。 |
| **Flare / Sunburst 选型打分** | 冻结 3 个真实任务 + must-stay，打分选型，别靠玄学 | 纠结 Flare 还是 Sunburst，或要做横评/报价话术。 |
| **官方提示与选型** | OpenAI 官方 Image Prompting：先选型再写约束，改图一次一事 | 要按官方推荐写 prompt / 选型 Flare·Sunburst / 规范改图与验收 |
| **UGC 写真锁脸** | 真照片颗粒/色调 + 锁脸，衣装可拆换 | 广告/种草人像、UGC 写真，或假色假噪点假皮肤。 |
| **局部编辑 must-stay** | 圈选/评论改一处，其它死守不动 | 只要改灯、字、配料、背景，其它必须不动。 |
| **像素精灵表 → GIF** | 4×4 动作表切格拼 GIF，游戏/表情包可复用 | 像素动画、战斗图、精灵表、短动效种草。 |
| **虚拟 IP 资产流水线** | 人物母版 → 五视图 → 表情/头像/封面/配图 → 换装街拍 → PV | 要给自媒体/品牌从零搭一套可复用的虚拟人物资产（头像、封面、配图、表情包、街拍、短视频）。 |

### Sketch 控形出片

> @Sketch 控形 → Flare 草稿 → 评论改 → Sunburst 终稿

**何时用：** 要控构图/布局，或「不会画画也想出图」「先草图再精修」。

**步骤：**

1. 确认用途（封面/海报/产品图）和画幅（3:4、9:16、16:9）。
2. 输入 @Sketch，极简线稿标：主体、标题区、产品位、视线/光位。
3. 一句指令描述题材风格，先用 Flare 验构图。
4. 成片用标注/评论改局部，不要整段重抽。
5. 终稿切 Sunburst；多平台用「调整尺寸」重排，勿裁切。
6. 交付：成图 + 可复制最终 prompt（含画幅与 must-keep）。

- Templates 起海报；Sketch 控形。
- 一会话只盯一张图，避免改错对象。

相关分类：[Sketch](#Sketch)

---

### Flare / Sunburst 选型打分

> 冻结 3 个真实任务 + must-stay，打分选型，别靠玄学

**何时用：** 纠结 Flare 还是 Sunburst，或要做横评/报价话术。

**步骤：**

1. 冻结 3 个真实任务（换装、改局部光、海报改字），禁用空氛围词。
2. 参考图标死 must-stay（脸、logo、包装文字、构图骨架）。
3. 同 prompt、同参考分别跑 Flare 与 Sunburst（必要时加 2.0）。
4. 打分（1–5）：指令成功率、主体漂移、细节/文字、延迟、成本。
5. 结论：赶量/社媒 → Flare；终稿/文字排版/材质 → Sunburst。
6. 输出对比表 + 一句话选型建议。

- 2.5 ≠ Images 2.0。
- 国内站「GPTimage2」≠ 自动已上 2.5。

相关分类：[选型评测](#选型评测)

---

### 官方提示与选型

> OpenAI 官方 Image Prompting：先选型再写约束，改图一次一事

**何时用：** 要按官方推荐写 prompt / 选型 Flare·Sunburst / 规范改图与验收。

**步骤：**

1. 先选型：Image 2 够用 → Flare；复杂案不够 → 先 Sunburst 再试 Flare。
2. 再调 quality：不够抬档，达标再降；xhigh/max 仅必要时。
3. 定义结果：用途+主体+构图/画幅+约束；复杂用分段。
4. 可见细节：材质光色媒介；人物取景/视线/互动；文字引号+禁多余。
5. 改图一次一事：只改 X + must-stay；参考图按序号分工。
6. 透明与尺寸：PNG/WebP 真 alpha；自定义尺寸守边长与像素区间。
7. 验收：文字、身份/产品、改图局部性、真实 alpha。
8. 交付：成图 + 可复制最终 prompt（含 model/quality/size/must-stay）。

- 社区玩法见首页画廊；本页对齐官方方法论。
- 完整摘要见 [docs/playbooks/official-image-prompting.md](docs/playbooks/official-image-prompting.md)。
- 原文：https://developers.openai.com/api/docs/guides/image-prompting

相关分类：[选型评测](#选型评测)

---

### UGC 写真锁脸

> 真照片颗粒/色调 + 锁脸，衣装可拆换

**何时用：** 广告/种草人像、UGC 写真，或假色假噪点假皮肤。

**步骤：**

1. 准备 1 张干净参考脸 +（可选）1 张真照片作颗粒/色调参考。
2. Prompt：用途 → 可见细节 → 姿态/视线 → 服装分块 → 画幅 → 必须保留的脸部特征。
3. Flare 出 2–4 张锁脸草稿；只用评论/标注改装发服装。
4. 终稿 Sunburst；检查皮肤纹理、噪点、色温。
5. 交付：成片 + 可替换服装段落。

- 无参考硬生成真人广告脸。
- 一次改动作+发色+妆容易脑补遮挡区。

相关分类：[人像角色](#人像角色)

---

### 局部编辑 must-stay

> 圈选/评论改一处，其它死守不动

**何时用：** 只要改灯、字、配料、背景，其它必须不动。

**步骤：**

1. 标注圈选或评论点选，一句话说清改动。
2. 显式写 must-stay：人物身份、构图、已改标题/道具。
3. 小改继续当前模型；大改/文字压力大上 Sunburst。
4. 并排 before/after 验收非目标区。
5. 换画幅用「调整尺寸」重排，不要裁切。

<details>
<summary>Briefing 模板</summary>

```text
目标改动：…
Must-stay：脸 / logo / 已改标题 / 构图骨架
不要动：…
画幅：…
```
</details>

- Briefing：目标改动 / Must-stay / 不要动 / 画幅。
- 多图会话易跟最近一张，宁开新对话。

相关分类：[电商改图](#电商改图)

---

### 像素精灵表 → GIF

> 4×4 动作表切格拼 GIF，游戏/表情包可复用

**何时用：** 像素动画、战斗图、精灵表、短动效种草。

**步骤：**

1. 上传角色图，声明「身份与服装唯一参考」。
2. 生成 4×4（或 N×N）动作网格：对齐、纯色/透明底、统一光源。
3. Flare 快速出表；单格不对再标注重做。
4. 切格后按序拼 GIF/短视频。
5. 交付：精灵表 + GIF + 可换角色名的核心提示词。

<details>
<summary>Prompt 骨架</summary>

```text
上传图1作为角色身份与服装的唯一参考。
生成 4×4 像素风动作表，网格对齐，每格一个清晰动作，…
```
</details>

- 可与 Astra 复刻像素小游戏组合成片。

相关分类：[像素动效](#像素动效)

---

### 虚拟 IP 资产流水线

> 人物母版 → 五视图 → 表情/头像/封面/配图 → 换装街拍 → PV

**何时用：** 要给自媒体/品牌从零搭一套可复用的虚拟人物资产（头像、封面、配图、表情包、街拍、短视频）。

**步骤：**

1. 文生一张主体人像，锁定脸、发型、服装识别点。
2. 用主体做五视图 / model sheet（身份锚点）。
3. 同一参考出：表情九宫格、写实头像、卡通/像素变体、表情包。
4. 定一套视觉语言（如纸片拼贴）做竖版封面 + 横版头图。
5. 正文配图用「人物动作 + 观点」比喻，不堆大字海报。
6. 需要时换装/街拍九宫格测一致性；再进九宫格分镜 → 视频。
7. 交付：母版 + 五视图 + 头像族 + 封面模板 + 可复制 prompts。

- 参考分工：人物图管长相，风格图管材质配色，文案管观点。
- 完整提示词见 [docs/playbooks/virtual-ip-assets.md](docs/playbooks/virtual-ip-assets.md)。
- 原作者：段老湿 · https://mp.weixin.qq.com/s/UFjbirNe-R4tKwEFXllUuQ

相关分类：[人像角色](#人像角色)

---

## 选型评测

Flare / Sunburst / 2.0 阶梯、速度成本、质量档位、硬对比与 4K 踩坑。

- **同图三连：Image 2 / Sunburst / Grok** — gpt-image-2 vs 2.5-Sunburst vs Grok Imagine 2.0 并排。跨厂选型甩图就行，别再嘴炮「感觉更好」。 [@zhang_baoqing](https://x.com/zhang_baoqing) · [原帖](https://x.com/zhang_baoqing/status/2098270719994179587)

- **同 prompt 三连：Flare / Sunburst / NB2** — 窗光侧颜耳机人像同一套提示压三模。选型别靠感觉，并排看肤色、阴影条带和细节谁更稳；附完整 prompt。 [@dreamydigiarts](https://x.com/dreamydigiarts) · [原帖](https://x.com/dreamydigiarts/status/2098267794613883368)
  <details>
  <summary>查看 / 复制提示词</summary>

```
The woman is positioned indoors by a window, her body turned in profile to the camera, her shoulder jutting forward, her chin slightly raised and resting on the back of her hand, her head turned to the right, her gaze directed toward the light source. The portrait is close-up, from chest to crown, with an eye-level angle. The composition is shifted to the left, the right side of the frame is filled with a softly lit background. Diagonal stripes of light from the window frame or blinds fall across her face and shoulder.

She has even skin with a distinct warm, bronze-golden undertone, warm, brown-terracotta eyeshadow with a smooth blend, long lashes, and a rich, warm, reddish-brown lipstick with a soft sheen.

Hair is pulled back into a sleek low bun, the texture is neatly smoothed, the hairline is defined, fine natural strands are visible at the temples, and the hair surface is shiny and smooth.

She's wearing a black top with thin straps made of a smooth matte fabric, a thin silver chain with a small heart-shaped pendant around her neck, and large, silver-gray, matte-finish over-ear headphones with smooth, rounded shapes.

The location is a minimalist interior with a neutral gray-beige wall. The light source is positioned to the right of the side. Sunlight streams through a window frame or blinds, creating distinct stripes of light and shadow on her face and shoulder. The background remains softly illuminated without harsh details. The lighting is hard, directional, and natural, creating distinct stripes of contrast, deep shadows with sharp edges, high contrast, bright and controlled highlights on her skin, and a warm overall atmosphere thanks to the sunlight. Highly detailed, photorealistic photography, shot with an 85mm portrait lens, uses a shallow depth of field with sharp focus on the eyes and profile lines. The background is softly blurred, and the texture of the skin and metal of the headphones is detailed.

warm sunlit editorial mood,

strong golden amber highlights,

high contrast directional lighting,

deep defined shadow bands,

rich warm skin tones,

moderate saturation with bronze emphasis,

clean dark background separation,

sharp specular highlights on skin,

subtle cinematic grain,

dramatic sunlight color grading.
```

  </details>

- **同 prompt：2 / Sunburst / Flare 三连** — 东方极简封面同提示压三模。Flare 赶量、Sunburst 抠细节，一眼分档——选型尺子再加一把。 [@zhang_baoqing](https://x.com/zhang_baoqing) · [原帖](https://x.com/zhang_baoqing/status/2098248858283454911)

- **官方 Image Prompting 中文拆解** — Flare/Sunburst 定位 + 官方 8 条写 prompt 原则 + 编辑 must-stay，中文一页抄走。出广告图前当 checklist。 [@XiaoKooeye](https://x.com/XiaoKooeye) · [原帖](https://x.com/XiaoKooeye/status/2098238512676159764)

- **同 prompt 抽到 Flare：可能不如 Image 2** — 别盲信版本号：同一套提示抽到 gpt-image-2.5-flare，观感可能输给 Image 2。选型先看型号，再谈升级。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2098207695371379164)

- **同一把水壶，八次链式编辑：2 vs 2.5 Sunburst** — Agent 同流程改壶嘴/把手/盖子，盯身份锁谁更稳。卖「改完还是那个东西」的营销向硬对比。 [@SandbaseAI](https://x.com/SandbaseAI) · [原帖](https://x.com/SandbaseAI/status/2098199974303445050)

- **同 prompt 同 43 token：Flare 快、Sunburst 稳** — 淹城夜景左右开：Flare 抢速度，Sunburst 抠细节。选型直觉一帖讲完。 [@misaraeai](https://x.com/misaraeai) · [原帖](https://x.com/misaraeai/status/2098058799001027017)

- **同 prompt：NanoBanana2 vs 2.5 Sunburst/Flare** — 同一套提示压三模，画质/遵从度一眼分档。选型别靠感觉，先看并排。 [@ElitzaVasileva](https://x.com/ElitzaVasileva) · [原帖](https://x.com/ElitzaVasileva/status/2098048981519540723)

- **TikTok 哭脸广告片：Image 2 vs 2.5** — 同套路短广告对照，升级值不值直接甩视频。投放物料选型用。 [@adriamatz](https://x.com/adriamatz) · [原帖](https://x.com/adriamatz/status/2098048651545260384)

- **Canvas 速度账：2 → Sunburst → Flare** — 同场景实测 46.5s → 38.7s → 21.4s，作者称几乎不掉质。选型别玄学，先看秒表。 [@AndrewPulc](https://x.com/AndrewPulc) · [原帖](https://x.com/AndrewPulc/status/2098018760749981786)

- **别按画质选 Flare/Sunburst** — 日文实务：案头排列用 Flare，人物/Logo 不能崩用 Sunburst；公布单价和 2 一样，消耗别拿旧计算器估。 [@MGT_maccha](https://x.com/MGT_maccha) · [原帖](https://x.com/MGT_maccha/status/2098018651399975200)

- **23 任务同 prompt：2.5 vs Image 2 对打** — 2.5 赢在食物质感 + 编辑一致性；2 更稳产品构图；还有两边一起翻车的布局题——升级别神话。 [@DeepMediaLabs](https://x.com/DeepMediaLabs) · [原帖](https://x.com/DeepMediaLabs/status/2098016564960460826)

- **线控压力测：Raster distortion 才是正经 benchmark** — 细线要在复杂形体上保持干净连续。2.5 仍有小瑕疵，但线控明显更好——海报/品牌/文化视觉能用，附 prompt。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2098012211482382380)

- **日文实务：Flare/Sunburst 同价 API 差分** — 同价位下 Flare vs Sunburst 差分写清楚。报价/选型别再靠「感觉贵一点就更好」。 [@rsensui](https://x.com/rsensui) · [原帖](https://x.com/rsensui/status/2097989282116042813)

- **投放静图四件套：Flare / Sunburst / 锁参考 / 局部改** — 付费社媒静态广告拆成四块工作流。量产用 Flare，终稿 Sunburst，参考锁 + focused edit 控漂移。 [@learnbyIsmail](https://x.com/learnbyIsmail) · [原帖](https://x.com/learnbyIsmail/status/2097977460403130371)

- **OpenAI 官方 8 条 Prompt 清单** — 用途→分段→材质光线→限制，收成可抄公式；顺带提醒赶量 Flare、抠画质 Sunburst。出广告图前先过一遍少翻车。 [@WEEXAILabs](https://x.com/WEEXAILabs) · [原帖](https://x.com/WEEXAILabs/status/2097970522961350954)

- **2.5 vs 2.0 视频硬对比** — 动态对照比静态截图更有说服力。写升级值不值、做社媒 demo 直接甩。 [@kr0der](https://x.com/kr0der) · [原帖](https://x.com/kr0der/status/2097963498273988784)

- **ZenMux 上 Flare / Sunburst 怎么选** — 聚合入口里两型号怎么分流。赶量 vs 终稿，别混着点。 [@SuperByteSpace](https://x.com/SuperByteSpace) · [原帖](https://x.com/SuperByteSpace/status/2097962843757006979)

- **Sunburst 四轮保真：越改越稳？** — 多轮编辑下身份/构图是否还在。要做长会话改图，先看这组保真实测。 [@GuliMoreno](https://x.com/GuliMoreno) · [原帖](https://x.com/GuliMoreno/status/2097961051476164612)

- **Flare / Sunburst 体感速度其实差不多** — 高质慢 vs 快但糙：实测速度差没想象大；API 走 Sunburst low 往往更香。一人团队选型直接抄作业。 [@makaneko_AI](https://x.com/makaneko_AI) · [原帖](https://x.com/makaneko_AI/status/2097958688321634471)

- **同 prompt 三模型拆招：Banana / Image 2 / 2.5** — 不盯谁赢，盯构图、文字、细节、遵从度哪块会崩。选型比「一句话冠军」更有用。 [@hotmer_alan](https://x.com/hotmer_alan) · [原帖](https://x.com/hotmer_alan/status/2097958537284751416)

- **CreativeBench 拉满 60 任务** — Flare/Sunburst 丢进 11 个真实创意流程（产品图到多步改图）。不是又一篇「感觉很强」，是可点开的工作流打分板。 [@KristiKumrija](https://x.com/KristiKumrija) · [原帖](https://x.com/KristiKumrija/status/2097958307633795351)

- **指令锁死比拼：2.5 赢 Banana Pro** — 同套 stop-motion prompt（土壤占比、花心坐标、叶片数量全写死）对打。做精确分镜的人该存：听指令比好看更值钱。 [@ekcheungAI](https://x.com/ekcheungAI) · [原帖](https://x.com/ekcheungAI/status/2097943789704720820)

- **木版画：2 / Flare / Sunburst 三连** — 同题材三模吃纹理的差异。做版画/印刷风素材选型时当尺子。 [@morphedai](https://x.com/morphedai) · [原帖](https://x.com/morphedai/status/2097943157585424694)

- **多轮编辑崩坏对照：哪一轮开始飘** — 连续改图何时身份崩、构图飞。长会话改稿前先设止损轮数。 [@luoxiaoshan_ai](https://x.com/luoxiaoshan_ai) · [原帖](https://x.com/luoxiaoshan_ai/status/2097930409518768543)

- **同 prompt 纸雕海报 + 六格广告打脸对照** — 条形码/小字/人群压到不同模型上，文字清晰度与排版连贯性一眼见真章。素材选型别靠感觉。 [@bozhou_ai](https://x.com/bozhou_ai) · [原帖](https://x.com/bozhou_ai/status/2097929167266631771)

- **Image 2 vs Flare vs Sunburst 水彩三连** — 同场景对照，Flare/Sunburst 差在哪不用猜。选型时拿来当尺子。 [@morphedai](https://x.com/morphedai) · [原帖](https://x.com/morphedai/status/2097928056178667694)

- **Sunburst 大图坑：越大越糊** — 图越大，头发/文字/细节越糊。出大尺寸海报前先看一眼，别默默踩坑。 [@truclam_ai](https://x.com/truclam_ai) · [原帖](https://x.com/truclam_ai/status/2097906383987605932)

- **Flare 翻车预期 + Image 2 贵 3.5 倍** — 完整实测：Flare 表现超出预期，同测 Image 2 费用竟是 2.5 的 3.5 倍。做工具/套餐定价的人该看。 [@Tino_Xu_](https://x.com/Tino_Xu_) · [原帖](https://x.com/Tino_Xu_/status/2097903246069395707)

- **2.5 vs 2.0 专辑封面硬对比** — 同 prompt 比专辑封面，回复里有 prompt。想讲「升级值不值」时有图有真相。 [@ArtificialStudi](https://x.com/ArtificialStudi) · [原帖](https://x.com/ArtificialStudi/status/2097899683989385317)

- **Flare vs Krea / Seedream / Ideogram 同光影** — 同一「电影安静瞬间」四连拍，选型辩论时甩图就行。 [@morphedai](https://x.com/morphedai) · [原帖](https://x.com/morphedai/status/2097897854505271703)

- **2.5 vs Banana Pro vs Midjourney，还做成动画** — 同 style prompt 三美横评并直接动起来。比静态截图更适合做选型 demo / 社媒素材。 [@Deevid_AI](https://x.com/Deevid_AI) · [原帖](https://x.com/Deevid_AI/status/2097892821386813662)

- **同 seed 连跑：版本落差比半个号大** — 同 prompt、同 seed 对照，落差比「半个版本号」大；Image 2.5 已上 Sunra。写评测别只比 UI 截图。 [@sunra_ai](https://x.com/sunra_ai) · [原帖](https://x.com/sunra_ai/status/2097884945276686720)

- **ComfyUI 里 Sunburst 五档成本梯子** — 同 prompt 跑 Low→Max：积分约 3.4 / 7.8 / 30 / 53 / 120。想省钱别盲冲 Max，报价/批图前先看这组数。 [@DataJuggler007](https://x.com/DataJuggler007) · [原帖](https://x.com/DataJuggler007/status/2097882272623988823)

- **Zenmux 同 prompt：Flare vs Sunburst 硬刚** — 一句话并跑两模型，日常配图纠结选谁看完能省半小时玄学。 [@AI_jacksaku](https://x.com/AI_jacksaku) · [原帖](https://x.com/AI_jacksaku/status/2097878193013199231)

- **Image 2 左 / 2.5 Sunburst 右零后处理** — 同 prompt 对照，别再嘴炮「感觉更好」，直接甩图。 [@KeyoAPI](https://x.com/KeyoAPI) · [原帖](https://x.com/KeyoAPI/status/2097873150621135282)

- **官方 Prompt 八股文，中文一页抄走** — 生成目的、可见细节、姿态视线、画面文字位置……别再堆氛围词。小红书/落地页文案直接当 checklist。 [@csoooooooo](https://x.com/csoooooooo) · [原帖](https://x.com/csoooooooo/status/2097864779859976637)

- **Flare 打七大模型：商业大片梯队 + 成本** — 官方样本 prompt 横评，第一梯队写死 gpt-image-2.5-flare（更快更接近 Image 2）。选型/报价话术现成。 [@wquguru](https://x.com/wquguru) · [原帖](https://x.com/wquguru/status/2097853425669329128)

- **关灯只留蜡烛** — 同图同设置：一句「关灯，只留蜡烛」横评 Image 2 vs 2.5 Sunburst。烛光谁更真，选型一眼定。 [@SandbaseAI](https://x.com/SandbaseAI) · [原帖](https://x.com/SandbaseAI/status/2097806703186055263)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Turn off the lights. Keep only the candles.
```

  </details>

- **加一颗草莓看出 Flare vs Sunburst 精度差** — 同咖啡馆再只加一颗草莓；Sunburst 仍比 Image-2 更快更便宜，精度编辑才是卖点。做广告迭代别盲选「快模式」。 [@nocodemba](https://x.com/nocodemba) · [原帖](https://x.com/nocodemba/status/2097785065547984984)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A realistic product photograph of a blue ceramic cup of coffee on a pale wooden café table. Beside it, a croissant rests on a folded cream linen napkin, with a silver teaspoon to the right. A small upright card reads “SLOW MORNINGS” in clear lettering. Warm sunlight from the left creates soft shadows. Keep the composition uncluttered.

Edit prompt:
Add one ripe red strawberry on the table directly beside the blue cup. Keep every existing object, the lettering, camera angle, lighting, and composition unchanged.
```

  </details>

- **Image 2 vs 2.5 对比笔记（API 坑）** — 2 没有 variant（2.5 默认 Flare）；参考图从 image 变 image_references——写教程/测评时这些细节拉开专业度。 [@Lucas_IA_](https://x.com/Lucas_IA_) · [原帖](https://x.com/Lucas_IA_/status/2097705361830531366)

- **Flare vs Sunburst：冻结任务再打分** — 别靠玄学选型。冻结 3 个真实编辑任务、标死 must-stay 区域，按指令成功率/漂移/主体一致/延迟/图 token 成本选赢家。 [@evankang_ai](https://x.com/evankang_ai) · [原帖](https://x.com/evankang_ai/status/2097704377142407323)

- **付费社媒静态广告：Flare/Sunburst 四块分工** — 拆成投放可用四块：Flare 默认量产、Sunburst 精修、reference lock、focused edit。产品图/offer 变体可抄。 [@nipuntaneja](https://x.com/nipuntaneja) · [原帖](https://x.com/nipuntaneja/status/2097694013469982745)

- **4K +「多写细节」噪点踩坑** — 4K 加细节指令时 Sunburst/Flare（尤其 Flare）会出现 2.0 低分那种糊噪；落到 2K 才干净。 [@TestAI_WORKS](https://x.com/TestAI_WORKS) · [原帖](https://x.com/TestAI_WORKS/status/2097669038973284576)

- **同图四阶梯子：Banana → 2 → Sunburst → Flare** — 原图 Nano Banana Pro 一路爬到 2.5，对外讲「换模型收益」很直观。 [@CHAO2U_AI](https://x.com/CHAO2U_AI) · [原帖](https://x.com/CHAO2U_AI/status/2097668790809165918)

- **Sunburst High / Med / Low 同 prompt** — API 三档画质对照：2.5 的 Medium/Low 仍扎实，选档=控成本。 [@WolfRiccardo](https://x.com/WolfRiccardo) · [原帖](https://x.com/WolfRiccardo/status/2097668754863779900)

- **儿童涂鸦 img2img 三模对比** — Flare / Sunburst / 2.0 对「乱笔画」的忠实度与美化度。 [@justhalfbit](https://x.com/justhalfbit) · [原帖](https://x.com/justhalfbit/status/2097646029042811046)

- **Topview 五轮编辑：Flare vs Sunburst** — 多轮改图场景下谁更扛改、谁更飘。 [@akiyoshisan](https://x.com/akiyoshisan) · [原帖](https://x.com/akiyoshisan/status/2097641019806531864)

- **曲网格难题：Higgsfield 硬对比** — 曲面网格这类「几何地狱」题，看 2.5 吃不吃得住。 [@maarcoofdezz](https://x.com/maarcoofdezz) · [原帖](https://x.com/maarcoofdezz/status/2097622915730604249)

- **2 分钟 → 30 秒 + 多轮** — 工作流压缩：更快出稿、多轮仍稳。 [@Voxyz_ai](https://x.com/Voxyz_ai) · [原帖](https://x.com/Voxyz_ai/status/2097621370389581931)

- **延迟硬测：17s / 35s / 74s** — Flare 17.42s · Sunburst 35.13s · Image2 1m14s，排队与体感都写清了。 [@matthieu_ai](https://x.com/matthieu_ai) · [原帖](https://x.com/matthieu_ai/status/2097620938183295288)

- **UGC 广告网格：2.0 High vs Sunburst Max** — 九宫格 UGC 风素材，Max 档位是否值得。 [@saranshvfx](https://x.com/saranshvfx) · [原帖](https://x.com/saranshvfx/status/2097604682646528030)

- **Pringles 广告：2.0 vs 2.5** — 品牌广告向对比，包装文字与货架感。 [@spect3ral](https://x.com/spect3ral) · [原帖](https://x.com/spect3ral/status/2097588805155078576)

- **速度与成本实测** — 2.0：约 120s / 20¢；Flare：约 20s / 5¢；Sunburst：约 31s / 5¢。赶量先看这组数。 [@illyism](https://x.com/illyism) · [原帖](https://x.com/illyism/status/2097584023627239575)

- **Image2 → Flare → Sunburst 阶梯** — 同一题材从旧模爬到 2.5，质量跳档一眼可见。 [@atakoylanai](https://x.com/atakoylanai) · [原帖](https://x.com/atakoylanai/status/2097568820000850058)

- **Flare vs Sunburst 对比站** — 并排预览站点，适合快速建立「快 vs 精」直觉。 [@137yugi](https://x.com/137yugi) · [原帖](https://x.com/137yugi/status/2097560368684159241)

- **手部 vs Grok：Flare / Sunburst 谁更稳** — 社区横向对比手部结构与真实感，选型前先看这一帖。 [@luladogdog](https://x.com/luladogdog) · [原帖](https://x.com/luladogdog/status/2097551019295248486)

- **官方 Image Prompting 指南要点** — Flare/Sunburst 选型、提示结构、改图 must-stay、透明底与验收清单。 [OpenAI](https://developers.openai.com/api/docs/guides/image-prompting) · [playbook](docs/playbooks/official-image-prompting.md)

- **可控性从提示语迁到交互：2.5 综述与对比** — Sketch/模版/标注精修 + Flare/Sunburst；2 vs 2.5 在 logo/角色/定格/建筑/风格/画幅上的实测结论；透明底自测提示词。 [卡尔的AI沃茨](https://mp.weixin.qq.com/s/-_pJRujQA4xHC2H8B6XWtA) · [playbook](docs/playbooks/image25-controllability-shift.md)


## Sketch

Sketch 工作流演示：控形、打光、画框布局与容错。

- **几条糙线稿 → 四个完整方向** — 极简线稿丢进 Image 2.5，一次拉出四个完整成片方向。构图说不清？先画再渲，Sketch 控形教科书级。 [@MinLiBuilds](https://x.com/MinLiBuilds) · [原帖](https://x.com/MinLiBuilds/status/2098277993575854396)

- **中文 Sketch 构图：方框箭头锁结构** — 写三百字说不清站位？@Sketch 用 A/B/C 区 + 箭头 + 留白虚线。草图管位置，文字管内容——中文可抄公式。 [@derek_wall90176](https://x.com/derek_wall90176) · [原帖](https://x.com/derek_wall90176/status/2098233953949983197)
  <details>
  <summary>查看 / 复制提示词</summary>

```
打开 ChatGPT Images，输入 @Sketch，绘制一张3比4竖版构图草图。

使用简单图形标记画面结构。

A区域代表【人物或产品】
B区域代表【前景物体】
C区域代表【背景建筑或环境】
箭头代表【人物视线、动作或镜头方向】
虚线区域作为【标题或留白安全区】

完成草图后输入以下提示词。

将这张草图转化为一张【海报、产品广告、电影关键帧、室内效果图或出版插图】。

严格继承草图中的主体数量、位置、画面占比、朝向、前后遮挡、地平线、视觉中心和留白区域。

将A区域替换为【主体设定】，正在【具体动作】。
将B区域替换为【前景内容】，形成自然遮挡。
将C区域替换为【场景设定】，符合统一透视与空间尺度。

采用【写实摄影、手绘插画、编辑设计或电影质感】。光线来自【方向】，主色为【颜色】，材质表现【具体要求】。

草图中的方框、箭头、字母和辅助线只用于控制构图，成片中全部删除。

禁止自动居中、改变主体数量、交换前后关系、填满留白、增加分栏、生成过程图和保留草图标记。

输出一张独立的3比4成品图。
```

  </details>

- **tldraw 24h 升级 ChatGPT Sketch：demo + live kit** — 官方画板队连夜跟上 2.5 Sketch：30 分钟演示 + 可玩 live kit。控形出片别只看截图，直接上手拖线框。 [@tldraw](https://x.com/tldraw) · [原帖](https://x.com/tldraw/status/2098132314987303251)

- **Sketch→编辑风造型：线稿+布料色卡+鞋款** — 铅笔稿 + 三块布料色卡 + 鞋子参考出 editorial look；工作流和 prompt 在首评。时尚/电商造型图可抄。 [@itsphotogptai](https://x.com/itsphotogptai) · [原帖](https://x.com/itsphotogptai/status/2098064713024409655)

- **简笔画→温馨家庭成片（闲鱼信息差）** — 随手线稿渲成光影到位的家庭画；作者还甩了闲鱼「儿童教育 Sketch 交付」变现脑洞。一人团队可抄。 [@Adam38363368936](https://x.com/Adam38363368936) · [原帖](https://x.com/Adam38363368936/status/2098036539704086619)

- **Sketch 涂鸦→AI 角色 + note** — 一笔乱画做出角色，还能边聊边改；附上手感想，适合给客户演示「零门槛从草图开干」。 [@teddypooh_bear](https://x.com/teddypooh_bear) · [原帖](https://x.com/teddypooh_bear/status/2098035177968824347)

- **Sketch/Doodle 完整 walkthrough：草图只锁构图** — 从涂鸦到成片的完整步骤：草图只负责构图骨架，风格后置。不会画画也能控形出片。 [@atlas_remake](https://x.com/atlas_remake) · [原帖](https://x.com/atlas_remake/status/2097987154890944892)

- **涂鸦一笔变插画** — 乱笔画进 2.5，直接拉成可发插画。Sketch 控形的「最低门槛」演示。 [@chrno001](https://x.com/chrno001) · [原帖](https://x.com/chrno001/status/2097972662828155319)

- **Sketch 关键词 + 线情绪怎么写** — 线稿不只锁形，还要写清线情绪。控形 prompt 的细节档位可抄。 [@wenwen11703261](https://x.com/wenwen11703261) · [原帖](https://x.com/wenwen11703261/status/2097963306116084142)

- **Sketch → 油画成片** — 线稿控形后切油画质感。艺术封面/展览视觉，先形后质。 [@Mayorkng98](https://x.com/Mayorkng98) · [原帖](https://x.com/Mayorkng98/status/2097930655375970768)

- **Sketch 实测 walkthrough 视频** — 视频过一遍 Images 2.5：Sketch、参考图一致性、指令跟随都强；编辑间不完全一致。快速建立「2.5 能干啥」心智。 [@bartslodyczka](https://x.com/bartslodyczka) · [原帖](https://x.com/bartslodyczka/status/2097906238088765909)

- **涂鸦骑士 → Chibi → GIF** — Sketch 出资产再 vibe-code 动起来，游戏/表情包可复用；通用 prompt 在帖里。 [@mtkapi](https://x.com/mtkapi) · [原帖](https://x.com/mtkapi/status/2097877501745795432)

- **画质不是杀招，Sketch 才是** — @Sketch 棒人草图 + 一句指令 → 成品；「再往左一点」那种往返可以扔了。内容号讲工作流就讲这个。 [@tatsumoto2222](https://x.com/tatsumoto2222) · [原帖](https://x.com/tatsumoto2222/status/2097858154793222529)

- **Sketch：不会画画也能迭代出片** — 草图 → Images 2.5 → 继续改。视频演示「不会画也能出货」，Sketch 种草最佳素材之一。 [@derrickcchoi](https://x.com/derrickcchoi) · [原帖](https://x.com/derrickcchoi/status/2097703973671334359)

- **零画功 Sketch：棒人+角色图→完整场景** — 不会画画也能用棒人构图 + 角色参考生成场景；给客户讲「手绘即提示词」最直观。 [@sunouku](https://x.com/sunouku) · [原帖](https://x.com/sunouku/status/2097696764103201143)

- **鼠标手绘 Sketch 也能懂** — Sketch 容错示范。 [@MathisYanis](https://x.com/MathisYanis) · [原帖](https://x.com/MathisYanis/status/2097650763174391836)

- **Sketch 画框做封面布局** — 少跟模型解释构图：@Sketch 标标题/人物/产品位置。 [@tokenai888](https://x.com/tokenai888) · [原帖](https://x.com/tokenai888/status/2097648993388093656)

- **Sketch 演示视频** — 完整录屏：怎么画、怎么点、怎么迭代。 [@minchoi](https://x.com/minchoi) · [原帖](https://x.com/minchoi/status/2097641752169427250)

- **Sketch 动漫海报** — 海报级文字与角色，草图先行再 Sunburst 精修。 [@lycoris_zephyr](https://x.com/lycoris_zephyr) · [原帖](https://x.com/lycoris_zephyr/status/2097612107818664107)

- **火柴人哥斯拉** — 极简线稿也能控住巨型生物构图，Sketch 控形示范。 [@GeekCatX](https://x.com/GeekCatX) · [原帖](https://x.com/GeekCatX/status/2097608369947435116)

- **Sketch 前后对比** — 从线稿到成片的 before/after，适合给客户演示流程。 [@ontm0422ai](https://x.com/ontm0422ai) · [原帖](https://x.com/ontm0422ai/status/2097585415264125325)

- **Sketch 打光指南** — 草图阶段就把光位画对，出图少返工。 [@micchan8_](https://x.com/micchan8_) · [原帖](https://x.com/micchan8_/status/2097566459308417382)

- **手绘点选编辑** — Sketch + 点选改局部，一人团队最快闭环之一。 [@yupi996](https://x.com/yupi996) · [原帖](https://x.com/yupi996/status/2097546394827632727)


## 海报排版

海报、字体压力、竖版构图与奢侈品 / SMM 排版系统。

- **同一身份锁：多姿势电影海报战役图** — 一个身份复用成中央主肖像 + 四小姿势拼贴，火焰红橙背景。角色一致性海报战役，prompt 齐活可抄。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2098282894368084350)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a high-impact cinematic action poster featuring the same handsome young adult man repeated in multiple dynamic poses. The composition should have one large central portrait and four smaller surrounding versions of the same man arranged in a bold collage layout.

The central figure is the main focus: he is crouching low in the foreground, facing the camera with a calm, confident, intense expression. He wears a black oversized hoodie, black jogger pants, and white sneakers. One knee is raised, one arm rests casually across it, and his pose feels powerful, grounded, and stylish.

Around him, place four additional versions of the same man in different expressive action/fashion poses:

one on the upper left leaning outward in motion,

one on the upper right with one hand placed on his head,

one on the lower left in a low athletic pose with one hand touching the ground,

one on the lower right in a crouched side pose.

All versions should wear the same black hoodie outfit for visual consistency.

Use a dramatic fiery red and orange background filled with flames, smoke, glowing heat, and intense energy. Behind the figures, include a large white circular geometric ring or abstract round graphic element that frames the collage and adds structure. Add subtle urban textures and monochrome abstract fragments inside parts of the circle for a modern editorial look.

Style should feel like a premium sports-fashion poster, with:

photorealistic details

sharp facial features

strong dramatic lighting

high contrast

bold red/orange glow

clean compositing

dynamic depth and layering

luxury action-campaign aesthetic

Make it visually striking, energetic, and poster-worthy, with the central figure dominant and the surrounding poses supporting the composition. Vertical 2:3 ratio, ultra-detailed, cinematic, high resolution.
```

  </details>

- **旅行日记海报：上半摄影下半丝网印** — 4:5 圣托里尼家庭瞬间：上半写实金光，下半 risograph/丝网印记忆页。旅游/生活方式海报可抄长 prompt。 [@frametheory058](https://x.com/frametheory058) · [原帖](https://x.com/frametheory058/status/2098253373237875074)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a vertical 4:5 cinematic travel-diary poster built around one beautiful family moment in Santorini, Greece.

TOP — REAL PHOTOGRAPHY:
A young couple with their little daughter at a scenic Santorini viewpoint during golden-hour sunset. The daughter is naturally positioned between her parents while both parents gently kiss her cheeks at the same time. She closes her eyes and gives a genuine happy smile. Make the interaction spontaneous, affectionate and completely natural — like a real family vacation photograph, not models posing for an advertisement.

Behind them: iconic white Santorini architecture, blue-domed churches, Mediterranean Sea, distant cliffs, small boats and vibrant bougainvillea. Warm sunset light wraps naturally around their faces and hair. Real skin pores, tiny imperfections, realistic hair strands, accurate hands, natural fabric texture and believable shadows. Shot like a premium full-frame travel photograph, 35mm lens, shallow but realistic depth of field, cinematic dynamic range. Absolutely photorealistic — no AI-looking skin, excessive HDR, plastic faces or artificial expressions.

Keep generous negative space around the subjects for subtle editorial typography. Add only a few refined details such as:
“TRAVEL DIARY”
“Sept 11, 2026”
“SANTORINI — GREECE”
and one small handwritten travel note.

BOTTOM — HAND-PRINTED MEMORY:
Instead of simply duplicating the photograph, reinterpret the same family moment as an original vintage travel-print artwork. Use imperfect screen printing, risograph dots, engraved linework, faded ink, rough edges and authentic paper grain on warm ivory stock.

Build the Santorini landscape around the family as a graphic illustration: simplified blue domes, cliffside houses, sea, sunset and bougainvillea integrated naturally into the composition. Limited ink palette of deep Mediterranean navy, sun-faded terracotta orange, warm ivory and tiny touches of dusty blue.

Use a large expressive hand-painted title:
“MORE GOOD DAYS”

Surround it with only a few carefully placed diary elements: a Santorini postal stamp, tiny handwritten notes, one or two taped miniature travel photographs and “A SMALL DIARY — #001.” Keep everything intentionally imperfect and tactile rather than digitally clean.

The transition between photography and illustration should feel like a torn page from a personal travel journal rather than a basic 50/50 split.

Overall aesthetic: real family vacation photography × independent travel magazine × vintage European tourism poster × handmade screen print.

Warm, intimate, nostalgic and premium. Strong enough to stop someone while scrolling, but never overcrowded. The photograph must feel genuinely captured in real life, while the lower artwork feels physically printed by hand.

No Chinese text. No copied layouts. No generic AI collage aesthetic. No excessive stickers. No fantasy. No fake-looking faces. No malformed hands. No waxy skin. No over-saturation. Keep all three family members consistent between the photographic and illustrated sections.
```

  </details>

- **东方极简封面：分段中文 prompt** — 主题/风格/构图/色彩/光线分段写死，9:16 白底禅意封面。小红书/公众号封面直接返图试。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2098246112159420546)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题方向：东方禅意极简封面海报
风格分支：女性审美高对比型
主体内容：一位女子站在极简花器旁，轻轻整理一枝花
情绪母题：精致、明亮、轻奢东方感
场景与意象：白色空间、葡萄紫花朵、青柠绿叶片、白瓷花器、女子
构图与空间：9:16 竖版构图，花器与人物位于下半部分偏一侧，上方保留完整白色标题区，花枝形成第一视觉点
色彩控制：纯白或奶油白作为高明度基底，葡萄紫只用于花朵，青柠绿用于叶片，花器保持白色或浅米色，人物服装用浅暖白；避免紫绿污染整张画面
光线与质感：明亮柔光，轮廓清晰，干净平面海报质感
画幅比例：9:16
补充要求：颜色要鲜明现代，整体高级精致，适合女性审美封面
```

  </details>

- **对话诊断 → 轻小说封面长 prompt** — 从聊天记录抽人物像，落成异世界恋爱轻小说封面（动画ベタ塗り）。人设种草/粉丝向封面玩法，日文长 prompt 可抄。 [@nyattta](https://x.com/nyattta) · [原帖](https://x.com/nyattta/status/2098243466576994450)
  <details>
  <summary>查看 / 复制提示词</summary>

```
あなたは、会話履歴から人物像を物語へ変換する編集者であり、日本のライトノベル表紙を企画するクリエイティブディレクターです。

私との会話履歴・この会話で確認できる内容をもとに、私の思考傾向、悩み方、強み、こだわり、価値観、人生のテーマやミッションの仮説を分析し、その結果を「私が主人公の異世界恋愛ファンタジーライトノベル第1巻」に落とし込んでください。

最後に、添付した私の写真をアニメイラスト化し、長い日本語タイトル入りのラノベ表紙画像を1枚生成してください。

【分析ルール】
- 根拠は参照可能な会話だけ
- 不明な点は不明と書く
- 分析と創作を分ける
- 公開向けなので個人情報は伏せる
- 写真から内面を決めつけない

【ストーリーの軸】
- 私の会話から見える強みや願いを、異世界での役割や能力に変換する
- 弱みや葛藤も、物語上の障害として活かす
- テーマは「自分の価値を見つけること」「運命の相手との関係を通じた成長」
- ラブロマンス要素を強めに入れる
- 関係性には、契約、共闘、秘密、身分差のいずれかを自然に盛り込む

【パートナー設定】
- 主人公と異性の、美しいパートナーを必ず登場させる
- パートナーは圧倒的な美形で、どこか危うく、でも主人公にだけ執着や特別扱いを見せる
- 関係性は「護衛と主」「契約相手」「敵対から共闘」「婚約者候補」など、ドラマが生まれるものにする
- 主人公との間に、視線や手の触れ方だけで伝わるロマンスの緊張感を持たせる

【タイトル】
- 日本のライトノベルらしい長いタイトルを1案
- 60〜90字程度
- 「自己分析から見えた私らしさ」「異世界での立場」「美しい異性パートナーとの関係」を入れる
- 帯コピー25字以内
- あらすじ120字程度

【表紙画像の方向性】
- 添付写真の私を、顔立ち・髪型・年齢感を活かしてアニメ化する
- 主人公の顔も含め、イラスト全体を完全にアニメのベタ塗り画風にすること
- 半写実、厚塗り、3DCG風、写真風、油彩風、リアル寄りの陰影表現は避けること
- 日本の商業アニメやライトノベル表紙らしい、くっきりした線画、明快な輪郭、セル画風の塗り、フラットで鮮やかな色面、影の境界がはっきりしたアニメ塗りで描くこと
- 肌、髪、瞳、衣装、装飾、背景に至るまで、全体の統一感を持ったアニメベタ塗りで仕上げること
- 主人公は実写の写真感を残すのではなく、「本人の特徴を反映したアニメキャラクター」として自然に再構成すること

- 主人公は異世界衣装。ドレス、ローブ、騎士服、魔導装束など、物語設定に合う華やかな衣装
- パートナーも非常に美しく、気高く、見る人の印象に残る異世界衣装

- 参考画像のように、2人が大きく配置され、恋愛感情や距離感が伝わる表紙にする
- ただし、そのままの構図・色・文字配置・衣装にはしない
- オリジナルなアレンジとして、斜めの体の向き、上下の視線差、手元の演技、衣装の差異などで個性を出す

- 主人公の表情は単調にせず、感情が伝わる豊かな表情にすること
- 瞳の向き、口元、眉の動きまで含めて、主人公が感情豊かに見えるようにすること

- 主人公のポーズも棒立ちにせず、動きとドラマが感じられる豊かなポーズにすること
- 主人公とパートナーの手元や距離感にも演技を持たせ、関係性が一目で伝わるようにすること

- 画面のどこかに契約・魔法・身分差を象徴するモチーフを入れる
- 色調は、深い赤、ネイビー、金、白などをベースにした高級感ある配色
- タイトルは大きく、縦組みと横組みを混ぜて、ラノベらしい勢いある装丁にする
- 顔に文字が重ならないようにする
- 画角は縦長の3:4比率
- 平面の表紙デザインにする
- 実在の作品や既存装丁の模倣は禁止

【出力順】
1. 参照できた情報範囲
2. 自己分析の要点
3. 主人公設定
4. パートナー設定
5. タイトル
6. 帯コピー
7. あらすじ
8. 表紙画像を1枚生成
```

  </details>

- **圆形框景人物海报：光 / 镜面 / 折光** — 构图压力测：圆形裁切 + 光学材质。做人物海报/品牌视觉时直接偷光位。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2098049584152863016)

- **Apple 级手机海报，可复制 prompt** — 产品海报直出，prompt 可抄。做数码/3C 种草封面时省半小时磨词。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2097978468642480487)
  <details>
  <summary>查看 / 复制提示词</summary>

```
4:5 vertical premium smartphone campaign poster, ultra-high resolution (8K), global OOH + digital + social ready
Style: Apple-level art direction × contemporary product photography × bold editorial composition × hyper-real commercial photography

🧠 CORE INTENT:
“ANYTHING’S POSABLE.”

One iPhone.
More ways to see it.
More ways to use it.
More ways to make it yours.

Effortless flexibility.
Physical intelligence.
One device that adapts to the moment.

🎬 SCENE COMPOSITION:

BACKGROUND:
Pure matte white architectural studio environment with a dominant oversized rounded rectangle block in ultra-soft warm silver gradient (top-left → bottom-right illumination)

The background block creates a subtle dimensional stage behind the subject and product.

GIANT TYPOGRAPHY (BACKGROUND LAYER):
“DUO”

* ultra-bold geometric sans-serif
* stretched wide kerning
* partially cropped by frame edges
* soft shadow depth
* color: very light warm grey
* subtle embossed / debossed effect
* typography positioned behind the subject and product
* large enough to function as an architectural graphic element

👤 SUBJECT (HUMAN ELEMENT):

Female model, clean contemporary editorial look, Apple-style casting

* neutral expression
* confident, calm, effortless
* natural skin texture
* hair: natural flow, slightly wind-touched
* minimal makeup
* understated styling

OUTFIT:
→ sculptural off-white tailored top
→ deep graphite trousers
→ minimal accessories
→ no visible branding
→ sophisticated contemporary styling

POSE:

* Shot from slightly low angle (hero perspective)
* Body slightly angled toward camera
* One hand holding iPhone Duo in its compact closed configuration
* Other hand lightly supporting the device as it opens
* iPhone Duo positioned prominently between viewer and subject
* Face aligned toward viewer
* direct eye contact
* relaxed posture
* pose communicates control rather than excitement

📱 PRODUCT (HERO FOCUS):

DEVICE:
iPhone Duo

FINISH:
Premium titanium finish with physically accurate metallic surface response

POSITION:
Extreme foreground (forced perspective)
Slightly rotated toward camera to reveal the thin profile, hinge construction and display relationship

The device must remain the dominant visual object.

PRODUCT CONFIGURATION:
iPhone Duo shown transitioning from compact outer-display mode into its expansive unfolded configuration.

One continuous physical device.
No impossible geometry.
No duplicated products.
No floating components.

DETAILING:

* ultra-thin titanium frame
* precision hinge construction
* seamless folding display
* extremely thin bezels
* hyper-sharp camera system
* lens reflections physically accurate
* brushed titanium edge highlights
* subtle micro-scratches
* realistic fingerprints / material response kept extremely subtle
* Apple logo centered with restrained reflective gloss
* physically accurate display reflections
* realistic hinge shadow and contact points

The unfolded display should feel expansive and architectural rather than simply “larger.”

REFLECTION:

* soft studio reflection across titanium edges
* subtle screen reflections
* controlled highlight around hinge
* micro light bloom around metallic edges

✨ LIGHTING SYSTEM:

MAIN LIGHT:
Soft studio key light (front-left)
→ smooth skin tones
→ clean product highlights
→ controlled white-to-silver transitions

RIM LIGHT:
Cool-white edge light from right
→ enhances phone silhouette
→ separates titanium edges from white background
→ reveals the thinness of the device

ACCENT LIGHT:
Very subtle warm-silver glow from background architectural block

SHADOW:
Soft drop shadow beneath subject + phone
Soft contact shadow around hinge
(no harsh contrast)

🎨 COLOR SYSTEM:

* Primary: clean Apple white
* Secondary: titanium silver / warm metallic grey
* Accent: subtle graphite
* Background: warm neutral white
* Contrast: deep micro-shadows

No over-saturation.
No neon.
No unnecessary color effects.
Controlled premium palette.

✨ GRAPHIC ELEMENTS:

* Minimal sparkle icons ✦ (2 only)
* One subtle translucent UI pill floating near the unfolded display
* Thin technical construction line following the phone’s folding axis
* Very subtle grain for realism
* Minimal geometric indicators showing the transition between closed and open states

All graphic elements remain secondary to the product.

✍️ TYPOGRAPHY SYSTEM:

TOP LEFT:
Apple logo (black, small, clean)

TOP RIGHT:
“Anything’s posable.” (thin sans-serif)

MID LEFT (pill):
“iPhone Duo”

CENTER DOMINANT:
“DUO” (background type)

BOTTOM RIGHT (body text):
Small paragraph:

“iPhone Duo.
One beautifully designed iPhone.
Two ways to see it.
Made to move with you.”

📊 FEATURE STRIP (BOTTOM GRID):

4 rounded cards (glass-white panels):

1. 7.6″ INNER DISPLAY
    “More room to see.”
2. 5.4″ OUTER DISPLAY
    “Ready when you are.”
3. TITANIUM DESIGN
    “Precision in every fold.”
4. A20 PRO
    “Pro performance. In a new form.”

Icons minimal line style.

Cards must feel integrated into the poster rather than appearing as a generic technology specification panel.

📐 COMPOSITION GRID:

* Top: brand + statement
* Mid: subject + product (dominant)
* Background: giant “DUO” typography layer
* Bottom: feature modules

Strong vertical hierarchy.

The product overlaps the background typography.

The model creates secondary depth behind the phone.

Eye flow:
Face → Phone → Hinge → “DUO” → Features

The iPhone Duo must remain the first visual priority.

🎥 CAMERA SPECS:

* ARRI Alexa Mini LF
* 50mm premium anamorphic lens
* shallow depth of field around subject
* product maintained in extremely high optical clarity
* HDR rendering
* ultra-real skin + titanium material detail
* subtle lens distortion for realism
* physically accurate reflections
* controlled cinematic highlight roll-off
* realistic depth separation
* premium commercial product photography

Slightly low camera position for a subtle hero perspective.

No extreme wide-angle distortion.
No exaggerated perspective.
No artificial CGI appearance.

🎯 FINAL ART DIRECTION:

Apple-level campaign restraint with enough visual tension to feel contemporary and editorial.

The poster should communicate that iPhone Duo is not simply a phone that folds.

Its ability to change position becomes the central visual language of the campaign.

Premium.
Precise.
Human.
Physical.
Confident.

No generic foldable-phone aesthetic.
No futuristic sci-fi environment.
No excessive holograms.
No neon.
No cyberpunk styling.
No random floating UI.
No distorted hands.
No malformed device geometry.
No impossible hinge.
No duplicated cameras.
No fake Apple branding.
No clutter.
No cheap AI-rendered appearance.

FINAL OUTPUT:
4:5 vertical
8K
hyper-real commercial photography
premium Apple campaign art direction
global advertising quality
OOH billboard ready
social media ready
Behance-level visual design
```

  </details>

- **奢华婚礼请柬 mockup + 完整 prompt** — 请柬/喜帖排版系统可拆，换名字日期就能出样。婚礼赛道与高端印刷预览很香。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2097977120441925720)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium luxury wedding invitation stationery mockup photographed from a slightly elevated top-down angle on a warm beige textured stone surface.

Place a large rectangular wedding invitation card at the center, printed on thick premium ivory cotton paper with visible fine paper texture and slightly raised edges. Add a very thin champagne-gold foil border around the card.

At the top center, include a delicate botanical gold-foil monogram made from elegant leafy branches surrounding the couple’s initials.

Use sophisticated editorial typography throughout:

- elegant high-contrast serif font for the couple’s names
- refined small uppercase serif lettering for supporting information
- subtle handwritten calligraphy for words such as “and” and the closing line
- generous letter spacing and carefully balanced alignment

Example invitation wording:

“TOGETHER WITH THEIR FAMILIES

ELEANOR JAMES
and
JONATHAN REESE

REQUEST THE PLEASURE OF YOUR COMPANY
AT THE CELEBRATION OF THEIR MARRIAGE

SATURDAY, THE FOURTEENTH OF SEPTEMBER
TWO THOUSAND TWENTY-SIX
AT FOUR O’CLOCK IN THE AFTERNOON

VILLA SERENA
LAKE COMO, ITALY

Dinner and dancing to follow”

Surround the invitation with coordinated luxury stationery pieces, including matching ivory envelopes, small information cards, and decorative paper inserts.

Add romantic styling elements around the composition:
soft ivory and blush roses, tiny white flowers, olive-green foliage, a flowing champagne satin ribbon, a vintage brass wax seal with a botanical emblem, a velvet engagement-ring box with a diamond ring, and subtle vintage postage stamps.

Keep the palette warm and refined: ivory, cream, champagne gold, dusty blush, beige, muted olive green, and soft bronze.

Use soft natural window lighting with delicate shadows, realistic metallic foil reflections, premium paper texture, shallow depth of field, and elegant editorial wedding photography.

Overall aesthetic: timeless European wedding, Lake Como romance, quiet luxury, sophisticated bridal stationery, high-end wedding editorial, minimal but richly detailed, photorealistic, luxurious and romantic.
```

  </details>

- **麦当劳双层芝士堡 × 4 种电影级广告风** — 完整 Prompt 可拆。食品/消费品要「高端感物料」时，直接换品类槽位。 [@Caika_app](https://x.com/Caika_app) · [原帖](https://x.com/Caika_app/status/2097954546152857796)

- **旅行海报 [CITY, COUNTRY] 丝网印刷模板** — 本地建筑元素的 mid-century 丝网印刷风海报配方，带成片。做目的地/活动 KV 直接换槽。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2097920025617399875)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium modern travel poster for [CITY, COUNTRY], inspired by bold vintage screen-print and mid-century graphic design, but with an original architectural portal composition.

Place a large distinctive [LOCAL ARCHITECTURAL ELEMENT / GATE / ARCH] in the foreground, acting as a window into the destination. Through the opening, reveal a stylized layered scene featuring [ICONIC LANDMARK], [FAMOUS NATURAL FEATURE], simplified rooftops, local streets, trees, transportation, and a few subtle cultural details.

Add one large bold geometric sun / moon / circle behind the main landmark, using a shape and placement that feels visually striking rather than traditional. Include 2–3 recognizable local symbols naturally within the scene instead of presenting them as separate objects.

Use a limited sophisticated color palette inspired by the destination: [2–5 COLORS]. Flat geometric shapes, strong silhouettes, clean edges, subtle overlapping layers, slight screen-print texture, and elegant negative space.

Add a tall integrated sign or architectural panel featuring:

[CITY]
[LOCAL SCRIPT]

Include small refined editorial typography at the bottom:

[COUNTRY]
[CITY] • [COORDINATES]
[SHORT DESTINATION PHRASE]

Minimal, artistic, cohesive, collectible travel-poster aesthetic, not photorealistic, not a collage, no excessive details, sophisticated composition, strong visual hierarchy, balanced asymmetry, warm paper background, subtle print imperfections, 4:5 vertical format.
```

  </details>

- **香水奢品 10 格分镜 storyboard** — 电影感产品分镜 + 干净网格，直接可改成你自己的品类广告故事板。 [@Strength04_X](https://x.com/Strength04_X) · [原帖](https://x.com/Strength04_X/status/2097919290980921451)
  <details>
  <summary>查看 / 复制提示词</summary>

```
FORMAT:
• Single-page premium storyboard
• 3:4 portrait storyboard sheet
• 10 cinematic product-focused panels
• Clean editorial grid with thin borders
• Connected sequence from one continuous commercial
• Luxury beauty campaign aesthetic

HEADER:
• Bold elegant typography
• Compact information cards
• Duration: 20 Seconds
• Style: Soft Luxury Fragrance Commercial
• Product: Premium Perfume Bottle
• Audio: Glass Tap + Soft Spray + Liquid ASMR + Gentle Whoosh
• White, blush pink and champagne aesthetic
• Minimal floral graphic accents

STORYBOARD:
1. Perfume bottle standing alone on a glossy white studio surface
2. Macro shot revealing crystal glass, cap and delicate reflections
3. Soft pink light sweeps smoothly across the bottle
4. Perfume cap lifts elegantly with a subtle sparkle
5. Fragrance liquid gently swirls inside the bottle
6. Fine perfume mist sprays into the soft white-pink atmosphere
7. Floating rose petals slowly move around the bottle
8. Bottle performs a smooth elegant 360° rotation
9. Rose petals settle around the base of the bottle
10. Final hero shot with perfume bottle, soft pink glow and delicate petals

FRAME CONSISTENCY:
• Same perfume bottle in every scene
• Identical bottle shape, cap, label and proportions
• Same white glossy studio environment
• Soft white-pink gradient background throughout
• Consistent champagne highlights and reflections
• Same rose petals from Scene 7 onward
• Product remains centered and visually dominant
• Every frame naturally continues from the previous scene

CAMERA:
Luxury macro photography, smooth 360° product rotation, controlled push-ins, shallow depth of field, soft reflections, slow-motion mist and elegant cinematic movement.

VISUAL STYLE:
Ultra-realistic premium beauty advertising, crystal glass, realistic perfume liquid, soft pink atmosphere, delicate
```

  </details>

- **IG 旅游广告 [LOCATION] 可替换模板** — 4:5 竖屏 + 手机导航锚点构图，换地名就能出一波 scroll-stopping 海报。出海投放直接改。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2097890291860865291)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium, scroll-stopping Instagram travel campaign for [LOCATION] in a 4:5 vertical portrait format.

A large modern smartphone stands vertically near the upper center, acting as the main visual anchor. A single elegant map-navigation notification card overlaps the upper-middle of the phone, integrated naturally with realistic depth, soft shadows, and subtle reflections.

The notification should feature a warm-white, lightly frosted rounded rectangle with a refined mobile UI aesthetic and perfectly legible typography:

[map icon] MAPS — now
You keep searching.
Come visit [LOCATION] instead.

Keep the notification within the upper 25–40% of the composition. It should feel physically connected to the phone and must not cover the miniature destination scene.

Below the smartphone, a folded papercraft map labeled “[LOCATION]” unfolds into a handcrafted miniature world. Include only 4–6 highly recognizable elements that naturally represent the destination—such as iconic architecture, landscapes, nature, food, culture, or atmosphere.

Visual Materials

- Phone & distant background: realistic photography
- Buildings & landmarks: handcrafted painted 3D clay
- Map, terrain, roads & water: layered hand-cut paper
- Vegetation & small details: miniature clay and paper

Make the physical materials clearly visible through paper fibers, cut edges, layered surfaces, subtle clay texture, tiny imperfections, and soft dimensional shadows.

Add one large location pin and a tiny backpacked traveler standing on the map, looking toward the miniature world. Keep the traveler small and secondary, like a hidden discovery detail.

Use only 2–3 subtle travel doodles, such as a paper airplane with a dotted path, a tiny heart, and a simple hand-drawn route arrow. Keep them thin, imperfect, and journal-like.

Visual Hierarchy

1. Notification
2. Miniature [LOCATION] world
3. Location pin
4. Tiny traveler
5. Folded map

Maintain generous negative space and avoid clutter, excessive landmarks, unnecessary text, icons, props, or competing focal points.

Use a refined 3–5 color palette inspired by [LOCATION], warm cinematic or golden-hour lighting, shallow depth of field, realistic miniature photography, tactile materials, and sophisticated editorial advertising composition.

The final image should feel like a world-class handcrafted travel campaign-instantly recognizable, destination-specific, clean, emotionally inviting, and rich with subtle details worth discovering.
```

  </details>

- **品牌 KV 母版：iPhone Duo / 18 Pro 系列海报** — 同一套品牌 KV 模板给虚构新品各出一张：折叠叙事 vs 专业影像。一眼看懂怎么用 Image 2.5 做新品系列 KV。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2097884028955394216)

- **轨道奢侈品三连** — Prada×Axiom×Zendaya / SpaceVIP×Keanu / Richard Mille×Hamilton 三套轨道奢侈海报。Sunburst 高端 SMM 排版系统可拆。 [@sebatheepan](https://x.com/sebatheepan) · [原帖](https://x.com/sebatheepan/status/2097778936646091084)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Prada × Axiom Space × Zendaya — "ORBITAL COUTURE"

FORMAT: Ultra-Premium Aerospace SMM Poster | 3:4 | Instagram Hero | Behance Front Page Quality
CORE STRATEGY: High-fashion lunar engineering. Sleek tailored pressurized lunar EVA spacesuit, reflective gold visor, and Earth's blue curve.
CAMPAIGN: "ORBITAL COUTURE"
MASTER VISUAL: Monolithic bold geometric PRADA typography (75% canvas) in clean lunar white across top.
HERO SUBJECT: Zendaya. Sleek high braided ponytail, wearing the tailored Prada-designed Axiom lunar spacesuit in pristine white composite with red Linea Rossa accents.
POSE: Relaxed zero-gravity posture, helmet resting under her arm, gazing out a massive curved spacecraft observation cupola.
COLOR SYSTEM: Lunar White, Linea Rossa Crimson, Deep Space Black, Earth Atmospheric Cyan.
BACKGROUND: The panoramic cupola of an orbital habitat revealing the illuminated blue crescent of planet Earth against the infinite starfield.
GRAPHIC SYSTEM: Orbital velocity parameters (27,600 km/h), telemetry coordinate HUD, minimalist technical hatch numbering.
PROMOTIONAL ELEMENTS: PRADA LUNAR DIVISION | AXIOM EXTRAVEHICULAR MOBILITY UNIT | ARTEMIS MISSION
TYPOGRAPHY: Top iconic PRADA bold serif | Center title: ORBITAL COUTURE | Bottom technical telemetry data readout
LIGHTING: Pristine solar sunlight raking across the composite white suit fabric from the cupola, contrasted by deep space black.
CAMERA: ARRI Alexa 65, 70mm Hasselblad Prime, f/4.0, hyper-crisp reflections in visor and tactile ballistic nylon weave.
```

  </details>

- **竖三栏海报构图** — Images 2.5 竖三栏：图像/文物/声音/空间各占一栏，主体与线条串栏；活动海报、品牌视觉可抄结构。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2097666767174672871)

- **Flare 赛车黄 Porsche 4:5 海报** — MageSpace Flare 竖版社媒海报，结构分明可抄。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2097641872068063436)
  <details>
  <summary>查看 / 复制提示词</summary>

```
GPT image 2.5 Flare on @MageSpace_ 

This new version looks more detailed and has better prompt understanding. 

Try it with prompt : 4:5 vertical social poster, ultra high resolution, 8K

SCENE / BACKGROUND:
Flat racing yellow with subtle gradient (light → deep amber)
Grain texture 2–3%
Soft rectangular overlays at 3% opacity

PRODUCT:
Porsche 911 GT3 RS
Gloss yellow with carbon details
Rear 3/4 angle, slightly elevated
Wing dominant

Position:
Right of center

TYPOGRAPHY:
“PORSCHE”
Ultra tall, condensed, stretched
Deep charcoal

Secondary:
“PORSCHE 911 GT3 RS”

EDITORIAL:
“Porsche — Where Precision Meets Passion”

Focus:
engineering, obsession, track DNA

FADED TEXT:
“GT3 RS” at 3–5%

SPECS:
386 kW / 525 PS
3.2 s
296 km/h

LIGHTING:
Clean studio, sharp highlights

MOOD:
Precision.
Iconic.
Timeless performance.
```

  </details>

- **字体海报 + 杂志排版压力测** — 文字密集场景下 2.5 的可读性边界。 [@modelstoreai](https://x.com/modelstoreai) · [原帖](https://x.com/modelstoreai/status/2097641178191827333)

- **奢侈品 SMM 海报组** — 社交媒体高端感排版与质感提示。 [@sebatheepan](https://x.com/sebatheepan) · [原帖](https://x.com/sebatheepan/status/2097607526753718428)

- **Art Deco Base Prompt** — 金线+深蓝+奶油纸，可替换 SUBJECT。 [@MrDasOnX](https://x.com/MrDasOnX) · [原帖](https://x.com/MrDasOnX/status/2097550067213504848)
  <details>
  <summary>查看 / 复制提示词</summary>

```
ChatGPT Images 2.5 is on another level. It doesn’t just generate an image, it actually captures the aesthetic you’re going for.

Base prompt: Square 1:1 Art Deco poster illustration, elegant gold and deep navy line work on warm cream paper, limited palette of terracotta, teal, and antique gold. Stylized geometric forms, sharp symmetry, radiating sunburst and fan motifs, clean flat shapes with subtle paper grain. Subject: [SUBJECT]. Timeless luxury graphic design, no photorealism, no 3D, no modern clothing or gadgets, museum-quality print look.
```

  </details>


## 人像角色

人像一致性、穿搭、UGC 写真与角色锁脸。

- **中文 iPhone 随手拍：网球日常 prompt** — 「像男朋友用 iPhone 随手拍」——随机动作、距离、瞬间，UGC 写真感直接抄。中文短 prompt 也能出片。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2098277846250922232)
  <details>
  <summary>查看 / 复制提示词</summary>

```
像男朋友用 iPhone 随手拍下的网球日常：年轻成年女孩，穿简洁网球服和球鞋；每次随机捕捉她不同的动作、当下发生的瞬间和拍摄距离，像两个人相处时偶然留下的真实照片。
```

  </details>

- **旧人设表用 Sunburst 一刷新：同物种两角色** — 将近一年前的 OC sheet 丢进 Sunburst 升级画质，同物种两角色仍锁设定。老资产翻新别重画，先过 2.5。 [@Jenny_MommaLion](https://x.com/Jenny_MommaLion) · [原帖](https://x.com/Jenny_MommaLion/status/2098276640451420223)

- **80s 宝莱坞时尚参考图：锁构图出片** — 上传参考当严格构图指南，复古钨丝灯 + 胶片颗粒。时尚/人设参考图可抄；must-keep 写得很死。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2098267933659300039)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a highly realistic cinematic 1980s Bollywood-inspired retro fashion portrait using the uploaded reference as the strict composition and styling guide. One attractive adult model with androgynous styling, natural South Asian features, realistic skin and slightly messy voluminous 80s hair.
Seated casually against a dark polished wooden table, leaning slightly toward the camera. One arm rests on the table while the other holds a vintage cream corded telephone receiver beside the ear. Relaxed editorial pose, direct eye contact, calm confident expression. Waist to mid-thigh framing.
Outfit: loose cream blouse/shirt with voluminous sleeves, high-waisted light-wash jeans, wide black leather belt with aged brass buckle, patterned navy/cream/gold silk scarf, minimal vintage jewelry.
Setting: warm vintage Indian bedroom/living room with dark wood furniture, glowing table lamp, plants, retro Bollywood posters, old cassette/VHS cases and cream rotary telephone base. Background softly blurred.
Warm tungsten lighting, golden-brown shadows, subtle hair rim light. Authentic 35mm film look, 50mm lens, shallow depth of field, soft contrast, faded blacks, natural skin tones, fine film grain, dust, scratches, halation, slight vignette and aged-film imperfections.
Photorealistic, sophisticated, nostalgic, intimate and editorial. Preserve the reference pose, camera angle, environment and overall composition. No modern objects, smartphones, logos, watermark, CGI, plastic skin, distorted anatomy, extra fingers, excessive HDR or oversaturated colors.
3:4 vertical Instagram portrait, high resolution, one person only.
```

  </details>

- **表情集实测：还是熟悉的「GPT 脸」** — 表情包能用，但别神话——横向一比仍是同质化 GPT 脸。角色一致性能交差，个性脸还得锁参考硬刚。 [@munou_ac](https://x.com/munou_ac) · [原帖](https://x.com/munou_ac/status/2098224166977806575)

- **传参考图说「出衣装资料图」几乎零 prompt** — 丢一张参考，一句「衣装资料图出して」——2.5 补全力离谱，设定图质感直接能进企划。少写 prompt 多甩参考。 [@1banana2546](https://x.com/1banana2546) · [原帖](https://x.com/1banana2546/status/2098222494175879235)

- **角色四视图 + 衣柜锁定** — 先用 2.5 做前/¾/侧/后角色表，再做场景时把服装钉死，连镜不换衣服；后面接视频模型更稳。 [@abxxai](https://x.com/abxxai) · [原帖](https://x.com/abxxai/status/2098061897702805800)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Multi-panel film character reference sheet of the same real woman across four panels: front-facing, three-quarter turn, full profile, and a rear view over the shoulder, matching the exact reference photo. Long straight golden-brown hair with warm honey balayage, oval face, warm brown eyes, faint natural freckling across the nose and cheeks, softly tanned olive-warm skin, full lips. She wears a heather-grey lace-trimmed tank top under a loosely draped grey knit cardigan slipping off one shoulder, low-slung olive cargo trousers with a black leather belt and chain detail, a black leather slouchy shoulder bag strap over one shoulder.

Every panel keeps the identical lighting setup as the reference: low golden-hour sun positioned behind her, burning through overhanging tree leaves and rim-lighting the edge of her hair with a warm halo, her face falling into soft warm shade with a gentle glow on the cheekbones, a tree-lined gravel park path and a glittering sun-struck lake with a small sailboat and distant hazy hills softly blurred behind her in every panel. Same warm golden color temperature, same sun flare quality breaking through the canopy, same soft background blur, same skin tone and light direction held constant across all four panels.

Shot on 35mm film, fine warm grain visible in both light and shadow, visible skin pores and natural texture, faint natural sheen where the sun catches, no smoothing, no retouching, no beauty filter, no studio backdrop, no neutral lighting. Natural film-still photograph quality, candid unposed stance in every panel.
```

  </details>

- **偷参考美学做真感写真** — 从参考图抽美学配方，再压成真感写真。UGC/种草人像流水线可抄。 [@sixugc](https://x.com/sixugc) · [原帖](https://x.com/sixugc/status/2098047399264469048)

- **一张静图当舞蹈参考，直接出片** — Image 2.5 做 dance reference 意外稳：上传一张就能跑成舞蹈视频，评论区有 prompt。短视频流水线可偷。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2098014577414033912)

- **课堂抓拍·反差穿搭老师** — 短 prompt 出 iPhone 纪实感人像，UGC/种草风很好用。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2097999860696072542)
  <details>
  <summary>查看 / 复制提示词</summary>

```
iPhone 课堂抓拍，女大学老师，时尚反差穿搭
```

  </details>

- **80s 复古写真锁脸** — 年代滤镜 + 身份锁定。做复古广告人像时，脸别跟着风格跑偏。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2097954772586557873)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an authentic 1980s retro-vintage portrait in a 4:5 vertical aspect ratio, using the provided person as the exact facial reference. Preserve their identity, facial structure, recognizable features, skin tone, and natural expression with high accuracy—do not alter or beautify the face.

Give the subject a classic 1980s hairstyle and stylish period-accurate fashion with bold silhouettes, authentic textures, and effortless vintage attitude. Compose the portrait naturally with a strong editorial feel, keeping the subject as the clear focal point.

Capture the image as if shot on a 35mm analog film camera, with realistic film grain, subtle dust and texture, gentle softness, natural skin detail, slight color fading, and authentic analog imperfections. Use warm nostalgic color grading, soft neon highlights, subtle ambient glow, and direct on-camera flash to create the distinctive look of an iconic 1980s photograph.

Keep the lighting cinematic yet believable, with soft shadows, realistic highlights, natural contrast, and a slightly imperfect film exposure. The final image should feel genuinely photographed in the 1980s—not digitally recreated, with a timeless, nostalgic, fashionable, and effortlessly cool atmosphere.
```

  </details>

- **巴黎街拍写真 prompt** — 街拍姿势/光位/服装分段可替换。UGC 人像与旅拍种草可直接改地名。 [@AIwithSarah_](https://x.com/AIwithSarah_) · [原帖](https://x.com/AIwithSarah_/status/2097952240707530923)

- **哥特 Lolita 完整中文 prompt** — 中文可复制人设配方，服装层次写细。角色卡/COS 种草少踩「衣服糊成一团」。 [@AIVideoHub_](https://x.com/AIVideoHub_) · [原帖](https://x.com/AIVideoHub_/status/2097951132031320484)
  <details>
  <summary>查看 / 复制提示词</summary>

```
近距离俯拍自拍 Cosplay 写真，9:16；18–22 岁、明确成年的漂亮东亚女性，约 1.75 米，精致五官，小头比例，冷白通透肌肤，高挑纤细模特身材，胸部视觉约自然 E 罩杯。白色齐刘海长发 × 侧边长马尾，哥特 Lolita 发饰搭配黑色小帽子；外穿风衣，内搭白衬衫与深色领带，下身可见黑色光腿神器与小皮鞋，酷感又精致。

🛏️ 卧室床边，床铺与浅色墙面背景干净，人物居中，半身近景，画面上下留白充足。浅景深、柔和朦胧光影、低饱和色调、轻微曝光，真实高清摄影质感，日常随拍氛围，面部细节真实，手部自然准确，肢体不穿插。

随机动作池：

🎀 坐在床边看向镜头，一手轻抓侧边长马尾
🖤 微微歪头托腮，另一手绕住马尾末端
🪞 身体微微前倾，抬眼看镜头，手指整理刘海
📖 坐在床沿低头整理领带，下一秒抬眼被抓拍
🫧 一手扶着床边，另一手轻拎马尾，神态安静冷感
✨ 侧身坐在床边，回头看镜头，长马尾垂落肩前
🌙 双腿自然并拢坐好，轻捏发尾，表情松弛疏离
🎩 抬手轻碰黑色小帽子，另一手自然落在腿侧

🎲 围绕不同动作自由发挥俯拍角度、自拍距离、马尾状态、领带细节、床边构图与朦胧光影，重点保持真人 Cosplay 质感、手部自然、脸部真实，追求哥特 Lolita × 日常卧室 × 高级随拍氛围。

出一张包含不同动作的综合预览图，让我从中选择。

#今日提示词 #GPT #IMAGE2.5
```

  </details>

- **Model sheet 身份锁：多角度同一人** — 角色表压住脸与体型，多视角不漂移。做 IP/表情包/游戏立绘流水线先抄这套。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2097949170594193427)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium professional character design reference sheet / production model sheet based strictly on the provided reference image.

REFERENCE & IDENTITY LOCK:
Use the uploaded reference as the single source of truth for the character's identity. Preserve the exact facial identity, facial structure, hairstyle, hairline, eye shape and color, eyebrows, nose, lips, skin tone, body proportions, physique, age appearance, distinctive features, costume design, accessories, footwear, colors, patterns and all recognizable visual details. Do not redesign, beautify, simplify, age, de-age, or reinterpret the character.
CHARACTER DESIGN ANALYSIS:
Before constructing the sheet, internally analyze and lock the character's:

facial construction
head-to-body ratio

body proportions

shoulder width and torso structure

limb length and joint placement

silhouette

hairstyle and hair volume

costume construction

accessory placement

color relationships

material characteristics

distinctive identity anchors

All subsequent views must represent the exact same character design.

PAGE FORMAT:
Create one sophisticated studio-grade character reference board, landscape 16:9, clean neutral/off-white studio background, refined editorial production-board aesthetic, highly organized hierarchy, generous spacing, subtle technical guide lines, restrained professional typography-style labels where appropriate, no decorative clutter.

01 — HERO CHARACTER PORTRAIT

Place one larger polished head-and-shoulders or three-quarter portrait as the visual identity anchor.
Show the character's canonical facial identity clearly with neutral professional expression and accurate hairstyle, skin, costume and accessories.

02 — FULL-BODY TURNAROUND

Create a clearly organized full-body turnaround showing the same character at identical scale and proportions:

FRONT VIEW

3/4 FRONT VIEW

SIDE PROFILE

3/4 BACK VIEW

BACK VIEW

Use a neutral standing pose with consistent posture and anatomical alignment.

Keep head height, eye line, shoulder line, waist, hips, knees and feet consistently aligned across every view.

The costume, hairstyle, accessories, seams, patterns, footwear and silhouette must remain identical from every angle.

03 — EXPRESSION STUDY

Include a clean expression grid containing approximately 6 expressions:

Neutral

Happy / subtle smile

Serious

Angry / determined

Surprised

Sad / emotional

Maintain the exact same facial identity, head proportions, hairstyle and facial construction in every expression.

Expressions should demonstrate believable facial acting rather than exaggerated deformation.

04 — SIGNATURE POSE STUDIES

Include 4–6 full-body pose studies that communicate the character's personality and physical behavior.

Use varied but believable poses such as:

relaxed standing

confident stance

walking

sitting

interacting with an object

dynamic signature pose

Maintain exact character proportions, costume construction and recognizable silhouette in every pose.

05 — COSTUME & DETAIL CALLOUTS

Add several clean close-up detail panels showing the most important design elements:

hairstyle / hair detail

face detail

collar / neckline

sleeves / garment construction

footwear

jewelry or accessories

distinctive emblem / pattern / texture

important prop if present

Show construction and material clearly without turning the sheet into a decorative fashion collage.

06 — MATERIAL STUDIES

Visually communicate the primary materials present in the design:

fabric, leather, metal, denim, silk, knit, plastic, glass, jewelry, hair, skin or other relevant materials.

Show realistic surface behavior, texture, reflectivity and construction appropriate to each material.

07 — COLOR PALETTE

Include a compact professional color palette strip containing the dominant character colors.

Organize colors according to their visual role:

skin

hair

primary costume

secondary costume

accent color

accessories / materials

Keep the palette faithful to the reference.

08 — PROPORTION & SILHOUETTE GUIDE

Include a subtle technical proportion guide beside the turnaround.

Show:

overall height

head-to-body ratio

major horizontal alignment guides

key body proportions

clean silhouette thumbnail

Keep this section understated and production-oriented.

09 — DESIGN CONTINUITY

Treat the entire page as a single canonical character source of truth.

Every panel must depict the SAME person/character with:

identical facial identity

identical body proportions

identical hairstyle

identical costume

identical accessory placement

identical color palette

identical design language

consistent left/right details

No accidental costume changes, missing accessories, duplicated accessories, altered facial features, changing body proportions, inconsistent hairstyles or unexplained design variations.

VISUAL DIRECTION:
High-end professional character design presentation, studio production reference quality, sophisticated concept-art discipline, clean polished rendering, precise construction, controlled neutral lighting, realistic material definition, excellent anatomical consistency, crisp readable details, refined editorial layout, premium art-direction quality.

The sheet should feel like an actual professional animation / game / visual-development production document, not a collection of random AI images.

COMPOSITION:
Clear information hierarchy, balanced negative space, aligned panels, consistent character scale, clean grid system, logical visual flow, no overlapping figures, no cropped bodies, no confusing perspective, no unnecessary scenery.

CAMERA / VIEW CONTROL:
Turnaround views should use consistent orthographic-like framing and neutral perspective. Expression studies should use a consistent head framing. Pose studies may use natural perspective while preserving character proportions.
LIGHTING:
Neutral studio illumination designed for design inspection rather than cinematic drama. Soft, even, physically believable light with controlled shadows and accurate material readability.

PHOTOGRAPHIC / RENDER FINISH:
Ultra-clean high-end visual development presentation, realistic surface detail, natural skin and hair rendering, physically believable materials, sharp but refined detail, professional production-board finish.

OUTPUT QUALITY:
16K: 15360 × 8640 ≈ 132.7 million pixels, high-resolution professional quality.
NEGATIVE CONSTRAINTS:
No character redesign, no identity drift, no inconsistent proportions, no changing face, no changing hairstyle, no costume variations, no missing accessories, no duplicated accessories, no extra limbs, no malformed hands, no distorted anatomy, no random props, no dramatic scenery, no cinematic background, no excessive effects, no clutter, no watermark, no logo, no cropped views.
```

  </details>

- **叠穿コーデ 全套可替换 prompt** — 日系叠穿长文配方，单品可拆换。电商穿搭图与小红书 OOTD 直接改货号。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2097937963523145829)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Photorealistic fashion portrait of a single adult woman, vertical 2:3, strongly person-dominant.

POSE AND LEG GEOMETRY:
Sit lengthwise on a deep storefront bench. Keep the pelvis toward frame-right and extend both lower legs forward along the seat toward frame-lower-left.
The knees stay close together and bent, but both ankles are placed well forward of the knees instead of tucked underneath them.
Keep the knees in front of the lap rather than pulled back against the chest.
Show long descending shin lines: each knee-to-ankle segment slopes approximately 25–35 degrees toward frame-left from image vertical.
Both feet rest fully on the bench top, with complete sole contact and visible seating surface beneath them. Keep the feet inside the seat perimeter rather than hanging over its front.
Preserve natural anatomy and the rounded knee bends; do not substitute completely straight legs.

ANATOMICAL LEFT/RIGHT LOCK:
Keep the anatomical left leg nearer the camera and on frame-right within the pair. Keep the anatomical right leg farther from the camera and on frame-left.
Both legs remain uncrossed. The left foot sits slightly farther forward, appearing slightly lower in the image.
Rest the anatomical right elbow on the right knee through a slight forward torso inclination. The right palm supports the right cheek.
Gently tilt the head toward anatomical right, with a calm direct gaze.
The anatomical left forearm drapes diagonally across the knees; the left hand rests along the anatomical right shin, fingers directed toward the right ankle.
Do not mirror, reverse, or exchange these relationships.

CAMERA AND COMPOSITION:
Full-frame camera with a 45mm rectilinear lens.
Camera height approximately 1.60 meters and horizontal distance approximately 1.90 meters from the hips.
Front-left-quarter viewpoint, approximately 35 degrees toward anatomical left from frontal. Photograph across the bench’s outer long side, not straight along the legs.
Downward pitch approximately 24 degrees; roll 0 degrees; optical axis near the waist.
Keep the bench running from lower-left foreground to upper-right background.
Include the full seated figure and both feet at approximately 86–90% of frame height.
Aperture f/5.6, shutter 1/320 sec, ISO 200. Focus on the eyes, with both lower-leg directions and sole-to-seat contacts clearly readable.

WARDROBE-VISIBILITY NON-OPTIMIZATION:
Do not modify knee bends, forward leg extension, foot contacts, arm positions, torso orientation, camera azimuth, height, pitch, focal length, crop, or scale to reveal clothing, footwear, accessories, graphics, or hardware. Preserve natural concealment and original detail placement. Do not rotate the feet for display. The setting must fit the pose.

BACKGROUND AND LIGHTING:
A seaside gelato-shop veranda with a deep wooden or painted bench, pale cream walls, airy coastal trim, a large shop window, and restrained glimpses of blue sky and greenery at the arcade edge. Keep the coastal setting secondary rather than opening into a landscape. Clean coastal daylight and soft sky fill illuminate the face. Background signs are fictional and unreadable.PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Wardrobe:

Hair — final selected state: HAIR GEOMETRY AUTHORITY — Every selected axis below replaces the source hair geometry only on that axis; retain source geometry only for axes explicitly set to Preserve.
TEXTURE CHECKSUM — Straight. Form continuous root-to-tip straight strands with natural body and no wave, curl, or coil pattern. At normal portrait scale, smooth straight strand direction with natural body must remain readable across multiple visible strand groups; one gravity or gathering arc is allowed, but repeating S-waves, ringlets, tight coils, and frizz are not. FRINGE — Keep the exact selected fringe visibly straight with natural body; do not add an S-wave, ringlet, or tight coil pattern to it; apply this to every selected-fringe strand without changing its roots, density, coverage, part, direction, route, or endpoint. MAIN HAIR — apply the same texture consistently to every declared visible hair-bearing cut-excluded section, the complete root-to-anchor scalp lead-in, and the arrangement's final visible tail, bun, twist, or other gathered mass. Texture changes strand path and surface relief only; keep the selected cut silhouette, fringe route, arrangement topology, and endpoints, create no hair merely to display texture, and never texture a shaved or scalp-close skin field. Reject a hybrid result in which only a terminal tail, bun, crest, panel edge, or endpoint carries the selected straight texture while another visible hair-bearing domain remains wavy, curly, coily, or frizzy. GATHERED LAYER CHECK — apply straight strand behavior through every scalp-following route, gathered section, braid, tail, bun, or twist surface; do not release reachable hair merely to display underlying layer endpoints.
CUT VISUAL TARGET — RELEASED SOURCE REFERENCE FOR FULL ARRANGEMENT — Medium layers: Length — collarbone perimeter; Front — shorter jaw-to-upper-neck layer endpoints; Side — intermediate shoulder-side endpoints; Rear — connected upper-neck-to-collarbone progression; Dominant perimeter weight — lower collarbone length remains visible; Layer topology — connected increasing layers with readable front, side and rear endpoints.
FULL ARRANGEMENT CUT VISIBILITY — The released cut geometry is not a competing final hairstyle. Hide every released endpoint belonging to arrangement-assigned hair inside the final gathered structure. Keep the exact selected fringe, selected face framing, every cut-specific arrangement-excluded zone, and every scalp-close or shaved field visible exactly as declared; never hide those retained zones merely because the arrangement mode is full.
ARRANGEMENT VISUAL TARGET — Mid ponytail: Final worn silhouette — exactly one full-volume tail emerging from one middle-occipital center-back anchor; Underlying cut priority — CUT VISUAL TARGET and Cut describe only the source strand lengths and layer topology when fully released before styling; this full arrangement controls the final visible silhouette, so no arrangement-assigned released endpoint may remain visible merely to display the cut, length, or texture; Arrangement mass priority — include every physically reachable arrangement-assigned strand in the declared structure; no reachable assigned hair may remain as an undeclared parallel loose mass; Loose-hair boundary — outside the final gathered structure permit only the exact selected fringe, the exact selected face-framing sections, only structural zones explicitly excluded by the cut-specific arrangement scope, only selected-cut layers genuinely unable to reach their required anchor or local braid pickup; Every exception must stay inside its declared rooted cut zone and must not recreate a duplicate loose version of arrangement-assigned hair, a parallel long curtain, or an undeclared second mass; Reject — a high top-knot, low nape anchor, second tail, loose underlayer, parallel rear curtain, or detached tail; Straight texture — permitted loose exceptions and gathered lead-ins remain straight, with no S-wave, curl, or rippled loose sheet.
Front sections: Fringe — Form a sparse airy fringe from fine separated strands across the forehead, keeping the eyebrows readable and avoiding one solid blunt edge. Keep all wispy strands on the forehead; none becomes a separate face-framing tendril. Face framing — Release exactly one narrow continuous section rooted at each temple and curve it beside the corresponding temple or cheek, ending no lower than the jaw within the selected haircut's available length; create no additional wisps. Keep every face-framing section outside the hair assigned to the Mid ponytail and independently rooted from its main routed structure. Root ownership — The fringe uses only the frontal hairline zone; selected face-framing uses one separate narrow temple-rooted band; all other roots remain in the main cut.
Preserve the natural hairline and exact source hair colors, including roots, highlights, lowlights, accents, and gradients; preserve all unselected hair attributes.
Cut: RELEASED SOURCE REFERENCE FOR FULL ARRANGEMENT — When released, form connected collarbone-length medium layers. Keep the longest lower perimeter at both collarbones; let shorter crown and upper-side layers end around the jaw and upper neck, then pass through intermediate shoulder-side and rear tips in one readable cascade into the collarbone edge. Preserve balanced crown lift, visible jaw-to-upper-neck and shoulder transitions, and a softly weighted collarbone perimeter in the front, sides, and rear. Do not flatten the cut into a one-length lob or turn it into a choppy shag, wolf cut, or pointed nape. Keep one naturally rooted haircut with no retained longer source underlayer, extension, wig edge, or duplicate hair mass.
Arrangement: Arrangement-assigned hair excludes the exact selected fringe and selected face-framing sections. For this varied-length cut, assign every arrangement-assigned strand within the geometry-declared source that can reach its corresponding declared hairstyle anchor from its own root; evaluate reachability to that anchor, not against the complete route or the final tail, braid, bun, or twist length. Keep only strands genuinely too short to reach their corresponding anchor at their selected rooted zones, without extending or reclassifying them; those exceptions must not recreate a duplicate loose version of arrangement-assigned hair, a parallel long curtain, or an undeclared second mass. Use all arrangement-assigned hair; draw both sides symmetrically backward along the scalp toward the middle occipital area. At the hairstyle anchor, use one center-back anchor halfway between the nape hairline and crown apex; let exactly one tail emerge continuously from that base. leave no other free side or back section; create no high top-knot, low nape anchor, second tail, loose underlayer, or detached tail. The route, anchor, result, free-section, and integrity clauses apply only to arrangement-assigned hair; keep every cut-excluded structural zone in the final haircut state declared above.
Measure the selected length on fully extended strands only to calculate underlying source mass and route reachability before gathering; do not compensate for wave, curl, or coil shrinkage when calculating that source mass; the full arrangement, not the released endpoints, controls the final visible silhouette.
Apply the selected texture within the declared arrangement; do not release gathered hair merely to display length or texture.

Outerwear / layers:

A relaxed hip-length black varsity jacket with a dense matte wool-blend body, dropped shoulders and full black leather sleeves with a supple, softly grained sheen. A low black rib-knit stand collar, ribbed cuffs and a broad ribbed waistband frame the boxy shape. Silver-tone snaps close the front, with a closely spaced lower pair at the waistband, and diagonal welt pockets sit at both sides. Small white cursive embroidery reading "Don" sits on the wearer's right chest. The left chest carries a compact white composition reading "THE" above "Rally" in flowing slanted script; the terminal stroke sweeps into a white underline ribbon containing black serif capitals reading "SPORTS CAFE", with a split pointed tail at the ribbon's left end. The same composition appears much larger across the upper back, surrounded by generous black space. Smooth black satin lining completes the interior.

Final worn state:
- Layering: Final state: keep this garment the complete outer layer over the second selected Top item; open only its original center-front fastening run within existing endpoints. Preserve source neckline, collar, front/rear panels, selected shoulder, sleeve, and body positions, plus fastening inventory, receiver mapping, order, spacing, endpoints, and placket length; add, remove, move, or extend nothing. FINAL FASTENING STATE: change only the source-registered primary closure mechanism inside its exact original endpoints. Preserve that mechanism, all original parts, its source length, and the garment construction beyond both endpoints; do not reinterpret a seam, fold, rib, placket, or panel edge as an extension, and add, duplicate, remove, or relocate nothing. Only layer order, contact, occlusion, and optical transmission change. Every visible garment boundary follows the outer item's source geometry or separately selected fold-return line; inner contours remain optically behind it. Keep panel contact shallow. Relaxed handling within this same operation: Use light stable contact and broader material-correct ease without changing the selected layer order.

Top:

An oversized long crew-neck pullover in thick, loosely knitted mohair-blend yarn with a soft shaggy halo and visible stockinette stitches. The straight relaxed body reaches the upper thighs, with dropped shoulders and roomy long sleeves. Ten broad horizontal bands alternate dark chocolate brown and ivory across the torso in approximately equal widths, starting with a brown band interrupted by the neckline and ending with ivory at the hem. The same stripe scale continues around the back and along the sleeves, with softly feathered color boundaries. A brown ribbed crew neck, ivory ribbed cuffs and a broad ivory ribbed hem finish the knit.

A relaxed long light-blue cotton-poplin shirt with a crisp pointed collar on a narrow stand and a full front placket of small pale buttons. The lightly structured woven fabric forms a roomy straight body, long sleeves with buttoned cuffs and a simple back yoke. Rounded shirttails reach the upper thighs, rising at the side seams, with the two front tails separating below the final button. The fabric is plain and smooth throughout.

Final worn state:
For the second item description above only:
- Front closure: Final state: within the original center-front fastening run, disconnect only its upper approximately one-third; keep every original below connected in place. Preserve the source count, type, order, spacing, endpoints, and placket length; never extend the run toward the hem or add, duplicate, remove, or relocate any fastening or receiver FINAL FASTENING STATE: every selected closed position is physically connected to its matching receiver; every selected open position is visibly disconnected, and panel overlap does not imitate a fastening. Preserve the source-defined fastening count, type, spacing, endpoints, and placket length; do not extend the fastening run or add, duplicate, remove, or relocate any fastening or receiver. Change only the selected registered state and leave every unselected component and connection unchanged.
- Layering: Final state: place this garment underneath the first selected Top item across the upper body. the first selected Top item remains the outer garment and retains and owns its exact source neckline aperture and edge, armholes, panel connectivity, closure state, straps, sleeves, and selected final hem or fold-return line. This inner garment contributes appearance only through the outer material's existing optical apertures; no inner contour becomes an outer boundary. Only layer order, contact, occlusion, and optical transmission change. Every visible garment boundary follows the outer item's source geometry or separately selected fold-return line; inner contours remain optically behind it. Keep panel contact shallow. Natural handling within this same operation: Use soft stable contact with limited material-correct ease.

Bottom: Low-rise, close-fitting black hot pants in glossy stretch faux leather, with a smooth contoured waistband, shaped front and back panels, a fitted crotch and very short legs. Narrow stitched hems curve upward at the outer hips and beneath the seat, while subtle seam lines shape the opaque body. A concealed side zipper closes the waistband, keeping the exterior clean and unembellished.

Footwear: A pair of black lace-up platform sock boots with close-fitting rib-knit shafts rising above the ankles and broad ribbed cuffs. The knit continues down the sides and across the vamp beneath smooth black leather-look toe surrounds, heel counters and curved lace facings. Round black laces cross through small loops over knitted tongues, and rear pull tabs assist entry. Rounded closed toes sit above extremely thick black molded soles with sweeping wave-like ridges, angular projecting side blocks, a recessed arch and deep segmented tread. Stretch collars, adjustable lacing and cushioned insoles complete the boots.

Necklace: A silver-tone necklace made from medium-sized rounded oval cable links with open centers and softly polished edges. The links alternate in angle to form a supple, moderately substantial chain that falls in a shallow U at the upper chest. A small rear lobster clasp and short matching extension complete the necklace, with no pendant.

Earrings: A pair of large silver-tone hoop earrings made from slender smooth round wire. The polished circular hoops have open centers and a light, undecorated profile, with small hinged posts closing discreetly at the earlobes.
```

  </details>

- **Flare/Sunburst × Seedance：UGC 广告流水线** — 静图出片再进短视频。一人团队做 UGC 投放素材的「图→片」衔接可抄。 [@tanabe_fragm](https://x.com/tanabe_fragm) · [原帖](https://x.com/tanabe_fragm/status/2097935536224866583)

- **同 prompt 炼狱角色一致性演示** — 同一套 prompt 换 Rengoku，成品干净，prompt 贴在下面。角色锁 / 二次元营销素材可抄。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2097900600105308347)

- **古代美人 8 步互动捏人 prompt** — 朝代→身材→气质→发式→服饰→妆容→场景→神态，少解释多状态保存。小红书/社群引流模板味很足。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2097897602356306361)
  <details>
  <summary>查看 / 复制提示词</summary>

```
你是一款互动式古代美人捏人游戏。通过8步决定人物核心特征，其余细节由AI补全。少解释，多互动，始终保存当前角色状态。

【流程】

①朝代 → ②身材 → ③气质 → ④发式 → ⑤服饰 → ⑥妆容 → ⑦场景 → ⑧神态 → 完成

严格按顺序，一次只展示一个项目。用户选择后立即保存并进入下一项，不询问“下一步”，不重复确认。开始时只展示①。

【选择界面】

每项6～10个选项。

使用紧凑视觉卡：视觉示例＋编号＋名称＋一句短解析。解析突出选项特点或视觉效果，尽量控制在10字以内。2～3列，一屏显示。

支持点击时优先点击；无法点击时使用编号或名称。

【捏人项目】

①朝代
先秦｜秦汉｜魏晋南北朝｜隋唐｜五代十国｜宋｜辽金元｜明｜清

②身材
娇小纤秀｜纤细柔婉｜自然匀称｜高挑修长｜柔婉丰润｜丰姿婀娜

③气质
清雅｜温婉｜明艳｜灵秀｜端庄｜妩媚｜清冷｜娇憨

④发式
根据朝代提供6～8种有历史依据的女性传统发式。

⑤服饰
根据朝代提供6～8种有文物、绘画、考古或文献依据的女性传统服饰形制。禁止现代新中式、泛中国风、影视架空服饰。

⑥妆容
根据朝代提供6～8种有历史依据的女性妆容。

⑦场景
根据朝代提供6～8种符合时代建筑、生活方式和社会环境的女性生活场景。

⑧神态
根据①～⑦已确定的全部设定，动态生成8种最符合当前人物、场景和情境的神态。

8种神态须有明显区别，避免重复、冲突和泛化。⑧不使用固定选项池。

【朝代联动】

④发式、⑤服饰、⑥妆容、⑦场景必须与①朝代一致。

辽金元需分别处理，不得混合三个时期。

修改①朝代，只重新处理④⑤⑥⑦；②③保持不变。

修改④～⑦任一项目后，检查后续项目是否与最新设定冲突，有冲突则重新处理；⑧始终根据最新①～⑦重新生成。

【状态与操作】

始终保存已选项目。

“随机”：随机当前项目，已锁定则无效。

“换一个”：重新提供当前项目选项，已锁定则无效。

“锁定”：锁定当前项目，限制随机、换一个和全部随机改变该项目。

“修改设定”：用户明确指定修改时，可以修改已锁定项目。

“返回”：回到上一项目并立即显示该项目，重新选择后继续向后推进，其他状态保留；若后续项目与最新设定冲突，则重新处理受影响项目，并重新生成⑧神态。

“全部随机”：随机所有未锁定项目，已锁定项目保持不变，从①开始；遇到已锁定项目直接保留并进入下一项。完成①～⑦后，根据最新设定重新生成⑧神态。

“重新捏人”：清空全部设定，从①开始。

支持直接说“换成明代”“发式换一个”“改成浅笑”等，根据语义执行。

【AI自动补全】

除8个捏人项目外，其余全部由AI自动完成，包括动作、手势、具体发饰、首饰、颜色、纹样、材质、鞋履、道具、环境、人物关系、构图、镜头、光影、时令、天气等。

时令：春｜夏｜秋｜冬
天气：晴｜阴｜薄雾｜细雨｜雪

所有自动补全必须符合人物、朝代、服饰、发式、妆容和场景。

【固定人物】

成年女性；身材自然；比例协调；真实肤质。

【固定摄影】

手机生活抓拍 × CCD直闪；9:16竖幅；原生数码照片。

摄影风格固定，不作为选择项目，不改变历史语境。

【完成】

完成⑧神态后，必须依次输出：

【完整角色设定】

①朝代：当前选择
②身材：当前选择
③气质：当前选择
④发式：当前选择
⑤服饰：当前选择
⑥妆容：当前选择
⑦场景：当前选择
⑧神态：当前选择

【最终图片提示词】

完整整合8项设定，并自动补全动作、手势、发饰、首饰、服装细节、颜色、纹样、材质、鞋履、道具、环境、人物关系、时令、天气、构图、镜头和光影。

保持历史一致性，并加入：

手机生活抓拍 × CCD直闪；9:16竖幅；原生数码照片。

最终提示词必须完整、连贯、可直接复制用于图片生成，不得只输出关键词或省略已选设定。

提示词最后加入：

左下签名“● DeepBlue”；“●”为纯 #0B3D91 深蓝色实心圆点，“DeepBlue”为白色自然手写字体

然后显示：

① 生成图片
② 修改设定
③ 重新捏人

【生成】

输入“1”“生成”或“出图”，立即根据最终图片提示词生成图片。

【修改】

输入“2”后指定项目并重新选择。

修改后重新输出完整角色设定和最终图片提示词，再显示①②③。

【重新捏人】

输入“3”或“重新捏人”，清空角色，从①开始。

【再来一个】

保留8项核心设定和固定摄影。

只重新演绎动作、环境、时令、天气、构图、镜头和光影。

不得改变8项核心设定或固定摄影。

生成新的最终图片提示词并立即生成。

【最终规则】

这是连续捏人游戏，不是普通问答。

一次一个项目；选择后立即推进；始终保存状态；朝代变化自动联动；修改④～⑦后检查后续一致性；⑧神态始终根据最新①～⑦动态生成；摄影固定；不得要求下一步；不得重复确认。

完成⑧后必须：

输出完整角色设定
→ 输出完整图片提示词
→ 显示①②③

不得跳过完整图片提示词。

点击不可用时，立即降级为编号或名称选择，不得中断流程。

现在开始，只展示①朝代。
```

  </details>

- **candid 写真分层 prompt（Higgsfield）** — 拆「真实夏日随拍」结构：关键不是堆细节，是分层对。适合 UGC / 社媒广告。 [@GrowWithDani](https://x.com/GrowWithDani) · [原帖](https://x.com/GrowWithDani/status/2097882770899091928)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a highly photorealistic candid lifestyle photograph of a young woman ordering something from a neighborhood ice cream truck on a bright sunny day.

OUTFIT REFERENCE:
Use the attached reference image as the authoritative wardrobe reference.

Accurately recreate the outfit shown in the attached reference image:

- loose mint/aqua and white horizontally striped short-sleeve top
- wide asymmetrical neckline
- relaxed off-the-shoulder fit exposing one shoulder
- soft lightweight casual fabric
- loose draping around the torso
- white wide-leg pants
- relaxed low-to-mid-rise fit
- clean white fabric with realistic folds and construction

For this half-body composition, show enough of the white pants around the waist and hips so the outfit combination is immediately recognizable.

IMPORTANT:
Use the attached image ONLY as a wardrobe reference.

Do NOT copy:
- the reference model's face
- identity
- skin tone
- hairstyle
- body identity
- pose
- handbag
- sneakers
- studio environment

SUBJECT:
A young woman with warm lightly tanned skin and dark brown hair styled in a neat high bun.

Natural facial features.
Subtle everyday makeup.
Large thin gold hoop earrings.
Natural realistic skin texture.

POSE AND ACTION:
She stands beside the open service window of a white neighborhood ice cream truck.

Her body is shown in a natural three-quarter side profile.

She leans slightly toward the service window.

One arm reaches upward and forward toward the open window as she receives or hands over cash.

Her other hand is held naturally around waist level.

Her head is turned slightly toward the service window.

The action should feel spontaneous and believable, as if someone casually photographed her while she was buying ice cream.

COMPOSITION:
Vertical HALF-BODY environmental photograph.

Frame approximately from the top of her head to the upper thighs.

The woman occupies the right-center portion of the frame.

The ice cream truck fills much of the left side and background.

The open service window should be clearly visible next to her.

Include enough of the environment to immediately communicate that she is ordering from an ice cream truck.

The mint-striped top and the waist/upper portion of the white pants must both be clearly visible.

Do NOT turn this into a close-up portrait.

CAMERA:
Casual handheld smartphone photograph.
Camera positioned slightly behind and to the side of the woman.
Natural three-quarter profile.
Approximately eye-level viewpoint.
Moderately wide smartphone perspective.
Realistic perspective distortion.
Deep enough focus for both the woman and nearby truck details to remain recognizable.

ENVIRONMENT:
White neighborhood ice cream truck parked along a sunny residential street.

Include:
- white truck exterior
- open sliding service window
- colorful illustrated frozen-treat menu panel
- shelves of brightly colored packaged snacks visible through the window
- small payment/service area
- asphalt pavement
- curb
- hints of parked vehicles and green trees farther behind

The truck should feel authentic, slightly worn and actively used.

Avoid prominent readable brand names or perfectly generated menu text.
Menu graphics may contain small indistinct decorative lettering and colorful ice-cream illustrations.

LIGHTING:
Strong natural midday sunlight.

Bright direct sun striking the woman and truck.
Crisp realistic shadows.
Strong highlights on exposed skin.
Natural sunlit hair highlights.
Bright white truck surfaces.
High contrast between direct sunlight and shaded areas around the service window.

No studio lighting.
No artificial rim light.

PHOTOGRAPHIC CHARACTER:
Authentic candid summer social-media photograph.

Highly photorealistic but NOT overly polished.

Natural skin texture.
Fine hair strands.
Realistic cotton fabric.
Accurate horizontal stripe deformation around folds.
Natural wrinkles in the white pants.
Realistic sunlight.
Slight smartphone sharpening.
Subtle sensor texture.
Minor exposure imperfections.
Natural dynamic range.

The result should feel like a spontaneous personal photo taken by a friend, NOT a fashion campaign or e-commerce image.

CONSTRAINTS:
The attached reference image controls ONLY the wardrobe.
Do not reproduce the reference model.
No handbag.
No studio background.
No catalog pose.
No full-body framing.
No excessive skin smoothing.
No plastic skin.
No exaggerated anatomy.
No distorted hands.
No extra fingers.
No duplicated limbs.
No CGI appearance.
No artificial bokeh.
No excessive HDR.
No prominent readable logos or generated text.

OUTPUT:
Vertical half-body photorealistic candid lifestyle photograph, framed from head to upper thighs, showing a brunette woman ordering from a white ice cream truck while accurately wearing the outfit from the attached wardrobe reference image.
```

  </details>

- **网球写真完整中文 prompt** — 动作姿态写实到能当 UGC 素材库，9:16 竖版可抄。 [@AIVideoHub_](https://x.com/AIVideoHub_) · [原帖](https://x.com/AIVideoHub_/status/2097878838063903217)
  <details>
  <summary>查看 / 复制提示词</summary>

```
室内网球写真抓拍，9:16；18–22 岁、明确成年的漂亮东亚女性，约 1.75 米，精致窄长鹅蛋脸，冷白透亮肌肤，高挑纤细模特身材。黑色超长直发，白色空顶帽带蝴蝶结，浅天蓝色细吊带运动背心 × 同色系多层荷叶短裙，白色网球拍，清新又有活力。

💙 专业蓝色硬地网球场，深蓝围挡，明亮柔和顶光，85mm 运动抓拍感。整体清新蓝白色调，人物全身完整入镜，偏侧颜、神情专注、嘴唇微张，皮肤、发丝、纱裙褶皱与球拍细节清晰，真实运动写真感。

随机动作池：

🎾 侧身弓步预备接球，双手握拍，目光紧盯侧方来球
💨 向左侧快速跨步，球拍前伸准备拦截
🩵 半蹲压低重心，双腿弯曲，准备反手接球
🏃🏻‍♀️ 接球前瞬间急停，长发与裙摆轻微扬起
✨ 双手持拍放在身前，身体前倾进入防守姿态
🌀 刚完成一次小碎步调整，回头锁定来球方向
🎯 单脚前踏、另一脚蹬地，球拍微抬，专注等待来球
🌬️ 低重心侧移，裙摆与碎发轻轻甩动，形成动态抓拍感

🎲 围绕不同动作自由发挥机位、弓步幅度、挥拍方向、发丝动态、裙摆层次与场馆光线，保持人体结构、手部握拍和运动姿态自然，追求网球少女 × 清新运动感 × 高级体育写真抓拍氛围。

出一张包含不同动作的综合预览图，让我从中选择。
```

  </details>

- **写真 UGC：先偷真照片颗粒/色调，再锁脸** — 无参考 = 假色假噪点假皮肤。广告素材/种草图抄这个就够锋利。 [@0x_harness](https://x.com/0x_harness) · [原帖](https://x.com/0x_harness/status/2097864879843746285)

- **璃月衣帽间极低机位自拍** — 9:16 超写实手机仰拍：奢华衣帽间 + 金玉腰链细节。社媒竖版人像的「自信不艳俗」配方。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2097860248640053693)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 竖版超写实智能手机自拍，一位明确成年的虚构动漫灵感东方女性，置身璃月意象的奢华私人衣帽间，雕花深木柜、玉石拉手、金属格栅与暖色灯带构成高级背景。手机位于接近地面的极低机位，以强烈仰拍捕捉她微微俯身整理腰间饰品的瞬间；身体正面偏左，头部轻轻侧倾，视线直接落向手机镜头，神情自信而克制。身穿象牙白与金色刺绣短款上衣、墨黑低腰阔腿裤，搭配翡翠腰链、精致腹部珠宝和小面积装饰性下腹纹样；金玉主题立体美甲清晰可见。丝绸、蕾丝、黄金与玉石材质真实，暖金主光配合青绿色轮廓光，电影级层次，轻微手机广角透视与自然镜面反射，高级网红社交媒体写实质感。服装完整稳妥，不过度裸露，不色情化；不使用任何角色姓名，不声称官方身份，不复刻特定角色面孔或标志。
```

  </details>

- **美人背唐风CG** — 9:16 唐风半身背影：镜面铜屏映侧脸、凤凰步摇与低饱和粉金光。人像海报/竖版封面直接抄光影逻辑。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2097859617359565266)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 竖版高级唐风 CG 人像海报，半身近景特写，电影级构图与空间透视。一位明确成年的东亚古典美人身体背向画面呈后三分之四方向，头部没有回看镜头，而是轻轻偏向右侧屏风；镜面铜屏中隐约映出她清冷的侧脸。她具有冷白真实肤质、微挑凤眼和自然胭脂唇，目光停留在镜中的凤冠流苏上，神态沉静、羞涩而克制。她穿雾粉色露肩披帛式唐风礼服，衣料沿肩背柔和垂落，领口不过分暴露，鎏金纹样集中在边缘；乌发高盘，头戴金色凤凰步摇冠，珍珠链沿耳侧摆动。一只手扶住冠饰，另一只手握着落在肩头的披帛。背景虚化为冷灰蓝宫墙与半透明纱屏，暖金主光从镜面左侧反射到脸部，冷色辅光照亮肩背，边缘光刻画发髻。85mm，f/2，浅景深、真实镜面逻辑、细腻颗粒和轻微辉光，低饱和粉金色调，典雅不艳俗。
```

  </details>

- **噪点×透明金属反光的多风格混剪** — Images 2.5 多风格混合质感：噪点被透明金属 + 反光包住；品牌视觉想玩材质差异可跟。 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO) · [原帖](https://x.com/ZHO_ZHO_ZHO/status/2097698044733276309)

- **高腰破洞烟管牛仔裤衣装 prompt** — 日文社区可改衣装模板片段。 [@sumeshino_moto](https://x.com/sumeshino_moto) · [原帖](https://x.com/sumeshino_moto/status/2097656994937319531)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【衣装プロンプト】例のデニムが出るかもしれないぴたぴたハイウエストデニムのコ〜デです

改変◎

full body,
(high waisted gray distressed jeans:1.3),
(figure hugging jeans:1.2),
hip-hugging, thigh-hugging,
fitted from waist to knees,
slim flare jeans, flared from the knees,
large thigh cutouts, ripped denim,
(oversized unisex off-shoulder top:1.25),
(premium streetwear sweatshirt:1.2),
clean drape, wide neckline, one shoulder exposed,
drop shoulder, long loose sleeves,
ribbed cuffs, clean hem,
(chunky black platform sneakers:1.3),
(thick platform sole:1.25),
lace-up sneakers, oversized sole,
```

  </details>

- **可互换长文衣装 Prompt 包** — Images 2.5 长文衣装再现性提升；PROTECTED WARDROBE RULE 模块化服装。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2097653761569423653)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【お洒落カッコイイ🖤】

Images 2.5のおかげで長文衣装プロンプトでも再現性が格段に上がった

カテゴリごとに交換可能な衣装プロンプトを配布中✨ 
生成環境：ChatGPT Images 2.5

#AIart️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️ #プロンプト

PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Wardrobe:

Outerwear / layers:

A waist-length hooded jacket with a roomy, softly rounded body and full-length voluminous sleeves, made in dense chestnut-blue gray faux fur. The lustrous pile forms small irregular swirls and rippling tufts, with slate gray depths between warmer blue gray fiber tips. A generous attached hood has a thick fur-covered rim and a center-back seam. A two-way silver-tone zipper closes the full front, while smooth blue gray lining covers the interior and hood. Blue gray rib-knit cuffs and a broad matching waistband draw in the plush shell; concealed side-seam pockets and a matching fur back complete the jacket.

Final worn state:
- Layering: Final state: keep this garment the complete outer layer over the selected Top item; open only its original center-front fastening run within existing endpoints. Preserve source neckline, collar, front/rear panels, selected shoulder, sleeve, and body positions, plus fastening inventory, receiver mapping, order, spacing, endpoints, and placket length; add, remove, move, or extend nothing. FINAL FASTENING STATE: change only the source-registered primary closure mechanism inside its exact original endpoints. Preserve that mechanism, all original parts, its source length, and the garment construction beyond both endpoints; do not reinterpret a seam, fold, rib, placket, or panel edge as an extension, and add, duplicate, remove, or relocate nothing. Only layer order, contact, occlusion, and optical transmission change. Every visible garment boundary follows the outer item's source geometry or separately selected fold-return line; inner contours remain optically behind it. Keep panel contact shallow. Relaxed handling within this same operation: Use light stable contact and broader material-correct ease without changing the selected layer order.

Top: A fitted black cardigan ending at the high hip, in fine, lightweight vertical rib knit with narrow semi-sheer channels between the ribs. Short fitted set-in sleeves and a matching ribbed back continue the close silhouette. A deep rounded V-neckline is framed by broad black floral lace, which continues down both edges of the full button front to the lower hem. Large flower heads, curling leaves and fine mesh fill the lace bands, with delicate eyelash loops extending from their free edges. Small black four-hole buttons close the front, and a narrow knitted hem finishes the body and sleeves.

Upper-body innerwear: A simple black stretch-jersey bandeau with a broad opaque band covering the bust, a gently curved upper edge and a straight lower edge ending above the waist. Soft matte fabric, discreet enclosed elastic along both edges and smooth side seams create a close, flexible fit, with a continuous plain back and no straps or visible hardware.

Bottom: A pair of full-length flared jeans in washed charcoal-black denim, with a low-to-mid-rise waist, fitted hips and thighs, and legs that narrow toward the knees before widening into broad bootcut hems. Soft gray fading runs over the front hips and thighs, with subtle whiskering beneath the waistband and fine vertical denim grain throughout. Muted tan-gray double topstitching defines the curved front pockets, coin pocket, fly and seams. Belt loops, a button-and-zip closure, a rear yoke, two plain rear patch pockets and flat stitched hems complete the five-pocket construction.

Footwear: A pair of black patent-leather shoes with long tapered toes ending in short squared tips, low side quarters and enclosed heels. Two separate glossy straps cross each open instep on a slight diagonal, each threaded through a silver-tone rectangular buckle on the outer side and punctuated by large round silver eyelets. The smooth pointed toe panels and patent side sections frame the open areas beneath and between the straps. Dark lining, slim black rubber soles with a lightly projecting beveled edge and low block heels complete the pair.

Bag:

A low, elongated shoulder bag in deep wine-brown leather with a glossy finish, subtle tonal variation and soft natural creasing. The supple body has gently rounded lower corners, shallow side and base gussets, piped perimeter seams and raised ends flanking a softly concave top opening. A fine gold-tone zipper follows the curved upper edge. One narrow matching leather shoulder strap has stitched edges, a small adjustment buckle and gold-tone circular rings with swivel-snap attachments at the bag ends. The rear is plain matching leather, and dark wine-colored textile lines the interior.

Final worn state:
VIEW-CONDITIONAL BODY-SIDE MAP: front view — wearer-left is image-right and wearer-right is image-left; back view — wearer-left is image-left and wearer-right is image-right. In profiles, crossed limbs, or ambiguity, trace the named anatomical side continuously from its corresponding shoulder, hip, eye, or ear landmark as applicable. Apply the state only to the named anatomical side; never mirror, swap, or duplicate it.
- Bag carry: Final state: the registered short strap bears weight from the wearer-left shoulder; the bag top sits directly beneath the wearer-left armpit against the wearer-left side torso. Both hands stay off; support never moves to the wearer-left forearm, elbow, wrist, or hand. Keep registered supports and components connected; allow contact and gravity-led ease only along the selected route. Natural handling within this same operation: Keep the selected support point exact while allowing limited natural contact variation and one small gravity-led angle.

Belt:

A broad black leather belt with a smooth, softly lustrous surface and clean edges, fastened by an oversized polished silver-tone buckle. The buckle forms an asymmetric swept D-shaped frame: a thick, rounded crescent broadens along the outer curve, with a second flowing ridge following its contour and tapering toward the strap attachment. A silver prong crosses the dark central opening to engage the belt holes. A matching black keeper and a rounded strap end complete the adjustable belt.

Final worn state:
- Belt placement: Place the complete belt horizontally around the outside of the selected Bottom item at the wearer's anatomical natural waist. Do not move it to the hips or ribcage; preserve the separately selected routing, buckle position, and tail treatment. Keep the selected position and fastening state; change only contact pressure and physically available ease. Natural handling within this same operation: Keep the registered fastening secure and use light stable contact with a small amount of material-correct ease distributed around the complete belt circuit.
- Buckle position: Center the single existing buckle on the wearer's anatomical front midline and fasten it using only its registered closure mechanism. For a frame-and-prong buckle only, pass the existing prong through exactly one existing hole and seat the strap against the frame; for a ratchet, clasp, plate, or automatic buckle, engage only its registered mechanism. Do not invent a hole, prong, or closure part, and preserve the separately selected height, routing, and tail treatment.

Eyewear:

A pair of slim black sunglasses with low, horizontally elongated rectangular lenses, softly rounded corners and a subtle lift at the outer edges. Glossy full rims surround smoky gray-brown lenses, joined by a narrow molded bridge with integral nose rests. The gently curved front connects through small hinges to slender tapered black temples with inward-curving ear tips. The frame is smooth and unornamented.

Final worn state:
- Eyewear placement: Final state: rest the open registered eyewear on the outer surface of the hair at the crown like a headband, with both lenses level and facing forward, the bridge centered on the head midline, and both temple arms open along the sides of the head. Do not place the eyewear on the face, neckline, chest, or garment.

Necklace: A delicate silver-tone necklace with a fine short chain and a compact openwork "Lune" pendant, with a tall serif L at the left and smaller joined lowercase u, n and e stepping gently across its lower half; the polished silver strokes merge at their contacts while preserving open letter interiors. Small connections at the ornament's opposite upper sides suspend it centrally, with a smooth flat reverse and clean polished edges. The chain closes behind the neck with a small lobster clasp and a short matching extension chain.

Navel piercing:

A silver-tone curved navel barbell with two clear round stones set vertically, a small upper stone and a larger lower stone. Smooth polished rims surround the faceted stones, joined by a short gently curved metal bar. A discreet screw-on upper terminal and rounded setting backs complete the piercing.

Final worn state:
- Piercing count and arrangement: Wear the navel piercing in a floating placement through the upper fold, keeping the flat inner end inside the hollow and only the outer decoration visible.
```

  </details>

- **同一角色 8 looks × 8 environments** — 一致性压力测试：一角色多造型多场景。 [@trendyvers](https://x.com/trendyvers) · [原帖](https://x.com/trendyvers/status/2097648721874096507)

- **四风格身份锁定** — 同一人设跨风格仍认得出，品牌 IP 友好。 [@MonetizationDon](https://x.com/MonetizationDon) · [原帖](https://x.com/MonetizationDon/status/2097609235395711007)

- **自定义 Emoji 风格迁移** — 把品牌表情包做成统一风格集。 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO) · [原帖](https://x.com/ZHO_ZHO_ZHO/status/2097592152113242550)

- **晶莹剔透美人像完整 prompt** — 比例约束很死的美妆竖版肖像。 [@johnAGI168](https://x.com/johnAGI168) · [原帖](https://x.com/johnAGI168/status/2097548765389258913)
  <details>
  <summary>查看 / 复制提示词</summary>

```
ChatGPT Images 2.5  晶莹剔透的人物质感🎨

prompt 👇

 A polished vertical beauty portrait of a petite Spanish woman seated beside a mint-green indoor pool. Preserve the exact delicate, soft, doll-like facial proportions described below. The character occupies approximately 80 percent of the frame, photographed from slightly above eye level, with the composition extending from the top of her hair to her covered lap.

She has a very small heart-shaped face with a narrow lower face, a softly tapered jawline, a short delicate chin, smooth understated cheekbones, a compact midface, and refined symmetrical features. Her eyes are exceptionally large, luminous, and slightly wide-set, with a rounded almond shape, pale gray-green irises, dark defined upper lash lines, softly extended outer eyeliner, fine lower lashes, and bright glassy catchlights. Her eyebrows are slim, softly arched, and light ash brown. She has a small straight nose with a narrow bridge and petite rounded tip. Her lips are small, softly full, and rose-pink, with a subtle relaxed closed-mouth smile.

Her complexion is pale warm ivory with a perfectly even, softly luminous beauty finish, delicate pink blush concentrated on the upper cheeks, and a smooth porcelain appearance. Her expression is gentle, dreamy, composed, and slightly playful. The facial proportions remain petite and delicate rather than angular or strongly sculpted.

Her hair is a shoulder-length platinum-blonde layered lob. The longest strands stop precisely at the collarbones. It has a deep side part, high soft volume at the crown, a broad swept section flowing across the forehead, champagne-blonde highlights on the upper layers, and cool smoky ash-gray undertones through the lower layers and feathered ends. One side rests over her shoulder while the opposite side fans outward through her raised hand. Silky straight texture, lightweight separated strands, softly curved ends, and gentle natural movement.

She has a slim, narrow-framed physique with a long graceful neck, gently sloping shoulders, slender arms, a compact torso, a narrow waist, and balanced feminine proportions.

She wears a vivid raspberry-red cropped camisole with a soft lightweight silhouette. The camisole has thin shoulder straps tied into neat ribbon bows, a low curved neckline edged with delicate lace, subtle floral lace across the center of the bust, a semi-transparent fine-mesh lower bodice, gentle ruching at the center, and several long raspberry drawstrings hanging vertically from a small front bow. The garment appears softly fitted and flexible rather than rigidly structured.

A high-waisted deep peacock-blue satin maxi skirt begins at her waist. The fabric has rich teal-blue highlights, smooth reflective folds, and a fluid drape. The long skirt flows continuously across her lap and completely covers her crossed legs.

She wears long ornate gold dangling earrings, a translucent pale-gray jade bangle, a dark red bead bracelet, a thin black elastic bracelet, and delicate metallic rings. A tiny metallic navel piercing is visible between the cropped top and the high-waisted skirt.

Recreate the pose precisely: she sits upright on the pale stone pool ledge with her torso facing almost directly toward the camera. Her shoulders remain relaxed. Her head tilts noticeably toward camera-left while her eyes look directly into the lens. The arm on camera-left crosses diagonally downward over her torso and rests softly across her covered lap. The arm on camera-right bends upward beside her shoulder; the wrist is relaxed and the fingertips lightly hold the ends of her outward-flowing hair. Her fingers are slender and naturally curved.

A clean modern indoor pool café forms the background. Mint-green illuminated water fills most of the middle background. A simple pale natural-wood counter spans the upper portion of the frame, with only a few softly blurred metallic drink containers, white vessels, stacked cups, and minimal dark café equipment. Plain warm-beige wall, uncluttered surfaces, no visible signage, no decorative writing, and no prominent background people. The background remains quiet, softly blurred, and secondary to the woman.

Soft frontal beauty lighting with gentle warm indoor illumination and a faint mint-green reflection from the pool. Bright, evenly exposed face, very soft shadow transitions, luminous eyes, delicate highlights along the pale hair, and restrained reflections on the satin skirt. Clean smartphone beauty-camera aesthetic with a subtle smoothing effect, gentle pastel color rendering, low contrast, and softly glowing skin.

Vertical 9:16 social-media portrait, slight high-angle viewpoint, medium portrait framing, natural 50mm-equivalent perspective, face positioned near the upper center, raised hand fully visible on camera-right, covered lap visible in the lower frame, moderate background separation, sharpest focus on the eyes and face.

High-fidelity photographic beauty portrait. Smooth luminous skin with extremely fine natural texture, subtle peach fuzz, gentle subsurface light on the cheeks and nose, and an even porcelain finish. Hair rendered as fine individual platinum and ash-gray strands with realistic transparency and soft movement. Fine mesh, lace, ribbons, jewelry, and satin rendered with accurate material detail. Realistic eyes with moist reflections and clear gray-green iris patterns. Accurate petite facial anatomy, slender hands, natural fingers, slim body proportions, soft fine grain, neutral-warm highlights, lightly cooled shadows, lifelike photography with the refined softness of a high-quality beauty-filtered social-media portrait.
```

  </details>

- **从 0 到 1 虚拟 IP 资产全流程** — 人物母版→五视图→表情/头像/封面/配图→换装街拍→PV，完整中文提示词可抄。自媒体品牌资产流水线。 [段老湿](https://mp.weixin.qq.com/s/UFjbirNe-R4tKwEFXllUuQ) · [playbook](docs/playbooks/virtual-ip-assets.md)


## 电商改图

商品图、局部编辑、包装与货架感。

- **产品罐 → 中文海报：保包装字再加氛围** — Sunburst 加茶叶气泡与中文标题，同时保住罐身品牌字/容量。改氛围与 must-stay 分开写——电商海报方向稿够用。 [@Soranlan](https://x.com/Soranlan) · [原帖](https://x.com/Soranlan/status/2098270386156970236)

- **改图系统 prompt：先写清改什么、保什么** — 把模糊改图意图翻成模型吃得懂的精确指令：change half + hold half。产品图/海报连续精修少跑偏，直接当编辑前置系统提示。 [@everestchris6](https://x.com/everestchris6) · [原帖](https://x.com/everestchris6/status/2098170415613137083)
  <details>
  <summary>查看 / 复制提示词</summary>

```
<role>
You write image edit instructions. Someone gives you an image and a
rough idea of what they want changed. You return the exact instruction
to send the model: what changes, and everything that must not.
Most bad edits are not caused by a weak request. They are caused by
nobody saying what to leave alone.
</role>

<rules>
<rule name="Two halves, always">
Every instruction has a change half and a hold half. The change half
names one thing. The hold half names everything in the frame that is
staying put. The hold half is usually longer, and it is the half that
decides whether the edit is usable.
</rule>

<rule name="Change one thing at a time">
If the request contains more than one change, split it into separate
sequential edits and return them in order. Stacked changes in a single
instruction come back with both done badly.
</rule>

<rule name="Read the frame first">
Look at the image and list what is actually in it: subject, wardrobe,
props, background, surfaces, light direction, shadows, reflections,
any text. That list is where the hold half comes from. Never write a
hold half from assumption.
</rule>

<rule name="Protect the subject by name">
When a person or product must survive the edit, describe them
specifically in the hold half rather than saying keep the subject.
Face, hair, pose, hands, label, colour, proportions. Vague protection
is not protection.
</rule>

<rule name="Light and shadow move together">
If the edit changes the environment, state whether the light on the
subject changes with it or stays as it is. Say which direction shadows
fall after the edit. Unspecified light is where edits fall apart.
</rule>

<rule name="Say what happens at the edges">
For anything involving removal, extension or background replacement,
state what fills the space and how it meets what is already there.
</rule>

<rule name="Text is exact or it is nonsense">
Any writing that stays, changes or appears must be given word for
word, with its position, size and type character. Text you do not
specify comes back garbled.
</rule>

<rule name="Output is the instruction">
Return the JSON and nothing else. No explanation, no preamble, no
code fences.
</rule>
</rules>

<schema>
{
  "reading": "what is in the current frame, listed plainly",
  "edits": [
    {
      "step": 1,
      "change": "the single thing being changed, stated concretely",
      "hold": "everything that must stay identical, named item by item",
      "light": "what happens to the light and which way shadows fall",
      "edges": "what fills any space that opens up, or none",
      "text": "exact wording, position, size and type, or none",
      "instruction": "the change and hold written as one sentence to send the model"
    }
  ],
  "sequence_note": "why the steps run in this order, or none"
}
</schema>

<task>
Wait for an image and a rough request. Reply with the JSON only.
</task>
```

  </details>

- **传单只改价格：线稿 22 秒出片 + 8 作例** — 日系营销血泪：别为改个价重做整张图。2.5 局部改价 + 手绘 rough 22 秒变传单，附 8 作例与可粘贴 prompt。 [@Charlie_no_site](https://x.com/Charlie_no_site) · [原帖](https://x.com/Charlie_no_site/status/2098155424440893702)

- **「ここだけ直す」局部改图指示集** — 日文保存版精准改图话术合集，比再发一篇 Flare/Sunburst 科普有用。电商/海报改细节直接抄指令。 [@noel_ai_lab](https://x.com/noel_ai_lab) · [原帖](https://x.com/noel_ai_lab/status/2098031783849648284)

- **Sunburst API 换光锁脸 / 产品** — 意文实务：换光照仍锁脸与产品主体。广告补光/棚拍替代很实用。 [@alepom](https://x.com/alepom) · [原帖](https://x.com/alepom/status/2097928991407546852)

- **密封盒 UGC → Omni 拆箱视频链路** — Image 2.5 做密封盒静帧 → Gemini Omni 推 10 秒拆箱，纸张/折痕/重量写进 prompt。电商假 UGC 配方。 [@ItsNazar17](https://x.com/ItsNazar17) · [原帖](https://x.com/ItsNazar17/status/2097914967295172794)

- **「把灯挪到右边」——精密局部编辑** — Higgsfield 上测 GPT-Image 2.5，一句指令改光源位置，局部编辑不是 PPT。 [@prompts_ig](https://x.com/prompts_ig) · [原帖](https://x.com/prompts_ig/status/2097858572319072601)

- **「只改文字」Before→After 实测** — 长文验证「图挺好、字想换」痛点改善多少；电商主图、海报改文案的人值得看。 [@dansyu_callenge](https://x.com/dansyu_callenge) · [原帖](https://x.com/dansyu_callenge/status/2097818810493685854)

- **披萨三选一：哪张没被 AI 改过？** — 编辑质量鉴宝局：看配料接缝/阴影/桌布纹理。互动玩法 + 编辑能力证明，适合小红书/视频号挑战模板。 [@midsusnight](https://x.com/midsusnight) · [原帖](https://x.com/midsusnight/status/2097702225707511823)

- **定点改图：修图师 briefing 模板** — 专治「改一处整图重画」：只改指定处、保脸/Logo/文字；营销改细节最省事。 [@alex_prompter](https://x.com/alex_prompter) · [原帖](https://x.com/alex_prompter/status/2097660049921659014)
  <details>
  <summary>查看 / 复制提示词</summary>

```
You are my retoucher using ChatGPT Images 2.5.

The photo: [what it is and who's in it]
The one change I want: [describe it]
What must not change: [faces, logo, background, text, anything]

Before generating, restate the change in one line and list what you'll leave untouched. Then make the edit.

Then give me:

The edited image
What you changed, one line
What you kept, one line
The exact prompt to paste next time for the same edit on a different photo

Rules: one change per turn, never regenerate the whole image when I asked for a part, and if the change would alter a face, a logo, or text, stop and ask first.
```

  </details>

- **马克杯局部改色/改价：编辑精度实测** — Web 版连续编辑 vs Image-2，附文章。 [@taku41477996](https://x.com/taku41477996) · [原帖](https://x.com/taku41477996/status/2097652949560480117)

- **亚马逊主图点选改** — 电商点编辑：改标签、改背景、不重抽主体。 [@Passenger0522](https://x.com/Passenger0522) · [原帖](https://x.com/Passenger0522/status/2097594649846444370)


## 场景视觉

场景、长卷、视频工作流与氛围大图。

- **2.5 插画 → Blender 可运镜 3D** — Image 2.5 插画经 Higgsfield 插件进 Blender，保风格纹理还能运镜改机位。平面资产升级空间场景的捷径。 [@adilinthewild](https://x.com/adilinthewild) · [原帖](https://x.com/adilinthewild/status/2098245333180723513)

- **品牌 DNA × Flare/Sunburst：1985 上线脑洞** — 先吃进 BrandKit，再问「如果 BrandGen 1985 年上线会怎样」——品牌一致营销图的正确打开方式，不是单图 prompt。 [@BrandGen_AI](https://x.com/BrandGen_AI) · [原帖](https://x.com/BrandGen_AI/status/2098034801265824087)

- **国家地标拼成 3D 微缩地图（可换国家）** — 可替换 [COUNTRY] 的模板 prompt：国界用地标拼成微缩模型。旅游/文旅 KV 秒开脑洞。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2097996229582147939)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a unique 3D miniature [COUNTRY] where the entire national border is formed from its most iconic landmarks and cultural symbols. Arrange famous buildings, monuments, bridges, mountains, temples, towers, traditional architecture, trees, and other recognizable elements so their silhouettes collectively create the accurate outline of the country. Keep the interior mostly clean and minimal, with [CITY] represented by its signature landmark at the correct location. Use layered sculpted forms, tiny architectural details, soft shadows, handcrafted textures, warm ivory background, and elegant studio lighting. Premium collectible travel-diorama aesthetic, playful but sophisticated, highly recognizable. Add small refined typography: “[COUNTRY]” and “[CITY] • [FAMOUS FOR]”.
```

  </details>

- **奢侈品布料动物 2×2** — 短 prompt：按时尚屋签名面料重绘动物网格（16:9）。创意广告脑暴与品牌联名视觉很香。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2097981153760116975)

- **30 秒短片流水线：Flare→PixVerse→MiniMax** — Flare 出图 → PixVerse Canvas → MiniMax 视频 → ElevenMusic，一人团队概念片现成配方。 [@lukmanfebrianto](https://x.com/lukmanfebrianto) · [原帖](https://x.com/lukmanfebrianto/status/2097874955488972897)

- **手办经典测图** — 每出新模型必测的 1/7 手办桌面场景：透明底座 + 屏上 ZBrush + BANDAI 包装盒。2.5 直出质感直接能当选品样张。 [@cnyzgkc](https://x.com/cnyzgkc) · [原帖](https://x.com/cnyzgkc/status/2097868249392390473)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the model to create a 1/7 scale commercialized figure of the character in the illustration, in a reaalistic style and environment. Place the figure on a computer desk, using a circular transparent acrylic base without any text. On the computer screen, display the ZBrush modeling process of the figure. Next to the computer screen, place a BANDAI-style toy packaging box printed with the original artwork.
```

  </details>

- **Astra×Image2.5 拼贴流水线** — 逐片生成 → PS 拼 → AE 动起来；社媒拼贴 / 情绪板类内容批产。 [@higgsfield_ai](https://x.com/higgsfield_ai) · [原帖](https://x.com/higgsfield_ai/status/2097860770210152638)

- **超现实写实 one-liner** — 一句神 prompt：最写实地画最超现实的东西。Sunburst + Firefly Boards 直出，灵感测图必备。 [@icreatelife](https://x.com/icreatelife) · [原帖](https://x.com/icreatelife/status/2097860435366048106)
  <details>
  <summary>查看 / 复制提示词</summary>

```
create the most realistic possible image of the most surreal thing you can imagine
```

  </details>

- **橘子微缩小人** — 剥开的橘子变成透光穹顶洞穴，2cm 小人住进果肉。透射光 + Vision3 胶片逻辑，微缩场景天花板。 [@JohnnyWang8802](https://x.com/JohnnyWang8802) · [原帖](https://x.com/JohnnyWang8802/status/2097800514633429315)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Macro cinematic photography inside a peeled tangerine resting on a dark stone surface. The peel folds outward like petals, forming a cave. Overhead, the citrus segments arch into a translucent orange dome, while the white pith reads like pale plaster.
Three figures, each about two centimeters tall, inhabit the cave: one lies on a citrus segment as if it were a bed; one climbs upward along the white pith ridge between two segments as if it were a staircase; one stands at the cave entrance looking out into darkness. A single tangerine seed lies on the ground, scaled like a massive millstone. Every membrane layer and every individual juice vesicle is fully resolved.
A single low-angle sun is positioned behind the fruit and is the only light source, producing true transmitted light through the citrus flesh. The orange brightness of the dome must come from light physically passing through the fruit itself, not from any artificial glow effect. Individual juice vesicles illuminate one by one in transmission, while thicker pith appears as darker veins. The cave floor is illuminated only by this transmitted light. Outside the cave entrance is completely black. No fill light.
Anamorphic 2.39:1, anamorphic lens with macro adapter, f/4. Sparse defocused light points outside the cave appear as vertically oval bokeh with subtle horizontal anamorphic stretch. Deep focus, focus stacked.
Kodak Vision3 500T motion picture negative, tungsten white balance, warm saturated transmitted orange highlights with deep cyan shadows. Black Pro-Mist 1/4. Strong transmitted-light edges along the thinnest parts of the fruit show visible red halation.
Overall exposure reduced by one stop. The darkness outside the cave remains truly black. Fine film grain, more visible in the shadows. No digital sharpening, no HDR, no orange-and-teal grading, no lens-flare effects, no artificial glow, no CGI plastic texture.
```

  </details>

- **枫叶点水 Prompt1** — 半透明金叶点触暗水面，脉纹里开粉花。Flare 氛围大图，竖版奇幻场景一键出片。 [@churvikv](https://x.com/churvikv) · [原帖](https://x.com/churvikv/status/2097784050660376617)
  <details>
  <summary>查看 / 复制提示词</summary>

```
An enchanting and surreal digital art piece featuring a translucent, golden maple leaf hovering magically above the surface of calm, dark water. The leaf glows from within with a warm, ethereal light, its delicate veins clearly visible. Inside the translucent structure of the leaf, tiny, vibrant pink flowers and closed buds are embedded, appearing to bloom within its very veins. The tips of the leaf are edged with a sparkling, golden glitter that drifts into the air like magic dust. The leaf's stem extends downward, just touching the water's surface, creating concentric ripples that spread outward. Below the water, a reflection of the glowing leaf and stem is faintly visible. The background is a dreamy twilight forest with silhouetted pine trees against a soft, gradient sky of purple, orange, and blue. Several pink water lilies float on the dark water, adding to the serene and magical atmosphere.
```

  </details>

- **Image 2.5 + Seedance 写实视频工作流** — 拆解+提示词全摊开：写实 AI 视频不是一键出片，种草长文/短视频可直接抄流程。 [@abxxai](https://x.com/abxxai) · [原帖](https://x.com/abxxai/status/2097698694296686623)

- **创意设计公司中文官网 9:16 长截图** — 见造官网视觉：导航到页脚完整中文界面，几何拼贴+人像。 [@listudio](https://x.com/listudio) · [原帖](https://x.com/listudio/status/2097652659788619894)
  <details>
  <summary>查看 / 复制提示词</summary>

```
#AIArt #AIgirl
Prompt  ➡️ http://genvizu.com. 
GPT Image 2.5 is insane！
----
提示语· prompt ⬇️

请使用网页版当前最新的 GPT Image 2.5 生图能力直接生成图片，不要仅返回提示词。

生成一张完整的创意设计公司中文官网视觉设计图，正面平视、无透视的桌面网页长截图，9:16 竖幅，尽可能高分辨率，完整显示从导航到页脚。白底，钴蓝、明黄、珊瑚红和浅天蓝配色，细窄留白、整齐网格、直角卡片、大胆斜切几何拼贴。整体年轻、明快、有设计实验感。

顶部为纤细白色导航栏，左侧原创中文粗体字标“见造”，小标语“以创意，让世界更有趣”。右侧导航依次为“关于我们、创意服务、精选作品、加入我们、最新动态”，最右是蓝色“联系我们 →”按钮。

首屏占全图约 27%，左侧以非常醒目的钴蓝粗黑体排两行“让有趣，”“改变世界。”，左下小字“以自由的想象，连接人与品牌，让每一个好点子，成为真实的改变。”右侧是一名明确成年的 20 岁中国女性，黑色齐肩发被微风吹动，自然淡妆，真实皮肤，微仰头望向右上方。穿钴蓝棉麻立领短袖上衣，简洁斜襟与少量同色盘扣，合身但不紧绷。人物与蓝色立方体、黄色球体、珊瑚红圆环、白色几何台座组合，背景浅蓝天空，明亮自然日光，材质和投影可信。

首屏下方白色理念横栏占约 8%，左侧小字“我们的理念”，中间黑色粗标题“用创意，为社会留出想象。”，右侧正文“我们相信，好的设计不止解决问题，也让人与世界产生新的连接。”及“了解见造 →”。

服务区占约 16%，左侧窄栏标题“创意服务”、简短介绍和“查看全部服务 →”；右侧三张等宽卡片：蓝底卡片以手持灯泡摄影配“品牌创意”，黄底卡片以彩色几何积木配“传播设计”，珊瑚红底卡片以打开的笔记本电脑配“数字体验”。每张卡片下方有两行简短中文介绍和右箭头。

作品区占约 17%，左侧标题“精选作品”和“查看全部作品 →”，右侧四列平面作品缩略图，分别为有彩色颜料点缀的 20 岁中国女性肖像海报、城市几何装置海报、蓝白红编辑设计、山野艺术装置海报。四个项目名称依次为“自在生长”“城市游乐场”“灵感发生地”“山野之间”，缩略图中的可见文字也全部使用中文。

招聘区占约 18%，整幅钴蓝横栏，左侧白色大标题“和有趣的人，一起创造新风景。”，正文“让热爱成为日常，让灵感自由生长。”及白底按钮“查看开放职位 →”。右侧三名明确成年的 20 岁中国女性坐在黄色与珊瑚红几何台阶上自然交流，分别穿蓝色立领上衣、米白棉麻衬衫、浅黄色简约针织上衣，搭配宽松长裤与干净平底鞋，黑色长发或齐肩短发，自然淡妆，青春、自信、亲切，非古装、非职业套装、无夸张饰品。

下方约 6% 为白底“最新动态”栏，三行消息为“2026.09.09 见造全新品牌网站正式上线”“2026.09.08 城市游乐场创意计划发布”“2026.09.01 秋季创意伙伴招募开启”。最后约 8% 为简洁页脚，中文“见造”、导航和“© 2026 见造创意。保留所有权利。”，留出舒适下边距。所有界面文案为可读、准确的简体中文，标题与正文层级鲜明。无日文、无乱码、无第三方标志、无水印、无浏览器边框、无设备外壳。输出一张完整网页设计图。

----
More Prompt  ➡️ http://genvizu.com.
```

  </details>

- **Pinterest → /detailed-image-2-text-prompt** — 参考图反推提示词流程。 [@sven_ai](https://x.com/sven_ai) · [原帖](https://x.com/sven_ai/status/2097651464093282720)
  <details>
  <summary>查看 / 复制提示词</summary>

```
/detailed-image-2-text-prompt
```

  </details>

- **等距国家微缩模型 diorama（可换国家）** — 2.5 vs 2 对照；回复里给出完整 isometric prompt。 [@abxxai](https://x.com/abxxai) · [原帖](https://x.com/abxxai/status/2097651231569399814)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Prompt and images credits @TechieBySA

Simply replace [COUNTRY]:✨

“Ultra-detailed photorealistic isometric miniature scale-model diorama of [COUNTRY], floating on a pure off-white studio background with a soft drop shadow beneath. The diorama takes the exact real-world silhouette shape of the country — not a square tile, but the true precise geographic outline of the country's borders and coastline, extruded downward into a thick slab of raw rock and earth with rough natural cliff-like edges, like a chunk of the real land physically cut out and lifted. The shape of the slab matches the country's actual geography precisely, including any islands, peninsulas or coastline indentations.

The entire top surface faithfully recreates the country's real geography and terrain: mountain ranges with correct elevation and snow coverage, rivers in their real positions, major forests and plains, deserts, coastlines with beaches and cliffs. Every major city is visible as a dense urban cluster in its correct geographic position. The country's most iconic landmarks are rendered in accurate positions and to recognizable scale. Terrain elevation is fully physically modeled — mountain ranges rise dramatically, valleys are sunken, plains are flat, creating real varied 3D topography across the entire surface.

Dense micro-detail: individual buildings in city clusters, tiny roads and highways connecting settlements, railways, bridges, harbors with boats, agricultural field patterns in rural areas, individual trees and forest coverage. Every region has its correct landscape character — the terrain of the north looks different from the south.

Style: hyper-realistic tilt-shift miniature photography — extremely sharp, everything in focus across the whole surface, no blur. Soft warm daylight from above, gentle diffuse shadows, rich natural colors. Lush greens, snow-capped peaks, golden plains, deep blue water along the coastline.

Layout: the shaped diorama floats centered in the lower two-thirds of the frame with clear margins on all sides, never touching the frame edges. Upper third is empty off-white space with minimalist editorial typography, centered: small wide-tracked caps with the continent or region name at the very top, then directly below [COUNTRY] in a bold condensed sans-serif in medium charcoal grey — large and dominant, the biggest text element — with a small flat rectangular flag of [COUNTRY] sitting immediately to the right of the country name, vertically centered with it, accurately colored and proportioned, clean flat design, sized to roughly the cap-height of the country name, floating naturally beside the name as one cohesive unit, not pushed to the far edge but sitting close and attached to the right end of the country name text. Then small wide-tracked caps below with the capital city and population.

Minimalist editorial poster aesthetic, premium print quality, 4:5 aspect ratio.”
```

  </details>

- **手机实拍 + 七轮改房仍一致** — 室内场景多轮编辑，家具与透视不崩。 [@exploraX_](https://x.com/exploraX_) · [原帖](https://x.com/exploraX_/status/2097637713784476152)

- **模块化美食病毒图** — 可拼装的食品视觉模板，适合短视频封面。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2097620275940737326)
  <details>
  <summary>查看 / 复制提示词</summary>

```
GPT Image 2.5. A modular prompt for food shots. It's not my favorite structure but fun experiment. 

2x2 grid, 16:9, do this for 4 clever viral subjects: INPUT ::= PERSONA_SEED + CUISINE_LANE + FRAME_TYPE    TASTE_1 :: read the cuisine  - what the cooking does to the room: wok steam, flour dust, smoke curl, citrus mist  - the hero texture of this lane: pull, crackle, drip, char, lamination  - honest kitchen evidence: sauce-splashed stove, stained apron, knife mid-board  - hands tell the résumé: small burn scars, practiced grip, flour in the nail beds    TASTE_2 :: read the frame type  - POV hands = 35mm overhead-diagonal, persona's hands + forearms only, dish 60% of frame  - portrait-with-dish = 50mm, persona mid-laugh or mid-taste, dish lifted into shared focus  - tablescape = 24mm slightly high, persona reaching in from the edge, abundance sprawl    APPETITE :: physics of delicious  - steam needs backlight to exist — place the window or lamp behind the food  - glisten on fats, matte on breads, condensation on cold glass  - controlled mess: a torn edge, a drip caught mid-run; sterile plates kill hunger  - persona's reaction is the seasoning: eyes on the food, never on the camera    STAGE :: warm frame  - 4:5, shallow depth (f/2.2), warm-neutral grade, no orange oversaturation  - kitchen or table is mid-use, not styled dead  - the unforgettable feature survives the crop even in the POV hands variant    BAR :: the viewer's mouth reacts before their brain does, and the hands could plausibly have cooked this for ten years
```

  </details>

- **10 条 Control / Astra 向 Prompt** — 控制向提示合集，控构图、控风格。 [@vinsonleow](https://x.com/vinsonleow) · [原帖](https://x.com/vinsonleow/status/2097592608583471184)
  <details>
  <summary>查看 / 复制提示词</summary>

```
The biggest change with ChatGPT Images 2.5 isn’t quality.
It’s control.

10 Images 2.5 × Astra prompts that change how you generate graphics (full prompts included) ↓

1. The multi-reference merge.
“Image 1 = identity. Image 2 = clothing. Image 3 = environment. Image 4 = composition. Use each only for its assigned role. Combine into one coherent photorealistic scene.”

2. Lock the master.
“This image is the approved master. Treat every visible attribute as locked unless I explicitly name it. For future edits, change only the requested variable and preserve everything else.”

3. Surgical edit.
“Change ONLY [ELEMENT/REGION]. Match existing anatomy, materials, lighting, and perspective. Do not modify anything else.”

4. Product → full campaign.
“Treat image 1 as the immutable product reference. Preserve exact geometry, materials, colors, and branding. Place it in [SCENE]. Change only environment, lighting, and camera.”

5. Controlled A/B testing.
“Create [N] variants of this creative. Preserve product, composition, typography, and lighting. Change ONLY [VARIABLE]. Everything else stays locked.”

6. Reformat without cropping.
“Recompose this exact image for [ASPECT RATIO]. Do not simply crop it. Preserve the subject and visual hierarchy while intelligently extending and rearranging the scene.”

7. UI → campaign asset.
“Treat the uploaded UI as locked artwork. Do not redesign it. Place it accurately inside a premium [DEVICE/CAMPAIGN] scene with realistic lighting, reflections, and negative space.”

8. Artwork → merch.
“Treat image 1 as the exact artwork. Preserve composition and colors. Apply it realistically to [PRODUCT], following folds, texture, and print behavior. Do not redesign it.”

9. Storyboard continuity.
“Treat this image as the canonical character, wardrobe, and location. Generate the next shot: [SHOT]. Change only camera, framing, and pose. Preserve everything else.”

10. E-commerce cleanup.
“Preserve the product exactly. Remove the environment and isolate it on [BACKGROUND/TRANSPARENT]. Repair only edge details for a clean catalog image. Do not alter color, branding, or proportions.”
```

  </details>

- **3D RPG 打光模板** — 游戏感灯光与材质描述，可抄进资产管线。 [@underwoodxie96](https://x.com/underwoodxie96) · [原帖](https://x.com/underwoodxie96/status/2097587863139537262)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Please capture a realistic screenshot from a fictional next-generation 3D open-world romance RPG, presented from the male protagonist’s first-person perspective.  On the beach, Morrigan Aensland from Darkstalkers invites the protagonist to help her apply sunscreen.  The overall visual style must feature high-quality cartoon-rendered 3D characters combined with Unreal Engine 5-level graphics, achieving AAA-quality visual fidelity. It should include ultra-detailed character modeling, realistic skin shading, cinematic lighting, PBR materials, high-precision clothing textures, and finely rendered classroom environments. The final image must look like an actual playable game screenshot, including a complete game user interface: minimap, quest display, character status bars, interaction prompts, dialogue subtitles, HUD elements, and more.
```

  </details>

- **Pinterest → 细颗粒 Prompt 配方** — 从灵感图反推可控描述，营销素材生产线。 [@Acemation_](https://x.com/Acemation_) · [原帖](https://x.com/Acemation_/status/2097586179835400667)

- **Leaf Dancer 纸艺叶裙 9:16** — 植物纸艺舞女竖版，完整一句 prompt。 [@unrealpixels](https://x.com/unrealpixels) · [原帖](https://x.com/unrealpixels/status/2097564822984626347)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Leaf Dancer Beneath a Paper Parasol | GPT Image 2.5

Prompt: A vertical 9:16 botanical paper artwork on textured charcoal ground shows a slender paper woman in profile with a black high bun and an open ivory parasol. Her long gown consists of layered golden dried leaves with delicate veins and tiny ivory blossoms. The full parasol occupies the upper right and the sweeping leaf train flows to the lower left, framed with breathing room. Soft directional light reveals raised paper edges and delicate contact shadows.
```

  </details>


## 像素动效

像素、精灵表与动效向玩法。

- **静帧 + 配音 → Seedance，换人设不重剪** — 2.5 出首帧、配音另做，丢进 Seedance 2.5 成片后再换角色——同一套剪辑不用重来。短视频人设 A/B 测的正经流水线。 [@meetshukla_](https://x.com/meetshukla_) · [原帖](https://x.com/meetshukla_/status/2098280866459861176)

- **2.5 静帧 → Seedance 粤语麻将短片** — Image 2.5 出参考帧 + Seedance 2.5 配粤语旁白。噪点还在，但遵从度与审美上去了——方言短视频可抄这条管线。 [@creator_kachun](https://x.com/creator_kachun) · [原帖](https://x.com/creator_kachun/status/2098266658205004027)

- **舞蹈参考图 → Seedance 动画** — 2.5 先出舞蹈参考姿，再丢 Seedance 2.5 动起来。短视频角色舞素材流水线，prompt 在回复栏。 [@renoiseaijp](https://x.com/renoiseaijp) · [原帖](https://x.com/renoiseaijp/status/2098255433249288323)

- **纯 Images 2.5 直接出 GIF（没用 Astra）** — 角色动起来的轻量玩法，社媒素材试水不绑视频管线。动效入口比想象更低。 [@MNesuka](https://x.com/MNesuka) · [原帖](https://x.com/MNesuka/status/2098165367944458488)

- **GIF 配方写死：1:1 · 16 帧 · 12fps** — API max+4K 出精灵表再动起来。短营销动图模板，别再猜帧数。 [@Voxyz_ai](https://x.com/Voxyz_ai) · [原帖](https://x.com/Voxyz_ai/status/2098063955096633467)

- **任意梗图 → 5×5 像素精灵表 prompt** — 把 meme / 角色图压成 5×5 sprite sheet，prompt 可抄。表情包/游戏素材量产另一条路。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2098049016596729942)

- **开源翻页动画：手绘起始帧 → 连贯序列** — OSS flipbook：起始帧进 GPT-image 2.5 出序列，原画忠度比别家稳。附可玩 demo + 流程拆解。 [@hot_town](https://x.com/hot_town) · [原帖](https://x.com/hot_town/status/2098038563094806955)

- **16-bit 犯罪短片：Flare + MiniMax 流水线** — Flare 出图 + MiniMax H3 Max 出片 + CapCut：像素风不当游戏贴图，硬做电影叙事。一人团队内容形态参考。 [@Danzeronero](https://x.com/Danzeronero) · [原帖](https://x.com/Danzeronero/status/2098014623803052533)

- **手绘草稿直接出 GIF（中文 prompt）** — Sketch 草稿 → GPT Image 2.5 → 动图，中文提示词齐活。营销 demo / 教程最省事的一条。 [@xiaohua_888](https://x.com/xiaohua_888) · [原帖](https://x.com/xiaohua_888/status/2098005078422835608)

- **4×4 像素精灵表（prompt 在评论）** — GPT Image 2.5 出完整 sprite sheet，评论区有 prompt。游戏资产/表情包管线一眼能抄。 [@MUsman7808](https://x.com/MUsman7808) · [原帖](https://x.com/MUsman7808/status/2098002527170277885)

- **单图 → 16 姿势 → Seedance 舞蹈片** — Image 2.5 出 16 pose，再丢 Seedance 做成舞蹈序列，prompt 在帖里。角色 UGC / 短视频素材流水线可直接抄。 [@renoiseai](https://x.com/renoiseai) · [原帖](https://x.com/renoiseai/status/2097958941070430477)

- **96 帧鹈鹕骑车定格动画** — Images 2.5 逐帧生 96 张拼成 8 秒定格。不靠视频模型也能出片，短视频选题很香。 [@yunxi0623](https://x.com/yunxi0623) · [原帖](https://x.com/yunxi0623/status/2097926023069519960)

- **角色 → 4×4 战斗精灵表 → GIF** — Seedream 出人设，Image 2.5 压透明 4×4 精灵表，再拆帧成 GIF。游戏素材/小红书动图流水线可抄。 [@AI_VideoLab](https://x.com/AI_VideoLab) · [原帖](https://x.com/AI_VideoLab/status/2097924471655162025)

- **4×4 combat sprite → 干净 GIF** — 在 AIReel 上用 Image 2.5 把精灵表直接变成可播 GIF，prompt 在帖里。游戏素材流水线可参考。 [@AIReelofficial](https://x.com/AIReelofficial) · [原帖](https://x.com/AIReelofficial/status/2097902132682715547)

- **4×4像素战斗图→GIF** — 上传角色图生成 16 帧 Sprite Sheet，拆格播放就成像素 GIF。攻击/跳跃/翻滚全包，小游戏预告与表情包一锅端。 [@derek_wall90176](https://x.com/derek_wall90176) · [原帖](https://x.com/derek_wall90176/status/2097863751471157498)
  <details>
  <summary>查看 / 复制提示词</summary>

```
上传图1作为角色身份与服装的唯一参考。

将图1角色转化为高质量2D像素游戏角色，生成一张正方形、4×4等分排列、共16帧的连续动作Sprite Sheet。

每格尺寸完全一致。画面按从左到右、从上到下的顺序播放。

严格保留角色的脸型、发型、体型、服装配色、标志性配件与武器结构。16帧使用相同的像素比例、角色尺寸、朝向和色板。

角色完成一次【挥剑攻击／跳跃／翻滚／施法／扑击】动作。

第1至3帧为待机与蓄力；第4至7帧为重心移动和动作展开；第8至10帧完成主要攻击与力量释放；第11至13帧表现惯性和收势；第14至16帧回到待机状态。第16帧与第1帧能够自然衔接。

相邻帧只改变完成动作所需的关节、轮廓、衣摆、头发和武器位置。动作方向、受力关系和运动轨迹保持连续。

所有格子保持相同机位、角色缩放、脚底基线和画面中心。角色完整显示，不裁切头部、武器、尾巴或特效。

背景优先使用透明通道。透明背景不稳定时，改用统一纯色背景，方便后期抠图。不要生成场景、地面纹理、格线、编号和文字。

采用清晰硬边像素、有限色板和统一像素密度。禁止模糊边缘、抗锯齿、半写实渲染、重复帧、跳帧、角色变形、服装变化、武器增减、视角切换和每格重新构图。
```

  </details>

- **任意角色→4×4战斗像素精灵表** — 角色参考压成 combat sprite sheet（测了炭治郎），prompt 在 thread；游戏素材 / meme 模板一键量产。 [@andytng28](https://x.com/andytng28) · [原帖](https://x.com/andytng28/status/2097701567042609236)

- **定格动画：一帧 12 姿态** — 单图塞满关键姿势，停格流程可抄。 [@Lucas_IA_](https://x.com/Lucas_IA_) · [原帖](https://x.com/Lucas_IA_/status/2097640115409469657)

- **黑猫 vs 老鼠 Sprite 循环** — 循环动作帧，角色动画 demo。 [@Agonyframe](https://x.com/Agonyframe) · [原帖](https://x.com/Agonyframe/status/2097639113415631121)

- **像素对战 GIF** — 像素战斗动画向，适合小游戏预告。 [@Re7_AI](https://x.com/Re7_AI) · [原帖](https://x.com/Re7_AI/status/2097595058757500947)

- **4×4 Sprite Sheet** — 一图导出精灵表，游戏原型直接用。 [@HitPawCreators](https://x.com/HitPawCreators) · [原帖](https://x.com/HitPawCreators/status/2097584582367527358)

- **定格 vs Nano Banana** — 停格质感横向对比，选型参考。 [@ekcheungAI](https://x.com/ekcheungAI) · [原帖](https://x.com/ekcheungAI/status/2097565834931548309)


## UX产品

产品 UI / UX 视觉与落地页 mock。

- **选 Flare/Sunburst 到精准改图：中文操作手册** — 从选型到局部编辑一整套中文长文，一人团队当日可用的操作底稿，比刷样张管用。 [@Smartpigai](https://x.com/Smartpigai) · [原帖](https://x.com/Smartpigai/status/2098002213193011481)

- **小互：2.5 提示词与图像编辑完全指南** — 局部编辑、多图合成、角色一致性、工程交付一条龙；海报/漫画/UI 都覆盖。比刷十个「惊艳样张」管用。 [@xiaohu](https://x.com/xiaohu) · [原帖](https://x.com/xiaohu/status/2097943386145866108)

- **《玩转 ChatGPT Image 2.5》中文长文** — 新功能和新玩法收成一篇，适合当内容底稿或转发二次创作。 [@Re7_AI](https://x.com/Re7_AI) · [原帖](https://x.com/Re7_AI/status/2097888443770782019)

- **设计系统 → Astra 上线流水线** — Images 2.5 出设计系统 + PC/手机 UI，再丢给 Codex（GPT-6 Astra）按色值与行为规格实现。一人公司做站的正经配方。 [@shota7180](https://x.com/shota7180) · [原帖](https://x.com/shota7180/status/2097882934699278547)

- **蒙德里安杂物柜** — 把《红、蓝、黄的构成》拉成桌面收纳柜：色块=抽屉、分割线=柜体。耳机橡皮各归其格，产品展示图三栏可抄。 [@cellinlab](https://x.com/cellinlab) · [原帖](https://x.com/cellinlab/status/2097875217100296362)
  <details>
  <summary>查看 / 复制提示词</summary>

```
生成一张16:9横版桌面设计展示图。左侧放蒙德里安《红、蓝、黄的构成》的画作参考，中间是桌面收纳柜的正面网格与透视铅笔草图，右侧是使用效果。柜体采用象牙白涂装木材，粗黑色分隔条形成不对称矩形网格，红色大抽屉、蓝色小抽屉、黄色小抽屉与白色格子共同组成正面。红色抽屉拉开，里面放耳机与卷好的线；黄色抽屉略微拉开，露出橡皮。抽屉必须有真实侧壁、厚度和内部空间，并与各自格口对齐。表现涂装木材细纹、接触阴影和桌面使用痕迹，自然侧光。草图与柜体布局一致，不加文字、Logo或URL。
```

  </details>

- **蒙娜丽莎眼镜架** — 古典胸像 × 现代黑框眼镜的桌面产品：鼻托镜腿落点要对死。文创周边/落地页 mock 反差感拉满。 [@cellinlab](https://x.com/cellinlab) · [原帖](https://x.com/cellinlab/status/2097871439072543175)
  <details>
  <summary>查看 / 复制提示词</summary>

```
生成一张16:9横版桌面设计展示图。左侧是《蒙娜丽莎》的画作参考，中间是同款胸像眼镜架的正面与侧面铅笔草图，右侧是放在浅橡木桌上的使用效果。胸像保留蒙娜丽莎的长发、神秘微笑、衣褶和交叠双手，采用做旧铜质与暗棕色表面，底座宽而稳定。一副真实的现代黑色厚框透明眼镜架在她的鼻梁上，镜腿自然延伸到耳侧，眼睛透过镜片可见。表现镜片反射、镜框小螺丝与铜像细微磨损。旁边放眼镜布和笔记本电脑一角，自然窗光。草图与物件一致，不加文字、Logo或URL。
```

  </details>

- **把收尾提示词命名成自定义指令** — 抑制噪点/收尾套路存成名字，下次只加名字。 [@sktGT1016](https://x.com/sktGT1016) · [原帖](https://x.com/sktGT1016/status/2097656459584831885)

- **Flare 等待游戏 UX** — 生成等待时的交互彩蛋，产品体验向笔记。 [@EchoraContinuum](https://x.com/EchoraContinuum) · [原帖](https://x.com/EchoraContinuum/status/2097625779509379502)

## 收录说明

- **自动同步：** 工作日 10:10 / 14:10 / 18:10 / 21:10 会把小时 digest 里的高信号玩法合并进本仓库（有新才推；空转安静）。小时聊天推送 ≠ 自动入库。

- 优先收录：可抄工作流、硬对比、Sketch→成片、营销向素材配方。
- 跳过：纯新闻搬运、硬广、无图无方的空喊。
- 型号提醒：Images 2.5 ≠ Images 2.0 / gpt-image-2。
- 欢迎 PR：见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 相关链接

- 本站 Pages：https://xianyu110.github.io/awesome-gpt-image2.5/
- 国内指南：https://xianyu110.github.io/gptimage2.5/
- Awesome GPT-6 Astra：https://xianyu110.github.io/awesome-gpt-6-astra/
- OpenAI Images 2.5：https://openai.com/index/introducing-chatgpt-images-2-5/

## License

CC0 / public domain contribution style where applicable; original posts remain © their authors. See [LICENSE](./LICENSE).
