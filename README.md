# Awesome GPT Image 2.5

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://xianyu110.github.io/awesome-gpt-image2.5/)

> ChatGPT Images 2.5 / GPT-Image-2.5（Flare · Sunburst）社区好玩用法精选。每条附原帖；偏一人团队、营销素材、可抄工作流。

维护：MaynorAI / [@xianyu110](https://github.com/xianyu110) · 整理日期：2026-09-10 · **收录 129 条**

配套：[Images 2.5 国内指南](https://github.com/xianyu110/gptimage2.5)（[Pages](https://xianyu110.github.io/gptimage2.5/)）· 姊妹清单 [awesome-gpt-6-astra](https://github.com/xianyu110/awesome-gpt-6-astra)

---

## 先分清型号

| 型号 | 一句话 | 适合 |
| --- | --- | --- |
| **Flare** | 快、便宜、赶量原型 | 批量草稿、社媒试错、先出图再迭代 |
| **Sunburst** | 更慢一点、质量更高 | 抠细节、文字排版、最终成稿 |
| Images 2.0 / gpt-image-2 | 上一世代 | ≠ Images 2.5，别混着买、混着评 |

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

六套从社区案例抽象出来的可抄工作流（站点页：[skills.html](./skills.html)）。按场景选一条跑即可。

| Skill | 一句话 | 适用 |
| --- | --- | --- |
| **Sketch 控形出片** | @Sketch 控形 → Flare 草稿 → 评论改 → Sunburst 终稿 | 要控构图/布局，或「不会画画也想出图」「先草图再精修」。 |
| **Flare / Sunburst 选型打分** | 冻结 3 个真实任务 + must-stay，打分选型，别靠玄学 | 纠结 Flare 还是 Sunburst，或要做横评/报价话术。 |
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

- **Flare / Sunburst 体感速度其实差不多** — 高质慢 vs 快但糙：实测速度差没想象大；API 走 Sunburst low 往往更香。一人团队选型直接抄作业。 [@makaneko_AI](https://x.com/makaneko_AI) · [原帖](https://x.com/makaneko_AI/status/2097958688321634471)
- **CreativeBench 拉满 60 任务** — Flare/Sunburst 丢进 11 个真实创意流程（产品图到多步改图）。不是又一篇「感觉很强」，是可点开的工作流打分板。 [@KristiKumrija](https://x.com/KristiKumrija) · [原帖](https://x.com/KristiKumrija/status/2097958307633795351)
- **同 prompt 三模型拆招：Banana / Image 2 / 2.5** — 不盯谁赢，盯构图、文字、细节、遵从度哪块会崩。选型比「一句话冠军」更有用。 [@hotmer_alan](https://x.com/hotmer_alan) · [原帖](https://x.com/hotmer_alan/status/2097958537284751416)
- **指令锁死比拼：2.5 赢 Banana Pro** — 同套 stop-motion prompt（土壤占比、花心坐标、叶片数量全写死）对打。做精确分镜的人该存：听指令比好看更值钱。 [@ekcheungAI](https://x.com/ekcheungAI) · [原帖](https://x.com/ekcheungAI/status/2097943789704720820)
- **OpenAI 官方 8 条 Prompt 清单** — 用途→分段→材质光线→限制，收成可抄公式；顺带提醒赶量 Flare、抠画质 Sunburst。出广告图前先过一遍少翻车。 [@WEEXAILabs](https://x.com/WEEXAILabs) · [原帖](https://x.com/WEEXAILabs/status/2097970522961350954)
- **日文实务：Flare/Sunburst 同价 API 差分** — 同价位下 Flare vs Sunburst 差分写清楚。报价/选型别再靠「感觉贵一点就更好」。 [@rsensui](https://x.com/rsensui) · [原帖](https://x.com/rsensui/status/2097989282116042813)
- **投放静图四件套：Flare / Sunburst / 锁参考 / 局部改** — 付费社媒静态广告拆成四块工作流。量产用 Flare，终稿 Sunburst，参考锁 + focused edit 控漂移。 [@learnbyIsmail](https://x.com/learnbyIsmail) · [原帖](https://x.com/learnbyIsmail/status/2097977460403130371)
- **2.5 vs 2.0 视频硬对比** — 动态对照比静态截图更有说服力。写升级值不值、做社媒 demo 直接甩。 [@kr0der](https://x.com/kr0der) · [原帖](https://x.com/kr0der/status/2097963498273988784)
- **ZenMux 上 Flare / Sunburst 怎么选** — 聚合入口里两型号怎么分流。赶量 vs 终稿，别混着点。 [@SuperByteSpace](https://x.com/SuperByteSpace) · [原帖](https://x.com/SuperByteSpace/status/2097962843757006979)
- **Sunburst 四轮保真：越改越稳？** — 多轮编辑下身份/构图是否还在。要做长会话改图，先看这组保真实测。 [@GuliMoreno](https://x.com/GuliMoreno) · [原帖](https://x.com/GuliMoreno/status/2097961051476164612)
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

## Sketch

Sketch 工作流演示：控形、打光、画框布局与容错。

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

- **麦当劳双层芝士堡 × 4 种电影级广告风** — 完整 Prompt 可拆。食品/消费品要「高端感物料」时，直接换品类槽位。 [@Caika_app](https://x.com/Caika_app) · [原帖](https://x.com/Caika_app/status/2097954546152857796)
- **Apple 级手机海报，可复制 prompt** — 产品海报直出，prompt 可抄。做数码/3C 种草封面时省半小时磨词。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2097978468642480487)
- **奢华婚礼请柬 mockup + 完整 prompt** — 请柬/喜帖排版系统可拆，换名字日期就能出样。婚礼赛道与高端印刷预览很香。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2097977120441925720)
- **旅行海报 [CITY, COUNTRY] 丝网印刷模板** — 本地建筑元素的 mid-century 丝网印刷风海报配方，带成片。做目的地/活动 KV 直接换槽。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2097920025617399875)
- **香水奢品 10 格分镜 storyboard** — 电影感产品分镜 + 干净网格，直接可改成你自己的品类广告故事板。 [@Strength04_X](https://x.com/Strength04_X) · [原帖](https://x.com/Strength04_X/status/2097919290980921451)
- **IG 旅游广告 [LOCATION] 可替换模板** — 4:5 竖屏 + 手机导航锚点构图，换地名就能出一波 scroll-stopping 海报。出海投放直接改。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2097890291860865291)
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

- **从 0 到 1 虚拟 IP 资产全流程（含完整提示词）** — 人物→五视图→表情头像→封面配图→换装街拍→PV。自媒体一人团队直接抄。 [段老湿](https://mp.weixin.qq.com/s/UFjbirNe-R4tKwEFXllUuQ) · [完整 playbook](docs/playbooks/virtual-ip-assets.md)
  <details>
  <summary>查看 / 复制提示词（五视图摘录）</summary>

```
一张单人物角色参考设定图，纯净白色无缝摄影棚背景，横向排布为五个区域，区域之间保留干净白色留白。
前四个区域展示同一位年轻成年东亚女性的完整转面：正面、三分之四侧面、纯侧面、背面。所有视图必须是同一个人、相同发型、相同服装、相同身体比例，保持自然放松的中性站姿，双臂自然垂落身体两侧，双脚自然并拢，重心稳定。
第五个区域为同一人物的大尺寸正面脸部特写，直视镜头，表情安静自然，嘴唇轻微放松，清楚展示发型、妆容和面部细节。
上传的照片同时作为人物的面部身份、发型、妆容、身体比例和服装造型参考。
整张图片不要任何文字：不要视图名称、标题、编号、Logo、水印或说明文字。
```

完整全流程提示词见 [playbook](docs/playbooks/virtual-ip-assets.md)。

  </details>
- **80s 复古写真锁脸** — 年代滤镜 + 身份锁定。做复古广告人像时，脸别跟着风格跑偏。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2097954772586557873)
- **巴黎街拍写真 prompt** — 街拍姿势/光位/服装分段可替换。UGC 人像与旅拍种草可直接改地名。 [@AIwithSarah_](https://x.com/AIwithSarah_) · [原帖](https://x.com/AIwithSarah_/status/2097952240707530923)
- **哥特 Lolita 完整中文 prompt** — 中文可复制人设配方，服装层次写细。角色卡/COS 种草少踩「衣服糊成一团」。 [@AIVideoHub_](https://x.com/AIVideoHub_) · [原帖](https://x.com/AIVideoHub_/status/2097951132031320484)
- **Model sheet 身份锁：多角度同一人** — 角色表压住脸与体型，多视角不漂移。做 IP/表情包/游戏立绘流水线先抄这套。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2097949170594193427)
- **叠穿コーデ 全套可替换 prompt** — 日系叠穿长文配方，单品可拆换。电商穿搭图与小红书 OOTD 直接改货号。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2097937963523145829)
- **Flare/Sunburst × Seedance：UGC 广告流水线** — 静图出片再进短视频。一人团队做 UGC 投放素材的「图→片」衔接可抄。 [@tanabe_fragm](https://x.com/tanabe_fragm) · [原帖](https://x.com/tanabe_fragm/status/2097935536224866583)
- **同 prompt 炼狱角色一致性演示** — 同一套 prompt 换 Rengoku，成品干净，prompt 贴在下面。角色锁 / 二次元营销素材可抄。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2097900600105308347)
- **古代美人 8 步互动捏人 prompt** — 朝代→身材→气质→发式→服饰→妆容→场景→神态，少解释多状态保存。小红书/社群引流模板味很足。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2097897602356306361)
- **candid 写真分层 prompt（Higgsfield）** — 拆「真实夏日随拍」结构：关键不是堆细节，是分层对。适合 UGC / 社媒广告。 [@GrowWithDani](https://x.com/GrowWithDani) · [原帖](https://x.com/GrowWithDani/status/2097882770899091928)
- **网球写真完整中文 prompt** — 动作姿态写实到能当 UGC 素材库，9:16 竖版可抄。 [@AIVideoHub_](https://x.com/AIVideoHub_) · [原帖](https://x.com/AIVideoHub_/status/2097878838063903217)
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

## 电商改图

商品图、局部编辑、包装与货架感。

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
- **10 条 Control / Astra 向 Prompt** — 控制向提示合集，控构图、控风格。 [@vinsonleow](https://x.com/vinsonleow) · [原帖](https://x.com/vinsonleow/status/2097592608583471184)
- **3D RPG 打光模板** — 游戏感灯光与材质描述，可抄进资产管线。 [@underwoodxie96](https://x.com/underwoodxie96) · [原帖](https://x.com/underwoodxie96/status/2097587863139537262)
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
<!-- pages-rebuild: virtual-ip-assets -->
