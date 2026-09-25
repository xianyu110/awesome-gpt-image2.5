# Awesome GPT Image 2.5

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://xianyu110.github.io/awesome-gpt-image2.5/)

> ChatGPT Images 2.5 / GPT-Image-2.5（Flare · Sunburst）社区好玩用法精选。每条附原帖；偏一人团队、营销素材、可抄工作流。

维护：MaynorAI / [@xianyu110](https://github.com/xianyu110) · 整理日期：2026-09-25 · **收录 672 条**

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

- **TASTE BENCH：Sunburst 广告质量 7.38，首稿可投放仅 54.2%** — Omneky 用同一套 59 条 brief×四品牌×五语言盲测八模型：GPT Image 2.5 Sunburst 均分最高 7.38/10，但首稿可直接投放只有 54.2%。选型别只看分——广告可跑通才是终审。 [@omneky](https://x.com/omneky) · [原帖](https://x.com/omneky/status/2103352139838071038) · [Taste Bench](https://www.omneky.com/tastebench)

- **黑白少年JUMP武士：硬提示词压力测试 vs Grok Imagine 2.0** — 同一条解剖级武士 manga prompt 甩给 Images 2.5 与 Grok Imagine 2.0——十指/刀线/网点/透视全锁死。硬对比别再比「好看」，先拿这种压力测试当选型尺子。 [@Oxebube](https://x.com/Oxebube) · [原帖](https://x.com/Oxebube/status/2103350277298430135)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a black and white Shonen Jump-style manga panel of ONE samurai, full body head-to-toe in a dynamic lunging mid-strike pose at the exact millisecond of katana impact, low-angle cinematic perspective with extreme foreground-to-background depth, single perfectly straight katana fully drawn with both hands gripping the tsuka with 10 anatomically correct distinct fingers, dramatic speed lines converging precisely to the kissaki tip, heavy cross-hatching for shadows and authentic screentone dot textures on ground, clothing and background, hair and kimono fabric reacting naturally to forward momentum, intense contorted kiai battle shout expression, detailed armor plates with visible hamon line and realistic fabric folds, ultra high-contrast inkwork with clean variable line weight in Takehiko Inoue Vagabond style, keep anatomy, sword geometry, perspective, motion and lighting fully consistent with no extra limbs, duplicated fingers, bent blade, distorted face or random artifacts.
```

  </details>

- **Adobe Firefly 可指定 GPT Image 2.5 Sunburst** — 有 Adobe CC 就能在 Firefly 里点名 Sunburst 出图——不必另开 ChatGPT Plus。旁路通道别浪费：已经付 CC 的人，先把 Firefly 当 Image 2.5 机房用。 [@gibkun1](https://x.com/gibkun1) · [原帖](https://x.com/gibkun1/status/2102984812713918522)

- **人物四方向朝向实验：右前最难控** — 前斜/后斜 × 左右体朝四格对照——GPT Image 2.5 偏偏不爱朝画面右前。角色朝向翻车别急着怪 prompt，先按四格测一遍再写死朝向约束。 [@X_nanamaru](https://x.com/X_nanamaru) · [原帖](https://x.com/X_nanamaru/status/2102957947001159903)

- **Sunburst vs Qwen-Image-2.1：七类日文商用图硬对照** — 构成图/比较表/ポンチ絵/信息图/决策树/店头POP/セミナーチラシ同题对比。日文原指令易崩字——改英语指令+引号逐字锁文立刻好转；竖线噪来自 VAE tiling 接缝；API 17–31s vs 本地 37–39s。商用资料图选型先看文字与结构，别只刷棚拍美女。 [@daigomiyoshi_ai](https://x.com/daigomiyoshi_ai) · [原帖](https://x.com/daigomiyoshi_ai/status/2102554528579232004)

- **懒提示词 vs 魂提示词：同题差一个档位** — 同一美女题，糊弄 prompt 与写满细节，2.5 观感差到像两个模型。原帖可复制对照——别怪模型，先怪自己偷懒。 [@nezukichii](https://x.com/nezukichii) · [原帖](https://x.com/nezukichii/status/2102374351370952809)

- **100 画风 STYLE ATLAS：全 Image 2.5 可复制** — 别再说 ChatGPT 动漫脸千篇一律——100 种画风对照站，站内全文公开 prompt。选型、找风格、抄作业一条龙；高级玩家也能挖冷门笔触。 [@SSSS_CRYPTOMAN](https://x.com/SSSS_CRYPTOMAN) · [原帖](https://x.com/SSSS_CRYPTOMAN/status/2102346384531972197)

- **参考图当硬 harness：别啥都塞进参照** — 2.5 对参考图追从变强——旧图会连画风癖一起拽。文字说不清的结构（如服装剪裁）才上参考；要引擎力就敢把参照拿掉。 [@ramdls](https://x.com/ramdls) · [原帖](https://x.com/ramdls/status/2102341813340352832)

- **Flare 写实实测：肤质毛孔与光影不崩** — 自测打脸：皮肤纹理、自然光、手机噪点、景深、长 prompt 跟指令、 candid 姿态都站住。今年最写实档位之一——别只吹「跟 prompt」，先看光影与质感。 [@rewind02](https://x.com/rewind02) · [原帖](https://x.com/rewind02/status/2102341125235224691)

- **同图连改 5 次压测：色/表情/小物稳，姿态崩** — 换色、表情、加小物 OK；加背景植物会漂移项链；「上半身微倾」几乎无效。局部编辑选型别听安利——看它敢不敢动不该动的结构。 [@kozuchi_ai](https://x.com/kozuchi_ai) · [原帖](https://x.com/kozuchi_ai/status/2102324472334479536)

- **同提示词硬刚：Qwen-Image-2.1 vs Image 2.5** — 左本地 Qwen、右 GPT Image 2.5——细节丰但偏碎，Qwen 涂抹感重。消费级显卡本地模型能打到哪，并排看比听安利管用。 [@akokoi1](https://x.com/akokoi1) · [原帖](https://x.com/akokoi1/status/2102319136307363873)

- **画材+笔触细指定：拓宽风格带宽** — 别只骂「ChatGPT 画风不对」——写清画材与笔触（水彩/钢笔淡彩/厚涂等）再出。风格槽位近乎无限，先找到自己的写法。 [@_3912657840](https://x.com/_3912657840) · [原帖](https://x.com/_3912657840/status/2102308750367576121)

- **同题对照：Qwen-Image-2.1 vs GPT Image 2.5** — 左 Qwen、右 Image 2.5——字能写明白了但仍「丑」，本地 M2 Max 一张 ~18 分钟。选型别只看能出字，还要看成片审美与算力账。 [@lukfan](https://x.com/lukfan) · [原帖](https://x.com/lukfan/status/2102240402887897186)

- **Sunburst 参考→chibi 三视图：先认失败再量产** — 不是吹一致性神话：侧视仍露前襟、辫子前后不一致——当设计草稿可以，上动画前先修视角与部件归属。一任务一表，别当压测片。 [@scenepond](https://x.com/scenepond) · [原帖](https://x.com/scenepond/status/2102237608025706801)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Task: convert the supplied character to a 2D chibi front/side/back sheet, preserving clothing and part relationships.
Settings: 1 reference image · 16:9 · 2K · high quality · 1 output.
One task, one sheet—not three independent tests or a consistency benchmark.

Known failure modes to watch: true 90° side view may still expose front bodice; rear view may redraw braids that hang over shoulders in front view. Fix view angles and part placement before animation use.
```

  </details>

- **Sunburst vs 2.0 三视图握剑：手部解剖硬对照** — 同角色三视图：Sunburst 把剑柄握姿与特效一起稳住，2.0 特效一弱手就歪。选型别只看脸——道具接触点才是翻车重灾区。 [@shiropapa4622](https://x.com/shiropapa4622) · [原帖](https://x.com/shiropapa4622/status/2102148692514115902)

- **同 prompt 四格漫画：Image 2.5 vs Qwen 2.1 排版对比** — 同一套 PAGE/分镜/对白锁压两模：标题带、竖排气泡、页脚水印全写死。漫画选型别空谈画风——先看谁保住分镜几何与文字层级。 [@FURUYAN123456](https://x.com/FURUYAN123456) · [原帖](https://x.com/FURUYAN123456/status/2102015541921878078)
  <details>
  <summary>查看 / 复制提示词</summary>

```
OUTPUT: Single image. Draw manga directly.

ABSOLUTE TASK: new 4-panel manga page; refs only for identity.

FORMAT:
PAGE:2:3; title6.5%/font5.5%; panels+gutters91.3%, variable heights; footer2.2%, inset0.6%, no clipping.
- Top title band: plain white, unframed; EXTRA-BOLD condensed Japanese Gothic.
- Bubbles: vertical tategaki in regular manga Mincho; never bold Gothic/sans.
- Watermarks only in footer outside panels.

PROMPT PRIORITY: protect cast/count/identity, exact script, Camera geometry, layout/style/medium.
CAMERA FIRST: project actors/props from fixed Camera; never relocate for legibility.
SERIOUS INTENT: preserve emotional causality; no gag/chibi release.
REFERENCE ROLE: appearance only; no sheet labels/layout/poses.

(同提示词压 GPT Image 2.5 vs Qwen Image 2.1；完整剧本锁与分镜对白见原帖。)
```

  </details>

- **同 prompt 旅行站首页：Flare vs Sunburst 对照** — 同一旅行社首页 brief，Flare/Sunburst 两版愿景并排投票。选型别空谈参数——同指令看谁更贴落地页完成度。 [@alex_bagnuoli89](https://x.com/alex_bagnuoli89) · [原帖](https://x.com/alex_bagnuoli89/status/2101996295141347654)

- **Sunburst 噪点坑：负向提示不能省** — 昨天零噪点觉得稳，今天偷懒跳过负面提示直接翻车。Sunburst 写实也别裸奔——噪点/纹理约束写进负向更稳。 [@Katze_lover](https://x.com/Katze_lover) · [原帖](https://x.com/Katze_lover/status/2101992459303850194)

- **Sunburst 参考图逼真法：TikTok 截帧锁摄影感** — 裸 prompt 易变 AI slop；先从真实视频截氛围参考再喂 Sunburst，姿势不必一样。写实选型的可抄流程，比再堆形容词管用。 [@Mho_23](https://x.com/Mho_23) · [原帖](https://x.com/Mho_23/status/2101982659190653032)
  <details>
  <summary>查看 / 复制提示词</summary>

```
模型：GPT Images 2.5 Sunburst（写实首选；裸 prompt 容易变 AI slop）

方法：参考图 prompting，而不是纯文字硬写
1. 找一张「氛围对」的真实参考（姿势不必一样，要真实摄影感）
2. 去 TikTok 搜目标场景（如 person walking on street / UGC in room），从真实视频截帧；Pinterest 已被 AI 图淹没
3. 把该帧作为 reference 丢进 Sunburst
4. 再写详细 prompt：长相、穿搭、动作、环境全写死

要点：Sunburst 会新建一张图，但保留参考图的真实摄影特征——这是「看不出是 AI」的关键。
```

  </details>

- **Image2 发丝锯齿→2.5 手修前后对照** — gpt-image-2 头发ガビガビ，丢进 2.5 用手修直接救回。发丝/细节翻车时别重抽——换型号手修往往更快。 [@hogezawa](https://x.com/hogezawa) · [原帖](https://x.com/hogezawa/status/2101955771630297443)

- **同风格指令：Image 2.0 vs Image 2.5 Sunburst** — 同一套风格说明并排——2.0 与 2.5 Sunburst 差异一目了然。选型别只听参数表，看同指令下谁更贴你要的完成度。 [@Project_VLA](https://x.com/Project_VLA) · [原帖](https://x.com/Project_VLA/status/2101915075267150283)

- **同提示词三方硬刚：Image 2.5 vs Mai 2.6 vs Qwen 2.1** — macOS 桌面 + 格斗之王题材同 prompt 三联对照。作者更爱 Image 2.5 的风格感，Qwen 八神庵更贴原型——选型别听安利，先并排看谁更「有感觉」。 [@aidavid125](https://x.com/aidavid125) · [原帖](https://x.com/aidavid125/status/2101894576311242772)

- **空间角度听话度：Image 2.5 比 Qwen 2.1 更听绝对转角** — 让模型把人物转到绝对数学角度——Qwen Image 2.1 不太听话，Image 2.5 更稳。做分镜/预演转角一致性时，这条选型结论比 Benchmark 更接地气。 [@MinLiBuilds](https://x.com/MinLiBuilds) · [原帖](https://x.com/MinLiBuilds/status/2101883427524153369)

- **同prompt硬刚：Image 2.5 vs Banana vs Qwen 2.1** — 同一提示词三联对照：GPT Image 2.5、Banana、刚开源的 Qwen Image 2.1（7B）。选型别靠嘴炮——并排放大看质感与结构谁先崩。 [@alin_zone](https://x.com/alin_zone) · [原帖](https://x.com/alin_zone/status/2101685588252590123)

- **同图猜谜：Image 2.0 vs Flare Max vs Sunburst Max** — 同一题材四联对照：猜哪个是 2.0、哪个是 Flare Max、哪个是 Sunburst Max。作者观感是 2.0 掉智明显——选型别听安利，先并排放大看结构谁先崩。 [@l200892013](https://x.com/l200892013) · [原帖](https://x.com/l200892013/status/2101655549167468554)

- **夜窗海报硬刚：2 / Sunburst / Flare 同题十二格** — 展览海报 NIGHT WINDOWS：同楼同机位 4×3 夜窗格，邻窗切片+四行小字全对。Image 2 缺邻窗、Sunburst 格线不齐、Flare 中列偏宽——100% 放大看差别；方法与单价在回复。 [@FlyAIgh](https://x.com/FlyAIgh) · [原帖](https://x.com/FlyAIgh/status/2100943297103778003)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Exhibition poster NIGHT WINDOWS: flat straight-on view of a printed sheet on warm off-white uncoated paper, one neo-grotesque typeface set small, a 4 by 3 grid with narrow gutters and a wider margin above than below. Every frame is the same old brick building photographed at night from across the street at the same distance, one tall sash window with a white frame and stone sill centred in each. Twelve rooms listed one by one (different lit interiors; nothing legible inside any window); neighbouring window-frame slices visible at the edges. Four lines of text only: title, subtitle, venue and dates, Free entry. Text-to-image, no reference. Compare GPT Image 2 High vs 2.5 Sunburst Max vs 2.5 Flare Max, 4K, 3:4; one run each, no rerolls.
```

  </details>

- **胶卷 Film Roll：Banana2 打底 + Sunburst 叠回忆** — 两阶段：Nano Banana 2 先出空白 35mm 胶卷底，再 Sunburst 把角色回忆烤进每一格。作者点名 Flare 更易崩胶卷结构——选型直接听劝。 [@094WPdx9ZrfYJnS](https://x.com/094WPdx9ZrfYJnS) · [原帖](https://x.com/094WPdx9ZrfYJnS/status/2100910986391900578)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【阶段1 · Nano Banana 2 · 空白胶卷底】
35mm版的フィルムロールの断片を、数本伸ばしている状態をアップで。フィルムはコマ割りはされているが何も映っていないブランクの状態で生成。ゲームのローディング画面のような雰囲気。写実的に。
比率 3:2 · 4K

【阶段2 · GPT Image 2.5 Sunburst · 叠角色回忆】
35mm版のポジフィルムのロールの断片を伸ばして画面狭しと重ねた状態。フィルムの重なりや背景がうっすらと映り込む。コマごとにキャラクターの楽しい思い出の撮影記録が現像されている。ライバルとの戦闘、武器を振り回してハイになった日、絶望しながら食べたカップ麺。昔の友達、栃木県の名勝。画像の右側にはキャラクターの可愛いポーズのイラストを不透過率80%の上層レイヤーとして生成。下層レイヤーは不透過率100%として、キャラクターの輪郭線がわずかに発光して背景から浮き上がらせている。電子ノイズと画像のノイズを除去したのち、フィルムで撮影したような粒子感を全体的に追加。キャラクターは『メカ七瀬（ななせ）』。超究銀河のメカ娘。機械の手指、先進的な装甲にインナーカラーの白髪ポニーテール、明るいアホの子。キャラクターはシンプルに描く。
比率 3:2 · 4K · 品质最高 · 背景オート
注：作者反馈 Flare 更容易把胶卷结构弄崩，优先 Sunburst。
```

  </details>

- **Sunburst 连改 20 次仍一致：编辑压测视频** — 一张图 → 改 → 再改编辑结果，连滚 20 轮人物与风格还不崩。选型时别只看首帧——一致性才是 Sunburst 被低估的地方。 [@StratosBase](https://x.com/StratosBase) · [原帖](https://x.com/StratosBase/status/2100896878564934042)

- **n=4 批量自检：2 枚目以降对照 1 枚目修崩** — 一次出多张别指望运气——在 prompt 里写死「第 2 张起对照第 1 张与原文，有矛盾就改」。Work 模式少翻车的小补丁，日文原句可直接粘。 [@magu_ai_h](https://x.com/magu_ai_h) · [原帖](https://x.com/magu_ai_h/status/2100885947584074213)
  <details>
  <summary>查看 / 复制提示词</summary>

```
n=4などで一度に複数枚を生成する時、

"2枚目以降を生成する際は、完成した1枚目とプロンプトを照らし合わせ、矛盾や破綻があれば修正する"

って入れとくと、2枚目以降かなり修正してくれました!!
```

  </details>

- **中文提示词骨架：在哪 / 是谁 / 光怎么走 / 不要什么** — 四问拆开写，比堆形容词稳。小海豚笔记长文把 Image 2.5 中文写法收成框架——入门少翻车，先问限制再问美。 [@gaoren7716](https://x.com/gaoren7716) · [原帖](https://x.com/gaoren7716/status/2100858084629626948)

- **Grok vs ChatGPT Images 2.5：同 prompt 高定浴室过肩镜头** — 同一段高定浴室过肩 hero prompt，左右对照 Grok 与 ChatGPT Images 2.5。硬刚选型别靠感觉，同题同光位最狠。 [@johnAGI168](https://x.com/johnAGI168) · [原帖](https://x.com/johnAGI168/status/2100827087326076976)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A cinematic high-fashion editorial photograph captured on location — an intimate waist-up hero composition of an East Asian woman in a luxury marble bathroom suite, the camera positioned at eye level in a three-quarter rear framing capturing her striking over-the-shoulder gaze and the reflective vanity mirror in an M2 luxury interior editorial register.

The woman has a sleek, glossy jet-black blunt bob haircut that grazes her shoulders with clean-cut ends, complemented by soft, airy wispy fringe framing her brow. Her fair, porcelain-toned skin displays natural fine pore texture, delicate shoulder blades, and subtle subsurface scattering under warm vanity lighting. Her defined almond eyes look back over her right shoulder directly toward the camera with a poised, captivating expression, paired with a sculpted profile, soft blush, and naturally glossy rose lips. She wears an architectural backless black silk halter evening piece: completely open across the spine, secured by delicate geometric crisscross black satin micro-straps intersecting at a miniature black floral buckle fastener at the mid-back and tying low around the waist, paired with matching draped black bottoms. She leans slightly forward over the vanity counter with one arm extended for support, her torso gracefully twisted to showcase both the intricate back strap design and her elegant silhouette.

The setting is an opulent contemporary hotel bathroom vanity area — in front of her sits a polished black marble countertop with an undermount white porcelain sink and modern chrome swan-neck faucets, with the large vanity mirror reflecting a soft frontal view of her draped silhouette and the surrounding suite. In the softly blurred background, a freestanding white oval soaking tub and polished white-and-gray veined marble walls complete the high-end architectural interior.

The scene is illuminated by soft, flattering luxury hospitality vanity lighting — diffused warm-white glow radiating from surrounding mirror sconces and recessed ceiling fixtures, evenly enveloping her shoulders, neck, and back with creamy, gentle illumination without harsh cast shadows. Crisp, subtle specular highlights glint off the polished chrome bathroom fixtures, the wet sink basin, and the sleek surface of her black satin straps, enhancing the tactile luxury of the space.

Captured with a wide-latitude digital cinema look on a fast 50mm portrait prime lens at T2.0, delivering razor-sharp optical detail across her facial profile, eyeliner, individual hair strands, and the satin strap intersections, while the vanity mirror reflection and bathroom background melt into soft, organic circular bokeh. Refined high-end interior color grade balancing cool marble veins with warm, radiant skin tones and deep, uncrushed blacks in the fabric, finished with fine, organic 35mm theatrical film grain across the frame. Real photographic frame captured on a real cinema camera, real prime lens, real silk satin fabric, real marble countertop, real East Asian human subject, real luxury bathroom environment — no CGI, no rendered look, no digital cleanliness, no plastic surfaces, no AI smoothness, no skin smoothing, no glow, no halation bloom that reads as artificial, no glossy highlights.
```

  </details>

- **Image2 vs Flare vs Sunburst：同 prompt 速度与成片对打** — 同一套 prompt 跑 GPT Image 2 / 2.5 Flare / 2.5 Sunburst，直接看升级差在哪。Flare 速度约 2.3× 于 Image 2，选型别只看样张。 [@BLOCKLORDS](https://x.com/BLOCKLORDS) · [原帖](https://x.com/BLOCKLORDS/status/2100812069385932848)

- **同题四厂硬刚：GPT Image 2.5 vs Grok vs MJ vs Krea** — Crystal Dragon Lancer 同题纯 t2i 零修图并排四厂——Image 2.5 / Grok / Midjourney / Krea 谁先驯服龙臂叠影。跨厂选型甩图现场。 [@ellewayAI](https://x.com/ellewayAI) · [原帖](https://x.com/ellewayAI/status/2100701388363976942)

- **同 selfie prompt：Image 2 vs 2.5 Sunburst 广告人像** — 同一自拍广告题左右开：2.0 皮肤过锐/头发僵/天空平，Sunburst 皮肤干净、脸真、装备有磨损。投放人像选型直接甩这组并排。 [@marcobatt](https://x.com/marcobatt) · [原帖](https://x.com/marcobatt/status/2100587174739546617)

- **Grok vs ChatGPT Images 2.5：同题度假夜景人像** — 同长 prompt 并排 Grok 与 Images 2.5——丝缎、时间戳、暖灯 bokeh 谁更像真机。跨厂选型附完整可抄配方。 [@johnAGI168](https://x.com/johnAGI168) · [原帖](https://x.com/johnAGI168/status/2100582150131024072)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A cinematic vintage-camcorder snapshot photograph captured on location — an intimate medium-full hero composition of an East Asian woman reclining on a plush resort bed in a moody nighttime suite, the camera positioned at a low bed level in a horizontal framing capturing her relaxed, sleepy gaze and luminous silk texture in an M1 cinematic narrative register.

The woman has long, glossy chestnut-tinted dark brown hair falling softly over her shoulders and pillows, with natural loose strands gently swept back by her right hand resting near her temple. Her fair skin displays a soft, velvety natural texture with fine pores, delicate collarbones, and subtle subsurface scattering under warm indoor illumination. Her dark almond eyes gaze languidly toward the lens with an intimate, unhurried, late-night vulnerability, paired with soft natural pink lips relaxed in a gentle, neutral expression. She wears a luxurious dusty-rose pink silk satin loungewear robe with flowing sleeves draped loosely over a matching lustrous satin cowl-neck camisole, embellished with a sparkling silver crystal rhinestone strap detail resting along her collarbone. She is reclining comfortably on her side across clean white cotton sheets, her left arm extending forward onto the mattress in an effortless, candid posture.

The setting is an intimate tropical resort bungalow bedroom at night — behind her hang gathered off-white sheer linen curtains softly illuminated from within, while to the right in the background stand two slender cylindrical woven rattan standing lamps casting a warm, textured amber glow into the dark space. Printed crisply in the lower-right corner of the frame is a vintage retro orange seven-segment digital camera timestamp reading "2026/09/17 21:21".

The lighting is governed by atmospheric late-night interior physics — a soft, warm frontal fill light illuminates her face, shoulders, and the liquid sheen of the dusty-rose silk fabric with gentle specular glints, while the warm amber lamps in the background provide soft separation against the deep evening shadows, creating a nostalgic early-2000s compact camera flash aesthetic with cozy, lifted shadows and soft highlight bloom.

Captured with a wide-latitude digital cinema look evoking a vintage high-end 35mm compact film camera on a fast 35mm lens at wide aperture T2.0, providing crisp resolution on her facial features, the glittering crystal strap, and silk folds, while smoothly melting the background rattan lamps into warm circular bokeh. Film-negative tungsten color grade with rich amber undertones, authentic skin warmth, and fine 35mm grain across the frame. Real photographic frame captured on a real cinema camera, real prime lens, real silk satin fabric, real woven rattan, real East Asian human subject, real bedroom night environment — no CGI, no rendered look, no digital cleanliness, no plastic surfaces, no AI smoothness, no skin smoothing, no glow, no halation bloom that reads as artificial, no glossy highlights.
```

  </details>

- **ChatGPT Images2.5 vs API gpt-image2：同参考色味差** — 同参考同提示：左边本家 Images 2.5、右边仍供 API 的 gpt-image2，色味差肉眼可见。接客户别混「网页版」和「旧 API 代际」——选型先看并排。 [@MAyamaYA_69_](https://x.com/MAyamaYA_69_) · [原帖](https://x.com/MAyamaYA_69_/status/2100574297488322902)

- **Images 2.5 vs Nano Banana2：同题东京路牌文字** — 同 prompt 东京夜路口纸牌「I'M STILL LEARNING」——谁把字拼对、写清。路牌/手写标是选型硬指标，附完整对照 prompt。 [@flarehorizon275](https://x.com/flarehorizon275) · [原帖](https://x.com/flarehorizon275/status/2100571656531959836)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a photorealistic street photograph of a young man standing at a busy Tokyo intersection at night, holding a small handwritten cardboard sign that says exactly: “I’M STILL LEARNING.” Keep the text perfectly readable and correctly spelled. Natural skin texture, realistic lighting, candid documentary photography, no cinematic or AI-generated look.

Compare: ChatGPT Images 2.5 vs Nano Banana 2 — same prompt; judge who nails the sign text.
```

  </details>

- **Flare 黑板菜单零重试：四行价格文字全对** — 给 Flare 一块四行黑板菜单+精确标价，禁止重抽——单词和美元金额一次全对。文字曾是 AI 图的破绽；做菜单/价目表广告前，先过这关。 [@modelstoreai](https://x.com/modelstoreai) · [原帖](https://x.com/modelstoreai/status/2100565452774650265)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Stress test (GPT Image 2.5 Flare):
Give Flare a four-line chalkboard menu with exact prices. No retries.
Acceptance: every word and every dollar amount must come back correct on the first pass.

Why it matters: text accuracy used to be the tell that gave away an AI image — menu / price boards are a hard gate for ads and storefront mocks.
```

  </details>

- **Sunburst 多轮精确编辑压测：换衫连环到第几轮崩** — 原图→改 T 恤→再拿输出当下轮输入，连压五轮：别的模型第三轮已噩梦，Sunburst 第五轮还能看。Flare 赶量 / Sunburst 精改——编辑保真硬证据。 [@alecwilcock](https://x.com/alecwilcock) · [原帖](https://x.com/alecwilcock/status/2100555617941307601)

- **Flare vs Recraft V4.1 Pro Round 2：四场景对照** — 动漫格斗、奶奶骑越野、爷爷贴纸大笑、紫光墨镜模特——同 brief 并排看谁吃得下。跨厂选型别只听官号，看评论区 prompt。 [@recraftai](https://x.com/recraftai) · [原帖](https://x.com/recraftai/status/2100500895091798168)

- **品牌恐龙四模同题：Image2 / Flare / Sunburst / ChatGPT** — Fortune 500 品牌捏成机械恐龙 2×2，同一段伪着色器 prompt 压四模。选型别空喊「更强」——直接看谁材质映射和 logo 叠层过关。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2100496729627836540)
  <details>
  <summary>查看 / 复制提示词</summary>

```
GPT Image 2 vs GPT Image 2.5 Flare (Higgsfield) vs. GPT Image 2.5 Sunburst (Higgsfield) vs. ChatGPT :

Brands as dinosaurs. Same prompt.

2x2 grid, do this for 4 dinosaurs inferred from subject and 4 famous Fortune 500 brands: void main() {
string brand = "[$BRAND]";
string insect = "[$dinosaurs]";
// Semantic Material Mapping based on Brand
vec3 base_mat = infer_brand_primary_material(brand); // e.g., brushed_metal(), white_glass(), or matte_carbon()
vec3 accent_mat = infer_brand_accent_colors(brand);  // e.g., primary_color_grid(), or neon_green_emissive()

// Geometry Deformation
mat4 mechanical_chassis = convert_to_robot(load_mesh(insect));
apply_panel_gaps_and_servos(mechanical_chassis);

// Render 3D Subject
render_mesh(mechanical_chassis, base_mat, accent_mat);
apply_lighting(commercial_studio_softbox, macro_lens: true);

// UI Overlay Overlay (No depth, pure 2D)
draw_2D_overlay(top_left, infer_logo(brand));

}
```

  </details>

- **Nano Banana 2 Lite vs Image 2.5：移轴微缩硬对照** — 同题 1:1 / 2×2：一边读不懂提示，一边交出 Scheimpflug 移轴微缩拼贴。附完整 INTENT/LAWS/FORBIDDEN 配方，选型话术与光学约束一次齐。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2100356053095641424)
  <details>
  <summary>查看 / 复制提示词</summary>

```
INTENT     selective attention made geometric; miniaturisation, or a slice of focus cutting across the world
UNKNOWNS   tilt angle ;  hinge distance J = f / sin(tilt) ;  aperture N ;  focus distance
LAWS
  Scheimpflug   subject plane, lens plane and image plane extended meet in ONE common line
                ⇒ tilting the lens TILTS the plane of sharp focus in the world
  hinge rule    the focal plane pivots about a hinge line parallel to the lens plane at J below it
                ⇒ the in-focus volume is a WEDGE: zero thickness at the hinge, widening with distance.
                  Near sharp band NARROW, far sharp band WIDE — a lawful, monotone flare.
  the inversion  sharpness is governed by distance FROM THE TILTED PLANE, not by depth.
                ⇒ objects at very different camera distances can be equally sharp if they lie on the plane
                ⇒ objects at the SAME camera distance can differ in sharpness if one sits off it
                (⇒ the "equal depth ⇒ equal blur" FORBIDDEN of the thin-lens prompt is here REVERSED —
                  which is exactly why fake tilt-shift is detectable)
  vertical objects  a lamppost, tower or figure standing across the plane is sharp only in the BAND where
                it intersects, blurring above and below — but that band's HEIGHT varies with its distance
  shift         rise/fall keeps sensor parallel to the façade ⇒ verticals stay PARALLEL while framing high;
                the horizon sits off-centre. Cropping a tilted-up frame instead leaves converging verticals.
  aperture      stopping down widens the wedge; the bokeh still obeys one aperture, one blade count
OVERDETERMINATION   the plane recovered from ≥3 sharp features at differing depths — one plane fits all;
                    the wedge's widening rate must agree with the recovered tilt and N
HONEST      one tilted plane; sharpness monotone in distance from it; the sharp band widens with depth
FORBIDDEN   a blur gradient that is a function of IMAGE HEIGHT rather than of distance from a world plane
            (the post-filter tell: an even soft band top and bottom, ignoring the scene's geometry) ;
            a sharp band of constant width from foreground to horizon (no wedge) ;
            two objects on the same recovered plane, one sharp and one soft ;
            a tall vertical uniformly sharp along its whole height while the plane clearly crosses it ;
            "shifted" architecture with converging verticals, or unshifted verticals with a centred horizon
            that the framing contradicts ;
            miniature-faking by blur and saturation alone with a ground-level viewpoint no model would have.
```

  </details>

- **Row-Bot 上 Flare vs Sunburst：放大镜硬对比** — 同一复杂静物题连跑两档：速度档 Flare vs 精度档 Sunburst，连放大镜/高光/材质差都写清楚。选型话术与 n=1 对照素材一次齐。 [@sydsachar](https://x.com/sydsachar) · [原帖](https://x.com/sydsachar/status/2100216986538029207)

- **Sunburst vs Image2：科技品牌捏成昆虫 2×2** — 结构化 2×2 指令把品牌符号重构成昆虫形态学。选型素材 + 可改模板，比空喊「2.5 更强」管用。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2100211349414441426)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2x2 grid, 1080x1080: <instructions> Input = Tech companies Identify 4 iconic tech brands and their signature elements/patterns. Function Draw ($ Tech_Brand, $ Insect_Species) ... Anchor: [$Insect_Species] :: [$Tech_Brand]::4 | Morphology: Biological anatomy of [$Insect_Species] reconstructed via the assemblage of [$Tech_Brand] textiles, exoskeleton formed from constituent haute couture garments... </instructions>
```

  </details>

- **GPT Image 2.5 使用手册：模型·参数·提示词** — 苏乐长文把型号、参数与提示词一次摊开。接客户或写自家 playbook 当速查表，比刷碎片帖靠谱。 [@ai_suxiaole](https://x.com/ai_suxiaole) · [原帖](https://x.com/ai_suxiaole/status/2100131000055390470)

- **Image2 vs Sunburst：光与发丝并排打脸** — KAWARIMI 同场景：1 张 Image 2、2 张 Sunburst。光更满、头发会「晃」，也更夸张——角色一致性选型别只看干净。 [@eightbeat8b](https://x.com/eightbeat8b) · [原帖](https://x.com/eightbeat8b/status/2100110852984823931)

- **Flare / Sunburst API 实务清单：快产 vs 精修** — Flare 日常量产、Sunburst 局部改 / 多参考 / mask；xhigh·max、会话续改一次理清。一人团队接自动化管线先抄这张分工表。 [@AIlife2024ka](https://x.com/AIlife2024ka) · [原帖](https://x.com/AIlife2024ka/status/2100083815339425917)

- **Image 2 vs 2.5 Flare：同尺寸成本速度 A/B** — 同 prompt 同尺寸：Image 2 约 32 秒 / $0.035，2.5 Flare 约 10 秒 / $0.009。谈迭代节奏和账单时，这组数字比口号硬。 [@111tad1](https://x.com/111tad1) · [原帖](https://x.com/111tad1/status/2100070991254921457)

- **Flare vs Sunburst：16 宫格只改一格不串改** — 同一份情侣生活照 + 同一条二次编辑 prompt，ZenMux PK 看谁改到位又不顺手重做另外 15 格。局部改选型别再听口嗨——并排露馅最管用。 [@msjiaozhu](https://x.com/msjiaozhu) · [原帖](https://x.com/msjiaozhu/status/2100044254987043250)

- **同 prompt 三题材：Image 2 vs 2.5 并排烤炉** — 插画 / 胶片写真 / 时装 editorial 同一提示压两代，附可抄 prompt。选型别靠感觉——并排看谁更听话。 [@magnific](https://x.com/magnific) · [原帖](https://x.com/magnific/status/2099984889554825693)

- **Flare 4K Max vs Neo Banana Pro：同题硬刚** — 左 Google Neo Banana Pro 4K、右 GPT Image 2.5 Flare 4K Max。跨厂旗舰选型甩图就行。 [@leploutos](https://x.com/leploutos) · [原帖](https://x.com/leploutos/status/2099865822231711948)

- **物体删除烤炉：Sunburst vs Nano Banana 2** — 同图删近邻物体——坐标 vs 语义谁说了算；附分数、成本与失败样张长文。选型别只看美图，抠图/清杂物场景先过这关。 [@danywach](https://x.com/danywach) · [原帖](https://x.com/danywach/status/2099845477885714780)

- **Flare 赶量测稿 / Sunburst 出片：同模两档** — 一句话说清选型：Flare 管产品试错与粗视觉，Sunburst 管光影材质与可交货成片。别玄学，按交付阶段切。 [@AIwithGhotai](https://x.com/AIwithGhotai) · [原帖](https://x.com/AIwithGhotai/status/2099766335710654676)

- **Codex MCP Sunburst vs 内置 image_gen 同题** — 结城浩对照：mcp-create-image 走 GPT Image 2.5 Sunburst，另一路用 Codex 内置 image_gen。同是 OpenAI，管线不同画风也不同——工具链选型别混。 [@hyuki](https://x.com/hyuki) · [原帖](https://x.com/hyuki/status/2099750214492131662)

- **黑手党影院人像：2.5 vs 2 同脸硬刚** — 左 2.5、右 2，上传脸锁身份出奢车雪茄黑帮海报。选型看脸与烟雾细节差，完整 prompt 可抄。 [@john_my07](https://x.com/john_my07) · [原帖](https://x.com/john_my07/status/2099745210196738366)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a hyper-realistic, cinematic portrait of me (use uploaded face) as a modern mafia boss. I’m sitting in a luxury black car, wearing a black suit and tinted aviator sunglasses, smoking a thick cigar. Cold, fearless expression. Background: moody sky + blurred city/street for noir feel. Cool tones, high contrast. Sharp details on face & smoke. Style: 8K, movie-poster quality, shallow depth of field 1:1
```

  </details>

- **Flare Max vs Sunburst Max：同题丝路人像硬对比** — Miora 里左右并排：左边 Flare Max、右边 Sunburst Max，留言区放完整 prompt。选型别口嗨，截这组进评审会。 [@shitunote](https://x.com/shitunote) · [原帖](https://x.com/shitunote/status/2099714542511292721)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a breathtaking, ultra-realistic live-action movie still of a pristine, flawlessly beautiful 20-year-old classical Chinese maiden. Open, highly breathable and majestic Silk Road landscape portrait framing (ABSOLUTELY NO dark frames, vast and crystal-clear evening sky). STRICT SPATIAL LAYOUT: She stands on the high, carved-stone terrace of an ancient Silk Road fortress watchtower (烽燧石台). In the infinitely deep background, the colossal, jagged, snow-capped peaks of the Tian Shan mountain range (天山雪峰) rise majestically into a deep indigo-blue twilight sky above a calm sea of clouds. Above the snow peaks hangs an astronomically accurate, realistically proportioned bright silver full moon (ABSOLUTELY NOT an oversized fantasy moon). CRUCIAL FACIAL BEAUTY: She possesses a pristine, baby-smooth youthful face (NO wrinkles, pure, absolute clean dry skin, zero dirt). ATTIRE: She wears authentic, high-Tang Silk Road Western Regions attire (西域唐风胡服 / 宝相花纹披帛) with rich, textured lapis-lazuli blue, warm ochre-gold, and pomegranate-crimson silk woven with fine metallic threads. CRUCIAL SAFE ANATOMY: Her hands are safely and gently resting completely flat on the carved, ancient weathered stone balustrade of the terrace (flawless flat rest, ABSOLUTELY NO holding weapons, NO complex fingers). Cinematic high-altitude twilight lighting: crisp, clear evening twilight blends with soft, cool-silver moonlight striking the snow-capped mountain ridges and her face, casting natural, heroic, perfectly exposed highlights. In the extreme foreground, out-of-focus macro carved stone balustrade edge. 8k, absolute cinematic realism, profound Silk Road majesty.
```

  </details>

- **同 prompt 四宫格：Image 2.5 vs 2.0** — 同一提示词并排打脸细节与一致性。选型别靠感觉，把这组截进评审会就完事。 [@HIX_AI_](https://x.com/HIX_AI_) · [原帖](https://x.com/HIX_AI_/status/2099490851919458365)

- **夜闪人像三连：2 / Sunburst / Flare 同脸硬刚** — 直闪夜街同一张脸参考，左到右 Image 2、Sunburst、Flare；Flare 整体最强，2 反而更像「相机拍出来」。选型别只看干净——设置与费用在回复里。 [@FlyAIgh](https://x.com/FlyAIgh) · [原帖](https://x.com/FlyAIgh/status/2099483146966446369)

- **角色设计表压测：2 / Sunburst / Flare 同题** — 一 prompt 三跑，专测排版、小字、多视角、剪影标注。做 IP 表或产品角色圣经直接抄对照法。 [@FlyAIgh](https://x.com/FlyAIgh) · [原帖](https://x.com/FlyAIgh/status/2099482513693622358)

- **同题秒表：2.0 九十秒 → Flare 二十秒** — 日常缩略图 prompt 实测：2.0≈90s、Flare≈20s、Sunburst≈34s，比官方「最快 50%」还狠。选型先看秒表再谈画质。 [@rutinelabo](https://x.com/rutinelabo) · [原帖](https://x.com/rutinelabo/status/2099445588249182479)

- **真正值钱的是返工：局部改+多轮一致性** — 画质只是表层；一次只改该改的、多轮后脸/构图/品牌还能对齐，才进得了真生产。提示词玄学正在贬值。 [@Adam38363368936](https://x.com/Adam38363368936) · [原帖](https://x.com/Adam38363368936/status/2099427815829729441)

- **同 prompt 四格：2.5 更真、更少 AI slop** — 前两张 2.5、后两张 2.0 并排。真实感升级不是嘴炮——少塑料感、多摄影感，选型时拿来打脸最直接。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2099417551411494936)

- **「别把喜欢的地方改坏」：Sunburst 精修 vs Flare 赶量** — 创作者要的往往不是更美，是改背景别毁脸、改字别毁排版。API 里 Sunburst 盯编辑精度、Flare 盯日常量产——选型别混。 [@yu_min_days](https://x.com/yu_min_days) · [原帖](https://x.com/yu_min_days/status/2099392705780756829)

- **Image 2.5 案例提示词站：复制就能同款** — GPT-6 太吵时，这里把网上 2.5 案例和提示词收成站，每条带来源。找灵感/抄作业的第二入口。 [@dashiAIxz](https://x.com/dashiAIxz) · [原帖](https://x.com/dashiAIxz/status/2099390242197565492)

- **2.5 vs 2.0：80 年代跑车真实感硬对比** — 同一题材拉齐看：车漆、人体皮肤、细节密度一眼分代。选型别听口号，把这组并排截图扔进评审会就完事。 [@icreat_ai](https://x.com/icreat_ai) · [原帖](https://x.com/icreat_ai/status/2099374093263106123)

- **官方 Prompt 指南中文提炼：用途→主体→限制** — 先说最终用途，再写主体、构图、风格、光线、材质、文字和限制；指定文字用引号写死位置字体。入门骨架抄这条就够。 [@king1818888](https://x.com/king1818888) · [原帖](https://x.com/king1818888/status/2099336586462695735)

- **Flare / Sunburst 价格带选型表：别只盯榜一** — 同价双版本按任务分流：Flare 求吞吐默认，Sunburst 求多轮精改。把价格带写进选型表，别被编辑榜分数带跑。 [@jojogh_007](https://x.com/jojogh_007) · [原帖](https://x.com/jojogh_007/status/2099330504034308530)

- **Flare 默认 vs Sunburst：ChatGPT 比裸 API 更懂审美** — 同题四路：普通/精度优先/API Flare/API Sunburst。结论狠：ChatGPT 上下文导演感拉满，裸 API 反而更淡——选型别只比型号名。 [@omochgpt](https://x.com/omochgpt) · [原帖](https://x.com/omochgpt/status/2099302189781176717)

- **同 prompt 2→2.5：格斗角色高端 editorial 手感差一截** — Lovart 上同题重跑，2.5 的博物馆级人设海报更干净。附高定角色导演 prompt，换角色名就能出系列。 [@opener_ai](https://x.com/opener_ai) · [原帖](https://x.com/opener_ai/status/2099284978194612471)
  <details>
  <summary>查看 / 复制提示词</summary>

```
You are a high-fashion editorial image director specializing in transforming fictional characters into restrained, museum-grade portrait compositions.

Your task is to reinterpret a given character into a minimal, cinematic, high-fashion editorial image while preserving their core identity through subtle physical and symbolic cues.

---

🧩 INPUT
Character: [CHARACTER NAME + SOURCE]
Optional Direction: [MOOD / KEYWORD / VARIATION — optional]

---

🧠 STEP 1 — CHARACTER ESSENCE EXTRACTION
Identify and preserve only the essential identity markers:

- Facial structure traits (eyes, jaw, expression tendencies)
- Signature hairstyle or silhouette logic (reinterpret, never copy literally)
- Core outfit identity (translate into couture fashion, not costume)
- Character energy (discipline, chaos, elegance, brutality, etc.)

Reduce everything else.

---

🧱 STEP 2 — COMPOSITION & SPACE

- Off-center composition
- Subject slightly angled inward
- Negative space dominates (~60%)
- Background: soft gradient, neutral tones
- No environment, no narrative, no props

The space should feel like absence with intention.

---

🧍 STEP 3 — FIGURE PRESENCE

- Upright posture, controlled stillness
- No action, no dynamic pose
- Subtle weight shift allowed
- Framing: upper body to mid-thigh or refined 3/4

The subject exists in a state of contained motion.

---

👔 STEP 4 — COSTUME TRANSLATION
Transform iconic outfit into high-fashion couture:

- Maintain silhouette logic, not literal design
- Use structured tailoring (silk, satin, matte luxury fabrics)
- Reduce exaggerated elements into subtle design cues
- Colors: desaturated, controlled palette
- Details: minimal metallic accents or stitching

The outfit should feel like “identity refined into discipline.”

---

💇 STEP 5 — HAIR REINTERPRETATION

- Preserve structural identity (shape logic)
- Remove exaggeration
- Make it sculptural, controlled, minimal

---

🧠 STEP 6 — FACE & GAZE

- Expression: emotionally restrained
- Eyes: focused, present, grounded
- Mouth: neutral
- No dramatization, no exaggeration

The gaze should feel inevitable, not aggressive.

---

💡 STEP 7 — LIGHTING

- Single soft key light (~3500K)
- Gentle contouring on face and body
- Soft shadows, no harsh contrast
- Optional subtle rim light

Clarity over drama.

---

🎨 STEP 8 — COLOR SYSTEM

- Base: desaturated cool-neutral
- Skin: matte, natural
- Accents: extremely restrained (metallic or tonal depth)
- Fine film grain texture

---

🔷 STEP 9 — SYMBOLIC MINIMALISM
Create ONE subtle symbolic element based on the character:

- Shape (circle, line, fracture, symmetry, etc.)
- Must represent their core power or philosophy
- Integrated into negative space

No effects. No energy visuals. Only implication.

---

🔤 STEP 10 — TYPOGRAPHY
Ultra minimal (<8%):

- Character name (spaced lettering)
- Source (vertical or small)
- Serial number + concept word
- One restrained tagline

---

🧊 STEP 11 — FINAL TONE
The image must feel like:

- A luxury campaign without branding
- A museum portrait of power
- Controlled, silent dominance

---

⚠️ ANTI-RULES

- No action pose
- No combat motion
- No energy effects
- No game-style rendering
- No environmental storytelling
- No exaggerated anatomy
- No glossy skin

---

🧾 OUTPUT FORMAT
Write a single, fully integrated image generation prompt in natural descriptive form (not bullet points), maintaining cinematic clarity and precision.
```

  </details>

- **同题修车：Flare vs Sunburst 谁更「真」** — 同一 brief（修自行车师傅）、同设置零修图双轨对照。快速建立选模直觉，别靠玄学。 [@SandbaseAI](https://x.com/SandbaseAI) · [原帖](https://x.com/SandbaseAI/status/2098397131363025030)

- **UGC 自然皮肤翻车：2.5 在这场景偏 mid** — 三天实测「刚掏出手机自拍」：塑皮、AI 对称脸、窗光仍像棚拍。反信号也值钱——做假 UGC 前先对症，别默认 2.5。 [@ItsNazar17](https://x.com/ItsNazar17) · [原帖](https://x.com/ItsNazar17/status/2098396894082843074)

- **水面完美倒影：2.5 / 2 / Banana / Reve 同题烤炉** — 同一套反射几何约束（平面 Π、手性翻转、水线自重合）压四模。别听口号，直接看谁物理过关；附可复制压测 prompt。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2098389596664963278)
  <details>
  <summary>查看 / 复制提示词</summary>

```
GPT Image 2.5 vs. GPT Image 2 vs. Nano Banana Pro vs. Reve. Same prompt.

2x2 grid,1:1 AI picks stunning different subjects: Π = reflecting plane: point q, unit normal m
R(x) = x − 2((x−q)·m) m (reflection across Π)
reflected image = scene imaged by the VIRTUAL camera R(C) ; every real feature f has twin R(f)

RENDERED
• reflection is a BIJECTION of the scene across Π ; occlusion order reverses
• points on Π are fixed → the waterline is self-coincident
• chirality FLIPS — text and hands are mirror-reversed
• a vertical object inverts about the waterline ; base-of-object meets base-of-reflection exactly on Π
• perspective in the reflection is that of R(C): the same vanishing points, mapped

READ OFF
• k real↔reflected correspondences: each pair's perpendicular-bisector plane must be the SAME Π
• reflected height / compression is lawful with view angle, not free
• everything in front of Π that R(C) can see appears — and nothing else

CONSISTENCY
recover (m̂, q̂) from correspondence pairs — must coincide ; check handedness of every reflected glyph
FORBIDDEN : a reflection containing an object with NO real pre-image (or dropping one plainly in front) ;
signage readable forward in the glass ;
reflected pose / expression differing from the subject ;
a floating reflection whose base does not meet the object on Π.
```

  </details>

- **反复改图：2 vs 2.5 谁更扛一致性** — 同人同姿势连改衣服/发/背景，盯金属材质与细节谁更稳。UGC 换装、产品改色先看这个对照。 [@eachlabs](https://x.com/eachlabs) · [原帖](https://x.com/eachlabs/status/2098388258715533574)

- **一句话提分辨率：1152×2048 贴图重渲** — 旧图贴进 Images 2.5，写目标像素就够。4:3 / 9:16 / 16:9 比例另说——高清化不必玄学。 [@oreno_musume](https://x.com/oreno_musume) · [原帖](https://x.com/oreno_musume/status/2098335755496042610)

- **50 条开源 prompt 图谱：短句 + 工程长稿** — 371–553 词工程稿与 5 词短 prompt 同仓，附成片与 Flare/Sunburst 实测。CC BY 4.0，选型+抄作业一次齐。 [@Callirra](https://x.com/Callirra) · [原帖](https://x.com/Callirra/status/2098331457232265323)

- **2.0 vs 2.5：六组高难度同 prompt 硬刚** — ImagineArt 六组压测（时尚大片、极端镜头角、多色多人物）。选型别靠嘴，并排看谁还站得住。 [@FinanceYF5](https://x.com/FinanceYF5) · [原帖](https://x.com/FinanceYF5/status/2098318028006146332)

- **124 例档案库：prompt + 参数 + Flare/Sunburst 对照** — 嫌晒图不给配方？这里 124 例 / 185 输出 / 24 组 Flare vs Sunburst，连参数和出处一起收。营销选型先翻库，别再刷时间线碰运气。 [@iamrayyang](https://x.com/iamrayyang) · [原帖](https://x.com/iamrayyang/status/2098315204509729032)

- **Flare 量产下稿 → Sunburst 精修** — 速度用 Flare 堆构图，好看的再丢 Sunburst。省钱省时间的分工，别全压贵档。 [@aichan1224news](https://x.com/aichan1224news) · [原帖](https://x.com/aichan1224news/status/2098287192628240410)

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

- **连环漫画完整 Chat 分享：过程比单条 prompt 更值钱** — 作者直接甩 Images 2.5 整段对话，看模型局限怎么用上下文和 steering 顶回去——角色参考页先钉死能少改半帖。漫画连载别再伸手要「魔法一句」；先偷师整条修图轨迹。 [@bajolacurva](https://x.com/bajolacurva) · [原帖](https://x.com/bajolacurva/status/2103138227351679091) · [ChatGPT 分享](https://chatgpt.com/share/6ab53ae0-cd78-83e9-b827-221d8adc7dec)

- **照片→写实素描：四步流程可复用** — 收藏照变专业素描：开 Gemini/Grok/Image 2.5 → 丢参考图 → 贴 prompt → 出片。Sketch/线稿向种草素材流水线，原帖附图。 [@Alina_with_Ai](https://x.com/Alina_with_Ai) · [原帖](https://x.com/Alina_with_Ai/status/2102358953489481762)

- **Sketch 锁版 + Comments 只改一处 + Templates 出初稿** — 改到第三次构图也毁了？用 Sketch 锁版面、Comments 定点改、Templates 先有草稿，再配「保留一切、每轮只改一件事」。10 分钟出宣传图的编辑优先心法。 [@udhk_official](https://x.com/udhk_official) · [原帖](https://x.com/udhk_official/status/2101929747664003197)

- **时尚线稿→超写实：错配鞋四连（loafer/croc/…）** — 同一 editorial 线稿主题，只换错配鞋型：乐福、洞洞鞋、细高跟、球鞋。Sketch 控形 + Image 2.5 写实，穿搭号「一稿多变」示范。 [@zayyadatullah](https://x.com/zayyadatullah) · [原帖](https://x.com/zayyadatullah/status/2100871323719209165)

- **Sketch 认真线稿→写实成片：控形对照** — 线稿画扎实再喂 GPT Images 2.5 Sketch，写实成片直接贴脸对照。控构图别靠嘴炮，先把素描焊死。 [@AIPixLab](https://x.com/AIPixLab) · [原帖](https://x.com/AIPixLab/status/2100796248068702688)

- **漫画流程砍一刀：跳过下稿、从ネーム大改直出** — 分镜里先设计视线进出，再直接往完成形推——Image 2.5 把「下稿」这步吃掉了。Hakushi 全自动漫画 SKILL：ネーム→㊙质感→仕上げ。 [@FantasistaAI](https://x.com/FantasistaAI) · [原帖](https://x.com/FantasistaAI/status/2100500467688366331)

- **圆珠笔草图硬刚成片：Image2 vs Flare/Sunburst** — 只丢一张潦草构图（手写 5 ARCHES / KEEP HIM SMALL），同题一跑：2 High + 2.5 Max 4K。符号写进 prompt 的 Sketch→成片对照，n=1 但选型有感觉。 [@FlyAIgh](https://x.com/FlyAIgh) · [原帖](https://x.com/FlyAIgh/status/2100205158911361300)

- **草图一笔→右侧成图：Sketch 控形对照** — 左侧手绘线稿，右侧 GPT-Image 2.5 直接出片。创意人最爱的控形门槛——敢画就能玩花，Sketch 工作流入门对照。 [@krienknight](https://x.com/krienknight) · [原帖](https://x.com/krienknight/status/2100164110914932747)

- **手指框+箭头：Sketch 秒出 X 信息图** — 不会画画也行——框和箭头随手一画，Images 2.5 Sketch 压成专业向 X 信息图；「留什么/改什么」写进 prompt，排版控形这派必看。 [@orino009](https://x.com/orino009) · [原帖](https://x.com/orino009/status/2099800404045271203)

- **别卷画质：锁区编辑+Sketch 心法卡** — 2.5 真正杀器是「背景只改、人脸不动、Logo 别碰」。Sketch / Comment / Template / 多轮编辑串成「作→改→收」，SNS 图别再赌一发成片。 [@AImusicPlan](https://x.com/AImusicPlan) · [原帖](https://x.com/AImusicPlan/status/2099800403231539214)

- **随手涂鸦→一段剧情：Sketch 成片长文** — 西堂实测从 doodle 到剧情成片的完整路径。不会画画也能控形讲故事，Sketch 控构图那派必读。 [@congcongtang](https://x.com/congcongtang) · [原帖](https://x.com/congcongtang/status/2099747691093729719)

- **Sketch 构图口诀：大数字 / 人物 / 短说明** — 别用长文抠站位——先画「左大数字、右人物、下短说明」。厅内 POP / 社媒图：说什么之外，先把怎么摆画出来。 [@amusement_works](https://x.com/amusement_works) · [原帖](https://x.com/amusement_works/status/2099676470872518926)

- **Fashion Sketch→童话高定：2.5 出图 + MiniMax 成片** — 冰川蓝丝绸+水晶绣+层叠欧根纱，Sketch 变城堡晨雾大片再接视频。时装内容从线稿到成片一条链。 [@listudio](https://x.com/listudio) · [原帖](https://x.com/listudio/status/2099413148684234773)

- **Sketch→扎哈风美术馆：一句话草图变建筑** — 手绘草图在空中长成扎哈·哈迪德未来主义场馆。建筑/空间概念快速可视化，Sketch 控形最直观的一刀。 [@XiaoKooeye](https://x.com/XiaoKooeye) · [原帖](https://x.com/XiaoKooeye/status/2099408374249169169)
  <details>
  <summary>查看 / 复制提示词</summary>

```
一个简单的手绘草图在空中逐渐转化为一座具有扎哈·哈迪德风格的未来主义美术馆。
```

  </details>

- **手绘 Sketch→实拍：降低提示词门槛的三步法** — 说不清就先画：Sketch 降低小白门槛，也给会画的人当快速变体草稿机。韩语 Daily Prompt 830 号拆解可对照。 [@dailyprompt_](https://x.com/dailyprompt_) · [原帖](https://x.com/dailyprompt_/status/2099393116164030795)

- **Sketch 养演讲插图：草图+brief 终于对得上** — Maggie Appleton：2.5 能跟草图和 brief 对齐，整场 talk 幻灯片开造；并踩 MJ/Gemini「永远只对 60%」。 [@Mappletons](https://x.com/Mappletons) · [原帖](https://x.com/Mappletons/status/2098430366692388922)

- **Doodle / Markup：空白涂鸦或标注局部当参考图** — Atlas 上 Image 2.5：画布涂鸦进参考，或在已有图上标注局部改。Sketch 工作流的产品化版本。 [@atlas_cloud_ai](https://x.com/atlas_cloud_ai) · [原帖](https://x.com/atlas_cloud_ai/status/2098419940361642006)

- **Sketch 上手实测：视频直接秀控形** — ChatGPT Images 2.5 Sketch 试玩成片视频，比纯截图更直观。给客户/团队 demo「控形能干啥」用这条。 [@Elizaveta_ai](https://x.com/Elizaveta_ai) · [原帖](https://x.com/Elizaveta_ai/status/2098401123623199128)

- **Sketch 真能当蓝图：涂鸦→厚涂奇幻生物** — 极简涂鸦一摆，厚涂奇幻生物成片路径一目了然。一人团队做角色概念，这套最省话。 [@RockyXu3000](https://x.com/RockyXu3000) · [原帖](https://x.com/RockyXu3000/status/2098391683855708543)

- **实写分镜→漫画风 13 页：只换画风保构图** — GPT-Image 2.5 把 13 页实写改成漫画，角色设计对齐、分镜构图不漂。连载改画风别重画，这才是控形红利。 [@sharil12121](https://x.com/sharil12121) · [原帖](https://x.com/sharil12121/status/2098381006059552881)

- **手机 Sketch：打 @ 就能手绘下稿** — Images 2.5 Sketch 在手机上 @ 上手绘草图直接生成。通勤也能控形，别再说移动端只能文字玄学。 [@ai_sns_kaz](https://x.com/ai_sns_kaz) · [原帖](https://x.com/ai_sns_kaz/status/2098345839236468861)

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

- **经典跑车侧剖信息图：letterpress 语义切面公式** — 2×2 / 16:9，把车身拆成机械词/材质词/气动词贴在真实结构位；`$ car_scene` 变量可换四台冷门经典跑车。汽车科普海报别只会摆一张侧拍——先让术语长在骨架上。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2103281580085035495)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2x2 grid, 16:9, do this for 4 unusual but real classic cars: Create one image of a world famous classic sports car in side cutaway view.  Variable: $ car_scene = A technical automotive cutaway where the entire vehicle is reconstructed from mechanical terminology, material vocabulary, aerodynamic language, and performance descriptors placed in true structural position.  Function Draw($ car_scene){ <composition> Single centered vehicle, side profile with slight cutaway exposure. No background clutter, precise negative space, poster-like authority. The silhouette must be iconic and readable at first glance. </composition>  <semantic_inference> Infer chassis, frame, suspension, drivetrain, engine block, pistons, valves, intake, exhaust, wheel hub, steering column, brake assembly, upholstery, windshield, body panel. Use aerodynamic and driving terms where relevant: torque, grip, drag, speed, acceleration, cornering. </semantic_inference>  <letterpress_spec> MEDIUM: Precision lead type on smooth archival vellum. INK: Graphite black, gunmetal gray, soft steel undertones. IMPRESSION: Deep controlled embossing with strongest bite in chassis and engine, lighter in glass and airflow zones. STYLE: Mid-century automotive blueprint transformed into letterpress. </letterpress_spec>  <transformation> Chassis and engine use crankshaft, piston, axle, block, manifold, gearbox, differential in heavy industrial slab-serif. Body panels and interior use fender, hood, leather, dash, seat, trim, coupe in refined serif. Glass, airflow, and motion zones use windshield, glare, slipstream, drag, velocity in airy technical sans-serif. Wheel and suspension regions use hub, spoke, caliper, spring, traction, alignment in circular micro-type. The result should feel engineered, fast, and luxurious. </transformation>  Output: one image }
```

  </details>

- **上传照→高端编辑海报：3:4 上下 50/50** — 上半保真原图，下半抽成不超过四色的纸质手绘小插画，留大量暖米白负空间。种草/艺术书封面批产模板，附完整英文 prompt。 [@saniaspeaks_](https://x.com/saniaspeaks_) · [原帖](https://x.com/saniaspeaks_/status/2102972265541304823)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a high-end editorial poster using the uploaded photo as the exact reference, in a strict 3:4 vertical format divided horizontally into two equal 50/50 sections. Preserve the original photo faithfully in the top half, including subjects, identity, pose, clothing, objects, lighting, colors, and realistic texture, with only subtle premium editorial color grading. In the bottom half, reinterpret the most recognizable elements as a small, centered, minimalist handmade paper illustration using delicate imperfect lines, bold flat acrylic-like color shapes, subtle paper grain, organic edges, and no more than 4 colors extracted from the original photo. Keep the illustration only 10–20% of the bottom section with lots of warm off-white negative space and optional minimal editorial typography. The overall result should feel quiet, poetic, refined, artistic, premium, and like an independent art-book cover, avoiding cartoon, watercolor, colored-pencil, 3D, glossy, busy, or commercial aesthetics.
```

  </details>

- **中秋海报「月满欢喜」：禅意极简可返图** — 古风女子坐浅色台阶，手边月饼礼盒；桂花+珊瑚橙圆月锁情绪母题。节日封面别只会堆月饼——主题/风格/主体/情绪/意象槽位填完再出图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2102970523466797329)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题方向：东方禅意极简中秋封面海报
风格分支：中秋女性审美明快型
主体内容：一位古风女子坐在浅色台阶上，手边放着一个小小月饼礼盒
情绪母题：团圆、喜悦、温暖节日感
场景与意象：浅色台阶、桂花、珊瑚橙圆月、月饼礼盒、女子
```

  </details>

- **东方人文海报四主题：树纪/雨序/器语/纸间** — 同一套版式骨架，四个「时间与痕迹」主题——年轮、雨水刻度、陶土手温、纸上触痕。展览视觉/文化品牌/杂志封面别只会堆水墨滤镜，先让骨架替你讲时间。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2102782889318330399)

- **时尚大片字画同框四招：折射/破框/粗体叠图/走进巨型字体** — 光学折射、破框穿出、粗体叠图、走进巨型字体——人像与排版抢同一画面。时尚海报/杂志封面别只会把字贴边上，先让字和人抢空间。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2102756484475990402)

- **城市夜跑运动海报：荧光杂志风+中文锁字** — 深紫底配荧光黄与冷白，跑者与城市灯压在下半部；标题锁死「今晚，跑向风里」。运动海报别只会堆 exif——先锁色域与字，再谈剪影颗粒。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2102742993946226914)
  <details>
  <summary>查看 / 复制提示词</summary>

```
设计“城市夜跑”运动海报。深紫背景配荧光黄与冷白，音乐杂志式剪影和粗颗粒纹理；跑者与城市灯光位于下半部。上方超大标题准确写“今晚，跑向风里”，下方写“用脚步重新认识城市”。保持手机端可读，只渲染指定中文，不添加其他文字、Logo、水印或乱码。
```

  </details>

- **东方诗意巨物海报四联：超尺度主视觉+微人** — 西湖雨巨伞、白露初凝露滴、上元灯笼、云上春茶——一个超尺度主视觉+大色域+微型人物，节气/文旅/品牌 KV 立刻有完整作品感。巨物别只会放大道具，先让尺度差替你讲故事。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2102738823931118067)

- **字内灌图故障字体四联：BEAT / RUSH / WAVE / VOID** — Images 2.5 把连续画面灌进字母，边沿各玩一套：回声描边、速度切片、波形位移、碎边。音乐/活动/街头文化海报别只会叠噪点——先让字本身变成画面容器。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2102712596151296379)

- **中秋海报「月下清梦」：禅意极简女性向** — 古风女子+小玉兔坐白高台，巨大金月轮压孔雀黑夜空。9:16 竖版、珍珠白/香槟金/孔雀蓝控色，标题区留白写死。节日封面别只会堆月饼——先锁情绪母题再谈排字。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2102677759038496809)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题方向：东方禅意极简中秋封面海报
风格分支：中秋梦感女性向
主体内容：一位古风女子坐在白色高台边，身旁一只小玉兔安静陪伴
情绪母题：梦感、团圆、治愈
场景与意象：巨大金色月轮、白色高台、玉兔、女子、孔雀蓝夜空
构图与空间：9:16 竖版构图，月轮位于上半部分偏中，人物与玉兔位于下方，顶部和右侧保留完整标题区
色彩控制：珍珠白作为高明度基底，香槟金用于月轮和局部边缘光，孔雀蓝用于夜空大色块，玉兔保持干净暖白；避免整图发蓝或月色过黄
光线与质感：柔亮月光，细腻平面海报感，画面清透，低灰度
画幅比例：9:16
补充要求：玉兔要简洁可爱但不幼态，整体要有中秋梦感和爆款封面气质，画面留白处配上合适的文字
```

  </details>

- **机械键盘 3:4 百科海报：包豪斯模块配方** — 竖版信息海报：配列/轴体/行程/压力/键帽/连接/结构九模块一次排完，中文标题控字稳。硬核产品百科别堆图标——网格+克制三色就够。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2102417129022898550)
  <details>
  <summary>查看 / 复制提示词</summary>

```
一张 3:4 竖版机械键盘百科信息海报，融合包豪斯功能主义、工业设计档案与现代数码实验室视觉。顶部以斜切构图展示一把紧凑型机械键盘，并在旁边拆解展示键帽、机械轴体、定位板、PCB 和卫星轴，工作室硬柔结合光形成清晰微阴影；标题“机械键盘”沿左侧网格排列，英文副标题“Mechanical Keyboard”，搭配“输入设备／机械开关”圆形分类标签、结构爆炸图与键盘尺寸比例尺。

中部采用红、黄、蓝三种克制强调色和模块化几何卡片，完整呈现九类信息：60%、65%、75%、80%、96%、100%常见配列；线性轴、段落轴、点击轴触感曲线；触发行程与总行程；触发压力；键帽常见材质与高度；有线、2.4GHz、蓝牙连接方式；热插拔与焊接 PCB 区别；定位板、夹心结构与 Gasket 等常见内部结构；延迟、轮询率、全键无冲与使用场景。

每个模块只保留一种主要图形，避免视觉堆叠。采用12列网格、48pt边距、8pt基线、统一2pt线性图标。背景为接近纯白的浅灰，文字为深灰，数据使用等宽字体。底部设置术语解释与参数来源栏，明确“不同品牌与型号存在差异”，禁止虚构具体型号性能或不存在的技术标准。
```

  </details>

- **观星之夜：中文活动海报控字配方** — 午夜蓝+望远镜剪影，大标题「今晚抬头看星星」指定中文不乱码。活动海报控字——只渲染你写的那两句，别让模型自由发挥星座 logo。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2102412386204557689)
  <details>
  <summary>查看 / 复制提示词</summary>

```
设计“观星之夜”活动海报。午夜蓝背景，银白星点与柔和蓝紫光晕，下半部是一座小山上的望远镜剪影。上方大标题准确写“今晚抬头看星星”，下方写“留一点时间给遥远的光”。星空层次细腻，文字醒目；只渲染指定中文，不添加星座名称、Logo、水印或乱码。
```

  </details>

- **病毒话题→FIT 打分模块拼信息图** — Astra/ChatGPT 先挖热点，再按 FIT 打分拼模块，Image 2.5 直出 4 张 4:5。选题可视化别从空白画布起——先打分再出图。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2102383160185208960)
  <details>
  <summary>查看 / 复制提示词</summary>

```
4 images, 4:5. Do research, pick viral topics (including an AI treadmill). For TOPIC, choose modules by maximizing:
FIT(module) = 0.30 * explanatory_power + 0.22 * topic_relevance + 0.18 * visual_clarity + 0.14 * comparison_value + 0.10 * editorial_readability + 0.06 * aesthetic_cohesion
Possible modules: map, timeline, ranked table, category cards, methodology box, anatomy callout, process diagram, matrix chart, flow pipeline, network diagram, scatter/radar comparison, case-study cards, source footer.
Only include modules whose FIT score exceeds threshold.
Then order the chosen modules by narrative logic: HOOK → EXPLAINER → METHOD → METRICS → RESULTS → NOTES
```

  </details>

- **Quechua 户外广告：4:5 数字拼贴完整 campaign** — Behance 级户外 key visual，竖版 4:5 社媒主视觉。PLAY OUTSIDE 叙事写死，反 AI 糊/反库存图；户外品牌 campaign 直接抄长 prompt。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2102341408208400884)
  <details>
  <summary>查看 / 复制提示词</summary>

```
QUECHUA — “PLAY OUTSIDE.”
BEHANCE-LEVEL DIGITAL COLLAGE CAMPAIGN
FORMAT
Ultra-Premium QUECHUA Outdoor Campaign Key Visual
Vertical 4:5 Instagram Hero Creative
Behance Front Page Quality
Global Outdoor & Hiking Campaign
Senior Social Media Art Direction
Contemporary Outdoor Photography × Handcrafted Digital Collage × Editorial Graphic Design
8K UHD
Hyper-Realistic Outdoor Photography
High-End Editorial Art Direction
Print-Quality Graphic Execution
Premium Commercial Adventure Campaign
Strong Visual Storytelling
Tactile Mixed-Media Aesthetic
Zero AI Slop
Zero Generic Hiking Advertisement
Zero Stock-Photo Feeling
Zero Influencer Travel Aesthetic
Zero Corporate Catalogue Layout
Zero Luxury-Adventure Copycat
Zero Random Graphic Decoration
The final artwork must feel deliberately designed by a senior art director and assembled by a professional digital collage artist — not generated as a collection of unrelated elements.
CREATIVE CONCEPT
CAMPAIGN:
“PLAY OUTSIDE.”
CORE MESSAGE:
THE OUTDOORS BELONGS TO EVERYONE.
The campaign celebrates the instinct to leave the ordinary behind.
A trail after work.
A mountain on the weekend.
A cold morning hike.
A sudden change in weather.
A long walk with friends.
A place you have never explored before.
Quechua becomes the equipment that makes everyday exploration possible.
The visual should communicate:
EXPLORATION
FREEDOM
DISCOVERY
ADVENTURE
MOVEMENT
RESILIENCE
COMMUNITY
OUTDOOR LIFE
The campaign should feel:
AUTHENTIC
ADVENTUROUS
YOUTHFUL
RAW
OPTIMISTIC
HUMAN
ENERGETIC
ACCESSIBLE
ART DIRECTION
Think:
QUECHUA × OUTDOOR EDITORIAL × MOUNTAIN JOURNAL × HANDCRAFTED POSTER × TOPOGRAPHIC MAP × CONTEMPORARY DIGITAL COLLAGE
The artwork should combine highly realistic outdoor photography with visibly handmade graphic interventions.
The contrast is essential:
REAL HUMAN
+
REAL OUTDOOR ENVIRONMENT
+
REAL QUECHUA PRODUCT
+
HANDMADE GRAPHICS
+
TOPOGRAPHIC INFORMATION
+
EDITORIAL TYPOGRAPHY
Do not make the environment look like an artificial fantasy landscape.
The mountain must feel physically real.
The weather must feel real.
The clothing must look genuinely functional.
The person must look like someone who actually hikes.
Introduce controlled imperfections:
rough paper edges
hand-painted marks
topographic contour lines
slightly misregistered ink
screen-print texture
cut-paper shapes
field-note markings
visible paper fibers
analog grain
subtle photocopy texture
These imperfections should feel intentionally art-directed.
Never messy.
Never amateur.
PHASE 1 — HERO PHOTOGRAPHY
SUBJECT:
One energetic everyday outdoor explorer.
Age:
20–30.
Gender:
Auto select based on strongest visual composition.
Casting:
Contemporary global and diverse.
The person must look like a genuine Quechua customer rather than a fashion model.
Natural facial structure.
Natural skin texture.
Realistic body proportions.
Practical outdoor appearance.
No influencer aesthetic.
No luxury travel aesthetic.
No expedition-superhero styling.
EXPRESSION:
Focused.
Curious.
Confident.
Natural.
A subtle authentic smile or concentrated expression.
The emotion should communicate:
“I WANT TO SEE WHAT IS AROUND THE NEXT CORNER.”
ACTION
Capture the subject at the absolute peak of outdoor movement.
Preferred actions:
HIKING UPHILL
TRAIL RUNNING
CROSSING A ROCKY RIDGE
CLIMBING A STEEP TRAIL
WALKING THROUGH A FOREST
JUMPING ACROSS A SMALL STREAM
DESCENDING A MOUNTAIN PATH
TREKKING THROUGH LIGHT RAIN
Choose ONE action with the strongest silhouette.
The action must create a powerful diagonal.
The body should naturally travel from:
TOP LEFT
toward
BOTTOM RIGHT.
The terrain should reinforce the movement direction.
Capture authentic physical effort.
Boots should interact naturally with rocks, soil or trail surface.
Clothing should react naturally to wind and movement.
No impossible body positioning.
No floating feet.
No fantasy climbing.
HERO PRODUCT
ONE CLEARLY VISIBLE QUECHUA PRODUCT ONLY.
Choose the product that best supports the selected adventure.
Examples:
QUECHUA HIKING JACKET
QUECHUA BACKPACK
QUECHUA HIKING BOOTS
QUECHUA FLEECE
QUECHUA RAIN JACKET
QUECHUA TREKKING TROUSERS
QUECHUA TENT
The product must be unmistakably visible.
Product placement should feel naturally integrated into the adventure.
No floating product.
No duplicate product.
No product lineup.
The hero product receives secondary visual emphasis after the explorer.
Preserve accurate product construction:
fabric
stitching
zippers
buckles
straps
pockets
waterproof details
sole construction
technical materials
brand markings
PHOTOGRAPHIC STYLE
Premium editorial outdoor campaign photography.
Authentic natural lighting.
Documentary adventure energy.
Real mountain atmosphere.
Natural skin.
High-resolution textile detail.
Realistic terrain.
Camera:
SONY A1 II
Lens:
85mm
Aperture:
f/2.8
Camera position:
Slight low-angle hero perspective.
Crop:
3/4 body or full body depending on action.
The explorer must be isolated with an exceptionally clean professional cutout when required for the collage.
Preserve:
hair detail
fabric edges
hands
boots
backpack straps
equipment
natural movement
No artificial cutout halo.
No white outline.
No excessive sharpening.
PHASE 2 — COLOR FOUNDATION
PRIMARY QUECHUA OUTDOOR BLUE
Use a strong outdoor-inspired Quechua blue as the principal graphic accent.
SUPPORTING COLORS:
Off-white
Warm stone grey
Deep forest green
The palette should feel connected to:
mountain sky
rock
forest
trail
technical outdoor equipment
Keep the graphic system controlled.
Avoid excessive colors.
PRIMARY PAINT FORM
Create ONE enormous irregular outdoor-blue paint form.
Occupy approximately:
45–55% of the composition.
The shape should function as the visual foundation of the collage.
Appearance:
hand-painted
thick brush texture
organic edges
dry-brush imperfections
visible bristle marks
slight transparency variations
screen-print character
paper interaction
The paint should feel physically applied to recycled expedition paper.
Not a smooth digital blob.
Not a generic vector shape.
The explorer should overlap the paint form.
The product must remain completely visible.
PHASE 3 — COLLAGE SYSTEM
Introduce exactly five major handcrafted graphic elements.
Select from:
TOPOGRAPHIC CONTOUR LINES
TRAIL ROUTE LINES
HAND-DRAWN CIRCLES
COMPASS SYMBOLS
ALTITUDE MARKERS
MOUNTAIN SILHOUETTES
GPS COORDINATE MARKINGS
ELEVATION GRAPHICS
HAND-DRAWN ARROWS
WEATHER SYMBOLS
TERRAIN MAP FRAGMENTS
HALFTONE DOTS
FIELD-NOTE MARKINGS
Each element must have a visual purpose.
Do not scatter graphics randomly.
Graphics should reinforce:
direction
altitude
location
distance
terrain
exploration
Use asymmetric placement.
Create a strong diagonal rhythm.
Some elements may pass behind the explorer.
Some may partially disappear beneath typography.
One or two graphic elements may overlap the subject subtly to create physical depth.
MATERIAL LANGUAGE
Build the collage as though physically assembled from an explorer’s field notebook.
Include subtle:
torn-paper edges
folded map fragments
screen-print texture
photocopy artifacts
ink bleed
dry-brush marks
recycled paper fibers
topographic printing
handwritten route markings
subtle registration offsets
analog grain
The artwork should feel tactile.
It should resemble:
A MOUNTAIN MAP
AN OUTDOOR MAGAZINE
A HANDMADE ADVENTURE POSTER.
Do not overdo the texture.
PHASE 4 — TYPOGRAPHY
PRIMARY HEADLINE:
PLAY OUTSIDE.
Make this the second-largest visual element after the explorer.
Large bold uppercase geometric sans-serif.
Extremely strong weight.
Tight leading.
Compact composition.
Minimal tracking.
Allow a slight 2–4° rotation.
The typography should feel physically printed onto the artwork.
Not floating.
Not glossy.
Not 3D.
Not futuristic.
Typography should interact with the collage.
Allow:
partial cropping
layer overlap
masking
paint interruption
map-line interruption
edge cropping
PRIMARY COPY:
PLAY OUTSIDE.
SUPPORTING COPY:
Built for whatever the trail brings.
Keep supporting copy small and highly readable.
TYPOGRAPHIC HIERARCHY
01
QUECHUA BRANDING
02
PLAY OUTSIDE.
03
Built for whatever the trail brings.
04
TRAIL / ALTITUDE / ADVENTURE INFORMATION
05
DISCOVER MORE
The headline must remain instantly readable even at Instagram thumbnail size.
PHASE 5 — QUECHUA BRANDING
Place the official QUECHUA branding in the upper-left.
Preserve:
correct proportions
clear space
accurate wordmark
brand integrity
Do not distort.
Do not stretch.
Do not place the logo inside unnecessary effects.
Small supporting line:
OUTDOOR EQUIPMENT
The branding should remain visible but should not compete with:
PLAY OUTSIDE.
PHASE 6 — BACKGROUND
BACKGROUND COLOR:
Warm Light Stone Grey
The background should resemble premium recycled expedition paper.
Add extremely subtle:
paper grain
recycled fiber
analogue noise
soft printing imperfections
faint topographic texture
Texture opacity:
Below 15%.
The background must remain visually quiet.
The energy comes from:
THE EXPLORER
THE TERRAIN
THE PAINT FORM
THE TOPOGRAPHIC GRAPHICS.
PHASE 7 — COMPOSITION
MODEL POSITION:
Off-center.
Never dead center.
Place the explorer slightly toward the visual intersection of the composition.
NEGATIVE SPACE:
Approximately 18%.
Allow breathing room around the major elements.
LAYER ORDER:
01 BACKGROUND
02 PAPER TEXTURE
03 TOPOGRAPHIC MAP FRAGMENTS
04 PAINT FORM
05 HANDMADE GRAPHIC ELEMENTS
06 EXPLORER PHOTOGRAPH
07 PRODUCT
08 TYPOGRAPHY
09 MICRO INFORMATION
10 BRANDING
11 FOOTER
The explorer should appear to physically exist inside the collage.
MOVEMENT DIRECTION
TOP LEFT
↓
MOUNTAIN RIDGE
↓
EXPLORER
↓
BOTTOM RIGHT
The entire composition should feel as if it is moving toward an unseen destination.
The eye should travel naturally:
BRANDING
↓
HEADLINE
↓
FACE
↓
PRODUCT
↓
TRAIL
↓
CTA
PHASE 8 — VISUAL DEPTH
Create three distinct depth planes.
BACKGROUND:
Recycled paper, faint mountain forms and subtle map texture.
MIDGROUND:
Paint forms, contour lines, trail maps, compass graphics and altitude information.
FOREGROUND:
Explorer, product and typography.
Some contour lines should disappear behind the explorer.
Some typography should overlap the paint.
One small map element should overlap the subject subtly.
This creates the feeling of a physically assembled outdoor editorial collage rather than a flat AI composition.
PHASE 9 — BRAND DNA
The artwork must communicate Quechua’s core outdoor identity:
ACCESSIBLE ADVENTURE
EVERYDAY EXPLORATION
HIKING
OUTDOOR DISCOVERY
PRACTICAL INNOVATION
WEATHER READINESS
COMFORT
COMMUNITY
NATURE
MOVEMENT
The explorer should never look like an untouchable professional expedition athlete.
The campaign should make the viewer think:
“I could go there.”
That feeling is more important than displaying extreme athletic performance.
PHASE 10 — INFORMATION DESIGN
Introduce a small editorial information block.
Example:
01 / MOUNTAIN TRAIL
ALT. 2,480 M
HIKING / TREKKING
ALL-WEATHER EQUIPMENT
DISTANCE / 08.4 KM
Use tiny but perfectly legible typography.
Create visual hierarchy through:
scale
weight
spacing
alignment
Not through excessive colors.
PHASE 11 — SECONDARY COLLAGE FRAME
Introduce ONE small secondary photographic frame.
Place it asymmetrically.
Inside:
A secondary outdoor adventure moment.
For example:
a small group of hikers crossing a mountain trail.
Frame it with a thin outdoor-blue border.
Add:
02 / 04
MOUNTAIN COLLECTION
The secondary image must feel like part of a printed outdoor field journal.
It should support the campaign narrative without competing with the hero explorer.
PHASE 12 — FOOTER
Create a minimal bottom strip.
Include:
QUECHUA
DISCOVER MORE →
https://t.co/rvyX2uzLvo
OUTDOOR EQUIPMENT
Use very small clean typography.
Keep the footer extremely restrained.
No sale banner.
No clutter.
PHASE 13 — GRAPHIC IMPERFECTION
Introduce controlled imperfections characteristic of high-end physical outdoor collage:
slightly uneven paint edges
tiny ink inconsistencies
subtle map displacement
minor registration shift
hand-drawn contour variation
faint photocopy noise
slight paper edge wear
These details should make the artwork feel human-made.
The composition must still feel extremely polished.
Think:
ART-DIRECTED IMPERFECTION.
Not RANDOM IMPERFECTION.
PHASE 14 — LIGHTING & IMAGE QUALITY
The original outdoor photograph must retain premium commercial photography quality.
Natural mountain sunlight.
Strong directional light.
Realistic atmospheric depth.
Crisp highlights.
Controlled shadows.
Natural skin exposure.
Detailed technical fabric.
Realistic rock and vegetation texture.
Sharp hero product.
Natural environmental reflections.
No artificial HDR.
No plastic skin.
No beauty retouching.
No excessive clarity.
No fake cinematic glow.
No neon.
No fantasy lighting. over-saturated landscape.
PHASE 15 — FINAL ART DIRECTION
The final visual should look like a real campaign artwork created by:
A SENIOR SOCIAL MEDIA ART DIRECTOR
A PROFESSIONAL OUTDOOR PHOTOGRAPHER
A DIGITAL COLLAGE ARTIST
A TYPOGRAPHER
A MAP / EDITORIAL DESIGNER
Every element should appear intentional.
Every layer should have a purpose.
The explorer should provide realism.
The Quechua product should provide commercial relevance.
The typography should provide communication.
The mountain environment should provide emotion.
The map graphics should provide exploration.
The paint form should provide brand energy.
The paper texture should provide physicality.
The composition should provide movement.
FINAL FEEL
If:
QUECHUA
×
A CONTEMPORARY OUTDOOR MAGAZINE
×
A HAND-PAINTED MOUNTAIN POSTER
×
A TOPOGRAPHIC FIELD JOURNAL
×
A MODERN GRAPHIC DESIGN STUDIO
created one campaign together.
The final result should feel:
RAW.
HUMAN.
OUTDOOR.
TACTILE.
ADVENTUROUS.
ACCESSIBLE.
YOUTHFUL.
EXPLORATIVE.
REAL.
Not a catalogue.
Not a generic hiking advertisement.
Not a luxury outdoor campaign.
Not a travel-influencer post.
Not a corporate retail graphic.
Not an AI-generated mountain collage.
A genuine Quechua campaign where:
PHOTOGRAPHY + TERRAIN + PRODUCT + TYPOGRAPHY + TOPOGRAPHIC GRAPHICS + HANDCRAFTED COLLAGE
become one visual system.
FINAL GENERATION SPECIFICATION
Vertical 4:5
8K UHD
Hyper-realistic outdoor photography
Sony A1 II
85mm
f/2.8
Authentic human anatomy
Natural skin texture
Detailed technical outdoor apparel
Accurate Quechua product construction
Clean professional cutout
Outdoor blue / off-white / stone grey / forest green
Controlled graphic palette
Hand-painted collage elements
Topographic map graphics
Recycled paper texture
Editorial typography
Asymmetrical composition
Strong diagonal movement
18% negative space
Premium commercial photography
Contemporary digital collage
Behance front-page art direction
Instagram hero creative
Print-ready finish
High visual hierarchy
High brand recognition
ZERO AI SLOP
```

  </details>

- **雪豹百科信息卡：瑞士国际主义网格模板** — 2:3 竖版图鉴卡：顶 30% 去背主体 + 中 60% 九模块网格 + 底 10% 来源栏。换物种改模块就能出博物馆级信息图——内容号/科普账号直接填槽。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2102220678976204987)
  <details>
  <summary>查看 / 复制提示词</summary>

```
一张 2:3 竖版的极简艺术风雪豹百科信息卡，博物馆展品级视觉品质，采用瑞士国际主义与高级自然历史图鉴语言。顶部约 30%：纯白背景上的成年雪豹去背景工作室式全身侧面特写，真实保留灰白毛发、黑色环状斑纹、粗长尾巴、宽大脚掌与面部细节，不拟人化；配超大细线标题“雪豹”、小号斜体“Panthera uncia”、胶囊标签“哺乳纲／猫科／豹属”、亚洲分布小地图与海拔活动范围轴。

中部约 60%：基于 12 列与 8pt 网格，清晰排列九大模块——体长、体重、尾长与寿命基础参数；身体结构与高海拔适应特征；食物组成与典型猎物；昼夜活动规律；繁殖周期与幼崽成长；栖息地类型与海拔分布；雪豹与其他大型猫科动物对比；种群威胁因素；保护等级、保护行动与生态价值。图表采用轮廓比例图、足迹尺寸图、海拔分布图、猎物网络图和简洁时间轴。

底部约 10% 标注保护等级、数据年份、资料来源与更新时间。主色取冰川灰、雪白、岩石褐与石墨黑，少量冷蓝强调；思源黑体 Light、DIN 与 Roboto Mono，2pt 线性图标，0.5pt 淡分割线，大面积留白。所有生物数据必须准确可核验，不虚构种群数字，不使用夸张描述，中文清晰可读，无乱码。
```

  </details>

- **红楼群芳夜宴 × 最后的晚餐：13人横向群像槽** — 只借达芬奇「中1+左右各6+长桌」结构，人物全换成《红楼梦》清代工笔语境——左黛玉侧、右宝钗侧，不增减不乱序。国风群像海报/长卷 KV 直接填槽。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2102218694873248214)
  <details>
  <summary>查看 / 复制提示词</summary>

```
《红楼梦·群芳夜宴》 × 《最后的晚餐》13人经典群像构图 × 仅借用横向群像结构 × 约1.9:1宽幅 × 画面左侧6人：妙玉、王熙凤、史湘云、探春、李纨、林黛玉 × 中央：贾宝玉 × 画面右侧6人：薛宝钗、迎春、惜春、平儿、袭人、晴雯 × 横向长桌宴席 × 清代宫廷工笔人物画

说明：
“《最后的晚餐》13人经典群像构图”仅借用其中央人物＋左右各6人＋横向长桌＋左右人物分组的构图关系。画面严格保持左6人、中央1人、右6人，共13人。贾宝玉位于画面正中央，林黛玉与薛宝钗分别紧邻贾宝玉两侧，其余人物按照提示词规定的顺序向画面两侧展开。13人全部清晰可见，不增减人物，不打乱左右顺序，不将人物分散到其他区域。人物沿长桌两侧形成完整横向群像。仅借用《最后的晚餐》的构图结构，故事、人物、服饰、场景与绘画语言均采用《红楼梦》的中国古典语境，不出现西方宗教人物或宗教元素。
```

  </details>

- **东方文化海报四主题：笔毫/青瓷螺旋/金箔/印面留白** — 远看大形、近看材质：毫端成意、一坯旋成、一箔成光、方寸成章。传统工艺/品牌视觉/文化海报的留白结构母版，气质比堆纹样更值钱。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2102020479758246280)

- **Nike Blueprint：黑白产品解构广告可复用 prompt** — 羽绒夹克对半拆色 + 技术蓝图叠印 + Design Lab 标注。运动服饰 KV 要「像工程图一样高级」时直接改品牌槽。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2102012943433167168)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium high-concept Nike product advertisement poster, square 4:3 ratio, entirely monochrome black and white. “THE BLUEPRINT” — A designer’s technical deconstruction of the Nike down puffer jacket. The jacket is split perfectly in half vertically, revealing two colorways simultaneously. Technical garment construction blueprints are overlaid directly on the jacket fabric. Everything is desaturated — pure black, white, and gray.

Young male model, approximately early 20s. Short cropped hair, very clean face. Chiseled sharp jaw, high cheekbones. EXPRESSION: intense, direct, unwavering stare straight into camera lens. Zero emotion — stoic, powerful, commanding presence. Lips slightly pressed together, jaw set. Upper body shot — head, shoulders, torso visible down to approximately mid-waist. Face positioned upper-center of frame. Skin tones rendered in rich grayscale — deep contrast, cinematic black and white photography.

Nike oversized down puffer jacket, full zip center, hood attached and up, hood framing the head with interior visible as lighter cream tone. The jacket is divided exactly down the center vertical zip/seam into two perfectly mirrored halves.

Left half: jet black matte panel with white Nike swoosh logo, visible puffer quilting lines, fabric absorbing light.

Right half: off-white or cream panel with black Nike swoosh logo, visible quilting lines, fabric bright and slightly luminous.

The split is razor sharp and precise at the center zip, both halves identical in silhouette and construction.

Technical blueprint overlay printed directly on fabric. On black left half: fine white line drawings including grid overlay, garment pattern cutlines, seam lines, measurement boxes, hood arcs, pocket geometry, zipper sketch lines, quilting layout grid. On white right half: fine black line drawings including sleeve seam lines, panel joins, annotation boxes, measurement brackets, fill distribution zones, cuff detail insets. Thin annotation lines extend outward into the background architectural drawings.

Horizontal lines with small annotation text beside them such as:
“FILL WEIGHT — 550 DOWN CLUSTER”
“SHELL MATERIAL — RIPSTOP NYLON”
“SEAM TYPE — FLAT-LOCK STITCH”
“HOOD DRAFT — STRUCTURED BAFFLED”

Right-side dark text:
“INSULATION — DUCK DOWN 90/10”
“WEIGHT — 680G TOTAL GARMENT”
“TEMP RATING — -15°C CERTIFIED”
“POCKET SPEC — INTERNAL DROP-IN”

Vertical lines include top annotation:
“COLLAR HEIGHT — 8CM”
and bottom annotation:
“LENGTH — CROPPED HIP”

All annotation text in small, clean monospace technical font with precise hairline rules.

Around the jacket, faint handwritten notes scattered in gray tones, illegible cursive with arrows and circles, organic and spontaneous, fading toward the edges.

Background is clean neutral mid-gray, slightly darker at corners with subtle vignette. Pure studio environment with no visible distractions.

Top center: small spaced caps white “NIKE DESIGN LAB”
Above the title, thin serif italic “The Blueprint”

Bottom left: bold condensed sans-serif stacked “BUILT FROM SCRATCH.”

Bottom right: technical monospace block:
“STYLE NO. NK-DWN-026
COLORWAY A: ONYX BLACK
COLORWAY B: SAIL WHITE
CONSTRUCTION: BAFFLED DOWN
NIKE SPORTSWEAR — FW2026”

Bottom center: small spaced caps:
“EVERY GREAT PRODUCT STARTS WITH A LINE ON PAPER”

Infographic callouts include thin outlined rectangles labeled:
“TECH SPEC 01 — BODY CONSTRUCTION”
“TECH SPEC 02 — ZIPPER SHELL WIND RESISTANT”
“TECH SPEC 03 — FLAT-LOCK SEWN NO COLD SPOTS”
and
“COLORWAY A/B — ONYX / SAIL”

Color palette strictly monochrome grayscale: jet black, off-white, mid gray.

Style: Nike premium design editorial campaign, technical blueprint aesthetic with high-fashion black and white photography, photorealistic model, cinematic contrast, luxury sportswear campaign, 8K quality, museum-level poster.
```

  </details>

- **半写实半纸艺：上真图下艺术化编辑海报** — 上半锁身份姿态的电影感写真，下半撕纸/浮雕纸艺叙事——人物与城市/职业槽可换。旅行/人设社论海报一条母版。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2102005089431122308)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium 4:5 editorial poster using the provided photograph of [PERSON]. The top half is a realistic cinematic photograph, preserving the person’s exact identity, face, pose, clothing, hairstyle, and environment.

The bottom half transforms the same scene into a beautiful handcrafted layered paper-cut illustration, recreating the person and their world using textured paper, torn edges, embossed layers, subtle shadows, delicate linework, and miniature environmental details representing [THEIR CITY / PROFESSION / HOBBY / JOURNEY].

Use warm ivory paper, muted sophisticated colors, tactile paper grain, elegant serif typography, minimalist supporting text, generous negative space, and a refined luxury travel-editorial aesthetic.

Photograph above → paper-crafted story below.
Make the transition seamless, artistic, emotional, and highly recognizable.
```

  </details>

- **Apple Watch「TIME MOVES WITH YOU」：表盘弧线锁动势** — 瑞士极简 4:5 产品海报：巨字 TIME 垫底，表盘 circuar motion trail 把运动员动作焊进「时间在动」。3C/运动穿戴 KV 可直接改品牌。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2101978790704656819)
  <details>
  <summary>查看 / 复制提示词</summary>

```
APPLE WATCH SERIES 12 — “TIME MOVES WITH YOU”
4:5 vertical premium poster, 8K, bold commercial layout × Swiss minimalism × photorealistic product advertising
🧠 CORE IDEA:
“TIME, IN MOTION.”
🎬 LAYOUT:
BACKGROUND BLOCK:
Large rounded rectangle in clean Apple white with a subtle silver gradient and soft architectural shadows
GIANT TYPOGRAPHY:
“TIME”
bold, oversized, cropped, sitting behind subject and product
👤 SUBJECT:
Athletic young adult in motion on a professional tennis court
Apple Watch Series 12 clearly visible on wrist
natural movement, realistic skin and fabric
premium commercial sports photography
⌚ PRODUCT + CONCEPTUAL TWIST:
Apple Watch Series 12 becomes the visual center of the action →
A precise circular motion trail extends from the watch face around the athlete:
* thin metallic arc
* subtle translucent rings
* perfectly controlled geometry
* realistic reflections
* no fantasy effects
The circular form visually connects time, movement, and the athlete’s motion while keeping the watch completely photorealistic.
✨ GRAPHIC ELEMENTS:
* minimal geometric ticks
* thin measurement lines
* subtle metallic reflections
* small typographic annotations
* generous negative space
✍️ TEXT SYSTEM:
Top pill:
“Apple Watch Series 12”
Small text:
“Designed for movement.”
BOTTOM FEATURE STRIP:
* Advanced Fitness Tracking
* Heart Rate Monitoring
* Workout Insights
* All-Day Wear
```

  </details>

- **单人像一键四联海报：SIGNAL/MOTION/ECHO/MINT** — 同一肖像同一视觉系统，一口气出四种版式：竖排叠字、切片错位、镜像回声、巨型字母嵌脸。时装社论/封面连更直接抄，9:16 分开发不要拼成一张。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2101971646999363637)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Prompt:

Create four independent portrait poster variations from the uploaded photo, all belonging to the same visual system.

Portrait: [use uploaded portrait]
Main color: [mint green / red / blue / yellow / custom]
Typography theme: [SIGNAL / MOTION / ECHO / MINT, or custom words]
Aspect ratio: 9:16

Keep the same person, facial identity, hairstyle, outfit, photographic realism, color palette, typography family, and editorial art direction across all four posters.

The four posters must feel like one cohesive fashion editorial series, but each must use a clearly different layout concept:

1. Vertical Type Layering
   Use oversized condensed typography as a strong vertical spine. Let letters move in front of and behind the portrait, creating clear depth and layered interaction.

2. Sliced Portrait
   Split the portrait into several clean horizontal sections and slightly offset each slice. Keep the face recognizable and beautiful. Avoid RGB glitch, noise, or digital distortion.

3. Echo Portrait
   Show the same subject twice using contrasting scale or orientation, such as one normal portrait and one enlarged flipped portrait. Use repeated typography or outline type to create a visual “echo.”

4. Portrait Inside Oversized Type
   Use huge bold typography as the main composition. Let parts of the face, eyes, lips, hair, or shoulders appear through and between the letterforms, so the portrait becomes integrated into the typography.

Use a modern fashion-editorial aesthetic with oversized condensed sans-serif type, strong portrait photography, clean geometric structure, generous negative space, fine rules, small meaningful editorial text, and subtle graphic blocks.

Keep the information hierarchy clear: large typography first, portrait second, small editorial text third.

Use meaningful supporting copy related to the visual concept rather than random placeholder text.

Keep skin realistic with natural texture, realistic hair strands, natural fabric folds, and photographic lighting. Avoid plastic skin, CGI appearance, excessive retouching, random symbols, meaningless text, heavy UI graphics, sparkles, numbering, NO., VOL., and decorative clutter.

Generate all four as separate standalone 9:16 posters, not combined into a single collage.
```

  </details>

- **手工纸撕口旅行编辑海报：可填国家槽** — 整张桑皮纸纤维底 + 中轴有机撕口露出地标；[COUNTRY/LOCATION] 自动脑补文化符号。3:4 旅行社论/目的地海报填槽即出。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2101958048827027839)
  <details>
  <summary>查看 / 复制提示词</summary>

```
GPT Image 2.5 

Prompt:
Create a premium 3:4 vertical handmade-paper editorial artwork for [COUNTRY / LOCATION / SUBJECT].

VISUAL GENERATION
Build the entire composition creatively from the words [COUNTRY / LOCATION / SUBJECT]. Automatically imagine the most iconic visual identity, environment, architecture, landscape, people, atmosphere, and cultural details associated with the subject.

PAPER
Fill the entire frame with one thick, warm ivory sheet of authentic handmade paper. Show visible mulberry fibers, tiny fibers, subtle wrinkles, natural speckles, faint stains, uneven handmade texture, and soft physical imperfections.

CENTRAL TORN WINDOW
Create one tall, organic vertical tear through the center of the paper. The opening should occupy roughly 30–40% of the frame width and 60–70% of the frame height, with an elongated natural shape.

Make the edges irregular and naturally hand-torn, with exposed white fibers, small variations in width, slightly lifted paper edges, and delicate realistic shadows. Never make the tear perfectly straight, geometric, symmetrical, or machine-cut.

SCENE INSIDE THE OPENING
Reveal a beautifully composed realistic representation of [COUNTRY / LOCATION / SUBJECT] through the torn opening. Automatically select the most recognizable landmark, architecture, landscape, street, cultural element, or environmental feature.

The revealed scene should feel subtly integrated with the handmade paper, with softened colors, gentle atmospheric fading, and visible interaction between the scene and surrounding paper fibers.

BOTANICAL DETAILS
Place only a few dried natural elements around the tear: several dark green leaves and a small cluster of delicate white dried flowers. Keep them sparse and elegant, with visible veins, dried edges, and subtle physical shadows. Never form a wreath or decorative border.

Add one or two extremely thin, loose pencil-like marks across the empty paper. They should feel like quiet unfinished artistic gestures, not recognizable drawings.

TYPOGRAPHY
Place a short poetic Korean phrase in the upper-left blank area, elegantly arranged within three lines or fewer. Add one very small atmospheric Korean sentence in the lower-right blank area.

Use refined thin Korean editorial typography in deep charcoal. Keep all lettering inside the empty paper areas. No numbers, dates, years, logos, brands, signatures, watermarks, or decorative typography.

FINAL AESTHETIC
Quiet contemporary Korean editorial design × tactile handmade paper × organic paper tear × refined travel artwork × minimal dried botanicals × sophisticated negative space.

The result should feel like a real handcrafted art print photographed directly from above, with authentic physical materials, natural shadows, muted colors, delicate imperfections, and premium editorial composition.

AVOID
Split layouts, multiple tears, geometric openings, smooth machine-cut edges, excessive flowers, wreaths, clutter, glossy surfaces, plastic texture, excessive saturation, artificial gradients, cartoon styling, 3D rendering, random landmarks, excessive text, numbers, logos, signatures, watermarks, or interface elements.

FORMAT: 3:4 vertical, single unified composition.
```

  </details>

- **巨型字体当遮罩：目的地海报字母即风景** — 双词巨标题做水景蒙版，背影人物手臂冲出字顶——字不是标签，是入口。旅行 KV / 目的地主视觉的字体即场景打法。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2101957480620453907)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A destination poster gets stronger when the type becomes the view.
🌊 use a towering, condensed two-word title as a mask filled with crystalline turquoise water, shoreline, and sunlit ripples
The destination is visible before anyone reads the name. The letters become a portal instead of a label.
✨ let one back-facing figure stand inside the title block, with raised arms extending beyond the top edges of the letterforms
The figure breaks the grid just once, turning the type from a graphic device into a moment of arrival.

GPT- image 2.5 prompt👇
Create a premium destination advertising poster for a fictional coastal tourism brand named SOLA MAR, designed as a single vertical minimalist campaign image with monumental negative space and one central typographic-body composition. The destination itself is the product. The poster must feel like a Cannes-level travel key visual, a collectible editorial print, and a gallery-grade graphic tourism poster at the same time.

The whole image is built around one exact visual idea: a mature woman seen from behind standing in brilliant tropical water with both arms lifted upward in a liberated V-shape, perfectly fused with a towering stacked word block at the center of the page. The typography acts as an architectural mask: the photographic ocean scene, the woman’s back, wet skin, dark hair, and turquoise water appear inside the giant letters, while her two raised arms extend beyond the top edges of the letterforms and become the main kinetic silhouette against the pale empty background. This body-and-type fusion is the hero composition and must feel exact, elegant, and internationally iconic.

Use a pale sun-bleached warm-grey paper background with very large clean negative space. At the center, build one tall stacked uppercase title in bold condensed letterforms reading "SEA / BEYOND" or another equally strong original two-word construction, arranged as a compact vertical typographic monument. The letters must be thick enough to contain a vivid tropical image within them. The scene inside the letters and around the lower body should show premium coastal material realism: crystalline turquoise shallows, sunlit aquamarine ripples, subtle refraction around the waist and hips, small glittering highlights on the water surface, and bright tropical clarity. The water must feel warm, clean, luxurious, and irresistible.

The woman is a real mature female figure, photographed from behind, with wet dark hair falling naturally down the upper back. She stands waist-deep or high-hip-deep in clear tropical sea, torso centered within the letter block, spine and shoulder blades elegantly aligned with the typography. Her arms stretch upward beyond the text with refined asymmetry in the hands and wrists so the pose feels free and alive rather than mechanical. Anatomy must be correct and natural: realistic head-neck-shoulder relationship, natural mature back and waist structure, believable hips, smooth lower-back-to-glute transition, realistic pelvic structure, naturally full buttocks if visible, soft curvy hips, natural fleshy lower-body volume, subtle skin texture, faint real skin variation, no plastic smoothing. If hands are visible, keep all five fingers anatomically correct, separated, elegant, and undistorted. The pose must communicate freedom, salt air, warmth, and self-possession, never vulgarity.

Lighting is bright coastal daylight, crisp but soft enough to keep the poster premium rather than postcard-cheap. The skin carries luminous wet highlights and fine water droplets. The sea inside the typography should have layered cyan, turquoise, and pale teal depth, with sunlight hitting the wavelets and subtle transparency around the submerged lower body. Keep the water image vivid, but let the surrounding poster field stay quiet and restrained. The composition must feel like the typography has become a portal into the destination.

Below the central typographic monument, place the destination line "Sola Mar" in an elegant hand-script or refined brush-script, cool teal or sea-glass green, centered and much smaller than the main title. Beneath it, add only one very short poetic line in tiny editorial text, something like a restrained thought about salt, warmth, and memory. At the bottom corners, keep only minimal micro-elements: a discreet website on the left and a tiny tourism mark or seal on the right. No extra brochure-style information, no paragraph copy, no cluttered taglines.

Color hierarchy: 55% pale paper-grey and sun-bleached neutral negative space, 25% luminous tropical turquoise and aquamarine water, 15% warm bronze skin and dark wet hair contrast, 5% cool sea-glass green script accent and tiny editorial microtype. The graphic language must feel luxury-print minimal, central, clean, and collectible. The poster should read immediately from far away through its giant text silhouette, but reward close viewing through water detail, skin highlights, and precise typographic framing.

Rendering target: photoreal luxury travel campaign, premium poster layout, product-dominant destination identity, giant type as image container, elegant central composition, airy negative space, and world-class print-finish clarity.

Quality control and structured exclusions: photoreal only inside the image area, correct female anatomy, natural mature softness, realistic shoulders, back, waist, pelvis, hips, hands, and fingers, no extra fingers, no missing fingers, no fused fingers, no broken wrists, no warped spine, no distorted pelvis, no plastic skin, no muddy water, no dirty haze, no unreadable typography, no random letters, no copied destination names, no cluttered brochure layout, no cheap vacation-ad styling, no style drift, no AI slop.
```

  </details>

- **旧写真翻新：上下 1:1 双画面海报** — 上半保留原片只做高级感调色，下半用 Image 2.5 重优化——把旧相册变成可发社媒的竖版双联。人像复古翻新可抄结构。 [@sereinworld](https://x.com/sereinworld) · [原帖](https://x.com/sereinworld/status/2101951659278848179)

- **冷门菜可填槽：食材溯源网汇聚到终盘** — $DISH 槽位塞四国冷门菜；中心终盘写真，四周按比例粗细的溯源辐条（产地→市场→餐桌）。美食科普长图/信息图母版，换菜即新片。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2101941248022249841)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A new food prompt I am testing with GPT Image 2.5. I am going to work on it a bit more 

16:9, $ DISH: [A, B, C, D, each a lesser known under rated dishes from various countries around the world] $ VIEW: "ingredient provenance network converging on final plating" $ MEDIUM: "gastronomic manuscript with supply-chain cartography" Gastronomic manuscript of [$DISH], presented as a convergence diagram where every ingredient's journey is traced from origin to plate. At the center floats the finished dish in exquisite photorealistic detail — steam rising, textures glistening, plated on period-appropriate serveware — rendered as a luminous focal point.   Radiating outward from the dish like spokes of a wheel, each ingredient traces a provenance line back to its source. A tomato's line flows through a market stall, a distribution warehouse, a farm field, to the specific cultivar's genetic origin in the Andes. A spice's line crosses ocean trade routes on a miniature age-of-sail map. Each line is rendered in the ingredient's characteristic color — saffron gold, basil green, chili red — and varies in thickness according to the ingredient's proportional importance in the recipe.
```

  </details>

- **生活照→手绘社论海报：可填人物/城市槽** — 真照片压成限色复古丝网插画：[PERSON] 锁姿态衣着，环境收成几笔地标，旁注城市坐标。旅行/生活方式收藏级印刷感母版。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2101917074323112015)
  <details>
  <summary>查看 / 复制提示词</summary>

```
GPT image 2.5

Prompt:
A sophisticated minimalist lifestyle art poster featuring [PERSON / SUBJECT / MOMENT] as the central focus, transformed from a real-life photograph into a refined hand-drawn editorial illustration. Preserve the subject’s recognizable pose, silhouette, clothing, hairstyle, and key visual details while simplifying the scene into an elegant artistic composition.

Use a limited vintage color palette inspired by the original environment, with warm muted tones printed on an ivory/off-white paper background. Combine delicate ink outlines, loose sketchwork, fine hatching, subtle halftone texture, faded print imperfections, and soft watercolor-like washes.

Reduce the surrounding environment into a few recognizable contextual elements—[CAFÉ / BAR / STREET / LANDMARK / OBJECTS]—using simplified linework and layered shapes rather than detailed realism. Add subtle abstract circles, geometric forms, atmospheric marks, tiny decorative elements, or silhouettes to create visual depth.

Include small minimalist typography on one side: [CITY / LOCATION], [SUBJECT / MOMENT], and optional coordinates, date, or short descriptor, designed like a premium collectible travel/lifestyle print.

Generous negative space, elegant editorial composition, vintage screen-print aesthetic, hand-crafted illustration, sophisticated travel-magazine design, muted heritage colors, subtle paper grain, artistic but recognizable, no photorealistic background, no excessive details, 4:5 vertical composition.
```

  </details>

- **石榴百科全书式信息卡：3:4 标本导览牌** — 标本摄影顶栏 + 九组营养/产区/食用/储存信息，石榴红×叶绿×琥珀配色。食品/植物科普卡可换主体复用的中文结构化母版。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2101854051805851807)
  <details>
  <summary>查看 / 复制提示词</summary>

```
一张 3:4 竖版石榴百科全书式信息卡，呈现植物标本馆档案与现代食品博物馆导览牌的融合设计。顶部使用“一颗完整石榴＋一颗切开的石榴＋少量独立果粒”的标本式摄影，浅灰白背景、柔和侧光和微弱自然投影，真实表现深红果皮、半透明果粒、薄膜与籽粒结构；旁边排列“石榴”、斜体拉丁学名“Punica granatum”、胶囊标签“水果／石榴科”、原产区域地图与地区化成熟季曲线。

中部以非对称黄金分割和细线坐标系统组织九组内容：每100g主要营养构成；糖类、膳食纤维、维生素与矿物质；果实结构剖面图；成熟季与主要产区；鲜食、榨汁、沙拉、甜品等食用方式；不同水果风味与酸甜度对比；挑选成熟石榴的方法；室温、冷藏与剥粒后的储存方式；历史传播、栽培品种及农业可持续性。

重点数据使用石榴红、叶片绿与琥珀色编码，注意事项使用小面积砖红。纸张具有轻微棉纸纤维，标题为超细无衬线体，正文为现代几何字体，数值为等宽体。底部设置馆藏编号式资料来源区，但不出现虚假机构名称；营养与健康描述采用谨慎表述，不虚构医疗功效。

【填槽】把石榴换成别的食材/植物，九宫信息架构可复用。
```

  </details>

- **自然文化海报四联：书法×色块×风景窗×立体物** — 风迹 / 汲泉 / 苔庭 / 松间：巨幅书法锚点 + 低饱和撕纸色块 + 摄影窗口 + 前景立体实物分层。展览/文化品牌/东方生活方式海报可填槽母版，完整中文模板在回复。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2101607866478031056)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【主题】：填写，例如「风迹 / 汲泉 / 苔庭 / 松间」
【中文主标题】：填写 2–4 个字
【英文标题】：填写
【自然主题元素】：填写，例如风、水、苔藓、松木、山石、草穗
【前景立体实物】：填写，例如石钵、苔石、枯木、薄纸、植物
【摄影窗口场景】：填写，例如雾中山林、山涧、草坡、松林
【主色调】：填写低饱和自然色
【画幅比例】：默认 9:16

生成一张东方自然文化主题的 Editorial Design 艺术海报。

整体采用暖象牙米白艺术纸背景，保留轻微天然纸纤维与克制的印刷颗粒，大面积留白，画面安静、自然、松弛、有文化感。

画面上方或偏右放置巨大的中文手写书法标题【中文主标题】，使用自由、真实、有毛笔提按变化与墨迹浓淡的现代东方书写方式，让中文大字本身成为主要视觉锚点。

搭配纤细优雅的英文 Serif 字体呈现【英文标题】，再加入少量有实际意义的中文短句、英文说明和日期信息，形成“大书法 + 英文标题 + 小字号编辑文字”的信息层级。

画面中部加入一个大型低饱和自然色块，颜色使用【主色调】。色块边缘具有自然撕纸、山体、地形或有机形态感，保持完整清晰的大形，不要拆成大量碎片。

在色块内部开出一个圆形、椭圆形、竖向或不规则自然窗口，窗口中呈现【摄影窗口场景】的真实摄影画面。摄影区域低对比、低饱和、有薄雾和空气透视感，像透过纸张开孔看见另一个真实自然空间。

画面下部加入真实立体的【前景立体实物】，具有真实材质、体积、接触阴影和自然空间关系。

让真实立体物局部遮挡二维色块或摄影窗口，形成明显的前后层次：

艺术纸背景 → 平面色块 → 自然摄影窗口 → 真实立体实物。

主题围绕【自然主题元素】展开，让所有视觉元素共同表达一个清楚的自然概念，而不是简单堆砌装饰。

整体版式采用不对称 Editorial Design，文字散落在留白区域，可以加入少量纵向排版、边缘排版和超小字号信息，但所有文字都应具有真实意义。

配色控制在暖米白、低饱和自然主题色、石灰灰、灰褐、墨褐等范围，整体哑光、柔和、稳定，不使用高饱和颜色。

保留轻微 Offset Print、艺术纸、手工印刷与纸本出版物质感，但不要过度做旧。

最终效果应像真正完成的自然文化展览海报：远看首先看到巨大书法标题、完整色块和清楚的立体自然物，近看才发现摄影窗口、小型文字与材质细节。
```

  </details>

- **比萨斜塔测绘四联：可换城市 master prompt** — 上半真景、下半 USGS 式等高线测绘重建，四板密度轴可调。换 {STRUCTURE}/{CITY} 就能给自家城市出一套收藏级建筑海报——Sunburst 4K 模板。 [@sebatheepan](https://x.com/sebatheepan) · [原帖](https://x.com/sebatheepan/status/2100914552682450985)
  <details>
  <summary>查看 / 复制提示词</summary>

```
One poster, 3:4 vertical canvas. Split into two roughly equal zones — a realistic photograph on top, a printed reconstruction below — divided by one clean sharp horizontal line. The structure must not be stretched, warped, tilted or repositioned unnaturally.

TOP HALF — THE REAL SHOT
{STRUCTURE DESCRIPTION}. {PLATE LIGHT}. Preserve the structure faithfully: same architecture, proportions, perspective, distinctive details, natural light and shadow. Add only a subtle high-end color grade and the faintest film grain. Never redesign or reinterpret the architecture.

BOTTOM HALF — THE PRINTED RECONSTRUCTION
Rebuild the same structure as a mid-century surveyor's topographic map sheet: the building and its site rendered in fine brown contour lines that wrap around the mass and terrain, elevation index numbers printed along the contours, small triangular benchmark markers with elevation tags, a compass rose, a thin scale bar, faint theodolite sight-lines and the blocky vintage lettering of a USGS quadrangle sheet. The photograph dissolves outward into contour lines, survey ticks and a faint grid. The structure must remain immediately recognizable. {PLATE DENSITY}.
Texture: yellowed map paper with fiber grain, worn fold creases, faint old stains, restrained crop marks, one small red calibration bar. Color: aged-paper ground, warm brown and black survey inks, the structure's original muted colors, a single red accent. Never fully desaturate the structure.
The structure occupies roughly 60-88% of the frame width. Leave 22-38% of the paper visibly untouched and empty — generous negative space so the poster reads as an archival specimen, not a packed screen.

TYPOGRAPHY — a clean fixed-width architectural title block, pinned top-left at a small fixed inset, black ink, monospaced technical typeface, verbatim, each line in caps:
"{NAME}"
"{CITY, COUNTRY}"
"SURVEY PLATE 0N"
A thin horizontal rule under the third line, then one short observational caption verbatim:
"{CAPTION}"

A solid vertical red rectangle — the only red in the poster — is pinned to the bottom-right corner zone about 12% from the bottom and right edges. Four thin black crop marks sit in the four corners of the bottom half at identical insets. Red bar, crop marks and text block keep exactly the same position and size relative to the frame.

MOOD: field survey notebook crossed with modern travel editorial — the landmark as a place the surveyor has measured. Sophisticated, minimal, tactile, intellectual, slightly mysterious, highly collectible.

AVOID: solid black terminal backgrounds, dense walls of code, cyberpunk neon, excessive decorative glyphs, distorted architecture, impossible geometry, invented architectural details, fake technical specifications, random meaningless symbols, garbled text, extra colors, brand logos, QR codes, watermarks, author credits, tourist-poster clichés.

Priority: preserve the structure's identity and architectural accuracy first. The experimental print treatment enhances the architecture, never hides it.

THE FOUR VARIATIONS (one axis change per plate)

PLATE 01 — DENSE · light: "Golden-hour sunlight with long warm shadows" · density: "The print treatment is at its densest and richest: layered marks, full system detail"
PLATE 02 — LINEWORK · light: "Soft overcast daylight, muted flat tones" · density: "The print is linework-forward: thin drafting lines and technical geometry dominate the reconstruction"
PLATE 03 — FRAGMENT · light: "Blue-hour dusk with cool tones and lit windows glowing" · density: "The print is fragment-forward: torn photographic fragments dominate, with fewer system marks around them"
PLATE 04 — MINIMAL · light: "Bright midday sunlight with crisp shadows" · density: "The print is the minimal plate of the set: sparse marks, maximum untouched paper"

To reuse: replace {STRUCTURE DESCRIPTION}, {NAME}, {CITY, COUNTRY} and {CAPTION}. Keep every other line unchanged.
STACK: GPT Image 2.5 · Sunburst · high · 4K · 3:4
```

  </details>

- **东方制度海报续作：火政 / 凌室 / 市舶 / 合符** — 纸色与空间把制度逻辑嵌进画面：城防火政、跨季藏冰、海贸通关、合符验信。制度史/城市文明展览视觉的第二套配方。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2100912078445830529)

- **东方文化海报四联：钱法 / 岁序 / 律吕 / 田亩** — 大色域先画结构关系，再把故事塞进微型人物——货币流通、四季螺旋、音律校准、田亩入册。博物馆/知识系统/东方编辑设计直接对标。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2100904687159361574)

- **经典超跑复古工程海报：四车规格全表** — F40 / Countach / 959 / F1 同框：米黄老化纸、三视图尺寸线、发动机剖视与规格栏——像 80–90 年代厂方工程单不是现代信息图。汽车/收藏海报完整英文 prompt。 [@iamrealsnow](https://x.com/iamrealsnow) · [原帖](https://x.com/iamrealsnow/status/2100892897638019274)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a collectible vintage automotive engineering poster featuring four legendary classic supercars: Ferrari F40 (1989), Lamborghini Countach 5000 QV (1985), Porsche 959 (1986), and McLaren F1 (1994).

Use an aged cream paper background with subtle fibers, faded ink, pencil-and-ink technical illustrations and authentic 1980s–90s factory-document aesthetics. Give each car a prominent realistic 3/4 hero view, surrounded by front, side, rear and top technical drawings with dimensions.

Include concise specification panels explaining each car’s engine, horsepower, torque, drivetrain, suspension, brakes, aerodynamics, weight, acceleration and top speed. Add detailed mechanical illustrations of the engines, chassis and drivetrain, plus small studies of headlights, wheels, brakes, intakes, spoilers and interiors.

Use numbered callouts, arrows, measurement lines, engineering annotations and period-style typography. Make the information feel like an authentic factory engineering sheet rather than a modern infographic.

Highly detailed, realistic automotive rendering blended with hand-drawn technical artwork, sophisticated archival print texture, 16:9 landscape, ultra-high resolution.
```

  </details>

- **多人海报破模板：超大头像 / 不规则裁切 / 视觉权重** — 别再等分九宫格——用 oversized 肖像、不规则裁切、粗体字和不均匀视觉重量把多人海报做出编辑感。活动 / campaign / 杂志多人 KV 可填槽。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2100891321581875438)

- **旅行实拍→明信片：上下分屏杂志插页** — 上半精修原片，下半抽最难忘的元素做成极简线稿小人互动小品 + 手写日期地点。Cape Town 实拍变 indie 杂志插页，文旅种草可抄。 [@kaen_sv](https://x.com/kaen_sv) · [原帖](https://x.com/kaen_sv/status/2100886866555986145)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Turn my uploaded photo into a 3:4 vertical split-screen image, divided evenly into top and bottom halves.

Top half: keep the original subject, composition, lighting, and realistic texture. Apply only a natural, refined, magazine-style color grade.

Bottom half: do not simply copy the original. First, identify what is most memorable about the photo — it could be a subject, an action, a relationship, a mood, or a subtle coincidence within the frame. Extract the most representative element and reimagine it as a playful little scene combining the real subject with minimalist black line-drawn figures.

Keep the subject's real materials and colors. Draw the figures with thin black lines, and let them interact naturally with the scene — climbing, carrying, observing, pulling, repairing, and so on. Use an off-white or light background with generous negative space.

Based on the photo's mood, Add a short handwritten English note, like a casual journal entry, with the date and location, e.g. Sept 18, Boo kap, like a casual side note.
The overall feel should be light, restrained, and clever, like a small insert page in an indie magazine. Avoid a cartoon sticker look, and don't overcrowd the composition.
```

  </details>

- **Fortune 500 品牌世界微缩 2×2：物理力重塑城市** — 把品牌名做成巨型建筑字，再让波浪/漩涡/熔流等一种物理力雕塑整座迷你文明。高端概念 KV / 品牌世界观海报可填 $SUBJECT。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2100867925758411176)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2x2 grid, 16:9, do this for 4 fortune 500 comapnies: CONCEPT ANCHOR 1: "City transformed by a physical force — skyline shaped into wave, whirlpool, splash, drip, pressure burst, molten flow, or suspended liquid architecture"  ::  CONCEPT ANCHOR 2: "Miniature civilization wordmark — giant subject name acts as infrastructure, with roads, tiny workers, vehicles, parks, ports, and buildings arranged around it"  ::  CONCEPT ANCHOR 3: "Luxury object render — dark neutral background, macro clarity, sharp shadows, realistic miniature materials, high-end concept model finish"  INSTRUCTION: Render $ SUBJECT as if its entire identity has been sculpted by one dramatic elemental force.  STYLE RULES: - Choose one dominant force based on the subject's spirit: wave, vortex, gravity fold, flame, sandstorm, crystal bloom, fog bank, magnetic field, liquid metal, glass splash, moss growth, paper curl, smoke plume, or data stream. - Convert $ SUBJECT into a city-like miniature ecosystem caught inside that force. - Convert the subject's name into large physical architecture integrated into the sculpture. - Make the letters readable but partially shaped by the force: eroded, flowing, folded, dripping, crystalline, melting, stacked, flooded, or levitating. - Build tiny subject-relevant details across the scene: vehicles, people, tools, bridges, signals, signs, interiors, gardens, docks, cranes, screens, tunnels, or monuments. - Use realistic material behavior: wet shine, glass refraction, stone fracture, mist, particles, foam, metallic reflections, glowing lights. - Add one tiny viewer beneath or beside the object to create awe and scale. - Keep the image cinematic, premium, surreal, and highly inspectable.  OUTPUT: A viral miniature world where  $ SUBJECT becomes a physical skyline-wordmark sculpture transformed by a dramatic elemental force.
```

  </details>

- **「缺失感」2×2 信息图：负空间讲统计** — 别画「有什么」——用空椅子、挖空方块、消失的城市街区把 [TOPIC] 的损失做成博物馆级极简 3D。选题可视化 / 公益数据海报现成骨架。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2100848044518592693)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2x2 grid, 16:9, AI infers viral topics: Create a haunting, minimalist 3D visualization that represents what is missing, lost, avoided, delayed, or erased because of [TOPIC]. The AI should choose a statistic involving loss: missing sleep, lost time, extinct species, unbuilt homes, unpaid wages, wasted food, lost attention, preventable deaths, disappearing land, delayed care, or unrealized potential.  Instead of showing the object directly, represent it as negative space: empty chairs, ghost outlines, hollow cubes, missing city blocks, erased silhouettes, transparent containers, absent books, unfilled beds, or a carved-out void in a solid mass. The missing quantity should feel physically present through absence.  Style: museum-grade isometric 3D render, matte clay and translucent materials, soft directional lighting, quiet shadows, neutral grey backdrop. Use one oversized numeral as a solemn anchor. Caption: what is missing, time period, metric, and source year. Add a tiny human silhouette for emotional scale.  The spirit: make absence feel heavier than presence.
```

  </details>

- **印度漆器木玩旅行立体模型：[LOCATION] 模板** — 4:5 电影感旅行 diorama，整座城刻进印度漆器木玩手作世界；换地名就能批产文旅 KV。立体模型感比平面海报更抓眼球。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2100806204520034392)
  <details>
  <summary>查看 / 复制提示词</summary>

```
[LOCATION] - Premium 4:5 Cinematic Travel Diorama

Create a premium 4:5 cinematic travel diorama of [LOCATION], designed as a handcrafted Indian lacquered wooden-toy world. Everything should feel physically carved,

(原文见推文；换 [LOCATION] 批产)
```

  </details>

- **自拍→电影海报四步流** — 上传自拍 → Gemini / Grok / GPT Image 2.5 任选 → 粘贴 prompt → 出电影感海报。自媒体封面与短视频片头速成配方。 [@mehwishkiran07](https://x.com/mehwishkiran07) · [原帖](https://x.com/mehwishkiran07/status/2100787007811362831)

- **地标变巨型手工织物雕塑：可替换 STRUCTURE 公式** — 锁死地标轮廓与比例，外皮换成针织/编织织物，再撕开一角露出微型城市——`[STRUCTURE / LANDMARK]` 槽位直接换景点。建筑×手作反差海报模板，附完整 prompt。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2100777758024675557)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A surreal, high-end architectural art photograph of [STRUCTURE / LANDMARK] transformed into a giant handcrafted textile sculpture, while preserving its instantly recognizable silhouette, proportions, architectural details, distinctive features, and original geometry.

The structure is covered in soft knitted or woven fabric, with intricate cable-knit patterns inspired by the architecture. A section of the structure opens, peels back, or unfolds like a fabric vessel, revealing a beautifully detailed miniature world of [CITY / COUNTRY] emerging from inside.

Inside the opening, show miniature elements strongly connected to the location: buildings, streets, rooftops, trees, bridges, landmarks, local transportation, landscapes, and subtle cultural details, all integrated naturally into the structure.

The outer architecture gradually transitions between soft textile fibers and realistic architectural materials, creating a surprising contrast between handmade craftsmanship and structural precision. Keep the original architectural identity clearly recognizable.

Minimal luxury studio setting, warm off-white background, soft directional daylight, subtle natural shadow, photorealistic materials, extremely detailed textile fibers, intricate architectural details, sophisticated muted color palette with carefully selected local colors, tactile handcrafted appearance, surreal but believable, premium editorial art photography, centered composition, generous negative space, collectible contemporary design object, 4:5 vertical composition.

No people, no text, no logos, no watermark, no futuristic elements, no cyberpunk, no distorted architecture, no invented structural features. Preserve the landmark’s identity and proportions above everything else.

“What if [LANDMARK] was a handmade object?”

A giant handcrafted knitted version of [LANDMARK], faithfully preserving its recognizable architecture, with part of the structure opening like a soft fabric vessel and a tiny [CITY / COUNTRY] emerging from inside — miniature buildings, streets, landscapes, transportation and local details woven into the architecture. Soft textile fibers transition into realistic stone, metal or glass, creating a magical fusion of craftsmanship + architecture + miniature world. Photorealistic, luxurious, tactile, surreal but believable, warm neutral studio background, soft lighting, dramatic detail, generous negative space, 4:5 vertical.
```

  </details>

- **假装 Excel 做的传单：Office 外行感海报公式** — 町内会/公司要传单又怕被看出 AI？写成「Word/Excel 外行认真做的野鸡海报」——WordArt、荧光色、歪对齐全到位。完整日文 prompt 在回复。 [@sacher10610](https://x.com/sacher10610) · [原帖](https://x.com/sacher10610/status/2100754344132149260)
  <details>
  <summary>查看 / 复制提示词</summary>

```
必要であれば画像を添付して、以下のプロンプトをChatGPT Images 2.5で実行してください。
【入力欄】の【作りたいポスター案】に作りたいポスターのネタをぶち込んでください。

--『まるでExcelで使ったかのような』プロンプト--

以下は画像生成指示です。

入力内容をもとに、Microsoft ExcelまたはMicrosoft Wordだけを使用し、一般人が実際に作成したようなOfficeポスター・チラシ・掲示物を1枚生成してください。

━━━━━━━━━━━━
【入力欄】
━━━━━━━━━━━━

【作りたいポスター案】：

【希望アスペクト比】：

※未入力時はA4縦（210×297mm相当）/横長指定時のみA4横/完成画像は紙面データそのものとし、壁・机・画鋲・額縁・紙のシワ・印刷物を撮影した背景などは描写しない

━━━━━━━━━━━━
【目的】
━━━━━━━━━━━━

「Office風デザイン」ではなく、「ExcelまたはWordだけで、ポスター制作に慣れていない一般人が本気で作成した掲示物」と信じられることを最優先とする/ダサさを演出せず、Office標準機能を自己流で使った結果として、少し野暮ったく、派手で、ちぐはぐな仕上がりになること

━━━━━━━━━━━━
【基本方針】
━━━━━━━━━━━━

入力内容最優先/不足情報は自然補完/事実が必要な内容は捏造しない/創作部分のみ補完/掲示物として読めることを優先

━━━━━━━━━━━━
【絶対条件】
━━━━━━━━━━━━

紙面内の全要素はMicrosoft ExcelまたはMicrosoft Word標準機能だけで一般人が再現可能であること/Photoshop・Illustrator・高度な画像編集・AI特有の演出は禁止/迷った場合はより単純なOffice表現を採用する

━━━━━━━━━━━━
【制作者】
━━━━━━━━━━━━

会社・学校・自治体・町内会・PTAなどの一般事務担当/普段は文書や表を作る程度/ポスター制作は年数回/Office操作は自己流/デザイン経験なし/最後まで本気で良い作品を作ろうとしており、完成後はかなり満足している

━━━━━━━━━━━━
【能力】
━━━━━━━━━━━━

文字入力★★★★★/Office文書★★★★☆/画像挿入★★☆☆☆/図形★★☆☆☆/WordArt★★☆☆☆/表★★☆☆☆/トリミング★★☆☆☆/影・光彩★☆☆☆☆/グラデーション★☆☆☆☆/配置調整★☆☆☆☆/デザイン★☆☆☆☆/配色★☆☆☆☆/余白★☆☆☆☆/タイポグラフィ★☆☆☆☆/情報設計★☆☆☆☆

━━━━━━━━━━━━
【制作思考】
━━━━━━━━━━━━

紙面全体は設計しない/タイトルから順番に作る/見えている範囲だけ編集する/縮小表示で全体確認はほぼしない/「ここ寂しい」「ここ目立たない」と思った所だけ後から足す/最後に整理し直さない

━━━━━━━━━━━━
【Officeあるある】
━━━━━━━━━━━━

WordArt/図形/吹き出し/星/ハート/旗/爆発形/リボン/アイコン/蛍光ライン/影/グラデーションなど、Office標準機能を「派手・かわいい・目立つ」という理由だけで使いたがる/用途は深く考えない

━━━━━━━━━━━━
【色・書体】
━━━━━━━━━━━━

配色設計は行わない/新しい見出しごとに好きな色を選ぶ/以前の色との統一は確認しない/赤・青・緑・黄・紫・ピンク・水色・オレンジなど高彩度色を混在させる/Office標準プリセットの塗りつぶし・グラデーションをそのまま使用する/青→赤・黄→紫・緑→ピンク・水色→オレンジなど異色グラデーションも多用してよい/書体は統一せず、MS Pゴシック・MSゴシック・游ゴシック・明朝・丸ゴシック・ポップ系などを混在させる/一部だけWordArt・太字・縁取り・影付きでもよい/行間・文字サイズ・文字間隔は揃えない/半角カタカナ・半角英数字・全角英数字・♪☆♡‼なども思いつきで混在してよい

━━━━━━━━━━━━
【操作精度】
━━━━━━━━━━━━

整列・均等配置・ガイド・グリッド・スナップはほぼ使わない/目測で配置する/写真・図形・文字は数回ドラッグして決める/写真や枠を少し傾ける発想はあるが角度は揃わない/余白・見出し幅・枠線・テキストボックス位置・写真サイズ・図形間隔は微妙に揃わない/少し重なっていても気にしない/ただし読めなくなるほど崩さない

━━━━━━━━━━━━
【添付画像】
━━━━━━━━━━━━

添付画像はOfficeへ貼り付ける画像素材として基本そのまま使用する/許可する加工は四隅や端の軽いトリミング・拡大縮小・数度の回転・反転・単純な枠線・簡単な影・明るさやコントラスト程度の補正のみ/人物切り抜き・背景除去・描き直し・構図変更・生成・高度な合成は禁止/背景がある画像は背景ごと長方形画像として貼る

━━━━━━━━━━━━
【添付画像がない場合】
━━━━━━━━━━━━

必要素材は一般的な無料写真・Officeクリップアート・自治体配布素材程度の雰囲気で補完する/広告写真やプロ品質素材にはしない

━━━━━━━━━━━━
【レイアウト】
━━━━━━━━━━━━

A4印刷前提/余白を設計しない/空白が気になると何か追加する/写真・本文・図形・吹き出し・表は少しズレてもよい/写真サイズや配置は揃えない/中央揃え・左揃え・右揃えが混在してもよい/図形へギリギリ文字を収めてもよい

━━━━━━━━━━━━
【避けるもの】
━━━━━━━━━━━━

広告デザイン/洗練されたOfficeテンプレート/統一テーマカラー/均等余白/美しいグリッド/同一フォントだけ/プロが意図的に崩したデザイン/初心者風を演出した作品

━━━━━━━━━━━━
【品質確認】
━━━━━━━━━━━━

/Office標準機能だけで再現可能か/自己流Office操作の跡が残っているか/配色・書体・装飾・図形・余白が自然にちぐはぐか/Office標準プリセット色・グラデーションを多用しているか/添付画像を基本そのまま貼り付けているか/本人は100点だと思っていそうか/ダサさを狙ったのではなく能力不足の結果になっているか/掲示物として問題なく読めるか

以上を満たした場合のみ完成とする。
```

  </details>

- **四图标四身份高冲击投放：Nike ORANGE MOTION** — 四联 campaign 各成一套身份/图标语言；评论区给完整「ORANGE MOTION」长海报 prompt（液态鞋底冲击）。快消/运动投放 KV 可直接改品牌色。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2100585834357702696)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Prompt : NIKE — “ORANGE MOTION”
4:5 vertical premium poster, 8K, bold commercial layout × surreal realism
🧠 CORE IDEA:
“ENERGY IN EVERY STEP.”
🎬 LAYOUT:
BACKGROUND BLOCK:
Large rounded rectangle in vivid Nike orange with subtle tonal gradients and clean studio shadows
GIANT TYPOGRAPHY:
“MOVE”
bold, oversized, cropped, sitting behind subject
👤 SUBJECT:
Young adult athlete walking toward camera wearing orange Nike sneakers
same foreground-dominant perspective
one sneaker dramatically close to camera
calm, confident expression
👟 PRODUCT + SURREAL TWIST:
Orange Nike sneaker in foreground →
A glossy orange liquid wave flows directly from the sole:
* fluid wrapping naturally around the outsole
* suspended droplets
* sharp splash arcs
* realistic reflections
* subtle orange reflections across the sneaker
The impact of the step creates a controlled liquid burst, making the sneaker appear to generate its own motion.
✨ GRAPHIC ELEMENTS:
* sparkle icons ✦
* suspended droplets
* subtle motion lines
* soft reflections
* minimal white accents
✍️ TEXT SYSTEM:
Top pill:
“Nike Performance”
Small text:
“Move With Energy”
BOTTOM FEATURE STRIP:
* Responsive Cushioning
* Lightweight Feel
* Engineered Grip
* Built For Motion
```

  </details>

- **2×5 恋爱拍立得 contact-sheet：跨格迁徙连续故事** — 双列五行使男孩从右格逐步走进左格，空格讲故事。身份锁 + 分镜叙事海报模板，附超长完整英文 prompt。 [@frametheory058](https://x.com/frametheory058) · [原帖](https://x.com/frametheory058/status/2100583390806442370)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an ultra-photorealistic vertical romantic photo-booth contact-sheet collage, 2 columns × 5 rows, showing ONE continuous visual story involving the exact same young adult couple throughout.

CORE VISUAL IDEA:
The two columns are not ten unrelated photos. They represent two separate adjacent photo-booth spaces. The young woman begins entirely inside the LEFT column and the young man begins entirely inside the RIGHT column. As the rows move downward, the man gradually leaves his own frame and physically moves into the woman’s frame. His original RIGHT frame therefore becomes progressively emptier. This visual migration is the central concept and MUST remain logically consistent.

CHARACTERS:
A very cute young adult East Asian couple, approximately 20–23 years old, both clearly adults.

GIRL:
Naturally adorable Korean-looking young woman, soft youthful facial features, expressive dark-brown eyes, realistic fair skin with visible pores and subtle natural texture, slightly rosy cheeks, dark-brown hair in a loose messy bun with wispy strands around her face. Oversized black knitted sweater. Minimal natural makeup. Sweet, shy, playful personality.

BOY:
Cute Korean-looking young man, youthful but clearly adult, soft masculine facial features, warm dark eyes, naturally messy fluffy dark hair, realistic skin texture. Light-grey oversized hoodie over a simple white T-shirt. Gentle, slightly shy personality.

STRICT IDENTITY LOCK:
The SAME woman and SAME man must appear in every row. Identical faces, hairstyle, clothing, skin tone and proportions throughout. No face drift, no hairstyle changes, no outfit changes.

STORYBOARD:

ROW 1 — TWO STRANGERS
LEFT: girl alone, chest-up portrait, casually looking toward the right edge as though she has noticed someone.
RIGHT: boy completely visible and centered in his own frame, facing camera naturally.
They are physically separated by the vertical black divider.
Small handwritten text:
LEFT: “just a girl… ♡”
RIGHT: “just a guy…”

ROW 2 — THEY NOTICE EACH OTHER
LEFT: girl turns her eyes and face toward him with a tiny restrained smile.
RIGHT: boy turns toward the girl, leaning slightly toward the LEFT boundary for the first time.
He is still mostly inside his own frame.
Text:
LEFT: “who noticed something”
RIGHT: “…and looked twice ♡”

ROW 3 — CROSSING THE LINE
This is the important transition.
The boy has moved substantially LEFT and is now entering the girl’s frame across the central divider. The couple are close together, looking directly at each other and smiling naturally.
His RIGHT frame must now contain noticeably more empty background because he has physically moved away from it.
Do NOT duplicate him.
Text:
LEFT: “then we smiled ♡”
RIGHT empty area: “and suddenly it made sense”

ROW 4 — HE HAS LEFT HIS FRAME
The boy is now almost COMPLETELY inside the LEFT frame with the girl.
They share one soft, natural kiss, photographed candidly rather than dramatically.
Only a tiny portion of his shoulder/body may intersect the central border.
The RIGHT frame is approximately 85–90% EMPTY — just clean studio background.
This empty frame is intentional and visually important.
Text:
LEFT: “same weird thoughts ♡”
RIGHT empty frame: “different chaos ♡”

ROW 5 — FINAL PAYOFF
The boy has now COMPLETELY abandoned his original right-hand frame.
Both characters are entirely together inside the LEFT frame.
Instead of another kiss, create an irresistibly cute candid moment: he hugs her tightly from behind while giving her a small forehead/temple kiss; she scrunches her cheeks slightly, closes her eyes and smiles naturally.
Their body language should feel spontaneous, warm and genuinely affectionate.
RIGHT frame must be COMPLETELY EMPTY except for:
“more stories ♡”

Text in left:
“same people…”

IMPORTANT:
Never place a second copy of either character in the right frame after the man moves left.
Never repeat the kissing image across both columns.
The empty space tells the story.

DESIGN:
Minimal premium analog contact-sheet aesthetic inspired by an old 35mm film proof sheet, but make the composition completely original.

Warm off-white / soft beige seamless studio background.
Deep black film borders.
Thin slightly imperfect frame separators.
Tiny amber film-number markings and subtle sprocket details along outer edges.
Very subtle authentic analog grain, dust and microscopic scratches.
Small pieces of aged masking tape.
A few torn-paper notes.
Tiny hand-drawn hearts.
Small dried flowers near one bottom corner.
Only a handful of decorations — never clutter the photographs.

Margin notes:
“Good people, good times ♡”
“You + Me Always ♡”
“Collect moments, not things ♡”

BOTTOM HERO MESSAGE:
Place a torn warm-ivory paper strip across the lower border with handwritten text:

“you + me = a better kind of chaos ♡”

PHOTOGRAPHY:
100% believable real-human photography.
Premium editorial photo-booth portraits shot on a full-frame camera with approximately 50–85mm portrait-lens character.
Soft warm studio key light, subtle fill, realistic shadow falloff.
Natural skin pores, peach fuzz, individual hair strands, realistic knitted fabric and hoodie texture.
Slightly imperfect candid expressions.
Warm cinematic color grade with creamy highlights, rich blacks and subtle analog grain.
Faces remain sharp while retaining natural photographic softness.

The first row should feel slightly awkward and separated.
Every subsequent row becomes visually warmer and physically closer.
The final row should provide the strongest emotional payoff.

NO CGI.
NO illustration.
NO anime.
NO plastic skin.
NO excessive beauty retouching.
NO duplicated people.
NO extra fingers or limbs.
NO random additional characters.
NO identity changes.
NO duplicated poses.
NO repeated kiss.
NO decorative overload.
NO characters appearing inside intentionally empty right-side frames.

FINAL FEEL:
A photograph someone would instantly stop scrolling to understand — first they notice two separate people, then realize the man is literally disappearing from his own frames because he is moving into hers. Cute, clever, romantic, nostalgic, highly polished and visually understandable even before reading the handwritten text.
```

  </details>

- **橡皮章旅行手账海报：[LOCATION] 可替换模板** — 4:3 横版，目的地像盖进旅行者日记的印章页；换地名/主题就能出一组「拍过、盖过、留住」的纪念海报。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2100578136010428777)

- **3:4 上下对半编辑海报：上半身份锁+下半手绘** — 竖版严格对半：上半保留原照身份/姿态/衣着光线，下半抽成不超过四色的纸质手绘。种草海报批产模板，附完整英文 prompt。 [@saniaspeaks_](https://x.com/saniaspeaks_) · [原帖](https://x.com/saniaspeaks_/status/2100563846054469799)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a separate high-end editorial poster for each uploaded photo, never combining them. Use a strict 3:4 vertical layout split into two equal horizontal halves: keep the top half faithful to the original photo with unchanged identity, pose, proportions, clothing, objects, lighting, colors, and realistic details, enhanced only with subtle premium grading. In the bottom half, create a small centered hand-drawn paper illustration of the key subject and recognizable elements, using imperfect ink lines, flat acrylic shapes, rough paper texture, and handmade brush marks on a warm off-white background with generous negative space. Extract and simplify the original palette to no more than four harmonious colors. Keep the overall look quiet, poetic, refined, minimal, artistic, and premium, with optional subtle editorial typography.
```

  </details>

- **零食海报：别写 gooey，写面条拉丝结构** — 咬口露出半透明淀粉丝与弹性拉扯——别用「粘糊馅」写成芝士面包。NOODORI 虚构品牌 KV 完整长 prompt，食品电商海报可抄结构。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2100554719274119461)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Don’t write “gooey filling.” That turns this into cheese bread.
🧊 a naturally torn bite edge revealing translucent noodle strands, layered starch threads, and elastic pull inside the shell
This makes the center read as a real noodle structure—not a generic soft crumb.
🍊 thin blistered golden crust with fine fried granularity, light oil sheen, and a sharp material contrast against the pale interior
The bite becomes instantly legible: crisp outside, stretch inside.

A hyper-real premium poster advertisement for a fictional snack brand called NOODORI, designed in an Orbit-plus-Port direction: a bold product-launch key visual with one monumental macro food hero, highly controlled graphic typography, and a refined lower product strip. The core product is a fried noodle-dough snack ball called "Noodle Puff", presented as an ultra-real edible object with intense tactile realism and a surprising internal structure. One giant bitten snack ball dominates the center of the frame, delicately held between two natural human fingertips entering from the lower left and lower right edges. The bite opening reveals an airy fibrous interior with visible noodle-like stretch, layered starch threads, and a soft elastic pull inside a thin crisp golden shell. The product is the absolute visual hero.

Framing and composition: vertical poster layout, strong central macro composition, oversized hero product cropped large enough to feel immediate and almost architectural. Keep the upper field as a warm chestnut-brown poster plane with large white typographic mass, a cleaner vertical support text column on the left, one sharp promotional badge on the lower right of the hero area, and a highly disciplined product information strip running across the bottom. Preserve the original retail-poster logic, but reduce noise and make the entire page more sculptural, gallery-like, and premium. The fingers act only as scale and human interaction cues, never competing with the food.

Product design: the hero snack is a perfectly round fried noodle puff with a thin blistered golden crust, subtle fried granularity, light oil sheen, and a naturally torn bite edge exposing a mochi-like noodle matrix inside. The interior should feel surprising, soft, and layered rather than bread-like. In the bottom product strip, present two flavor variants in a clean side-by-side system: one pale sugar-dusted version and one deeper warm curry-spiced version. Each flavor sits beside a simple folded kraft takeaway tray with a few neatly arranged full snack balls. The lower strip must feel tidy, retail-ready, and secondary to the hero bite.

Lighting and color: soft but directional premium food lighting from upper front-right, gentle warm fill from the left, crisp readability inside the torn interior, elegant highlights on the crust, and subtle shadows under the bottom flavor presentations. Build stronger light-dark separation than a typical snack poster so the shell volume, interior fibers, and headline typography gain sculptural force. Palette balance: 60% chestnut brown, toasted amber, and warm golden crust; 30% creamy ivory interior and kraft-paper neutrals; 10% saturated red promotion accents and spice-yellow flavor notes. No muddy browns, no dead black patches, no greasy over-darkness.

Materials and finish: hyper-real food photography fused with premium Japanese-style poster design. Show crisp fried crust grain, delicate starch translucency in the inner layers, realistic soft tear fibers, matte paper tray texture, natural fingertip skin texture, and clean print-like typography integration. The final finish should feel like a Cannes-level convenience-food launch poster: tactile, surprising, minimal yet commercially explosive.

Typography: all visible copy in English only, highly art-directed and integrated into the poster. Top brand mark reads exactly: "NOODORI". Main headline at the top reads exactly: "A NEW BITE FROM NOODLES." Left vertical support line reads exactly: "CRISP OUTSIDE. PULL INSIDE." Small excitement line above the bottom strip reads exactly: "CRACK IT. FEEL THE STRETCH." Promotional burst on the lower right of the hero area reads exactly: "JUST ARRIVED!" and beneath it exactly: "5 pcs / 3.00". In the bottom strip, the left flavor label reads exactly: "TOASTED CANE SUGAR" and the right flavor label reads exactly: "MILD SPICED CURRY". Typography should be bold, soft-edged, graphic, and beautifully spaced, with large white forms against the brown field and restrained red accents.

Output and constraints: polished premium snack poster, product-first hierarchy, no copied source text, no real brand names, no extra props, no cluttered background scene, no people beyond the partial fingertips. Keep the hands anatomically correct with natural finger joints and correct finger count. Keep the hero snack spherical and believable, the bite natural, the lower strip orderly, and the overall page clean and high-end. Avoid fused fingers, swollen joints, broken snack geometry, messy crumb explosions, excessive oil, warped trays, duplicated snack balls, unreadable text, plastic-looking crust, oversharpening, AI gibberish text, muddy color cast, or drift away from premium commercial food realism.
```

  </details>

- **日式朋克街头时尚：极端低机位战斗靴海报** — 4:5 广角贴地，战斗靴占满前景；背景是撕纸/丝网/漫画涂鸦拼贴。复古日系地下杂志封面可直接改色板，附完整英文 prompt。 [@Shorelyn_](https://x.com/Shorelyn_) · [原帖](https://x.com/Shorelyn_/status/2100545305200795816)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an ultra-realistic cinematic street-fashion editorial poster with a strong retro Japanese punk / underground magazine aesthetic.

A young East Asian woman sits on the ground and looks directly into the camera from a dramatic extreme low-angle perspective. Her upper body is positioned near the center-top of the composition while one leg extends aggressively toward the camera, creating powerful forced perspective. Her oversized rugged black combat boot dominates the entire foreground, appearing much larger than her body. The boot has thick textured rubber soles, worn black leather, visible orange-brown laces, scuffed surfaces, and realistic dirt and imperfections.

She has straight, slightly messy shoulder-length black hair with wispy bangs, naturally flying outward as if caught by wind. Her expression is calm, confident, slightly rebellious, with a direct intense gaze. Subtle red-orange eye makeup and vivid red lips. Natural skin texture, realistic pores, delicate facial details.

She wears an oversized black denim jacket, layered over a patterned black-and-white striped high-neck top, with loose styling and visible fabric folds. Add rugged streetwear details and a worn urban fashion aesthetic.

The background is a highly textured mixed-media Japanese street-art collage, combining distressed turquoise blue, vivid burnt orange, mustard yellow and off-white paper textures. Include rough hand-painted geometric shapes, torn paper, photocopied manga-style sketches, faded illustrations, ink marks, scratches, paint splatters, grain, distressed typography and fragmented Japanese-inspired graphic elements. The background should feel like an old underground fashion magazine cover or experimental punk poster.

Use a vertical 4:5 composition, dramatic extreme wide-angle lens, camera positioned almost at ground level directly in front of the boot, strong perspective distortion, boot extremely close to the lens, subject receding into the background.

Lighting: cinematic natural daylight mixed with hard directional highlights, realistic shadows, subtle film grain, slightly faded analog color grading, high micro-detail, tactile textures, authentic photographic imperfections.

Style: photorealistic fashion photography fused with vintage Japanese punk collage design, experimental editorial poster, raw street culture, 1990s underground magazine aesthetic, distressed print texture, analog film look, highly detailed, visually striking, premium fashion campaign, sharp subject, realistic materials, realistic anatomy.

Aspect ratio: 4:5
```

  </details>

- **饮料口味 2×2 栅格广告：只改 flavor 变量** — 等分四格、同杯比例、固定标题区与角标、白缝对齐——结构锁死只换口味色与道具。系列产品海报/FMCG 战役板可直接抄，附完整英文 campaign prompt。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2100525164324913662)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium commercial poster board for a fictional ice cream brand called JOYDRIFT SCOOP, redesigned into a unified four-panel campaign grid that merges Orbit-level commercial punch with Port-level curated restraint. The full composition is a strict 2x2 poster system on a soft sky-blue master background, with four equal rectangular panels, clean white gutters, perfect alignment, and a highly controlled visual rhythm. Each panel behaves like an individual flavor advertisement, but the whole page reads as one collectible brand campaign with stronger hierarchy, cleaner negative space, larger typography, fewer decorative distractions, and a more gallery-like sense of control. The ice cream remains the absolute hero in every panel.

The campaign concept is flavor as mood architecture. Each panel contains one centered or lower-centered hero scoop in a branded paper cup, oversized custom display typography, one concise support line, a few restrained doodle accents, and only the most essential ingredient props. Keep the composition bold, product-led, playful, and premium. Reduce unnecessary splash clutter and busy micro-elements; every graphic mark must support the scoop, not compete with it.

Panel system:
Top-left panel: cookies-and-cream scoop in a branded paper cup, cool blue-and-cream flavor world, minimal cookie crumb accents, campaign headline exactly: "COLD START CLUB". Support copy exactly: "Crunchy calm, creamy confidence."
Top-right panel: rich chocolate scoop in a branded cup with a few dark chocolate chunks and restrained cocoa accents, campaign headline exactly: "DARK CHOCO FEVER". Support copy exactly: "Dense melt. Deep mood."
Bottom-left panel: strawberry scoop in a branded cup with two or three clean fresh strawberry elements and restrained pink ribbon-like graphic curves, campaign headline exactly: "PINK BERRY GLOW". Support copy exactly: "Bright fruit, soft joy."
Bottom-right panel: mint chocolate scoop in a branded cup with crisp mint leaves and a few precise chocolate chip cues, campaign headline exactly: "MINT WAVE ON". Support copy exactly: "Cool hit, clean finish."

Brand design and typography: every panel includes a small consistent top-corner brand mark reading exactly: "JOYDRIFT SCOOP". Use large rounded custom display lettering with flavor-specific color shifts, thicker mass, tighter hierarchy, and stronger sculptural presence than before. Use a smaller clean sans-serif for support lines and tiny CTA microcopy such as "take the chill", "taste the lift", "find your mood", or "grab the scoop", but keep these sparse and secondary. Typography must behave as a graphic object integrated into the composition, wrapping around the scoop without touching the main product silhouette.

Product styling: ultra-real premium ice cream with believable scoop geometry, creamy micro-texture, gentle edge softness, realistic inclusions, minimal appetizing melt, and crisp branded cups. Cookies-and-cream shows visible cookie chunks in cool white cream; chocolate feels velvety, dense, and dark; strawberry feels airy, fruit-forward, and luminous; mint feels cool, fresh, and slightly sharper in texture with chocolate fragments. The scoops must feel physically convincing and highly edible, with no collapse, over-melt, or messy drips.

Color system: each panel operates as its own controlled flavor universe while the whole board remains harmonized. Use a refined 60/30/10 balance inside each quadrant: dominant flavor hue, white/cream support, and one accent note. Across the full four-panel board, maintain a candy-clean campaign palette built from sky blue, cream white, cocoa brown, berry pink, and mint green, with the overall master background tying the set together. The image should feel brighter, more premium, and more curated than a typical FMCG flavor poster sheet.

Lighting and finish: bright studio-commercial lighting with soft frontal fill, subtle top highlights on each scoop, gentle shadow grounding under the cups, clean white handling inside the panels, and extremely polished product retouching. Show creamy micro-texture, matte paper cup print, fresh mint leaf surfaces, glossy berry freshness, and crisp chocolate edges. The final image should feel like a Cannes-level FMCG campaign: playful yet disciplined, tactile yet clean, youthful yet art-directed.

Output and constraints: one complete four-panel ice cream campaign board, product-first, highly graphic, clean luxury execution, no people, no extra unrelated props, no copied original poster text, no real brand names, no cluttered doodle overload, no broken grid alignment, no unreadable text, no malformed scoops, no duplicated ingredients, no warped cups, no muddy colors, no messy drips, no cheap clip-art feel, no AI text gibberish, and no style drift between panels.
```

  </details>

- **永恒编辑风地点海报：[COUNTRY/LOCATION] 可替换模板** — 3:4 竖版、22–30% 留白、低饱和编辑色、手绘气泡标题 + 杂志旁注句。换地名/主题就能批产独立杂志风海报，附完整英文模板。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2100508937514897577)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create one premium 3:4 vertical editorial art poster for [COUNTRY / LOCATION / SUBJECT].

TEXT-TO-IMAGE GENERATION ONLY. Generate the complete artwork from [COUNTRY / LOCATION / SUBJECT] alone. No reference image or additional visual input is required.

Automatically interpret the subject and create a visually compelling composition that reflects its character, atmosphere, appearance, setting, colors, and distinctive visual identity.

LOWER SECTION

Use a refined background palette inspired by [COUNTRY / LOCATION / SUBJECT], using limited low-saturation tones such as misty gray, warm beige, light khaki, cream white, dusty rose, or soft gray-pink, selecting only the colors that naturally suit the subject.

Keep approximately 22–30% continuous negative space. Avoid complicated scenery, excessive objects, sticker-like elements, or meaningless decoration.

TYPOGRAPHY

Create a sophisticated editorial typography system based on the subject.

Automatically generate a short main title inspired by the subject's appearance, mood, action, or personality.

Add one natural 8–16 word English sentence written like a subtle editorial note or magazine caption.

Use a carefully designed hand-drawn or retro bubble-style font for the main title. Use smaller refined typography for supporting text, such as an elegant serif, subtle typewriter style, or delicate book-inspired font.

Create clear hierarchy, breathing room, and intentional spacing. Typography should feel integrated into the artwork rather than simply placed on top.

VISUAL STYLE

Keep the overall palette restrained and cohesive, with subtle film grain, tactile paper texture, and a gentle printed-editorial quality.

Allow slight asymmetry and imperfect positioning to create a sophisticated independent-magazine aesthetic without making the composition messy.

IMPORTANT

Keep the main subject recognizable and naturally proportioned. Do not cartoonize the person or subject.

Avoid:
multiple mascots, existing animated characters, brand logos, QR codes, watermarks, signatures, gibberish text, incorrect hands, extra limbs, excessive decoration, cheap templates, overly cute styling, or cluttered compositions.

FINAL LOOK

The finished artwork should feel like a premium independent fashion magazine, contemporary art publication, or sophisticated editorial ZINE—minimal, tactile, slightly imperfect, modern, and visually intelligent.

STRICT 3:4 VERTICAL | TEXT-ONLY GENERATION | RESTRAINED COLORS | 22–30% NEGATIVE SPACE | PREMIUM EDITORIAL TYPOGRAPHY | SUBTLE FILM GRAIN & PAPER PRINT TEXTURE.

Generate everything autonomously from [COUNTRY / LOCATION / SUBJECT] alone.
```

  </details>

- **焦外抽离双生：上下分屏 85mm F1.2 光学对照海报** — 上半保留原手机抓拍，下半同构图模拟 85mm F1.2 奶油焦外与真实 bokeh。讲景深/光学差异时拿来当对照 demo，附完整中文配方。 [@lovimg_com](https://x.com/lovimg_com) · [原帖](https://x.com/lovimg_com/status/2100498666763030990)
  <details>
  <summary>查看 / 复制提示词</summary>

```
请基于我上传的照片，制作一张独立的3:4竖版“焦外抽离双生”视觉海报。

画面严格分为上下两个区域，高度1:1，各占50%。

上下必须保持：

同一个主体、同一张脸、同一个动作、同一个姿态、同一个视线方向、同一个主体位置、同一个场景、同一个拍摄角度、同一套构图关系。

不要重新设计人物。

不要更换背景。

不要改变照片内容。

上半部分｜REAL

完整保留上传的原始照片。

保持原始手机摄影、数码相机或生活抓拍质感。

人物、背景、环境信息全部保留。

可以进行轻度曝光和色彩整理，但不要改变景深关系。

让观众能够明确看到照片原本的真实状态。

下半部分｜85MM F/1.2

严格基于上半部分相同画面重新模拟一次专业全画幅大光圈人像摄影。

模拟：

85mm全画幅定焦镜头，f/1.2光圈。

主体眼睛、面部、主要轮廓保持高清锐利。

根据真实空间距离重新计算景深。

主体所在焦平面清晰。

主体前后的环境按照距离逐级进入失焦状态。

近距离背景保持少量结构。

中距离背景开始柔化。

远距离背景完全转化为自然奶油焦外。

背景中的：

路灯、车灯、橱窗、树叶反光、金属反射、阳光高光

自然转化为不同大小、不同虚化程度的真实光学bokeh。

焦外必须具有真实镜头特征：

柔和圆形光斑、边缘轻微猫眼形变、高光渐变、前后景深层次、真实空间压缩感。

人物头发、肩膀、衣服边缘不能出现人工抠图感。

发丝与焦外之间需要自然过渡。

保留轻微镜头呼吸、色散、颗粒、曝光误差和真实摄影缺陷。

最终效果必须像：

同一个摄影师没有移动位置，只把普通手机换成了一支85mm F1.2专业镜头重新拍了一次。

禁止：

整块背景高斯模糊。

禁止背景变成没有空间层级的一团颜色。

禁止把人物抠出来贴在模糊背景上。

禁止换脸。

禁止改变人物动作。

禁止增加不存在的建筑或景物。

禁止插画感。

禁止过度磨皮。

禁止塑料皮肤。

禁止AI棚拍感。
```

  </details>

- **披萨升空隐喻海报：物理动作扛起品牌故事** — 芝士拉丝当推进尾焰、斜切披萨当火箭——隐喻靠物理成立才不贴皮。创意机构 KV / 食品概念广告直接抄结构，附超长完整 prompt。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2100487987762962656)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A hyper-real premium poster advertisement for a fictional creative launch agency called ORBIT FORGE, designed as a single iconic black-and-gold campaign image where a real pizza slice becomes a metaphor for brand lift-off. The composition fuses food photography, strategic brand storytelling, and curator-grade poster design into one high-impact visual. A giant triangular pepperoni pizza slice rises diagonally from an open matte-black pizza box like a rocket leaving its launch cradle, while long molten cheese strands stretch downward in powerful elastic ribbons, transforming the cheese pull into a convincing propulsion trail. The pizza slice remains the absolute visual hero.

Framing and composition: vertical hero poster, strict left-right division, with a bold editorial text system occupying the left third and the product spectacle dominating the right two-thirds. The slice launches from the lower right box area toward the upper center-right, creating strong upward momentum. The pizza box anchors the bottom frame, while the cheese connects slice and box in one continuous vertical energy line. Preserve broad black negative space and high-end luxury breathing room. Behind the slice, integrate a restrained abstract system of sharp orbital linework, launch vectors, geometric arcs, and subtle coordinate-like marks in metallic amber-gold, merging Orbit, Transit, and Port into one unified visual language: strategic, directional, and slightly futuristic without clutter.

Subject design: the slice is extremely appetizing and ultra-real, with blistered crust, bubbling browned mozzarella, crisp pepperoni cups, black olive rings, mushroom slices, green pepper strips, subtle herb flakes, chili oil gloss, and realistic tomato richness. The cheese pull must be long, heavy, layered, and physically believable, with varied strand thickness, translucent gloss, stretching tension, and molten pooling inside the box. The pizza box is premium matte black with clean sharp geometry, soft edge reflections, and refined gold brand printing on the front lip.

Spatial staging and atmosphere: capture one exact frozen instant of launch. The slice tilts like a thrusting spacecraft, slightly rotated toward camera, with toppings fully seated and no visual collapse. The cheese forms the main movement axis. Add only a minimal amount of steam, faint heat haze, a few tiny ember-like particles, and subtle smoke around the base, kept sparse and controlled. The background remains a deep studio black with cinematic depth and no restaurant clutter, tablescape, plates, or extra props.

Lighting and color: intense warm key light from upper right, soft controlled fill from front left, edge highlights across the crust and glossy cheese, and a faint amber glow catching the geometric launch linework. Build stronger light-dark contrast than standard food advertising so the slice feels sculptural and elevated, but avoid dirty shadows and dead black patches. Palette balance: 60% deep black and charred espresso tones, 30% amber-gold launch light and baked crust warmth, 10% red-orange pepperoni and green topping accents. The image should feel hot, premium, precise, and cinematic.

Materials and finish: hyper-real food advertising texture with glossy melted cheese, crisp browned crust bubbles, realistic oil sheen, subtle smoke diffusion, matte-black coated cardboard box, and thin metallic gold print. The final finish should feel like a Cannes-level creative-agency poster where product realism meets conceptual brand design. The abstract orbital graphics should feel integrated into the atmosphere, not pasted over it.

Typography: all copy in English only, art-directed and highly controlled. At the upper left place the brand mark reading exactly: "ORBIT FORGE". Below it set a small descriptor line reading exactly: "Brand strategy / creative systems / launch design". The main headline on the left reads exactly: "Ideas Rise Farther." with "Farther." in rich amber-gold emphasis. Supporting copy below reads exactly: "Strategy. Story. Heat. Momentum." Add a refined call-to-action line with a small circular arrow icon reading exactly: "BUILD THE NEXT LIFT-OFF". On the front lip of the pizza box print exactly: "ORBIT FORGE". At the lower left add a compact service line reading exactly: "BRANDING / CONTENT / SOCIAL / WEB" and beneath it the website line exactly: "ORBITFORGE.STUDIO". Typography should be bold, modern, premium, and spacious, with strict hierarchy and generous safe margins away from the pizza silhouette.

Output and constraints: polished premium brand poster, product-led composition, real pizza photography fused with launch-themed strategic design, no copied slogans, no real brand names, no people, no extra props, no chaotic sparks, no excessive smoke, no random icons. Avoid malformed cheese geometry, duplicated toppings, floating ingredients, broken crust structure, unreadable text, cheap fast-food styling, oversharpened texture, muddy blacks, incorrect box perspective, inconsistent lighting, or any drift away from a high-end commercial advertising finish.
```

  </details>

- **国家 DNA 双螺旋：[COUNTRY] 可替换纪念碑雕塑** — 把国家建筑/文化嵌进 DNA 双螺旋，国名做成实体金属字。文旅/国家形象 KV 换槽即用，附完整英文模板。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2100487806481305998)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a breathtaking surreal architectural masterpiece where [COUNTRY] is transformed into a giant DNA double helix, with the word “[COUNTRY]” prominently integrated into the structure itself.

The DNA helix rises vertically as a monumental futuristic sculpture. The two twisting strands are built from the architecture, culture, landscapes, landmarks, patterns, and visual identity of [COUNTRY]. Intricate miniature buildings, famous landmarks, traditional architecture, roads, bridges, transportation, mountains, rivers, plants, and cultural details naturally grow along the twisting DNA strands.

The country name “[COUNTRY]” should be beautifully incorporated into the architecture, formed from elegant metallic architectural lettering near the center or lower section of the helix. The letters should feel physically built into the structure, with realistic depth, shadows, reflections, and architectural detailing — not like flat digital text.

Make the DNA base pairs connect different cultural elements of the country, creating the feeling that the entire identity of [COUNTRY] is encoded into its DNA.

Use sophisticated materials inspired by the country: stone, bronze, copper, glass, ceramic, and subtle illumination. Add tiny architectural details and floating particles around parts of the helix for a magical transformation effect.

Minimal warm ivory background, soft cinematic studio lighting, elegant shadows, premium museum-installation aesthetic, photorealistic materials, ultra-detailed, surreal yet believable, visually striking and highly shareable.

Composition: centered monumental hero sculpture, vertical 4:5, dramatic perspective, clean negative space, no people, no extra text, no logos, no watermark.
```

  </details>

- **东方禅意极简封面：中文结构化海报配方** — 古风女子+低榻珠帘，奶白基底点缀葡萄紫/青柠绿；9:16 留白标题区写死。女性向封面/小红书竖版可直接返图，附完整中文分节 prompt。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2100462806281941187)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题方向：东方禅意极简封面海报
风格分支：女性审美精致型
主体内容：一位古风女子坐在低榻上，手边放着一本合起的小册子
情绪母题：安静、柔美、精致松弛感
场景与意象：极简珠帘、低榻、葡萄紫软垫、青柠绿小枝叶、女子
构图与空间：9:16 竖版构图，低榻位于下方，珠帘从上方垂落形成柔和纵向节奏，中上部保留留白
色彩控制：奶白作为整体基底，葡萄紫用于软垫和局部点缀，青柠绿用于少量枝叶，人物服装建议珍珠白或浅紫白；避免全图泛紫
光线与质感：明亮室内柔光，轮廓清晰，低灰度，干净平面海报感
画幅比例：9:16
补充要求：整体要有精致女性感和封面感，珠帘要简洁，不要宫廷繁复感，画面留白处配上合适的艺术文字 。
```

  </details>

- **和纸胶带旅行拼贴：可替换地点模板** — 把 [COUNTRY / LOCATION / SUBJECT] 换成任意目的地，10–18 条 washi tape 拼出地标；文旅/文具品牌向 3:4 竖版，附完整可替换模板 prompt。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2100452165416374277)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create one premium 3:4 vertical washi-tape collage artwork for [COUNTRY / LOCATION / SUBJECT].

TEXT-TO-IMAGE GENERATION ONLY. Generate the complete artwork from “[COUNTRY / LOCATION / SUBJECT]” alone. No reference image or additional visual input is required.

MAIN CONCEPT

Automatically interpret [COUNTRY / LOCATION / SUBJECT] and identify its most recognizable subject, silhouette, structure, pose, colors, shapes, and defining visual characteristics.

Reconstruct that subject entirely from approximately 10–18 pieces of Japanese washi tape, using different widths, lengths, directions, cuts, and overlaps to form one instantly recognizable flat collage.

The tape arrangement should feel intentionally handmade while accurately expressing the identity of [COUNTRY / LOCATION / SUBJECT].

WASHI TAPE MATERIAL

Use authentic Japanese washi tape characteristics:

Slight translucency and natural overlapping

Fine paper-fiber texture

Soft paper thickness

Irregular hand-torn edges

Subtle contact shadows

Simple solid colors or understated basic patterns

Natural layering and slight imperfections

Avoid complex patterns and excessive decoration.

COLOR

Automatically select a refined palette based on the visual identity of [COUNTRY / LOCATION / SUBJECT].

Use a limited number of clear, harmonious colors that make the subject recognizable. Allow overlapping translucent tape to naturally create subtle color variations.

COMPOSITION

Place the completed washi-tape subject prominently on a clean warm-white journal-paper background.

Maintain generous negative space around the artwork.

Keep the composition elegant, balanced, minimal, and carefully designed—like a premium Japanese stationery brand, independent design magazine, or gallery-quality handmade collage.

Do not fill the entire canvas.

BACKGROUND

Use warm white, ivory, or natural off-white paper with extremely subtle paper fibers and gentle material variation.

Keep the background clean, smooth, and low-contrast.

No stains, yellowed-paper effect, heavy aging, repetitive textures, or distracting details.

TYPOGRAPHY

Automatically create one short English title of 1–3 words inspired by [COUNTRY / LOCATION / SUBJECT].

Keep it small and secondary to the collage.

Use refined, minimal typography and position it where it naturally balances the composition. Remove the title entirely if it would weaken the design.

FINAL AESTHETIC

Create a sophisticated combination of:

Japanese washi tape × handmade paper craft × minimalist editorial design × tactile collage × premium stationery aesthetic.

The artwork should feel clean, delicate, contemporary, handmade, and highly intentional, while the subject remains immediately recognizable.

AVOID

No stickers, cards, stamps, tickets, envelopes, tape rolls, scissors, hands, desks, craft tools, scrapbook clutter, heavy shadows, 3D plastic, oil painting, cartoon rendering, dirty backgrounds, excessive decoration, or photorealistic objects.

STRICT 3:4 VERTICAL | TEXT-ONLY GENERATION | 10–18 WASHI TAPE PIECES | CLEAN WARM-WHITE BACKGROUND | GENEROUS NEGATIVE SPACE | PREMIUM JAPANESE EDITORIAL DESIGN.

Generate everything autonomously from [COUNTRY / LOCATION / SUBJECT] alone. Do not request or require an image.
```

  </details>

- **经典 Logo 膨胀成 3D 雕塑海报** — Apple / Nike / Adidas / Pepsi：3D 充气雕塑 + 超大字 + 褶皱纸 + 半调 + 套准十字。品牌 KV 想「又潮又脏」直接抄这套图层语法。 [@ShamsAmin56](https://x.com/ShamsAmin56) · [原帖](https://x.com/ShamsAmin56/status/2100322168185974959)

- **一品两出：先锁战役规则再换版式** — 同一瓶沐浴油：电影感广告片 + 3×3卖点海报。瓶型/配色/苹果意象先写死，版式才能换而不散品牌。 [@NoravaleAI](https://x.com/NoravaleAI) · [原帖](https://x.com/NoravaleAI/status/2100225374974026080)
  <details>
  <summary>查看 / 复制提示词</summary>

```
One product. Two formats. Built in GPT Image 2.5.

Campaign lock rules (keep fixed across formats):
- clear bottle + signature red pump
- apple red + cream + soft green
- red apple, blossoms, water droplets
- silky golden oil + soft emulsion
- luminous wet skin
- crisp fruit + floral + musky cedar
- fresh, feminine, fragrance-led luxury

Outputs from the same visual system:
1) cinematic commercial
2) 3×3 selling-point poster

Principle: lock campaign rules first, then change format without the brand falling apart.
```

  </details>

- **地铁斜穿连通性：四区房产海报一气呵成** — 别用四个框解释配套——让高架地铁斜穿分区，视线落到楼盘。连通性卖点写成空间关系的可抄结构。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2100223219383124188)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a Cannes-level ultra-premium real estate advertising poster for a fictional development brand called AURELIA GATE RESIDENCES, preserving the exact structural logic of a multi-panel infrastructure-led property campaign: a square or near-square luxury real estate poster divided into four integrated visual zones with softly curved page-like corner framing, where the top-left panel presents the hero residential towers rising above the city, the top-right panel highlights a major expressway corridor, the lower-left and center are dramatically crossed by an elevated metro line in perspective, and the bottom-right panel shows a refined private consultation meeting in an elegant sales-lounge interior. The final image must communicate that this development is defined by strategic connectivity, transit-oriented value, and premium urban lifestyle.

Core composition: structure the poster as a refined four-zone collage with thin elegant dividing lines and subtle curved panel edges, preserving the same premium brochure-meets-commercial-ad language as the reference. Top-left: one aerial oblique view of the hero residential project, with 3 to 4 slender luxury towers standing prominently above a dense low-rise city fabric, warm sunset light, and a discreet location tag integrated near the site. Top-right: one wide, clean view of a modern multi-lane expressway with landscaped medians, smooth traffic flow, and urban skyline in the distance, representing regional access. Lower-left/center: one modern elevated metro train sweeps diagonally across the composition toward the viewer, occupying strong foreground dominance and visually linking the top property panels to the lifestyle promise below. Bottom-right: one premium sales or negotiation lounge with two well-dressed business professionals seated at a round table in a polished interior, reviewing documents in a calm high-end environment. All four zones must feel part of one coherent brand story.

Hero project design: create a premium urban residential development for AURELIA GATE RESIDENCES with elegant glass-and-stone towers, warm architectural lighting, podium greenery, and a sophisticated city-integration concept. The tower cluster should feel financially aspirational, architecturally credible, and highly sellable, with clean facade rhythm, realistic balcony or glazing repetition, refined rooftop crowns, and believable urban scale. The development must remain the conceptual hero even though the transit line is visually dramatic.

Transit-oriented narrative: the metro line is a major storytelling device. Render one sleek modern elevated train with realistic carriage proportions, reflective glazing, subtle interior hints, and premium metallic finish, traveling on an elevated viaduct that cuts diagonally through the composition. The train must feel fast, clean, and future-forward, visually symbolizing convenience, rising value, and metropolitan momentum. The viaduct structure should be engineered and convincing, with support detail, guard rails, and proper perspective depth. This transit element should strengthen the real estate value proposition rather than overpower the towers.

Expressway and access panel: the top-right infrastructure panel must show a broad, elegant arterial highway or national corridor under soft daylight, with landscaped edges, a few realistic vehicles, and a clean urban horizon. The shot should communicate regional mobility, strategic access, and development upside. Avoid traffic chaos, dirty roads, or generic stock-photo feel.

Lifestyle and trust panel: the bottom-right consultation scene should communicate investment confidence and premium service. Show two adult male professionals or sales executives in tailored suits seated in a luxurious lobby or sales gallery with warm stone, wood, glass, and soft neutral furnishings. Their posture should suggest focused conversation, trust, and deal-making rather than casual chatting. Keep anatomy, hands, and facial proportions realistic and understated. This panel should feel aspirational, polished, and calm.

Typography and layout: preserve the source image’s same-type panel-based property-sales hierarchy but rewrite all wording into original English. In the top-left or upper central visual field, place a strong campaign line such as “Two Frontages. One Strategic Address.” In the top-right panel, include a concise infrastructure callout like “Gateway to Route 13” or “Connected to the City’s Main Artery.” In the lower-left or over the train zone, place a compact premium callout such as “First-Mover TOD Advantage.” In the bottom-right panel, add a short trust message like “Flexible Terms for Modern Buyers.” Typography must be elegant, highly legible, and spatially integrated into each panel, using premium serif and modern sans-serif combinations. Do not overcrowd the poster with dense brochure text.

Branding: place a small refined AURELIA GATE RESIDENCES logo lockup in the upper-left corner, with a minimal developer or partner mark if needed. Branding should feel premium, corporate, and internationally polished, not loud or crowded.

Lighting: use refined golden-hour-to-soft-daylight transitions across the panels while keeping one unified visual grade. The residential towers should glow with aspirational sunset warmth. The expressway panel should feel clear, clean, and daylight-balanced. The train should carry polished highlights and forward energy. The consultation panel should use soft interior luxury lighting with warm reflections on marble, metal, and glass. Keep contrast rich but controlled, with no muddy green shadows or dead black blocks.

Material and texture: emphasize tower facade realism, metro train metal and glass surfaces, highway asphalt and planted medians, polished sales-lounge marble and upholstery, and the crisp graphic finish of a high-end real estate poster. Every panel should feel photographically believable while still maintaining unified commercial art direction.

Color hierarchy: 50% premium deep green, ivory, and soft urban neutrals; 25% warm sunset gold and champagne architectural highlights; 15% cool steel, metro silver, and highway grey; 10% muted rose-magenta or burgundy typographic accents for premium contrast. The palette must feel upscale, strategic, modern, and trustworthy.

Design intent: the final poster must preserve the source image’s exact impact logic of panel-based real estate storytelling, transit-led motion, infrastructure access, and investor-service messaging, while elevating it into a more original, more luxurious, and more internationally art-directed property campaign. The project is not sold merely as a building, but as a strategically connected urban asset anchored by mobility, visibility, and premium sales confidence.

Rendering style: ultra-photoreal luxury real estate advertising, premium urban development campaign, transit-oriented property poster, high-end architectural visualization merged with commercial editorial design, polished infrastructure storytelling, world-class property marketing finish, print-ready realism.

Negative prompt: copied source text, real developer names, generic brochure clutter, low-detail towers, warped metro geometry, fake highway perspective, malformed hands, extra fingers, stiff business poses, muddy urban haze, overpacked text blocks, cheap condo flyer styling, distorted panel layout, black blotches, watermark
```

  </details>

- **楼盘先入镜：三竖屏生活区房地产海报** — 下半整栋实楼当主角，身后三道发光生活区竖屏。生活感不抢戏、楼盘不沦装饰的高端地产 KV 骨架。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2100222341871726598)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A hyper-real premium real estate poster advertisement for a fictional domestic luxury development brand called LANHAI TIANJING, designed as a high-end architectural campaign visual that preserves a strong three-panel aspirational structure while making the residential property the absolute visual hero. In the foreground, create a highly realistic low-rise luxury mixed-use residential block occupying the full lower half of the composition: stepped contemporary architecture, elegant stone-and-glass facade, planted rooftop terraces, continuous balcony rhythm, warm boutique storefront glow at street level, mature roadside trees, a clean broad boulevard, a few small refined pedestrians and bicycles for scale, all physically plausible, meticulously detailed, and clearly premium.

Behind the building, rise three monumental vertical vision panels integrated into the poster like luminous branded portals. Keep the same tall, narrow, clean-edged three-column structure, evenly spaced, with the central panel slightly dominant. Left panel: a sunlit coastal mountain boulevard with a silver luxury electric grand tourer moving through a scenic curve, conveying freedom, status, and effortless access. Center panel: a bright bayfront skyline with waterfront towers, layered bridges, transport infrastructure, and a passenger jet flying toward camera above the city, expressing metropolitan reach, connectivity, and urban momentum. Right panel: a serene private marina scene with a sleek white yacht cutting through deep blue water near a high-end coastal leisure zone, expressing waterfront lifestyle and exclusive privilege. The three panels must feel unified in perspective, light quality, and graphic authority, acting as symbolic lifestyle extensions of the property rather than random collage fragments.

Framing and composition: vertical hero poster, slightly low eye-level architectural angle, strong rule of thirds, the property mass grounded and dominant in the lower field, the three aspiration panels rising behind it into the sky, generous negative space at the top for the logo and at the bottom for the title typography. Preserve the original visual grammar of upward ambition and layered value stacking, but sharpen the hierarchy so the residential architecture reads first, the central aspirational skyline reads second, and the side panels complete the narrative. Keep the flow from top emblem to middle triptych to building volume to bottom title band.

Lighting and color: bright cinematic daylight with polished ad-grade contrast, clear atmospheric glow in the upper sky, crisp sunlight on facade edges, soft shadow depth beneath balconies, refined glass reflections, luminous but controlled highlights across vehicles, aircraft, water, and architecture. Build stronger light-dark separation across the building mass to emphasize terrace depth and material volume. Color system: 60% clean sky blue, bay cyan, and cool daylight atmosphere; 30% warm ivory stone, greenery, and soft urban neutrals; 10% metallic gold accents in the logo and typography. The frame must feel fresh, prosperous, elegant, and globally aspirational, without muddy shadows, dead black patches, or oversaturated brochure harshness.

Materials and finish: ultra-real architectural visualization fused with luxury commercial photography. Dense matte mineral stone, crisp low-iron glass, realistic planted greenery with varied leaf density, elegant metal balcony rails, smooth asphalt, restrained storefront illumination, polished metallic vehicle bodywork, aerodynamic aircraft surface, glossy yacht hull, coherent scale relationships across every element. Maintain premium realism with clean micro-detail, subtle atmospheric depth, and highly controlled retouching, as if created for a Cannes-level property campaign.

Typography: place a refined minimal gold emblem at the top center, with the brand name "LANHAI TIANJING" below it in elegant uppercase serif. In the lower title band, set the Chinese main title exactly as "岚海天境" in large luxurious gold typography with graceful, slightly calligraphic serif character construction. Directly below it, add the English subtitle exactly as "Bayfront Skyline Residences" in a small refined serif. Add two supporting Chinese copy clusters in the lower typography zone: left cluster exactly "湾芯主场", right cluster exactly "向上而居", each paired with a subtle line of tiny English microcopy in a delicate editorial serif. Typography must feel integrated, spacious, and premium, with precise alignment, elegant kerning, controlled scale hierarchy, and safe margins away from the main building silhouette.

Output and constraints: polished luxury real estate commercial poster, architecture-first hierarchy, clean and unified visual system, no real city names, no real people names, no random clutter, no extra decorative noise. Keep architecture structurally correct, windows aligned, balconies logical, street scale believable, trees rooted, pedestrians small and anatomically normal, vehicles and yacht physically accurate, aircraft proportionally correct, typography readable and elegant. Avoid warped architecture, duplicated windows, broken perspective, malformed vehicles, unreadable text, floating objects, muddy grading, cheap CGI plastic surfaces, chaotic collage edges, distorted anatomy, extra fingers, broken limbs, black blotches, and off-style visual drift.
```

  </details>

- **《白鹿王庭》黑暗奇幻商业大片海报** — 2:3 Key Visual：银发女王 + 白鹿灵体 + 主演条/片名/文案层一次写齐。国风奇幻商业海报可抄结构。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2100204772578251107)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2:3竖版黑暗奇幻商业大片海报，电影标题《白鹿王庭 / THE COURT OF THE WHITE STAG》。原创成年动漫女王角色由真人电影演员式cosplay呈现，保留梦幻银发、锐利眼型和高辨识度轮廓，同时具有真实皮肤、精致冷调妆容与可触摸的服装材质。她头戴残缺银冠，身穿黑银刺绣长袍和深蓝羽毛披肩，端坐在被藤蔓侵蚀的古老王座上；背后浮现一头巨大白鹿的半透明灵体，鹿角延伸成枯树林与宫殿尖塔，阶梯下散落破碎旗帜。人物身体正对画面，脸略微偏向侧方，一只手扶王座，一只手握银色权杖，神态庄严疏离。月光从高处穿透穹顶，冷银轮廓光与少量烛火形成克制冷暖对比，黑色天鹅绒、金属、羽毛与石材均为电影级PBR质感，加入轻微胶片颗粒。顶部显示主演：“TOP CAST · EIRA QIN · LUNA SHAO · REI AKITO”；底部片名“THE COURT OF THE WHITE STAG”，宣传语“王冠选择的从来不是继承者，而是祭品”。下方只保留通用制片信息，不加入导演署名或手写签名。官方Key Visual，恢宏但不杂乱。
```

  </details>

- **中秋「人间团圆夜」竖版海报：完整提示词** — 3:4 深红夜空 + 暖金满月 + 归家剪影，主副标题层级写死。节日营销海报直接改字就能发。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2100204144149819616)
  <details>
  <summary>查看 / 复制提示词</summary>

```
设计中秋节夜空海报，竖版 3:4。深红到暗红的渐变背景，暖金满月与细小星光构成简洁夜景；下方是城市屋顶与归家行人的柔和剪影。中央主标题“人间团圆夜”，底部小字“愿每一次抬头，都有月光相伴”。光影温柔，文字层级明确。只渲染指定中文，不添加其他文字、Logo、水印或乱码。
```

  </details>

- **上半原图 + 下半手绘：作品集切分海报** — 3:4 严格 50/50：上半保风格身份，下半极简手绘重释 + 大余白。角色图一键变「画册封面」感。 [@tokotoko_aiil](https://x.com/tokotoko_aiil) · [原帖](https://x.com/tokotoko_aiil/status/2100185428188168203)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded reference image.

Create one independent high-end editorial poster per image. Do not make a collage.

FORMAT
- Strict 3:4 vertical
- Exact 50/50 horizontal split
- Top half: original illustration
- Bottom half: minimalist hand-drawn reinterpretation

TOP HALF
Preserve the original image as faithfully as possible:
character identity, face, hair, eyes, expression, proportions, pose, outfit, accessories, objects, composition, art style, linework, coloring, lighting, atmosphere, and color mood.

Do not redesign the character, change the outfit or pose, make it photorealistic, convert it to 3D, or change the art style.

Apply only subtle editorial color grading.
If needed, extend only the background naturally. Do not distort the main subject.

BOTTOM HALF
Reinterpret the most recognizable elements as a small minimalist handmade illustration.

Use:
- delicate imperfect hand-drawn lines
- flat acrylic-style color shapes
- subtle brush marks
- rough off-white paper texture
- organic edges
- strong simplification

Keep only the essential silhouette, distinctive features, key pose, and important objects.

The illustrated subject should occupy only about 10–20% of the bottom half and be surrounded by generous negative space.

COLOR
Use no more than 4 main colors extracted from the original image.

TYPOGRAPHY
Optional. If used, keep it very small, minimal, and editorial.

MOOD
Quiet, poetic, refined, minimal, soft, artistic, premium.

Final result: a contemporary art-book cover combining the original digital illustration above with a small handmade reinterpretation below.
```

  </details>

- **[COUNTRY] 巨型巧克力食物艺术：本地化模板** — 国家名 + 地标 + 本地食物塞进掰开的巧克力棒。超写实美食海报占位符齐全，本地化营销一键换皮。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2100164588721651910)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a breathtaking, photorealistic luxury food-art image of [COUNTRY] transformed into a giant premium chocolate bar.

The chocolate bar lies diagonally on an elegant dark stone surface, photographed from a slightly elevated cinematic angle. Its wrapper is inspired by the visual identity, colors, patterns, and cultural aesthetic of [COUNTRY], while remaining sophisticated and premium.

The chocolate bar is dramatically broken open in the center.

From inside the broken chocolate, an incredibly detailed miniature 3D version of [COUNTRY] emerges as if the entire country is sculpted inside the chocolate.

Include:

[FAMOUS LANDMARK] as the central focal point

[FAMOUS NATURAL LANDSCAPE] surrounding it

tiny recognizable local architecture

miniature streets and transportation

[FAMOUS LOCAL FOOD] as tiny decorative elements

native flowers, trees, mountains or coastline

subtle cultural details unique to the country

Make the chocolate itself extremely realistic: glossy cocoa surface, crisp snapped edges, creamy layered interior, tiny chocolate crumbs, delicate melting chocolate, realistic highlights and shadows.

Create a magical transition where chocolate pieces gradually become mountains, buildings and landscape, making it look as though the entire country has been hidden inside the chocolate bar.

Premium commercial food photography, cinematic lighting, ultra-detailed miniature world, realistic materials, macro photography, shallow depth of field, atmospheric perspective, sophisticated composition, rich textures, 8K photorealism, visually irresistible, surreal but believable.

Composition: vertical 4:5, centered hero object, dramatic perspective, clean luxurious background, strong visual contrast, no people, no subtitles, no watermark, no unnecessary text.
```

  </details>

- **制度叙事东方海报：科举夜巡水利榫卯** — 大色域纸纤维扛结构，微场景讲流程：科举放榜 / 更鼓夜巡 / 水利分流 / 榫卯咬合。博物馆 KV 可填槽模板，比堆古建筑高级一整档。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2100159212047544806)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【主题 / 展览名称】{填写，例如：科举制度 / 城市夜巡 / 古代水利 / 榫卯结构}
【主标题】{填写}
【核心制度 / 文化逻辑】{填写，例如：入闱→弥封→放榜 / 暮鼓→夜巡→晨启 / 分水→量水→灌溉}
【主色域】{填写 3–5 个颜色，例如：旧麦金 + 墨青 + 朱砂 / 深靛蓝 + 灰蓝 + 暖赭}
【微场景节点】{填写 2–4 个连续场景}
【展览信息】{日期 / 地点 / 展览类型，可选}
【画幅比例】9:16 竖版

设计一张具有现代东方编辑美学的历史文化海报，以「纸纤维 + 大色域 + 微场景」作为核心视觉语言。不要把传统文化理解成堆叠古建筑、书法、祥云或器物，而是先提炼【核心制度 / 文化逻辑】，再让大面积手工纸色域直接承担结构、空间、时间、流向、秩序或流程关系，使观众远看首先看到强烈而清晰的大形，近看才逐渐发现隐藏在其中的文化叙事。

使用【主色域】建立 2–5 个面积明显不同的主纸色块，保持低饱和但色彩浓度完整。所有色块具有真实丰富的手工纸、纸浆、水彩或矿物颜料质感，可见天然长短纤维、颜料沉积、轻微压痕、大尺度自然色差与不规则撕纸边缘，整体哑光、干净、完整，不做脏旧、黄斑、随机斑驳、廉价复古或数字渐变。根据主题让色域通过折叠、分叉、穿插、咬合、错层、承托、分段、围合或负空间关系表现制度运行逻辑，而不是简单作为背景装饰。

在大色域结构中嵌入【微场景节点】，人物与道具保持非常小的尺度，总体约占画面 3%–6%。每个场景都要表现一个明确动作，并且彼此存在因果或时间关系，例如“进入→执行→记录→完成”，让微型人物真正承担叙事，而不是站立摆拍。人物服装和器物符合主题时代与身份，但保持克制，不做影视古装大片；场景只保留能说明制度关系的关键道具，不堆满装饰和无关文化符号。

排版使用现代东方文化机构、博物馆或档案展览的编辑语言。主标题【主标题】使用精致宋体、明朝体或具有出版感的中文字体，字号保持中小尺度，不让文字压过大色域；辅助英文、日期、地点和说明信息使用更小字号，形成明确层级。可以加入极少朱砂印记、纸签、档案标签或节点文字，但必须与主题逻辑发生真实关系，不能只是为了“国风感”随机装饰。

整体阅读顺序应为：大色域结构与色彩关系 → 制度或空间逻辑 → 微型人物连续叙事 → 主标题与展览信息。最终画面要做到远看有强烈大形和视觉冲击，近看有纸纤维、人物动作和历史细节，兼具设计感、叙事感与文化完成度。避免书籍封面感、传统古风插画、满屏古建筑、巨大标题、PPT式规则排版、现代信息图箭头、无意义英文占位、元素堆砌、商业广告感、3D CGI、玻璃材质、霓虹色、Logo、水印、编号和星芒装饰。
```

  </details>

- **日系街头杂志风：东京旅行时尚竖版** — 复古杂志拼贴 + TOKYO 大字报头，红黑图形面板压夜景。旅行时尚 / 城市 campaign 竖版直接抄。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2100099718605135962)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a vertical 4:5 ultra-realistic editorial travel fashion poster inspired by a vintage Japanese street magazine cover.

A young woman stands prominently in the center foreground, photographed from a slightly low angle. She has dark hair tied into a messy high bun with loose strands framing her face, wearing narrow futuristic black wraparound sunglasses and looking slightly toward the camera with a confident, calm expression. She wears an oversized black technical utility jacket covered with realistic straps, buckles, zippers, pockets, printed patches, labels and subtle reflective details, paired with dark tactical-style clothing and a large black utility bag. Preserve realistic fabric texture and natural proportions.

The background is a Tokyo night street collage, featuring rain-soaked neon streets, Japanese shop signs, narrow urban alleys, Tokyo Tower glowing at night, and a Tokyo train arriving at a station. Arrange several rectangular photographs around the central subject at different slight angles, creating a handmade editorial scrapbook layout. Use off-white aged paper as the main background with subtle paper grain, worn edges, folds, stains and vintage print texture.

At the top, add huge bold black typography reading:

TOKYO

Under it, smaller elegant italic serif text:

FUTURE IS NOW

Add small editorial text blocks such as:

“Where tradition meets technology, and every street tells a story of tomorrow.”

Include minimalist globe symbols, technical graphic lines, barcode elements, coordinates, small labels and futuristic editorial markings.

Use Japanese-inspired red and black graphic panels throughout the composition. Add a vertical red panel on the right with Japanese typography, a red graphic card on the lower left containing large Japanese characters, and another red photographic panel in the lower right showing a dark silhouette of the woman.

Include small typography such as:

35.6895° N
139.6917° E

and:

SHIBUYA • SHINJUKU • HARAJUKU • AKIHABARA

Overall aesthetic: high-end Japanese streetwear magazine, cyberpunk Tokyo, vintage travel poster, contemporary fashion editorial, analog print collage. Muted black, charcoal, cream, dark gray and deep red color palette. Strong photographic realism, cinematic night lighting, subtle film grain, slightly faded ink, authentic paper texture, imperfect print registration, sophisticated magazine typography, balanced negative space.

Composition: central full-body subject, oversized “TOKYO” headline occupying the upper section, layered Tokyo photographs surrounding her, red graphic accents, vintage paper border, premium editorial layout.

Photorealistic, highly detailed, cinematic, 8K, realistic skin, realistic clothing textures, professional fashion photography, authentic vintage print finish, no modern digital UI elements.
```

  </details>

- **东方极简封面：结构化中文海报槽位** — 主题 / 风格分支 / 情绪母题 / 色彩控制写死，新中式竖版封面可返图。营销封面别靠玄学——槽位填完再出图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2100097638326780122)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题方向：东方禅意极简封面海报
风格分支：女性审美新中式型
主体内容：一位古风女子站在浅色屋脊下方，抬眼看一只停在檐角的小雀
情绪母题：灵动、安静、东方趣味感
场景与意象：月牙白屋墙、海棠红檐角点缀、松针绿植物、小雀、女子
构图与空间：9:16 竖版构图，屋檐斜向切入上方，人物位于下方偏一侧，上方大片浅色墙面形成标题区
色彩控制：月牙白作为背景和墙面基底，海棠红用于檐角和局部点睛，松针绿用于少量植物，小雀保持自然浅棕色；避免整图偏红或偏绿
光线与质感：明亮自然光，画面干净，边缘清楚，轻平面新中式海报感
画幅比例：9:16
补充要求：整体要有趣味但仍极简，小雀只作为灵动点，不要把背景做复杂，画面留白处配上合适的艺术文字
```

  </details>

- **旅行海报模板：[LOCATION] 可替换复古探险** — 上中下三层构图 + 字内填景，换地名就能批量出 4:5 旅行 editorial。旅游 / 城市 KV 直接套槽。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2100089588559802619)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium ultra-high-resolution illustrated travel poster for **[LOCATION]**, designed as a sophisticated vintage adventure-travel editorial poster in a strict **4:5 vertical format**.

Build the composition around the destination’s most iconic landscapes, landmarks, wildlife, architecture, cultural symbols, and natural features. Create a strong **three-level visual composition**:

1. **TOP SECTION:** A dramatic panoramic hero scene representing [LOCATION], featuring its most recognizable landscape or landmark under beautiful atmospheric skies. Add a few authentic destination-specific elements such as wildlife, vegetation, architecture, or local details.

2. **CENTER SECTION:** Make **“[LOCATION NAME]”** extremely large and dominant across the poster using bold condensed geometric sans-serif typography. Fill the interior of the letters with a detailed scenic image of the destination, seamlessly combining mountains, coastline, forests, architecture, glaciers, desert, cityscape, or other relevant scenery. Keep the typography perfectly readable while allowing the imagery to extend naturally through the letters.

3. **BOTTOM SECTION:** Create a second expansive scenic panorama showing another iconic aspect of [LOCATION], with foreground details such as native wildlife, vegetation, water, rocks, streets, buildings, or cultural elements. Make it visually connected to the central typography and upper landscape.

Surround the composition with subtle **editorial travel-poster typography**, including short destination-relevant phrases, geographic references, and atmospheric descriptive words. Keep all secondary text minimal, correctly spelled, evenly spaced, and visually subordinate to the main location name.

**ART STYLE:** Premium vintage travel illustration × mid-century editorial poster × modern screen print aesthetic. Handcrafted painterly texture, bold shapes, sophisticated composition, slightly weathered print character, cinematic landscapes, rich environmental detail, and authentic destination identity.

**COLOR:** Automatically derive a refined palette from [LOCATION] and its natural environment. Use harmonious earthy and atmospheric tones with strong contrast, avoiding excessive colors.

**COMPOSITION:** Strong visual hierarchy, balanced negative space, layered scenery, oversized typography, seamless image-filled lettering, panoramic landscape bands, elegant editorial spacing, and premium collectible travel-poster design.

**TEXT RULES:** The primary headline must be exactly **“[LOCATION NAME]”**. All visible text must be in English, correctly spelled, clean, intentional, and legible. Do not add random words, fake logos, watermarks, or meaningless text.

**QUALITY:** Ultra-high resolution, razor-sharp details, crisp typography, sophisticated illustration, realistic environmental depth, polished print texture, professional travel-poster finish.

**FORMAT:** STRICT **4:5 VERTICAL**.
```

  </details>

- **建筑照片→半调旅行海报：上下分区模板** — 上半保留实拍结构，下半撕纸碎片 + ASCII + 影印半调重建同一建筑。地产 / 文旅批量出片，分区格式写死可复用。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2100067049288634730)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Turn this structure photo into a single high-end halftone architectural travel-collage poster. Output one poster per uploaded photo — never merge multiple structures or photos into one frame.

FORMAT

3:4 vertical canvas. Split into two roughly equal zones — real architectural photo on top, printed reconstruction below — divided by one clean, sharp horizontal line.

Do not stretch, warp, tilt, or unnaturally reposition the structure to force the proportions.

TOP HALF — THE REAL SHOT

Preserve the original structure faithfully: same architecture, proportions, perspective, distinctive details, surrounding elements, natural light and shadow, and original color mood.

Keep recognizable features such as:

* façade
* windows and arches
* towers or domes
* doors and structural details
* roofline
* surrounding landscape or street elements

Add only a subtle high-end color grade and the faintest film grain. Do not redesign or reinterpret the architecture.

BOTTOM HALF — THE PRINTED RECONSTRUCTION

Rebuild the same structure as an experimental printed architectural collage using:

torn photographic fragments + fixed-width ASCII character fields + photocopy halftone dots + architectural linework.

The structure must remain immediately recognizable.

* Torn-edge photographic fragments preserve the most important architectural details.
* Brick, stone, glass, metal, shadows, windows, and surrounding textures gradually dissolve outward into ASCII characters, black halftone dots, fragmented print grain, and fine architectural drafting lines.
* Use thin technical construction lines to subtly trace the structure’s geometry.
* Let selected areas break apart into paper fibers and halftone fragments, creating the feeling that the building is emerging from an archival print.
* Keep the main silhouette strong and readable.
* Texture: rough white paper-fiber edges, subtle photocopy imperfections, slight print misregistration, faded ink, old-paper stains, a few restrained crop marks, and one small red calibration bar.
* Color: warm gray old-paper background + black ink + the structure’s original muted colors + a single restrained red accent.
* Never fully desaturate the structure.

The structure should occupy roughly 60–88% of the frame width, scaled according to what reads best for the architecture.

Leave 22–38% of the paper visibly untouched and empty, creating generous negative space so the poster feels like an archival architectural specimen rather than a packed digital screen.

TYPOGRAPHY

Add one clean, readable fixed-width architectural title based on the structure:

[STRUCTURE NAME]

Below it include:

[CITY, COUNTRY]
REC. STUDY 01

Add one short observational caption related to the architecture, such as:

“A monumental study in geometry, time, and place.”

Typography should feel like an old architectural archive mixed with an underground experimental design journal.

A few loose ASCII glyphs may trace the outer silhouette or architectural edges as texture only — never use ASCII to invent windows, doors, structural details, or technical specifications.

MOOD

Early digital systems × analog photocopy × architectural archive × underground zine × modern travel editorial.

The structure should feel like it is surfacing from an old printed document — half photograph, half architectural drawing, half experimental print.

Sophisticated, minimal, tactile, intellectual, slightly mysterious, and highly collectible.

AVOID

Solid black terminal backgrounds, dense walls of code, cyberpunk neon, excessive ASCII, distorted architecture, impossible geometry, invented architectural details, fake technical specifications, random symbols with no meaning, garbled text, excessive colors, brand logos, QR codes, watermarks, author credits, or tourist-poster clichés.

Priority: Preserve the structure’s identity and architectural accuracy first. The experimental halftone/ASCII treatment should enhance the architecture, not hide it.
```

  </details>

- **字体也能锁：缩略图字体参考表** — 不只锁脸——缩略图用的字体也能出 reference sheet。做系列封面/世界观时，少开一遍设计软件抠字。 [@1banana2546](https://x.com/1banana2546) · [原帖](https://x.com/1banana2546/status/2100026883643670876)
  <details>
  <summary>查看 / 复制提示词</summary>

```
画像1に写っている（または指定した）フォントの見た目・ウェイト・字間・装飾感を厳守し、画像2のようなフォントリファレンスシートを作成してください。
シートには同じ書体の：アルファベット大文字／小文字、数字、よく使う記号、短い見出し見本、サムネ向け短文見本を、きれいなグリッドで並べる。
背景はシンプル、文字以外の装飾を足さない。フォントの骨格・セリフの有無・コントラストを崩さない。
```

  </details>

- **透视即设计：四种景深系统海报** — FRAME SHIFT / VANISH POINT / LEVEL SHIFT / STRATA——人与建筑叠进同一透视场。活动 KV / 时装 campaign 控空间直接抄槽位公式。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2099880009053917543)
  <details>
  <summary>查看 / 复制提示词</summary>

```
[BRAND NAME]: {fill in}
[CAMPAIGN / SERIES]: {fill in}
[MAIN TITLE]: {fill in}
[TAGLINE]: {fill in}
[DEPTH SYSTEM]: {nested frames / converging perspective / stacked levels / layered slabs}
[PRIMARY COLOR]: {fill in}
[ACCENT COLOR]: {fill in}
[NUMBER OF PEOPLE]: {6–8 adults}
[ASPECT RATIO]: {9:16}

Create a high-end multi-person editorial campaign poster where depth and perspective become the main design system.

Build the scene around one strong spatial structure, such as nested architectural frames, lines converging toward a vanishing point, irregular stacked platforms, or large horizontal layers. The architecture should immediately create a clear foreground, middle ground, and background.

Place multiple adult figures at different distances and heights within the same coherent perspective field. Their scale must change naturally with depth. Use one or two strong foreground figures, several smaller midground figures, and a few distant figures. Avoid evenly spaced people, grids, lineups, or team-photo compositions.

Make people and architecture physically overlap. Some figures should pass through frames, disappear behind walls, be partially hidden by platforms, appear between layers, or emerge from deeper spaces. The result should feel like one real photographed environment, not separate people pasted onto a layout.

Integrate the main title into the architecture whenever possible. Let typography follow the perspective of a frame, wall, platform, or structural edge. It may change scale, become partially occluded, or stretch across several depth planes, but it should remain readable.

Keep the environment minimal and sculptural. Use large geometric forms, controlled negative space, one dominant color system, realistic directional daylight, and consistent architectural shadows. The spatial idea should still read clearly at thumbnail size.

Use realistic fashion photography for the cast: natural skin texture, believable anatomy, real hair, accurate hands and feet, natural fabric folds, varied poses, and subtle movement. Avoid duplicated figures, plastic skin, floating bodies, or overly staged model poses.

Supporting typography should stay minimal and secondary. The final image should feel like a real contemporary fashion, cultural, or brand campaign where people, architecture, type, and perspective are all part of the same composition.
```

  </details>

- **四大饮料品牌四世界：一条 campaign 多世界观** — PAUSE / SIP / REFRESH / HAVE FUN——四联各成一套视觉语言。一人团队做饮料/快消 SMM 时，「一提示多世界」比单张好看更值钱；评论区有完整 7UP 级长 prompt。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2099851373470945551)

- **字体当建筑：四联空间排版海报** — CAST TYPE / SKY APERTURE / OPEN CORNER / FLOAT LEVEL——字投阴影、绕混凝土、穿景深。编辑海报 / 建筑视觉空间字体教科书。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2099849499170492882)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 9:16 vertical editorial poster series in English, combining brutalist architecture, oversized perspective typography, realistic young adult figures, and strong three-dimensional spatial relationships.

Keep the visual system consistent across the series: dramatic low-angle photography, deep cobalt-blue sky, warm raw-concrete gray, warm ivory typography, charcoal clothing, and safety orange as the only strong accent. Architecture should feel monumental and simple, with large geometric surfaces rather than complex structures.

Typography must actively participate in the space. Let letters follow architectural perspective, change scale with depth, wrap around surfaces, cast real shadows, become partially hidden by people or concrete, and interact naturally with foreground and background elements. Avoid flat text placed over a photograph.

Keep the people realistic and naturally posed, with authentic skin texture, natural hair, believable clothing folds, and clear physical interaction with the surrounding architecture.

Poster 1: CAST TYPE
Create monumental three-dimensional letters spelling “TYPE” mounted above a brutalist concrete structure. Use warm-ivory front faces and safety-orange side depth. Strong sunlight casts huge readable letter shadows across the concrete wall below. Place a realistic young woman walking through the transition between sunlight and the projected shadow. Add “CAST” as giant perspective typography in the sky. Supporting text may include “LIGHT MAKES FORM”, “READ THE SHADOW”, and “SOLID / PROJECTION”.

Poster 2: SKY APERTURE
Create a monumental circular brutalist atrium viewed from below, with a large round opening revealing vivid blue sky. Integrate “SKY APERTURE” into the curved concrete structure using true circular perspective rather than flat curved text. Add a realistic young man on the lower walkway and a restrained vermilion curved graphic accent. Supporting text may include “OPEN ABOVE”, “CIRCULAR FIELD”, and “LIGHT ENTERS HERE”.

Poster 3: OPEN CORNER
Create a massive 90-degree brutalist concrete corner viewed from a dramatic low angle. Place a realistic young woman naturally interacting with the corner and an orange three-dimensional L-shaped spatial form. Make “OPEN CORNER” wrap across the two architectural planes so the typography visibly changes direction at the corner. Supporting text may include “TWO SIDES”, “TURN THE GRID”, and “BETWEEN SURFACES”.

Poster 4: FLOAT LEVEL
Create two offset concrete slabs with a realistic young man walking along the upper level. Introduce two separated translucent planes at different depths, one smoky blue-gray behind him and one orange plane in front, creating a fragmented spatial volume. Place “FLOAT LEVEL” across multiple depths so the words appear at different distances. Supporting text may include “BETWEEN PLANES”, “NO FIXED GROUND”, and “OFFSET HEIGHT”.

Use meaningful editorial microcopy, small labels, thin rules, and compact annotations to create rich but controlled information density. Keep clear hierarchy and generous negative space around the main architectural forms.

The final series should feel like professionally art-directed architecture and youth-culture editorial posters, with strong thumbnail impact and sophisticated spatial detail up close.
```

  </details>

- **品牌字标校园：Fortune 500 等距微缩校园** — 把公司名变成可逛的字标建筑校园，负空间藏剪影。2×2·16:9 槽位可换品牌，病毒设计物配方完整可抄。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2099807186461634953)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2x2 grid, 16:9, do this for 4 Fortune 500 companies: [HYBRID EQUATION]  $ SUBJECT + giant architectural typography + minimalist negative-space logo + isometric product campus + hidden silhouette inside letters + tiny people for scale + clean platform base + white/black premium material palette + rooftop gardens / rooms / plazas - copied real logos - random miniature clutter - messy typography - generic building model = subject-as-wordmark-campus-emblem  [INSTRUCTION] Render the visual solution.  VISUAL LOGIC: - The subject’s name becomes the architecture. - The architecture becomes a miniature campus. - The campus layout secretly forms the subject’s silhouette. - The negative space becomes the cleverest part of the image. - The tiny inhabitants reveal function, scale, and culture. - The final object must work as both a logo and a diorama.  TRANSFORMATION LOGIC: - Convert letters into buildings. - Convert letter counters/open spaces into courtyards, windows, eyes, mouths, portals, rooms, or symbolic holes. - Convert curves into tails, paths, ramps, bridges, handles, wings, waves, tools, or motion trails. - Convert vertical strokes into towers, legs, pillars, screens, shelves, or monuments. - Convert the subject’s essence into a hidden silhouette readable only after a second look. - Convert culture/function into tiny subject-relevant props and micro-scenes.  OUTPUT: A viral design-object where $ SUBJECT becomes a walkable typographic campus with a hidden negative-space emblem embedded into its architecture.
```

  </details>

- **东方文化海报：大色域+微场景纸本拼贴** — 纸鸢/听琴/晒书/溪上清集四联——远看色块构图，近看微型故事。非遗/文化活动 KV 可填槽模板，附完整中文提示词。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2099804706801369428)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【主题 / 活动名称】
【主色域】
【微场景】
【文化元素】
【标题文字】
【辅助信息】
【画幅比例】

设计一张具有现代东方编辑美学的文化活动海报，核心视觉采用「大色域 + 微场景」的构成方式，并加入明显但克制的纸本拼贴与水彩材质语言。

画面以大面积低饱和色块作为第一视觉主体，使用【主色域】建立强烈、完整的大形关系。色块可以通过撕纸、叠层、遮挡、围合、穿插、悬挂、斜向延伸或留白负空间构成山势、水岸、庭院、工坊、纸鸢、染布等抽象空间，但不要直接画成普通写实场景。远看首先看到清晰的大色域构图，缩略图状态下仍具有明显识别度。

所有色块具有丰富真实的手工纸、水彩纸浆和矿物颜料质感，可见天然纸纤维、颜料沉积、轻微压痕、擦印、自然浓淡变化与不规则撕纸边缘。材质细腻丰富但保持干净完整，不做脏旧、黄斑、严重破损、强颗粒或廉价复古滤镜。整体呈现哑光、自然、有呼吸感的纸本触觉。

在大片色域之间加入一个尺度非常小但内容完整的【微场景】。人物与道具整体只占画面约 2%–5%，人物正在真实地做一件事情，而不是站立摆拍。通过动作、器物和空间关系讲清一个小故事，例如放飞、弹琴、饮茶、拓印、晒书、染布、制陶等。人物服装自然克制，与整体文化主题统一，不抢夺大色域的第一视觉。

微场景可以加入少量【文化元素】，但控制数量和信息密度。道具自然散落或参与人物动作，不做商品陈列，不堆满画面。可以设置一个面积很小的暖色节点、朱红印记、灯火、月亮或器物色彩作为点睛，通常控制在画面 1%–3%。

排版采用克制的东方编辑设计语言。主标题【标题文字】使用精致的中文宋体、明朝体或具有出版感的现代字体，字号不要过大，保持充足留白，让文字成为第二视觉层级，而不是用巨大 Typography 压住画面。辅助英文、日期、地点和活动信息采用更小字号，形成清楚的信息层级。所有文字必须有真实意义，不使用 RANDOM、DESIGN、ART、STUDIO 等无意义占位词。

构图避免机械居中和规则 PPT 网格，优先使用不对称布局、大面积留白、色块错位、前后遮挡和疏密反差。让画面形成“远看简洁、有大形；近看有材质、有场景、有故事”的阅读体验。

整体风格应呈现现代东方文化海报、纸本拼贴、水彩材质、编辑设计与微型叙事融合的视觉效果，高级、自然、克制、有文化气质，同时具备真实专业海报的完成度。

避免：书籍封面既视感、巨大标题、传统水墨画、普通国风插画、写实摄影背景、PPT式排版、商业广告感、元素堆砌、过度装饰、脏旧纸张、随机噪点、塑料感、3D CGI、玻璃材质、霓虹色、Logo、水印、编号、星芒装饰。
```

  </details>

- **写真→水彩纸面封面：禁对半拼贴改编** — 上传照片只抽轮廓与叙事，整幅变成手工水彩封面；修正常见「上下对半」翻车。封面/独立出版向完整英文 prompt。 [@impaulxyz](https://x.com/impaulxyz) · [原帖](https://x.com/impaulxyz/status/2099770443808821443)
  <details>
  <summary>查看 / 复制提示词</summary>

```
## DIRECTIVE
Generate a single watercolor paper-cover illustration. Use the attached reference image only as a source to extract subject, silhouette, pose, objects, colors, and canvas proportion. Do not place, collage, overlay, split, or attach the original photograph anywhere in the frame. The entire canvas is the illustration.

## FORMAT
Match the exact aspect ratio and orientation of the attached reference image.
If the reference is horizontal, the illustration is horizontal.
If the reference is vertical, the illustration is vertical.
If the reference is square, the illustration is square.
One full-bleed handmade paper illustration.
No top/bottom split.
No photographic insert.
No diptych.
No letterboxing or added bars.

## ASPECT RATIO ADAPTATION
The output canvas must inherit the size relationship of the reference image.
Recompose the extracted elements to occupy that same proportion with intention.
Do not stretch, squash, or pad the drawing to fake another format.
Do not keep the original photograph's empty margins as dead space.
Use the full reference proportion as an editorial page: subject, a few supporting shapes, and paper ground arranged for that specific width and height.

## SUBJECT EXTRACTION
Study the attached reference image.
Preserve only:
- the most recognizable subject
- essential silhouette and proportions
- key pose or gesture
- important objects
- the core narrative relationship between people and objects

Highly simplify.
Remove unnecessary details.
Retain only the visual information needed for immediate recognition.

Never copy photographic texture, pores, lens blur, or camera grain into the illustration.
Never redraw the photograph as a painted photo.
Never keep the original photo visible.

## MEDIUM
Minimalist hand-drawn watercolor on paper.

Use:
- delicate, slightly imperfect hand-drawn lines
- transparent watercolor washes
- a small number of bold, clearly defined flat color shapes
- rough paper texture
- visible handmade brush marks
- slightly irregular, organic edges
- subtle pooling, bloom, and pigment granulation
- slight imperfections that make it feel genuinely handmade

The main illustrated subject should be small and carefully composed, occupying approximately 20–35% of the canvas.
Leave a large amount of negative space around the illustration, distributed according to the reference proportion.

## PAPER GROUND
The background should primarily resemble:
- rough white paper
- warm off-white paper
- pale natural paper
- minimal editorial book-cover stock

Use only a few lines or small watercolor shapes to suggest the surrounding environment.
Do not fill the page with a full scene.
Do not paint a photographic background.

## COLOR PALETTE
Extract the dominant colors directly from the attached reference image.
Compress the palette into no more than 4 main colors.
Keep the colors restrained, sophisticated, and harmonious.
Use bold but controlled flat watercolor blocks.
Avoid excessive color variation.
Preserve subtle paper grain and handmade brush texture.
The illustration should feel like a simplified watercolor interpretation of the reference, not a copy of it.

## TYPOGRAPHY
A small amount of simple typography may be included when it naturally fits.
Possible elements: a short title, keyword, object name, location, year, number, or short phrase.
Text should be minimal, understated, and editorial.
Place type in the negative space created by the reference proportion.
Do not force text into the composition if it does not naturally fit the subject.
No logos. No watermarks. No captions describing the image.

## VISUAL LANGUAGE
Quiet. Poetic. Refined. Minimal. Innocent. Relaxed. Artistic. Thoughtful. High-recognition. Premium.
Art-book cover. Independent publishing. Contemporary editorial design. Thoughtful picture book.

## NEGATIVE PROMPT
No original photograph in the frame, no split layout, no top photo / bottom drawing, no collage, no photomontage, no attached reference image, no photorealism, no camera look, no lens blur, no cinematic portrait, no beauty retouch, no extra people, no identity-heavy realism, no crowded composition, no full-bleed painted scene, no forced 3:4, no forced square, no letterboxing, no black bars, no stretched or squashed drawing, no unused margins copied from the photograph, no excessive detail, no more than four main colors, no loud typography, no logos, no watermarks, no HUD.
```

  </details>

- **3D 纸雕地标：[STRUCTURE] 博物馆模型模板** — 地标切成分层纸雕雕塑，配城市/国家/卖点三行字。文旅系列 KV 换槽即出，纸艺边缘与阴影写死了。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2099741955458478351)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium 3D layered paper-cut artwork of [STRUCTURE NAME], transforming the famous architectural landmark into an intricate handcrafted paper sculpture.

Show the structure as the central focal point, built entirely from carefully cut and stacked paper layers, with realistic paper edges, subtle folds, depth, shadows, and raised details. Surround it with miniature architectural elements inspired by its location — tiny streets, arches, trees, steps, rooftops, clouds, or landscape details — all integrated into the same paper-cut world.

Use a sophisticated palette of warm ivory, cream, muted sage, dusty blue, terracotta, soft beige, and charcoal, with gentle natural shadows between every layer.

Place the structure on a slightly elevated museum-style paper base, giving the artwork a collectible architectural-model appearance.

Add minimal elegant typography:
[STRUCTURE NAME]
[CITY, COUNTRY]
Famous for: [KEY FEATURE]

Clean editorial composition, refined handcrafted details, soft studio lighting, premium paper texture, architectural design magazine aesthetic, subtle depth, highly detailed cut edges, elegant and artistic, no people, no photorealistic background, no clutter, no watermark.

Aspect ratio: 4:5 vertical.
```

  </details>

- **当代新中式文化海报：宣纸网格+印章几何** — 竖版 3:4，「读懂中国文化」主标题压画面六成；墨黑/朱砂/玉青，折扇窗棂印章入现代网格。国风知识海报 / 公众号封面直接抄。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2099677911477551536)
  <details>
  <summary>查看 / 复制提示词</summary>

```
设计一张竖版 3:4 中国文化知识海报，采用“当代新中式”风格。暖米色宣纸背景，墨黑、朱砂红与玉石青配色，现代网格结合印章、折扇和窗棂几何元素。画面上方放置主标题“读懂中国文化”，中部副标题“藏在日常里的东方智慧”，底部小字“礼 · 乐 · 诗 · 书 · 茶”。标题占画面约60%，字体清晰有力量，留白克制。只呈现指定中文，不添加其他文字、拼音、Logo、水印或乱码。
```

  </details>

- **短 prompt 文字设计：横长 5:2 信息图** — 附参考图 + 换主题即可；侧脸头像溢出 3D 零件，橙珊瑚点缀。图解 / 品牌首屏别堆长文——短约束反而稳。 [@MatoToushi](https://x.com/MatoToushi) · [原帖](https://x.com/MatoToushi/status/2099661962414284975)
  <details>
  <summary>查看 / 复制提示词</summary>

```
"一生モノの" AI×デザイン思考を手に入れる　をテーマにしたおしゃれな図解を作成します。添付した画像の女性の横顔、頭から、AIとデザイン関する3Dパーツがあふれでるイラスト。オレンジとコーラルピンクを差し色に使用する。アスペクト比　5:2 n=2
```

  </details>

- **芒果漩涡雪糕海报：双食材表面物理写死** — 芒果金霜褶 vs 莓紫果浆黏度分区控漩涡，再套奢品海报信息架构。食品广告别只写「好吃」——用表面行为控材质。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2099500153598341578)

- **城市=悬浮微缩雕塑海报（可换 [CITY]）** — [CITY]/[COUNTRY]/地标槽位齐备，切开看地铁层的博物馆模型美学。城市/品牌系列图批量出图模板。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2099465141641470114)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium 4:5 vertical architectural art poster featuring [CITY], [COUNTRY], designed as a miniature floating city sculpture.

The entire city appears as a beautifully crafted three-dimensional architectural model suspended in the air, with streets, rivers, bridges, parks, neighborhoods, and iconic buildings layered at different heights. The city is not shown as a flat map.

Place the most recognizable landmark dramatically at the center, rising above the miniature city like a sculptural centerpiece. Add tiny realistic cars, trees, boats, people, streetlights, and architectural details to create a sense of scale.

Behind the floating city, use a soft warm ivory background with subtle architectural blueprint lines, elevation drawings, coordinates, and delicate technical annotations.

At the top:

[CITY NAME]
[COUNTRY] • [REGION]

Below it, a small elegant line:

FAMOUS FOR • [LANDMARK / CULTURAL FEATURE]

Use museum-model aesthetics, precision architectural model-making, sophisticated neutral colors, realistic miniature textures, soft studio lighting, subtle shadows, clean negative space, luxury architecture magazine aesthetic, highly detailed, photorealistic 3D render.

No flat map, no ordinary travel collage, no excessive text, no busy background, no watermark.

Make the city look like a giant architectural “cutaway” — as if the top layer of the city has been lifted away, revealing subways, underground stations, foundations, tunnels, rivers and buildings beneath it.
```

  </details>

- **圆形构图时尚海报四联：穿进/踏出/戴环/靠弧** — PLEATED ORBIT / SCARLET EXIT / HALO FORM / ECLIPSE LOUNGE——圆不是背景，是造型与姿态的一部分。时尚广告、杂志封面、美妆 editorial 直接套。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2099463499588018438)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 9:16 high-fashion editorial poster series built around elegant circular framing and direct interaction between the model and the circular form.

The overall style should feel like international fashion magazine covers, couture campaigns, and luxury editorial photography: refined studio lighting, realistic skin and fabric, clean backgrounds, sophisticated serif typography, controlled negative space, and strong visual hierarchy.

The circle should never feel like a simple background graphic. It must become part of the styling, pose, garment, or physical set, with the model actively sitting in it, stepping through it, wearing it, or opening it.

Keep all typography in English, with large fashion-editorial headlines and a small amount of meaningful secondary copy. Avoid logos, watermarks, numbered labels, fake magazine branding, and meaningless filler text.

For this third set, create four independent poster variations under the same visual system:

1. “PLEATED ORBIT” — a woman in a deep burgundy dress stepping through a huge blush-pink circular structure made from radial couture pleats, gently pulling one fold aside as fabric layers pass in front of and behind her body, soft and elegant but visually striking.

2. “SCARLET EXIT” — a woman in a structured black fashion look stepping out through a monumental thick scarlet-red ring, one leg still inside and the other already outside, with direct eye contact, strong movement, clean ivory background, and bold magazine-cover energy.

3. “HALO FORM” — a close-up beauty editorial of a short-haired woman in a minimal black dress wearing an oversized burnished-copper circular couture collar around her shoulders, with part of the circle open so one shoulder and hand break through the structure.

4. “ECLIPSE LOUNGE” — a young man in warm ivory and tobacco tailoring seated naturally on the inner curve of a monumental burnt-amber crescent sculpture, relaxed posture, soft cream background, warm luxury lighting, and a refined menswear editorial mood.

All four images should feel like one fashion story while using completely different relationships between the body and the circle. Keep the visuals polished, elegant, modern, and strong enough to work as magazine covers or campaign posters.
```

  </details>

- **Fashion 海报 Flare：姿势驱动大字排版系列** — 9:16 时装海报，字号跟着姿势走、衣服与主标题互相遮挡。Flare 系列可换配色/动作批产，附完整 editorial 配方。 [@em_wagdy](https://x.com/em_wagdy) · [原帖](https://x.com/em_wagdy/status/2099400757560648122)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 9:16 editorial fashion poster. Model: an Arab Middle Eastern woman, unveiled, early twenties, expressive Gen Z energy, realistic photographic style, ultra-high resolution.
Build the entire poster around the natural shape and direction of the model's pose and the garment's movement. Use highly realistic fashion photography: visible fabric weave, seams, stitching, folds, fabric in motion, natural skin texture, real shadows.
Avoid CGI, plastic skin, generic e-commerce catalog look. Use oversized editorial typography as an active part of the composition: the main word very large, cropped by the canvas, partially hidden behind the model, split, rotated or curved according to the pose direction.
Model and typography must overlap and interact. Clear hierarchy: oversized display type, hero fashion photography, headline, supporting product details, small tags. Restrained color system: one background, realistic garment colors, 1–2 accents. A few graphic elements only (thin lines, dots, open frames, sticker-like labels).
Energetic, asymmetric, carefully art-directed, enough negative space. No brand names, no logos.
INPUTS: Create a 9:16 editorial fashion poster, pop art style. Model: Arab Middle Eastern woman, unveiled, early twenties, playful expression, realistic photography, ultra-high resolution.
Outfit: oversized sweatshirt in bright cherry red printed with large black-and-white halftone dots fading across the chest, matching wide-leg sweatpants in the same red with a bold black side stripe, white chunky sneakers, small gold hoops, hair in a high ponytail.
Background: flat sunshine yellow. Accents: black, white. Typography word: POP. Composition: diagonal — model mid-jump from bottom-left to top-right, POP in thick black comic display type along the same diagonal, her sleeve covers the O, halftone dots spill from the sweatshirt into the background.
Headline: "Dressed in dots." Supporting text: cotton fleece · oversized · wide leg · everyday. Thick black outline around the model like a comic cutout. Bottom corner "Generated by: Eman Wagdy". No brand names, no logos.
```

  </details>

- **东方禅意天灯封面：分段中文极简海报** — 屋檐+橘子橙天灯+青黛暮空，9:16 大留白给标题。和银杏台阶那版是姊妹篇，封面党又多一套可返图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2099392886207045950)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题方向：东方禅意极简封面海报
风格分支：女性审美高传播型
主体内容：一位古风女子站在极简屋檐下，抬头看向空中的天灯
情绪母题：温暖、祝愿、轻梦感
场景与意象：浅色屋檐、橘子橙天灯、青黛蓝暮空、女子、留白天空
构图与空间：9:16 竖版构图，人物位于下方偏一侧，屋檐切入画面上缘，天空占据大面积主空间，方便排标题
色彩控制：暖白作为建筑和背景基底，青黛蓝用于天空，橘子橙只用于天灯与少量暖反光，人物服装建议珍珠白或浅桃白；避免全图变成橙蓝滤镜
光线与质感：柔亮傍晚光，清晰轮廓，现代东方海报感，轻微柔光即可
画幅比例：9:16
补充要求：天空必须干净通透，天灯要有记忆点，整体不能压暗成夜景
```

  </details>

- **十字绣城市地标：[CITY / STRUCTURE] 可换槽** — 复古十字绣绣在象牙亚麻上，可见针脚与手工瑕疵。文旅周边 / 小红书手工风封面一键换城。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2099378987713896800)

- **旅行海报 [LOCATION] 系列模板：构图锁死只换城** — 4:5 插画旅行海报，植被→步道→水面→地标→字体条全锁死，只换 [LOCATION]。目的地 KV 批产神器。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2099352799893172430)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium illustrated travel poster for [LOCATION] in an exact 4:5 vertical format. This is part of a cohesive global poster series, so keep the composition fixed across every destination; only adapt the landmarks, architecture, landscape, vegetation, and cultural details.

COMPOSITION

Illustration fills 82–85%; reserve the bottom for a warm cream typography panel.

Dense vegetation frames the left edge, with one tall natural anchor in the upper-left.

A curved promenade sweeps from the lower-left toward the center, with globe lamps, dark decorative railing, and a small strolling couple.

A broad water/open-space field occupies the lower-middle; use authentic boats when appropriate.

Place the single most iconic landmark of [LOCATION] as the central hero, with the clearest silhouette and strongest visual focus.

Add one major horizontal landmark behind/beside it for balance.

Build a simplified layered local skyline/landscape with 6–12 major forms.

Add one distinctive tall local landmark near the upper-center as a vertical counterweight.

Keep the upper sky open, bright, and uncluttered, with 2–4 soft clouds, a few birds, and a warm sun in the upper-right.

VISUAL FLOW

Vegetation → promenade/couple → water/open space → central landmark → horizontal landmark → sky/sun → typography.

Never let secondary elements compete with the hero.

STYLE

Sophisticated contemporary travel-poster illustration; clean vector shapes + subtle gouache/screen-print texture, crisp dark-navy outlines, softly shaded color blocks, slight organic imperfection, refined editorial aesthetic, premium collectible quality.

No photorealism, 3D, CGI, glossy rendering, or generic clip-art.

COLOR

Harmonious destination-specific palette using dark navy outlines, natural greens, cool environmental tones, warm architectural tones, and one restrained warm accent.

AUTHENTICITY

Use only genuinely recognizable features of [LOCATION]. Prioritize iconic silhouettes and authenticity over excessive detail. Do not invent landmarks.

TYPOGRAPHY

Bottom cream panel:
[LOCATION] — large elegant uppercase serif
Thin horizontal rule
[COUNTRY / REGION] — small widely spaced uppercase text.

COMPOSITION LOCK

4:5 • left vegetation • upper-left anchor • curved promenade • couple • globe lamps • railing • lower-middle water/open space • central hero • horizontal anchor • layered background • upper-center vertical counterweight • open sky • upper-right sun • bottom typography.

Keep this structure identical for every destination. Adapt the content, never the composition.
```

  </details>

- **最爱的 editorial 插画海报配方** — 每张上传照单独出一张高端 editorial 海报，禁拼贴；3:4 竖版。Firefly Boards + Image 2.5 最好用，附完整 prompt。 [@icreatelife](https://x.com/icreatelife) · [原帖](https://x.com/icreatelife/status/2099343607492702258)

- **照片→奢华旅行双页故事：锁脸拼贴模板** — 上传自拍锁身份，左右两页撕纸旅行 collage（美国/挪威槽位可换）。宽幅 X 友好构图，人像+目的地 KV 一锅出。 [@Alina_with_Ai](https://x.com/Alina_with_Ai) · [原帖](https://x.com/Alina_with_Ai/status/2099320489797947424)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use my uploaded photo as the SAME main female character throughout the entire image. Preserve her exact facial identity, facial features, skin tone, hairstyle, body proportions and natural appearance.

Create a premium vintage travel editorial poster in a WIDE LANDSCAPE FORMAT, specifically optimized for X/Twitter so the complete image is visible without important areas being cropped.

Divide the canvas into TWO equal vertical framed panels placed side by side.

LEFT PANEL — UNITED STATES:
Create a sophisticated 3×3 torn-paper travel collage featuring the same woman visiting iconic American destinations:
Washington D.C. with the U.S. Capitol and Washington Monument, New York City with the Flatiron Building, San Francisco with the Golden Gate Bridge, New York cathedral architecture, Los Angeles with palm trees and skyline, and dramatic American mountain landscapes.

In the CENTER of the left panel, place an elegant cream paper card with:
"UNITED STATES"
"DIVERSE LANDS"
"TIMELESS BEAUTY"
and a subtle vintage map of the United States.

RIGHT PANEL — NORWAY:
Create a matching 3×3 torn-paper travel collage featuring the same woman exploring Norway:
Norwegian fjords, Bergen colorful waterfront, Oslo modern architecture, dramatic mountain villages, historic Scandinavian architecture, coastal viewpoints, Norwegian streets with a tram, and peaceful alpine landscapes.

In the CENTER of the right panel, place an elegant cream paper card with:
"NORWAY"
"Wild beauty,"
"a deeper kind of luxury"
and a subtle watercolor map of Norway.

IMPORTANT:
Keep both complete panels fully visible inside the outer frame.
Use generous margins around the entire composition.
Do NOT make the image tall or portrait-oriented.
Do NOT crop either panel.
Both USA and Norway must be equally prominent and clearly visible at first glance.

Style: luxury travel magazine, vintage editorial photography, refined cream paper texture, subtle torn edges, cinematic natural lighting, realistic photography, elegant serif typography, premium composition, sophisticated color grading, clean negative space, highly detailed, photorealistic.

Aspect ratio: approximately 16:9 landscape.
```

  </details>

- **Sunburst 半调旅行拼贴：上半真照下半印刷崩解** — 一图两世界：上半锁原片身份，下半撕纸+ASCII+复印网点。旅行 editorial / 档案感海报直接抄，附完整防翻车约束。 [@ShamiWeb3](https://x.com/ShamiWeb3) · [原帖](https://x.com/ShamiWeb3/status/2099316312426381491)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Turn this portrait photo into a single high-end halftone travel-collage poster. Output one poster per uploaded photo — never merge multiple photos into one frame.
FORMAT

3:4 vertical canvas. Split into two roughly equal zones — real photo on top, printed collage below — divided by one clean, sharp horizontal line. Do not stretch, warp, or reposition the figure to force the proportions.
TOP HALF — THE REAL SHOT

Preserve the original photo faithfully: same identity, face, expression, pose, hands, clothing, personal items, background structure, natural light and shadow, original color mood. Add only a light high-end color grade and the faintest film grain. Do not redraw or reinterpret the person.
BOTTOM HALF — THE PRINTED RECONSTRUCTION

Same warm gray old-paper background. Rebuild the same figure as a printed collage: torn photographic slices + fixed-width ASCII character fields + photocopy halftone dots.

Keep face, hands, hairstyle, clothing, and one signature item recognizable — identity must survive the breakdown.
Torn-edge photo fragments carry the face and key structural lines; fabric, shadow, and background dissolve outward into ASCII characters, black halftone dots, and fractured print grain.
Texture: rough white paper-fiber edges, slight print misregistration, old paper stains, a couple of crop marks, one restrained red calibration bar.
Color: warm gray paper + black ink + the photo’s own muted original colors + the single red accent. Never fully desaturate.
Figure fills roughly 60–88% of the frame width — always leave 22–38% of the paper untouched and empty, so it reads as archival print, not a packed terminal screen.
Add one readable fixed-width title pulled from the photo’s theme, plus the line "REC. STUDY 01" and one short observational caption. A few loose ASCII glyphs can trace the figure’s edge as texture only — never used to fake body detail or invent specs.

MOOD

Early digital systems meets analog photocopy meets underground zine meets modern travel editorial. The figure should feel like it’s surfacing — half photograph, half character, half print — restrained, archival, a little experimental.
AVOID

Solid black terminal backgrounds, walls of dense code, cyberpunk neon, fully hidden faces, random symbols with no meaning, invented technical readouts, garbled fake text, author credits, brand logos, QR codes, watermarks.
```

  </details>

- **自定义大字背景：TEXT HERE 一键换 editorial 海报** — 参考图锁构图排版，自拍锁脸，TEXT HERE 控巨型衬字。小红书 / 人设海报模板，改三个字就能量产。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2099302118104444953)
  <details>
  <summary>查看 / 复制提示词</summary>

```
MASTER PROMPT — REFERENCE-BASED EDITORIAL PORTRAIT

REFERENCE IMAGE IS MANDATORY.

Use the uploaded reference image as the PRIMARY VISUAL REFERENCE for the entire composition, layout, typography treatment, background, lighting, proportions, depth, and overall premium editorial poster aesthetic.

Use the user's uploaded personal image as the PRIMARY IDENTITY REFERENCE for the subject.

The uploaded subject can be ANY PERSON, male or female. Preserve the exact identity of the person from the uploaded image, including facial structure, facial features, skin tone, hairstyle, hair texture, age, and natural appearance. Do not replace or redesign the person's face.

==================================================
CUSTOM TEXT CONTROL
==================================================

TEXT HERE: [TYPE ANY WORD OR SHORT TEXT HERE]

IMPORTANT:
Whatever text the user writes after "TEXT HERE:" must become the MAIN LARGE BACKGROUND TYPOGRAPHY.

The user can write ANY word, name, phrase, or short custom text they want.

Examples:
TEXT HERE: LOVE
TEXT HERE: DREAM
TEXT HERE: MAGIC
TEXT HERE: FOREVER
TEXT HERE: LIFE
TEXT HERE: WILD
TEXT HERE: HOPE
TEXT HERE: ZARNAB
TEXT HERE: MY STORY
TEXT HERE: CREATE
TEXT HERE: FREEDOM

Never automatically use "LOVE" unless the user specifically writes LOVE.

Use the user's exact custom text. Do not invent, replace, misspell, remove, or add words.

==================================================
SUBJECT & IDENTITY
==================================================

Place the person naturally in the center of the composition, matching the approximate position, scale, and framing of the reference image.

Preserve the person's exact identity from the uploaded image.

The subject should have a relaxed, natural, candid editorial pose.

The person is holding a small bouquet of fresh yellow wildflowers naturally in both hands, similar to the reference.

Maintain realistic anatomy, natural body proportions, realistic hands and fingers, authentic facial expression, realistic skin texture, and natural hair.

The final image must look like a professionally photographed version of the person, not an AI-generated replacement person.

==================================================
OUTFIT
==================================================

Create a clean, casual, elegant outfit inspired by the reference image while keeping it natural for the person's gender, appearance, and identity.

Use realistic fabric texture, natural folds, stitching, shadows, and physically accurate clothing.

Include subtle backpack straps similar to the reference when visually appropriate.

Do not make the outfit overly dramatic or fantasy-like.

==================================================
BACKGROUND
==================================================

Recreate the same overall outdoor environment as the reference:

A beautiful dreamy yellow wildflower meadow with soft green foliage and trees in the background, abundant yellow flowers throughout the foreground and midground, warm natural daylight, soft golden sunlight, subtle atmospheric haze, delicate floating light particles, cinematic depth, and a peaceful premium editorial atmosphere.

Keep the background visually very similar in mood, color balance, depth, and softness to the reference image.

Use realistic natural vegetation and physically accurate flowers.

==================================================
MAIN TYPOGRAPHY
==================================================

Place the CUSTOM TEXT behind the subject.

The text must be:

- Extremely large
- Bold
- Tall and condensed
- Uppercase
- Minimal
- Elegant
- Cream/off-white
- Highly readable
- Vertically dominant

The typography should occupy most of the background, similar to the reference composition.

The person's body must naturally overlap and partially cover the letters, creating a realistic foreground/background layering effect.

The text must remain BEHIND the person — never place the main typography over the person's face or body as a foreground graphic.

Match the reference's typography scale, spacing, positioning, and visual hierarchy as closely as possible.

If the custom text contains multiple words, arrange them in a visually balanced way while keeping the same oversized editorial poster aesthetic.

==================================================
SMALL TOP TEXT
==================================================

Add a small minimalist uppercase text above the main typography.

SMALL TEXT HERE: [TYPE SHORT TEXT HERE]

Keep this text subtle, centered, thin/minimal, with generous letter spacing.

If the user does not provide small text, use a simple minimal decorative uppercase word that complements the main custom text without distracting from it.

==================================================
COMPOSITION
==================================================

Match the reference image's composition as closely as possible.

Portrait 4:5 aspect ratio.

Keep the subject centered.

Use the oversized custom typography behind the subject.

Maintain the same approximate proportions between:

subject,
background typography,
flower field,
foreground,
negative space,
and upper text.

Create strong natural foreground, midground, and background depth.

The final result should feel like a premium fashion/editorial social-media poster.

==================================================
LIGHTING & CAMERA
==================================================

Natural soft golden daylight.

Warm cinematic exposure.

Soft realistic shadows.

Gentle highlights.

Natural skin illumination.

Shallow depth of field.

Realistic optical bokeh.

50mm professional portrait photography look.

Subtle cinematic filmic softness.

High dynamic range.

Natural premium color grading.

Avoid excessive HDR, artificial glow, plastic skin, or oversaturated colors.

==================================================
PHOTOREALISM
==================================================

Make the final image highly photorealistic.

Preserve:

- Realistic skin pores and texture
- Individual hair strands
- Natural facial details
- Realistic eyes
- Realistic hands and fingers
- Physically accurate flowers
- Natural fabric texture
- Correct shadows
- Realistic depth of field
- Natural perspective
- Authentic photographic imperfections

The final image should look like a real professional photograph captured with a high-end camera.

==================================================
STRICT REFERENCE RULES
==================================================

Use the reference image ONLY for:

- Composition
- Layout
- Typography style
- Typography placement
- Background environment
- Lighting
- Color mood
- Subject positioning
- Depth
- Overall visual aesthetic

Do NOT copy the identity, face, or personal appearance of the person in the reference image.

The user's uploaded image is the ONLY identity reference for the subject.

Do not change the person's identity.

Do not create an unrelated face.

Do not distort the face, hands, fingers, body, flowers, backpack, or clothing.

Do not put the large custom text in front of the person.

Do not use random words.

Do not automatically use "LOVE".

Use EXACTLY the text provided after:

TEXT HERE:

Keep all typography clean, correctly spelled, readable, and professionally integrated into the photograph.

FINAL GOAL:
Create a highly realistic premium editorial portrait that feels like the SAME visual concept, composition, typography treatment, background, lighting, and aesthetic as the reference image, while using the user's uploaded person as the subject and allowing the user to freely control the large background text through "TEXT HERE:".
```

  </details>

- **圆形时尚海报四构图：FULL TURN / WATERLINE / INWARD / ORBIT VEIL** — Images 2.5 把圆框玩活的四套路。editorial / campaign / 杂志封面直接偷构图。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2099220110355697893)

- **鱼眼 editorial：15mm 草皮配方 + 开源提示词库** — 超广角 15mm 草皮 editorial 可抄；并指向 awesome-gpt-image-2-5-prompts（社区原句+出处）。模板要存 prompt 别只存图。 [@Milliekio](https://x.com/Milliekio) · [原帖](https://x.com/Milliekio/status/2098428660944695644)

- **Zara / H&M / Mango / Tommy 四套时尚 campaign 系统** — 同一 Images 2.5 底座，四品牌各一套视觉系统（色板、字体、构图语言分开）。SMM 海报工厂模板；评论区有完整 H&M「NEW UNIFORM」长 prompt。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2098411659002012050)
  <details>
  <summary>查看 / 复制提示词</summary>

```
PROMPT — H&M "NEW UNIFORM"
FORMAT Ultra-Premium H&M Fashion SMM Promotional Poster Vertical 4:5 Instagram Hero Creative Global Fashion Retail Campaign Contemporary Fashion Advertising Commercial Fashion Graphic Design Agency-Level Art Direction Behance Front Page Quality 8K UHD Hyper-Realistic Fashion × Graphic Design × Street Culture Fusion High-Impact Visual Communication Zero AI Soft Zero Generic Fast-Fashion Advertising Zero Catalogue Aesthetic Zero Luxury-Copycat Aesthetic

CORE STRATEGY This is not simply a clothing advertisement. This is H&M turned into a visual statement. The campaign should communicate: fashion moves fast. culture moves faster. H&M should feel: accessible + expressive + contemporary + youthful + global + confident. The visual language should combine: H&M fashion campaign × editorial magazine × street-culture poster × high-fashion graphic design × digital-first social advertising The result should feel unmistakably H&M, not Zara, Mango, COS or a generic luxury fashion brand.

CAMPAIGN IDEA "NEW UNIFORM" Forget traditional uniforms. This is: THE UNIFORM OF NOW. THE UNIFORM CHANGES. YOU DON'T HAVE TO.

MASTER VISUAL Create an enormous typographic structure reading: H&M occupying ~60–70% of the composition — bold compressed graphic energetic slightly disruptive; partially cropped, stacked, layered, intersecting red graphic blocks.

HERO SUBJECT Young female fashion model. Natural skin. Confident. Mid-stride. Oversized black leather-effect bomber, white fitted tank, relaxed wide-leg grey trousers, chunky black footwear, small silver jewelry, structured mini shoulder bag, subtle red accessory.

H&M COLOR SYSTEM PRIMARY H&M RED ~#E50010; BLACK #000000; WHITE #FFFFFF. Ratio ~60% white/light / 20% black / 15% red / 5% photo tones.

Composition hierarchy: H&M → NEW UNIFORM → MODEL → COLLECTION INFO → CTA. Vertical 4:5, 8K UHD, dramatic in-the-moment fashion photography, agency-level art direction. Full brand system prompts for Zara / Mango / Tommy are in the original thread comments.
```

  </details>

- **剪纸海报四联：一层剪开一个小世界** — CUT TO MOVE / BELOW THE SURFACE / AFTERLIGHT / SPACES BETWEEN——大剪影里叠 6–9 层纸，深处藏叙事。展览/文化海报配方可换槽。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2098408977008676918)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Theme: {fashion / ocean / memory / architecture / other}
Title: {main title}
Main silhouette: {dress / whale / planet / arch / other bold shape}
Inner world: {runway / deep ocean / memory space / courtyard / other scene}
Color palette: {3–5 restrained colors}
Editorial tone: {fashion / cultural / artistic / architectural}
Aspect ratio: 9:16

Create a refined layered paper-cut editorial poster built around one bold, instantly recognizable silhouette.

Let the main silhouette occupy around 60–70% of the composition. Inside it, create 6–9 layers of cut paper that gradually open into a deeper space. Each layer should follow the overall shape while changing naturally in scale, direction, and contour. Avoid perfectly even or mechanical concentric layers.

At the deepest point, reveal a small narrative scene related to the theme, such as a runway, underwater world, observation platform, courtyard, or another meaningful environment. Add one very small human figure when appropriate to create scale and a sense of discovery.

Use matte art-paper textures, clean cut edges, subtle natural paper fibers, and soft shallow shadows between layers. Keep the result visually flat and editorial rather than heavy 3D, foam-board, plastic, or CGI.

Use a restrained palette of 3–5 colors, moving from lighter outer layers to deeper, darker inner layers. Keep colors clean, solid, and consistent rather than using digital gradients or distressed textures.

Leave generous negative space for typography. Use a clear editorial hierarchy with one strong title, a small project or issue name, and only a few supporting details. The typography should feel like an art magazine, exhibition poster, fashion editorial, or cultural publication.

The visual rhythm should be: bold silhouette first, layered depth second, hidden inner world third.

From a distance, the poster should read as one strong shape. Up close, the viewer should discover the layered paper structure and the small world hidden inside.
```

  </details>

- **日系馆藏风海报：大字+材质+档案一起构图** — 百鬼夜行 / 潮汐之书 / 金继器物 / 花鸟余白——古画海浪器物花鸟进同一视觉系统。系列 KV / 文博宣传可复用题材骨架。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2098403133806293161)

- **功能极简帝国壁纸：换文明名批量出系列** — 孔雀王朝 / 笈多 / 朱罗 / 马拉塔同骨架：`Functional Minimalism style wallpaper of the [EMPIRE]…`。历史题材壁纸/屏保工厂直接套。 [@shushant_l](https://x.com/shushant_l) · [原帖](https://x.com/shushant_l/status/2098397177437659591)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Functional Minimalism style wallpaper of the [EMPIRE/KINGDOM/CIVILIZATION], featuring [ICONIC ARCHITECTURE/LANDMARK], [CULTURAL OR RELIGIOUS SYMBOL], [MILITARY OR HISTORICAL ELEMENT], and [REGION-SPECIFIC LANDSCAPE], with subtle silhouettes of [PEOPLE/ARMY/SHIPS/ANIMALS], using clean geometric forms, restrained historically accurate details, [PRIMARY COLOR] and [ACCENT COLOR] tones, generous negative space, soft [LIGHTING TYPE] atmospheric lighting, strong visual hierarchy, balanced composition, historically inspired cinematic aesthetic, no modern elements, no text, premium ultra-clean wallpaper, [ASPECT RATIO] aspect ratio
```

  </details>

- **杂志封面局部编辑：Images 2.5 精度实测** — 封面 / 杂志风图上抠局部改，精度肉眼可见。电商精修与排版迭代，先看它敢不敢动不该动的地方。 [@AIPixLab](https://x.com/AIPixLab) · [原帖](https://x.com/AIPixLab/status/2098379263020077366)

- **液态狮子海报：先锁眉骨口鼻，再放鬃毛飞溅** — 别先看到飞溅再猜动物——用连续咖啡奶油面塑出吼脸，再非对称甩鬃。产品液态/质感广告的可控写法，长 prompt 齐活。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2098344166489293224)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a Cannes-level ultra-premium commercial coffee poster for the fictional brand FEROX ROAST, merging Transit material precision with Orbit mythic atmosphere while rigorously preserving the exact visual type of the reference: a near-black studio void, one dark cup cropped low in the frame, and a violent sculptural eruption of coffee and milk from the cup that forms the head and upper mane of a roaring lion. Keep the overall image text-free, with no headline, no promotional copy, and no extra graphic clutter. The cup and the liquid lion must remain the full commercial story.

Core composition: use a vertical poster with one dark ceramic cup positioned low and centrally, partially cropped by the bottom edge to feel close and monumental. From the cup surface, coffee and cream explode upward in a single continuous fluid transformation, forming a roaring lion in three-quarter profile. The lion head must dominate the upper-middle frame, clearly readable through the liquid structure, with the mane flaring backward and outward in asymmetrical splash streams. The splash should feel powerful but controlled, with the main lion silhouette always stronger than the peripheral droplets. Preserve a clean black background so the erupting form holds maximum contrast and hero dominance.

Transit material precision: render the liquid sculpture with world-class detail. The dark coffee must feel dense, hot, roasted, and syrupy, with translucent brown edges, glossy thicker cores, and realistic fluid tension. The milk and foam components must feel silky, creamy, and slightly aerated, defining the lion’s facial planes, cheek, jawline, muzzle, and mane highlights. The cup rim must show wet residue, foam disturbance, subtle splash traces, and accurate ceramic gloss. The coffee surface inside the cup must feel physically active, as if the lion is tearing itself out of a freshly agitated crema field. Every droplet, sheet, ribbon, and foam pocket must obey believable high-speed splash physics.

Orbit atmosphere: deepen the emotional tone into a nocturnal myth of strength awakened by coffee. The lion must not feel like an animal pasted from another source, but like roast energy itself becoming a beast in the dark. Let the mane feel like hot power and vaporized force, as if the roar is born from aroma, heat, and impact. The black field should remain velvety and empty, making the explosion feel ceremonial, primal, and iconic, like a sacred emblem of power emerging in darkness.

Lion-form logic: the face must remain fierce and readable, with a fluidly sculpted brow, open mouth, roaring expression, and mane direction driven by splash momentum. The teeth and mouth interior should be suggested by liquid form and tonal carving rather than literal pasted anatomy. The lion should read instantly, but still feel fully made of coffee and milk. Emphasize the tension where the face transitions into wild mane splashes, so the image feels both animal and fluid at once.

Lighting: use dramatic studio lighting with a warm directional key from upper front-left and controlled rim separation along splash edges and droplet fields. Let highlights travel across the coffee membranes, cream folds, and foam edges, giving the liquid lion museum-grade sculptural definition. Keep the cup readable but secondary to the lion head. The background must stay dark and clean, without environmental contamination.

Color direction: build the image around 60% dark espresso brown, black coffee depth, and roasted mocha, 30% cream-white, latte beige, and cappuccino foam light, and 10% amber-gold highlights and ceramic reflections. The overall palette should feel noble, hot, luxurious, and intense.

Design intent: the final poster must feel like a mythic coffee emblem expressed through high-speed liquid sculpture. It should preserve the reference’s exact same-category shock image while elevating both the tactile realism and the emotional power. The viewer should read strength, roast intensity, and premium coffee energy immediately from the cup and the lion-form eruption alone.

Rendering style: ultra-photoreal luxury coffee advertising, text-free dark studio poster, roaring lion sculpted from coffee and milk, Transit-grade splash realism, Orbit-grade nocturnal beast atmosphere, cinematic chiaroscuro, world-class beverage art direction, 8k detail.

Negative prompt: visible headline, logo, packaging text, extra layout elements, cartoon lion, pasted animal face, weak cup hierarchy, muddy liquid, plastic cream, chaotic splash, low-detail droplets, broken lion anatomy, flat lighting, messy background, cheap energy-drink aesthetic, low-end fantasy rendering, noisy composition
```

  </details>

- **雨后三帖：水滴 / 城市 / 湿花极简海报** — 一滴水、雨后城、湿润花——三组诗意极简海报，中文提示词向高级感封面。适合品牌氛围图连发。 [@Caika_app](https://x.com/Caika_app) · [原帖](https://x.com/Caika_app/status/2098321572360822907)

- **拼图城市旅行微缩：填槽模板一键换城** — [CITY] / [LANDMARK] / [FAMOUS FOR] 三槽位，3D 拼图积木风旅行场景。做系列城市海报或周边图，比单张风景图更能量产。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2098301205365850272)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a charming 3D puzzle-piece travel scene of [CITY, COUNTRY], designed as a single cohesive miniature world. Build the city from beautifully interlocking puzzle pieces, with [ICONIC LANDMARK] as the central focal point. Surround it with recognizable local architecture, streets, trees, transportation, landscape, and small cultural details. Make the puzzle pieces slightly raised with visible seams, rounded edges, layered depth, and soft realistic shadows. Use a sophisticated palette inspired by the city, subtle handcrafted textures, warm studio lighting, clean cream background, playful yet premium collectible-diorama aesthetic. Add elegant 3D lettering: “[CITY]” and underneath “[COUNTRY] • [FAMOUS FOR]”. Highly polished, cute, artistic, detailed, and instantly recognizable.
```

  </details>

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

- **旅行手账 [LOCATION]：黏土微缩 + 折纸旅人** — 螺旋本俯拍 + 手作黏土微缩世界，换地名就能量产 IG 竖图。内容营销可复用模板，附完整 prompt。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2098269046022238289)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium, Instagram-worthy handcrafted travel-journal scene representing [LOCATION].

Show an open cream-colored spiral notebook resting on a warm rustic wooden desk, photographed from a slightly elevated top-down angle in soft, cinematic golden-hour light.

Turn the destination into a charming mixed-media miniature world. Build the architecture, landscape, plants, water, and cultural details from realistic, tactile hand-sculpted clay, with subtle handmade imperfections and fine textures. Add a small origami traveler, unmistakably folded from textured paper with visible creases and elegant, simple shapes, naturally exploring the miniature environment.

Make one iconic landmark or visual symbol of [LOCATION] the clear hero, supported by a few authentic local elements such as architecture, terrain, vegetation, transportation, or cultural details. Avoid generic tourist objects. Dress the origami traveler in a tasteful outfit subtly inspired by the destination without relying on stereotypes.

Use a sophisticated color palette inspired by [LOCATION], with detailed clay textures, realistic paper folds, miniature craftsmanship, soft shadows, atmospheric depth, and warm cinematic illumination. Make the miniature world feel physically integrated into the notebook page—not like a pasted photograph.

Surround the artwork with subtle handwritten travel-journal notes, tiny doodles, arrows, stamps, and location-inspired sketches, keeping them secondary to the main scene.

Composition: strong focal point, clear visual hierarchy, generous negative space, immersive depth, premium editorial photography, highly detailed handcrafted textures, whimsical yet sophisticated, emotionally evocative, visually distinctive, and highly shareable.

Avoid: photorealistic people, clutter, excessive text, generic landmarks, flat digital illustration, plastic-looking materials, oversaturated colors, distorted architecture, and unnecessary decorations.

Overall feel: a beautifully crafted tiny world inside a traveler's notebook—artistic, tactile, authentic, sophisticated, and unmistakably connected to [LOCATION], rather than a conventional travel photograph.
STRICT FORMAT: Vertical 4:5 aspect ratio only - do not generate square, landscape, or any other aspect ratio.
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

- **古风贵女「石榴花影」：结构化美妆人像提示词** — 主题风格/身份气质/妆感/五官/发饰/服装/场景/镜头/画幅写死——石榴珍珠水光妆 × 石榴红云肩 × 珍珠白交领。古风种草竖版别只会堆「仙气」，先把槽位填满再返图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2103158696826331632)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题风格： 古风贵女高饱和美妆封面
身份气质： 高门小姐，鲜艳、华贵、端庄、娇艳
妆感目标： 石榴珍珠水光妆
五官方向： 珠圆玉润贵女脸，面部轮廓柔美，眼睛清亮有神，面中丰满，鼻唇端正精致
发型与发饰方向： 乌发圆润高髻，石榴红珠簪、层叠珍珠发链、浅金叶片小冠
服装方向： 石榴红云肩搭配珍珠白交领长裙，腰间加入墨青色织锦宽腰封
场景方向： 白玉栏杆 / 绿植庭院 / 石榴花枝 / 明亮日光
镜头方向： 大半身近景，人物微微侧身，手中持白玉团扇
画幅比例： 9:16
创意自由度： 标准
补充要求： 使用石榴红、玫瑰粉和珍珠白高光完成妆面，腮红鲜活但边缘柔和，唇妆呈透明石榴果汁感；人物要华贵漂亮但不过分成熟。红、白、墨青形成鲜明层次，不允许背景继续大量使用红色。
```

  </details>

- **真人照→精细油画：锁身份完整提示词** — 上传真人照一键变当代油画/水粉，脸/发型/姿势/衣服/背景全锁死——不是另起炉灶的「AI 重绘」。写真转艺术封面别只会加滤镜，先把身份约束写进 prompt。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2103015777360392379)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded real photograph as the absolute source image. Transform the entire photograph into a sophisticated, highly detailed full fine-art painting while preserving the exact identity and visual structure of the original image.

The result must clearly remain the same person, same face, same facial features, same facial proportions, same hairstyle, same pose, same body proportions, same clothing, same hand position, same expression, same camera angle, same framing, same background composition, and same overall scene. Do not redesign or reinterpret the subject's identity, anatomy, pose, or composition.

IMPORTANT: This is a transformation of the uploaded real photograph into a painting, NOT a new image generation. Every visible element from the original photograph should be retained and converted into painted form.

Transform the entire image into a bold contemporary expressive oil-and-gouache fine-art painting with an authentic handcrafted appearance. Replace the photographic surface completely with rich physical paint. Use thick visible brushstrokes, expressive impasto, palette-knife marks, layered pigments, dry-brush textures, painterly edges, subtle paint buildup, and visible canvas texture.

Preserve the person's face with high accuracy. Facial identity must remain recognizable and consistent with the source photograph. Carefully retain the exact eyes, eye spacing, eyebrows, nose shape, lips, jawline, cheek structure, skin tone, facial proportions, hairstyle and expression. Render the face with refined painterly detail while allowing visible brushwork and natural paint texture.

Transform the hair completely into expressive painted strokes while maintaining the original hairstyle, volume, direction, length, and shape. Use a mixture of fine individual brush marks and larger energetic strokes to create realistic yet artistic hair texture.

Transform the clothing completely into painted fabric while preserving its exact design, colors, folds, seams, logos or symbols, proportions, and position from the original photograph. Use thick layered paint and expressive strokes to describe the fabric and folds without changing the clothing itself.

Transform the hands and fingers into anatomically accurate painted forms while preserving their exact position, gesture, proportions, skin tone, and relationship to the face.

Transform the entire background into the same scene rendered as physical artwork. Preserve the original objects, colors, shapes, perspective, lighting direction, and composition, but reinterpret their surfaces through expressive paint. Do not replace the background with a different environment.

Use a rich contemporary palette with deep cobalt blue, vivid golden yellow, warm orange, red, turquoise, cream, earthy brown, and natural skin tones, matching the colors already present in the source image. Allow colors to overlap naturally through visible brushwork.

The painting should feel like a hand-painted gallery artwork created with oil paint, gouache, and palette knives on textured canvas, combining realistic figurative painting with energetic modern expressionism.

Surface and brushwork: thick impasto, tactile paint, visible bristle marks, palette-knife strokes, dry-brush details, layered translucent washes, broken color, rough painted edges, natural pigment variation, canvas grain, subtle imperfections, handcrafted physical artwork.

Lighting: preserve the original photograph's lighting and shadows, translating them into painted highlights, midtones, and shadows rather than changing the lighting setup.

Composition: preserve the exact original composition, framing, camera perspective, subject placement, proportions, and aspect ratio. Do not crop, zoom, rotate, extend, or rearrange the image.
```

  </details>

- **日间高光CCD生活照：都市咖啡区完整提示词** — 清亮高光CCD风，露天咖啡烘焙区+蓝莓紫短上衣/奶白短裤。都市周末生活写真别只会开美颜——先锁摄影风格和场景道具再谈人。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2102997708965634220)
  <details>
  <summary>查看 / 复制提示词</summary>

```
摄影风格：日间清亮高光CCD生活照风
写真方向：都市周末生活写真
场景方向：现代露天咖啡烘焙区 / 白色遮阳棚 / 不锈钢咖啡设备 / 浅木吧台 / 城市街景
服装方向：蓝莓紫色修身U领短袖短上衣 + 奶白色低腰修身超短裤
```

  </details>

- **Flare角色表多角度→Higgsfield/Astra MV流水线** — Jake Paul 团队同款思路：Flare 先出正侧背多角度角色表（别只丢一张烂光参考），再进 Genjutsu 贴片换人；先 480p 试采样再冲 1080p。角色一致性别指望单帧玄学。 [@mikelauofficial](https://x.com/mikelauofficial) · [原帖](https://x.com/mikelauofficial/status/2102867687332630998)

- **9:16 列车窗边电影感：COMPOSITION 分层配方** — 过道斜拍+前景座椅虚化+窗玻璃倒影，COMPOSITION/SUBJECT/LIGHTING 分栏写死。竖屏种草肖像——先锁构图深度，再谈「氛围感」。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2102635863893307394)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a photorealistic cinematic portrait photograph of a young adult woman sitting alone by the window of a modern intercity train.

COMPOSITION:
Vertical 9:16 portrait frame. Camera positioned from the aisle, slightly behind the seat in front of her, looking diagonally toward the window seat. A large blurred train seat dominates the lower-left foreground, creating strong depth and framing the subject. The woman is positioned in the center-right of the frame, partially hidden behind the foreground seat. Her reflection is clearly visible in the train window on the right.

SUBJECT:
Young adult woman with fair skin, natural freckles, soft facial features, medium-length copper-red hair with messy natural bangs falling across her forehead. Her hair is slightly tousled and imperfect, with individual strands visible. She has light blue-gray eyes, natural eyebrows, subtle eyelashes, soft pink natural lips and a completely natural face with no heavy makeup.

She is wearing a loose beige/taupe hoodie with the hood resting around the back of her head and shoulders. The hoodie has realistic soft fabric texture and natural folds.

POSE AND EXPRESSION:
She is sitting beside the window, leaning slightly toward the aisle and looking directly toward the camera with a quiet, tired, introspective expression. Her head is tilted slightly downward and toward the foreground seat. Relaxed posture, lips gently closed, subtle melancholy mood. Natural candid moment, not posing for the camera.

TRAIN INTERIOR:
Realistic modern European-style train interior. Dark charcoal-gray fabric seats with small scattered red geometric patterns. Multiple rows of seats extend into the background. The foreground seat is very close to the camera and heavily out of focus. Another passenger is barely visible far in the background, also heavily blurred.

WINDOW:
Large train window immediately beside the woman. The glass has subtle reflections and slight smudges. Her face and upper body appear as a soft but recognizable reflection in the window. Outside the window is an indistinct muted urban/rural landscape, completely blurred because of the moving train.

LIGHTING:
Soft natural daylight entering through the train window from the right side. Warm, slightly golden daylight illuminates her face and copper hair while the train interior remains darker and subdued. Gentle cinematic contrast, soft shadows, realistic skin highlights, subtle reflected light from the window.

CAMERA:
Professional cinematic photography, 50mm lens, approximately f/1.8, shallow depth of field. Focus precisely on the woman's eyes and face. Foreground seat and background passenger strongly blurred. Natural perspective, realistic optical depth, subtle lens compression.

COLOR AND MOOD:
Muted cinematic color grading with warm copper/orange tones in the hair and beige hoodie contrasted against cool dark blue-gray train seats and window tones. Soft filmic contrast, slightly desaturated colors, natural skin tones, subtle grain, atmospheric and intimate feeling.

REALISM:
Ultra-photorealistic, authentic candid photography, realistic skin pores and freckles, individual hair strands, realistic fabric texture, physically accurate reflections in glass, natural imperfections, realistic train materials, true photographic depth of field, no artificial beauty retouching.

NEGATIVE PROMPT:
cartoon, anime, illustration, CGI, 3D render, plastic skin, excessive makeup, perfect skin, beauty filter, oversharpening, unrealistic eyes, distorted face, extra fingers, deformed hands, duplicate person, duplicated reflection, incorrect reflection, artificial hair, glossy skin, studio lighting, fantasy train, text, watermark, logo, low resolution, excessive HDR, oversaturated colors
```

  </details>

- **眼鏡っ子第二弾：可换装衣装模块+PROTECTED WARDROBE RULE** — 帽/上衣/裙/腿套/鞋/眼镜拆成不可变成品身份，FINAL WORN STATE 只改穿法不改形。虚拟 IP 换装别靠「差不多就行」——先把每件衣服锁死再谈姿势。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2102630253135118590)
  <details>
  <summary>查看 / 复制提示词</summary>

```
PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. If source prose omits or misclassifies a component required by an explicit selection, that selection corrects only that component. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Wardrobe:

Headwear: A lightweight slouch beanie in softly marled light greige fine-gauge knit. The smooth, unturned opening follows the forehead and slopes low over the sides, while the generous enclosed crown relaxes toward the back in soft diagonal folds. A discreet rear shaping seam completes the brimless form, with no cuff, pompom or applied decoration.

Top: A fitted heather-gray long-sleeved top in smooth fine stretch knit, with subtle vertical contour seams shaping the torso and a straight hip-length hem. Slim sleeves extend to the wrists with narrow plain hems. The neckline opens into a deep, narrow, round-bottomed front slit edged in matching gray binding. A slender gray cord crosses through paired small eyelets along both sides, tying into a soft bow at the upper chest with long loose ends. An off-white modesty backing sits behind the lower laced opening, and the back continues in plain matching knit.

Bottom: A voluminous tan plaid tiered mini skirt with a softly gathered elastic waistband and three overlapping, increasingly full ruffled flounces. The lightweight woven fabric carries a medium-large check of broad beige fields, grouped narrow black stripes separated by ivory lanes in both directions, and fine muted-red overcheck lines crossing the tan spaces. The same plaid scale continues across all tiers, breaking naturally at the gathered joins. A gathered sheer black organza ruffle is interleaved between the middle and lower plaid tiers, partly covered by the wavy middle flounce and visible above the plaid lower hem. An opaque tan underskirt supports the short, rounded silhouette.

Legwear: A pair of mocha woven cargo leg covers extending from just below the knees to the ankles, with roomy tubular bodies, softly bagged volume and lightly gathered open lower hems. Slightly frayed upper rims rise above adjustable straps fitted with silver-tone rectangular buckles and round metal eyelets. A second strap encircles each upper calf, and long loose strap ends descend along the outer sides. Each front-outer shin carries a large gusseted rectangular cargo pocket with a broad shaped snap flap, two vertically aligned metal eyelets on its lower face and a silver-tone D-ring suspended beneath on a short fabric tab. Plain matching backs and concealed inner-side openings complete the separate covers.

Footwear: Chocolate-brown padded high-top sneakers with softly lustrous satin-finish textile uppers, rounded stitched toe caps and tonal paneled sides. Oversized cushioned tongues rise above wide lace-up fronts, surrounded by thick padded ankle collars. Broad brown woven laces cross through tonal round eyelets and finish with small metal tips. Thick, flat brown rubber soles wrap upward around the toes, with layered horizontal foxing ridges and a finely textured front bumper; matching padded heel counters and textile linings complete the pair.

Eyewear:

A pair of delicate silver-tone eyeglasses with clear rounded-oval lenses, very fine full rims, a narrow arched bridge and transparent adjustable nose pads. Slim metal temples carry a short line of closely set clear faceted stones at each outer hinge, with a slightly larger rounded flower-like cluster interrupting the smaller stones. The temples taper into discreet curved clear tips.

Final worn state:
- Eyewear placement: Center the registered eyewear bridge on the nose, align the two lenses at equal height directly in front of the corresponding eyes, and place each temple over its corresponding ear. Do not move the eyewear to the top of the head, forehead, nose tip, or neckline, and do not disengage only one temple.

Necklace: A delicate silver-tone butterfly tassel necklace on a fine chain attached to the outer upper wings. The butterfly has two broad, pointed openwork upper wings with sparkling clear-crystal borders, smaller tapered lower wings and a slender central body. Two closely spaced fine chains descend freely beneath the butterfly to slightly different lengths, each ending in a slim polished metal tip. A small lobster clasp closes the necklace at the back.
```

  </details>

- **脸锁时尚 lookbook：金光亚麻墙边全身** — 严格保脸，巧克力亚麻衬衫+褶裤墨镜靠墙，金色小时光束切开背景。穿搭种草一句话：身份锁死，布料纹理自己说话。 [@weiinberg](https://x.com/weiinberg) · [原帖](https://x.com/weiinberg/status/2102623939323400467)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Maintain the exact facial features and identity of the person in the uploaded reference photo. A three-quarter fashion lookbook portrait of the subject leaning casually against a light beige stucco wall. Styled in an buttoned rich chocolate brown linen shirt, pleated beige linen trousers, small gold hoop earrings, a thin gold necklace, and retro tortoise-shell sunglasses. Messy textured hair blowing gently. High-contrast golden-hour sunbeams cutting across the background, crisp details, natural linen fabric weave, 85mm f/1.8
```

  </details>

- **Sunburst 脸锁皮衣特写：叶影窗光 editorial** — 上传脸参 + 黑皮衣高领，窗光叶影扫过面部。男装情绪片别只会棚拍——低 key 窗影比滤镜更像杂志。 [@iamsofiaijaz](https://x.com/iamsofiaijaz) · [原帖](https://x.com/iamsofiaijaz/status/2102590414570348924)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Ultra-realistic cinematic close-up portrait of a young man use image for face reference . He is wearing a dark black leather jacket with a high collar. His face is resting naturally against his folded arms, creating an intimate, relaxed pose. Moody dark environment, dramatic soft window light casting irregular leaf-like shadows across his face and jacket, deep blue-black background, natural skin pores and fine facial hair, realistic eyes, detailed leather texture, subtle imperfections, shallow depth of field, strong cinematic contrast, muted cool tones, photorealistic editorial photography, 85mm lens, f/1.8, soft bokeh, low-key lighting, extremely detailed, 8K, realistic color grading, vertical portrait composition, no text, no watermark.
```

  </details>

- **参考图→服装装备清单 sheet（可复制）** — 上传角色图，一句日文 prompt 直接出竖版 4:5 服装/装备拆解表。做角色资产库别手抄——先让 2.5 把衣柜摊平。 [@kabumira862571](https://x.com/kabumira862571) · [原帖](https://x.com/kabumira862571/status/2102576374473220577)
  <details>
  <summary>查看 / 复制提示词</summary>

```
服装・装備品シートを作成して。
アスペクト比は縦長（4:5）で描画
```

  </details>

- **人物×衣装×发型三表换装：参考 sheet 流水线** — 先各自出人物/衣装/发型 reference sheet，再三图合参换装——2.5 部分固定一次用满。系列角色别靠嘴写「马尾」，先把表摊平再改。附可抄步骤与防政策撞车写法。 [@1banana2546](https://x.com/1banana2546) · [原帖](https://x.com/1banana2546/status/2102560525087568283)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【人物リファレンスシート】
画像1の人物のリファレンスシートを画像2を参考に作って

【三表合参・换装】
画像1の成人女性を使って画像2を参考に衣装を変更。画像3を参考に髪型を変更。髪型を姫カットの衣装はチャイナドレスで、自撮り風スナップ写真にして

（政策撞车时加：性的な表現は避けて／露出を抑えて；コスプレ・成人女性を明示）
```

  </details>

- **Sunburst 加州街潮广告：棕榈人行道全身片** — Sunburst 街拍广告配方：南洛杉矶棕榈+壁画+滑板背景，法兰绒宽腿靴全套写死。品牌种草别只会海滩——街巷质感更敢卖。 [@PrometheanAIX](https://x.com/PrometheanAIX) · [原帖](https://x.com/PrometheanAIX/status/2102550317405536266)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Photography / Cinematography
Hyper-realistic full-body streetwear fashion portrait of a ruggedly handsome Latino male in his late 20s, with a lean athletic build, closely buzzed dark hair, defined jawline, warm olive skin, and striking model-like facial features. He stands in a relaxed three-quarter pose, weight shifted onto one leg, one hand casually tucked into his pants pocket, and the other hanging naturally at his side. He looks toward the camera with a calm, confident expression. Natural winter afternoon sunlight, realistic skin texture, authentic fabric details, and subtle background depth of field. Vertical 2:3 composition, photographed at eye level with his entire body visible from head to toe.

Environment
A lively urban neighborhood in South Los Angeles on a sunny, cool winter afternoon. A spacious concrete sidewalk and small skate plaza are surrounded by low-rise buildings, palm trees, streetlights, and a few leafless seasonal trees. A large, professionally painted street-art mural featuring a woman's portrait and expressive graphic elements covers a wall in the background. Modest artistic graffiti accents the surrounding concrete surfaces without making the area look messy. Pedestrians walk along the sidewalk, chatting and going about their day. Farther in the background, exactly three skateboarders perform tricks over a metal railing and concrete obstacles. Authentic Southern California street culture, natural pedestrian activity, and believable urban atmosphere.

Pose
The man stands confidently in the foreground, slightly angled toward the camera, with his shoulders relaxed, one hand in his front pants pocket, and the other resting naturally beside his thigh. His feet are positioned apart, with one leg slightly forward. Natural posture, believable anatomy, and an effortless street-fashion editorial presence.

Outfit
Oversized blue, navy, and warm beige plaid flannel overshirt, worn open over a muted slate-blue crewneck T-shirt. Loose-fitting, wide-leg washed charcoal-black jeans with natural fading and a relaxed drape. Classic black leather Dr. Martens lace-up boots with yellow welt stitching. A subtle silver chain necklace and silver ring complete the look. Realistic fabric textures, natural folds, and authentic streetwear styling.
```

  </details>

- **竖屏自拍角色 JSON：锁脸可复用 UGC 双** — 9:16 手机自拍 JSON：脸比例/雀斑/发色优先级写死，高领全覆盖，厨房暖光。AI 双胞胎种草素材——先焊身份再换场景。 [@demonugc](https://x.com/demonugc) · [原帖](https://x.com/demonugc/status/2102527540879376433)
  <details>
  <summary>查看 / 复制提示词</summary>

```
{
  "prompt_type": "photorealistic_character_generation",
  "objective": "Generate a clean vertical smartphone selfie of an original, fully invented character. Fully covered casual outfit, high neckline, long sleeves. Cozy kitchen background, warm indoor light, relaxed natural expression. Remove all text, UI, logos, watermarks.",
  "character_consistency": {
    "target": "usable as a repeatable AI twin across future generations",
    "priority_order": [
      "facial proportions and warm hazel eyes",
      "light freckling across nose bridge",
      "wavy auburn hair, loose low ponytail",
      "oversized cream turtleneck sweater, full coverage",
      "warm golden indoor light from camera-right",
      "cozy kitchen background",
      "raw phone selfie texture"
    ]
  },
  "canvas": {
    "orientation": "portrait",
    "aspect_ratio": "9:16",
    "framing": "close head-and-shoulders smartphone selfie",
    "crop": "top of hair to mid chest",
    "subject_alignment": "centered, slight forward lean",
    "perspective": "arm-length front camera, mild wide"
  },
  "scene": {
    "location": "small apartment kitchen",
    "time_of_day": "late afternoon",
    "mood": "relaxed, candid, unposed",
    "environment": {
      "left": "open shelf with a few mugs and a plant",
      "behind": "kitchen counter, soft blur",
      "walls": "warm off-white"
    }
  },
  "subject": {
    "description": "invented young adult woman, mid 20s, original character not based on any real person",
    "expression": "soft, relaxed half-smile",
    "gaze": "directly into camera",
    "skin": {
      "tone": "light olive",
      "detail": "light freckling across nose and upper cheeks",
      "finish": "matte-natural, visible pores, no beauty filter"
    },
    "eyes": {"color": "hazel", "look": "warm, relaxed"},
    "hair": {
      "color": "auburn",
      "style": "loose wavy low ponytail",
      "detail": "a few soft flyaways framing the face"
    },
    "clothing": {
      "top": "oversized cream turtleneck sweater, fully covers neckline, shoulders, and chest",
      "coverage": "full coverage, no visible skin below the jaw except hands",
      "extra": "sleeves extended toward camera, fabric bunched at wrist"
    },
    "pose": {
      "arm": "right arm extended toward camera (selfie)",
      "shoulder": "casual, relaxed"
    }
  },
  "lighting": {
    "type": "soft warm indoor light",
    "direction": "from camera-right",
    "face": "gentle highlight right, soft shadow left",
    "quality": "warm, low contrast, golden hour indoors"
  },
  "camera": {
    "device": "modern smartphone front camera",
    "look": "raw UGC: mild noise, slight compression, shallow background blur",
    "focus": "sharp on face and hair strands"
  },
  "negative_prompt": [
    "low neckline", "cleavage", "exposed shoulders", "exposed skin below collarbone",
    "beauty filter glaze", "plastic skin", "studio lighting", "text", "UI", "logos",
    "watermarks", "extra people", "anime", "CGI", "based on a real identifiable person"
  ],
  "final_generation_instruction": "One highly photorealistic vertical phone selfie of a fully original character, not based on any real person. Auburn wavy ponytail, light freckles, oversized cream turtleneck with full coverage, cozy kitchen, warm right-side light, relaxed half-smile. Authentic phone-selfie texture. No text or interface."
}
```

  </details>

- **古风月照群青：美妆特写结构化提示词** — 主题/妆感/五官/发饰/服装/场景/镜头分栏写死，群青只当主色不染全脸。古风种草妆面——结构字段比「仙气」两个字管用。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2102413682563244332)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题风格： 古风清冷高级美妆特写
身份气质： 高门贵女，清冷、矜贵、安静、女主感
妆感目标： 群青映月清冷水光妆
五官方向： 清冷淡颜，东方电影脸，修长杏眼，面中自然饱满，鼻型秀气，唇形柔润克制
发型与发饰方向： 乌发低挽，群青琉璃发钗、银白细链、白玉耳饰
服装方向： 群青色交领长衫，搭配月白内衫与浅银灰披帛
场景方向： 月窗闺阁 / 深木屏风 / 一枝白梅 / 冷白柔光
镜头方向： 美妆特写，正面轻侧身
画幅比例： 9:16
创意自由度： 标准
补充要求： 群青只作为主视觉服装色与局部发饰色，妆容以冷粉、豆沙、银白高光为主，不做蓝色全脸妆，胸线明显；背景保持月白、木色、冷白层次，不要整张图偏蓝，人物脸部与妆容必须通透清晰，整体呈现清冷矜贵感。
```

  </details>

- **UGC 锁构图姿态衣装：身份微变 JSON** — 参考图死守构图/姿态/耳机/草坪，只微变五官身份——AI UGC 批量换人套装。JSON 写清 preserve vs modify，种草素材工厂直接抄。 [@noneugc](https://x.com/noneugc) · [原帖](https://x.com/noneugc/status/2102372927123407043)
  <details>
  <summary>查看 / 复制提示词</summary>

```
{
  "prompt_type": "photorealistic_reference_reconstruction_with_identity_variation",
  "objective": "Recreate the supplied image as closely as possible in composition, pose, outfit, lighting, headphones, artificial-grass background, workout mat, hairstyle, jewelry, and overall smartphone-selfie realism, but subtly change the woman's facial features so she appears to be a different fictional person rather than an exact facial duplicate. Keep the new face attractive, natural, realistic, and consistent with the same overall age range and aesthetic.",
  "reference_fidelity": {
    "target": "very high visual similarity for everything except facial identity",
    "preserve_exactly": [
      "camera angle",
      "reclined selfie pose",
      "pink long-sleeve crop top",
      "white inner halter layer",
      "lavender-purple over-ear headphones",
      "high ponytail",
      "gold hoop earrings",
      "gold necklace",
      "gray ribbed exercise mat",
      "green artificial turf",
      "bright natural sunlight",
      "portrait framing"
    ],
    "intentionally_modify": [
      "facial identity",
      "eye shape",
      "brow shape",
      "nose proportions",
      "lip shape",
      "jawline",
      "cheek structure"
    ]
  },
  "canvas": {
    "orientation": "portrait",
    "aspect_ratio": "approximately 9:16",
    "framing": "high-angle vertical smartphone selfie",
    "crop": "from ponytail and artificial grass at top to upper abdomen at bottom",
    "subject_position": "centered slightly left",
    "camera_distance": "arm's-length",
    "camera_angle": "steep overhead selfie angle looking down toward the reclining subject"
  },
  "scene": {
    "setting": "outdoor or semi-outdoor fitness area",
    "ground": {
      "type": "artificial grass",
      "color": "natural medium green",
      "texture": "dense short synthetic turf blades",
      "lighting": "bright direct daylight with soft shadow patches"
    },
    "exercise_surface": {
      "type": "gray ribbed padded workout bench or mat",
      "color": "charcoal gray",
      "texture": "horizontal ribbing",
      "details": "two round black anchor or hardware circles visible near either side of the head and upper torso"
    }
  },
  "subject": {
    "identity": "original fictional adult woman",
    "age_appearance": "early-to-mid 20s",
    "pose": {
      "body": "reclining flat or slightly angled on the mat",
      "head": "resting back while looking toward the phone",
      "arms": "both arms extended upward toward the camera",
      "expression": "subtle relaxed pout",
      "gaze": "directly toward the camera"
    },
    "skin": {
      "tone": "warm light-to-medium tan",
      "finish": "natural satin glow",
      "texture": "realistic pores and subtle freckles",
      "retouching": "minimal"
    },
    "face_change": {
      "instruction": "Keep the face broadly compatible with the same overall look, but alter the facial identity noticeably enough that it reads as a different fictional woman.",
      "changes": {
        "face_shape": "slightly narrower oval face with a softer tapered jaw",
        "forehead": "slightly shorter forehead",
        "eyes": {
          "shape": "slightly more elongated almond shape",
          "size": "a little smaller than the reference",
          "spacing": "very slightly wider-set",
          "color": "warm hazel-brown",
          "outer_corners": "subtly lifted"
        },
        "eyebrows": {
          "shape": "softer and slightly straighter",
          "arch": "less pronounced",
          "thickness": "medium"
        },
        "nose": {
          "bridge": "slightly narrower",
          "tip": "more delicate and softly upturned",
          "overall": "subtly smaller than the reference"
        },
        "cheeks": {
          "structure": "slightly higher cheekbones",
          "fullness": "a little softer through the mid-face"
        },
        "lips": {
          "shape": "slightly narrower upper lip and fuller lower lip",
          "cupid_bow": "more defined",
          "color": "soft nude-pink"
        },
        "chin": "slightly more pointed but still soft",
        "jawline": "gently tapered rather than broad"
      },
      "important": "Do not drastically transform the overall aesthetic; the change should be subtle but enough to create a distinct fictional identity."
    }
  },
  "hair": {
    "color": "light brown to dark blonde",
    "style": "sleek high ponytail",
    "root_style": "smoothly pulled back",
    "pony_length": "long",
    "placement": "extends diagonally toward the upper-left corner",
    "texture": "mostly straight with a few natural flyaways",
    "shine": "sunlit golden highlights"
  },
  "headphones": {
    "type": "large premium over-ear headphones",
    "color": "soft lavender-purple",
    "earcups": "smooth metallic lavender oval shells",
    "ear_cushions": "light lavender fabric",
    "headband": "matching pale lavender canopy-style band",
    "hardware": "small silver connectors",
    "position": "worn normally over both ears",
    "finish": "soft satin metallic"
  },
  "wardrobe": {
    "outer_top": {
      "type": "fitted long-sleeve cropped athletic top",
      "color": "soft bubblegum pink",
      "neckline": "wide scoop",
      "fit": "tight body-contouring stretch fit",
      "material": "smooth matte athletic fabric",
      "sleeves": "full length",
      "hem": "cropped below the bust"
    },
    "inner_layer": {
      "type": "white halter-style sports top",
      "visibility": "white straps and center neckline visible beneath the pink crop top"
    }
  },
  "jewelry": {
    "earrings": {
      "type": "large thin gold hoops",
      "finish": "polished gold"
    },
    "necklace": {
      "type": "short gold chain",
      "style": "slightly curved snake-chain or herringbone style",
      "placement": "resting close to the collarbone"
    }
  },
  "makeup": {
    "style": "minimal sporty soft glam",
    "eyes": "defined lashes and a very subtle eyeliner wing",
    "brows": "natural groomed brows",
    "skin": "fresh and luminous",
    "lips": "soft nude pink satin",
    "blush": "very subtle warm peach"
  },
  "lighting": {
    "type": "bright natural daylight",
    "direction": "from upper-right",
    "quality": "clear and slightly directional",
    "skin_highlights": "soft highlights on forehead, nose, cheeks, and collarbones",
    "grass_highlights": "sunlit blades with darker shadow zones",
    "contrast": "moderate"
  },
  "camera": {
    "device": "modern smartphone front-facing camera",
    "lens": "approximately 24-28mm equivalent",
    "orientation": "vertical",
    "perspective": "mild wide-angle selfie perspective",
    "focus": "sharpest on face and headphones",
    "depth_of_field": "moderately deep",
    "processing": "subtle HDR and realistic smartphone sharpening",
    "image_quality": "high resolution"
  },
  "composition_geometry": {
    "ponytail": "extends across upper-left quadrant",
    "face": "slightly left of center",
    "headphones": "symmetrically framing the head",
    "pink_sleeves": "form strong diagonal foreground shapes from bottom corners",
    "gray_mat": "runs beneath the head and torso",
    "artificial_grass": "fills the entire background outside the gray mat"
  },
  "photographic_style": {
    "genre": "fitness lifestyle selfie",
    "aesthetic": "clean feminine sporty social-media portrait",
    "realism": "extreme photorealism",
    "retouching": "light and believable",
    "desired_result": "looks like a genuine candid smartphone selfie taken outdoors after or during a workout"
  },
  "negative_prompt": [
    "exact duplicate of the reference face",
    "same facial identity",
    "text",
    "captions",
    "logos",
    "watermarks",
    "buttons",
    "UI overlays",
    "silver headphones",
    "blue top",
    "dark gym flooring",
    "natural lawn",
    "short hair",
    "loose hair",
    "curly hair",
    "missing ponytail",
    "missing hoop earrings",
    "missing necklace",
    "extra people",
    "extra arms",
    "extra fingers",
    "warped hands",
    "deformed headphones",
    "plastic skin",
    "heavy beauty filter",
    "CGI",
    "3D render",
    "illustration",
    "anime",
    "extreme fisheye",
    "dramatic studio lighting"
  ],
  "final_generation_instruction": "Generate one highly photorealistic vertical smartphone selfie matching the supplied reference's composition, reclined high-angle pose, artificial-grass setting, gray ribbed workout mat, soft pink long-sleeve crop top, visible white halter layer, lavender-purple over-ear headphones, high ponytail, gold hoop earrings, and gold necklace. Keep the same sporty feminine mood and natural sunlight. However, subtly redesign the woman's facial identity: give her a slightly narrower oval face, softer tapered jaw, slightly smaller and more elongated hazel-brown almond eyes, slightly straighter brows, a narrower nose with a delicate softly upturned tip, higher cheekbones, and a different lip shape with a more defined cupid's bow and fuller lower lip. The resulting woman should clearly be a different fictional person while still fitting naturally into the same photo. Remove all text, logos, watermarks, and interface elements."
}
```

  </details>

- **Sunburst 狗仔远距机位：码头香槟整活** — 先用 Sunburst 锁远距狗仔构图（人小、码头与水面多），再叠参考脸/Logo。成帧后可接视频，但本条可抄的是起帧 prompt。 [@techhalla](https://x.com/techhalla) · [原帖](https://x.com/techhalla/status/2102357636725321734)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Candid paparazzi phone photo from a FARTHER distance on a marina dock — wider framing, subjects smaller in frame, more dock boards and water visible. Mid quality — readable faces and logo, mild phone softness, ordinary daylight. Not magazine-clean, not muddy grain.

LEFT: a very tall man (~198 cm) matching exact face from [ref_pic] — bald under a black snapback, neat dense beard a bit long, olive skin. White crew-neck t-shirt, medium-loose blue jeans, classic red-black-white Air Jordan 1 High. He stands on the left, looking at the grandma on his right — not at the camera — handing her a champagne bottle mid-pass.

BESIDE HIM: elderly grandma, slightly overweight, floral bathrobe, fuzzy house slippers. She looks back at him during the bottle handoff.

RIGHT: luxury yacht moored TIGHT against the dock / pier — hull almost touching the quay, very little gap between boat and dock. Party people clearly visible on the deck with drinks. Exact Magnific logo from [ref_logo] large on the yacht hull side.

Composition left to right: man → grandma → yacht tight to the dock with clear party crowd. Camera far back. Photoreal paparazzi phone snap.
```

  </details>

- **UGC 脸锁健身房自拍：JSON 重构换装换耳机** — 参考图锁姿势/机位/环境，只换耳机商品色与运动装，脸轻微虚构化。种草 UGC + 商品植入一条 JSON 抄走就能改。 [@jasonugc](https://x.com/jasonugc) · [原帖](https://x.com/jasonugc/status/2102329429875724480)
  <details>
  <summary>查看 / 复制提示词</summary>

```
{
  "prompt_type": "photorealistic_reference_reconstruction_with_targeted_modifications",
  "objective": "Recreate the supplied gym selfie as closely as possible while preserving the same overall pose, camera angle, framing, hairstyle, jewelry, body positioning, gym environment, lighting, and candid smartphone aesthetic. Apply three deliberate changes: replace the dark over-ear headphones with the silver headphones from the attached product reference, change the gray athletic top to white, change the gray athletic bottoms to white, and subtly alter the woman's facial features so she appears to be a different fictional person rather than an exact facial duplicate. Ignore and remove all text, logos, buttons, watermarks, captions, UI graphics, and screen overlays.",
  "reference_fidelity": {
    "target": "very high similarity to the primary gym reference except for requested changes",
    "preserve": [
      "same vertical selfie framing",
      "same arm's-length smartphone perspective",
      "same torso angle",
      "same gym equipment placement",
      "same long low ponytail",
      "same face-framing strands",
      "same jewelry style",
      "same warm skin tone",
      "same dramatic freckles",
      "same natural gym lighting",
      "same overall sporty social-media aesthetic"
    ],
    "modify": [
      "black headphones to silver headphones",
      "gray sports top to white",
      "gray bottoms to white",
      "facial identity subtly changed"
    ]
  },
  "canvas": {
    "orientation": "portrait",
    "aspect_ratio": "approximately 9:16",
    "framing": "vertical smartphone selfie",
    "crop": "from just above the head to approximately upper hips",
    "subject_scale": "large, filling most of the frame",
    "camera_distance": "arm's-length",
    "camera_height": "roughly face level",
    "perspective": "natural wide-angle front-camera perspective"
  },
  "scene": {
    "location": "modern indoor gym",
    "mood": "confident, polished, sporty, casual",
    "background": {
      "ceiling": "dark industrial ceiling with exposed beams and ducts",
      "lighting": "long warm-white linear LED fixtures",
      "walls": "neutral dark gray and medium gray",
      "equipment": [
        "large cardio or strength machine on viewer-left",
        "exercise machines behind subject on viewer-right",
        "dark metal frames and matte black equipment"
      ],
      "floor": "warm brown wood or wood-look gym flooring",
      "depth": "background remains recognizable but slightly softer than the subject"
    }
  },
  "subject": {
    "identity": "original fictional adult woman",
    "age_appearance": "early-to-mid 20s",
    "physique": "slim, athletic, toned, natural proportions",
    "pose": {
      "torso": "slightly angled toward viewer-left",
      "head": "turned subtly toward viewer-right",
      "gaze": "looking directly into the phone camera",
      "right_arm": "extended outward holding the phone",
      "left_hand": "holding the end of the long ponytail near the lower-left foreground",
      "shoulders": "relaxed",
      "expression": "neutral with a slight pout"
    },
    "skin": {
      "tone": "warm medium tan",
      "undertone": "golden-neutral",
      "finish": "natural satin glow",
      "texture": "realistic pores and small imperfections",
      "freckles": "numerous visible freckles across nose, cheeks, forehead, shoulders, and upper chest",
      "retouching": "minimal"
    },
    "face_identity_change": {
      "instruction": "Alter the facial identity subtly while preserving the same overall beauty style and age range.",
      "face_shape": "slightly narrower oval face",
      "jawline": "more tapered and refined",
      "chin": "softly pointed",
      "eyes": {
        "shape": "slightly more elongated almond eyes",
        "size": "medium",
        "spacing": "slightly wider-set",
        "color": "warm dark brown",
        "outer_corners": "subtly lifted"
      },
      "eyebrows": {
        "shape": "full with a softer arch",
        "color": "dark brown",
        "density": "medium-full"
      },
      "nose": {
        "bridge": "narrow and straight",
        "tip": "softly refined",
        "overall": "slightly smaller than the original reference"
      },
      "cheeks": {
        "cheekbones": "slightly higher",
        "midface": "softly sculpted"
      },
      "lips": {
        "shape": "full with a pronounced cupid's bow",
        "upper_lip": "slightly narrower",
        "lower_lip": "slightly fuller",
        "color": "natural glossy nude-pink"
      },
      "piercing": {
        "type": "small silver lip piercing",
        "position": "lower lip area",
        "appearance": "subtle metallic bead"
      }
    }
  },
  "hair": {
    "color": "deep medium brown",
    "length": "very long",
    "style": "low ponytail",
    "part": "center part",
    "front_sections": "two long straight face-framing strands",
    "ponytail": "thick, straight, extending down the viewer-left side of the torso",
    "texture": "sleek and smooth",
    "shine": "natural glossy highlights",
    "hair_tie": "small dark elastic"
  },
  "headphones": {
    "change_instruction": "Replace the original dark headphones with the silver headphones shown in the attached product reference.",
    "type": "premium over-ear headphones",
    "earcups": "large smooth oval metallic silver shells",
    "cushions": "light gray or silver woven fabric",
    "headband": "white to pale silver dual-canopy style",
    "connectors": "small polished silver metal joints",
    "finish": "soft satin aluminum",
    "position": "worn naturally over both ears",
    "scale": "large enough to visually frame the face",
    "important": "match the attached silver headphone silhouette and material treatment"
  },
  "wardrobe": {
    "top": {
      "change_instruction": "Change the original gray athletic top to white while preserving the exact same silhouette.",
      "type": "fitted wrap-style halter sports bra",
      "color": "clean bright white",
      "neckline": "deep V neckline",
      "straps": "wide halter-style straps",
      "construction": "cross-over wrap front",
      "fit": "tight supportive athletic fit",
      "material": "ribbed or fine athletic jersey",
      "finish": "matte with slight stretch-fabric sheen"
    },
    "bottom": {
      "change_instruction": "Change the original gray bottoms to matching white.",
      "type": "high-waisted fitted workout leggings or shorts",
      "color": "clean bright white",
      "waist": "high rise",
      "fit": "body-contouring",
      "material": "matching athletic stretch knit",
      "visibility": "upper waistband and top portion visible near the bottom of the frame"
    }
  },
  "jewelry_and_accessories": {
    "necklace": {
      "type": "delicate short silver necklace",
      "style": "small sparkling links or tiny stones",
      "placement": "around the base of the neck"
    },
    "rings": {
      "quantity": "multiple",
      "material": "silver",
      "style": "small delicate fashion rings",
      "placement": "on fingers of the hand holding the ponytail"
    },
    "tattoo": {
      "type": "tiny outlined heart",
      "placement": "upper chest near viewer-left collarbone",
      "color": "dark brown-black",
      "style": "minimal linework"
    }
  },
  "hands": {
    "left_hand": {
      "pose": "lightly gripping ponytail",
      "fingers": "relaxed and anatomically correct",
      "nails": {
        "length": "medium-long",
        "shape": "almond",
        "color": "soft pale pink / nude",
        "finish": "glossy"
      }
    }
  },
  "lighting": {
    "type": "mixed gym ambient light and natural frontal fill",
    "direction": "front and slightly above",
    "quality": "soft, bright, realistic",
    "contrast": "moderate",
    "skin_effect": "warm glow with visible freckles",
    "hair_effect": "soft highlights along straight strands",
    "headphone_effect": "clean metallic silver reflections",
    "white_outfit_effect": "retain fabric detail without blowing out highlights"
  },
  "camera": {
    "device": "modern smartphone front-facing camera",
    "orientation": "vertical",
    "lens": "wide selfie lens",
    "focal_length_equivalent": "approximately 24-28mm",
    "distance": "arm's-length",
    "perspective": "slightly wide but natural",
    "focus": "sharpest on face and headphones",
    "depth_of_field": "moderately deep",
    "processing": "subtle HDR, natural phone sharpening, minimal beauty processing",
    "image_quality": "high-resolution"
  },
  "composition_geometry": {
    "face": "upper-center",
    "headphones": "frame both sides of the head",
    "ponytail": "runs vertically down viewer-left side",
    "raised_camera_arm": "extends toward viewer-right",
    "sports_top": "dominates center and lower-middle portion",
    "gym_machine": "large dark equipment structure on viewer-left",
    "background_equipment": "visible behind viewer-right shoulder",
    "ceiling_lights": "strong horizontal and diagonal lines across upper background"
  },
  "color_palette": {
    "dominant_colors": [
      "white",
      "silver",
      "warm tan",
      "dark brown",
      "charcoal",
      "black",
      "warm wood"
    ],
    "overall_mood": "clean, luxe, sporty, modern"
  },
  "photographic_style": {
    "genre": "fitness lifestyle selfie",
    "aesthetic": "premium social-media gym portrait",
    "realism": "extreme photorealism",
    "retouching": "minimal and believable",
    "desired_result": "looks like an authentic high-quality smartphone selfie taken casually at the gym"
  },
  "negative_prompt": [
    "black headphones",
    "gray headphones",
    "gray top",
    "gray bottoms",
    "colored workout clothing",
    "different hairstyle",
    "short hair",
    "curly hair",
    "blonde hair",
    "missing ponytail",
    "missing face-framing strands",
    "missing freckles",
    "heavy glam makeup",
    "studio lighting",
    "outdoor background",
    "bedroom",
    "bathroom",
    "extra people",
    "text",
    "logos",
    "watermarks",
    "buttons",
    "UI overlays",
    "screen graphics",
    "extra arms",
    "extra fingers",
    "warped hands",
    "deformed headphones",
    "plastic skin",
    "CGI",
    "3D render",
    "illustration",
    "anime",
    "fisheye distortion"
  ],
  "final_generation_instruction": "Generate one extremely photorealistic vertical smartphone gym selfie matching the supplied reference composition as closely as possible. Preserve the same long dark-brown low ponytail with two face-framing strands, same hand holding the ponytail, same gym environment, same high-angle/front-camera framing, same jewelry, visible freckles, subtle pout, and athletic silhouette. Replace the original dark headphones with the attached premium silver over-ear headphones featuring metallic oval earcups, pale woven cushions, and a white-silver canopy headband. Change the gray wrap-style sports bra to bright white and change the visible gray bottoms to matching white. Subtly redesign the facial identity so she appears to be a different fictional woman: slightly narrower oval face, tapered jaw, elongated dark-brown almond eyes, softer arched brows, a slimmer nose, higher cheekbones, fuller lower lip, and a small subtle silver lower-lip piercing. Use natural realistic skin texture, warm gym lighting, detailed white athletic fabric, metallic headphone reflections, and authentic smartphone HDR. Remove all text, logos, watermarks, buttons, and interface elements."
}
```

  </details>

- **Y2K 日杂时尚 9:16：完整美妆发型 prompt** — early-2000s 日杂 editorial + 双丸子头 + 玻璃唇——竖版种草封面直接套。美妆/穿搭博主别再堆「氛围感」三个字。 [@BubbleBrain](https://x.com/BubbleBrain) · [原帖](https://x.com/BubbleBrain/status/2102322774090133548)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 vertical, ultra-realistic fashion beauty portrait, early 2000s Japanese fashion magazine editorial, Y2K Asian beauty photobook aesthetic, clearly adult East Asian woman in her mid-20s, delicate small oval face, warm ivory skin, realistic pores and natural skin texture, dewy glossy skin with subtle wet highlights on the forehead, nose bridge, cheeks, shoulders and collarbones, slender cat-like eyes with soft gray-green contact lenses.

Makeup inspired by early-2000s Japanese beauty editorials: translucent luminous base, soft lavender and icy lilac shimmer eyeshadow, subtle pearlescent highlight at the inner corners of the eyes, elongated thin black winged eyeliner, softly defined lower lash line, delicate separated lashes, cool pink blush concentrated lightly across the upper cheeks, subtle highlight on the nose bridge and cheekbones, glossy translucent rose-pink lips with a glassy finish. Overall makeup feels fresh, cool-toned, slightly dreamy, and unmistakably Y2K without looking theatrical.

Glossy black hair styled into symmetrical loose double side buns / Y2K space buns with small outward pigtail ends, thick wispy blunt bangs, long thin face-framing strands resting naturally beside the cheeks. Add several tiny translucent lavender and pale blue hair clips, plus one silver hollow star-shaped metal hair clip. A few loose strands spread softly across the white surface beneath her head.

Wearing a fitted icy powder-blue off-shoulder top in soft stretch fabric, slightly cool-toned and subtly glossy, with straps resting naturally on the upper arms, exposing the shoulders and collarbones. Layered delicate silver necklaces with tiny crystal and translucent acrylic pendants, subtle Y2K jewelry styling, clean and feminine.

The woman is lying relaxed on a clean white studio floor or softly wrinkled white fabric, photographed from directly above. Her body is angled slightly diagonally across the frame, one arm bent loosely near the side of her head, the other resting naturally across her waist or beside her torso. Shoulders relaxed, head tilted only slightly, eyes looking directly up toward the camera. Her space buns and loose hair spread naturally around her head, creating a soft graphic silhouette.

Top-down overhead composition, chest-up to half-body framing, 50mm to 85mm portrait lens, clean editorial composition with generous negative space. Pure white seamless background, high-key studio lighting, large softbox from above and slightly to one side, soft reflector fill, extremely gentle shadows, subtle highlight bloom, bright airy exposure, slight early-2000s magazine softness while keeping the eyes sharply focused.

Realistic fabric folds, individual hair strands, glossy skin highlights, delicate pearlescent makeup reflections, soft nostalgic Y2K Japanese magazine mood, intimate but polished photobook aesthetic, icy blue and lavender color palette, realistic editorial photography, no text, no watermark.
```

  </details>

- **极简东方人物插画：纸伞清微结构化提示** — 主体/气质/主色/点缀/几何强度/9:16 全写死——清冷东方 KV 可复用骨架。别靠「仙气」两个字碰运气。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2102313613881159693)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主体内容：一位明确成年的东方女性单手持一把极简纸伞，身体轻微侧身站立，另一只手自然垂落在裙侧
主体气质：清冷、含蓄、东方、柔美
画面用途：极简人物插画
主色调：深紫罗兰、墨蓝紫、冷白
点缀色：电光紫
几何元素强度：弱
几何元素类型：伞面圆形构图 + 细线
画幅比例：9:16 
补充要求：服装为收腰长裙，重点突出伞下站姿带出的肩颈线、胸部轮廓、胸腰曲线、腰臀比例与腿部轮廓，纸伞简化为大圆形视觉元素，背景保持留白
```

  </details>

- **参考图脸锁：水下梦境写真可抄** — 锁脸五官不动，只换水下白纱+鱼群+丁达尔光柱。写真/旅拍广告换场景不换人，参考图 prompting 教科书。 [@Techbyhani](https://x.com/Techbyhani) · [原帖](https://x.com/Techbyhani/status/2102313364026454076)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a cinematic, ultra-realistic underwater dream portrait using the reference image. Preserve the woman’s facial identity, natural facial proportions, eyes, eyebrows, lips, and recognizable features.

She is floating gracefully underwater, looking softly toward the camera with a calm, dreamy expression. Her long dark-brown hair flows naturally through the water, with individual strands drifting around her face.

She wears an elegant ethereal white sheer gown decorated with delicate pearl-like details. The translucent fabric floats beautifully around her body, creating graceful flowing shapes. One arm extends gently toward the camera, creating depth and an immersive perspective.

Surround her with crystal-clear turquoise water, tiny bubbles, colorful tropical fish, soft coral, and ancient submerged stone columns/ruins in the background. Bright sunlight filters down from the water surface, creating beautiful volumetric light rays, shimmering caustic reflections, and soft golden highlights on her face and dress.

Style: photorealistic, cinematic fantasy, ethereal underwater photography, dreamy atmosphere, realistic skin texture, detailed wet hair, natural facial features, soft depth of field, volumetric lighting, floating particles, subtle glow, premium editorial photography, highly detailed, realistic water physics, 9:16 vertical composition, 8K quality.
```

  </details>

- **2×2 身份锁四宫格：同一人同一车只换姿势** — 写死同一张脸/发型/黑卫衣/墨镜/耳环/Mercedes 内饰/迪拜天际线，四格只换姿势（眨眼托腮/看镜头/自拍/望窗外）。身份一致性压测模板——UGC 生活方式拼贴直接套。 [@Shorelyn_](https://x.com/Shorelyn_) · [原帖](https://x.com/Shorelyn_/status/2102283043696165107)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 2x2 four-panel cinematic photo collage featuring the EXACT SAME Korean-looking young woman in all four panels. Strong identity consistency: same face, same hairstyle, same black oversized sweatshirt, same sunglasses, same earrings, same makeup, same Mercedes car, same beige leather interior, same lighting, same time of day, and the same Dubai skyline with the Burj Khalifa visible through the windows.

She is sitting comfortably inside the car taking stylish photos/selfies. Each panel must show a DIFFERENT natural pose while everything else remains identical.

Panel 1: She rests her cheek on her hand and gives a playful wink toward the camera.
Panel 2: She turns slightly toward the camera with a soft confident expression, one hand near the steering wheel.
Panel 3: She holds her smartphone in front of her face while taking a selfie.
Panel 4: She looks toward the window with her hand gently touching her cheek.

Photorealistic luxury lifestyle photography, elegant Korean fashion aesthetic, realistic skin texture, natural facial expressions, cinematic sunset lighting, Dubai city lights beginning to glow, Burj Khalifa clearly visible in the background, premium social-media aesthetic, highly detailed, realistic camera photography, seamless 2x2 collage, perfect visual consistency across all four panels, no face changes, no outfit changes, no car changes, no background changes.
```

  </details>

- **极端仰拍时尚 Hero：填 [subject] 轮播出片** — 地板机位仰拍 + 白棚 beauty-dish + Portra 颗粒——芭蕾/快递/糕点师/图书管理员换词即出。时装战役、角色海报统一视觉语言。 [@Alyssa4aicreate](https://x.com/Alyssa4aicreate) · [原帖](https://x.com/Alyssa4aicreate/status/2102231985301463502)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A [subject] photographed from an extreme low-angle ground-level view, camera positioned near the floor and tilted upward, standing alone in an off-white studio void, confident pose, dominant elongated silhouette, stylised proportions, sleek fashion styling, reflective textures, bold accessories, soft studio light, single beauty-dish flash casting crisp shadows, subtle Kodak Portra-inspired grain, candid editorial energy, minimalist composition, sharp detail, premium studio photography
```

  </details>

- **酒红单色穿搭：tone-on-tone 完整 prompt** — 皮衣+黑丝+长围巾+高跟靴，酒红门同色对撞；百合花束与小包点缀。秋冬单色种草竖版直接抄，附完整英文 prompt。 [@mehvishs25](https://x.com/mehvishs25) · [原帖](https://x.com/mehvishs25/status/2102226465475658179)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a woman in a monochromatic deep burgundy outfit, including a leather jacket, black tights, a long scarf, and high black boots. She is posing against a matching burgundy door.

She has long straight black hair with bangs, prominent eyebrows, brown eyes, and subtle makeup. She is standing and holding a bouquet of dark magenta lilies and a small glossy burgundy shoulder bag.

High-fashion editorial, full-body shot, dramatic shadow and light, tone-on-tone aesthetic, cinematic portrait. Close portrait. Keep the face same as reference
```

  </details>

- **探头头像 Flare：圆头海豹钉死构图比例** — Q 版探头头像写死：头顶只留 ~5% 黑边、下巴切出画框、歪头 8°、无嘴无睫毛。换角色改配饰就能批量出头像资产——回复含海豹完整中文 prompt。 [@achuanmemo](https://x.com/achuanmemo) · [原帖](https://x.com/achuanmemo/status/2102224315340968148)
  <details>
  <summary>查看 / 复制提示词</summary>

```
方形头像插画，Q 版极简小动物：一只圆滚滚的白色小海豹，不是写实风格。它从画面下边缘探出头来：头顶朝上，画框上沿到头顶最高处之间只留一条很窄的黑色背景，约占画面高度的 5%；头顶的浅蓝色小蝴蝶结完整露在画面里，不被画框切到。头要够大：头部放大到几乎撑满画框，左右两侧顶出画框边缘、被边缘切掉一部分。下巴从画面下边缘出去，画框底部不留黑边。

造型上是歪头：整颗头连同小蝴蝶结一起朝画面右侧倾斜大约 8 度。按画面来看：右眼比左眼低，头顶和蝴蝶结向右偏，像可爱地歪着头看镜头。

它是海豹：头是圆的、没有外耳，只在两侧各有一个很小的耳孔，口鼻部分短而圆。画面里只看得见头顶、眼睛和鼻子，不画嘴巴，不画睫毛，也不加白色高光；眼睛是干净的黑色纯色椭圆；鼻头是一个很小的深灰色圆鼻；眼睛下方是脸颊和粉色腮红，腮红贴着下边缘、只露一半，腮红是纯粉色块、不画斜线。整体为极简扁平色块，几乎没有渐变和阴影，粉彩配色，线条干净利落，矢量插画质感。背景纯黑。可爱、萌系、简洁。整张图就是这一张单幅方形头像，不要分格、不要拼贴、不要同一只海豹的多视角重复。画面里不要出现嘴巴、人的五官、身体、写实或 3D 质感、复杂背景、文字、logo、水印。
```

  </details>

- **古典美人 9:16：唐风 CG 半身特写可抄** — 冷白肌理 + 暖金主光/冷蓝辅光 + 鎏金凤冠珠帘——竖版国风人物 KV 直接套。写死 85mm / f1.4 / 胶片颗粒，别再靠「仙气」玄学。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2102221542465880158)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 竖版高完成度国风 CG 插画，唐代宫廷美学与电影人物特写。主体是一位明确成年的东亚古典美人，半身正面构图，冷白肌肤保留细腻纹理和自然微光；五官精致但不夸张，凤眼微微眯起，眼尾泛着淡红，目光越过镜头看向远处，胭脂唇微启，像刚从微醺情绪中恢复清醒。她身穿玫瑰粉织金唐风礼服，适度低领，领缘加入细密金线花纹，薄纱披帛从肩头斜向画面外延伸；头戴高耸但结构轻盈的鎏金凤冠，珍珠帘垂在脸侧。人物颈部延展，一只手抬至耳侧轻触摇晃的珠链，另一只手隐于披帛下方。背景虚化为唐宫朱门与冷青色远廊，暖金主光从左前方照亮脸颊，右侧冷蓝辅光塑造轮廓，逆光描绘凤冠和发丝。85mm portrait lens，f/1.4，浅景深，高光克制、暗部有细节，轻微胶片颗粒与柔润辉光，宏丽而不艳俗。
```

  </details>

- **自拍变约鲁巴高定：脸锁时装战役完整 prompt** — 一张自拍当面部身份锁，整段 agbada + fila + 串珠 + 手杖写死成高端时装工作室战役。右下角可换个人 crest——文化高定种草别再只写「传统服装好看」。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2102201212049203309)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded photo as the facial identity reference

Add a small premium gold crown-and-shield monogram emblem in the lower-right corner featuring elegant initials such as “ABS”, designed like a luxury personal-brand crest.

Create a premium full-body studio portrait of an elegant adult African man wearing luxurious traditional Yoruba-inspired attire, closely matching the reference image.

Dress him in a richly tailored agbada-style outfit made from vertically striped deep green, navy blue, and muted beige fabric. Add intricate cream-and-gold floral embroidery across the chest and lower front, with refined decorative stitching around the neckline. Underneath, include a matching traditional inner top.

Complete the look with a matching striped Yoruba fila cap, neatly structured and slightly folded to one side. Add layered black traditional bead necklaces, black beaded bracelets, a sophisticated silver wristwatch, and a subtle ring.

Pose him standing confidently and facing the camera with a composed, dignified expression. One hand should rest naturally around his midsection while the other holds a slim black traditional walking cane vertically beside him.

Style the lower outfit with tailored light-brown/tan trousers and polished black leather lace-up shoes.

Background & Environment
Create a sophisticated minimalist indoor studio with:
Warm beige/tan walls
A polished wooden floor
A large rectangular architectural wall feature behind him
Four evenly spaced vertical recessed niches
Soft golden lighting glowing from inside each niche
Clean, symmetrical composition
No distracting furniture or props

Lighting
Use warm luxury studio lighting with soft highlights on the face and clothing, realistic skin texture, subtle shadows beneath the agbada, and gentle separation from the background.

Photography Style
High-end African fashion editorial photography, ultra-realistic textile detail, natural skin tones, sharp facial features, accurate fabric folds, premium cultural portraiture, sophisticated color grading, shallow but controlled depth of field, 85mm portrait-lens aesthetic, crisp professional finish.

Composition: full-body portrait, centered subject, straight-on camera angle, symmetrical framing, vertical 3:4 aspect ratio, photorealistic, premium magazine-quality finish.
```

  </details>

- **参考图抽衣装：可换装模块 Wardrobe 母版** — 一张参考图 → 插件抽衣装提示词，按 Dress/袜裤/鞋/发饰/袖套分模块互换。PROTECTED WARDROBE RULE 锁死剪裁与纹样，只动你点名的那一件——狐巫女黑红金整套可当角色换装库母版。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2102186680728031515)
  <details>
  <summary>查看 / 复制提示词</summary>

```
PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. If source prose omits or misclassifies a component required by an explicit selection, that selection corrects only that component. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Workflow (ChatGPT Images 2.5):
1) Upload a reference character photo.
2) Extract a modular wardrobe prompt (Dress / Legwear / Footwear / Hair accessories / Arm sleeves) with PROTECTED WARDROBE RULE on top.
3) Swap only one category at a time; keep face/body identity locked.

Example wardrobe modules (fox shrine maiden / black-base classic):
- Hair: super-long straight layers to natural waist; fringe preserved; optional fox-ear clips + red-gold cord flower comb.
- Dress: ornate black/ivory/crimson halter corset minidress with high black jacquard collar, gold bells, crimson tassels, rear bow, ankle-level side panels with floral embroidery.
- Legwear: sheer black thigh-highs with scalloped lace tops + crimson ribbon.
- Footwear: glossy black patent platform pumps with crimson/gold bows and ankle bells.
- Arm sleeves: detached furisode-inspired organza sleeves with floral vines.

Replace any single module (e.g. Dress only) while freezing identity and other modules.
```

  </details>

- **里斯本蛋挞店 Sunburst：相机卷随手拍 UGC** — Sunburst 写死「相册偷拍不是棚拍」：葡语价目表、azulejo 瓷砖、烤箱油光额头、面粉手与冷荧光下巴光。本地生活种草竖版可换城市换柜台。 [@BorderleSint](https://x.com/BorderleSint) · [原帖](https://x.com/BorderleSint/status/2102132613095833773)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A real snapshot pulled from someone's camera roll, not a photoshoot. Vertical phone photo taken inside a small neighbourhood pastelaria in Lisbon, Portugal, mid-morning. A grown woman stands behind the counter, centered, framed head to the top of the display case, looking into the lens with a flat unposed expression, mouth closed. Dark hair pulled back into a flat working ponytail with loose strands stuck at the temples. Brown eyes, bare face, real skin with pores, shine on the forehead from the ovens, a faint old burn mark on one forearm, flour dust on her hands. She wears a plain navy work apron over a washed-out polo shirt with the sleeves pushed up and a pen clipped at the chest. The room is Portuguese and not English: blue and white azulejo tiles up the lower wall, a wide stainless display case with trays of pastéis de nata and bolas de berlim, a chrome espresso machine with small white cups stacked on top, a paper price list taped to the glass written in European Portuguese with prices in euros, paper napkins in a metal holder, and through the open door behind her the black and white calçada portuguesa pavement and a narrow street with a yellow building opposite. Warm daylight coming in through the shop door from the street, plus a cold strip of fluorescent light under the counter edge lighting her chin from below, so the tiles behind her glare and the ceiling goes dull and flat. Faint sensor noise in the shadows, mild lens distortion at the frame edges, a hair of motion softness, light JPEG compression. Shot on a phone at arm's length, 26mm, eye level. No studio look, no retouching, no glow.
```

  </details>

- **TikTok 真帧锁颗粒：参考只管光色，prompt 管叙事** — 裸写 prompt 容易 AI 塑料感——先从 TikTok 抠真实街拍/UGC 帧当参考，只借用灯光/色调/颗粒/相机感，再用详细 prompt 重画新场景。参考负责「真」，文案负责「演什么」。 [@spect3ral](https://x.com/spect3ral) · [原帖](https://x.com/spect3ral/status/2102096417388937684)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the reference only for lighting, color, grain and camera feel. New scene: a woman in her late 20s, stopped mid-stride on a busy sidewalk for a street interview. An interviewer's mic pokes in from frame left. She's laughing, caught off guard. Curly dark hair, freckles, visible skin texture, beige trench coat. Shot on a phone, natural daylight, unretouched.
```

  </details>

- **蜜杏照春颜：古风富养美妆人像可返图** — 琥珀蜜杏玻璃妆 + 蜜杏襦/奶油裙/湖蓝披帛，春日妆阁窗光。古风美妆封面完整中文提示，欢迎返图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2102018446624227531)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 竖版，古风富养系明亮美妆写真，真实摄影质感，年轻成年东方女性坐在明亮古典妆阁内，身体正面自然朝向镜头，肩颈放松，姿态端庄柔和，一只手轻抬至耳侧整理耳饰，另一只手自然搭在腿前与妆台边缘，眼神直接而温柔地看向镜头，带轻微笑意，整体呈现甜贵、温润、明媚、精致的富养大小姐气质。

人物视觉年龄约 20–28 岁，明确成年，柔和精致鹅蛋脸，额头自然饱满，面中丰盈，轮廓柔润流畅。清亮修长杏眼，眼裂自然拉长，眼尾轻微上扬，眼神清澈有光；眉形舒展精致；鼻梁秀气流畅，鼻尖小巧；唇形柔美丰润，唇珠自然清晰。五官精致耐看，不幼态、不网红脸、不欧美化。

妆容为 琥珀蜜杏玻璃妆：清透奶油感底妆，肤色白皙细腻但保留真实皮肤纹理；眼妆使用蜜杏橙、暖桃棕与琥珀细闪渐层晕染，眼中与卧蚕加入细腻珠光；睫毛纤长分明；面中与苹果肌使用明显但柔和的暖桃腮红，鼻尖轻微泛红；鼻梁、鼻尖、面中与唇峰带细腻水光高光；唇妆为清透杏橘玻璃唇，水润有光泽但不过分油亮。

乌黑长发蓬松半挽，顶部发量丰盈，后方长发自然垂落。发饰使用 琥珀珠花、珍珠发梳、浅金蝴蝶小钗、琥珀珠串与细金流苏，发饰精致华美但不夸张。耳饰为琥珀珠与珍珠垂坠耳饰，与妆容形成统一但不过度同色的层次。

服装为 蜜杏橙短襦 / 抹胸式内层 + 奶油白高腰长裙 + 浅湖蓝轻纱披帛。蜜杏橙上衣带精细白金花卉刺绣与珍珠滚边，胸前结构精致，人物上围自然丰润，胸线清晰但不过度夸张；奶油白裙身带浅金刺绣，浅湖蓝披帛轻薄通透，带细密花纹与浅金线绣，形成清爽冷暖对比。腰间配浅金珠饰与琥珀垂坠配件，整体服装华丽精致、有富养感。

场景为 明亮妆阁 / 奶白花墙 / 浅木家具 / 金色妆镜 / 琥珀色玻璃器皿 / 白色花枝 / 浅蓝天空窗景。背景不复杂，暖白、浅木、奶油白与浅湖蓝共同平衡蜜杏橙，避免整图泛黄或泛橙。妆台上可见少量琥珀色香水瓶、珍珠首饰与金色小器皿，细节精致但不喧宾夺主。

光线采用明亮柔和的春日暖白自然窗光，从侧前方进入，面部与肩颈有柔和高光，发丝带轻微金色边缘光。肤色必须保持干净白皙，橙色服装不得反射染黄皮肤。整体画面明亮、清透、鲜活，色彩有饱和度但不过艳。

85mm 人像镜头，浅景深，面部精准对焦，真实摄影感，细腻自然肌肤纹理，真实毛孔与轻微绒毛，避免塑料皮和CG质感，高完成度古风贵女美妆封面。
```

  </details>

- **便利店 1:13 AM：GINZA×Y2K 直闪 CCD 人像** — 日式生活方式社论 × 消费级数码机直闪 × 偶得构图。夜便利店棚灯+冰箱青光，时尚写真要「像翻到旧相机里的一张」。 [@exabell_](https://x.com/exabell_) · [原帖](https://x.com/exabell_/status/2101988836830244985)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Prompt: CONVENIENCE STORE AT 1:13 AM

GINZA Magazine-inspired Japanese lifestyle fashion editorial × early-2000s Y2K consumer compact digital camera × Korean female idol × raw documentary-fashion hybrid × found photograph aesthetic.

The image must feel like a real photograph discovered inside an old digital camera rather than a deliberately retro-styled AI image.

Japanese urban lifestyle sensibility, understated fashion intelligence, quiet observational storytelling, mundane everyday environment transformed into subtle fashion imagery.

A beautiful young adult Korean female idol standing inside a small Japanese convenience store late at night, casually holding a bottled milk drink while looking directly into the camera.

She wears a faded navy oversized zip hoodie over a white fitted ribbed tank top, low-rise charcoal mini skirt, worn sneakers, tiny silver shoulder bag and thin silver necklace.

Long platinum-blonde hair, slightly messy straight bangs, loose strands around her face.

Soft Korean-Japanese makeup, natural flushed cheeks, subtle taupe eyeshadow, soft pink lips, realistic visible pores.

She stands between narrow convenience-store aisles, refrigerators glowing behind her, shelves of snacks and drinks creating visual clutter.

Photographed extremely close with a late-2000s consumer compact digital camera, 30mm equivalent, ISO 640, f/3.2.

DIRECT ON-CAMERA FLASH, slightly harsh frontal flash, realistic specular highlights on skin and packaging, warm fluorescent ambient light mixing with cooler refrigerator illumination.

Slightly imperfect white balance, clipped highlights on reflective packaging, darker corners, subtle digital noise, mild chromatic aberration, slight edge softness.

The framing feels accidental: part of a shelf enters the foreground, one product is slightly cropped, subject not perfectly centered.

GINZA-inspired quiet Japanese lifestyle sensibility, understated fashion intelligence, raw documentary observation.

LUT: Warm Convenience Digital / muted highlights / fluorescent contamination
Harmony: navy × white × charcoal × refrigerator cyan
sRef: [Y2K-COMPACT-SREF]
Tokens: found photograph, direct flash, consumer digital, mundane location, incidental framing, not retro filter. 
Real photograph, not AI fashion campaign.

3:4 portrait.

NEGATIVE:
studio lighting, beauty campaign, luxury advertising, perfect symmetry, HDR, smartphone photography, cinematic teal orange, plastic skin, excessive bokeh, flawless skin, CGI, illustration, anime, overly posed idol photoshoot.
```

  </details>

- **海滩 AI UGC JSON：9:16 超写实自拍母版** — 伞下紫天幕、晒痕皮肤、铂金寸头、运动墨镜——完整 JSON 锁构图/肤质/纹身/光影。MakeUGC 向种草自拍直接丢。 [@georgesttock](https://x.com/georgesttock) · [原帖](https://x.com/georgesttock/status/2101974959807406501)
  <details>
  <summary>查看 / 复制提示词</summary>

```
{
  "shot_type": "Vertical smartphone selfie-style portrait, casual beach lifestyle aesthetic",
  "canvas": {
    "orientation": "portrait",
    "aspect_ratio": "9:16",
    "framing": "Close medium portrait crop from top of head to mid-chest",
    "subject_alignment": "Centered, angled three-quarter profile",
    "perspective": "Natural wide-angle smartphone front-camera perspective, taken from a slightly low angle looking up"
  },
  "scene": {
    "location": "Outdoor beachside café or boardwalk seating area",
    "time_of_day": "Midday, bright direct sunlight",
    "mood": "Casual, relaxed, sun-drenched beach atmosphere",
    "environment": {
      "canopy": "Large purple canvas umbrella with dark metal ribs directly overhead, partially cropping the top of frame",
      "background_left": "A second striped umbrella and a wooden café table where another person sits, blurred and out of focus",
      "background_right": "Palm trees, a wooden trash receptacle, distant beach chairs, and a paved stone walkway leading toward the shoreline",
      "sky": "Bright hazy blue sky visible in small gaps between the umbrella and buildings",
      "ocean": "A thin strip of turquoise ocean and pale sand visible far in the background on the left side"
    }
  },
  "subject": {
    "description": "Young man in his late 20s, angled in profile with his face turned to the right, looking off toward the middle distance",
    "position": "Positioned lower-center in frame, shoulders and upper chest filling the lower half",
    "pose": {
      "head": "Turned in three-quarter profile, chin slightly lifted",
      "shoulders": "One shoulder raised slightly closer to the camera due to the selfie angle",
      "posture": "Relaxed, seated"
    },
    "expression": {
      "overall": "Calm, composed, slightly focused",
      "mouth": "Lips slightly parted as if mid-breath or mid-sentence",
      "gaze": "Directed off to the side, not toward the camera",
      "emotion": "Relaxed confidence"
    },
    "skin": {
      "tone": "Deeply tanned olive-bronze skin",
      "finish": "Natural matte-to-slight sheen typical of sun exposure and light perspiration",
      "texture": "Realistic visible pores, natural fine lines, light natural sheen across the forehead and nose bridge",
      "highlights": "Bright sunlit highlight along the cheekbone, nose, and shoulder"
    },
    "face": {
      "shape": "Angular with a strong defined jawline",
      "cheekbones": "High and prominent",
      "jaw": "Sharp, squared",
      "brow": "Slightly furrowed, faint natural forehead lines visible from the angle",
      "facial_hair": "Short, dense, well-groomed dark stubble covering the jaw, chin, and upper lip, slightly thicker along the mustache and chin",
      "nose": "Straight, moderately defined bridge",
      "lips": "Medium fullness, natural warm pink-brown tone, slightly parted",
      "ear": "Visible in profile, small silver hoop-style hardware not present, ear otherwise bare aside from the earbud"
    }
  },
  "hair": {
    "color": "Bleached platinum-blonde with a slightly warm ashy undertone",
    "length": "Very short buzzed crop",
    "texture": "Densely textured, slightly spiky natural texture typical of short bleached hair",
    "part": "No visible part, uniform short length across the scalp",
    "roots": "Faint natural darker regrowth shadow near the scalp",
    "styling": "Natural, unstyled, slightly tousled from wind and heat"
  },
  "eyewear": {
    "type": "Wraparound sport sunglasses",
    "frame_color": "White frame with black temple arms",
    "lens_color": "Dark mirrored silver-grey lenses",
    "fit": "Wrapped closely around the temples, resting on the bridge of the nose",
    "reflection": "Faint reflection of the surrounding beach environment visible in the lens surface",
    "branding": "No visible brand text or logo"
  },
  "accessories": {
    "earbuds": "Single white wireless earbud with a visible stem, worn in the ear closest to the camera",
    "necklace": "Thin silver chain necklace resting against the collarbone, mostly obscured by the tattoo",
    "drink": "A white drinking straw visible at the very bottom edge of frame, held near chest height"
  },
  "tattoos": {
    "chest_and_shoulder": "Large detailed black ink tattoo covering the chest and shoulder, featuring botanical vine and leaf linework, a stylized flower design lower on the chest, and additional abstract linework extending toward the shoulder",
    "neck": "A short vertical script-style tattoo visible on the side of the neck near the collarbone",
    "style": "Fine linework, moderate density, natural fading suggesting the tattoo has some age"
  },
  "body": {
    "build": "Lean and muscular",
    "visible_area": "Bare shoulders, chest, and upper torso",
    "skin_detail": "Fine natural sheen from heat and light perspiration, visible muscle definition across the shoulder and chest"
  },
  "lighting": {
    "type": "Bright natural harsh midday sunlight",
    "primary_source": "Direct overhead sun, partially filtered by the umbrella canopy",
    "direction": "From above and slightly behind, casting a defined shadow line across part of the face and neck",
    "quality": "High contrast between sunlit and shaded areas",
    "highlights": "Strong specular highlight on the cheekbone, nose bridge, and shoulder",
    "shadow_style": "Hard-edged natural shadow along the jaw and neck from the umbrella's edge",
    "color_temperature": "Warm daylight with slightly cool ambient fill from the surrounding sky and umbrella shade"
  },
  "style": "Ultra-realistic, photorealistic, authentic candid smartphone selfie aesthetic, natural skin texture with visible pores and sheen, no digital smoothing, no plastic-looking skin",
  "aspect_ratio": "9:16",
  "quality": "high detail, realistic skin, hair, and tattoo texture, natural color grading, no exaggerated anatomy"
}
```

  </details>

- **极简圆镜立绘：侧身回眸一键返图** — 圆镜当几何锚点，新中式修身裙锁颈肩腰臀线；深皇家紫×淡金。立绘/品牌人设图可直接返图的中文结构化母版。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2101973626853728520)
  <details>
  <summary>查看 / 复制提示词</summary>

```
想表现人物曲线，还得是极简插画风格。

GPT Image 2.5生成极简人物插画。

提示词（欢迎返图）：
主体内容：一位明确成年的东方女性站在极简圆镜前，轻轻整理耳饰，身体侧向镜面，脸部微微回眸
主体气质：精致、知性、贵气、神秘
画面用途：高级立绘感插画
主色调：深皇家紫、墨蓝紫、冷白
点缀色：淡金、电光紫
几何元素强度：中
几何元素类型：圆形镜面 + 细线
画幅比例：9:16 
补充要求：服装为修身新中式连衣裙，重点突出侧身时的颈肩线、胸线、腰线和臀部转折，镜面只作为极简圆形构图元素，不要复杂妆台
```

  </details>

- **3D 旋转轴微倾头：Roll/Pitch/Yaw 控姿态** — 「ごく僅か」靠感觉说不清？先定义画面里的 Roll/Pitch/Yaw 正负方向，再给 -5%～-25% 带宽。微倾头、侧脸精度比玄学形容词稳。 [@magu_ai_h](https://x.com/magu_ai_h) · [原帖](https://x.com/magu_ai_h/status/2101968864762630377)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【構図における回転軸の定義】
このプロンプト内では以下を画面内における回転軸の定義とする。
・ロールは時計回り方向を「+」とし、反回転は「-」とする。
・ヨーは画面右への回転を「+」とし、画面左への回転は「-」とする。
・ピッチは上方回転を「+」とし、下方回転は「-」とする。
・回転角度は「0°～90°」で表現する。

---ルールプロンプトここまで---
これをポーズ指定などの項目の最初に差し込む

【使い方例・微傾頭】
顔のロール角は-15％～-25％とし、頭頂中心は顎中心より画面左側にする。
顔のピッチ角は-5％～-10％と、僅かに画面下側を向く。
顔のヨー角は-5％～-10％と、僅かに画面左側を向く。
---ここまで---
これらを大まかな姿勢指定のあとに入れる

※角度に幅を持たせるのは、僅かなズレを見たいのと、崩壊を防ぐため。完全再現ではなく構図精度を少し高めるおまじない。
```

  </details>

- **晴空公路人像：完整中文写实提示词** — 9:16 乡间路侧半身：水手领白背心×低腰牛仔短裤，灰绿瞳+水红唇。日光漫反射与景深写得很满——中文人像直接可跑的长提示。 [@alanblogsooooo](https://x.com/alanblogsooooo) · [原帖](https://x.com/alanblogsooooo/status/2101953434736087476)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16竖画幅。户外自然日光真实感街头人像写实摄影，超高清纯净画质与高信噪比，整体呈现澄澈天空蓝、纯净白与青翠原野交织的明朗日系色调，伴随大光圈柔和景深与真实日光漫反射。正视略带微仰的胸腰半身中近景构图，主体端立于画面正中央偏左，公路路沿石斜向延伸拉开空间纵深，右侧展现辽阔的草坪与田野。一位气质清甜纯净与微冷高级感的22岁短发女性伫立于乡间路侧；身姿端庄挺拔，双肩舒展平直，头部轻微侧倾凝视镜头，展现出随性自然的青春动势张力。她双臂自然垂于身侧，右手腕佩戴精致的金色细手链，手指轻搭在低腰裤腰边缘；腰腹平坦紧致，露出光洁白皙的腹部线条与优美锁骨；双足平稳立于平整的沥青路面边缘。她身穿一件修身纯白色无袖针织短款背心，衣身覆有立体精致的菱形暗纹编织肌理，领口拼接大翻领水手领并饰以立体蝴蝶结与黑色波浪蕾丝滚边，下着一条低腰深灰色牛仔短裤；颈间佩戴纤细的银色蝴蝶吊坠项链；一头乌黑顺直的日系齐耳短发（波波头）内扣修饰着巴掌脸，轻薄齐刘海温顺垂落额前，一双清澈透亮的灰绿色彩瞳灵动深邃，唇上涂抹着明艳水润的水红色唇釉。灰绿色的宝石双眸清亮深情直视镜头，眼波澄澈含光，双颊泛着阳光烘烤出的自然粉晕（表征层），嘴角想要保持平直冷峻却在边缘隐隐漾开一丝若有若无的清甜浅笑🌸✨。晴朗炽烈的斜向日光倾泻而下，在冷白透亮的凝脂肌肤上形成通透温润的粉橘次表面漫反射，肩颈、锁骨与平坦腹部泛着细腻的奶油水光高光，针织菱形织纹与牛仔布料呈现出真实立体的阴影反差；空灵、流萤与微醺幻觉交织出极致纯净明朗的夏日诗意，背景由干净平整的乡间沥青道路、白色道沿石、远处青翠草地与无垠纯净的湛蓝天幕极简铺展，光影雕琢至像素级生动瑰丽。
```

  </details>

- **AI UGC JSON 超写实自拍复刻母版** — photorealistic_reference_reconstruction：按优先级锁构图→脸→姿势→发色妆造→光环境，顺手抹掉所有界面控件。种草自拍复刻直接丢 JSON。 [@jasonugc](https://x.com/jasonugc) · [原帖](https://x.com/jasonugc/status/2101933444376781043)
  <details>
  <summary>查看 / 复制提示词</summary>

```
{
"prompt_type": "photorealistic_reference_reconstruction",
"objective": "Recreate the supplied reference image as closely as possible as a clean horizontal smartphone selfie photograph. Preserve the subject's face proportions, pose, platinum-blonde hair, makeup, jewelry, body position, bedroom environment, warm ambient lighting, camera angle, crop, depth, colors, and casual social-media aesthetic. Completely ignore and remove all interface elements, text, buttons, icons, borders, overlays, arrows, timestamps, watermarks, or other screen graphics.",
"reference_fidelity": {
"target": "extremely high visual similarity",
"priority_order": [
"overall horizontal composition and crop",
"face position and facial proportions",
"low lying-on-bed pose",
"long platinum-blonde hair",
"blue-gray eyes and soft glam makeup",
"warm golden bedroom lighting",
"large sculptural metallic earrings",
"small outlined heart tattoo near collarbone",
"cream curtains and tufted headboard",
"foreground arm placement",
"authentic smartphone-photo rendering"
]
},
"canvas": {
"orientation": "landscape",
"aspect_ratio": "approximately 1100:828",
"framing": "tight horizontal smartphone selfie",
"crop": "subject shown from upper head through upper torso while lying forward on a bed",
"subject_alignment": "face slightly left of center",
"camera_position": "very close to face and upper torso",
"headroom": "small amount of cream ceiling and molding visible above hair",
"left_edge": "bedroom curtains and bed linens visible",
"right_edge": "subject's extended arm and headboard visible",
"bottom_edge": "soft pale bedding fills foreground",
"important": "do not include the original white app border or any lower-right UI buttons"
},
"scene": {
"location": "warm upscale bedroom or hotel-style bedroom",
"time_of_day": "evening or nighttime",
"mood": "soft, polished, intimate, relaxed",
"visual_style": "high-end candid smartphone beauty selfie",
"background_complexity": "moderately simple, softly detailed",
"environment": {
"walls": "warm cream / pale beige",
"ceiling": "matching warm ivory",
"trim": "decorative white crown molding",
"curtains": "full-length beige-gold curtains with vertical folds",
"bed": "cream or warm-white bedding",
"headboard": "light beige upholstered tufted headboard with nailhead trim",
"lighting": "warm diffused bedside or room lighting"
}
},
"subject": {
"description": "adult woman lying forward on a bed and looking directly at the camera",
"position": "upper-middle foreground, face close to camera",
"body_visibility": "head, shoulders, upper chest, portions of both arms and upper torso",
"pose": {
"torso": "lying prone or leaning forward on the bed",
"head": "slightly angled downward and subtly toward viewer-left",
"face": "turned directly toward camera",
"left_arm": "extended across lower-left foreground toward camera",
"right_arm": "extends toward viewer-right and partially out of frame",
"shoulders": "low and relaxed",
"posture": "casual low-angle leaning pose"
},
"expression": {
"overall": "calm, composed, slightly pouty",
"gaze": "direct eye contact with camera",
"mouth": "closed",
"lips": "softly pursed",
"brows": "relaxed but polished",
"emotion": "confident, serene"
},
"skin": {
"tone": "warm light-to-medium tan beige",
"undertone": "golden-neutral",
"finish": "smooth luminous satin",
"texture": "realistic but softly retouched",
"pores": "subtle",
"highlights": "pronounced luminous highlight on cheekbones, forehead, nose bridge, shoulders, and upper chest",
"blush": "soft rosy-peach flush",
"retouching": "moderate beauty processing without obvious plastic texture"
},
"face": {
"shape": "soft oval with defined cheekbones and tapered jaw",
"forehead": "medium height",
"cheeks": "smooth and sculpted",
"jawline": "soft but defined",
"chin": "small rounded chin",
"eyes": {
"shape": "almond-shaped",
"color": "pale blue-gray",
"size": "medium-large",
"lashes": "long, curled, dark and individually defined",
"eyeliner": "precise dark winged eyeliner extending outward",
"eyeshadow": "soft taupe-beige and muted brown",
"catchlights": "small warm frontal reflections"
},
"eyebrows": {
"shape": "full, softly arched",
"color": "cool medium brown / dark blonde",
"density": "medium-full",
"finish": "clean, softly filled, feathered"
},
"nose": {
"shape": "small straight nose",
"bridge": "slender and softly highlighted",
"tip": "rounded and refined"
},
"lips": {
"shape": "very full and softly sculpted",
"upper_lip": "defined cupid's bow",
"lower_lip": "full and rounded",
"color": "muted nude pink / dusty rose",
"liner": "slightly darker nude-pink outline",
"finish": "soft matte-satin"
},
"makeup": {
"style": "polished soft glam",
"foundation": "smooth and radiant",
"bronzer": "warm subtle bronzing around perimeter",
"blush": "soft peach-rose",
"highlighter": "luminous champagne highlight",
"eyes": "neutral shadow with winged liner",
"lips": "nude rose"
}
}
},
"hair": {
"color": "very light platinum blonde with subtle cool beige-blonde lowlights",
"length": "long, extending below shoulders and across upper body",
"texture": "smooth straight to very slightly curved",
"part": "deep or moderate side part near viewer-left",
"roots": "slightly darker natural-looking shadow root",
"volume": "moderate",
"front_sections": "one broad blonde section drapes diagonally across viewer-left side of face",
"right_side": "long smooth strands fall behind shoulder toward viewer-right",
"ends": "softly tapered",
"surface": "silky and glossy with warm highlights",
"flyaways": "minimal"
},
"jewelry": {
"earrings": {
"type": "large sculptural teardrop / chunky hoop earrings",
"material": "polished warm gold or gold-toned metal",
"shape": "rounded hollow teardrop shape",
"size": "medium-large and visually prominent",
"position": "clearly visible on ear at viewer-right",
"finish": "highly reflective metallic surface"
},
"necklace": {
"type": "thin delicate chain necklace",
"material": "warm gold",
"pendant": "small compact charm",
"position": "rests across upper chest near collarbone",
"finish": "subtle polished reflection"
}
},
"tattoo": {
"type": "tiny outlined heart tattoo",
"placement": "upper chest near the subject's right collarbone, viewer-right side",
"color": "dark brown-black ink",
"size": "small and delicate",
"style": "simple single-line outline",
"orientation": "upright",
"instruction": "keep crisp but understated"
},
"wardrobe": {
"top": {
"type": "black thin-strap top or black lingerie-style garment",
"visibility": "only small portions are visible near the lower chest and shoulder areas because of the close crop and lying pose",
"color": "deep black",
"straps": "thin black straps",
"material": "smooth or subtly textured",
"instruction": "do not invent extra garment structure that is not visible; preserve the reference's minimal visible black clothing"
}
},
"arms_and_hands": {
"left_arm": {
"position": "extends diagonally from lower-left toward camera",
"visibility": "large portion visible",
"perspective": "slightly enlarged by proximity to smartphone lens",
"skin": "warm golden tan"
},
"right_arm": {
"position": "extends toward right side of frame",
"visibility": "partially cropped",
"perspective": "foreground proximity"
},
"right_hand_or_fingers": {
"visibility": "softly blurred partial finger/hand entering extreme right edge",
"purpose": "reinforce handheld phone/selfie feeling",
"focus": "out of focus due to proximity"
}
},
"bedroom_background": {
"curtains": {
"position": "left half of background",
"color": "warm beige / champagne",
"material": "heavy satin or dense woven fabric",
"folds": "deep vertical pleats",
"lighting": "warm highlights along fold ridges"
},
"headboard": {
"position": "right-rear background",
"color": "light beige / cream",
"material": "upholstered fabric",
"style": "tall luxury headboard",
"details": "button tufting and metallic nailhead trim following curved upper edge"
},
"bed": {
"bedding": "soft white / ivory sheets or duvet",
"foreground": "large pale cushion or blanket surface beneath subject",
"left_background": "loosely gathered pink-beige clothing or blanket resting on bed",
"texture": "soft smooth bedding"
},
"walls": {
"color": "warm ivory",
"finish": "smooth matte",
"trim": "white crown molding and decorative panel details"
}
},
"lighting": {
"type": "warm diffused indoor ambient lighting",
"primary_source": "soft room or bedside lamp from front-right / side",
"secondary_source": "warm ambient fill from room",
"direction": "primarily front and slightly viewer-right",
"quality": "soft and flattering",
"contrast": "low-to-moderate",
"color_temperature": "approximately 2900-3400K",
"skin_effect": "warm luminous glow with pronounced cheek highlight",
"hair_effect": "golden reflections along platinum strands",
"eye_effect": "clear catchlights",
"background_effect": "soft warm gradients with no harsh shadows",
"shadow_style": "diffuse and gentle"
},
"camera": {
"device": "modern smartphone front-facing camera",
"orientation": "landscape",
"lens": "wide selfie lens",
"focal_length_equivalent": "approximately 24-28mm",
"camera_position": "very close to subject and slightly above mattress height",
"camera_height": "slightly below or around face level due to prone pose",
"distance": "approximately 40-70 cm from face",
"perspective": "subtle wide-angle smartphone distortion",
"focus": "sharpest on eyes and face",
"depth_of_field": "moderate with background softly recognizable",
"image_quality": "high-resolution smartphone portrait",
"processing": "subtle HDR, moderate beauty smoothing, crisp eyes and hair",
"sharpness": "clean modern-phone sharpening",
"noise": "very low",
"compression": "slight social-media image compression"
},
"composition_geometry": {
"face_center": "approximately x=46%, y=30%",
"head_top": "approximately y=2-4%",
"eye_line": "approximately y=26%",
"nose": "approximately image center-left",
"mouth": "approximately y=44%",
"shoulder_line": "approximately y=57%",
"upper_torso": "dominates lower-middle frame",
"left_arm": "diagonal foreground element running from bottom-left toward subject",
"right_arm": "diagonal toward lower-right",
"curtains": "left background",
"headboard": "right background",
"visual_balance": "subject face dominates center-left while hair and right shoulder extend toward the headboard"
},
"color_palette": {
"dominant_colors": [
"platinum blonde",
"warm golden beige",
"cream",
"champagne",
"dusty rose",
"black",
"warm gold"
],
"skin": "warm golden tan",
"hair": "cool platinum with warm ambient highlights",
"eyes": "pale blue-gray",
"lips": "dusty nude rose",
"earrings": "warm reflective gold",
"background": "cream and champagne",
"wardrobe": "black",
"overall_saturation": "moderate",
"contrast": "soft",
"white_balance": "warm"
},
"beauty_processing": {
"strength": "moderate",
"skin_smoothing": "moderate",
"eye_clarity": "slightly enhanced",
"iris_brightness": "subtly enhanced",
"lash_definition": "high",
"lip_definition": "high",
"facial_shape_adjustment": "minimal",
"highlight_enhancement": "moderate",
"overall_result": "polished social-media beauty portrait while remaining photorealistic"
},
"micro_details": {
"skin": "subtle pores, natural tonal variation, tiny beauty marks",
"eyes": "detailed pale blue-gray irises and crisp lashes",
"hair": "individual platinum strands with visible root transition",
"earrings": "accurate metallic highlights and reflections",
"necklace": "fine chain detail",
"tattoo": "thin precise heart outline",
"curtains": "woven texture and deep folds",
"headboard": "fine upholstery texture, button indentations, and metallic stud trim",
"bedding": "soft wrinkles and pressure folds around subject's arms"
},
"photographic_style": {
"genre": "casual bedroom beauty selfie",
"aesthetic": "warm luxury social-media lifestyle portrait",
"realism": "extreme photorealism",
"retouching": "polished but believable",
"production_value": "personal phone selfie rather than professional studio shoot",
"desired_result": "looks like a genuine high-quality smartphone selfie captured while lying on a bed in warm bedroom lighting"
},
"negative_prompt": [
"text",
"captions",
"watermarks",
"logos",
"UI",
"buttons",
"expand icon",
"refresh icon",
"white application border",
"rounded screenshot frame",
"interface graphics",
"extra people",
"different camera angle",
"standing pose",
"sitting upright",
"mirror selfie",
"phone visible",
"short hair",
"brunette hair",
"black hair",
"red hair",
"curly hair",
"tight curls",
"center part",
"messy bun",
"dark eyes",
"brown eyes",
"minimal eyelashes",
"no eyeliner",
"bright red lipstick",
"large smile",
"open mouth",
"looking away",
"different earrings",
"tiny stud earrings",
"no earrings",
"missing heart tattoo",
"large tattoo",
"different bedroom",
"bathroom",
"kitchen",
"outdoors",
"cold blue lighting",
"daylight-only lighting",
"hard flash",
"dramatic cinematic shadows",
"extreme bokeh",
"DSLR editorial look",
"fisheye distortion",
"plastic skin",
"uncanny face",
"over-sharpened pores",
"overexposed skin",
"CGI",
"3D render",
"illustration",
"anime",
"cartoon",
"extra arms",
"extra hands",
"deformed fingers",
"warped shoulders",
"distorted anatomy",
"asymmetrical eyes"
],
"final_generation_instruction": "Generate one extremely photorealistic horizontal smartphone selfie matching the supplied reference as closely as possible. Show an adult woman lying forward on a cream bed in a warmly lit beige bedroom, photographed very close to the face and upper torso. Give her very long silky platinum-blonde hair with a darker shadow root and side part, pale blue-gray almond eyes, long dark lashes, sharp winged eyeliner, softly sculpted brows, luminous bronzed skin, and full matte-satin dusty nude-pink lips. Her expression is neutral and slightly pouty with direct eye contact. Add large polished gold teardrop earrings, a delicate gold necklace, and a tiny outlined heart tattoo near the viewer-right collarbone. Only small portions of a thin black top or lingerie-style garment should be visible. Position one arm across the lower-left foreground and the other toward the right edge, with a softly blurred fingertip near the extreme right to preserve the handheld selfie feeling. Reproduce the warm champagne curtains on the left, cream tufted nailhead headboard on the right, ivory bedding, pale carpet, decorative crown molding, and loosely gathered pale pink fabric on the bed. Use warm soft ambient lighting, realistic phone-camera perspective, moderate beauty processing, crisp eyes and hair, subtle skin texture, and natural smartphone HDR. Completely remove all interface buttons, arrows, borders, text, watermarks, and other screen graphics."
}
```

  </details>

- **高定角色设定表：style bible 可填槽母版** — 上传一张风格参考当 style bible，吐出 16:9 高定角色概念表：竖排姓名元数据、迷你三视图+剪影、中心全身、动态姿势、材质局部放大。换角色名/ROLE/MOOD就能套——IP 资产表母版直接抄。 [@itsPixieVerse](https://x.com/itsPixieVerse) · [原帖](https://x.com/itsPixieVerse/status/2101905822888677714)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium, modern high-fashion CHARACTER CONCEPT ART SHEET in a 16:9 widescreen layout on a pure white background. THE ATTACHED REFERENCE IMAGE DEFINES THE ART STYLE — treat it as a strict style bible and reproduce its exact rendering technique in every figure on this sheet.

[STYLE — MIRROR THE REFERENCE EXACTLY]: Replicate the reference image's rendering verbatim: hyper-realistic 3D CGI collectible-figurine render, physically-based rendering, octane-render-quality lighting, real material fidelity (fabric weave and drape, metal wear and oxidation, pore-level petrified wood micro-detail), identical overall lighting setup and material palette to the reference (light, clean, white-background studio photography — do NOT flatten or cel-shade it), soft studio lighting with a subtle rim light matching the reference. Every figure must look like it was rendered from the same 3D file, under the same studio lighting, as the reference image.

[STYLE PROHIBITIONS — ABSOLUTE]: no flat 2D cel-shading, no cartoon outlines, no lineart, no anime style, no painterly brushwork, no posterized flat color blocks, no low-poly or game-asset look, no plastic-toy sheen, no fused or malformed fingers. If the reference has photoreal materials, this sheet does too — never flatten them.

[PROPORTIONS]: Match the reference's exact body proportions in every figure — elongated fashion-illustration anatomy (9–10 heads tall, small head, long slender limbs, narrow waist) carried into photoreal rendering. Do not normalize proportions in the smaller studies.

[SUBJECT_DESCRIPTION]: Character named OROCHI. A tall humanoid entity made of petrified pale ash wood with branch-like horns, gold hoop earrings, and a void-slit face. Wearing an oversized draped olive-green techwear kimono jacket, tactical nylon chest harness, and dark indigo wide-leg tech-hakama denim trousers with chunky tactical sandals.

SUPERPOWERS VISIBLE: Hovering ethereal glowing crimson spectral sakura petals and phantom green spirit-fire swirling around his wooden claws and katana blade.

Layout Composition (Organize strictly into these sections):
1. LEFT PANEL: METADATA & TURNAROUND- Large, bold vertical typography of the character's Name "OROCHI" in a clean, heavy sans-serif condensed font.- Metadata Block: "ROLE: PHANTOM RONIN", "CORE MOOD: ANCIENT DREAD", and "VISUAL SIGNATURE: SPECTRAL WOOD MAGIC" in a clean sans-serif font.- MINI TURNAROUND: 3 small vertical figures — "neutral", "back view", "profile" — rendered in the identical reference style, full material fidelity even at small scale.- SILHOUETTE STUDY: 3 solid-black silhouettes matching the turnaround stances underneath.- EXPRESSION STUDY (Bottom Left): exactly 4 small close-up headshots showing subtle shifts in the spirit-fire glowing from his void-slit face.

2. CENTRAL PANEL: THE CENTERPIECE- One giant, dominant full-body figure in a cool, relaxed signature pose, maximum detail, rendered as a perfect style-match to the reference image, but with glowing crimson spectral leaves and green spirit-fire wrapping around his drawn katana.

3. RIGHT PANEL: MULTI-POSE & THEMATIC STUDIES- POSE STUDY: exactly 4 to 5 small-to-medium figures in dynamic combat stances (drawing blade, casting spirit fire, lunging), each with a small handwritten-style label underneath, all in the identical reference style.

4. BOTTOM RIGHT PANEL: DETAIL STUDY- Exactly 5 small square close-up crops highlighting: (1) petrified wood grain and gold hoop earring, (2) olive canvas jacket weave and tactical harness, (3) glowing phantom green spirit-fire on the katana blade, (4) denim tech-hakama pleats, (5) clawed wooden hand holding hovering crimson petals.- Each crop gets a clean handwriting-style label underneath.

【填槽】把 OROCHI / 角色描述 / ROLE·MOOD·SIGNATURE 换成你的 IP；上传一张风格参考当 style bible。
```

  </details>

- **三视图换人→Minimax：四国换装竖视频管线** — Image 2.5 先出三视图+四国场景参考图换人，再叠黑白深度交给 Minimax H3——开场白棚到巴黎/罗马/开罗/悉尼连转换装。虚拟 IP 换装短片：脸锁死、衣服跟场景一起换，别只换背景。 [@HoodyLiu](https://x.com/HoodyLiu) · [原帖](https://x.com/HoodyLiu/status/2101904919540429295)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【管线 · Image 2.5 → Minimax H3】
1. 准备模特人物三视图
2. 用 GPT Image 2.5 换人：生成四个城市场景下的人物参考图（Paris / Rome / Cairo / Sydney）
3. 按新模特重写特征锁定，微调分镜提示词
4. 新提示词 + 参考图 + 黑白深度视频 → Minimax H3

【Minimax 身份/换装锁（节选，完整分镜时码见原帖）】
<Picture 1> defines Rei's opening outfit only: a fitted black satin mini dress with thin spaghetti straps, a lace-trimmed V-neckline, a small front bow with trailing ribbons, off-the-shoulder lace ruffle sleeves, a ruched bodice, a ruffled lace hem, bare legs and black pointed-toe stiletto pumps. Preserve the dress's silhouette, materials and front/back construction as shown. Use this outfit for the white-studio opening only; do not reproduce the character-sheet layout.

<Picture 2–5> define city outfits (Paris / Rome / Cairo / Sydney), front-facing presentation poses, props, city maps and UI.

<Picture 6> is an unmodified slightly turned standard face crop from the original Rei character card. It is the highest-priority facial identity reference for ALL outfits: preserve its eye shape and spacing, eyelids, nose, lips and natural proportions without beautification. Pictures 2–5 supply new city outfits and environments, never a substitute face. This is the same adult woman in different clothes throughout the entire video.

<Video 1> is a black-and-white relative-depth reference for body movement, camera pullback and chronological timing only. Depth brightness represents distance, not skin color or face detail. Render natural full color using the pictures.

Generate ONE continuous 12-second vertical video. Only Rei rotates during transformation; the camera must not orbit her. Change clothing, handheld props, city map and city-name UI together; do not change only the background while leaving the previous outfit.

Keep Rei's facial identity, natural body proportions, hair and bangs throughout. Clothing changes must not alter her face, age, body shape, hair color or hair length. No generated speech or music.

完整 Shot 1–7 时码与城市 UI 标签见原帖长文。
```

  </details>

- **偷拍模糊感：夜间人行道运动模糊公式** — 手持抖动、重影、过曝高光、不完美构图——故意拍坏的 UGC 美学，附负面提示防身份复刻。种草「假偷拍」一条中文公式够用。 [@sereinworld](https://x.com/sereinworld) · [原帖](https://x.com/sereinworld/status/2101902908178776196)
  <details>
  <summary>查看 / 复制提示词</summary>

```
超现实主义偷拍智能手机照片，3:4纵向。原版不可识别的年轻女子在夜间雅加达人行道上，靠着白色瓷砖墙。中途行走，半侧脸，转身带着害羞微笑，手朝相机举起。闪光灯在运动中触发，强烈手持抖动，严重的运动模糊，重影，条纹状瓷砖，深邃阴影，过曝高光，不完美构图，原始意外快照，真实的噪点手机摄影美学。

负面提示：身份匹配，面部复制，真实人物复制，动漫，插图，绘画，CGl，风格化，工作室灯光，美颜灯光，锐利焦点，光滑皮肤，摆拍肖像，时尚编辑，电影感，单反相机，三脚架，专业摄影
```

  </details>

- **几乎遮脸仍锁身份：帽+墨镜+有线耳机时尚特写** — 正对特写：罗纹冷帽 + 大反光墨镜 + 白色有线耳机 + 高领羽绒服，五官几乎看不见还要保住参考人。测身份锁下限的好题——换绣标/外套就能出系列。 [@weiinberg](https://x.com/weiinberg) · [原帖](https://x.com/weiinberg/status/2101884475106021421)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A straight-on close-up shot features the woman in reference, almost entirely obscured by practical outerwear accessories: a black ribbed knit beanie, large reflective black sunglasses, and white wired apple earphones, paired with a high-collared, white puffer jacket zipped to the top. The jacket bears the Nike logo in black embroidery on the left shoulder. The scene is set in a brightly-lit, industrial indoor environment, with part of a high, cream-colored ceiling visible and some glossy metallic or photographic posters in the background. The lighting is bright with soft, diffuse overhead fill, creating no harsh shadows and only faint highlights on the glossy surfaces. Dominant colors are black, and neutral, with a few muted synthetic colors from the surroundings. The shot is captured with a smartphone camera in normal lens perspective, and there is moderate digital sharpening but no significant noise. The mood is urban, pragmatic, and intentionally obscured, with a modestly futuristic, incognito vibe.

【要点】参考人几乎被帽/墨镜/有线耳机遮脸——测的是「看不见五官还能不能锁身份」。换品牌绣标/外套颜色就能做系列。
```

  </details>

- **Sunburst Y2K 街拍：身份锁 + 全新中步姿势** — 3:4 竖版：Keep identical 死锁发型/报童帽/豹纹星短袖/阔腿牛仔裤，COMPLETELY NEW POSE 只改中步回眸。直闪 + 早期数码颗粒——身份锁系列连更姿势的母版，优先 Sunburst。 [@saniaspeaks_](https://x.com/saniaspeaks_) · [原帖](https://x.com/saniaspeaks_/status/2101878359282036998)
  <details>
  <summary>查看 / 复制提示词</summary>

```
ULTRA-REALISTIC NATURAL SMARTPHONE PHOTOGRAPH, vertical 3:4, candid Y2K street-style fashion portrait of the young pretty Japanese woman. <<<FACE_ID>>>, standing against the textured off-white plaster wall background.

Keep identical: her long straight dark-brown hair falling naturally over her shoulders with soft strands framing her face, her structured black newsboy/baker-boy cap, her fitted plain white cropped short-sleeve baby tee with the large leopard-print five-point star graphic on the chest, her low-rise oversized dark-blue baggy jeans with realistic faded denim washes, the leopard-print belt/waistband at her waist, the long decorative metal chain with large circular metal ring and dangling strap details, and the large black shoulder bag.

COMPLETELY NEW POSE — distinctly different from all previous versions: she is caught mid-stride in a casual walking motion, her body turned approximately three-quarters toward the camera, head turned back over her left shoulder to glance at the camera with a cool, effortless expression — lips slightly parted, eyes relaxed and direct. Her weight is shifting forward onto her right foot, left leg stepping back, creating natural mid-walk movement in her baggy denim. Her right arm swings naturally forward with a relaxed bent elbow, while her left arm trails back slightly with the black shoulder bag shifting naturally with her motion. Her hair falls loosely with subtle movement suggesting the walking stride. The overall stance reads as a candid, unposed street-fashion catch — a completely different body orientation, weight distribution, and head direction than either previous reference pose.

Direct on-camera flash photography creating a distinct realistic shadow of her body and cap on the textured wall behind her. Authentic early-2000s point-and-shoot or compact digital camera feel. RAW smartphone aesthetic, realistic skin texture, individual hair strands, accurate hands and fingers, natural body proportions, detailed denim texture, realistic leather bag, authentic metal reflections, visible wall texture, direct flash, subtle grain, slightly imperfect exposure, nostalgic Y2K fashion photography, no beauty filter, no plastic skin, no CGI appearance, no excessive retouching, vertical 3:4 composition

【填槽】把 <<<FACE_ID>>> 换成你的身份锁标记；Keep identical 段锁衣装，COMPLETELY NEW POSE 段只改姿势。优先 Sunburst。
```

  </details>

- **AI UGC 镜像自拍：JSON 参考重建配方** — 整段 JSON 锁构图优先级：竖裁→体态→脸→发→手机位→衣装→暖卧室光。专门用于「参考自拍 → 清干净 UI 水印的超写实镜像自拍」——种草/UGC 批产可填槽母版。 [@neverfilmed](https://x.com/neverfilmed) · [原帖](https://x.com/neverfilmed/status/2101873764002595167)
  <details>
  <summary>查看 / 复制提示词</summary>

```
{
  "prompt_type": "photorealistic_reference_reconstruction",
  "objective": "Recreate the supplied reference image as closely as possible as a clean vertical mirror-selfie photograph. Match the subject's pose, facial proportions, hairstyle, makeup, wardrobe, accessories, phone placement, bedroom environment, warm indoor lighting, crop, camera perspective, body positioning, and overall casual social-media aesthetic. Completely ignore and remove all text, icons, buttons, interface elements, arrows, borders, captions, watermarks, or other screen graphics.",
  "reference_fidelity": {
    "target": "extremely high visual similarity",
    "priority_order": [
      "overall composition and vertical crop",
      "subject position and body angle",
      "face shape and neutral expression",
      "hair",
      "mirror-selfie phone placement",
      "wardrobe",
      "jewelry and accessories",
      "warm beige bedroom background",
      "soft warm indoor lighting",
      "smartphone mirror-selfie realism"
    ]
  },
  "canvas": {"orientation": "portrait", "framing": "tight vertical mirror selfie"},
  "scene": {
    "location": "warm neutral bedroom or dressing room",
    "mood": "calm, intimate, polished, casual mirror-selfie",
    "visual_style": "authentic high-end smartphone social-media photo"
  },
  "photographic_style": {
    "genre": "casual mirror selfie / beauty lifestyle portrait",
    "realism": "extreme photorealism",
    "desired_result": "looks like a genuine high-quality phone mirror selfie"
  },
  "negative_prompt": ["text","captions","watermarks","UI","buttons","arrows","extra people","plastic skin","CGI","anime","deformed hands"],
  "final_generation_instruction": "Generate a single extremely photorealistic vertical mirror selfie matching the reference as closely as possible. Soft warm indoor lighting, natural smartphone HDR, realistic skin texture, authentic mirror-selfie perspective. Completely remove all interface graphics, text, arrows, borders, buttons, watermarks, captions, and other screen overlays."
}
【用法】上传参考自拍 → 整段 JSON 丢进 Image 2.5；完整超长版字段见原帖。上面是可跑精简母版，保构图/脸/衣装/手机位优先级。
```

  </details>

- **若隐若现短公式：逆光剪影×前景透映×主体槽** — 一行通配：极简逆光剪影 × 暧昧克制 × 前景透映 × 【主体】。看不完整反而让人补全——神话/古风/影视/职业都能往槽里塞，短词出系列。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2101856621471396270)
  <details>
  <summary>查看 / 复制提示词</summary>

```
极简逆光剪影 × 暧昧克制 × 前景透映 × 【主体】

逆光留下轮廓，前景制造朦胧，暧昧藏在距离和姿态里。

【玩法】神话/古代/影视角色/现实职业都能往【主体】里塞；同一视觉规则换主体=新故事。
```

  </details>

- **一张自拍→AAA角色设定表：可填槽母版** — 上传一张自拍，吐出三视图全身 + 两张大特写的 AAA 角色设定表，脸还是你的。母版把 [OBJECT]/材质/色比做成填空槽——人、怪、道具都能套，角色资产流水线直接抄。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2101762733679296944)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Using the uploaded reference as the design source, create ONE original [OBJECT, e.g. ceremonial revolver / antique brass diving helmet] as an ultra-high-end AAA cinematic 3D game prop sheet on a clean neutral off-white studio background. Keep the reference object's exact shape language, proportions and defining details, rebuilt as a production-ready hard-surface asset. Materials: [dark gunmetal, aged bronze, worn oxblood leather, composite]. Palette of 60% [MAIN], 30% [SECONDARY], 10% [ACCENT]. Surfaces carry honest wear — machining grooves, edge polish, scratches, carbon residue, oil staining, fingerprint patina.

COMPOSITION — one single wide 16:9 image. Left 60%: front view, 90-degree side view, and back or three-quarter view of the exact same object, identical in every detail. Right 40%: two large close-up detail studies — upper right the primary mechanism or face of the object, lower right a secondary detail such as grip, hinge, engraving or interior. Clean professional spacing with empty background between studies.
```

  </details>

- **古风贵女美妆：翠影流金结构化中文提示词** — 主题/身份/妆感/五官/发饰/服装/场景/镜头/画幅一条龙——翡翠绿明制袄对胭脂水光唇，杂志感近景不戏装。美妆种草竖版直接填槽返图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2101694894813372638)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题风格： 古风高对比贵女美妆写真
身份气质： 高门贵女，华丽、自信、矜贵、张力强
妆感目标： 翡翠胭脂鎏彩妆
五官方向： 高级杂志感东方美人脸，修长眼型，眉眼清晰，面中立体，唇形丰润，近景极上镜
发型与发饰方向： 黑发端庄高髻，翡翠玉簪、鎏金花片、珍珠短流苏
服装方向： 翡翠绿色明制立领袄，搭配象牙白马面裙与胭脂红窄边云肩
场景方向： 白玉屏风 / 红梅枝 / 青瓷摆件 / 明亮侧窗光
镜头方向： 胸像近景，正面端坐，头部轻偏
画幅比例： 9:16
创意自由度： 开放
补充要求： 妆容以胭脂红、暖棕和浅金珠光为主，唇妆使用清透红豆沙水光唇；翡翠绿服装与红色妆容形成明显对比，但肤色保持干净明亮。人物珠圆玉润、气场鲜明，避免戏曲妆感。
```

  </details>

- **GTA VI 双人角色圣经表→Seedance 短片** — Image 2.5 先出 Lucia & Jason 对半分屏角色圣经表（水彩色块 + 中置 Logo + 枪械英雄构图），再整表喂 Seedance 2.5 出动作短片。开放世界角色资产→成片一条链。 [@TechieBySA](https://x.com/TechieBySA) · [原帖](https://x.com/TechieBySA/status/2101678764358762621)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium cinematic character bible sheet for LUCIA & JASON. Use uploaded character sheets as strict visual reference for both characters. Do not change either's appearance.

LAYOUT: Split screen partner format. Two halves divided by a bold dramatic dividing element in the center.

LEFT SIDE — LUCIA: Coral pink and turquoise watercolor splash behind her fading into center. Large bold brushstroke text LUCIA top left in coral pink. Below small text: THE RISK / VICE CITY. One massive dramatic cropped hero image of Lucia from mid-thigh up — tight white crop top, very short denim shorts, gold hoop earrings, gold chain necklace, black duffel bag over shoulder with cash spilling out, gun raised, fearless confident expression locked toward the center.

CENTER: Bold dramatic GTA VI logo in deep black, slightly worn and cinematic. Below it small text: VICE CITY. ONE JOB. NO MERCY.

RIGHT SIDE — JASON: Golden yellow and hot orange watercolor splash behind him fading into center. Large bold brushstroke text JASON top right in golden yellow. Below small text: THE MUSCLE / VICE CITY. One massive dramatic cropped hero image of Jason from mid-thigh up — dark olive tropical shirt open at chest, dark shorts, silver watch, black duffel bag over shoulder with cash spilling out, gun raised, calm dangerous expression locked toward the center.

BOTTOM CENTER: Color palette — coral pink, turquoise, golden yellow, hot orange, white. Tagline centered: WELCOME TO VICE CITY.

OVERALL: Clean white background, watercolor splashes per side, bold dramatic GTA VI center divider, bold flat color blocking, chunky simplified forms, hard edge shadows, thick black outlines, vibrant saturated colors, minimal clean typography, cinematic cel-shaded 3D anime, hand-painted textures, not cartoon not Disney not Pixar, print ready.

【成片】再把角色表喂 Seedance 2.5 出动作短片（原帖同串）。
```

  </details>

- **身份锁潜行喜剧：Image2.5+Seedance on Higgsfield** — 一张上传照死锁主角脸与衣装，再喂 Seedance 2.5 跑 30s 办公室潜行物理喜剧（HUD + 韩语对白）。CHARACTER LOCK 优先于剧情——短片管线里「别换脸」怎么写死，看这一帖。 [@oggii_0](https://x.com/oggii_0) · [原帖](https://x.com/oggii_0/status/2101592948148502928)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Made with Seedance 2.5 + GPT Image 2.5 on Higgsfield

Use exactly 1 uploaded image: @Image1.

CHARACTER LOCK HIGHEST PRIORITY
@Image1 is the ONLY reference for the lead. Preserve exact visible face, identity, facial proportions, skin tone, body proportions, hair color/style/length/bangs/accessories, clothing, shoes, and visible accessories. She must look like the same real adult woman filmed again.
No face swap, duplicate, plastic/AI skin, anime, CGI, or 3D appearance. Do not change hairstyle, hair color, outfit, or accessories.

30 seconds | 16:9 | native 4K | 24fps | hyper-realistic live-action third-person gameplay with GTA-style English HUD and natural Korean dialogue only.

Keep supporting characters completely distinct (faces, ages, bodies, outfits). One continuous office floor route. Exactly one hard cut near the end. No BGM / subtitles / narration / watermark.

完整 30s 办公室潜行喜剧分镜、HUD 与物理约束见原帖长文。
```

  </details>

- **写真→水彩墨线涂鸦：构图死锁风格重绘** — 上传参考锁构图/姿势/叙事，整图改成童趣水彩墨线速写：颤抖线压、克制色块、速写本留白。种草图变插画封面的可抄 must-stay 配方。 [@MahnoorAi12](https://x.com/MahnoorAi12) · [原帖](https://x.com/MahnoorAi12/status/2100943841427914827)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded image as the primary reference. Preserve the exact overall composition, subject placement, pose, proportions, camera angle, and visual storytelling of the reference image.

Transform the photograph into a charming minimalist hand-drawn watercolor-ink doodle illustration. Keep the large tree, seated girl, acoustic guitar, flowing skirt, surrounding grass, and natural background recognizable, but simplify them into playful, naive, childlike illustrated forms.

Use loose black/brown brush-pen outlines with subtle wobble, uneven line pressure, spontaneous imperfect strokes, and organic hand-drawn contours. Add delicate watercolor washes in muted earthy greens, warm browns, soft beige, pale blue, and gentle cream tones. Keep colors restrained and slightly transparent, with visible watercolor texture and natural pigment variation.

Simplify facial features into tiny expressive details while retaining the girl's relaxed pose and peaceful mood. Render the guitar with simple charming shapes and minimal details. Turn the tree bark, foliage, grass, and flowers into sparse sketchy marks rather than realistic textures.

Create a warm handmade sketchbook aesthetic: off-white textured paper, generous clean negative space, whimsical little botanical marks, tiny leaves and subtle decorative doodles, imperfect watercolor edges, occasional ink splatters, and an authentic artist-drawn feeling.

Avoid photorealism, excessive detail, heavy shadows, 3D rendering, glossy digital effects, perfect geometric lines, or polished vector-art edges. The final image should look like a delicate artist's notebook illustration made by hand with ink and soft watercolor, while clearly retaining the composition and character of the uploaded reference image.
```

  </details>

- **Image 2.5 角色表 → Seedance 办公室潜行片** — 迟到上班做成潜行游戏：先用 GPT Image 2.5 定角色表，再 Seedance 多机位运动仍锁脸。角色一致性跨灯位/运镜的成片链路可抄。 [@VeoStudioEg](https://x.com/VeoStudioEg) · [原帖](https://x.com/VeoStudioEg/status/2100930165165478351)

- **身份锁 iPhone 露台 UGC：浴袍晨光完整 prompt** — 参考图 1:1 锁脸发色，iPhone 好友抓拍感 9:16：藤椅、白浴袍、晨雾花园。种草/生活方式竖版直接抄，别再假精修棚拍。 [@mehvishs25](https://x.com/mehvishs25) · [原帖](https://x.com/mehvishs25/status/2100929941147664748)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Preserve appearance and hair color 1:1 according to the reference.

Photorealistic amateur photo taken on iPhone by a friend, 9:16, framed to the hips. The girl sits on the left in a wicker chair on the terrace, legs tucked to the side. She holds a white cup with both hands near her chest and looks to the side, calm and relaxed.

She is wearing a white terry-cloth bathrobe with a loosely tied belt, sleeves rolled up, and cream ribbed socks. Hair is gathered into a messy high bun, with loose strands around the face and neck. Clean-girl makeup: natural skin with pores and a slight glow, cool blush, laminated brows, mascara, and moisturized lips. Thin gold chain, small stud earrings, short natural manicure.

On the wicker side table: a glass teapot, a book, and a phone face-down. To the right, a sharp autumn garden in morning mist is visible, along with wooden railings, decking, and a second chair. Cold diffused morning light, steam from the drink, dew, realistic terry-cloth and wicker texture. RAW, light grain, no retouching or background blur.
```

  </details>

- **盛唐古典美人：国风超写实中文竖版提示词** — 夜色花亭、唐风广袖、金凤冠与海棠落瓣，冷青夜雾+暖金眼神光。明确成年东亚美人近景，国风人像 KV 中文 prompt 一次抄完。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2100928200243363943)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 竖版国风超写实 CG 肖像，盛唐审美融合东方写意。一位明确成年的东亚古典美人站在夜色花亭中，采用胸上至腰际的近景构图；身体正面略偏右，头部抬向画面左上方，眼神凝望落下的花瓣，不看镜头。她拥有冷白透亮的皮肤、自然精致的凤眼和清秀鼻梁，眼底有淡淡水光，胭脂唇微微张开，神情像欲言又止。服装为珊瑚粉与鎏金相间的唐风广袖襦裙，柔软领口自然衬托锁骨，肩头披着轻薄金纱；头戴珍珠与粉色宝石组成的金凤冠，长流苏随转身轻摆。她一只手伸向空中的海棠花瓣，另一只手压住被风吹起的披帛。背景仅保留虚化花枝、亭柱和冷青夜雾，暖金灯光从左前方照亮眼睛与指尖，冷蓝月光形成侧后轮廓。85mm，f/1.6，浅景深，低饱和珊瑚粉、金色与蓝灰色，柔焦辉光和细颗粒增强宿命般的情绪。
```

  </details>

- **真人 × 动漫壁画：室内生活方式完整 prompt** — 写实女生叠进红墨 anime gunslinger 墙绘，接触阴影与透视写死。真人遇二次元生活方式竖版可直接抄长 prompt。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2100894615985648037)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an ultra-realistic cinematic lifestyle photograph of a young woman standing indoors in front of a large hand-drawn anime-style wall mural.

The background features a dramatic red-and-white monochrome illustration of a mischievous anime gunslinger character wearing a large cowboy hat, round spiral goggles, a hooded jacket, utility belt, and boots, pointing a revolver toward the viewer. The illustration is drawn like a giant concept sketch directly on a white wall using deep red ink, with visible pencil construction lines, arrows, stars, geometric boxes, spiral symbols, question marks, and handwritten design notes. Add the handwritten word "VIBIN" in red on the right side.

The real woman stands naturally in front of the mural, partially overlapping the illustrated character, creating a seamless real-life-meets-anime composition. She has shoulder-length dark brown slightly wavy hair, natural facial features, subtle makeup, and a calm confident expression while looking directly toward the camera.

She wears an oversized white cropped sweatshirt with long loose sleeves, high-waisted loose-fit faded charcoal gray jeans, and a black studded belt with silver hardware. Her posture is relaxed and slightly leaning to one side, with one hand hanging naturally beside her body.

Make the woman completely photorealistic with realistic skin texture, natural hair strands, accurate anatomy, realistic fabric folds, subtle shadows, and natural indoor lighting. The illustrated character remains clearly hand-drawn with bold red linework and sketch details.

Use realistic perspective so the woman appears physically standing directly in front of the wall artwork. Add natural contact shadows around her body and feet. The red illustration should visually wrap around the composition without looking digitally pasted on.

Vertical full-body composition, fashion photography aesthetic, slightly low camera angle, realistic indoor gallery lighting, high detail, sharp focus on the woman, detailed wall artwork, cinematic depth, natural colors, photorealistic, 4K, editorial photography.

Aspect ratio: 9:16

Negative prompt: distorted face, extra fingers, extra limbs, bad anatomy, duplicate person, cartoon woman, plastic skin, blurry face, unnatural pose, floating body, incorrect perspective, poorly drawn hands, excessive makeup, text errors, warped clothing, low resolution, oversaturated colors, artificial lighting, messy background.
```

  </details>

- **真人与铅笔素描同框：墙上 2D 互动肖像** — 粉发真人举手「发生啥了」+ 同姿态石墨线稿画在白墙上、局部叠进真人。反差编导人像可抄，完整英文 prompt 在帖内。 [@Shorelyn_](https://x.com/Shorelyn_) · [原帖](https://x.com/Shorelyn_/status/2100881011760619670)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an ultra-realistic creative portrait of a young woman standing indoors against a clean white wall, seamlessly interacting with a large hand-drawn black-and-white pencil sketch of her standing beside her.

The real woman stands on the right side, wearing an oversized black distressed sweatshirt, loose dark cargo-style jeans with stitched panel details, and black-and-white canvas sneakers. She has long straight pastel pink hair and a playful, slightly surprised smile, looking directly at the camera. Her arms are raised outward with both palms facing upward in a cute "what's going on?" pose.

Behind and slightly to the left of her, create a large expressive hand-drawn pencil sketch version of the same woman. The sketch should closely match her pose, proportions, hairstyle, facial expression, clothing silhouette, and hand positions, drawn with loose rough graphite strokes, visible cross-hatching, imperfect lines, and an authentic notebook-sketch aesthetic.

Make the sketch appear physically drawn directly onto the wall, with parts of the sketch slightly overlapping the real woman to create a surreal 2D-to-3D interaction. Add playful hand-drawn doodles around the sketch, including stars, hearts, motion lines, small circles, and expressive marks.

Minimal white studio background, soft natural lighting, subtle floor shadow, realistic skin and fabric texture, detailed hair strands, authentic photography, strong contrast between the monochrome pencil drawing and the colorful real person, whimsical editorial photography, clever visual storytelling, seamless integration, highly detailed, photorealistic, vertical composition, 4:5 aspect ratio.
```

  </details>

- **自拍身份锁 + 手里捏黏土自己：渔港双版本** — primary identity reference 保脸，本人抱着同脸手工黏土玩偶站在日本渔港。UGC 锁脸又不无聊——「真人 + 纪念品自己」一套公式。 [@MrDasCreates](https://x.com/MrDasCreates) · [原帖](https://x.com/MrDasCreates/status/2100858381636624418)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded portrait photo as the primary identity reference. Preserve the person's recognizable facial identity as accurately as possible, including face shape, apparent age, hairstyle, eyebrows, eyes, nose, mouth, jawline, skin tone, expression, and overall character.
Create a cinematic, photorealistic 4:3 portrait scene on a quiet early-morning fishing pier in a small Japanese coastal town. Show the same person from the uploaded photograph standing on weathered wooden planks beside a wooden crate, with calm gray-blue water, moored wooden boats, hanging fishing nets, mist over the harbor, and distant tiled-roof houses fading into fog.
The person should be clearly visible and photographed realistically, wearing a simple dark jacket or knit sweater. They hold a handmade clay doll of themselves toward the camera with both hands.
The doll is a small, slightly exaggerated artisan clay figurine of the same person, sculpted in the style of a charming Japanese folk toy or tourist souvenir. It should look handmade from matte clay, with visible fingerprints, tool marks, and a slightly imperfect surface. Keep it clearly recognizable as the same person.
Push the doll's features theatrically: oversized head, big expressive eyes, a comically large nose or grin, simplified body, wild hair or hat shape, and a playful pose. Keep it cute, humorous, and artistic rather than grotesque. The doll can wear a tiny version of similar clothing and stand on a small rustic wooden or clay base.
Important: clearly show both versions in a single image: the real, photorealistic person and the clay doll version of the same person in their hands.
Use soft overcast morning light, high detail, natural skin texture, believable hands holding the figurine, a calm harbor atmosphere, and a vintage Japanese seaside souvenir feel.
```

  </details>

- **Cosplay 衣装按类可换：PROTECTED 哥特整套模板** — 外套/胸衣/短裙/腿甲/靴/手套/护颈——每件写成不可变身份，再只改穿法与层叠。MoodLock 换装系列继续发糖，完整长 prompt 在帖内。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2100857652494692508)
  <details>
  <summary>查看 / 复制提示词</summary>

```
PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. If source prose omits or misclassifies a component required by an explicit selection, that selection corrects only that component. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Wardrobe:

Outerwear / layers: An asymmetric white-and-ash-gray long-pile fur mantle with a high, dramatically flared collar of layered pointed tufts around the neck and shoulders. The wearer's left side expands into a heavy pelt that falls outside the arm and down the flank nearly to the ankle, tapering into long irregular wisps; the right side remains a short shoulder drape ending over the upper arm. The fur has pale tips, smoky gray roots and a coarse, windswept texture. A concealed leather shoulder yoke, dark flexible lining and a small hidden front hook support the sleeveless construction while leaving the center front open.

Top: A black leather longline corset top with rounded sculpted bust cups, a narrow vertical center bridge and curved riveted seams highlighted by worn pewter trim. Its fitted front narrows sharply through the waist, with layered diagonal leather reinforcements and a pointed high-hip hem. Large side cutouts lead into an open back built from broad crossed leather straps, adjustable buckled underarm bands and a narrow reinforced spine panel, leaving generous geometric spaces between the straps. An elongated silver-gray blade ornament with a deep red inset sits on the upper spine, and a smaller matching ornament marks the underbust. Dark-silver chain swags drape beneath the cups and descend in a V toward the front waist. The leather has a restrained satin sheen, fine creasing and dark stitched edges, with lining confined to the solid panels.

Bottom:

High-cut black armored briefs with a close-fitting, full-seat leather-look base and sharply angled leg openings. Overlapping downward-pointing gunmetal V plates reinforce the upper front above a smooth curved crotch panel, with a fine central seam, worn silver edges and restrained dark-red accents at the plate junctions. A narrow fitted waistband and concealed side zipper complete the separate garment, while flexible black backing continues across the seat.

A gothic utility overskirt suspended from a broad black leather belt reinforced with silver-edged polygonal gunmetal plates, crimson insets and a pointed red shield-shaped center buckle. Three overlapping tiers of paired, shallow box pouches cover the left hip, with silver-bordered flaps, small red fastening tabs and concealed snaps; slimmer pouch-and-tasset strips hang over the right hip. Riveted straps and pointed metal tips extend below the storage panels. Long, narrow crimson and charcoal fabric tails fall from beneath the belt around the sides and back, leaving the center front open, with irregular holes and deeply shredded hems reaching the lower calves and ankles. A broader charcoal rear tabard has a ragged pale-gray underlayer exposed at its pointed lower edge. Two long metal-link chains frame this rear panel, a finer chain drapes between them, and angular ferrules with dark-red pointed ends finish the hanging hardware.

Final worn state:
For the second item description above only:
- Garter placement: Wear exactly two physical garters or thigh bands, one level around each corresponding thigh at matching height and orientation. Preserve the registered pair identity, closures, straps, and ornaments. Do not add, omit, merge, mirror, duplicate, twist, or move either member to a knee, calf, or ankle.

Legwear: A pair of blackened-metal leg guards with pointed front thigh plates supported by buckled lower-thigh bands and crossed leather straps behind the thighs, leaving large side and rear openings. Faceted red-and-black knee crests project forward between silver-edged lateral pivot plates. Overlapping scale-shaped armor encloses the calves, flowing into long raised shin ridges that narrow toward the ankles. Thin crimson channels, small red fasteners and worn silver outlines trace the articulated geometry. Flexible backing beneath the plates and concealed overlapping rear-calf closures complete the fitted guards.

Footwear: A pair of black armored ankle boots with thick segmented forefoot platforms, broad faceted closed toes and tall tapered block heels separated from the soles by deep arch openings. Overlapping gunmetal plates cover the toes and insteps, outlined by rubbed silver edges and narrow crimson accents. Raised ankle cuffs flare into black-and-red blade fins with triangular silver tips and round red pivot studs. Reinforced heel counters carry small amber rectangular inserts above long crimson heel channels. Concealed inner-side zippers, dark leather backing, soft lining and textured rubber sole pads complete the boots.

Gloves: A pair of articulated black leather arm-armor assemblies extending from buckled upper-arm bands to full-finger gloves. Red circular hubs sit in square bicep plates above silver-edged upper-arm segments, flexible elbow joints and long tapered forearm shells. Pointed lateral fins, silver kite-shaped inlays and crimson channels accent the dark metal. The left outer forearm carries an additional slim rectangular housing with a raised red border and a flush dark lid. Overlapping hand and finger plates have small red knuckle nodes, while flexible leather palms, inner adjustment buckles and articulated wrist sections complete the wearable construction.

Detachable collars / neck guards: A close-fitting blackened-metal gorget necklace on a black leather backing, built from articulated angular neck plates with worn pewter edges. Two raised front points flank a shallow central notch, below which a broad openwork heraldic ornament descends into a long spear-shaped chest point. A raised silver-gray central blade and hooked lateral arms frame two small ember-red stones against recessed black sections. The collar continues around the neck in matching segmented plates and closes with a small rear leather buckle.
```

  </details>

- **身份锁定时尚棚拍：STYLE / WARDROBE / POSE / LIGHTING** — 参考图锁脸锁体型，再拆 STYLE / WARDROBE / POSE / LIGHTING / CAMERA 分段写死。高定棚拍可抄完整英文 prompt，别让模特变成路人。 [@shushant_l](https://x.com/shushant_l) · [原帖](https://x.com/shushant_l/status/2100827183468237189)
  <details>
  <summary>查看 / 复制提示词</summary>

```
high-end Fashion Portrait of the exact person shown in the attached reference image.

Preserve the person’s facial identity, facial structure, skin tone, hairstyle, hairline, eyes, nose, lips, jawline, body proportions, and recognizable features as accurately as possible. Do not change their identity or make them look like a different person.

STYLE:
Luxury editorial fashion photography, contemporary menswear campaign, sophisticated, stylish, confident, premium magazine aesthetic, modern and aspirational.

WARDROBE:
Dress him in an impeccably tailored modern outfit, such as a structured designer jacket over a minimal premium shirt, perfectly fitted trousers, subtle luxury accessories, and refined styling. Keep the clothing elegant, masculine, minimal, and fashion-forward.

POSE:
Confident fashion-model pose, relaxed shoulders, strong posture, natural body language, looking directly into the camera with a calm and composed expression. Make the pose feel effortless rather than overly staged.

LIGHTING:
Professional fashion studio lighting with a large soft key light, subtle fill light, controlled shadows, beautiful facial definition, soft highlights on the skin and clothing, realistic skin texture, and premium editorial lighting.

BACKGROUND:
Minimal luxury studio backdrop with clean architectural simplicity, subtle depth, sophisticated neutral tones, and no distracting objects.

CAMERA:
Shot on a professional full-frame camera with an 85mm portrait lens, shallow depth of field, sharp focus on the eyes and face, natural perspective, realistic optical characteristics, high dynamic range, and detailed fabric textures.

COMPOSITION:
Waist-up fashion portrait, subject centered or slightly off-center, clean negative space, strong editorial composition, premium magazine campaign framing.

AESTHETIC:
Photorealistic, cinematic, sophisticated, masculine, contemporary, elegant, clean, editorial, high-fashion, premium, realistic skin pores and texture, natural facial details, subtle professional color grading.

Avoid plastic-looking skin, excessive retouching, exaggerated muscles, distorted anatomy, artificial facial features, oversaturated colors, excessive accessories, unrealistic lighting, cartoonish details, text, logos, and watermarks.

The final image should look like a real photograph from a premium international fashion editorial while clearly remaining the same person as the attached reference image.
```

  </details>

- **韩系时尚双变体：同一身份两套 editorial** — 同一东亚女性身份锁死，出两张匹配的韩系高定写真变体；完整 SUBJECT/风格英文 prompt 可抄。系列时尚片别换脸。 [@AIwithWania](https://x.com/AIwithWania) · [原帖](https://x.com/AIwithWania/status/2100823515230531608)

- **玻璃肤双机位：低角度特写 + 平视侧脸** — 同一玻璃肤妆面，低角度特写与平视侧脸两套机位对照。妆造锁定、机位换汤不换药——美妆种草分镜可抄。 [@MahnoorAi12](https://x.com/MahnoorAi12) · [原帖](https://x.com/MahnoorAi12/status/2100817314837057912)

- **中文两套可抄：棚拍人像 / 户外自然光** — 别再用「好看一点」糊弄人像——棚拍硬光与户外自然光两套中文提示词直接开抄，适合种草人像与虚拟 IP 试妆。 [@gaoren7716](https://x.com/gaoren7716) · [原帖](https://x.com/gaoren7716/status/2100792989979447646)

- **金发角色 7 场景身份锁：参考表出片** — 一张已发布参考表钉死金发角色身份，跨 7 场景重跑仍是同一个人、换一张新照片。站内附完整 prompt，角色一致性教科书。 [@alosemhq](https://x.com/alosemhq) · [原帖](https://x.com/alosemhq/status/2100785778431611137)

- **头像→吉祥物连体衣：身份锁换装 prompt** — 把 avi 锁成唯一身份权威，再套进受角色设计启发的 mascot suit；脸型/眼色/比例写死。粉丝二创 / OC 周边出图模板。 [@NachtNovaAI](https://x.com/NachtNovaAI) · [原帖](https://x.com/NachtNovaAI/status/2100781932413952315)

- **Grok bot 手绘形象：贴帖链接 + 接 Codex 用 Image 2.5** — 把示范帖丢给自家 Grok bot，让它手绘 bot 形象；记得先接 Codex 才能走 Image 2.5。宠物试手也行——虚拟助手形象一条龙。 [@KinGao476942](https://x.com/KinGao476942) · [原帖](https://x.com/KinGao476942/status/2100776158329733480)

- **数字人素材链：Image 2.5 出图 + Seedance/MiniMax 出视频** — 图用 GPT Image 2.5，视频用 Seedance 2.5 或 MiniMax X3——礼物触发独舞/捏脸表情可指定。直播数字人从静帧到运镜的现成拼法。 [@yhslgg](https://x.com/yhslgg) · [原帖](https://x.com/yhslgg/status/2100753294025261329)

- **耳环手镯可替换槽：PROTECTED 服饰配件模板** — 服装身份用 PROTECTED WARDROBE RULE 锁死，耳环/手镯当可换槽——加一对银环精致度直接爆。穿搭配件模块化可抄。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2100727256129941733)
  <details>
  <summary>查看 / 复制提示词</summary>

```
PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. If source prose omits or misclassifies a component required by an explicit selection, that selection corrects only that component. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Wardrobe:

Outerwear / layers:

An oversized dark chocolate-brown leather flight blouson with a worn semi-gloss finish, fine grain and soft irregular creasing. Its hip-length body has dropped shoulders, a broad pointed fold-down collar and a full silver-tone metal front zipper. A narrow horizontal welt pocket sits on the left chest, diagonal welt pockets open at both lower sides, and a rectangular utility pocket with a vertical zipper is sewn onto the left upper sleeve. Horizontal panel seams divide the lower body and sleeves. The roomy sleeves end in broad leather cuffs with snap adjustment, while a matching leather waistband gathers elastically at the sides and back. The back continues the brown panel construction over a smooth dark lining.

Final worn state:
- Layering: Final state: keep this garment the complete outer layer over the first selected Top item; open only its original center-front fastening run within existing endpoints. Preserve source neckline, collar, front/rear panels, selected shoulder, sleeve, and body positions, plus fastening inventory, receiver mapping, order, spacing, endpoints, and placket length; add, remove, move, or extend nothing. ZIPPER FINAL STATE — Move the only original slider down to the original bottom stop; separate the original teeth throughout only the existing zipper track. Its complete source span remains exactly between the source-defined top stop and bottom stop. Keep the original zipper tape, teeth, slider, top stop, bottom stop, and narrow front opening at that exact length and anatomical level. Below the original bottom stop, the center-front fabric remains one continuous non-zipper panel; no seam, rib, fold, or edge becomes zipper track. Add, duplicate, remove, or relocate no zipper part. Only layer order, contact, occlusion, and optical transmission change. Every visible garment boundary follows the outer item's source geometry or separately selected fold-return line; inner contours remain optically behind it. Keep panel contact shallow. Relaxed handling within this same operation: Use light stable contact and broader material-correct ease without changing the selected layer order.

Top:

An oversized long crew-neck pullover in thick, loosely knitted mohair-blend yarn with a soft shaggy halo and visible stockinette stitches. The straight relaxed body reaches the upper thighs, with dropped shoulders and roomy long sleeves. Ten broad horizontal bands alternate baby pink and ivory across the torso in approximately equal widths, starting with a baby pink band interrupted by the neckline and ending with ivory at the hem. The same stripe scale continues around the back and along the sleeves, with softly feathered color boundaries. A baby pink ribbed crew neck, ivory ribbed cuffs and a broad ivory ribbed hem finish the knit.

A relaxed brown woven shirt with a soft pointed turn-down collar, a full center-front button placket and long sleeves finished with simple button cuffs. The smooth opaque fabric has a light, softly crisp drape, with a roomy straight body extending below the hips into a gently curved shirttail hem. A back shoulder yoke and small central pleat provide ease, while small matching brown buttons keep the finish understated.

Final worn state:
For the second item description above only:
- Layering: Final state: place this garment underneath the first selected Top item across the upper body. the first selected Top item remains the outer garment and retains and owns its exact source neckline aperture and edge, armholes, panel connectivity, closure state, straps, sleeves, and selected final hem or fold-return line. This inner garment contributes appearance only through the outer material's existing optical apertures; no inner contour becomes an outer boundary. Only layer order, contact, occlusion, and optical transmission change. Every visible garment boundary follows the outer item's source geometry or separately selected fold-return line; inner contours remain optically behind it. Keep panel contact shallow. Natural handling within this same operation: Use soft stable contact with limited material-correct ease.

Bottom: Plain ivory mini shorts in smooth compact woven fabric, with a close, clean fit through the hips and very short legs. A flat fixed waistband and concealed side zipper keep the upper section streamlined, while lightly curved, neatly finished leg openings maintain the simple silhouette. The front and back are unembellished.

Footwear: A pair of tall black engineer boots in smooth, softly lustrous leather, with roomy upper-calf shafts, broad rounded toes and a plain closed vamp. Three matching leather straps secure each boot at the upper shaft, midshaft and ankle, fastening with rectangular silver-tone pin buckles on the outer side; the lowest strap crosses the ankle above the shaped heel counter. The shafts have clean bound openings, plain rear seams and lined pull-on interiors. Thick black rubber soles have raised welt-like rims, substantial forefoot platforms, shallow arches and broad low block heels, with a practical tread underneath.

Earrings: A pair of large, slender silver-tone hoop earrings with smooth round-section tubing and completely open centers. The polished circular hoops hang beside the jaw with a light, minimal profile and no pendants or surface ornament. Small hinged posts close discreetly at the earlobes.

用法提示：服饰配件（耳环/手镯等）写成可替换槽位；PROTECTED WARDROBE RULE 锁死其余服装身份，只换配件即可爆改精致度。生成环境：ChatGPT Images 2.5
```

  </details>

- **女游戏 influencer 2×2：可复用 influencer_frame 模板** — 把 SUBJECT/SETTING/TIME/RIG/PLATFORM/INTENT 写成函数——改 INPUT 其余推导。假装手机摄影（景深伪影、美颜差分）一次写死，UGC 种草网格可抄。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2100581539008626771)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2x2 grid, 16:9, do this for 4 female gaming influencers with poses that steal your heart. // FN: influencer_frame(SUBJECT, SETTING, TIME, RIG, PLATFORM, INTENT)  // Edit INPUT only. Everything below derives.  INPUT   SUBJECT  = " $ subject"    SETTING  = "Ai infers"    TIME     = "Ai infers"   RIG      = SELF            // SELF | FRIEND | TRIPOD | MIRROR | DRONE   PLATFORM = IG_FEED         // IG_FEED | IG_STORY | TIKTOK | PINTEREST   INTENT   = "candid morning"   INFER :: RIG → geometry, gaze, and what the fiction is   SELF    → 23mm front, 45–60cm, face widened ~8%, lens ABOVE eye level,             chin foreshortened, gaze INTO lens, one arm's angle implied by crop   FRIEND  → 26mm rear, 1.5–3m, correct proportion, eye level, gaze into lens,             full body possible, environment legible   TRIPOD  → 26mm, 2–4m, gaze deliberately AWAY (the candid fiction), body             squared to a mark on the ground, static pose held for a burst   MIRROR  → phone IN FRAME, screen glow on face/hands, gaze at reflection NOT             lens, room reversed, fingerprints on the glass   DRONE   → 24mm from above, subject small, the LOCATION is the subject  INFER :: SETTING + TIME → light class → computational behavior   interior_backlit  → HDR stack: window keeps detail, never clips; edge halo   golden_hour       → warm, long shadows, veiling flare, lifted blacks   overcast          → flat, cool, low contrast, no shadow direction   night_artificial  → night mode: multi-second stack ⇒ anything that moved                       ghosts; shadows unnaturally lit; grain scrubbed to plastic   harsh_noon        → HDR fights it: raccoon shadows lifted, skin looks flat  INFER :: PLATFORM → container   IG_FEED  = 4:5,  1080px ceiling, mild re-encode   IG_STORY = 9:16, safe zones top/bottom kept empty   TIKTOK   = 9:16, heavier compression, saturation pushed   PINTEREST= 2:3,  text overlay space reserved  DERIVE :: always, regardless of input   D1 synthetic depth ⇒ mask errors mandatory: one hair-gap filled with blur,      a ~2px halo at the shoulder, blur bucketed by depth not continuous   D2 beauty pass ⇒ cheeks poreless WHILE lashes/brows stay razor sharp   D3 grade ⇒ blacks lifted to ~12/255 with cyan bias, nothing pure black   D4 INTENT ⇒ props staged: labels rotated to camera, food untouched,      "unnoticed" objects squared to the table edge  FORBIDDEN   ✗ true optical bokeh falloff        ✗ clipped white window   ✗ uniform skin sharpness            ✗ pure black   ✗ DSLR micro-detail at 1080         ✗ genuine unawareness of the camera  RENDER  // resolve every {slot}, emit prose only   {PLATFORM.aspect} phone photo. {SUBJECT} at {SETTING}, {TIME}.   {RIG.geometry_prose}. {light_class.prose}. Background blurred the artificial   way phones do it, with {D1}. {D2}. {D3}. {D4}. Slightly soft at 1080px.  AUDIT   window_luma_max < 250 · cheek_highfreq << lash_highfreq   ≥1 segmentation halo · black_point > 8/255 · gaze matches RIG
```

  </details>

- **自拍→GTA6 开放世界角色：人脸身份锁前后对照** — 上传真人自拍，锁脸/身体/脏衣/疲惫表情，抽成犯罪开放世界插画角色。身份锁换皮一句话公式，附西语短 prompt。 [@gptzone_net](https://x.com/gptzone_net) · [原帖](https://x.com/gptzone_net/status/2100544372714741960)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Convierte a este hombre en un personaje ilustrado de un videojuego criminal de mundo abierto estilo GTA 6. Mantén su cara, cuerpo, ropa sucia y expresión de cansancio.
```

  </details>

- **TARGET主图+REFERENCE身份锁：拼贴全格换脸** — 主图锁发型/服装/撕纸拼贴布局，参考图只迁脸。多格 scrapbook 身份替换公式写死，个人品牌拼贴改脸可抄。 [@warraich_Ai2](https://x.com/warraich_Ai2) · [原帖](https://x.com/warraich_Ai2/status/2100532000042140040)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an image using the uploaded TARGET IMAGE as the exact master reference and the uploaded REFERENCE PHOTO as the identity reference.

Replace the face identity of the main woman with the woman from the REFERENCE PHOTO.

IMPORTANT — IDENTITY ONLY:
Use the REFERENCE PHOTO only to transfer the woman's facial identity: face shape, eyes, eyebrows, nose, lips, cheeks, jawline, skin texture and natural facial proportions.

Keep the TARGET IMAGE's hairstyle and messy bun, hair arrangement, body, physique, clothing, brown satin shirt, cream wide-leg trousers, brown belt, necklace, shoulder bag, poses, hand positions, expressions, accessories, and overall styling exactly as shown.

The entire scrapbook collage must remain the same:
- Same central full-body woman
- Same surrounding photo cutouts
- Same realistic and cartoon/chibi versions
- Same poses and expressions
- Same torn-paper collage layout
- Same tape pieces
- Same handwritten text and notes
- Same hearts, stars, flowers and decorative elements
- Same cat
- Same background, colors, textures and vintage beige/brown aesthetic
- Same composition, framing and aspect ratio

Apply the new woman's face naturally to EVERY realistic and illustrated appearance of the woman throughout the collage, while maintaining the appropriate style of each individual image.

Do not copy the reference woman's hairstyle, clothes, body, pose, background or accessories.

Make the face replacement seamless and natural in every panel. Match each panel's lighting, angle, expression, skin tone, shadows, perspective and image style.

FINAL RULE:
TARGET IMAGE = everything.
REFERENCE IMAGE = face identity only.
Change nothing else.
The final result must look like the original TARGET IMAGE, with only the woman's facial identity replaced by the woman from the reference photo.
```

  </details>

- **日间高光CCD滨水通勤：结构化中文生活照** — 水上巴士站 / 玻璃候船亭 / 蓝绿河面，珊瑚橘上衣 + 清亮 CCD 槽位全写死。liyue 系列又补一张滨水通勤，小红书生活方式直接返图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2100528879521980501)
  <details>
  <summary>查看 / 复制提示词</summary>

```
摄影风格：日间清亮高光CCD生活照风
写真方向：滨水通勤生活写真
场景方向：城市水上巴士站 / 白色浮动站台 / 玻璃候船亭 / 蓝绿色河面 / 城市桥梁远景
服装方向：珊瑚橘色方领修身短袖上衣 + 浅灰白包臀超短裙
气质标签：明亮、都市、松弛、约会感、精致
五官方向：温柔电影自然脸
身形方向：轻盈纤细
线条强调：强
镜头方向：大腿及上半身
姿态动作：靠近玻璃候船亭站立，一只手拿手机，另一只手自然垂落，视线从河面转向镜头
光线氛围：晴天自然光 + 河面反射光 + 白色站台形成清亮补光
滤镜效果：高亮清晰暖冷平衡CCD色彩 + 干净高光 + 明亮中间调 + 轻颗粒
画幅比例：9:16
补充要求：珊瑚橘鲜亮但不荧光，蓝绿水面负责制造清透感；整体更像都市周末出行，不要旅游宣传照，胸部饱满，胸线明显。
```

  </details>

- **云端女友短标签：梦核 CCD 中文堆风格** — 「云端女友 × 漂浮城市 × 花瓣失重 × CCD彩色柔焦 × 盛夏天空梦核」——短标签堆风格，小红书式文案拆解直接能用。 [@chenlinspark](https://x.com/chenlinspark) · [原帖](https://x.com/chenlinspark/status/2100526173700653477)
  <details>
  <summary>查看 / 复制提示词</summary>

```
云端女友 × 漂浮城市 × 花瓣失重 × CCD彩色柔焦 × 盛夏天空梦核
```

  </details>

- **参照图→iPhone 实写真片感：写实跃迁短指令** — 日文作者用极短指令把参考图拉到「像手机随手拍」的自然写实。讲身份锁/实拍跃迁时拿来当开场 demo，附原帖日文 prompt。 [@sakisuta_](https://x.com/sakisuta_) · [原帖](https://x.com/sakisuta_/status/2100523713619992970)
  <details>
  <summary>查看 / 复制提示词</summary>

```
参照画像を元に、実写の写真を生成する。
iPhoneで撮影したようなリアルで自然な画像を作成する。
```

  </details>

- **韩系超市货架UGC：跟拍博主完整英文prompt** — 日系超市货架前、轻度遮挡的狗仔角 + Leica 胶片质感；韩系 Instagram 博主站姿与视线写死。UGC / 货架场景人像可直接改道具，附完整英文短 prompt。 [@BubbleBrain](https://x.com/BubbleBrain) · [原帖](https://x.com/BubbleBrain/status/2100522993277657438)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A Korean Instagram female influencer, fair-skinned beauty with a refined oval face, wearing a black oversized short-sleeve T-shirt on top and shorts on the bottom, standing in front of Japanese supermarket shelves and looking with interest at a vibrator. Slight foreground occlusion, paparazzi angle, 9:16, Leica film look with a slightly realistic texture.
```

  </details>

- **婚礼棚拍+奢品金冠徽章：上传照锁姿势配方** — 大理石楼梯白礼服西装 + 右下角金冠盾牌字母徽章。婚礼/个人品牌 editorial 一次出样，附完整英文 prompt。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2100497484472836181)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Add a small premium gold crown-and-shield monogram emblem in the lower-right corner featuring elegant initials such as “ABS”, designed like a luxury personal-brand crest.

Use the uploaded photo as the visual and pose reference and create a hyper-realistic full-body luxury fashion portrait of an adult man standing confidently on a modern white marble staircase.

Give him a clean low-cut haircut with a sharp natural hairline and make him completely clean-shaven — no beard, no mustache, no facial hair.

Dress him in an elegant white tailored tuxedo jacket with satin lapels, a crisp white pleated dress shirt, a black bow tie, fitted black formal trousers, and polished black leather dress shoes. Add a premium black-and-gold wristwatch and subtle rings. Finish the look with sleek dark rectangular sunglasses.

Recreate the relaxed sophisticated pose: standing midway on the staircase with one leg crossed naturally over the other, both hands lightly adjusting the front of the tuxedo jacket, shoulders relaxed, body facing forward, and a calm confident expression.

Set the scene inside a bright, high-end contemporary home with white marble stairs, black metal railings, tall floor-to-ceiling windows, white walls, a modern wall light, and a green indoor plant in the background. Allow soft natural daylight to enter from the side, creating realistic highlights and gentle shadows across the staircase and clothing.

Keep the composition clean, luxurious, and editorial with realistic skin texture, accurate body proportions, crisp fabric details, natural reflections on the shoes and sunglasses, professional fashion photography, shallow background separation, premium DSLR quality, ultra-detailed, photorealistic, 3:4 vertical aspect ratio.
```

  </details>

- **山茶花高定全身像：坐标构图中英结构化配方** — 把发顶/眼/腰/裙摆百分比写死，巨型粉白山茶花当光晕；正面高定不翻背影。时装 editorial 控形范本，附完整长 prompt。 [@listudio](https://x.com/listudio) · [原帖](https://x.com/listudio/status/2100494084700094611)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 676:1200 near-9:16 full-length cinematic couture portrait of a clearly adult East Asian woman, age 21, standing front-facing in a gentle three-quarter pose before one colossal fully opened powder-blush Chinese camellia. The composition is a refined studio fashion portrait with one complete standing figure, one gigantic flower halo, long wind-shaped chiffon, and a restrained monochromatic blush palette.

COMPOSITION — ABSOLUTE PRIORITY: show the complete figure from hair top to the entire pooled train. Position her slightly right of center, occupying about 82% of the canvas height. Hair top at 12% of frame height, eyes at 18%, shoulders at 27%, waist at 42%, fingertips at 55%, knees at 68%, train ending at 94%. Her face remains relatively small. Center the colossal camellia directly behind her head and upper torso; it spans roughly 82% of the canvas width and extends from the top edge to below her hips. Long chiffon ribbons sweep from her waist and skirt toward the open left third of the frame.

POSE — NON-NEGOTIABLE: this is not a back view, not an over-the-shoulder pose, and not a profile. Her sternum, the entire front of the pleated bodice, both collarbone lines, and the front waist construction must be clearly visible to camera. Rotate her torso only 20 degrees away from a straight frontal stance, with her left shoulder very slightly closer to camera and her right shoulder slightly farther back. Her weight rests on the rear leg and the opposite hip releases subtly. Her right arm hangs naturally along her right side with relaxed fingers; her left arm remains mostly behind the flowing skirt but must not pull the torso into a back view. Turn only her head toward camera-left in a restrained side glance while keeping the body front-facing.

Preserve a delicate oval face, softly tapered jaw and chin, subtle cheek volume, straight fine nose, natural rose lips, almond-shaped dark eyes, pale warm-neutral skin, dark-brown high bun, and loose tendrils. Preserve believable natural East Asian proportions with a 7.4-head figure, slender shoulders, moderately long torso, natural waist placement, natural hips, and realistically proportioned legs. Do not enlarge the head, stretch the body, lengthen the legs, shrink the waist, or exaggerate curves.

Dress her in a fully opaque pearl-blush silk-chiffon couture gown whose front construction is unmistakable: one narrow knotted strap on the camera-right shoulder, asymmetric diagonal neckline crossing the front chest, densely hand-pleated wrapped front bodice, shaped inner panels, fitted natural waist, and a very long floor-length skirt with a generous pooled train. Keep the back covered and visually secondary. Multiple translucent outer-chiffon streamers fly softly toward camera-left over an opaque lining. Fine vertical pleats run from waist to hem, producing a fluid column without unnatural height.

The flower is unmistakably a powder-blush Chinese camellia: concentric orderly rounded waxy petals with gently curled edges, a compact warm-pink center, and pearly translucency at the thin edges. No peony, rose, lotus, magnolia, red flower, green leaves, branches, garden, water, or landscape. Add only six to ten pale blush petals suspended in the air and a few soft petals on the studio floor.

LIGHT AND COLOR — ABSOLUTE PRIORITY: use only pearl blush, nude pink, shell pink, warm ivory, muted mauve-gray, and pale taupe. A large diffused upper-left key passes through a translucent scrim, softly backlighting the camellia and creating luminous petal edges. Broad frontal beauty fill keeps the face, collarbones, front bodice, waist pleats, and skirt clearly readable. Add a faint warm rim along hair and shoulder. Low contrast, lifted creamy shadows, soft highlight roll-off, subtle rose haze, refined matte editorial color. No golden sunset, orange cast, saturated red, green contamination, or dark dramatic shadows.

Use an 85mm-equivalent lens at waist-to-chest camera height with generous distance, mild long-lens compression and minimal perspective distortion. Neutral seamless warm rose-gray studio background, photoreal skin, hands, chiffon, contact shadows and subtle floor reflection, fine film grain, no text, logo, watermark, signature, QR code, or UI.
```

  </details>

- **浮窗云中肖像：身份锁超现实 editorial** — 参考图锁脸妆发衣着，人从悬浮复古窗探入积云；4:5 超现实时尚大片模板。换自拍就能出人设海报，附完整身份锁英文 prompt。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2100479875836706871)
  <details>
  <summary>查看 / 复制提示词</summary>

```
REFERENCE-BASED IDENTITY LOCK:

Use the uploaded reference image as the primary identity reference.
Preserve the person's exact facial identity, face shape, hairstyle,
skin tone, facial features, age appearance, and natural expression.

The subject can be male or female. Do not change the person's gender,
facial structure, hairstyle, or identity. Preserve the exact clothing
and outfit visible in the reference image, including colors, materials,
fit, and details. Do not add a turban, hat, or accessories that are
not present in the reference.

CREATIVE CONCEPT:

Create an ultra-realistic, surreal cinematic fantasy scene featuring
the reference person emerging through an old floating architectural
window suspended in the sky.

The subject is positioned naturally inside an elevated vintage window
with both weathered teal-blue wooden shutters opened outward.
The person leans slightly outside the window, extending one arm
gracefully into the surrounding clouds, creating a sense of freedom,
wonder, and dreamlike exploration.

ENVIRONMENT & WORLD BUILDING:

The entire window structure floats independently in an endless sky.
Massive, soft, voluminous white cumulus clouds surround the window,
partially wrapping around its frame and extending into the background.

The window features realistic aged wood, subtle weathering,
natural paint texture, detailed hinges, a deep interior opening,
and a slightly protruding lower window ledge.

The sky is an expansive, vibrant turquoise-blue with soft atmospheric
depth and scattered clouds at varying distances.

COMPOSITION:

Vertical 4:5 editorial composition.
The floating window and person are the central focal point.
Use a slightly low, eye-level cinematic perspective.
Create a balanced composition with negative space around the subject.
Clouds naturally frame the architecture without obscuring the face.

LIGHTING:

Bright natural daylight with soft diffused sunlight.
Realistic sunlight interacting with the clouds, window frame,
and subject's skin and clothing.
Natural shadows, subtle atmospheric scattering, and realistic
light reflections.

VISUAL QUALITY:

Ultra-photorealistic cinematic fantasy photography.
Extremely detailed skin texture, natural hair strands,
realistic fabric behavior, physically accurate cloud formations,
high-fidelity architectural textures, and authentic depth.

The final image should look like a premium surreal fashion editorial
photograph captured in a real floating environment, not a 3D render,
cartoon, or artificial composite.

CAMERA & OUTPUT:

Full-frame cinematic photography.
Natural perspective, realistic depth of field, high dynamic range,
professional editorial composition, and refined tonal balance.

Ultra-HD detail, 16K-quality visual fidelity, crisp textures,
realistic atmospheric depth, and clean professional finishing.

ASPECT RATIO: 4:5 vertical.

Do not change the reference person's identity, face, gender,
hairstyle, skin tone, or clothing.

No extra fingers, deformed hands, duplicated limbs,
distorted face, artificial skin, plastic appearance,
cartoon style, CGI look, low-resolution details,
unrealistic cloud textures, floating body parts,
incorrect anatomy, excessive blur, oversaturation,
unwanted accessories, added turban, hat, or jewelry,
unless present in the reference image.
```

  </details>

- **清冷古风美妆特写：幽兰花影中文结构化配方** — 兰庭+黑木屏风+一枝兰，墨茶棕眼妆与冷玫瑰豆沙唇；9:16 极简贵女特写。美妆/古风人设竖版可直接返图，附完整中文分节 prompt。 [@AndyLau42](https://x.com/AndyLau42) · [原帖](https://x.com/AndyLau42/status/2100478461395538422)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主题风格： 古风极简高级美妆特写
身份气质： 名门小姐，端庄、理性、清贵、教养感强
妆感目标： 素墨兰庭雅致妆
五官方向： 高级耐看脸，五官比例端正，修长杏眼，面中饱满，鼻型清秀，唇形克制丰润
发型与发饰方向： 乌发整洁低盘，墨玉兰花簪、白色贝母小梳、单颗珍珠耳饰
服装方向： 素黑青窄袖上襦，搭配骨白色长裙与兰灰色云肩
场景方向： 极简兰庭 / 黑木屏风 / 白墙 / 一枝兰花
镜头方向： 美妆特写，正面端坐，眼神平静直视镜头
画幅比例： 9:16
创意自由度： 保守
补充要求： 眼妆使用墨茶棕、灰粉和极少珠光，腮红位置克制，唇色为冷玫瑰豆沙；妆后呈现端庄、理性、极有教养的贵女感。胸部饱满自然，胸线明显，画面元素尽量少，靠五官、妆容和气质撑住画面。
```

  </details>

- **复古胶片时尚：麦田奔跑侧影完整 prompt** — 芥末黄衬衫+绯红 A 字裙跑过绿野，手捧红玫瑰；80–90s 胶片颗粒与红黄撞色一次写死。时尚种草/竖版成片可直接返图，附完整英文 prompt。 [@mehvishs25](https://x.com/mehvishs25) · [原帖](https://x.com/mehvishs25/status/2100474309764640921)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a cinematic, photorealistic fashion photograph of a young Asian woman captured in elegant side profile as she runs through a wide, lush green meadow, carrying a beautiful bouquet of long-stemmed red roses. Her outfit combines vintage charm with bold retro styling: a vibrant mustard-yellow button-down shirt with long sleeves, a deep crimson knee-length A-line skirt, matching red knee-high socks, and yellow round-toe pumps with a modest heel. A yellow vintage bandana is tied over her long, flowing dark wavy hair, complemented by striking oversized circular yellow earrings.
The scene evokes the nostalgic look of 1980s–1990s analog film photography, featuring deep green tones, vivid red and yellow color contrasts, soft diffused daylight, and a subtly moody outdoor atmosphere. Capture her natural movement, flowing hair, and the gentle motion of the roses with an artistic editorial composition. Add authentic fine-grain film texture, soft tonal transitions, slightly muted highlights, and a timeless vintage aesthetic. High detail, realistic skin texture, natural motion, cinematic framing, and professional fashion photography.
```

  </details>

- **9:16 街拍时尚：涂鸦墙+粉发猫伴完整 prompt** — 粉发格子衫女孩靠涂鸦墙，脚边围巾猫，黄金时段长影；街拍/种草竖版成片配方一次抄完，附完整英文 prompt。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2100457864431022513)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an ultra-realistic vertical 9:16 cinematic street-fashion photograph of a young woman standing casually beside a warm beige concrete wall covered with charming hand-drawn black pencil-style doodles.

The woman has a short pastel pink bob haircut with soft layered ends and natural texture. She wears a loose red and black plaid flannel shirt over a simple white top, relaxed light-wash wide-leg jeans, and clean white sneakers. Her hands are casually tucked into her jeans pockets, her body slightly angled, with a soft confident smile and relaxed natural expression.

Behind her, the wall features a large hand-drawn anime-style girl illustration with a short bob haircut, winking face and both hands making peace signs, surrounded by small hearts, stars, flowers and playful doodles. The illustrated character should feel like a charming handmade wall sketch.

A cute chubby gray-and-white cat sits beside the woman's feet in the foreground, wearing a small red-and-white gingham scarf around its neck, looking directly toward the camera.

Late-afternoon golden sunlight creates long dramatic shadows across the wall and pavement, including the woman's realistic shadow blending naturally with the wall illustration. Warm beige and muted earthy tones, soft golden-hour glow, subtle film grain, realistic skin texture, natural fabric details, authentic street photography, cinematic lighting, shallow depth of field, realistic proportions, highly detailed, photorealistic, editorial fashion photography, candid yet carefully composed.

Full-body composition, woman and cat completely visible, vertical framing, camera at approximately eye level, natural perspective, premium photography quality, 8K detail, no text, no watermark.
```

  </details>

- **穿搭解析 Skill → 8 组 prompt：字肤未翻车** — 扔一张造型照，Skill 拆出 8 组镜头；2.5 成片文字和皮肤没翻车。种草号要「拆穿搭」流水线，这条比单条 prompt 更像工厂。 [@alanblogsooooo](https://x.com/alanblogsooooo) · [原帖](https://x.com/alanblogsooooo/status/2100390529712193695)

- **Flare 超写实相册：空乘 / 夜城角色连拍** — GPT-Image-2.5 Flare × Minicut：同一角色跨机舱、夜雨、便利店连拍成「真人相册」。虚拟 IP 要生活感九宫格，先看这条一致性。 [@minicut_ai](https://x.com/minicut_ai) · [原帖](https://x.com/minicut_ai/status/2100383868138229962)

- **Flare 出人 + PS 生成笔刷贴装饰** — 先用 Flare 出人物底图，再用 Photoshop 生成笔刷沿轨迹贴闪粉装饰。一发生成打不中的局部点缀，混合流省掉 prompt 抽卡。 [@wataco_ai](https://x.com/wataco_ai) · [原帖](https://x.com/wataco_ai/status/2100367756906660269)

- **真人照只把人变成黑白贴纸：局部编辑配方** — 场景保持写实摄影，人物改成黑白手绘 die-cut 贴纸；must-stay 背景写死。UGC/活动传播很好用，附完整分节 prompt。 [@icreatelife](https://x.com/icreatelife) · [原帖](https://x.com/icreatelife/status/2100316768795283577)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Transform the provided reference photograph into a mixed-media editorial image while preserving the original photographic scene as faithfully as possible.

1. PHOTOGRAPHIC BACKGROUND — DO NOT CHANGE
Preserve the original photograph exactly as the visual foundation.
Keep unchanged:
original composition and framing
camera angle and perspective
focal length and viewing distance
spatial relationships and proportions
buildings, streets, architecture and interior
furniture, objects and environmental details
background geometry
materials and surface textures
natural lighting
highlights and shadows
reflections
depth and perspective
atmospheric conditions
photographic color and exposure
realistic photographic texture

The entire background must remain fully photographic, realistic and highly detailed.
Do not repaint, redraw, simplify, blur, stylize, cartoonize or replace the background.
Do not turn the entire image into an illustration.
The contrast between the real photographic environment and the flat illustrated characters is essential.

2. CHARACTERS — CHANGE ONLY THE PEOPLE
Transform every person visible in the reference photograph into a minimalist black-and-white hand-drawn sticker.
Preserve the exact number of people. Never omit, merge, duplicate or replace anyone.
For every person, preserve:
exact pose
body position
gesture
action
direction of movement
head angle
gaze direction
body proportions
relative scale
position within the scene
interaction with other people and objects
recognizable hairstyle and silhouette
basic facial structure
characteristic clothing shapes
distinctive clothing details
accessories and important visual features

The illustrated people must remain precisely integrated into their original positions in the photograph.
Do not invent new poses or change the action.
Do not make the characters more beautiful, younger, thinner, taller or otherwise alter their natural appearance.

3. CHARACTER ILLUSTRATION STYLE
Render the characters as minimalist monochrome hand-drawn stickers.
Style:
one-line hand-drawn illustration
loose editorial sketch
minimalist black ink drawing
slightly uneven natural linework
imperfect handmade strokes
rough but intentional contours
simple expressive lines
flat 2D illustration
contemporary Instagram/editorial collage aesthetic
subtle graffiti-sketch influence
handmade paper-sticker feeling

The drawing should look humanly sketched rather than digitally vectorized.
Lines should be slightly irregular, organic and imperfect.
Avoid overly polished cartoon outlines.

4. PURE BLACK & WHITE
Use only pure black and pure white for the illustrated characters.
No gray. No color. No gradients. No semi-transparent shading. No colored outlines.
Use clean black lines on white sticker areas.
Small solid black filled areas are allowed only where visually necessary:
hair
deep clothing folds
eyelashes
small shadows
selected facial or clothing details

Keep the illustration predominantly white with economical black linework.
Do not use realistic skin tones or photographic colors on the characters.

5. STICKER CUTOUT EFFECT
Surround each individual character with a clean, continuous white sticker border.
The white border should:
follow the character silhouette
have a consistent thickness
look like a physical die-cut sticker
clearly separate the illustrated character from the photographic background
remain visible around the entire character where possible

The border must be white and clean, not gray, beige or translucent.
Characters should look like physical paper stickers placed directly onto the photograph.
Do not create rectangular sticker backgrounds.
Do not place the characters inside white boxes or panels.

6. INTEGRATION WITH THE PHOTOGRAPH
The characters must appear naturally positioned on top of the original photographic environment.
Preserve the original spatial logic of the photograph.
Their scale and placement must correspond exactly to the people in the reference.
The photographic environment remains three-dimensional and realistic, while the people become flat 2D black-and-white illustrations.
This intentional visual collision is the core of the style:
REAL PHOTOGRAPH + HAND-DRAWN BLACK-AND-WHITE STICKER PEOPLE.
Do not stylize the environment to match the characters.
Do not add illustrated objects to the background.
Do not convert surrounding objects into stickers.

7. MIXED-MEDIA AESTHETIC
Overall visual language:
documentary photography + minimalist ink sketch + die-cut stickers + editorial paper collage + contemporary Instagram aesthetic + mixed media.
The result should feel like an artistic editorial photograph where real people have been replaced by handmade monochrome paper illustrations.
The image should look sophisticated, slightly playful and intentionally imperfect rather than childish or cartoon-like.

8. IMAGE QUALITY
High-resolution final image.
Extremely sharp photographic background with:
realistic textures
fine environmental details
natural photographic depth
crisp architecture
realistic materials
high micro-detail

Illustrated characters should have:
crisp black linework
clean white sticker borders
visible handmade imperfections
strong separation from the photographic background

Do not reduce the photographic quality of the original environment.

9. STRICT PRESERVATION RULE
CHANGE ONLY THE CHARACTERS.
Everything else must remain as close as possible to the original photograph.
No changes to:
background
architecture
objects
lighting
shadows
perspective
composition
camera angle
environment
photographic textures
weather
time of day

Only the people are transformed into black-and-white hand-drawn stickers.

FORMAT
Vertical composition.
Aspect ratio: 3:4 or 9:16, depending on the selected output format.
Do not crop out any important person or essential part of the original scene.

KEY PRINCIPLE:
Original photograph remains photographic.
People become black-and-white hand-drawn stickers.
Nothing else is redesigned.
```

  </details>

- **唐风宫廊读信：9:16 半身近景配方** — 杏粉襦裙 × 青灰披帛 × 薄绢书信，85mm/f1.8 写死光色。国风人像种草/短剧封面直接返工。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2100205250825380199)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 竖版唐风美学国风 CG 人像，超写实与东方诗意融合，半身近景特写。一位明确成年的东亚古典美人立于清晨宫廊，身体为右侧面，头部随身体朝向前方，目光落在手中展开的薄绢书信上。她拥有冷白通透肌肤、细长凤眼和自然柔和的立体五官，眉间略微收紧，胭脂唇轻抿，表情从羞涩转为若有所思，情绪安静而明确。她穿浅杏粉高腰唐风襦裙与冷青灰披帛，鎏金纹样只点缀领缘和袖口，适度低领衬托修长颈线；头饰由轻巧金凤发簪、珍珠串和一枚青玉组成，保留唐风华贵感但更简洁。双手共同展开书信，手指结构自然，袖纱形成柔性引导线。背景虚化为朱红廊柱、青灰晨雾和微亮庭院，金色晨光从侧前方照亮脸颊，冷白天光填充暗部，发丝边缘清晰。85mm，f/1.8，浅景深，低饱和杏粉、金色和青灰体系，真实丝绢材质、轻颗粒与柔光。
```

  </details>

- **失败写真通用模版：任意场景×2×2** — 【任意场景】×【任意穿搭/主体】×竖版 2×2 错误照片。比单题材 case 更像内容工厂骨架，UGC/种草拼贴直接套。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2100184573376381181)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【任意场景】 × 【任意穿搭/主体】 × 竖版2×2错误照片
```

  </details>

- **换装不崩：PROTECTED WARDROBE 锁规则** — Images 2.5 + 分类换装 prompt，把剪裁/五金/图案写成不可变身份。虚拟模特换季最怕脸漂，这条把规则钉死。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2100182700544213429)
  <details>
  <summary>查看 / 复制提示词</summary>

```
PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. If source prose omits or misclassifies a component required by an explicit selection, that selection corrects only that component. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Wardrobe:

Top: A fitted cropped top in heathered slate-gray fine ribbed stretch knit, with a broad low V-neckline and slim full-length set-in sleeves extending slightly beyond the wrists. Dense horizontal ruching runs across the front between a raised central vertical seam and curved side-front shaping seams, continuing lightly around the sides. The gathered center draws the lower edge upward into a shallow central arch, while the side-front hem sits lower above the waist. Narrow matching binding finishes the neckline, with plain sleeve hems and a close-fitting matching ribbed back completing the pullover.

Bottom: High-rise wide-leg trousers in softly draping light-gray woven fabric, covered with charcoal-black leopard spots. Large irregular broken rosettes, roughly 25% of one leg's width, mingle with smaller solid spots and pale open centers in a dense, non-directional pattern. A fitted waistband with belt loops and deep front pleats releases into exceptionally broad straight legs with floor-length plain hems. A concealed hook-and-zip fly, side pockets and rear shaping darts complete the trousers.

Legwear: A pair of plain ivory crew socks in soft opaque knit, with close vertical ribbing along the shafts, neatly finished elastic cuffs, and matching shaped heels and smooth-knit feet with closed rounded toes. The design is unadorned, with a soft matte finish and a snug, flexible fit.

Footwear: A pair of black ankle boots with broad rounded toes and plain matte suede vamps. Simple close-fitting shafts have concealed inner-side zippers and soft dark linings. Thick charcoal-black platform soles wrap prominently around the forefeet, with parallel horizontal grooves along the sidewalls and deep separated tread blocks around the outer edges, creating a heavy, grounded silhouette without upper decoration.

Belt: A broad black leather belt with a substantial silver-tone rectangular prong buckle, squared corners and a thick polished frame. Punched adjustment holes and a matching black keeper secure the tongue, while smooth edges and a plain continuous back keep the strap cleanly finished.

Eyewear:

Dark tortoiseshell acetate sunglasses with broad, low rounded-rectangular full rims, subtly upswept outer corners and an integrated saddle bridge. Deep brown-gray lenses sit inside the polished mottled brown frames. Short polished gold-tone interlocking oval-link fittings decorate the temples immediately behind the hinges, continuing into dark acetate arms with curved ear tips and molded nose rests.

Final worn state:
- Eyewear placement: Center the registered eyewear bridge on the nose, align the two lenses at equal height directly in front of the corresponding eyes, and place each temple over its corresponding ear. Do not move the eyewear to the top of the head, forehead, nose tip, or neckline, and do not disengage only one temple.

Necklace:

A long silver-tone station necklace with small faceted metal beads spaced evenly along a fine linked chain. Slender connecting sections leave clear gaps between the bright bead stations, allowing the strand to fall in a long supple curve to the middle of the chest. A discreet lobster clasp closes the necklace, which has no pendant.

A silver-tone ball-chain necklace with evenly sized polished spherical beads connected by short metal links. The close, regular bead spacing forms a supple strand resting around the collarbone and upper chest. A compact matching connector clasp closes the plain pendant-free necklace at the back.

Final worn state:
For the first and second item descriptions above together:
- Necklace placement: Layer the selected necklaces at clearly separated short, medium, and long lengths, centered at the front and not tangled. Keep registered supports and components connected; allow contact and gravity-led ease only along the selected route.

Earrings: Small polished silver hoop earrings with slender rounded tubular bands, clean circular openings and smooth undecorated surfaces. Fine hinged posts close into discreet catches, maintaining an almost continuous silver contour.

Bracelet:

A polished silver-tone link bracelet composed of closely spaced rounded rectangular plates with softly bulging edges and shallow recessed center grooves. Short articulated connectors allow the substantial reflective links to curve smoothly around the wrist, with a compact matching clasp completing the continuous row.

Final worn state:
VIEW-CONDITIONAL BODY-SIDE MAP: front view — wearer-left is image-right and wearer-right is image-left; back view — wearer-left is image-left and wearer-right is image-right. In profiles, crossed limbs, or ambiguity, trace the named anatomical side continuously from its corresponding shoulder, hip, eye, or ear landmark as applicable. Apply the state only to the named anatomical side; never mirror, swap, or duplicate it.
- Bracelet placement: Render one complete instance of the registered bracelet from the item description immediately above around only the wearer-left wrist. Keep the wearer-right wrist free of this bracelet; do not mirror or duplicate it. Preserve the registered design and count. Keep other separately selected wrist items unchanged.
```

  </details>

- **南方菜园失败写真 3×3：田园竖版短配方** — 南方农村菜园 × 田园风穿搭 × 竖版 3×3 失败照片。中文生活感 UGC 素材库继续挖金的一条具体 case。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2100172521664573551)
  <details>
  <summary>查看 / 复制提示词</summary>

```
南方农村菜园 × 田园风穿搭  ×竖版 3×3失败照片
```

  </details>

- **一图四 pose 水彩拼贴：人脸锁完整 prompt** — 上传照片锁脸，白衬衫四姿态水彩拼贴 + 蓝橙渐变泼墨底。个人品牌 / 编辑肖像直接抄，身份锁公式换水彩皮。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2100164037896225226)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded photo as the facial identity reference and create a premium four-pose watercolor portrait collage of the same adult man. Preserve his recognizable facial structure, skin tone, features, and natural proportions accurately.

Give him a neat low-cut haircut with a clean natural hairline and subtle taper fade, professionally groomed. Keep him clean-shaven with no beard or mustache.

Dress him consistently in a crisp white long-sleeve button-up shirt with black trousers. Arrange four portraits in one vertical composition:

Top: large shoulder-up three-quarter portrait, body turned slightly away while looking confidently toward the camera.

Middle left: chest-up portrait with a relaxed smile, looking slightly to the side.

Middle right: chest-up portrait smiling naturally while looking in the opposite direction.

Bottom: seated portrait, leaning slightly forward with one hand resting beneath the chin, wearing a simple silver wristwatch.

Blend the portraits smoothly using a soft watercolor splash background with sky blue at the top transitioning into coral orange, blush pink, and subtle peach tones toward the bottom. Add organic paint splashes, soft feathered edges, delicate pigment textures, and plenty of clean white negative space.

Style: high-end watercolor editorial portrait, realistic facial details combined with hand-painted watercolor textures, elegant celebrity-style collage, clean premium poster design, soft natural lighting, sharp eyes, realistic skin texture, balanced composition, high detail.

Add a small elegant handwritten signature-style text “Abkr Sadiq” near the bottom center.

Aspect ratio: 3:4 portrait.
```

  </details>

- **雷电将军乱入经典电影：短公式可复用** — 经典名场面 × 第三者雷电将军融入剧情 × 荒诞合理 × 失败照片 × 9:16。二次元闯三次元的短 prompt，玩梗短视频素材一秒开练。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2100156601600782528)
  <details>
  <summary>查看 / 复制提示词</summary>

```
经典电影名场面 × 第三者雷电将军融入剧情 × 荒诞合理感 × 失败照片 × 9:16竖版。
```

  </details>

- **超写实手机自拍：餐厅镜面 3:4 配方** — 自然波浪发 + 针织开衫 + 奶牛壳手机，竖版室内镜面自拍写死瑕疵与手部。素人 UGC / 身份锁起点。 [@Aqsahere_](https://x.com/Aqsahere_) · [原帖](https://x.com/Aqsahere_/status/2100150776488460476)
  <details>
  <summary>查看 / 复制提示词</summary>

```
ULTRA-REALISTIC NATURAL SMARTPHONE SELFIE, vertical 3:4, a candid indoor mirror-style selfie of a young East Asian woman in a cozy upscale restaurant or hotel lounge.
She has long, naturally wavy dark-brown hair falling over her shoulders and chest, soft wispy strands around her face, delicate youthful features, clear natural skin, subtle makeup, and a gentle closed-mouth smile while looking at her phone screen.
She is wearing a light powder-blue ribbed fitted button-front top underneath a chunky cream-white cable-knit cardigan with large buttons and slightly oversized sleeves. A soft light-blue vintage-style baseball cap sits naturally on her head, with her hair flowing out from underneath it.
She is holding a modern smartphone in front of her face at a natural selfie angle. The phone has a cute pink-and-brown cow-print protective case, clearly visible in the foreground. Her hand and fingers naturally grip the phone, with realistic skin texture and proportions.
The background is a dimly lit elegant interior with dark walls, warm ambient lights, polished stone or wood surfaces, subtle decorative elements, and softly blurred people or furniture in the distance. Warm indoor lighting illuminates her face and cream cardigan while the background remains darker and atmospheric.
Authentic personal smartphone selfie, slightly imperfect framing, natural lens distortion, realistic exposure, subtle softness, genuine skin pores, individual hair strands, realistic knit texture, natural hands and fingers, no excessive retouching, no beauty filter, no plastic skin, no CGI appearance, cozy lifestyle photography, warm realistic lighting, shallow natural depth of field, vertical 3:4 composition.
```

  </details>

- **严重过曝 iPhone JK 自拍：短公式可抄** — 高光溢出 × 局部剪裁 × 五官细节消失 × 原相机自拍 × JK。UGC / 美妆「假拍真感」一条公式够用。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2100148633966719009)
  <details>
  <summary>查看 / 复制提示词</summary>

```
严重曝光过度 × 高光大面积溢出 × 局部高光完全剪裁 × 五官细节局部消失 × iPhone原相机自拍 × jk制服女友
```

  </details>

- **素人翻车写真 3×3：一句失败美学** — 一句日文 prompt 出九宫格翻车写真：`素人の失敗写真の数々、3x3、9:16`。不完美真实感素材库很省事。 [@MingTian685474](https://x.com/MingTian685474) · [原帖](https://x.com/MingTian685474/status/2100138165164245153)
  <details>
  <summary>查看 / 复制提示词</summary>

```
素人の失敗写真の数々、3x3、9:16
```

  </details>

- **高光 CCD：镜面雕塑广场都市生活照** — 青柚 Polo + 奶油短裙，日间清亮 CCD 写死光线滤镜；镜面雕塑只当几何背景。UGC / 生活方式素材库可改场景。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2100123514745536819)
  <details>
  <summary>查看 / 复制提示词</summary>

```
摄影风格：日间清亮高光CCD生活照风
写真方向：都市艺术时尚生活照
场景方向：现代公共艺术广场 / 大型不锈钢镜面雕塑 / 浅灰地面 / 极简开放空间
服装方向：青柚绿色修身Polo短上衣 + 奶油白低腰修身短裙
气质标签：清冷、俏皮、时尚、明亮、有设计感
五官方向：高级元气淡颜
身形方向：轻盈纤细
线条强调：强
镜头方向：半身到大腿
姿态动作：站在镜面雕塑边，一只手轻触金属表面，身体轻微侧身看向镜面中的自己
光线氛围：晴天明亮自然光 + 镜面金属形成清晰中性反射补光
滤镜效果：高亮清晰绿白CCD色彩 + 清楚高光 + 稳定黑位 + 轻颗粒 + 极轻锐度
画幅比例：9:16
补充要求：镜面雕塑只能作为几何背景，不出现复杂畸变人像；人物胸腰轮廓清楚，整体要像城市随手拍而不是艺术棚拍
```

  </details>

- **首尔咖啡馆身份锁 UGC：Image 2.5→视频** — 上传参考锁脸发装，DV 手持咖啡馆下午茶短片；完整分镜式 prompt 可抄。一人队「生活感种草」模板。 [@MahnoorAi12](https://x.com/MahnoorAi12) · [原帖](https://x.com/MahnoorAi12/status/2100109930921419055)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 30-second ultra-realistic personal home-video of a young Korean woman visiting a small indie café in an older Seoul neighborhood on a quiet afternoon. Use the attached image as the character reference and keep her face, hairstyle, and outfit consistent throughout.
She walks into a cozy, small café, orders at the counter, and waits briefly before receiving her coffee. She finds a seat by the window, pulls out a book from her tote bag, and settles in, sipping her coffee occasionally while reading. She pauses to look out the window for a moment, watching the street outside, then goes back to her book, turning a page and adjusting her position in the chair.
Use raw early-2000s consumer DV-camera footage: handheld shake, imperfect framing, autofocus hunting, exposure shifts from window light, soft detail, mild noise, natural motion blur and occasional awkward zooms.
Natural café ambience only — quiet murmur of other customers, cups clinking, page turns, faint street sounds through the window. No music, no narration, no dramatic events, no polished commercial cinematography.
```

  </details>

- **当代肖像身份锁：杂志感四联保脸** — 上传参考图，保脸保发 + 极简棚拍杂志光。个人品牌 / 头像迭代直接返图，完整 portrait prompt。 [@shushant_l](https://x.com/shushant_l) · [原帖](https://x.com/shushant_l/status/2100102907639247145)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a contemporary portrait of the person in the attached reference image, preserving their facial identity, features, skin tone, hairstyle, proportions, and overall likeness accurately. Modern editorial photography aesthetic, confident natural expression, stylish minimalist outfit, clean sophisticated background, soft directional studio lighting, realistic skin texture, subtle shadows, refined neutral tones, shallow depth of field, crisp facial details, premium fashion-magazine feel, balanced composition, professional full-frame camera photography, 85mm portrait lens, photorealistic, cinematic, elegant, natural, high-end, ultra-detailed.
```

  </details>

- **上传人脸锁身份：九宫格贴纸叙事** — 同一张脸贯穿九格表情贴纸，面部结构全板一致。UGC / 人设表情包：先锁身份再批姿态。 [@aniyaintel](https://x.com/aniyaintel) · [原帖](https://x.com/aniyaintel/status/2100091272895791296)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use my uploaded female face as the ONLY identity reference for the main character. Preserve my exact facial identity and natural appearance throughout all nine panels. Keep my facial structure, skin tone, eyes, eyebrows, nose, lips, cheekbones, jawline, facial proportions, hairline, hair texture, and natural skin details consistent and recognizable. Do not beautify, reshape, feminize, masculinize, age, de-age, or otherwise alter my facial features. The same woman must appear in every panel with strong identity consistency.

Create a 3×3 grid containing exactly 9 different cute expressive sticker-style portraits, for a total of nine unique expressions and poses. The composition should look like a professionally designed messaging app sticker sheet, with all nine panels visually connected and balanced.

Each panel should feature the same female character but with a clearly different facial expression, body gesture, pose, and emotion. Make the expressions natural, exaggerated enough to work as expressive stickers, but still realistic and flattering.

Panel 1 — Encouragement
A confident playful expression with one eye closed in a cute wink and a subtle smile. She points toward the viewer with a confident gesture, creating an energetic motivational feeling. Add the text “You got this!” with a cute handwritten sticker-style font. Small hearts and sparkles around her.

Panel 2 — Thinking / Confused
She rests one cheek gently on her hand while looking slightly sideways with a thoughtful, mildly confused expression. Add a small doodle above her head and the text “Hmm…” or “我想想…”. Make the expression curious and adorable.

Panel 3 — Good Night
She hugs a soft fluffy pillow close to her chest with her eyes gently closed and a peaceful sleepy smile. Add a small crescent moon, stars, and subtle sparkles. Include the text “Good Night” and/or “晚安”.

Panel 4 — Motivation / Coffee
She holds a warm coffee mug with both hands, looking energized and slightly playful. Add subtle steam rising from the cup. Include the Chinese text “加油!” and small energetic doodles. The expression should communicate “I’m ready!”

Panel 5 — Happy
She tilts her head slightly with her eyes closed and a genuine joyful smile. Add small hearts, sparkles, and a cute smiley doodle. Include “Happy Day!” or “开心每一天!”.

Panel 6 — Confused / Questioning
Give her a cute puzzled expression with slightly raised eyebrows and a subtle frown, looking toward the side as if she doesn't understand something. Add floating question marks “???” around her. The emotion should be funny rather than angry.

Panel 7 — Cool / Stylish
Give her a confident fashionable pose wearing stylish sunglasses, making a relaxed peace sign with her fingers. Add subtle sparkle effects and the text “So Cool!”. The overall feeling should be trendy, playful, and confident.

Panel 8 — Laughing
She covers her mouth with both hands while laughing naturally, with slightly squinted happy eyes and a playful expression. Add small laughter marks and the Chinese text “哈哈哈”. Make this panel feel spontaneous and genuinely funny.

Panel 9 — Love / Affection
She rests her cheek gently against one hand while giving a sweet wink and warm smile toward the viewer. Add pink hearts and soft sparkles. Include the Chinese text “爱你” with smaller English text “Love you!” underneath.

Visual Style
Use a soft pastel light-gradient background for every panel. Each panel can have a different subtle gradient such as blush pink, lavender, baby blue, mint, peach, cream, and light violet, while maintaining one cohesive visual style.

Give the character a clean white sticker-cutout outline around her entire silhouette. The white border should clearly separate her from the pastel background and create an authentic premium sticker appearance.

Use cute hand-drawn doodles such as: hearts, stars, sparkles, clouds, question marks, smiley faces, small moons, coffee steam, playful motion lines.
```

  </details>

- **乘务员 3×3 UGC：九格同人手机抓拍** — 超写实智能手机拼贴九宫格，同一乘务员脸 / 制服 / 发型锁死。生活感广告素材的现成模板，完整 prompt 可抄。 [@saniaspeaks_](https://x.com/saniaspeaks_) · [原帖](https://x.com/saniaspeaks_/status/2100071548145070438)
  <details>
  <summary>查看 / 复制提示词</summary>

```
ULTRA-REALISTIC CASUAL SMARTPHONE PHOTO COLLAGE, vertical 3:4, consisting of 9 separate candid snapshots arranged in a clean 3×3 grid, capturing the same young East Asian female train attendant during a normal workday aboard a modern passenger train.

Keep the same woman, same facial features, same hairstyle, same overall appearance, and same uniform consistently across every panel. She has dark brown hair neatly tied into a low bun, delicate natural features, subtle makeup, and a youthful appearance.

She wears a professional dark navy train-attendant uniform, a fitted blazer or elegant uniform dress, a red-and-navy patterned neck scarf, a small gold name badge, dark stockings, and simple professional shoes. Her appearance is polished but natural.

Panel 1: accidental close-up smartphone selfie inside the train vestibule, with one finger partially covering the lens, slightly blurry and imperfect, train doors and safety signage visible behind her.

Panel 2: full-body candid shot of her walking through the narrow train aisle while pulling a small black rolling suitcase, slight motion blur, passengers and rows of seats softly visible in the background.

Panel 3: close-up selfie from a train seat beside the window, bright natural sunlight entering through the glass and slightly overexposing part of her face, relaxed expression and casual framing.

Panel 4: candid rear/side view of her standing inside the train carriage while reaching toward an overhead luggage compartment, showing her neat low bun, uniform silhouette, and professional posture.

Panel 5: extremely close casual selfie, her face filling most of the frame with a few loose strands of hair crossing her face, soft focus, slightly imperfect smartphone exposure, playful natural expression.

Panel 6: candid seated selfie inside the train, one hand covering her mouth while laughing, wearing a simple wristwatch, warm carriage lighting, genuine spontaneous moment.

Panel 7: close-up side selfie beside a large train window, railway platform and another train visible outside, natural daylight, slightly cropped face and realistic reflections on the glass.

Panel 8: candid rear view of her walking through the train carriage toward another section, slight motion blur, overhead luggage racks, seats, doors, and realistic train interior details visible.

Panel 9: close-up accidental selfie inside the train vestibule, part of her finger covering the camera lens, playful imperfect framing, realistic train door controls and safety equipment behind her.

The whole collage should feel like real personal smartphone memories from a train attendant's workday, not professional photography. Use inconsistent framing, slight motion blur, accidental cropping, mild lens distortion, subtle exposure variations, realistic carriage lighting, soft focus, natural skin texture, authentic facial expressions, and small photographic imperfections.

No polished studio look, no artificial beauty filter, no plastic skin, no CGI appearance. Raw everyday smartphone photography, authentic behind-the-scenes train-attendant photo diary, realistic modern passenger train interior, spontaneous candid moments, consistent character across all 9 panels, thin white dividers between panels, clean 3×3 grid, vertical 3:4 aspect ratio.
```

  </details>

- **实拍抽可替换服装 prompt 库（猎人风 cos）** — 先从原图抽衣装 prompt，再按类目换装；Images 2.5 跑猎人风 cos。虚拟 IP / UGC 换装资产库可复用。 [@MoodLock_JP](https://x.com/MoodLock_JP) · [原帖](https://x.com/MoodLock_JP/status/2100020747146342911)
  <details>
  <summary>查看 / 复制提示词</summary>

```
PROTECTED WARDROBE RULE — HIGHEST PRIORITY: Treat each garment description below as its immutable final product identity. Preserve construction, parts, hardware, material, pattern, and every registered graphic or marking—its surface, side, orientation, scale, colors, content, spelling, and count. FINAL WORN STATE overrides only the scoped item's use, position, side, orientation, fastening, layering, folds, tucks, knots, and drape. If source prose omits or misclassifies a component required by an explicit selection, that selection corrects only that component. A SOURCE GARMENT label describes the unstyled item, never the completed silhouette. Do not redesign, add, remove, mirror, duplicate, relocate, or redraw protected details.

Wardrobe:

Outerwear / layers: A short open-front warrior shoulder mantle with a thick shaggy ivory-and-taupe fur collar wrapping around the nape and framing the chest. Fur-backed shoulder caps extend over the upper arms beneath layered blue-gray metal scales, arranged in staggered overlapping rows that taper into elongated pointed ends. Each scale has a raised dark border, fine worn scroll-like edging and small antique-brass rivets, with pale scuffs across the weathered metal. The shoulder plates articulate on concealed flexible leather mounts; fur projects beyond their lower edges, while a leather-lined back remains soft and unplated. Narrow underarm straps secure the paired shoulder caps.

Dress / all-in-one: A fitted long-sleeved battle tunic in weathered slate blue, ash gray and dirty ivory, with a deep V-shaped wrap front edged in narrow blue bands and secured by concealed inner ties. The overlapping bodice panels have broad irregular pale worn areas across their blue-gray surfaces, while the close-fitting gray sleeves are softly wrinkled. A joined waist supports a split, asymmetrical skirt: short overlapping pointed blue panels cover the hips above longer uneven blue outer strips and exposed gray-and-ivory inner panels. The front opens above the knees, while jagged side and rear points descend toward the lower calves. Frayed edges, scattered small tears, pale abrasion, sparse antique-metal studs and restrained curling edge decoration give the layered fabric and reinforced hip panels a heavily worn finish.

Bottom: A pair of fitted dark-charcoal-brown leather trousers with tapered full-length legs, a plain waistband and concealed button fly. The leather is supple and deeply creased around the knees, with irregular pale abrasions and angular ash-gray and muted blue reinforcement patches that differ slightly between the legs. Narrow dark-brown leather straps anchored at the side seams wind diagonally around the knees and upper calves, crossing in front and behind and fastening with small aged-metal buckles. Sparse studs, rubbed strap edges and visible patch stitching reinforce the worn, pieced-together appearance.

Footwear: A pair of rugged calf-high boots with weathered blue-gray leather uppers, rounded dark-metal toe caps and reinforced heel counters. Dirty-ivory cloth strips wrap the shins and cross the insteps beneath broad dark-brown leather straps that wind in diagonal X-shaped courses around the shafts and feet, fastening with aged-brass side buckles. Thick shaggy ivory-and-taupe fur forms wide bands at the calf tops and ankles. Each upper strap carries a small ring-linked pointed oval leather tab with a riveted metal border. Flexible lined shafts, scuffed hardware, thick dark lugged soles and low block heels complete the boots, with pale wear and ingrained dirt concentrated along the toes, seams and sole edges.

Bag:

A small vertical brown leather belt pouch with a narrow body tapering into a rounded teardrop-shaped bottom. Its shallow gusset gives the pocket a little depth without widening the pointed silhouette. An angular fold-over flap has dark blue-gray edging and a single pale aged-metal stud fastening, while a slim central seam and close edge stitching emphasize the long shape. A concealed rear leather loop provides belt attachment; the surface is darkened, creased and rubbed lighter along the edges.

A compact dark-brown leather belt pouch with a broad softly rounded rectangular body, curved bottom corners and a substantial folded side gusset. A rounded envelope flap closes over the front with an aged-metal stud fastening. A worn blue-gray reinforcing strip runs vertically down the center from the flap toward the base, accompanied by matching dark corner reinforcement, pale perimeter stitching and small metal rivets. Two rear leather loops mount the single-compartment pouch to a belt. The leather is creased and heavily scuffed, with darkened edges and rubbed lighter patches.

Final worn state:
For the first item description above only:
- Bag carry: Fasten the original belt horizontally around the natural waist, with the complete bag body flat against the anatomical center back of the waist. Preserve its original attachments and hardware. Keep the bag at the back even when hidden by the pose; do not shift it to the front or a side. Keep registered supports and components connected; allow contact and gravity-led ease only along the selected route. Natural handling within this same operation: Keep the selected route and all attachment points exact while allowing limited material-correct slack and natural body contact.

For the second item description above only:
VIEW-CONDITIONAL BODY-SIDE MAP: front view — wearer-left is image-right and wearer-right is image-left; back view — wearer-left is image-left and wearer-right is image-right. In profiles, crossed limbs, or ambiguity, trace the named anatomical side continuously from its corresponding shoulder, hip, eye, or ear landmark as applicable. Apply the state only to the named anatomical side; never mirror, swap, or duplicate it.
- Bag carry: Fasten the original belt horizontally around the natural waist, with the complete bag body flat against the wearer-right side of the waist. Preserve its original attachments and hardware. Keep it off both shoulders and the chest; do not move it to center front or the opposite hip. Keep registered supports and components connected; allow contact and gravity-led ease only along the selected route. Natural handling within this same operation: Keep the selected route and all attachment points exact while allowing limited material-correct slack and natural body contact.

Belt: A broad warrior waist girdle built from a weathered slate-blue cloth wrap crossed by three narrow dark-brown leather belt courses and a lower slanting hip belt. Aged-brass buckles, keeper loops, punched holes and rivets secure the irregular stacked arrangement while leaving blue fabric visible between the straps. A large brass ring at the front supports an ivory-colored long-snouted animal-skull ornament with recessed eye sockets, a ridged brow and a deep elongated nasal opening. Shaggy gray-taupe fur strips hang from reinforced front and rear tabs, tapering unevenly toward the knees, with the front strip extending beneath the skull. Short cords along the hip belt suspend a loose fringe of curved ivory-colored teeth; worn leather edges and darkened fittings unify the construction.

Necklace: A close-fitting dark braided-cord necklace carrying a graduated fringe of ivory-colored fang pendants. The longest slightly curved tooth hangs at the center, with progressively shorter irregular teeth angled outward toward the sides so their pointed tips form a radiating crescent. Each fang is secured at its blunt root with a dark wrapped binding, separated by small muted bone-colored beads and knots. Subtle gray-brown grooves and worn tips give the tooth replicas an aged finish; an adjustable knotted cord fastening closes the necklace behind the neck.

Gloves: A pair of close-fitting dark-charcoal leather fingerless gloves with short open finger stalls and open thumb tips. Overlapping angular blue-gray metal plates protect the backs of the hands, with raised dark edges, small pale-metal rivets and scratched silver-gray highlights. Small riveted reinforcements sit above the knuckles while the fingers and palms remain flexible leather. Neat stitched openings, reinforced thumb seams and short wrists with concealed side snaps complete the gloves; creases and rubbed edges give the leather a worn finish.

Arm guards / bracers: A matched pair of blue-gray metal forearm bracers, broad below the elbows and tapering closely toward the wrists. Long curved plates have raised longitudinal borders, narrow reinforcing ribs, scattered antique-brass rivets and scratched, pale-worn surfaces. Each flared upper section carries a prominent angular silver-gray crest made from overlapping pointed plates projecting above and to the sides of the forearm guard. Dark-brown leather straps encircle the leather-backed shells and buckle along the inner arms. Short shaggy ivory-and-taupe fur cuffs finish the wrists, while darkened seams and restrained incised edge decoration emphasize the segmented construction.

Body harnesses:

A dark-brown leather torso harness with two adjustable shoulder straps descending beside the chest and a narrow crossed strap arrangement beneath the bust. At the back, four diagonal strap ends meet at a substantial aged-brass ring: the upper pair rises toward the shoulders through rectangular buckles, and the lower pair runs outward around the ribs to the front crossing. Small brass buckles, punched adjustment holes, rivets and keeper loops provide working fastening points. The leather has darkened edges, pale scuffs and visible edge stitching, with an open chest and open spaces between the rear straps.

Final worn state:
- Body harness layering: Wear the complete body harness outside the selected Outerwear / layers item, keeping every registered neck, shoulder, chest, torso, and waist strap on its original anatomical route with every connector visible and correctly joined. Do not hide it beneath the target, merge straps, invent attachments, or convert the harness into suspenders, a belt, body chain, or garment trim. Change only layer order, contact, and occlusion. Keep each item's front, rear, side, edges, openings, and connections distinct. Visibility follows only existing apertures or optical transmission through existing material; every source edge and panel connection retains its geometry. Contact response stays shallow and fades within connected panels.
```

  </details>

- **个人品牌四联棚拍：一图四种表情身份锁** — 上传脸锁身份，竖版一图塞全身 + 坐姿 + 笑脸 + 严肃特写。个人品牌 / 高管 editorial 一锅出。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2099973325779054806)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Add a small premium gold crown-and-shield monogram emblem in the lower-right corner featuring elegant initials such as “ABS”, designed like a luxury personal-brand crest.

Use the uploaded photo as the facial identity reference and create a premium cinematic studio portrait of the same adult man. Preserve his recognizable facial structure, skin tone, features, and proportions accurately.

Create a premium cinematic multi-panel fashion portrait of the same adult man, presented as four coordinated portraits inside one vertical composition.

Use a luxurious deep navy-to-black studio background with subtle golden vertical frame lines separating each portrait. Add faint warm gold particles and soft highlights for an elegant editorial atmosphere.

Main center portrait: Show the man full-body, standing confidently and smiling slightly. Dress him in a tailored dark navy double-breasted blazer with subtle pinstripes and gold buttons, crisp white dress shirt, patterned dark tie, white pocket square, slim white tailored trousers, and polished black leather dress shoes. Add a sophisticated silver wristwatch. His hands are gently clasped together around waist level.

Top portrait: Place him seated confidently in a dark leather armchair, wearing the same navy blazer, white shirt, patterned tie, pocket square, and light trousers. One hand rests naturally on the chair arm. Give him a relaxed, composed expression.

Left portrait: Create a chest-up close-up of him laughing naturally with a wide genuine smile, showing an energetic and approachable personality.

Right portrait: Create another chest-up close-up with a serious, intense expression, looking slightly to the side for a strong executive/editorial feel.

Keep the same facial identity, hairstyle, facial proportions, skin tone, clothing details, and overall appearance consistent across all four portraits.

Use cinematic studio lighting with soft highlights on the face and suit, controlled shadows, subtle rim lighting, realistic skin texture, sharp tailoring details, luxury menswear campaign styling, high-end magazine photography, symmetrical composition, dramatic contrast, ultra-realistic finish, 85mm portrait lens look, shallow depth of field, premium color grading, high detail, vertical 9:16 aspect ratio.
```

  </details>

- **烈日人像四发色：同一阳光感配方** — 银白 / 铜红 / 深棕 / 蜜金——硬自然光当主角，肤质与发丝写死。写真 / 时装 mood shot 换槽就能批。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2099904698073616580)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Hair color: 
Top: 
Sunlight: 
Pose: 
Background: 

Create a 9:16 ultra-realistic close-up portrait of an adult young woman in strong natural sunlight.

Make the sunlight a major part of the image: direct, uneven, slightly harsh, with bright highlights falling across the hair, face, shoulders, and collarbone. Allow small areas of controlled highlight clipping while keeping facial structure and skin detail visible.

Hair should feel especially alive in the light—natural volume, loose strands, flyaways, fine individual hairs, and subtle movement. Backlit or side-lit strands should glow clearly against the darker background, with realistic variation in tone rather than a flat solid hair color.

Keep the skin highly realistic and human: visible fine texture, subtle pores, natural tonal variation, soft facial color, and believable highlights. Avoid overly smooth, oily, plastic, waxy, or CGI-looking skin.

Use a simple fitted top with a clean neckline and realistic fabric texture. The clothing should gently define and complement the upper-body silhouette without becoming the main focus. Keep the design minimal, with no logos, prints, or distracting accessories.

Frame the portrait very close, with slightly imperfect cropping and a casual, private snapshot feeling. Let a few strands of hair cross the face naturally. Keep the expression relaxed and understated, never like a commercial fashion pose.

Use a simple darker background to make the sunlit hair and skin stand out.

Overall feel: intimate, sun-drenched, candid, tactile, slightly imperfect, and genuinely photographic rather than polished studio beauty photography.

Avoid: beauty-filter skin, perfect salon hair, flat soft lighting, studio lighting, excessive retouching, glossy CGI skin, fake wig texture, overly posed expressions, busy backgrounds, distorted hands, or unnatural anatomy.
```

  </details>

- **中文海边 UGC 自拍：黄金时段写实配方** — 高开叉泳衣 + 黄金时段暖侧光 + 海浪礁石——写实摄影质感写全。中文市场生活方式素材比空喊 photoreal 好用；顺带踩到官网 vs 第三方 API 审核差。 [@shitunote](https://x.com/shitunote) · [原帖](https://x.com/shitunote/status/2099846900031852562)
  <details>
  <summary>查看 / 复制提示词</summary>

```
一位长发黑发的东亚美女在海边自拍，穿着黑色高开叉连体泳衣，金色硬币吊坠项链，夕阳黄金时段，海浪拍打礁石，暖色侧光，真实摄影质感，皮肤细腻，微微侧身看镜头
```

  </details>

- **汉风夜亭人像：宫灯暖金×月光冷蓝** — 明艳古风女子斜倚夜亭软榻——团扇、凤冠、披帛与樱花全写死。国风竖版人像/封面结构化中文 prompt 可整段复用。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2099845483594404165)
  <details>
  <summary>查看 / 复制提示词</summary>

```
一位明确成年的明艳古风女子斜倚在夜色木亭的软榻边，身穿胭脂红与鎏金配色的华丽汉服，外搭米白薄纱长袖，头戴金凤凰红宝石珍珠凤冠。她的身体朝向右前方，头部轻轻偏向左侧，目光直视镜头，眉眼温柔坚定，嘴角微扬；一只手握着圆形团扇置于胸前，另一只手轻搭软榻边缘。晚风推动披帛、长发和凤冠流苏，几片樱花从暖色宫灯前掠过。背景保留木柱、雕花栏杆和虚化月色，宫灯暖金光照亮脸部与红色织锦，冷蓝月光勾勒肩线和发丝。85mm 人像镜头，f/1.8 浅景深，克制冷暖对比，东方电影美学、高级华丽而不艳俗、8K。
```

  </details>

- **个人图解/角色设定表：Images 2.5 复刻实测** — 把「个人图解」那套人设表丢给 Images 2.5 复刻——信息架构+角色格一次成型。做自我介绍卡 / IP 设定表可对标。 [@2ndHitsuji](https://x.com/2ndHitsuji) · [原帖](https://x.com/2ndHitsuji/status/2099843668572049873)

- **表情参考锁：人脸表情一键搬到猫/角色** — 一句「把图二猫咪变成图一那样的表情」——人脸表情稳贴到动物/角色。UGC 表情包与品牌吉祥物改表情直接抄。 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO) · [原帖](https://x.com/ZHO_ZHO_ZHO/status/2099832996216135874)
  <details>
  <summary>查看 / 复制提示词</summary>

```
把图二猫咪变成图一那样的表情
```

  </details>

- **盛夏记忆感生活照：湿发×CCD×高亮逆光** — 海边盛夏 × 湿发抓拍 × CCD 柔焦 × 近距离互动 × 高亮逆光——社媒生活方式素材一句话出片。 [@chenlinspark](https://x.com/chenlinspark) · [原帖](https://x.com/chenlinspark/status/2099826059982295326)
  <details>
  <summary>查看 / 复制提示词</summary>

```
海边盛夏 × 湿发抓拍 × CCD柔焦 × 近距离互动 × 高亮逆光
```

  </details>

- **WoW 元帅铠甲角色表：Astra×Sunburst×Seedance** — 先用 Astra 拆 Forever 预告，再 Sunburst 出自己穿 Field Marshal 铠甲的角色表，Seedance 接成片。游戏 IP 自插角色管线可抄。 [@maxescu](https://x.com/maxescu) · [原帖](https://x.com/maxescu/status/2099809695972110560)

- **Flare 9:16 4K Max：东亚瓷肤近景人像** — 青蓝侧光+纯黑底+双手托脸珠宝细节。Flare Max 竖版美妆/种草 KV 直接复用整段。 [@woleswoosh](https://x.com/woleswoosh) · [原帖](https://x.com/woleswoosh/status/2099743767951737090)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A ultra-realistic close-up portrait of a young East Asian woman with fair, porcelain skin and a soft, dewy complexion. She has long, messy black hair with straight bangs falling over her forehead and strands framing her face, some strands appearing slightly wet or glossy. Large, striking blue eyes with long lashes look directly at the viewer with an intense, slightly melancholic expression. Soft pink glossy lips slightly parted.

Both hands gently cup her face, fingers resting on her cheeks and temples, showing multiple delicate silver rings on her fingers (twisted and band styles). She wears a thin silver chain necklace and a matching delicate bracelet.

She is wearing a light cream or off-white spaghetti-strap top with a soft, silky texture. Dramatic cinematic cyan-blue lighting from both sides creates strong highlights on her skin, hair, and jewelry while casting deep shadows across her face and against a pure black background. High-detail skin texture, subtle freckles, sharp focus on the eyes, photorealistic quality, soft volumetric light rays, 8k resolution, beauty photography style.
```

  </details>

- **奶凶女友槽位：粉芭蕾裙×机车靴×叉腰** — 一行中文槽位出「奶凶」反差人设。穿搭广告 / 角色 UGC 换裙子靴子场景就能连更。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099721592582656282)
  <details>
  <summary>查看 / 复制提示词</summary>

```
粉色芭蕾裙 × 黑色机车靴 × 双手叉腰 😾 × 地下停车场
```

  </details>

- **时尚角色设定表：16:9 锁风格参考成片** — 高定角色 concept sheet：元数据+三视图+主姿+动态姿+细节格。IP 圣经 / 时尚角色提案直接抄布局。 [@itsPixieVerse](https://x.com/itsPixieVerse) · [原帖](https://x.com/itsPixieVerse/status/2099712708908319052)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium modern high-fashion CHARACTER CONCEPT ART SHEET in a 16:9 widescreen layout on a pure white background. THE ATTACHED REFERENCE IMAGE DEFINES THE ART STYLE.

[STYLE — MIRROR THE REFERENCE EXACTLY]: Replicate reference image verbatim: painterly matte digital gouache, flat posterized color blocks, NO outlines, hard-edged brush shapes, identical muted palette and bright white background.

[STYLE PROHIBITIONS — ABSOLUTE]: no outlines, no ink lines, no cel-shading, no 3D render, no glossy highlights, no photorealism, no petite proportions.

[PROPORTIONS]: Match reference exactly: 10 heads tall, elongated fashion anatomy, long slender limbs, small head.

[SUBJECT_DESCRIPTION]: Extremely tall adult woman in early 20s, wide black visor-hat with gold script, floating orbital halo, black prosthetic arms with trailing puppet strings. Outfit: massive ballooning obsidian cloak with gold buttons, structured cream draped gown with high slit, chunky platform heels. Ability: Controls invisible gravitational tethers to manipulate reality and celestial fragments.

Layout Composition:

1. LEFT PANEL: METADATA & TURNAROUND — Name "OPHELIA", metadata block ("ROLE: Graviton Oracle", "CORE MOOD: Detached Supremacy", "VISUAL SIGNATURE: Orbital Halo & Gravity Strings"), 3 turnaround figures, 3 silhouettes, 4 expression crops (obscured visor glare, slight chin lift, gold glyphs glowing, cold smirk).
2. CENTRAL PANEL: Dominant full-body centerpiece in towering signature pose with trailing strings and floating halo.
3. RIGHT PANEL: 4 dynamic pose studies (pulling gravity threads, levitating above ground, cloak billowing wide, adjusting hat) with handwritten labels.
4. BOTTOM RIGHT PANEL: 5 square detail crops (visor gold glyphs, orbital halo sphere, black prosthetic hand/strings, gown drape, platform heels).
```

  </details>

- **3×3 失败写真×KPOP 日常：短 prompt 出网格** — 竖版 3×3、略带私密角度的「翻车日常」网格，一行中文就够。UGC/App 广告比精修模特更像用户内容。 [@listudio](https://x.com/listudio) · [原帖](https://x.com/listudio/status/2099687551724626013)
  <details>
  <summary>查看 / 复制提示词</summary>

```
竖版3×3失败照片× KPOP x 日常工作和生活 x 略带私密角度
```

  </details>

- **玛奇玛×广州游：iPhone 相册截图迭代版** — 改提示词后相册 UI 更稳：角色×城市游×iOS 相册假截图。角色 IP 做「随手拍相册」广告的短公式。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099684732950958440)
  <details>
  <summary>查看 / 复制提示词</summary>

```
玛奇玛 ×广州游iPhone 相册截图×iOS 27
```

  </details>

- **巨型玻璃球球面折射人像（短配方）** — 卡哇伊女友 × 巨型玻璃球视角 × 球面折射 × 浅景深微距。物理对不对先别管——种草大片光学感一把梭。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099672233572745336)
  <details>
  <summary>查看 / 复制提示词</summary>

```
卡哇伊女友 × 巨型玻璃球视角 × 球面折射人像 × 浅景深微距抓拍
```

  </details>

- **行星级汉服巨人：超尺度槽位通用模版** — 人物身份 × 超尺度 × 动作主体 × emoji 手势 × 特殊相机 × 背景。病毒感角色/产品广告直接套槽。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099508984541769771)
  <details>
  <summary>查看 / 复制提示词</summary>

```
真实东方汉服女性 × 行星级真人放大 × 手托🌍 × 😜👌 × 月球视角CCD相机抓拍 × 黑色宇宙背景

通用模版：
真实【人物身份】 × 【超尺度设定】 × 【核心动作＋主体】 × 【emoji 表情＋手势】 × 【特殊视角＋相机抓拍】 × 【背景环境】
```

  </details>

- **写实 AI UGC：一 prompt 拉满素人感** — Image 2.5 素人广告素材钩子——改产品/场景就能测投放。轻团队快速出 UGC 变体用这条。 [@simonecanciello](https://x.com/simonecanciello) · [原帖](https://x.com/simonecanciello/status/2099503950714065269)

- **高光 CCD 未来都市生活照：分段中文 prompt** — 光伏顶棚步道 + 杏橙针织 + 冷白短裙，日间清亮高光 CCD 写死光线滤镜。小红书 / UGC 都市人像直接返图。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2099498799786074400)

- **素人照 → 超现实漫画街拍：身份锁长 prompt** — 参考图锁脸体，24–28mm 居中全身 + 环境嵌入 2D doodle，人不变卡通。人设海报 / 社媒 campaign 整段可复制。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2099498417084940418)

- **任意参考图 → 一整天 iPhone 相机卷** — 一张图扩成「刷了一天相机胶卷」的多拍感，主体锁死；prompt 在 thread。UGC 假日常 / 种草连更模板。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2099479395283214473)

- **Chef & Cat 双人角色圣经表（严格 ref 锁脸）** — Split-screen 设定表：上传 sheets 死守脸与造型，联名 IP / 角色资产封面可复用。 [@TechieBySA](https://x.com/TechieBySA) · [原帖](https://x.com/TechieBySA/status/2099460145449185433)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium cinematic character bible sheet for THE CHEF & THE CAT. Use uploaded character sheets as strict visual reference for both characters. Do not change either's appearance.

LAYOUT: Split screen partner format. Two halves divided by a bold dramatic dividing element in the center.

LEFT SIDE — CHEF: Clean white watercolor splash behind him fading into center. Large bold brushstroke text CHEF top left in deep red. Below small text: SATURDAY AFTERNOON / KITCHEN. One massive dramatic cropped hero image of the chef from mid-thigh up — desperate exhausted expression, white chef uniform, tall white hat slightly crooked, one arm outstretched reaching for something he can't catch, white watercolor splash radiating behind him.

CENTER: Bold dramatic THE FISH in deep red, slightly worn. Below it small text: KITCHEN. ONE FISH. ONE PROBLEM.

RIGHT SIDE — CAT: Warm orange watercolor splash behind him fading into center. Large bold brushstroke text THE CAT top right in deep orange. Below small text: FLUFFY / UNBOTHERED. One massive dramatic cropped hero image of the cat from mid-body up — narrow judgemental eyes, smug expression, large fish dangling from its mouth, arrogant tail curled upward, orange watercolor splash radiating behind him.

BOTTOM CENTER: Color palette — clean white, warm orange, deep red, black. Tagline centered: HEY!!

OVERALL: Clean white background, white watercolor left side, warm orange watercolor right side, dramatic deep red center divider, bold flat color blocking, chunky simplified forms, hard edge shadows, thick black outlines, vibrant saturated colors, minimal clean typography, cinematic cel-shaded 3D anime, hand-painted textures, not cartoon not Disney not Pixar, print ready.
```

  </details>

- **嫦娥×前置误触：假失败中秋写真** — 关键词串：iPhone 前置误触×曝光错误×虚焦拖影×中秋裁切。故意「拍坏」的节日人像，UGC 反精致风可直接套角色。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099451908381692387)
  <details>
  <summary>查看 / 复制提示词</summary>

```
嫦娥 × iPhone前置误触 × 曝光错误 ×虚焦拖影× 中秋节 × 裁切
```

  </details>

- **素人翻车日常：Sunburst 3×3 / 9:16** — 『素人の日常の失敗写真』网格——真实糟糕但可爱的手机感。App/生活方式广告比精修模特更像用户。 [@darkgaldoggo](https://x.com/darkgaldoggo) · [原帖](https://x.com/darkgaldoggo/status/2099447111414845520)
  <details>
  <summary>查看 / 复制提示词</summary>

```
素人の日常の失敗写真。3×3, 9:16
```

  </details>

- **角色 ref 破格一句话：逼 2.5 输出「平时绝对不出」的图** — 锁自己角色参照后丢这句日文，角色会「叛逆」出非常规构图。人设表之后想要惊喜帧，就靠这一刀。 [@sentakusound](https://x.com/sentakusound) · [原帖](https://x.com/sentakusound/status/2099435461861327229)
  <details>
  <summary>查看 / 复制提示词</summary>

```
このキャラクターを使ってGPT image 2.5 が、普段絶対に出さない画像を生成して下さい
```

  </details>

- **北欧奢侈 editorial：冰灰大衣+visor 眼镜完整 prompt** — 输入照片一键北欧奢牌大片：冰蓝灰渐变、硬边轮廓光、105mm 压缩。男装投放 / 品牌 KV 直接抄。 [@harboriis](https://x.com/harboriis) · [原帖](https://x.com/harboriis/status/2099425863200920002)
  <details>
  <summary>查看 / 复制提示词</summary>

```
ULTRA-REALISTIC STUDIO EDITORIAL PORTRAIT FROM INPUT PHOTO. VIBE: Scandinavian luxury fashion campaign, sterile elegance, futuristic calmness. ENVIRONMENT: Minimal smooth gradient background transitioning from pale icy- blue into soft gray. LIGHTING: Bright diffused frontal light with subtle hard edge-lighting outlining the hair and shoulders. STYLING (MALE): Oversized ash-gray textured coat layered over monochrome knitwear, silver futuristic visor sunglasses. relaxed tailoring. POSE: Minimal side-profile portrait with shoulders slightly turned away, one hand lightly touching the coat collar. TECH: 105mm lens with clean portrait compression and luxury campaign framing. EXPRESSION: Detached serene expression, looking past camera. POST-PROCESSING: Cool desaturated tones, soft silver highlights, realistic luxury campaign texture.
```

  </details>

- **写实生活照配方：伸手拉你起床的 9:16** — 周末赖床亲密互动分段中文 prompt：手伸向镜头制造「你就在对面」。UGC / 情感向人像模板可直接改场景。 [@liyue_ai](https://x.com/liyue_ai) · [原帖](https://x.com/liyue_ai/status/2099408990228914449)
  <details>
  <summary>查看 / 复制提示词</summary>

```
风格方向： 周末赖床后的亲密互动
场景方向： 卧室床边 / 地毯旁
服装方向： 奶油白修身短袖家居裙
气质标签： 亲近、慵懒、温柔、轻甜、自然
身形方向： 丰腴自然曲线
线条强调： 中偏强
镜头方向： 女生坐在床边或地毯上，身体略微前倾并偏向镜头，一只手向镜头伸过来，像要拉男友起身，另一只手轻撑床沿，抬眼看向镜头轻笑
画幅比例： 9:16
互动重点： 手伸向镜头会形成很强的“你就在她面前”的感觉，前倾动作还能自然表现胸腰关系。
```

  </details>

- **攻壳草薙素子：一年后再测 Images 2.5** — Zho 把素子拉回赛博写实。角色锁定 + 材质光感的回归测，国风/二次元 IP 人设出片可对标这档质感。 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO) · [原帖](https://x.com/ZHO_ZHO_ZHO/status/2099365177938575853)

- **钴蓝棚拍街潮男装：奢华 campaign 完整 prompt** — 深蓝针织+烟色透明框眼镜+无缝钴蓝背景，手部与织物约束写死。男装电商主图 / 投放素材可直接用。 [@john_my07](https://x.com/john_my07) · [原帖](https://x.com/john_my07/status/2099357576484069651)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create an ultra-photorealistic high-end studio fashion portrait of a handsome young adult man in his early-to-mid 20s, photographed like a luxury streetwear campaign.

Subject & Appearance:
A naturally handsome young man with masculine yet refined facial features, realistic skin texture, subtle natural imperfections, expressive eyes, defined jawline, straight nose, natural lips, and light authentic stubble. Tousled, slightly wavy dark-brown hair with realistic individual strands. His appearance should feel believable and photographic rather than overly perfected or AI-generated.

Pose & Expression:
Place him in a relaxed seated pose, leaning slightly toward the camera. His torso is angled subtly while his shoulders remain relaxed. One arm is bent upward with his hand resting naturally near his mouth and chin, with his fingers positioned loosely and realistically. His other arm rests casually in the foreground. His head is tilted slightly upward and toward the side, with a calm, confident, slightly aloof expression. His gaze is directed toward the camera through the glasses. The pose should feel effortless and editorial rather than staged.

Wardrobe:
Dress him in a premium oversized dark-navy textured knit sweater with a relaxed streetwear silhouette. The sweater should have realistic heavy fabric, natural folds, ribbed cuffs, and believable draping around the shoulders and arms. Pair it with relaxed-fit light-wash blue denim jeans. Add a minimal fine silver chain necklace. Keep accessories understated and luxurious.

Eyewear:
Add sophisticated oversized translucent/clear-frame glasses with lightly tinted smoky lenses. The glasses must have realistic reflections and accurate interaction with the studio lighting. Ensure the frames sit naturally on the face without distorting the eyes or facial proportions.

Studio & Background:
Use a completely seamless, rich cobalt-blue studio backdrop extending uniformly across the entire frame. No visible studio equipment, furniture, texture, gradients, patterns, or environmental distractions. Maintain a premium monochromatic blue fashion-campaign aesthetic.

Lighting:
Use soft directional studio lighting coming from slightly above and to one side of the subject. Create subtle highlights across the forehead, cheekbones, nose, lips, glasses, and hair while maintaining realistic shadow transitions along the jawline, neck, sweater, and hands. Include gentle rim separation around the hair and shoulders. Preserve natural skin texture and realistic tonal variation. Avoid harsh shadows or artificial HDR.

Camera & Composition:
Professional full-frame fashion photography, approximately 50–85mm portrait-lens feel, slightly low camera angle, shallow depth of field, realistic perspective, natural facial proportions, and crisp focus on the eyes and face. Frame the subject tightly from approximately the knees/upper legs upward, with the foreground jeans subtly visible. Maintain strong editorial balance with some clean negative space around the head and shoulders.

Photographic Quality:
Ultra-photorealistic, luxury fashion campaign, premium commercial advertising photography, cinematic studio portrait, subtle film-grade contrast, realistic skin pores, fine facial hair, detailed knit texture, physically accurate fabric folds, realistic hands and fingers, natural hair strands, authentic optical reflections, soft depth of field, refined color grading, high dynamic range without an HDR look, professional magazine-cover quality.

Important:
The final image must look like a genuine professional photograph captured in a controlled fashion studio, not a digital illustration or AI artwork. Prioritize anatomical accuracy, realistic hands, natural facial proportions, physically believable clothing, authentic skin texture, and convincing studio lighting.
```

  </details>

- **参考图一发四张定妆照：同人四造型一致性** — 一张参考图锁脸+泪痣，一次出 Cyber Grunge / Quiet Luxury / Sporty Siren / Butterfly Core 四套。人设测一致性直接抄。 [@johnAGI168](https://x.com/johnAGI168) · [原帖](https://x.com/johnAGI168/status/2099331412444713025)
  <details>
  <summary>查看 / 复制提示词</summary>

```
✨ 4 套定妆照 Prompt｜同一人物，不同风格

统一人物锚点：
同一位成年东亚女性、骨相五官一致、左眼下方保留标志性泪痣、真实毛孔与皮肤纹理、9:16 竖屏摄影、拒绝塑料假人感。

🖤 01｜暗黑甜酷辣妹 Cyber Grunge Chic
9:16 竖屏人像大片。同一位成年东亚女性，立体精致五官，左眼下方有一颗清晰的标志性泪痣，冷艳眼神，水光裸粉唇釉。墨黑色长发带细微冷银灰挑染，轻薄空气刘海。身穿解构风黑色罗纹镂空挂脖露肩针织短上衣，展露优雅锁骨与直角肩，佩戴细银十字架项链。右手优雅捏着一支银黑金属细管口红，轻贴下唇，直视正前方固定镜头。背景为东京涩谷街头与大楼霓虹虚化，自然漫射光，真实微小毛孔与发丝细节，8K 超清写实摄影。

🤍 02｜法式老钱千金 Quiet Luxury Silk
9:16 竖屏人像大片。同一位成年东亚女性，五官与左眼下泪痣保持一致，从容慵懒的温柔浅笑，奶茶水润双唇。丰盈蓬松的焦糖蜜糖浅棕色法式大波浪卷发，搭配法式刘海。身穿香槟金色高光真丝缎面深 V 蕾丝拼接修身吊带背心；米白色粗针织开衫自然滑落一侧香肩。右手轻捏金色圆盒气垫粉扑，点按在右侧面颊，正对镜头。背景为柔和奶油感浅景深街景，柔和天光，8K 写实人像摄影。

🖤 03｜美式街头酷辣 Sporty Siren Corset
9:16 竖屏时尚大片。同一位成年东亚女性，五官与左眼下泪痣保持一致，神态冷峻自信，微光复古正红唇彩。极光冷白金色长直发，垂顺丝滑，搭配齐眉轻薄刘海。身穿极度修身的黑色哑光皮革鱼骨紧身胸衣 Corset；外搭黑白拼色复古棒球服夹克，敞开并自然滑落单肩。右手单指轻抚耳际发丝，下巴微微抬起，直视镜头。东京繁华街头背景，高对比侧逆光，8K 商业级真实摄影。

💚 04｜落日仙女蝶饰 Ethereal Butterfly Core
9:16 竖屏电影感人像。同一位成年东亚女性，五官与左眼下泪痣保持一致，笑容明媚，水光草莓粉唇。浅杏奶茶金色法式羊毛卷长发，发间错落点缀数枚半透明粉白色立体蝴蝶发夹。身穿复古水洗苔藓绿色弹力抹胸紧身包臀短裙；佩戴细珍珠锁骨链。双手自然垂在身体两侧，手中无任何设备，正对固定机位。背景为东京商业街入口，落日暖黄色漫射光，8K 胶片级写实摄影质感。

同一张人物参考图，只换发型、妆容、服装、光线和场景。
```

  </details>

- **女儿国国王：千禧年非主流公式一键出片** — 「千禧年非主流 × 早期数码感 × 反差萌 × 女儿国国王」——中文 emoji 公式党再下一城，热点人设直接套。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099303054797606998)
  <details>
  <summary>查看 / 复制提示词</summary>

```
千禧年非主流 × 早期数码感 × 反差萌 × 女儿国国王
```

  </details>

- **角色连续夜间手机快照：身份锁 + 直闪抓拍** — 同一角色东京雨后夜街系列：后三四分、直闪过曝、走路半步——专治「写真感太假」。UGC / 旅行人设连更可抄整段 prompt。 [@frametheory058](https://x.com/frametheory058) · [原帖](https://x.com/frametheory058/status/2098413109258207670)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Ultra-realistic late-night smartphone snapshot, 9:16 vertical.

Use the reference only to establish the same fictional female character's overall appearance and continuity. Keep her recognizable across the series with the same dark-brown wavy hair, natural features, black fitted sleeveless tank top, loose high-waisted light-blue jeans, small gold hoop earrings, delicate necklace, white sneakers, and small black shoulder bag.

Scene:
A quiet Tokyo side street late at night after light rain. She walks beside an off-white ceramic-tiled building while distant convenience-store lights, traffic signals, parked bicycles and small Japanese storefronts softly disappear into the darkness. Wet pavement catches scattered reflections.

New candid moment:
Photograph her from a slightly low rear three-quarter angle, about two steps behind her. She has just slowed down and casually turns only her upper body toward the camera while continuing forward. One hand is loosely tucking windblown hair behind her ear while the other hangs naturally beside her bag.

She looks toward the camera from the corner of her eyes with a tiny closed-mouth smile, as though she noticed her friend taking another photo and is trying not to laugh.

No deliberate fashion pose. No exaggerated expression. Her shoulders remain relaxed, hips and legs naturally positioned from walking, with one foot caught halfway through the next step.

Camera:
Modern smartphone rear camera with direct flash. Photographer walking at the same time, creating subtle accidental camera shake. Slight motion blur around her hair, moving leg and fingertips, while her eyes remain just barely readable. Mild rolling-shutter distortion, imperfect autofocus, slight edge softness and realistic digital noise.

Composition should feel accidental: her body sits slightly off-center, a little too much empty darkness on one side, with part of her shoe approaching the bottom edge of frame.

Flash & exposure:
Hard direct phone flash illuminates her face, shoulder, black top and denim while the street behind her falls rapidly into darkness. Slightly overexposed skin highlights, hard natural shadow against the tiled wall, shiny flash reflections on individual hair strands and subtle denim texture. Distant lights bloom and smear naturally.

Aesthetic:
Raw Pinterest night-photo-dump energy. Intimate, youthful, spontaneous and imperfect. It should look like a friend took the photo during a random Tokyo night walk—not a photographer conducting a photoshoot.

Real pores, tiny skin variations, flyaway hairs, natural fabric wrinkles, realistic body proportions and ordinary smartphone processing.

Absolutely no: studio lighting, cinematic teal-orange grading, professional bokeh, fashion-editorial posing, perfect symmetry, airbrushed skin, artificial beauty retouching, HDR look, DSLR sharpness, staged composition, AI-perfect anatomy or polished commercial photography.

The final result should feel like an unexpectedly beautiful photo hidden among 30 messy pictures from the same night.
```

  </details>

- **角色设定表身份锁：turnaround + 表情全套 prompt** — 参考图一锁到底：正侧背、表情格、材质色板、比例尺。IP / 游戏人设交付文档级提示词，整段可复制。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2098373493662392732)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium professional character design reference sheet / production model sheet based strictly on the provided reference image.  REFERENCE & IDENTITY LOCK: Use the uploaded reference as the single source of truth for the character's identity. Preserve the exact facial identity, facial structure, hairstyle, hairline, eye shape and color, eyebrows, nose, lips, skin tone, body proportions, physique, age appearance, distinctive features, costume design, accessories, footwear, colors, patterns and all recognizable visual details. Do not redesign, beautify, simplify, age, de-age, or reinterpret the character. CHARACTER DESIGN ANALYSIS: Before constructing the sheet, internally analyze and lock the character's:  facial construction head-to-body ratio  body proportions  shoulder width and torso structure  limb length and joint placement  silhouette  hairstyle and hair volume  costume construction  accessory placement  color relationships  material characteristics  distinctive identity anchors  All subsequent views must represent the exact same character design.  PAGE FORMAT: Create one sophisticated studio-grade character reference board, landscape 16:9, clean neutral/off-white studio background, refined editorial production-board aesthetic, highly organized hierarchy, generous spacing, subtle technical guide lines, restrained professional typography-style labels where appropriate, no decorative clutter.  01 — HERO CHARACTER PORTRAIT  Place one larger polished head-and-shoulders or three-quarter portrait as the visual identity anchor. Show the character's canonical facial identity clearly with neutral professional expression and accurate hairstyle, skin, costume and accessories.  02 — FULL-BODY TURNAROUND  Create a clearly organized full-body turnaround showing the same character at identical scale and proportions:  FRONT VIEW  3/4 FRONT VIEW  SIDE PROFILE  3/4 BACK VIEW  BACK VIEW  Use a neutral standing pose with consistent posture and anatomical alignment.  Keep head height, eye line, shoulder line, waist, hips, knees and feet consistently aligned across every view.  The costume, hairstyle, accessories, seams, patterns, footwear and silhouette must remain identical from every angle.  03 — EXPRESSION STUDY  Include a clean expression grid containing approximately 6 expressions:  Neutral  Happy / subtle smile  Serious  Angry / determined  Surprised  Sad / emotional  Maintain the exact same facial identity, head proportions, hairstyle and facial construction in every expression.  Expressions should demonstrate believable facial acting rather than exaggerated deformation.  04 — SIGNATURE POSE STUDIES  Include 4–6 full-body pose studies that communicate the character's personality and physical behavior.  Use varied but believable poses such as:  relaxed standing  confident stance  walking  sitting  interacting with an object  dynamic signature pose  Maintain exact character proportions, costume construction and recognizable silhouette in every pose.  05 — COSTUME & DETAIL CALLOUTS  Add several clean close-up detail panels showing the most important design elements:  hairstyle / hair detail  face detail  collar / neckline  sleeves / garment construction  footwear  jewelry or accessories  distinctive emblem / pattern / texture  important prop if present  Show construction and material clearly without turning the sheet into a decorative fashion collage.  06 — MATERIAL STUDIES  Visually communicate the primary materials present in the design:  fabric, leather, metal, denim, silk, knit, plastic, glass, jewelry, hair, skin or other relevant materials.  Show realistic surface behavior, texture, reflectivity and construction appropriate to each material.  07 — COLOR PALETTE  Include a compact professional color palette strip containing the dominant character colors.  Organize colors according to their visual role:  skin  hair  primary costume  secondary costume  accent color  accessories / materials  Keep the palette faithful to the reference.  08 — PROPORTION & SILHOUETTE GUIDE  Include a subtle technical proportion guide beside the turnaround.  Show:  overall height  head-to-body ratio  major horizontal alignment guides  key body proportions  clean silhouette thumbnail  Keep this section understated and production-oriented.  09 — DESIGN CONTINUITY  Treat the entire page as a single canonical character source of truth.  Every panel must depict the SAME person/character with:  identical facial identity  identical body proportions  identical hairstyle  identical costume  identical accessory placement  identical color palette  identical design language  consistent left/right details  No accidental costume changes, missing accessories, duplicated accessories, altered facial features, changing body proportions, inconsistent hairstyles or unexplained design variations.  VISUAL DIRECTION: High-end professional character design presentation, studio production reference quality, sophisticated concept-art discipline, clean polished rendering, precise construction, controlled neutral lighting, realistic material definition, excellent anatomical consistency, crisp readable details, refined editorial layout, premium art-direction quality.  The sheet should feel like an actual professional animation / game / visual-development production document, not a collection of random AI images.  COMPOSITION: Clear information hierarchy, balanced negative space, aligned panels, consistent character scale, clean grid system, logical visual flow, no overlapping figures, no cropped bodies, no confusing perspective, no unnecessary scenery.  CAMERA / VIEW CONTROL: Turnaround views should use consistent orthographic-like framing and neutral perspective. Expression studies should use a consistent head framing. Pose studies may use natural perspective while preserving character proportions. LIGHTING: Neutral studio illumination designed for design inspection rather than cinematic drama. Soft, even, physically believable light with controlled shadows and accurate material readability.  PHOTOGRAPHIC / RENDER FINISH: Ultra-clean high-end visual development presentation, realistic surface detail, natural skin and hair rendering, physically believable materials, sharp but refined detail, professional production-board finish.  OUTPUT QUALITY: 16K: 15360 × 8640 ≈ 132.7 million pixels, high-resolution professional quality. NEGATIVE CONSTRAINTS: No character redesign, no identity drift, no inconsistent proportions, no changing face, no changing hairstyle, no costume variations, no missing accessories, no duplicated accessories, no extra limbs, no malformed hands, no distorted anatomy, no random props, no dramatic scenery, no cinematic background, no excessive effects, no clutter, no watermark, no logo, no cropped views.
```

  </details>

- **军训季 Editorial：iPhone 自拍公式一键出片** — 「休憩逸趣 × Editorial × 原相机自拍 × 女大学生 × emoji」——季节热点人设公式，小红书军训季直接套。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2098360855939469443)
  <details>
  <summary>查看 / 复制提示词</summary>

```
军训休憩逸趣 × Editorial视觉企划 × iPhone 原相机自拍× 女大学生 × ｛emoji ｝
```

  </details>

- **毕业季影棚写真：2026 灯牌 + 金纸屑** — 三件套西装 × 礼帽 × 头顶光锥，竖版 9:16 现成可卖。留学 / 毕业季广告素材库补这一条就够。 [@abs_uiux](https://x.com/abs_uiux) · [原帖](https://x.com/abs_uiux/status/2098357739814560247)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a photorealistic cinematic graduation portrait of a confident adult man celebrating his graduation in 2026. Show him seated casually on large freestanding "2026" marquee numbers filled with warm glowing bulbs.

He wears an elegant light-gray three-piece suit with a matching waistcoat, crisp white dress shirt, sophisticated purple patterned tie, polished black leather dress shoes, and a graduation stole featuring bold red, white, and black stripes. Add a traditional black graduation mortarboard with tassel.

Pose him facing the camera with a big, genuine, joyful smile. His posture should feel relaxed yet proud, with his legs naturally apart. One hand rests casually near his lap while the other arm is raised high, holding a rolled graduation certificate tied with a red ribbon, creating a strong celebratory gesture.

Surround him with falling metallic gold confetti, frozen naturally in mid-air at different depths. Use a dark charcoal-to-black studio background with subtle atmospheric haze. Place a dramatic overhead spotlight directly above him, creating a soft cone of light that highlights his face, suit, graduation cap, and diploma while leaving the edges of the scene slightly darker.

The giant illuminated 2026 numbers should sit behind and beneath him, producing warm golden light that contrasts beautifully with the cool gray suit and dark background.

Style: luxury graduation editorial photography, premium studio portrait, cinematic lighting, realistic skin texture, natural proportions, crisp tailoring, accurate hands, realistic fabric detail, shallow depth of field, subtle floor reflections, professional color grading, celebratory atmosphere, ultra-detailed, photorealistic, vertical 9:16 composition, high resolution.
```

  </details>

- **UGC 起步图 30 秒修好：Pinterest 构图 → 反推 prompt** — 起步静帧糊，后面 Seedance 全完。Pinterest 偷构图机位，/detailed-image-2-text-prompt 反推再改人设。营销向 AI UGC 的地基课。 [@ViralOps_](https://x.com/ViralOps_) · [原帖](https://x.com/ViralOps_/status/2098329951967510937)
  <details>
  <summary>查看 / 复制提示词</summary>

```
/detailed-image-2-text-prompt

Workflow:
1. Find a casual Pinterest photo with the framing / pose / camera angle / environment you want (reference composition, not identity).
2. Upload it to ChatGPT Images 2.5 and run /detailed-image-2-text-prompt so the model expands it into a detailed generation prompt.
3. Edit person / clothes / location details in that prompt, then regenerate.
4. Repeat with different casual refs to build a realistic AI-creator still library before Seedance / video.
```

  </details>

- **80s 复古肖像拼贴：文化区锁脸六到八姿** — 参考脸推断文化区，一次出 6–8 姿复古杂志拼贴，身份锁写死。人设海报战役图，长 prompt 齐活。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2098323157610582344)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create your own stunning vintage portrait collage ✨

Use your reference photo + the prompt below to generate a series of cinematic, editorial-style portraits with different poses, outfits, expressions, and lighting — while maintaining a consistent facial identity.

Created with @ChatGPT image 2.5 
Prompt :
Use the uploaded photo as the identity reference. Study the person's face, skin tone, eye shape, hair texture and features, and silently infer the most likely country or cultural region they belong to. Then recreate this exact same person as a star of that country's 1980s pop culture — its cinema, TV, music and fashion magazines of that decade — in one single image containing 6 to 8 different poses arranged as a retro magazine-style photo collage.

Identity lock (most important): the face must be the same real person in every pose — same bone structure, nose, lips, eyes, eyebrows, skin tone, any moles or marks, same facial proportions. Only the hairstyle, outfit, jewellery, pose, expression and background change. Keep the person's natural gender and apparent age.

Layout: one large hero pose fills roughly the left 60% of the frame — a three-quarter over-the-shoulder look back at camera with a confident smile. Around it, 5 to 7 smaller pose panels overlap each other with soft feathered edges like a hand-made 80s poster: close-up beauty portrait, playful blowing a kiss, side-profile glance, hands-on-hips full standing pose, seated pose leaning on an elbow, laughing candid, and a moody looking-away pose. Faces stay large and clearly visible in every panel.

Era styling — pick everything from that country's real 1980s look: authentic 80s hairstyle of that region (big voluminous blow-dried curls, feathered layers, or a bouffant with a side clip for women; layered longer hair, moustache-era grooming or wet-look side part for men), and period-correct outfits from that culture — traditional dress of the region as it was worn in the 80s, plus one denim or leather jacket, bold geometric or floral prints, puff sleeves or wide lapels, oversized hoop or drop earrings, stacked bangles or a chunky watch, bright lipstick or era-correct makeup. Each pose wears a different outfit. Include small era props from that country: a cassette player, a rotary phone, a film magazine, vintage sunglasses, a vase of fresh flowers.

Backgrounds: warm 80s photo-studio backdrops in maroon, teal and mustard, a velvet curtain, a wall of period posters, string lights, wooden furniture — all from that country's 80s aesthetic.

Photography: shot on 1980s colour negative film, warm golden tungsten key light with soft fill, gentle halation on highlights, slightly soft focus, visible fine film grain, rich saturated but faded reds and teals, mild vignette, glossy magazine print finish. Photorealistic, high detail, faces sharp and clean.

Palette: 60% warm amber and maroon tones, 30% deep teal and emerald, 10% hot pink accents.

Output one single vertical portrait-orientation image with all poses in it, no text, no captions, no logos, no watermark.
```

  </details>

- **90s 日杂 CCD 试衣间：高光溢散配方** — 9:16 竖版、柔光 CCD、腮红/锁骨高光 bloom。低对比奶油灰 + 细颗粒，日杂试衣间感可抄长 prompt。 [@BubbleBrain](https://x.com/BubbleBrain) · [原帖](https://x.com/BubbleBrain/status/2098315158997307550)
  <details>
  <summary>查看 / 复制提示词</summary>

```
9:16 vertical, ultra-realistic portrait photography, 90s Japanese magazine fitting-room photoshoot style, soft-light CCD texture, obvious highlight bloom and slight haze.
A clearly adult Korean female idol, about 23–27 years old, fair natural skin, slender well-proportioned figure, shoulder-length black straight hair slightly messy and fluffy, long bangs falling naturally and partially covering one eye. Delicate features, haughty and languid expression, slightly looking down at the camera. Soft pink natural makeup, gentle pink lips. Keep real skin texture, fine pores, and natural facial asymmetry.
She wears a black thin cropped short-sleeve T-shirt in soft fitted cotton, hem stopping at the upper abdomen and exposing the waist, midriff, and natural navel. Bottom: black minimalist low-rise bikini-style bottoms, waistline sitting naturally near the hip bones, simple design.
She stands in a small 90s Japanese magazine-style fitting room with light beige-gray walls, a narrow full-length mirror, simple hooks, and soft overhead lighting. Natural standing pose: one leg supporting, the other slightly bent forward, hip shifted naturally to one side. Thinking pose 🤔: one hand raised, index finger lightly resting on the chin, thumb near the jawline, gesture natural and restrained; the other hand hanging naturally at her side. Head slightly tilted, eyes looking down at the camera with a careless, thoughtful look.
Low-angle upward shot, camera close to the subject, slight wide-angle without exaggerated distortion, emphasizing vertical leg extension and slender proportions. Composition includes the head, upper body, full waist and midriff, hips, and most of the legs. Subject occupies the main part of the frame.
Soft hazy lighting. Soft scattered light from the front and above. Slight overexposure on the cheeks, nose bridge, collarbones, shoulders, waist, midriff, and legs, blooming softly outward into clear highlight overflow, halation, bloom, and soft fog. Highlights are creamy white glow; shadows are soft and pale with no hard edges.
Overall low contrast, low saturation, creamy gray and pale warm skin tones, slightly lifted blacks, fine CCD noise and film grain, slightly soft edges, soft-focus filter, and atmospheric haze. Like a casually captured page from a 90s Asian photo magazine.
Photorealistic, real-camera photography, real skin, hair strands, and fabric texture. Soft CCD, highlight bloom, hazy and dreamy but not over-retouched.
Avoid: plastic skin, excessive beautification, over-sharpening, HDR, hard light, strong shadows, anime look, CGI, fisheye, exaggerated wide-angle, limb deformities, extra or wrong fingers, cluttered background, cheap influencer filters.
```

  </details>

- **秦淮八艳群像：CCD 直闪 + 八人各具情态** — Sunburst 中文短 prompt：脂香绮艳、顾盼生春、八美合照。古风/国风营销测群像一致性，直接抄这串。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2098314775344394279)
  <details>
  <summary>查看 / 复制提示词</summary>

```
脂香绮艳；秦淮烟月；顾盼生春；各具情态；CCD直闪；秦淮八艳：柳如是、陈圆圆、李香君、董小宛、顾横波、卞玉京、寇白门、马湘兰合照
```

  </details>

- **一个角色，25+ 世界观：宇宙级一致性复用** — 同一角色横扫吉卜力 / 热血番 / 乐高 / 赛博朋克 / 写实电影……身份不散、视觉语言全换。角色 → 分镜 → 海报 → 短视频，一套人设吃完整条内容链。 [@MonetizationDon](https://x.com/MonetizationDon) · [原帖](https://x.com/MonetizationDon/status/2098297370291134547)

- **Sunburst 黑白编辑肖像：脸锁 + 杂志光** — 参考图进 Sunburst，高反差棚拍黑白、细颗粒、极简背景。身份锁写死，杂志感人像直接抄。 [@shushant_l](https://x.com/shushant_l) · [原帖](https://x.com/shushant_l/status/2098290962556727377)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a striking black-and-white editorial portrait of the person in the attached reference image, preserving their exact identity, facial features, skin texture, hairstyle, and proportions. Use dramatic high-contrast studio lighting, deep blacks, crisp highlights, subtle film grain, a clean minimal background, sharp facial focus, natural expression, premium fashion-magazine photography, timeless monochrome tones, and a sophisticated cinematic composition
```

  </details>

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

- **纽约地铁 UGC：折叠屏手写金句生活照** — 乱发、复古圆镜、耳机电车 candid；屏上金句可换。一人团队做「真实感」广告图直接改场景复用。 [@Naiknelofar788](https://x.com/Naiknelofar788) · [原帖](https://x.com/Naiknelofar788/status/2098252670385676491)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a cinematic, candid lifestyle photograph inspired by the reference image, but featuring a young woman sitting comfortably inside a New York City subway.

She has soft, natural features, slightly messy dark hair tied loosely, round vintage-style glasses, and white wired earphones. She is wearing an oversized charcoal-brown coat over a cozy cream knit sweater and relaxed light-wash wide-leg jeans. Her posture is relaxed and natural, with her legs comfortably stretched forward.

She is quietly looking down at an open foldable smartphone in her hands, while holding an iced matcha latte in the other hand. The phone should look premium and realistic, with a clean minimal design.

IMPORTANT — PHONE SCREEN: Replace the original book/quote completely. On the inner screen of the foldable phone, display the elegant handwritten-style quote:

“romanticize your ordinary days ♡”

Make the text clearly visible, beautifully typeset, and naturally integrated into the phone screen.

Set the scene inside a realistic stainless-steel NYC subway carriage, with blue seats, metal panels, subway window reflections, vertical poles, and softly blurred passengers in the background. Include a subtle subway route/sign panel in the background for authentic NYC atmosphere.

The iced matcha cup should have a small minimalist café-style label reading:

“little joys”

Photography & Mood

* candid street-photography aesthetic
* cozy, introspective, effortless mood
* muted earthy tones
* soft natural fluorescent subway lighting
* realistic skin texture
* subtle film grain
* gentle shadows
* slightly desaturated editorial color grading
* shallow depth of field
* authentic reflections and imperfections
* premium fashion-editorial photography
* not overly posed
* not glamorous or studio-like
* photorealistic, believable everyday moment

Composition: vertical 4:5, medium-full body framing, woman centered slightly toward the left, phone and matcha clearly visible, subway environment surrounding her, natural perspective, highly detailed.
```

  </details>

- **漫画气泡表情：心声盖住对方台词** — 方气泡盖住对方台词、咬住气泡的凶妹等叙事梗；画幅 4:5 写死。玩信息差比纯美图更有用。 [@kabumira862571](https://x.com/kabumira862571) · [原帖](https://x.com/kabumira862571/status/2098251497385721990)
  <details>
  <summary>查看 / 复制提示词</summary>

```
“ねぇねぇ、聞いてよ！”という女の子と、その吹き出しに男の子は心の中で“聞こえないフリしとこう”という四角い吹き出しをかぶせる。
アスペクト比は縦長（4:5）で描画
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

- **电商实战：同一只帆布包，小红书一个字都不要** — 同一只帆布包连发多张零文案种草图——靠构图、材质光泽和场景差讲卖点。小红书别只会堆文案清单，先让图自己把「想带出门」做出来。 [@gaoren7716](https://x.com/gaoren7716) · [原帖](https://x.com/gaoren7716/status/2102943070522319003)

- **蜜桃粉真丝睡裙：9:16电商详情页完整中文提示词** — 首屏卧室场景+中段平铺微距+底部包装尺码，一整页生活方式详情页配方。敏感品类也能端庄出片——先锁覆盖与姿态，再谈真丝光泽。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2102924564787544273)
  <details>
  <summary>查看 / 复制提示词</summary>

```
生成一张9:16竖版蜜桃粉真丝睡裙电商详情页，整体像高级生活方式品牌的移动端页面。产品为短款轻薄吊带睡裙与同色配套内裤，主体采用柔粉真丝、细窄蕾丝领缘和可调节肩带，使用成年模特穿着端庄展示，胸部与敏感区域完整覆盖。首屏设在安静的私人酒店卧室，模特侧身坐在床沿，姿态放松自然，背景为米白寝具、浅木床头和柔和窗光；标题“蜜桃晨光真丝睡裙”，卖点“亲肤顺滑·自然垂坠·轻盈无束缚”。中段转为纯色商品区，展示正背面平铺、领口蕾丝、肩带滑扣、侧缝、下摆弧线和真丝光泽微距。加入布料悬垂测试、透气示意、色卡、长度数据、尺码表与不同身高穿着参考。底部展示折叠收纳、丝质洗护袋和礼盒包装。画面温柔清晰，避免过度磨皮、诱惑姿势、透视走光和杂乱文案。
```

  </details>

- **豪华抓娃娃机爪抓 [PRODUCT]：可填槽电商图** — 4:5 竖版：金爪从顶吊起一件真品，下方堆满同款。换掉 [PRODUCT] 就能出辣酱/护肤/周边——玩味钩子 + 奢侈广告感，电商主图直接用。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2102257393216463021)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a hyper-realistic premium editorial product photograph for [PRODUCT], inspired by a luxury claw/crane arcade machine, in a vertical 4:5 composition.

A polished gold/brass metallic claw descends from the top of the frame, gripping and lifting one [PRODUCT] in the upper-center. Accurately visualize the product’s real-world shape, materials, packaging, colors, branding, and distinctive design.

Below the claw, create a massive overflowing pile of identical [PRODUCT] items, naturally scattered and stacked across the lower two-thirds of the frame. Make every object physically believable with realistic scale, perspective, contact shadows, reflections, and depth.

The claw mechanism features detailed articulated joints, gears, bolts, mechanical components, and a visible coiled cable extending upward, constructed from polished gold/brass metal with realistic reflections.

Use a seamless warm studio background with a muted tone that naturally complements the product’s colors. Apply soft cinematic studio lighting, subtle warm highlights, realistic shadows, controlled reflections, and premium commercial photography aesthetics.

The composition should instantly communicate a playful claw-machine concept while maintaining a sophisticated luxury advertising look. Sharp details, photorealistic materials, vibrant yet cohesive colors, realistic depth, clean framing, high-end editorial quality.

Preserve the recognizable identity of [PRODUCT]. Do not invent unrelated packaging, alter its core design, add unnecessary text, or introduce extra branding.

No text overlays, no watermark, no distorted objects, no malformed products.

Aspect Ratio: 4:5
Style: Hyper-realistic premium commercial product photography
```

  </details>

- **可填槽午餐盒收藏品：换名字就能出周边** — 把自己的照片塞进复古午餐盒收藏品包装——把 [YOUR NAME OR @HANDLE] 换成真名再跑 Sunburst（Firefly 也可）。个人品牌周边、社群打卡周边，槽位写死比「帮我做个周边」靠谱一百倍。 [@D_the_Designer](https://x.com/D_the_Designer) · [原帖](https://x.com/D_the_Designer/status/2102151791836316129)
  <details>
  <summary>查看 / 复制提示词</summary>

```
The Daily D 011 — personal lunch box collectible (GPT Image 2.5 Sunburst / Adobe Firefly)

Use your photo with GPT Image 2.5 Sunburst to make an over-the-top retro collectible lunch box.

Replace [YOUR NAME OR @HANDLE] with your exact name or handle before generating.

Recipe intent:
- Upload a clear face/reference photo
- Generate a retro tin lunch-box product shot as a collectible object
- Brand the lid/side panel with [YOUR NAME OR @HANDLE]
- Keep identity readable on the printed artwork; exaggerate 70s–90s collectible packaging vibes
- Experiment with colorways and share variants

Tip: run on Sunburst for print-like type and package edges; swap only the name slot between gens.
```

  </details>

- **改图十式：先写 keep-list 再点名改什么** — 「make it better」会把你改成路人。十条可复制编辑句：只改背景/锁脸/换光/去路人/只换外套/选区修手/头像裁切/去油光/移产品保标/下一轮只改景深。Images 2.5 更听话，前提是 keep-list 写死。 [@NoravaleAI](https://x.com/NoravaleAI) · [原帖](https://x.com/NoravaleAI/status/2102033775752560738)
  <details>
  <summary>查看 / 复制提示词</summary>

```
upload a photo, paste one prompt per turn:

1. One change
"Change only the background to a plain warm-gray wall. Keep my face, hair, skin tone, clothes, pose, and camera angle exactly as they are."

2. Face lock
"Use this upload as the identity reference. Keep the same face, hairline, and age. Put me standing in a quiet office with window light from the left."

3. Left window light
"Relight this portrait with soft natural light from a window on the left. Keep my face, expression, clothes, and background geometry the same. Do not add a filter look."

4. Remove the extra person
"Remove the person standing behind my left shoulder. Rebuild the wall and the light as if they were never there. Keep my face, pose, and the rest of the room the same."

5. Wardrobe only
"Change only the jacket to a navy wool blazer. Keep my face, hair, body shape, pose, background, and lighting the same."

6. Select and fix
"In the selected area only, remove the object in my hand. Rebuild the hidden fingers and sleeve so they match the rest of the photo. Leave everything outside the selection untouched."

7. Headshot crop
"Recrop this to a chest-up LinkedIn headshot. Keep my face, expression, and clothing unchanged. Do not restyle my hair or smooth my skin."

8. Shine only
"Reduce only shine on the forehead and nose. Keep pores, flyaway hair, and skin texture. Do not change my facial features."

9. Product, keep the label
"Move this product onto a kitchen counter in daylight. Keep the label text, logo, bottle shape, and color exactly as they are."

10. Next turn
"Keep the last edit. Change only the background blur, as if this was shot on a 50mm lens at f/2. Do not retouch my face or clothes."

OpenAI's image guide: 1-3 clear sentences, and say what stays the same. the keep-list is what makes the edit look like your photo.
```

  </details>

- **写真级产品 UGC：厨房补剂瓶 JSON 母版** — 整段 JSON 锁「像真的 Instagram 故事」：厨房晨间自拍 + 瓶标朝镜头 + 真实肤质优先于美颜。补剂/美妆种草广告可换瓶换人——别再写「好看的产品图」。 [@Hamzaaadzn](https://x.com/Hamzaaadzn) · [原帖](https://x.com/Hamzaaadzn/status/2102012174239494461)
  <details>
  <summary>查看 / 复制提示词</summary>

```
{
  "prompt_type": "photorealistic_ugc_product_shot",
  "model_behavior": "Generate a single photograph that is indistinguishable from a real smartphone photo posted by an influencer. Prioritize realism over beauty. Every detail should feel captured, not constructed.",
  "objective": "Casual selfie style photo of a glam, confident woman showing a supplement bottle she genuinely uses, taken in her own kitchen on an ordinary morning. The image must feel like authentic user generated content that could appear in a brand's Instagram stories or a paid social ad without looking like an ad.",
  "belief_to_prove": "This product is part of the daily routine of someone who clearly takes care of herself, so it is worth trusting",
  "emotional_tone": "Effortless, confident, a little playful, unbothered, like she is recommending it to a close friend",
  "subject": {
    "age": "Mid 20s",
    "look": "Striking, naturally beautiful woman with a warm olive skin tone and a healthy sun kissed glow",
    "hair": "Very long dark chocolate brown hair, voluminous, loose tousled waves, slightly messy at the crown, a few strands falling across the shoulders and chest, natural flyaways catching the light",
    "eyes": "Light green hazel eyes, clear and bright, slightly narrowed in a relaxed way",
    "brows": "Full, thick, brushed up and groomed, natural shape",
    "makeup": "Soft full glam: bronzed skin, subtle contour, long fluttery lashes, light brown eyeshadow, glossy nude pink lips, no heavy foundation look",
    "skin": "Real skin texture visible under the makeup, fine pores on nose and cheeks, faint freckles, slight natural shine on the nose and cheekbones",
    "nails": "Medium length almond shaped nails in a milky nude pink gloss",
    "outfit": "Fitted heather grey ribbed cotton tank top with a scoop neckline and thick straps",
    "jewelry": "Thin gold chain necklace with a small round pendant, small gold hoop earrings, three stacked bracelets on the left wrist: a thin gold chain with a tiny charm, a gold tennis bracelet, and a gold and crystal bangle"
  },
  "pose": {
    "body": "Leaning forward onto a kitchen island, left forearm resting flat on the countertop, shoulders slightly angled toward the camera",
    "product_hand": "Right hand raised beside her face, holding the bottle between thumb and fingers at cheek height, label facing the camera, fingers relaxed and naturally wrapped around the bottle",
    "head": "Very slight tilt, chin a touch down, face turned almost straight to the lens",
    "expression": "Direct eye contact with the camera, lips gently pressed together in a soft pout, calm confident half smile in the eyes"
  },
  "product": {
    "type": "A women's daily supplement bottle",
    "appearance": "Matte black plastic bottle with a black screw cap, deep navy blue label with a clean serif brand name in white and a short product name underneath",
    "placement": "Held in the upper right third of the frame next to her face",
    "details": "Label sharp, legible and facing forward, realistic scale relative to her hand, subtle reflection on the cap from window light, fingers partly overlapping the side of the label"
  },
  "setting": {
    "location": "Real lived in modern apartment kitchen",
    "left_background": "Tall fridge covered in personal printed photos of beach trips and friends, a few colorful magnets and stickers, a pink kettle or small appliance sitting on top of the fridge",
    "right_background": "Built in stainless steel oven with a small digital display, flat white handleless cabinets",
    "foreground": "Grey granite countertop with visible speckles, a few faint smudges, nothing arranged or styled",
    "walls": "Soft warm white walls and ceiling, a slightly curved ceiling edge"
  },
  "camera": {
    "device": "iPhone rear camera, main lens",
    "position": "Held by someone standing across the counter at chest height, slightly above her eye line",
    "angle": "Straight on, subtle downward angle",
    "framing": "Square 1:1 crop, subject centered, face in the upper middle of the frame, cropped at the waist",
    "focus": "Sharp focus on the eyes and the product label, background softly out of focus but still readable",
    "lens_feel": "Slight wide angle perspective typical of a phone camera"
  },
  "lighting": {
    "source": "Bright natural daylight from a large window out of frame to the left",
    "quality": "Soft and diffused, warm late morning tone",
    "shadows": "Gentle shadows under the jaw, on the neck and on the right side of the face",
    "highlights": "Natural highlights on the cheekbones, nose bridge, lips and the jewelry",
    "no": "No ring light, no flash, no studio strobes, no dramatic rim lighting"
  },
  "color_grading": {
    "palette": "Warm neutrals: cream, soft beige, grey, gold, with the navy product label as the one strong color",
    "processing": "Standard iPhone processing, slight warmth, mild contrast, true to life skin tones",
    "saturation": "Natural, slightly muted, not filtered"
  },
  "realism_details": {
    "imperfections": "Visible pores, tiny flyaway hairs, faint creases in the tank top, a small smudge on the countertop, slightly uneven lighting across the frame",
    "background_life": "Cluttered fridge, magnets not perfectly aligned, photos slightly curled at the corners",
    "grain": "Light natural sensor noise in the shadows",
    "motion": "Almost none, a very slight softness in the hair ends"
  },
  "text_handling": {
    "product_label": "Keep brand and product name crisp and readable",
    "background_text": "Keep any text on stickers and magnets blurred or illegible rather than misspelled"
  },
  "output_format": {
    "aspect_ratio": "1:1",
    "style": "Photorealistic smartphone photo",
    "count": 1
  },
  "avoid": [
    "Studio backdrop",
    "Plastic or airbrushed skin",
    "Over smoothing and beauty filters",
    "Perfect facial symmetry",
    "Extra or fused fingers",
    "Warped or unreadable product label",
    "Misspelled text in the background",
    "Text overlays, captions or logos added on top",
    "Watermarks",
    "Cartoon, CGI or illustration look",
    "Overly posed model energy",
    "Harsh flash or ring light reflections in the eyes"
  ]
}
```

  </details>

- **产品先于人：海鲜电商俯拍托盘英雄构图** — 略俯视把超大圆形冰鲜托盘怼到镜头前，工人压到画面下半——新鲜感先打脸，人只负责证明「小心搬运」。食品/生鲜 KV 的产品优先层级教科书。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2101964323094745493)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A freshness claim is stronger when the camera puts the product before the person.
🧊 a slightly overhead view with one oversized circular tray lifted toward the lens, occupying the upper-middle frame
The seafood arrives first: ice sparkle, steel rim, tuna, shrimp, squid, and fillets are all readable before you notice the worker.
🪽 place the worker low in frame with a believable upward lift, then embed the brand name as cropped frozen typography beneath their feet
The person proves careful handling; the floor type anchors the campaign without competing with the tray.

GPT- image 2.5 prompt👇
Create a premium frozen seafood advertising poster for a fictional international brand named FROSTHARBOR SEAFOODS, designed as a single vertical commercial key visual with a strong top-down camera perspective and a radically clear product-first hierarchy. Preserve the structural strength of the reference as pure composition logic: one delivery worker positioned near the lower-center, lifting an oversized circular tray of frozen seafood high above his head toward the camera, so the tray becomes the absolute dominant visual object. The final image must merge Orbit, Transit, and Port into one refined campaign: emotionally immediate, materially rich, and compositionally reduced to a bold iconic statement.

The product hero is the tray itself. Make it large enough that it feels almost thrust into the viewer’s space, occupying a commanding portion of the upper-middle frame. The tray is a premium stainless-steel round platter filled with a tightly curated arrangement of frozen seafood: thick ruby tuna cuts, translucent squid tubes and tentacles, pale white fish portions, silver-skinned fillets, shrimp with vivid orange-pink shell accents, shellfish, and luminous crushed ice. The arrangement must feel luxurious, clean, abundant, and intentional, not like a busy market heap. Every ingredient should be distinct, appetizing, and premium, with convincing cold-chain realism, subtle frost bloom, clean moisture sheen, and elegant color separation.

The worker is secondary but important. He stands below the tray in a proud, uplifting pose, smiling up toward camera with honest energy and clean commercial warmth. He wears a streamlined branded cap, apron, and workwear uniform in refined marine-blue tones. Anatomy must be correct and natural: realistic shoulders, believable arm lift under weight, proper elbows, wrists, and hands, five fingers, clear finger separation, and grounded stance. He must feel trustworthy and human, but the tray must visually overpower him. His role is to deliver the ocean upward, not become the focus.

The camera is slightly overhead and compressed enough to exaggerate the round tray’s scale while preserving believable perspective on the body. The background is a premium frozen-marine blue floor or studio surface with subtle crystalline frost texture and a deep cobalt-to-ice-blue gradient. Use large integrated floor typography beneath the figure as a graphic anchor, but keep it cleaner and more reduced than the source. Let the letters feel embedded into the surface, almost like frozen shadow typography underfoot, reinforcing the brand without cluttering the frame.

Visible text must be sparse, high-end, and entirely in English. At the upper-right, place a minimal brand lockup: "FROSTHARBOR SEAFOODS". At the upper-left, place one strong campaign line only, such as "The Ocean, Lifted Fresh." or another equally elevated phrase. Across the floor beneath the worker, integrate one giant typographic base in bold condensed uppercase, such as "FROSTHARBOR", partially cropped by the figure and perspective. In the lower area, add only one short commercial line, for example: "Premium frozen seafood, handled with precision." Keep all typography art-directed, crisp, and spacious. No dense body copy, no brochure clutter, no excessive sales lines.

Lighting must be bright, controlled, and appetizing. Use a soft overhead-front key light that makes the seafood tray glow with freshness: wet reflections on tuna, icy sparkle on crushed ice, soft translucency in squid, crisp shell highlights on shrimp, and controlled steel reflections on the tray rim. Add gentle fill on the worker’s face and uniform, and enough edge separation to keep the tray clearly cut out from the blue background. The whole image should feel premium, fresh, cold, and authoritative without becoming sterile.

Color hierarchy: 60% marine cobalt, frozen blue, and icy cyan environment; 30% seafood flesh tones, silver ice neutrals, and steel highlights; 10% white typography and selective warm accents from shrimp, tuna, and skin. Keep the palette clean and commercial, with strong contrast between cool frozen atmosphere and warm living seafood tones.

Material semantics must be explicit and luxurious: crushed ice sparkle, stainless steel rim reflection, tuna marbling, squid skin translucency, shrimp shell gloss, frosted fish surface, matte apron fabric, embroidered cap logo texture, cold studio floor grain, and subtle water condensation. The whole image should feel like a world-class food-retail campaign that turns one tray into a spectacular icon of freshness.

Rendering target: photoreal luxury food advertising, product-dominant hierarchy, clean top-down energy, refined typography integration, cold-chain material realism, controlled negative space, and world-class print finish.

Quality control and structured exclusions: photoreal only, correct human anatomy, realistic shoulders, arms, hands, and five fingers, no hand deformation, no extra fingers, no missing fingers, no fused fingers, no broken wrists, no warped tray shape, no duplicated seafood items, no muddy ice, no dirty fish texture, no blood, no chaotic market clutter, no cheap supermarket flyer look, no unreadable typography, no garbled letters, no random brand plagiarism, no cluttered background, no style drift, no AI slop.
```

  </details>

- **Target/Anchors：只改颜色也不毁全图** — 蓝杯变橙杯，6/6 一次过。秘诀不是多写「改什么」，而是把「绝对不许动」写成 Anchors。局部编辑先列死守清单，再点名 Target。 [@pfc27254872693](https://x.com/pfc27254872693) · [原帖](https://x.com/pfc27254872693/status/2101962448311857546)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【局部改图公式 · Target / Anchors】
Target（只改这里）：[对象] → [目标状态]
例：蓝色马克杯 → 橙色马克杯

Anchors（全部死守）：
- 构图 / 相机机位
- 光照方向与色温
- 背景与桌面材质
- 其他物体的颜色与位置
- 人物身份与姿势（如有）

指令模板：
只把 Target 改成目标状态。Anchors 列出的一切必须保持完全不变。不要重绘全图。

验收：改色/改一物时，其余像素级一致才算 Pass。
```

  </details>

- **玻璃切片观察窗：时尚美妆产品战役海报** — 上下两人对内凝视 + 中间信息带，只在局部网格叠真实光学玻璃（折射/位移/选择性锐化）。眼罩、手表、耳机、香氛都测过——高定时尚/美妆/产品 KV 可直接换品牌槽。 [@MrLarus](https://x.com/MrLarus) · [原帖](https://x.com/MrLarus/status/2101644997460213894)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Brand: [BRAND NAME]
Product: [PRODUCT]
Theme: [CAMPAIGN THEME]
Accent palette: [COLOR PALETTE]
Product details: [MATERIAL / FEATURES]

Create a premium 9:16 editorial campaign poster with two adult fashion models arranged vertically, one in the upper section and one in the lower section.

Both subjects must face inward toward the center: the upper portrait looks diagonally down toward the middle, while the lower portrait looks diagonally upward toward the middle. Keep them asymmetrically positioned rather than vertically centered.

Leave a clean editorial information band between the two portraits for the brand name, product name, short campaign line and minimal technical copy.

Use extreme close-up fashion photography with natural skin texture, shallow depth of field, soft motion blur and intentionally out-of-focus areas.

Overlay only a few selected grid sections with real optical glass panels. Mix clear glass, lightly tinted glass, smoked glass and subtle magnification. The glass should physically affect the image behind it through refraction, slight displacement, selective sharpening, soft distortion and restrained edge reflections.

Some areas behind the glass become noticeably sharper while the surrounding photography stays blurred, creating a strong contrast between soft imagery and precise observation windows.

Add an extremely fine modular grid across the entire composition. Keep the lines subtle and low-contrast.

Use refined high-contrast serif typography for the brand and very small spaced sans-serif typography for product details. Keep the layout minimal, airy and editorial rather than UI-heavy.

Match the glass tint, product materials and accent colors to the chosen theme. Keep most of the poster light and restrained, using darker tones only as controlled visual weight.

The final image should feel like a high-end independent fashion, beauty or product campaign: cinematic, tactile, photographic and contemporary.

Avoid generic luxury ads, centered portraits, subjects facing outward, excessive glass panels, heavy UI graphics, thick grid lines, cyberpunk styling, excessive lens flare, plastic skin, CGI faces and overly sharp photography.
```

  </details>

- **局部编辑 8 例：构图/人物保留只改痛点** — 「整体挺好、就差这一处」别整张重跑；Images 2.5 留构图与人物，只修需要的部分。8 个实例 + prompt，改图心法入门。 [@asahi_ai_x](https://x.com/asahi_ai_x) · [原帖](https://x.com/asahi_ai_x/status/2100827157471580462)

- **电商皂包装小字不糊：Images 2.5 经 Codex 出商品图** — 正方形商品照，「HERB GARDEN」与「よもぎと緑茶の石けん」腰带小字清晰可读。包装文字保真的电商静物对照。 [@kohaku_2100](https://x.com/kohaku_2100) · [原帖](https://x.com/kohaku_2100/status/2100777491036246402)

- **母版图 + Preserve / Change / Delta：小步连改方法论** — 别再指望一段超长 prompt 一次成型；先锁母版、钉住保留元素，再用 Preserve / Change / Delta Edit 连续小改逼近终稿。Image 2.5 时代改图心法长文。 [@cheery9998](https://x.com/cheery9998) · [原帖](https://x.com/cheery9998/status/2100768331263311913)

- **同包装参考→多套活动产品照：不丢罐面** — 几张 OLIPOP 基础罐照，压出多套电商/广告方向，包装 logo/罐型/标签字死锁。没实拍棚也能批产战役图——包装 must-stay 工作流可抄。 [@zahra4sure](https://x.com/zahra4sure) · [原帖](https://x.com/zahra4sure/status/2100572388031156287)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Product photography workflow (GPT Image 2.5):
1) Upload a few basic reference photos of the same product packaging (example: OLIPOP Cherry Cola can).
2) Generate several completely different campaign / e-commerce art directions from those refs.
3) Hard constraint: never lose the original packaging — logo, can shape, label text, brand colors stay locked.
4) Deliver multiple polished concepts without a physical reshoot.

Principle: same product, many art directions; packaging identity is must-stay.
```

  </details>

- **球鞋×旅行袋对位海报：产品别干同一种活** — 一只鞋落地锐利读品，另一只从皮箱斜抽出 sole——产品对位叙事，不是两只鞋摆一起。旅行鞋履电商 KV 可直接改，附完整 prompt。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2100485040425832579)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A premium commercial poster for a fictional travel-footwear brand called DUNETRACK, designed as a luxury style-advertising image where a real product object and conceptual travel design are deeply fused into one clean, high-impact composition. The hero scene is built around a large caramel-brown full-grain leather duffel bag resting on a seamless warm sand-beige studio surface, slightly angled toward camera, with the zipper opened wide across the front. A pair of premium travel-trail sneakers emerges naturally from the bag as if mid-packing for a refined journey: one shoe fully grounded in the foreground and clearly dominant, the second shoe partially lifted from the bag opening with its heel and outsole visible, creating a confident diagonal rise. The products must remain the absolute visual focus.

Framing and composition: vertical poster layout, centered and stable, eye-level three-quarter product angle, broad negative space in the upper half for brand and editorial typography, clean studio isolation, no clutter. The bag forms the main visual mass on the left and center, the hero shoe anchors the lower right, and the second shoe breaks the bag silhouette to create elegant motion. Integrate a subtle curator-grade environmental abstraction into the backdrop and floor: faint embossed topographic route lines, soft dune-shadow gradients, and barely visible map-like travel contours pressed into the beige background, so the scene feels like luxury travel branding rather than a plain product cutout. These graphic-terrain elements must stay minimal and never compete with the bag or shoes.

Product design: create high-end trail-lifestyle sneakers in a desert-neutral luxury palette, combining warm ivory engineered mesh, sandstone matte rubber guards, soft taupe structural supports, restrained cool-grey branding marks, precision lacing, breathable woven texture, sculpted geometry, and a high-traction outsole with refined angular cutouts. The shoe should feel like a fusion of performance hiking, elevated airport travel, and modern lifestyle design. The leather duffel bag should be rich, supple, naturally creased full-grain leather with hand-finished seams, elegant handle construction, premium stitching, brushed brass hardware, and a small rectangular metal plaque engraved exactly: "GO FURTHER LIGHT".

Lighting and color: soft directional studio key light from upper left, diffused and premium, with controlled highlights across the leather grain, crisp silhouette separation on the hero shoe, soft grounding shadows beneath the bag and outsole, and subtle reflected warmth from the studio floor. Build stronger tonal contrast than a normal e-commerce shot so the bag volume, rubber sole architecture, and mesh material transitions feel sculptural and editorial. Palette balance: 60% sand, camel, and warm beige neutrals; 30% caramel leather, toasted tan, and mineral taupe; 10% cool grey branding and deep charcoal outsole accents. The image must feel warm, refined, expensive, and tactile, with no muddy beige haze or dead black patches.

Materials and finish: hyper-real product photography quality, leather pores, natural wrinkles, premium seam tension, realistic zipper teeth, softly brushed rubber texture, technical mesh weave, precise lace threading, matte-polished metal hardware, embossed map lines in the background, and elegant fine-grain studio retouching. The finish should feel like a Cannes-level campaign for a premium travel-performance label: luxurious, restrained, and highly physical.

Typography: all copy in English only, integrated as premium editorial design. At the top center place the brand mark reading exactly: "DUNETRACK". Below it set a large refined headline reading exactly: "FIRST STEP, FARTHER". Beneath it place a smaller italic subline reading exactly: "made for the miles ahead". Near the right side of the product area place a small rounded badge reading exactly: "code: DUNE10". At the bottom center add the website line reading exactly: "dunetrack-journeys.com". Typography should combine elegant serif and clean modern sans-serif, with soft tonal contrast against the warm background, spacious kerning, and precise luxury alignment. Keep all text away from the main shoe silhouette and key material details.

Output and constraints: polished luxury footwear advertisement, product-first hierarchy, no people, no extra props beyond the duffel bag and shoes, no random travel clutter, no copied existing slogans, no real brand names, no chaotic background graphics. Keep the shoes anatomically correct as products: accurate outsole structure, believable lace paths, consistent left-right pair logic, correct sole thickness, no duplicate soles, no broken mesh panels, no impossible angles, no floating products, no distorted bag geometry, no unreadable text, no muddy beige color cast, no cheap sportswear styling, no overexposed highlights, and no visual drift away from clean premium travel branding.
```

  </details>

- **路边实拍车 → Marketplace 级棚拍成片** — input vs output：手机街拍洗成在线卖车超写实。电商/二手最痛「有货没图」，短 prompt 可直接塞进售卖流。 [@Rodrigo_Bubble](https://x.com/Rodrigo_Bubble) · [原帖](https://x.com/Rodrigo_Bubble/status/2100183263843393634)
  <details>
  <summary>查看 / 复制提示词</summary>

```
create images based on this, to publish on online marketplaces to sell the car. hiperrealismo. camara 4k. fotografo profesional de coches. vlur plate
```

  </details>

- **自拍→glossy 设计师玩具头像** — 上传参考图变 premium 3D vinyl designer toy 浮空头像，大墨镜 + 棚拍高光。UGC / 周边营销一键出片。 [@meAsifAi](https://x.com/meAsifAi) · [原帖](https://x.com/meAsifAi/status/2100057090332995927)
  <details>
  <summary>查看 / 复制提示词</summary>

```
@Create image Create a premium glossy 3D "designer toy" render of the subject(s) using the uploaded image as the only reference. Render one floating head per person (no duplication), cropped cleanly below the jaw with a visible neck and full head comfortably framed. Style: high-quality vinyl figure with ultra-smooth, simplified forms, rounded volumes, and strong glossy reflections across key facial areas. Hair should be sculpted, glossy, and stylized, with embedded playful accessories. Include oversized retro wraparound sunglasses with vibrant, matching frame/lens colors. Use strong studio lighting with pronounced highlights. Background: blue sky with soft clouds.
```

  </details>

- **Sunburst 美妆级修图 + 产品原型同框** — Yana 用 Sunburst 直接「化妆」，还塞了 Post-Keyboard Polo 原型。产品营销照的偷懒天花板——脸与货同时成片。 [@yanabana](https://x.com/yanabana) · [原帖](https://x.com/yanabana/status/2100025172543918578)

- **色卡联动换装广告：产品色号跟着转** — 模特转体换色时，背景货与色卡同步同色号；Image 2.5 出协调静帧再 Seedance 动画。电商换色种草管线可抄。 [@AIPandaX](https://x.com/AIPandaX) · [原帖](https://x.com/AIPandaX/status/2099948996878074268)

- **Sunburst 电商色号一键改：只动颜色其余锁死** — 六个色号不重拍——定向改色，构图/模特/布光全留。商品主图与货架变体流水线直接抄。 [@AIwithGhotai](https://x.com/AIwithGhotai) · [原帖](https://x.com/AIwithGhotai/status/2099766317129867637)

- **金色香水仪式：锁脸 9:16 产品人像** — 上传图锁身份，喷香水动作+琥珀侧光电影感。香水/美妆 KV 可整段复用，负向词也写全了。 [@imGopalTiwari](https://x.com/imGopalTiwari) · [原帖](https://x.com/imGopalTiwari/status/2099715941605195847)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Hyper-realistic IMAX-level Netflix-style cinematic portrait, 9:16 vertical. Use the uploaded image as the primary identity reference and preserve her exact facial identity, proportions, and defining features. Create a beautiful woman wearing a black thin-strap top and small gold hoop earrings, holding a dark perfume bottle in one hand and spraying perfume toward her neck. She is in a dark elegant interior with a softly blurred background and a warm vertical light source behind her. Warm amber side lighting falls across her face, neck, shoulders, and chest, while the rest of the scene remains deep and dark. Porcelain skin with a warm golden undertone, natural skin texture, soft makeup, and deep red glossy lips. She holds the perfume bottle near her chest with one hand, index finger pressing the spray nozzle, while her other arm remains relaxed. Her shoulders are slightly angled, neck extended naturally, head tilted back and turned slightly to the side, eyes gently closed, with a calm sensual expression. Loose low updo with a deep side part, soft wavy strands framing the face, and a few loose strands falling around the neck. Rich warm tones, deep blacks, soft highlights, subtle film grain, shallow depth of field, luxurious dark cinematic color grading.
Negative prompt: changed identity, distorted face, deformed hands or fingers, bad anatomy, unnatural pose, text or watermark.
```

  </details>

- **芒果罐物理笑话海报：牛拽不动的产品英雄** — 姿势张力讲完笑话：牛拼命拉绳、罐子纹丝不动。完整 Cannes 级 FMCG prompt，包装广告可整段复用。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2099500411455721969)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a Cannes-level ultra-premium mango FMCG advertising poster for a fictional tropical food house called SOLARO PULP, preserving the exact structural logic of a bright high-conversion product campaign while merging narrative humor, forensic packaging realism, and curatorial restraint. The composition is vertical and highly controlled: a saturated full-frame mango-yellow studio background, one expressive 3D dairy-cow mascot on the left pulling a rope with comic desperation, one large premium mango-pulp can dominating the right side, a bold witty headline block in the upper-right quadrant, one clean three-part benefit strip near the bottom, and one centered call-to-action plaque beneath it. The final image must feel playful, memorable, and globally polished, while keeping the can as the unquestioned commercial hero.

Core composition: use a vivid monochrome mango-yellow background with a seamless floor-to-wall studio transition and generous negative space. On the left, place one premium 3D cow mascot standing upright, leaning backward with visible effort while gripping a rope that is tied tightly around the can. The rope creates the main directional tension across the frame, but the can must visually win the struggle through scale, weight, and authority. On the right, position one large front-facing can of mango pulp, cleanly isolated and slightly forward in the composition, surrounded at the base by a small curated cluster of real mangoes, one scored mango cheek, several glossy leaves, and nothing more. Keep the frame open, breathable, and conversion-driven.

Orbit atmosphere: the emotional hook should feel like the product is so rich and irresistible that even the farm mascot refuses to let it go. The humor must feel brand-smart, not childish. The mascot’s expression should communicate eager panic, possessiveness, and comic frustration, while the product remains calm, solid, and desirable. The poster should create instant recall through one simple story: desire meets abundance, and the can becomes the source of the joke. The mood is bright, cheerful, and high-confidence, but still clean enough to feel premium.

Transit realism: render every material with world-class FMCG precision. The can must show accurate cylindrical geometry, crisp top-lid metal reflections, subtle rolled-edge seams, flawless label registration, believable print contrast, and premium finish. The label should contain only elegant built-in branding such as “SOLARO PULP” and the product name “Totapuri Mango Pulp,” supported by a realistic mango visual and a bowl of dense puree. The mangoes at the base must show taut skin gloss, ripe yellow-orange gradients, natural dimples, juicy fiber in the cut fruit, and fresh green leaves with visible veins. The rope should show twisted fiber detail, tension compression where it presses into the can, and believable contact with the mascot’s hooves. The mascot must carry smooth premium 3D surfacing, soft matte-to-satin shading, correct hoof anatomy, natural limb articulation, subtle skin/fur transition, and expressive but clean facial sculpting with no animation slop.

Port restraint: simplify the campaign into a more gallery-like FMCG statement. Remove extra decorative fruit clutter, excessive footer information, and unnecessary small promotional noise. Keep only the logo block, the upper-right witty headline, the left mascot, the right hero can, one restrained fruit cluster, the bottom benefit strip, and the CTA plaque. Let the yellow field, the rope tension, and the can scale create the luxury. The frame should feel edited, intelligent, and immediately readable.

Mascot design: create a lovable premium-cartoon dairy cow with rounded proportions, black-and-white patches, small horns, expressive wide eyes, a slightly open mouth, lifted brows, and a tense pulling posture. The character should feel physically grounded, with believable weight shift through the legs, stretched arms or forelimbs gripping the rope, and clear contact shadows. The cow is a narrative device, not the hero product. It supports the brand story but never steals dominance from the can.

Typography and message layout: in the upper-left corner, place one compact brand block for SOLARO PULP. In the upper-right quadrant, place a large playful English headline such as “Too Good To Give Away” or “So Rich, Nobody Wants To Share,” with one short supporting line beneath it describing the richness of Totapuri mango pulp. The main phrase can be rendered in expressive brush-script or lively premium handwriting, while the secondary line uses a clean modern sans-serif. Typography must feel art-directed, witty, and compositionally integrated, not generic or overly retail.

Bottom information architecture: near the bottom, include one clean three-part benefits band with elegant icons and concise copy such as “Made with real Totapuri mangoes,” “No artificial colors,” and “Rich, thick texture.” Beneath it, place one centered rounded CTA plaque such as “SHOP NOW” or “TASTE THE GOLD.” Keep the band crisp, symmetrical, and highly legible, but avoid a noisy marketplace-flyer feel. If a tiny footer exists, it should be minimal and peripheral.

Lighting: use bright premium studio lighting with soft frontal clarity and subtle upper-left shaping. The yellow background must remain luminous and even, without dirty gradients. The can should receive the cleanest highlight structure, with crisp label readability and controlled metallic sheen on the lid. The mascot should have smooth dimensional modeling and soft contact shadows. The mangoes should catch small glossy highlights and juicy speculars. Keep the image cheerful and dimensional, but never harsh or cluttered.

Color hierarchy: 60% saturated mango yellow and warm golden-orange tones; 30% black, white, deep brown, and warm neutral accents from the mascot, rope, and label typography; 10% green leaf accents and silver metallic can-top highlights. The palette must feel fruity, bright, trustworthy, and internationally premium.

Design intent: the final poster must preserve the exact impact logic of the reference structure—full yellow background, left-side mascot action, right-side hero can, upper-right witty text block, bottom benefits strip, and centered CTA—while merging Orbit narrative charm, Transit material realism, and Port curatorial restraint into one resolved luxury FMCG campaign. The humor creates memorability, but the product remains the true visual and commercial center.

Rendering style: ultra-polished FMCG advertising, premium 3D mascot branding, bright studio product poster, clean global retail campaign, high-end packaging realism, appetizing fruit detail, elegant graphic hierarchy, world-class commercial retouching, immaculate print-ready finish.

Negative prompt: copied source text, real brand names, low-detail mascot, creepy cow face, malformed limbs, bad hoof anatomy, unreadable label, cheap flyer styling, muddy yellow background, warped can geometry, fake mango texture, cluttered footer, poor typography spacing, flat lighting, black blotches, watermark
```

  </details>

- **巨桶城市海报：尺度幻觉靠微型街区钉死** — 街角仰拍巨型炸鸡桶，底座长出迷你店面区。用建筑给产品量尺度的快餐 KV 教科书。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2099489998882177205)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a Cannes-level ultra-premium fast-food advertising poster for a fictional brand called CRUNCH DISTRICT, preserving the exact structural logic of a monumental bucket-city campaign while merging narrative spectacle, forensic food realism, and curatorial restraint into one resolved image. The composition is vertical and cinematic: one colossal fried-chicken bucket rises in the center like an urban landmark, overflowing with hero fast-food items, while its lower structure transforms into a compact branded street district with storefronts, awnings, food kiosks, tiny pedestrians, and a few parked delivery vehicles. The image must feel like an entire city built around appetite, yet remain clean, disciplined, and unmistakably product-led.

Core composition: use a low street-level perspective looking slightly upward so the bucket dominates the skyline from lower frame to upper-middle frame. The giant bucket must be perfectly centered and visually stable, with premium dimensional branding integrated on the front as the main architectural identity mark, such as “CRUNCH DISTRICT”. From the bucket opening, let oversized fried chicken pieces, upright fries, and a small number of burgers emerge like a celebratory edible skyline. Keep the upper sky open and breathable, with only a few sculptural cloud forms and a sparse scattering of tiny crumbs or coating particles. The bucket remains the unquestioned hero; the surrounding city only reinforces its myth.

Orbit atmosphere: the poster should feel like a legendary fast-food district at the height of its golden-hour energy, as if the city has gathered around a sacred monument of crunch. The streets below suggest excitement, gathering, and ritual, but not chaos. Tiny figures, storefront lights, and food trucks create the emotional impression of a living destination, while the oversized foods above feel like a dream of abundance made real. The tone should be joyful, larger-than-life, and cinematic, yet mature enough to feel like an international award-winning campaign rather than a theme-park illustration.

Transit realism: render every food and architectural surface with commercial-grade precision. The fried chicken must show layered craggy crust, realistic breading granules, warm oil-sheen glints, crackled edges, and dense golden-orange browning with deeper amber shadows in the creases. The fries should stand upright with believable rigidity, lightly salted surfaces, faint blistering, and clear potato structure. The burgers should show soft glossy buns, seared patties, clean cheese melt, and minimal but readable fillings. The bucket itself must feel like premium printed packaging at enormous scale, with crisp label edges, subtle paperboard texture, smooth curvature, and believable structural volume. The street-level district must carry refined storefront materials, striped awnings, glass reflections, painted trims, asphalt texture, signage relief, and small vehicle detail that all feel physically grounded.

Port restraint: simplify the visual system so the grandeur feels curated rather than overloaded. Keep only the giant bucket, a select number of floating hero foods, a handful of cloud shapes, a compact but rich architectural base, and a few sparse atmospheric crumbs. Reduce excessive signage, over-busy urban clutter, and random decorative elements. Let the contrast between monumental object and miniature city create the intelligence of the composition. The poster should feel more like a luxury exhibition image for fast food culture than a noisy retail ad.

Street-district design: build the base of the bucket into an elegant branded neighborhood with 4–6 visible storefront fronts, a central entrance, a few lit windows, one or two delivery vans, and a controlled number of tiny pedestrians interacting naturally in the street. Include a crosswalk or narrow roadway in the foreground to ground the viewer in the city scale. The small architecture should feel lively and precise, but still secondary to the giant bucket and hero foods above.

Lighting: use high-end warm daylight with slight golden-hour character. The upper food elements catch the brightest sunlight, creating premium highlights on chicken crust, fry edges, and burger buns. The bucket surface should carry soft sculptural shading and subtle frontal readability. At street level, introduce slightly warmer reflected light and refined storefront glows to deepen the sense of place. Keep shadows rich but never muddy, and avoid dead black areas.

Material and texture: emphasize crunchy crust topography, fry salt crystals, burger bun gloss, soft paperboard bucket finish, sign lettering depth, glass storefront reflections, painted architectural trims, tiny street objects, and subtle atmospheric dust. Every material must feel photographically plausible and luxuriously retouched.

Color hierarchy: 60% fried-gold, creamy bucket white, and luminous sky blue; 30% ketchup red, warm caramel browns, and urban neutral shadows; 10% green, teal, and sign-light accents in tiny controlled touches. The palette must feel appetizing, festive, and internationally premium.

Design intent: the final poster must preserve the exact impact logic of a giant central bucket monument, overflowing hero food, a miniature branded city at its base, and a clean sky-framed vertical composition, while merging Orbit atmosphere, Transit realism, and Port curatorial restraint into one complete fast-food myth image. The bucket is the city, the city is the brand, and the brand is the appetite.

Rendering style: ultra-photoreal luxury fast-food advertising, cinematic branded food-world architecture, premium packaging monument, highly detailed miniature urban district, world-class commercial retouching, clean graphic hierarchy, appetizing hero-food realism, print-ready finish.

Negative prompt: copied source text, real brand names, cartoon food, plastic-looking chicken, low-detail fries, cheap burger styling, cluttered signage, unreadable main logo, warped bucket geometry, muddy colors, distorted street perspective, excessive crumbs, chaotic crowds, dirty shadows, black blotches, watermark
```

  </details>

- **网格单格自然语言抽取：口语坐标也能拆** — 「上从2左从2」「纵3×横2」这种日常说法，Image 2.5 也能抽出单格再拉到 2K。九宫格/精灵表后处理省事。 [@misakin883](https://x.com/misakin883) · [原帖](https://x.com/misakin883/status/2099351178077413642)

- **一张图接着改、接着用：连续编辑实测文** — 西堂长文压测「同一张图能不能一路改下去」。品牌物料多轮精修前先看这篇踩坑。 [@congcongtang](https://x.com/congcongtang) · [原帖](https://x.com/congcongtang/status/2099330191365415193)

- **Sunburst object-swap：换物 match-cut，其余几乎钉死** — 编辑时只换指定物件，其它几乎不动。广告改产品/道具的压测思路，直接抄。 [@invideoOfficial](https://x.com/invideoOfficial) · [原帖](https://x.com/invideoOfficial/status/2098430230079984063)

- **精华液广告流水线：产品表 + 分镜 → 15 秒成片** — GPT Image 2.5 先出产品 sheet 与 cinematic storyboard，再交 Seedance 2.5；提示词全开。DTC 电商广告教科书。 [@HeyAbhishek](https://x.com/HeyAbhishek) · [原帖](https://x.com/HeyAbhishek/status/2098420637631127995)

- **UGC 偷参考美学：Astra 拆 JSON → 2.5 出片** — 别写「cinematic soft grain」作文。真照片丢 Astra 拆色彩/灯光 JSON，再塞进 Image 2.5 锁人设。假 UGC 变真货架感，流程可复用。 [@0x_harness](https://x.com/0x_harness) · [原帖](https://x.com/0x_harness/status/2098309152141607051)

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

- **参考图+说明→町/国/学校世界观説明シート** — 上传一图+说明，4:3 左上町概要、右半用語小插画、左下场景插画；日英可改，术语多字易糊要控字数。世界观设定表别手搓排版——公式化 prompt 直接烤成设定页。 [@Kurohachi05](https://x.com/Kurohachi05) · [原帖](https://x.com/Kurohachi05/status/2102955744475947318)

- **Image 2.5 木雕熊参照→Tripo HD 3D** — 用 GPT Image 2.5 生成木雕参照，再喂 Tripo 出 HD 模型（UV 另说）。概念雕塑进 3D 别从零建模——参照图先焊死。 [@cg_ftLab](https://x.com/cg_ftLab) · [原帖](https://x.com/cg_ftLab/status/2102363276944568574)

- **Image 2.5 分镜帧→H3 Max 动作迁移** — gpt-image-2.5 + storyboard 先出帧，再喂 H3 Max 做 motion control（本例未超分）。角色动作迁移别空抽视频——静帧分镜先锁。 [@azerkoculu](https://x.com/azerkoculu) · [原帖](https://x.com/azerkoculu/status/2102358192063656240)

- **建设业 PR：Image 2.5 分镜 → Gemini Omni 成片** — ChatGPT 策划 → Image 2.5 出 3×3 分镜 → Gemini Omni 一键成片/配乐/旁白。B2B 企业宣传片别从剪辑台起步——先锁分镜再喂视频模型。 [@husky__create](https://x.com/husky__create) · [原帖](https://x.com/husky__create/status/2102337226311180568)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【① GPT Image 2.5 出 3×3 分镜】
Create one premium photorealistic 3×3 storyboard for a 10-second Japanese construction-company corporate commercial.

Brand: “NEXARC CONSTRUCTION”
Audience: commercial-property owners, developers, business leaders and engineering recruits.
Central message: disciplined design and construction create the places where tomorrow’s work and life begin.

LAYOUT
One overall landscape 16:9 image. Exactly nine equal 16:9 panels arranged in three columns and three rows. Thin ivory gutters. Small white panel numbers 01–09 in the upper-left corner of each panel. Read left to right, top row to bottom row.

No captions, arrows, watermarks or production notes. Only panel numbers and the final brand typography in panel 09.

CONTINUITY
Recurring lead architect: the same 36-year-old Japanese man, lean build, calm intelligent face, short neatly parted black hair and natural skin texture. He wears a crisp white shirt, dark navy work jacket and charcoal trousers. At the active construction site, add the same white safety helmet, reflective charcoal vest, gloves and safety boots.

The recurring development contains one central 18-story rectangular office tower with blue-gray glass, vertical silver fins and a transparent entrance canopy, plus two six-story side buildings, a pedestrian plaza, warm timber accents and young street trees.

Keep this building geometry consistent through every construction phase.

A thin cobalt-blue line is the visual motif. It appears first on tracing paper and then as a physical survey line at the construction site. It never magically transforms into a building.

NINE PANELS
01 — Overhead macro in a dawn architecture studio. The architect draws one precise cobalt-blue line across translucent tracing paper using a ruler and technical pencil.

02 — Low close-up at an empty prepared construction site. A surveyor wearing correct PPE marks one straight cobalt-blue line on the ground. Survey tripod behind.

03 — Wide active foundation stage with excavation, rebar, formwork and concrete pumping. Workers remain in organized safe zones.

04 — Low-angle steel erection. A crane lifts one steel beam into position while properly equipped riggers guide it from safe positions. No worker beneath the load.

05 — Detailed façade installation. Workers using approved lifting equipment and fall protection install one blue-gray glass panel and silver vertical fins.

06 — Elevated wide of the nearly finished development. Crews install pale stone paving, timber benches and young trees around the coherent completed buildings.

07 — Finished office lobby. The same architect, without his helmet but wearing the navy jacket, opens the glass entrance as the first office workers enter.

08 — Grand golden-hour wide of the completed district. Office workers, pedestrians, parked bicycles and a café terrace bring the architecture to life.

09 — Symmetrical blue-hour hero shot of the completed district. Illuminated offices and plaza. Stable centered white text: “NEXARC CONSTRUCTION”. Beneath it: “まだない景色を、つくる。”

PHOTOGRAPHY
High-end live-action Japanese corporate commercial. Natural full-frame cinema-camera perspective, realistic concrete, structural steel, glass, timber, cables, asphalt and foliage. Cool dawn progressing through clear daylight, golden hour and blue hour. Key light consistently from frame left. Architectural white, graphite, silver, blue-gray glass, warm timber and restrained cobalt blue. Smooth highlight roll-off, moderate depth of field and subtle film grain.

SAFETY
All construction activity must be physically believable. Correct PPE, fall protection, crane rigging, exclusion zones and stable scaffolding. No workers beneath suspended loads.

AVOID
Magical construction, object morphing, teleporting materials, instant trees, collapsing structures, demolition, unsafe workers, missing helmets, floating beams, bent cranes, impossible machinery, inconsistent architecture, changing façade colors, duplicate people, malformed hands, CGI-plastic surfaces, miniature-diorama appearance, cartoon styling, futuristic fantasy cities, extra logos, unreadable text or panels other than 01–09.

---

【② Gemini Omni 成片】完整视频 prompt 见原帖回复： https://x.com/husky__create/status/2102337252340994249
```

  </details>

- **动漫静帧填槽：ERA×TIER 控时代质感** — 2×2 科幻片静帧模板，ERA/TIER 调度赛璐璐→数码质感。图生视频前置关键帧配方，换电影名就能批量出。 [@Gdgtify](https://x.com/Gdgtify) · [原帖](https://x.com/Gdgtify/status/2102302629661647182)
  <details>
  <summary>查看 / 复制提示词</summary>

```
2x2 grid, 16:9, do this for 4 underrated international scifi movies: // FN: anime_still(CHARACTER, SETTING, TIME, ERA, TIER, MOOD)

INPUT
  CHARACTER = $ infer
  SETTING   =  $ infer
  TIME      = $ infer
  ERA       = $ infer
  TIER      = $ infer
  MOOD      = $ infer

DISPATCH :: ERA → production reality
  1980-92 cel : hand-painted, RICH saturated paint, visible cel dust and fine
                scratches, slight registration wobble, 1 shadow step, dark
                brown-black line, painted BG with heavy brush texture
  1993-99 cel→digital : transitional, cleaner paint, 1–2 steps, first digital
                compositing, BG still painted, slight color banding
  2000-10 digital : flat digital paint, 2 steps common, rim light appears,
                BG digitally painted but still soft-edged and detailed
  2011+ digital : 2 steps + gradient allowed ONLY in the photography pass,
                heavy bloom and diffusion, BG photo-referenced, thin lines

DISPATCH :: TIER → detail budget (this is the realism lever)
  tv_weekly : minimal line count, simple shadow shapes, BG reused-looking,
              character held on 3s, no complex effects
  tv_premium: more line detail in key frames, 2-step shadow on the face
  film      : dense linework, complex shadow shapes following real anatomy,
              highly detailed BG, subtle effects layer, held poses are rare
  ova       : film detail, darker palette, more mature proportions

DISPATCH :: TIME → palette swatch set + shadow direction + photography grade
  morning        : cool blues and pale yellow, long shadows, clean bloom
  midday         : high-key, minimal shadow, saturated greens outside
  late_afternoon : warm ochre/rose BG, LONG horizontal shadows, heavy bloom
                   through windows, dust motes, orange gradient map over all
  dusk           : magenta-to-indigo BG, silhouettes, warm rim on one edge
  night          : deep blue-violet, cool shadow swatch, practicals as bloom
                   sources, character lit only where a light source justifies

INVARIANT LAWS  // do not vary with any input
  L_BG        : painted, NO outlines, MORE detail than the character
  L_LINE      : constant weight, tapered ends, dark brown not black for skin
  L_FILL      : flat, no gradient, no texture, no noise
  L_SHADOW    : hard-edged, {ERA.steps} step(s), a SEPARATE cooler swatch —
                not the base color multiplied. The boundary is a drawn line.
  L_HIGHLIGHT : flat, hard, sparse. Hair gets ONE band. Eye catchlight is a
                fixed shape that does NOT track the light source.
  L_FX        : drawn discrete elements, never particle simulation
  L_PHOTO     : the ONLY layer permitted soft gradients — bloom, diffusion,
                grade, grain, applied to the flattened stack

FORBIDDEN
  ✗ gradient shading on the character   ✗ soft shadow edges
  ✗ outlines on background elements     ✗ character out-detailing the BG
  ✗ line weight varying with light      ✗ per-pixel specular on skin
  ✗ photographic DOF on the BG (painted soft ≠ lens blur)

RENDER
  Anime still, {ERA.medium}, {TIER} production. {CHARACTER} in {SETTING},
  {TIME}. {TIME.palette}. Background painted with {L_BG}. Character in
  {L_LINE}, {L_FILL}, shadows as {ERA.steps} hard-edged step(s) in a cooler
  swatch with no soft falloff anywhere. {L_HIGHLIGHT}. {TIME.fx}.
  Over everything: {L_PHOTO}. {MOOD.pose_hold}.

AUDIT
  shadow_boundary_gradient ≈ 0px · shadow_steps == ERA.steps
  detail(BG) > detail(character) · line_weight_variance ≈ 0
  every soft gradient originates in L_PHOTO
```

  </details>

- **参考图气质→单间玩偶屋 + 桌上迷你人偶** — 把角色参考图喂给 Image 2.5：按人物气质搭一间玩偶屋房间，再在桌上摆同款迷你人偶。角色 IP / 周边视觉一键出「家」——回复里有完整英文底座 prompt。 [@Kurohachi05](https://x.com/Kurohachi05) · [原帖](https://x.com/Kurohachi05/status/2102270895196885495)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A masterpiece. Top quality. An illustration of a single room in a dollhouse. Based on reference images, depict a room that matches the character’s traits and atmosphere. Place the dollhouse on a desk and draw a miniature version of the character next to it.
```

  </details>

- **儿童绘本彩铅蜡笔：极简留白可抄风** — 当代独立绘本审美写死：彩铅+蜡笔手绘感、暖白底、大量留白、稚拙比例。禁止写实/3D/高光——品牌童书、亲子内容、温暖插画直接套。 [@MahiraEhan](https://x.com/MahiraEhan) · [原帖](https://x.com/MahiraEhan/status/2102263940549845033)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a delicate minimalist illustration in the style of contemporary children’s book art. Hand-drawn with colored pencils and wax crayons on a slightly warm white background. Simple, lively, imperfect lines with a subtle handmade quality, soft muted natural colors, and a touch of watercolor texture. The characters should be cute, kind, and expressive, with simple facial features and slightly naive, childlike proportions.

The composition should be very clean, airy, and spacious, with plenty of white space around the characters. No realism, no 3D, no glossy effects, and no complex background. The atmosphere should feel warm, intimate, tender, cozy, and family-oriented, evoking childhood and love. Contemporary independent children’s book aesthetic, handmade illustration, sketchbook feel, visible pencil texture.
```

  </details>

- **海水物理拼圣诞树：游艇豪华假日 KV** — 树不是装饰贴图——用浅滩、礁石、浪花泡沫按物理堆成树形，游艇当树冠。假日豪华航海广告：远看图标、近看海况。 [@ou_zhen599](https://x.com/ou_zhen599) · [原帖](https://x.com/ou_zhen599/status/2101959963384193293)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A seasonal icon lands harder when it is built from real physics.
🌊 shape the tree from turquoise shallows, reef outcrops, curling foam, and white surf lace—symmetrical at a distance, irregular up close
The form reads instantly, then resolves into believable water and reef behavior instead of holiday decoration.
✨ place the yacht at the upper center, with its wake beginning the central route and flowing into the wider sea formation below
The vessel becomes the crown and the cause of the composition, not a small object added afterward.

GPT- image 2.5 prompt👇
Create a premium luxury-yacht holiday advertising poster for a fictional international marine brand named SOLSTICE CROWN YACHTS, designed as a single vertical high-aerial key visual over an immense open sea at golden sunrise. Preserve the structural brilliance of the reference as pure composition logic: a real ultra-luxury motor yacht near the upper-center, moving forward across calm deep water, while the wake, reef lines, and surf formations below organically assemble into a monumental Christmas-tree silhouette made entirely of ocean physics. The yacht is the true commercial hero, and the sea-formed tree is the poetic extension of its voyage.

The image must merge Orbit, Transit, and Port into one refined main visual: emotionally resonant, materially precise, and curatorially reduced. Orbit: keep the strongest immediate read of the concept, where the tree shape is instantly recognizable from afar and the yacht reads as the luminous crown point of the frame. Transit: make the marine materials, reef geometry, and yacht design feel systemized and premium, with believable water layering, foam logic, and engineered vessel detail. Port: strip away anything unnecessary so the image feels more international, more art-directed, and closer to a collectible visual manifesto than a festive brochure.

The Christmas-tree form must not feel graphic-overlay fake or cartoonishly decorated. It must arise from real ocean movement: curling foam spirals, white surf lace, turquoise currents, transparent mineral shallows, and scattered reef outcrops positioned with elegant symmetry and controlled irregularity. From a distance it reads as a festive icon; up close it resolves into realistic hydrodynamics, reef contours, and tidal pattern. No ornaments, no garlands, no literal star, no kitsch holiday clichés. The sea itself becomes the seasonal gesture.

The yacht must be highly photoreal, product-dominant, and aspirational: polished white hull, clean glazing, layered decks, subtle metallic detailing, realistic marine shadow under the vessel, believable wake behavior, and refined superyacht proportions. It must feel calm, rarefied, exclusive, and precise, never tiny or incidental. Place it near the upper-center so it leads the eye downward into the flowing tree-shaped sea formation.

Camera and framing: premium drone or helicopter top-oblique aerial view, high enough to reveal the full sea-tree silhouette while keeping the vessel clearly legible as the hero object. The frame must feel spacious and quiet, with vast surrounding ocean negative space providing luxury, scale, and breathing room. Let the sea-tree occupy the central vertical axis and taper downward elegantly. The composition should read immediately and memorably from a distance.

Lighting and atmosphere: warm low-angle sunrise light from the upper-right, washing the surface with champagne gold and pale amber while preserving rich cobalt and teal depth below. Build a refined 60/30/10 color hierarchy: 60% deep ocean blue, ultramarine, and teal; 30% white foam, bright turquoise shallows, and mineral aqua channels; 10% champagne sunrise warmth and pale gold reflection. The water must feel premium and layered: transparent cyan depths within the tree-form, white foam edges around the swirls, deep dark sea outside the central motif, and delicate sun-glint falloff. Keep the sky extremely restrained, only a small atmospheric horizon if needed.

Typography must be drastically reduced and more elevated than a standard holiday campaign. Place a minimal brand lockup in the upper-right: "SOLSTICE CROWN YACHTS" with a tiny refined emblem above and one understated line beneath such as "Voyage in Ceremony." In the lower-center, place only one short holiday statement, elegant and restrained, such as "Season at Sea." No large festive paragraph copy, no heavy calligraphy overload, no bottom information clutter beyond a very slim, discreet contact strip if absolutely necessary. The visual must carry the meaning.

Material semantics must be explicit and luxurious: yacht lacquer, marine glass, metallic trim, white foaming breakers, submerged reefs, translucent mineral shallows, deep saline blue, and warm dawn reflection. The whole image should feel both festive and rare, like a global luxury holiday campaign captured at a miraculous but believable moment from the air.

Rendering target: photoreal luxury yacht advertising, premium ocean texture, refined holiday concept, elegant restrained typography, strong product hierarchy, curatorially reduced composition, and world-class print-finish quality.

Structured exclusion constraints: no real yacht brand names, no copied Christmas slogans, no cheesy holiday graphics, no Santa elements, no ornaments, no fake CGI plastic tree look, no unreadable text, no garbled letters, no muddy water, no broken wave physics, no distorted yacht structure, no extra vessels cluttering the frame, no brochure-style promotional overload, no oversaturated tourism aesthetic, no style drift, no AI slop.
```

  </details>

- **假旅行vlog：Image 2.5 出30镜分镜板全链路** — 没出门、没摄影机、没剪辑师：ChatGPT 企划 → GPT Image 2.5 出 30 镜分镜板 → Gemini Omni 动画 → Lyria 配乐 → Google Vids 成片。把管线封成 skill，「我要这种视频」就能量产。 [@sahilvermaai](https://x.com/sahilvermaai) · [原帖](https://x.com/sahilvermaai/status/2101750259382624549)

- **水袖舞16宫格：莲池晓雾连续分镜** — 4×4 竖版连续分镜：同一舞者、同一湖青水袖，从舟首观莲到雾中静莲十六步全标轨迹。动作片/舞蹈预演/分镜种草的一致性模板。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2101651915407085704)
  <details>
  <summary>查看 / 复制提示词</summary>

```
请创作一张「莲池晓雾·水袖舟舞」16宫格连续分镜图，9:16竖版、4×4布局，主题改为古代园林水榭与停泊画舫之间的水袖舞，不使用宫廷大殿和傍晚宫灯。场景固定在日出前后的荷塘：木质画舫、临水平台、白墙黛瓦、荷叶、低雾与远处拱桥，画舫保持静止并有明确安全栏杆。主角为同一位成年中国女舞者，统一温婉面容、低髻、玉簪和淡妆；身穿湖青、月白、淡金配色的窄腰长裙与超长水袖，服装纹样、袖长和发饰每格一致。动作依次为：1「舟首观莲」双手垂袖站立；2「提袖试水」右袖轻触水面；3「移步过舷」沿船舷平稳侧行；4「双袖起雾」两袖从下向上升起；5「俯身采露」低身靠近荷叶；6「转腕收珠」袖口承接露珠；7「侧步穿荷」向平台方向连续移位；8「袖桥相接」双袖在头顶相连；9「低坐听水」坐于安全船凳；10「起身送袖」从坐姿平稳起身；11「回环绕柱」围绕画舫立柱半圈；12「长袖掠池」一袖横扫水面；13「踏板登岸」通过踏板走向水榭；14「背舟展袖」背向画舫完全展开；15「望桥收势」看向远处拱桥；16「雾中静莲」双袖下垂如莲瓣定格。每格标注编号、中文标题、水袖轨迹和行进方向，镜头从画舫远景过渡到手部水滴特写，再回到岸边全景；雾量、日光、人物身份和服装连续一致。
```

  </details>

- **行车记录仪首帧锁定：公路 dashcam JPEG 感** — 先把首帧锁成「真 dashcam」再进视频链路——挡风玻璃、A 柱、仪表台切片，像抓帧 JPEG 不是电影 HDR。公路短片开场可复用（ALT 含 DIRECTIVE）。 [@YazanHD12](https://x.com/YazanHD12) · [原帖](https://x.com/YazanHD12/status/2100934751716589688)
  <details>
  <summary>查看 / 复制提示词</summary>

```
DIRECTIVE:
Produce one still that reads as a real in-car dashcam frame grabbed from a moving car on a highway. Optical dashcam capture, wide windshield view, windshield glass, A-pillar, a slice of dashboard/hood — lived-in dashcam JPEG, not cinema, not HDR.
```

  </details>

- **雪原红塔构图公式：负空间 / 尺度人 / 长曝光** — 超高窄塔 vs 冻原，偏左构图+右侧留白，小黑人影定尺度，红光光轨长曝光。科技广告纪念碑感中文最终提示语可直接出片。 [@listudio](https://x.com/listudio) · [原帖](https://x.com/listudio/status/2100928131880321096)
  <details>
  <summary>查看 / 复制提示词</summary>

```
单一超高垂直体量对抗广阔雪原；建筑略偏左，天空和右侧山坡形成负空间；红色实体与黑色缝隙产生强烈图底关系；人物极小用于尺度参照；雾遮山脊；红光沿地面延展；长曝光强化雾与光轨。
最终提示语：竖幅 2:3 的极简未来建筑艺术摄影，冷白冻原上耸立一座极高、极窄的量子观测塔，位置略偏左。塔体不是双刃形，而是由三片错位折叠的深绯红钛金属鳍片构成，中央留出一道深黑垂直负空间，顶部形成不对称切角。塔基只占很小面积，一条细锐红色能量光带沿雪地横向延伸后渐隐。右下远处放置一个极小的黑色人影作为尺度，右侧灰白山坡被低云吞没。天空占据大量留白，画面克制，没有城市与装饰。金属表面微粗糙、边缘精确、红色不饱和偏冷，环境以冰灰、铅白、雾蓝为主。长曝光让山雾如薄纱横移，地面红光拉成平滑光轨，建筑本体保持建筑摄影般清晰。冷峻、神秘、纪念碑尺度、高端科技广告质感。无文字、无 logo、无水印、无飞船、无繁复灯带。
```

  </details>

- **车内 POV 事故首帧：玉米车×沥青车→爆米花海** — Coke×Mentos 变体：玉米散装车 + 高温沥青罐，手机偷拍质感锁第一帧，再丢 Seedance 跑过程。中文长 prompt 写死「只要十几颗刚爆的」，别让整条路先变白。 [@DDJCXX](https://x.com/DDJCXX) · [原帖](https://x.com/DDJCXX/status/2100876933236220383)
  <details>
  <summary>查看 / 复制提示词</summary>

```
生成一张完全真实的手机视频首帧，像坐在正在行驶的汽车里偶然拍到的一场高速公路事故。

竖屏 3:4。

镜头从汽车内部透过挡风玻璃向前拍摄，画面中保留挡风玻璃、轻微雨点、玻璃反射、一侧 A 柱，以及底部少量仪表台 / 引擎盖。

整体必须是普通消费级手机偷拍视频质感，不要电影感，不要 HDR，不要商业摄影。

前方高速公路左侧，两辆大型商用车辆紧挨着停在同一个事故区域：

第一辆是一辆大型农业散装运输车，车内装满用于制作爆米花的黄色玉米粒。

车厢后部或下方已经破损，大量金黄色干玉米粒正在持续洒落到柏油路上，在左侧车道形成明显的玉米粒带和浅堆积。

第二辆车紧挨着它，是一辆大型高温沥青罐车。

工业圆柱形罐体，真实、厚重、脏污，有高温警示标识。

罐车后部或下方附近有明显高温区域，可以看到轻微蒸汽、热浪扭曲，以及黑色高温沥青残留。

关键细节：

部分黄色玉米粒已经滚进高温区域。

但此时只有极少量玉米刚刚爆开。

地面上只散落大约 10–30 颗新鲜白色爆米花，其余绝大多数仍然是黄色未爆开的玉米粒。

可以有一两颗玉米正在爆开的瞬间。

不要出现人物。

不要出现爆米花桶。

不要出现爆米花山。

不要大规模爆发。

不要火球。

不要爆炸。

不要让整条路已经变白。

拍摄车辆仍然正在靠近事故现场，两辆卡车位于前方而不是紧贴镜头。

远处保留高速公路消失点和少量正常车辆。

阴天白昼，雨后湿润柏油路，自然反光。

整个画面必须像一个路人突然发现：

玉米运输车 + 高温沥青车 + 地上居然已经出现几颗爆米花。

真实、偶然、未经摆拍。
```

  </details>

- **Pinterest 日常照→文字反推→超写实静帧** — 先丢一张松散日常照，用 `/detailed-image-2-text-prompt` 反写出细节再文生图；换参考就能反复出「像拍的、不像提的」静帧。参考图驱动的写实工作流可抄。 [@adithatipalli](https://x.com/adithatipalli) · [原帖](https://x.com/adithatipalli/status/2100777678580461782)
  <details>
  <summary>查看 / 复制提示词</summary>

```
/detailed-image-2-text-prompt

用法：Pinterest 日常照丢进 ChatGPT → 用该指令反写细节 → 再用反写出的文字文生图。换参考图可反复跑，目标是「像拍的，不像提的」。
```

  </details>

- **宋徽宗工笔 × 离谱主体：古画换主角通用公式** — 审美全锁宋代院体，只换霸王龙/DNA/飞船——越不该出现反差越香。附可抄通用公式，社媒反差图一条龙。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2100761021413802212)
  <details>
  <summary>查看 / 复制提示词</summary>

```
宋徽宗审美 × 宋代院体工笔 × 【超现实主体】 × 极致工笔细节 × 瘦金体题诗 × 朱文钤印 × 宋式留白 × 古画绢本肌理 × 左下角钤盖「深蓝」在上、「DeepBlue」在下的深蓝色篆刻方印

用法：只换【超现实主体】，古画审美完全不变。越不该出现在宋代，反差越大越好。
例：霸王龙 / 宇宙飞船 / AI机器人秘书 / 抹香鲸 / DNA / 太阳系
生成：GPT Image 2.5
```

  </details>

- **行车记录仪首帧锁死：Image 2.5→Seedance 公路短片** — 先用 Image 2.5 把 dashcam 光学真实感钉死（挡风玻璃脏点、A柱、宽角JPEG），再整帧喂 Seedance 2.5；回复含完整 DIRECTIVE + 秒表分镜。谁还在瞎抽视频首帧，先把参照图焊死。 [@techhalla](https://x.com/techhalla) · [原帖](https://x.com/techhalla/status/2100526482212712584)
  <details>
  <summary>查看 / 复制提示词</summary>

```
First, lock the initial frame to a realistic one. I've used GPT Image 2.5 and the prompt below:

DIRECTIVE:
Produce one still that reads as a real in-car dashcam frame grabbed from a moving car on a highway. Optical dashcam capture, wide windshield view, windshield glass, A-pillar, a slice of dashboard/hood — lived-in dashcam JPEG, not cinema, not HDR.

BEAT / COMPOSITION:
Looking forward through the windshield. On the LEFT side of the road (left lane or left shoulder, clearly in frame): TWO branded trucks close together.

COCA-COLA TRUCK (LEFT, CRITICAL):
A full-size Coca-Cola tanker / delivery truck, official Coca-Cola red livery and logos readable. It has a breakdown: a torn ragged hole in the tank wall. A thick, heavy jet of dark-brown Coca-Cola is blasting out of that hole onto the asphalt — lots of liquid, puddle spreading, foam, spray in the air, wet road shine. The truck is stopped or crawling, hazard situation.

MENTOS TRUCK (BESIDE IT, CRITICAL):
Right next to the Coca-Cola truck (same left cluster, slightly ahead or alongside): a closed box truck / delivery truck with large, unmistakable MENTOS branding on the side (Mentos logo, candy rolls artwork). Rear and side doors CLOSED. No candy spilling. You can clearly read that it is a Mentos truck.

CAMERA PACK:
Fixed dashcam behind the windshield, slight barrel wide, dashboard or hood bottom of frame, windshield dirt/reflections, timestamp overlay optional, daytime road, other traffic farther ahead. Real consumer dashcam still.

LIGHT:
Daylight, overcast or sun, real road color, cola looking like dark soda not black oil.

PHOTOGRAPHIC CHARACTER:
Unstaged dashcam grab — physically grounded trucks, readable brands, the leak is the event.

Once it's ready, use it as reference for Seedance 2.5 and this prompt:

[STYLE + CAMERA + ATMOSPHERE]
Vertical 3:4 smartphone video filmed FROM INSIDE a moving car, passenger or driver seat. Phone held handheld (not a bolted dashcam): arms, slight breathing shake, windshield and A-pillar in frame, a slice of dashboard/hood at the bottom, maybe a finger edge. We are ARRIVING — forward motion first, trucks growing larger, then we slow and stop short of the cola lake. CONTINUOUS SINGLE TAKE the entire 30s. Digital pinch-zooms only (no cuts): punch into the Coke jet, the jug fill, the Mentos doors, the launch, then zoom out as he shrinks to the horizon. Daylight, overcast, wet asphalt, rain specks on glass. Consumer phone JPEG, autofocus hunting, rolling shutter. Photoreal live physics: cola viscosity, foam, Mentos cases, one adult body launched like a Mentos rocket.

LOCKED SET / VEHICLES:
- LEFT ahead through the windshield: red Coca-Cola tanker with a ragged hole, dark-brown Coca-Cola ALREADY blasting onto the lane, spreading cola lake.
- BESIDE it: Mentos box truck, rear doors CLOSED at arrival, Mentos livery readable ("mentos / The Freshmaker").
- Highway continuing past them toward a clear vanishing-point horizon.
- NO other truck for the guy. He does not exit a vehicle.

LOCKED CAST:
- THE GUY: one very large man alone — sweat-dark tank top, cargo shorts, stained baseball cap, Alabama redneck energy. No second person. He ENTERS FRAME FROM THE RIGHT (shoulder / right edge of the windshield view) already on foot — he does not get out of any truck, van, or car.
- HERO OBJECT: one giant gas-station plastic jug / Big Gulp–scale cup in his right hand. Starts EMPTY (daylight visible through clear plastic), stays in that hand until the blast.

Diegetic audio: road noise while arriving, cola hiss, gulping, metal latch, volcanic foam roar, Doppler scream as he flies away, phone mic clipping.

[IMAGE REFERENCES]
[ref_image] = locked opening phone still from inside the car looking through the windshield at the Coke tanker + Mentos truck cluster. Tanker, hole, cola jet, Mentos truck, and in-car foreground are LAW. Clip BEGINS with us still rolling toward that cluster.

[TIMELINE SECOND BY SECOND]

0-3s: [HOOK — ARRIVING + ZOOM] Phone already rolling. Road noise. Through the windshield the Coca-Cola tanker and Mentos truck are already ahead on the left; cola ALREADY jetting from the hole. We close distance — trucks grow. Digital zoom punches into the Coke stream and the hole. By ~2.5s brakes dip. Several events already: motion, the leak, closing in, first zoom.

3-5s: [STOP + HE ENTERS FROM RIGHT] We fully stop. Idle phone shake. Zoom out a notch. THE GUY walks INTO FRAME FROM THE RIGHT — already on foot from the shoulder / right edge, giant EMPTY jug held high, clear plastic with daylight through it. He does not exit any vehicle. He steps straight into the cola lake toward the tanker jet.

5-9s: [FILL — HOLD IT] He shoves the empty jug INTO the Coke stream. ONE CONTACT: jug into the jet. Phone slam-zooms the fill and HOLDS. For a clear ~2 full seconds (through ~7–8s) the jug is STILL filling under the blast — brown liquid climbing the plastic, foam boiling over the rim, overflowing his forearm, stream hammering the mouth of the jug the whole time. Only then does he pull the full heavy jug out and raise it.

9-12s: [CHUG] He tilts and CHUGS — huge gulps, cola down the tank top. Empties most of it, gasps, still holding the jug. Turns to the Mentos rear doors. Phone zooms out enough to keep tanker jet + Mentos bumper + him in frame.

12-16s: [OPEN + DUMP] ONE CONTACT: he yanks both Mentos rear doors open. Cases stacked high. He dumps a case — Mentos rolls cascade into the cola lake. Packs split, white mints into the brown river. Digital zoom on the mint waterfall hitting the puddle. He still stands in the lake with the jug.

16-20s: [IT GOES] Hard fizz, then a WHITE FOAM COLUMN erupts between the trucks. ONE CONTACT: the fountain hits him from below like a human Mentos rocket. Feet leave asphalt. Jug flies. He launches UP and AWAY down the highway axis. Phone slam-zooms his body leaving the ground, then struggles to track him.

20-24s: [HUMAN FOUNTAIN] He is a dark silhouette riding the white column, spinning once, cap gone. The geyser leans him toward the open highway horizon. Foam hits our windshield — phone jerks but stays inside the car, still filming through glass. Digital zoom hunting his shape in the spray.

24-26s: [SHRINKS] Zoom out through foam streaks on the glass. He is airborne over the far lanes, a tiny spinning figure on a white spray trail, Mentos truck hopping, tanker still feeding the column. Phone digital-zooms into the shrinking speck, then out again.

26-30s: [PAYOFF — GONE] He dwindles to a speck and DISAPPEARS into the horizon haze past the vanishing point (~1s earlier than before). Phone holds on empty sky/road where he vanished, foam still climbing between the trucks, Mentos doors still open, Coke still dumping. Final tiny digital zoom into that empty vanishing point. Loop-open: empty horizon, roar still going.

[STYLE & QUALITY BOOSTERS]
Photoreal handheld phone from inside a car, 3:4 vertical. Arriving motion then stop. Digital pinch-zooms only, continuous take. One man enters from the RIGHT on foot — never exits a vehicle. Empty jug fills on camera for a clear multi-second hold. Body launched to the vanishing point. Coherent liquid physics. Identity lock to [ref_image] for both trucks, the hole, and the in-car windshield framing.
```

  </details>

- **1930s怪兽片制片管线：后投/定格木偶/手绘景片** — 不是「黑白滤镜」——理解后投、定格木偶表面、分层布景与胶片划痕整条制片管线。场景视觉史感配方，附可填槽完整 prompt。 [@xwyAdam](https://x.com/xwyAdam) · [原帖](https://x.com/xwyAdam/status/2100497825717174695)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a black-and-white frame from an imagined early-1930s studio adventure film, using handmade practical-effects miniatures and a stop-motion puppet.

SCENE
[Describe the setting, the action, and the placement of the subjects.]

Frame the scene from within its story world, at the human characters’ eye level. The puppet represents a creature of immense size. Human characters read as live-action performers, with natural clothing and clearly staged reactions.

CREATURE
[Describe the creature through its silhouette, head shape, torso, limbs, posture, and tail.]

Give it the physical presence of a hand-built articulated puppet: a clay-sculpted form reproduced in matte painted rubber, irregular raised surface patterns, thick compressed folds around the joints, shallow sculpting marks, and slight asymmetry.

Teeth and claws have a subtly carved, painted finish. Its pose feels heavy, deliberate, and faintly stiff. Its menace comes from its mass, expression, and proximity to the people.

SET
Build [the environment] as a miniature studio set in distinct depth layers: dark, softly blurred foreground pieces partially obscure the frame; tangible middle-ground scenery surrounds the action; overlapping scenic flats and a softly painted backdrop form the distance.

Use [scene-appropriate handmade props and materials]. Let the distant scenery retain a slightly flat, painted quality, with pale theatrical haze separating the layers.

PHOTOGRAPHY
Use a restrained, frontal wide composition with the main figures fully readable. Broad studio lighting reveals the puppet’s coarse surface and the solid construction of the scenery.

Keep the action plane legible, with foreground softness and a gently softened background. Unify the performers, puppet, and scenery through matching light, shadows, and monochrome tones.

FINISH
Soft optical detail, rich charcoal shadows, silvery midtones, modest film grain, sparse fine vertical scratches, and lightly worn frame edges.

Preserve the handmade surface detail beneath the film texture. Fill the frame with the fictional world and maintain its enormous implied scale.
```

  </details>

- **六零年代巨人之地：Image2.5+Seedance 风格锁短片** — STYLE/CHARACTER/SETTING 三锁 + 30 秒分镜秒表，复刻 1968 电视审美的桌面巨人短片。Image 2.5 出静帧再喂 Seedance，广告片/概念片管线可整段抄。 [@oggii_0](https://x.com/oggii_0) · [原帖](https://x.com/oggii_0/status/2100474286599500015)
  <details>
  <summary>查看 / 复制提示词</summary>

```
16:9 widescreen, 30 seconds, Dola Continuous Engine.
STYLE LOCK: Inspired by classic late-1960s Irwin Allen television production "Land of the Giants". Authentic 1968 television aesthetic. Practical miniature sets. Optical compositing. Slight matte-line separation between actress and background. Rear-projection feel. Eastmancolor television colors: warm skin, saturated red and yellow, slightly cyan shadows. Soft image sharpness. Mild film grain. Analog broadcast texture. Vintage studio lighting: one hard key from upper left, warm fill from the right, no rim light. Camera: static wide shots and slow television zoom lens only. No handheld. No modern lens flare.
CHARACTER LOCK: @[Image 1](image_1)  is the only person. She remains identical in every frame:  1960s Korean mini dress  with [sleeve and neckline  classic 1960s makeup with winged liner and pale pink lips, white heels. Dress, hair, makeup and shoes never change .
SETTING LOCK: an enormous 1960s dining table seen from her scale; she is the size of a salt shaker. White tablecloth hanging from the edge to the floor in long vertical folds. On the tabletop from left to right: a tall glass of milk with condensation beads, a giant slice of chocolate layer cake with thick frosting and a single lit birthday candle, a large silver spoon and fork crossed beside it, a bowl of vanilla ice cream with one huge cherry on top, a folded white napkin. Warm wooden tabletop. Pale yellow wall in the background. Props are practical scale with slightly soft edges.
0–4 seconds:
Static wide from floor level. The tiny woman climbs the hanging tablecloth, gripping the folds with both hands, one heel finding a fold below her. The cloth sways slightly under her weight. She looks up toward the table edge.
4–7 seconds:
Slow zoom in as she pulls herself over the edge, kneels, then stands upright on the tabletop. Her eyes widen and her mouth opens, gaze drawn toward the flickering candle flame on the cake. Her hands stay half raised.
7–11 seconds:
Static wide from behind her at her eye level. The dessert spread stretches across the table like a city skyline: the cake slice looms like a frosted mountain, the candle flame taller than she is, the milk glass glowing like a white tower, the spoon lying across the foreground like a bridge.
11–15 seconds:
She walks toward the cake, heels tapping the tabletop. Thick ridges of frosting drip down its side. The lit candle flickers above, casting warm moving light across her face. She touches the frosting edge with one hand and looks up along the flame.
15–19 seconds:
She climbs onto the cake's bottom layer, sits, scoops a bit of frosting with both hands, smiles, tastes it, licks her fingers, and looks left and right. Medium shot, slow zoom in to her face, candlelight flickering warmly on her skin.
19–23 seconds:
She stands and walks farther across the tabletop, stepping around the giant cherry from the ice cream bowl, passing between the spoon and the napkin. Static wide, then a slow pan following her.
23–26 seconds:
She stops beside the milk glass, looks up along the tall glass, and laughs with one hand resting on it. Condensation beads glisten and catch the light on her face.
26–28 seconds:
A massive shadow sweeps across the tabletop from the right and covers the milk glass and the cake. Her laugh stops. She lowers her hand and turns to face the right side of frame.
28–30 seconds:
HOLD. Camera fully static medium-wide shot. She stands facing screen right, feet together, right hand half raised at chest height, left hand at her side. The milk glass directly at her left, the cake slice behind her, the shadow across the whole tabletop. Her face is turned to the right, not yet tilted upward. Nothing moves for two full seconds.
Audio
Cheerful 1960s adventure television music, playful brass and strings. At 26 seconds the music thins to one held string note that continues to the end, with a faint fading birthday-music-box
```

  </details>

- **Seedance × Image 2.5：拳击短片对打广告** — Image 2.5 出视觉 + Seedance 2.5 成片，拳击对打叙事完整。一人团队做产品对打广告的现成动静链路。 [@TechieBySA](https://x.com/TechieBySA) · [原帖](https://x.com/TechieBySA/status/2100177103991787826)

- **旅馆 PR：Image 2.5 九宫分镜→Gemini Omni** — GPT Image 2.5 出 9 格品牌分镜，再喂 Gemini Omni 成片+配乐。温泉旅馆「ほどける時間へ。」整条可抄，静帧定调再出视频的标准管线。 [@husky__create](https://x.com/husky__create) · [原帖](https://x.com/husky__create/status/2100162861045817624)
  <details>
  <summary>查看 / 复制提示词</summary>

```
温泉旅館「KAWANE」のブランドムービー用フォトストーリーボードを、1枚の画像として生成してください。

【広告コンセプト】
「ほどける時間へ。」

都会で忙しく働く女性が山間の温泉旅館を訪れ、景色、お茶、温泉、食事を通じて、少しずつ心を解放していく物語。観光地の華やかさではなく、静かな時間と丁寧なおもてなしを価値として描く。

【画面構成】
全体は16:9の横長。
3列×3行、全9コマの均等なフォトグリッド。
各コマも横長16:9。
コマの間には細いアイボリー色の余白を入れる。
左上から右方向へ「01」〜「09」の小さな白い番号を、各コマ左上に配置する。
説明文やカット名は表示しない。

すべてのコマを、実際に撮影された高級旅館のTVCMから切り出したようなフォトリアルな映像品質にする。

【主人公】
30代前半の日本人女性。
肩に触れる長さの自然な黒髪。
上品で親しみやすい顔立ち、自然な瞳、控えめなメイク。
肌の毛穴や柔らかな陰影を残し、過度な美肌加工は行わない。
到着時は生成りのニット、ダークブラウンのロングスカート、革靴、小さな旅行バッグ。
館内では同じ女性が落ち着いたベージュ系の浴衣を着用する。
顔、髪型、体格を全カットで統一する。

【ロケーション】
山と清流に囲まれた現代的な温泉旅館。
木、石、和紙、土壁を取り入れた静かな和モダン建築。
窓の外には色づき始めた山、川、紅葉。
観光施設らしい派手さを避け、品のある落ち着いた空間にする。

【9コマの内容】

01：
午後の山間に佇む旅館の外観。
女性が小さな旅行バッグを持ち、石畳を歩いて玄関へ向かっている。
旅館、川、山、紅葉がひとつの画面に収まる広い導入カット。

02：
吹き抜けのロビー。
女性が大きな窓の前で立ち止まり、山と川を眺めている。
後ろ斜めから撮影したミディアムワイド。
木造建築と窓から入る自然光を美しく見せる。

03：
スタッフの手がお茶と小さな和菓子を木製テーブルへ置く瞬間の接写。
陶器の質感、薄い湯気、菓子の繊細な造形、丁寧な所作を描く。

04：
女性が客室の障子を開ける場面。
手元と横顔を近距離から捉え、障子の向こうに山の景色と柔らかな光が広がる。

05：
露天風呂の湯面を捉えたマクロショット。
水面に赤い落ち葉が一枚浮かび、細かな波紋と湯気が広がる。
人物は映さない。

06：
浴衣姿の女性が窓辺の椅子に座り、両手で湯呑みを持ってお茶を飲む。
横顔に午後の柔らかな光が当たり、緊張が解けた穏やかな表情。

07：
夕食の会席料理を真上から撮影したフラットレイ。
川魚、季節の野菜、土鍋、小鉢、酒器を端正に配置する。
器、木目、料理の色彩を高精細に描く。

08：
夕暮れの縁側に座る女性の親密なポートレート。
目を静かに閉じ、秋の空気を吸い込むような自然な表情。
山のシルエットと行灯の光が背景で柔らかくぼける。

09：
夜の客室と縁側を捉えた締めのブランドカット。
右側に暖簾、木の格子、光る行灯。
左側には暗い山と文字用の余白を確保する。
左側に正確な日本語で「ほどける時間へ。」
その下に、字間を広く取った上品なセリフ体で「KAWANE」。

【撮影表現】
日本の高級旅館広告。
標準〜中望遠レンズを中心に、料理やお茶はマクロレンズ。
午後から夕暮れ、夜へ自然に時間が進行する。
木の温かさ、石の冷たさ、湯気、紙、陶器の質感を丁寧に描く。
滑らかなハイライト、奥行きのある影、微細なフィルムグレイン。

【禁止事項】
アニメ、イラスト、CG感の強い表現、過度なオレンジ加工、強い霞、非現実的な豪華さ、人物の顔の変化、手指の破綻、余分な人物、指定外のコピー、透かし、余分なロゴを入れない。
```

  </details>

- **奇幻片 BTS：Sunburst×Seedance 幕后戏** — Higgsfield 上 GPT-6 + Seedance 1080p + Image-2.5 Sunburst；贴完整 BTS 分镜 prompt。多模型广告流水线参考。 [@maxescu](https://x.com/maxescu) · [原帖](https://x.com/maxescu/status/2100153168256499784)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Fast, funny BTS: the fantasy cast breaks character among crews, practical sets and costume technicians.

[Cast references: identity and costume only]
[IMAGE REFERNCE 1] defines Alex: bareheaded gold Field Marshal, eagle right shoulder, ivory left drape, huge broad rigid blue-gold claymore.
[IMAGE REFERNCE 2] defines Garran: bald black-bearded human, gunmetal/navy armor, blue shield.
[IMAGE REFERNCE 3] defines Bix: short white-bearded gnome, goggles, cobalt robes, wooden crystal staff.
[IMAGE REFERNCE 4] defines Lyra: silver-haired lavender night elf, plum leather.
[IMAGE REFERNCE 5] defines Karg: green orc, black braids, iron/burgundy armor.
[IMAGE REFERNCE 6] defines Aldra: blonde human, silver/cobalt paladin plate and shield.
[IMAGE REFERNCE 7] defines Torga: brown-furred horned tauren, ochre/teal costume.
[IMAGE REFERNCE 8] defines Rattlegore: towering skeleton, shown here as a full-scale articulated puppet with operators.
Everyone is a friendly off-duty performer in the same makeup and costume. Adult crew wear plain modern work clothes and headsets. Each hard cut is a different candid moment. Bix retains his staff and free palm. Alex's claymore stays straight, supported in a rack or held low with both hands.

[Stage 1 - 0-3s]
Dungeon soundstage, medium two-shot. A blank striped slate claps beside a cinema camera; Alex and Garran's fierce poses collapse into laughter. The visible headset director says in English {Reset--same epic faces!} <Slate armor creaks, laughter. snap,>
Hard cut.
[Stage 2 - 3-6s]
Dungeon, medium Bix beside Lyra. Bix raises his free palm while gripping his staff; a crew-triggered practical light flashes before his cue. Bix shrugs. Lyra deadpans in English {That was... not my mark.} <Light chuckles. click, relay>
Hard cut.
[Stage 3 - 6-9s]
Dungeon, close two-shot. Lyra carefully touches Garran's beard with a tiny makeup brush. Garran crosses his eyes at her; Lyra breaks into laughter and lowers the brush. A makeup trolley fills the soft background.
Hard cut.
[Stage 4 - 9-12s]
Dungeon, wider low side view. Rattlegore's enormous puppet arm moves with a ridiculous hinge squeak. Two visible operators work its rods beneath scaffolding. Alex points at their exposed mechanism and grins. <Joint crew laughter. squeak,>
Hard cut.
[Stage 5 - 12-15s]
Sunlit Hillsbrad film location, close Karg with wind fan visible beside camera crew. His big roar is interrupted when his braids blow across his mouth. He cough-laughs; Garran gives a mock-serious director's nod nearby. <Fan interrupted laughter. roar, rush,>
Hard cut.
[Stage 6 - 15-18s]
Field set, medium Aldra. A wardrobe technician briskly refastens her armor clasp while she holds a regal pose. Aldra relaxes into a grin and gives the technician a thumbs-up.
Hard cut.
[Stage 7 - 18-21s]
Field costume station, close Torga. A technician adjusts the seam of his bulky creature costume. Torga maintains a ferocious stare, then playfully raises his eyebrows at the BTS camera. <Fabric giggles. rustle, suppressed>
Hard cut.
[Stage 8 - 21-24s]
Compact Nagrand set, wide with a dolly camera. Two crew easily lift a hollow stone-look pillar from its base. Bix gently taps the lightweight scenery with his staff while they hold it securely; he laughs at the illusion. <Hollow laughter. tap,>
Hard cut.
[Stage 9 - 24-27s]
Arena, close Alex beside a reflector operator. Reflected sunlight briefly flashes across his face; he turns aside, then grins. English, Alex: {That's the sun's crit.} <Reflector crew laughter. rustle,>
Hard cut.
[Stage 10 - 27-30s]
Later common studio apron, lively wide wrap. Alex, Garran, Bix, Lyra, Karg, Aldra and Torga wave with the crew; Rattlegore waves through its visible puppet rig. Alex holds his claymore low in both hands.

Vivid photoreal costumes, fine 35mm grain. Varied candid handheld framing, fixed focal length, no zoom. Full-bleed, unlettered gear; overlay text zero.
```

  </details>

- **任意角色→12 格变身分镜：完整 prompt** — 3×4 变身 storyboard：从原装到终态逐步揭示，禁套娃恶魔翅膀。短剧 / 广告分镜模板，线程附视频接法。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2100135954032087346)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 12-panel transformation storyboard for the character in the uploaded reference image, arranged in a clean 3-column × 4-row grid, read left to right and top to bottom.

CHARACTER AND CONCEPT
First, visually analyze the character’s identity, outfit, signature accessories, color palette, personality, and apparent world or profession. Use these details to invent a distinctive transformation theme that feels like a natural evolution of this specific character.

Choose a coherent power source, visual effects, transformation mechanism, and final evolved form. Derive these from the character rather than defaulting to generic demon wings, horns, purple lightning, or an unrelated costume.

The final form must show a substantial, deliberate change in silhouette, costume structure, materials, and signature accessories—not merely the original outfit with a glowing aura. Preserve enough recognizable motifs that the result unmistakably feels like the same character.

IDENTITY CONSISTENCY
Keep the same face, apparent age, body proportions, skin tone, and defining features throughout all 12 panels. Preserve the character’s signature hair color and recognizable hairstyle, allowing natural movement and subtle styling changes. Maintain the reference image’s illustration style.

Begin with the original outfit faithfully reproduced. Design one coherent final outfit and reveal it progressively. Once a transformed element appears, keep its design consistent in all subsequent panels.

12-PANEL SEQUENCE
Panel 1 — Original state: Clearly establish the reference character in their original outfit, with a readable full-body silhouette in an appropriate setting.
Panel 2 — Trigger: A signature accessory, gesture, or environmental element activates the character’s latent power.
Panel 3 — Response: The character notices the change and makes a purposeful movement. Small thematic effects begin to gather.
Panel 4 — Gathering power: The transformation energy establishes a clear direction and motion around the character.
Panel 5 — First visible change: One important costume element or accessory evolves, clearly showing the transformation mechanism.
Panel 6 — Progression: The transformation travels across the body, forming new clothing, armor, ornamentation, or other theme-appropriate details.
Panel 7 — Defining detail: Show a closer view of a major identity-linked upgrade, such as headwear, shoulder pieces, a weapon, or a magical accessory.
Panel 8 — Silhouette expansion: Reveal the largest structural change, such as a flowing mantle, elongated coat, layered armor, or another character-specific feature.
Panel 9 — Climax: Show the peak of the transformation with a powerful pose and dramatic thematic effects. Keep the character readable.
Panel 10 — Full reveal: Effects clear to reveal the complete evolved form in a clean full-body view.
Panel 11 — Personality moment: The character makes a small expressive gesture that conveys their personality and newfound confidence.
Panel 12 — Final hero image: Finish with a striking full-body pose that clearly displays the completed design, with restrained residual effects and a resolved background.

VISUAL DIRECTION
Build a clear emotional progression from anticipation to awakening to mastery, adapted to the character’s personality. The character actively participates in the transformation rather than simply standing still.

Use a cohesive environment and lighting progression across the sequence. Vary framing between full-body, three-quarter, and selective detail shots while maintaining spatial continuity. Prioritize full-body views for the original state, major silhouette changes, and final reveal.

Make every panel advance the transformation. Show intermediate stages with clear visual cause and effect; do not jump abruptly from the original outfit to the final costume.

Use elegant, theme-specific transitions such as flowing material, particles assembling into solid forms, unfolding structures, or energy passing over and revealing new costume elements. Keep anatomy stable and clothing coherent. No nudity or erotic framing.

OUTPUT
One polished, high-resolution storyboard image containing exactly 12 distinct panels with thin, consistent borders. Balance character detail with visual clarity. No captions, labels, speech bubbles, logos, or watermarks.

Do not reproduce the uploaded reference sheet’s layout or duplicate its multiple views. Use the uploaded image to identify one character, then depict that same character across a new, continuous transformation sequence.
```

  </details>

- **Image→色板→动效→剪辑：变体先于视频** — Image 2.5 先出视觉变体，Seedance 转旋转序列，CapCut 收成片。别再 Prompt→Video 一把梭——先锁画面再喂动效。 [@tylerrwayne](https://x.com/tylerrwayne) · [原帖](https://x.com/tylerrwayne/status/2100099092135440769)

- **Acidic 门缝静物：青光长曝光黑空间** — 黑建筑虚空里一扇半开白门泼冷青光，asset type / 长曝光 / 禁止项写死。品牌 mood / 产品概念静物整段复用。 [@listudio](https://x.com/listudio) · [原帖](https://x.com/listudio/status/2100075950360945150)
  <details>
  <summary>查看 / 复制提示词</summary>

```
stylized-concept. Asset type: vertical experimental interior photograph. Create a new 2:3 portrait image inside an almost completely black architectural void. A single narrow, tall matte-white door stands upright near the center, slightly to the right, viewed straight on; the top edge nearly disappears into darkness. The door is ajar by a small angle, releasing an intense cold cyan-blue light that floods the right wall and sweeps across the dark floor as a broad diagonal wedge. Across the door surface, soft acidic color contamination transitions from cyan at the top through cool white to pale magenta and a concentrated amber-yellow glow near the lower left. Add one minimal black horizontal lever handle on the right side of the door. Use a long-exposure photographic effect in the projected floor light and peripheral glow: smooth blue light drag, soft blooming and subtle color bleed, while the door geometry and handle remain crisp. Deep velvety blacks, high contrast, restrained film grain, clean architectural minimalism, no people, no furniture, no text, no logo, no watermark, no border, no extra objects.
```

  </details>

- **Flare×Seedance：GTA 风开放世界洗车片** — GPT Image 2.5 Flare + Seedance 2.5 做黄金时段 Hellcat 洗车短片。想蹭游戏美学做广告的，这条够玩（教程帖内 DM 获取）。 [@yourPlugAI](https://x.com/yourPlugAI) · [原帖](https://x.com/yourPlugAI/status/2100074567398043685)

- **午夜 diner：Image 2.5 定角 → Seedance 下厨** — Image 2.5 出角色，Seedance 2.5 跑厨房戏；prompt 与 turnaround 挂在账号。静帧定人设再喂视频的标准营销片流水线。 [@atlas_cloud_ai](https://x.com/atlas_cloud_ai) · [原帖](https://x.com/atlas_cloud_ai/status/2100066521846612402)

- **DRAM 纳米城：电子显微镜视角结构化中文** — 两套可抄中文槽位：东方女性 × 纳米真人 × DRAM / 3D NAND 存储城市 × 电子显微镜抓拍。科技产品视觉还能俏皮。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2100051568154538130)
  <details>
  <summary>查看 / 复制提示词</summary>

```
图1
真实东方女性 × 纳米级真人 × 穿梭在巨大存储单元之间 × DRAM存储城市 × 纳米摩天大楼 × 密集晶体管阵列 × 电子显微镜视角抓拍 × 微观黑色背景

图2
真实东方女性 × 纳米级真人 × 穿梭在巨大存储结构之间 × 可爱俏皮表情 × 双手扶着巨大存储结构探头张望 × 3D NAND存储城市 × 纳米摩天大楼 × 无限堆叠存储单元 × 电子显微镜视角抓拍 × 微观黑色背景
```

  </details>

- **粉红海 POV→30 秒无剪辑广告管线** — Flare 出首帧（全海面必须玫红）+ Seedance 2.5 锁 ref 连拍到酒吧落桌。DIRECTIVE + 30s timeline 在首评，场景广告流水线可抄。 [@wuzhu_](https://x.com/wuzhu_) · [原帖](https://x.com/wuzhu_/status/2100048689989288414)

- **Sunburst 尾帧→MiniMax Meta 向延时广告** — 钢琴教室虚构广告：Sunburst 出 end frame，MiniMax H3 出 9:16 / 10 秒延时彩铅成片，还把视线往 offer 按钮上导。广告素材流水线示范。 [@tanabe_fragm](https://x.com/tanabe_fragm) · [原帖](https://x.com/tanabe_fragm/status/2100020375006654762)
  <details>
  <summary>查看 / 复制提示词</summary>

```
How the reference pictures align with the target video — <Picture 1> (from [Shot 1]) aligns with the 10.00-second mark.

integrated_multimodal_description: [Shot 1] Live-action, authentic traditional art timelapse of a hyperrealistic colored-pencil drawing, filmed as one continuous take from a locked-off top-down camera directly above the paper. The camera stays completely still in a Static Shot for the entire 10 seconds, with no zoom, no pan, no tilt, and no change of framing. A blank white vertical sheet of drawing paper fills the whole frame edge to edge, so the paper edges, the desk, any table, and any art supplies are never visible; only the paper and the drawing hand appear. The drawing hand is a young woman's slender right hand with short, neat natural nails and a bare wrist. With a graphite pencil, her hand quickly sketches the little girl on the piano bench and the smiling female teacher seated behind her, then the upright piano on the right with its keys and open sheet music, then the wavy lower booking band with its rounded button and faint guide lines where every line of lettering in <Picture 1> will sit.
At 00:01.500, in the same fixed framing, her hand rapidly defines the girl's smiling face, braided half-up hair, and small hands on the keys, then the teacher's gentle face and hair tied back, then the bookshelf, framed picture, bright window, and plants behind them, using short strokes and one quick eraser correction.
At 00:03.500, in the same fixed framing, her hand layers soft warm cream over the room and bright window, then pale lavender over the girl's top and a small floral pattern over her skirt, then cream over the teacher's blouse and soft gray over her skirt.
At 00:05.500, in the same fixed framing, her hand colors the warm brown wood of the piano, the dark brown leather bench, and the wooden footrest, then the green plants, bookshelf, and patterned rug, then soft window light and shadows, so the image looks more and more like a photograph. The lower booking band stays uncolored white paper with only faint pencil outlines.
At 00:07.000, in the same fixed framing, her hand goes over the upper guide lines, turning them into the small line above the logo and the large navy rounded logo with a tiny green sprout, then the navy two-line headline with the word inside the brackets switched to soft coral orange and the subcopy, then the small handwritten phrases, the pale blue wave with music notes in the top right, and the watercolor leaves in the top left of <Picture 1>. The lower booking band still stays uncolored.
At 00:08.000, in the same fixed framing, her hand finally finishes the lower booking band: first it fills the wavy band with soft pale blue and adds the watercolor white flowers and green leaves in its corners, then writes the navy heading with small yellow accent marks and fills the wide rounded button with bright coral orange, then writes the white button lettering and the tiny note below it, exactly as in <Picture 1>.
At 00:09.000, in the same fixed framing, her hand adds one final small stroke on the coral button, then lifts away out of the top of the frame.
At 00:09.400, the frame holds perfectly still with no hand, no pencil, and no shadow, and the finished artwork settles into an exact match of <Picture 1> in layout, colors, lettering, and photographic detail.
Throughout the video, the camera never moves, the paper never shifts, and nothing outside the paper is ever shown; everything appears only through visible strokes of the woman's hand, with no morphing, no digital interface, and no cursor.

overall_soundscape: Graphite and colored pencils scratch rapidly across textured paper in quick bursts. A rubber eraser rubs briefly and crumbs are brushed away with a soft swipe. The strokes become broad and steady as the pale blue band is filled, then stop as the hand lifts away, leaving near silence for the last moment.

non_diegetic_music: N/A
```

  </details>

- **静止画→航拍路径可视化→Seedance 成片** — 角色静帧一贴，Images 2.5 画出脚→脸的无人机拍摄黄线路径，再丢 Seedance。镜头语言先可视化再成片，短视频分镜党直接抄。 [@agi_aibusi](https://x.com/agi_aibusi) · [原帖](https://x.com/agi_aibusi/status/2100004003237204394)
  <details>
  <summary>查看 / 复制提示词</summary>

```
添付画像をSeedance用のカメラ経路ガイドにしてください。
元画像は一切描き直さず、次の順番を通る一本の細い黄色い線と、進行方向を示す矢印だけを重ねてください。
経路：［始点］→［経由点1］→［経由点2］→［経由点3］→［経由点4］→［終点］
各点は画像内の実際の位置に合わせ、被写体の輪郭に沿って左右へ緩やかに折り返しながら、滑らかな曲線でつないでください。点の順番が分かる小さな番号を付けます。線や番号は顔などの重要な部分をできるだけ隠さないよう配置してください。人物・動物・背景・構図・色味は変更しないでください。
```

  </details>

- **Astra×Image 2.5：粗引导编辑再渲染** — Astra 造 / 改 / 动粗引导（笔触、SVG、角色绑骨），Image 2.5 跨帧一致性渲染。控形管线从草图升级到可动引导。 [@ArmanMaesumi](https://x.com/ArmanMaesumi) · [原帖](https://x.com/ArmanMaesumi/status/2099985353469992962)

- **保安大爷动作片：角色表→Seedance 成片** — Image 2.5 出 THE JANITOR 角色圣经，再 Seedance 2.5 夜校走廊清场。IP 短片：先锁脸造型再喂视频。 [@TechieBySA](https://x.com/TechieBySA) · [原帖](https://x.com/TechieBySA/status/2099914485729231198)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium cinematic character bible sheet for THE JANITOR. Use uploaded character sheet as strict visual reference. Do not change his appearance.

LAYOUT: Single character centered format. Janitor filling most of the sheet, centered and dominant.

Bright yellow watercolor splash radiating behind him — bold and dramatic, controlled, same style as the Taken and John Wick sheets. Large bold brushstroke text THE JANITOR top left in deep yellow. Below small text: HALLWAY / NIGHT SHIFT. One massive dramatic cropped hero image of the Janitor from mid-thigh up — completely calm expression, navy uniform, name badge visible, yellow glowing mop staff held in both hands radiating yellow light outward, yellow watercolor splash behind him.

BOTTOM CENTER: Bold dramatic THE JANITOR in deep navy, slightly worn. Below it small text: NIGHT SHIFT. ONE MOP. NO MERCY. Color palette — navy blue, bright yellow, black, white. Tagline centered: SOMEBODY MADE A MESS.

OVERALL: Clean white background, bright yellow watercolor splash behind the Janitor same style as Taken and John Wick, character from mid-thigh up filling the frame, face clearly recognisable, bold flat color blocking, chunky simplified forms, hard edge shadows, thick black outlines, vibrant saturated colors, minimal clean typography, cinematic cel-shaded 3D anime, hand-painted textures, not cartoon not Disney not Pixar, print ready.
```

  </details>

- **TWIX 焦糖分镜商业片：故事板锁镜三镜头** — 上传 storyboard 当主参考，约 16 秒、三镜、9:16 竖屏——产品/包装一致性写死。快消食品广告「分镜锁一致性」整段可抄。 [@NoravaleAI](https://x.com/NoravaleAI) · [原帖](https://x.com/NoravaleAI/status/2099850452426961352)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded storyboard image as the primary visual reference.

Create a premium 9:16 vertical TWIX Caramel Cookie Bars commercial, about 15.5–16 seconds long, in 3 shots, following the storyboard exactly.

Keep the same saturated warm gold seamless studio, glossy commercial lighting, caramel-brown and gold palette, and premium food-advertising style throughout.

Maintain product consistency across all shots:
- TWIX bars = biscuit cookie base + chewy caramel layer + milk chocolate coating
- TWIX pack = gold flow-wrap, readable white TWIX letters with red sides, sealed, upright, centered where shown

Use clean straight cuts only.
No text overlays.
No slogans.
No camera shake.
No morphing.
All shots use a locked camera.

SHOT 1:
Stacked unwrapped TWIX bars on a glossy gold cylindrical pedestal in the gold studio. One bar shows its interior cross-section. A thick glossy caramel stream pours from above onto the top bar, coats it, and drips down the sides onto the pedestal. The stack stays still. Locked camera. End with a few heavy caramel drips.

SHOT 2:
Extreme close-up of an adult woman’s mouth with caramel-red lipstick against the gold background. She holds a bitten TWIX bar to her lips. She takes one slow small bite. The cookie compresses slightly and a thin caramel string stretches briefly, then settles. Her head stays nearly still. Locked camera. End with the bitten bar still at her lips.

SHOT 3:
Hero packshot in the same gold studio. The upright TWIX pack stands centered, surrounded by a low ring of broken cookie pieces, caramel shards, and chocolate chunks. Small crumbs and chocolate bits fall slowly from above around the pack and settle onto the pile. The pack stays still and readable. Locked camera.

Food realism is critical:
glossy caramel, realistic biscuit texture, realistic chocolate coating, appetizing bite mark, clean premium studio finish.

Do not generate:
children, extra people, extra products, KitKat, Nestlé, wrapper in shot 1 or 2, messy chocolate, smoke, steam, dark backgrounds, floating pack, rotating pack, chaotic particles, text overlays, subtitles, or surreal motion.

Final feel: iconic, appetizing, glossy, controlled, premium gold-studio food commercial.
```

  </details>

- **人设图+ElevenLabs+Seedance：50 条 FB 广告流水线** — Image 2.5 出目标客群人设图 → ElevenLabs 配音 → Seedance 批量成片 → Facebook CBO 同广告组灌 50 条让 Andromeda 筛赢家。一人增长团队的素材工厂模板。 [@codyschneider](https://x.com/codyschneider) · [原帖](https://x.com/codyschneider/status/2099845746354733333)

- **低头看一眼手机：车站灾变动画** — Image 2.5 钉首帧，Seedance 2.5 接灾难片节奏。社媒「一晃神世界观崩了」短片模板。 [@atlas_remake](https://x.com/atlas_remake) · [原帖](https://x.com/atlas_remake/status/2099807993785397630)

- **皮克斯风午夜食堂：角色场景→Seedance** — 角色与场景全用 Image 2.5，再喂 Seedance；厨师备餐动作意外丝滑。短动画食堂氛围片流水线。 [@atlas_remake](https://x.com/atlas_remake) · [原帖](https://x.com/atlas_remake/status/2099804371450216506)

- **草莓酱冲出信息流：UI 锁死局部溢出** — 把参考图当锁死底片，只让果酱越过黑条 UI 滴到吐司——构图/点赞数全不动。Feed 破框创意+完整物理 prompt。 [@miacyrnswy](https://x.com/miacyrnswy) · [原帖](https://x.com/miacyrnswy/status/2099801749163012364)
  <details>
  <summary>查看 / 复制提示词</summary>

```
STRICT COMPOSITION LOCK:
Treat the reference image as a locked photographic plate. Preserve the exact position, size, shape, and orientation of the jar, label, existing jam pool, toast, black-gloved hand, white backgrounds, and black social-media UI.

The existing jam pool on the upper white surface must retain its original footprint, outer contour, and location. Do not expand, slide, reshape, or reposition it. Keep the jar, hand, and toast completely still. No camera movement, zoom, cuts, or reframing.

ONLY ANIMATE THE OVERFLOW AND ITS ACCUMULATION:
The only source of motion is the frontmost jam tip already protruding over the upper image boundary. Extend this exact tip downward into a glossy, continuous strawberry-jam stream. Keep its attachment point fixed at the same image coordinates throughout the video.

Only the small overhanging tip may deform into the falling stream; the rest of the existing surface pool remains visually unchanged. Do not create a new pouring origin, shift the pool, or leave a duplicated static tip behind.

FLOW PATH:
The stream falls straight downward from the fixed tip, passes visibly IN FRONT OF the black UI bar, and lands on the area of toast directly beneath it.

The black bar is a background graphic, not a physical barrier. The stream naturally occludes only the text or icons directly behind it. Preserve all UI text, engagement numbers, and icons exactly in place, without distortion.

REALISTIC JAM PHYSICS:
Thick but pourable, glossy strawberry jam with fine seeds and tiny fruit flecks. The stream elongates and narrows naturally under gravity while remaining continuously attached to the original tip.

Once it reaches the toast, the jam folds onto itself and gradually accumulates into a glossy mound at the fixed landing point, slowly spreading a short distance across the bread texture. Do not move the toast to distribute it. No instant full coating, watery splashes, disconnected blobs, or rigid rubber-like stretching.

TIMELINE:
0–2s: The existing overhanging tip stretches straight down across the foreground of the black bar and reaches the stationary toast.
2–10s: A continuous stream pours from the same fixed origin onto the same landing area. Jam visibly builds up and slowly spreads locally on the toast. All other elements remain locked.

AUDIO:
Subtle, synchronized viscous pouring and sticky contact sounds. No music or speech.

PRIORITY:
Preserve the original image composition. Animate only the small overflowing tip, the falling jam stream, and the jam accumulating on the bread.
```

  </details>

- **从零搭 campaign：不抄热门模板** — 刻意不用流行 prompt 模板，从零测 Image 2.5 品牌 campaign 输出。营销向「别跟风槽位」对照样本。 [@eyishazyer](https://x.com/eyishazyer) · [原帖](https://x.com/eyishazyer/status/2099796328918417818)

- **Image 2.5 静帧 → wan 2.1 说话头像** — 本地 5090 跑 wan 2.1 animate：先用 GPT Images 2.5 出参考静帧，再做 talking-head。开源权重静转动又一条实操链。 [@kaimonstre](https://x.com/kaimonstre) · [原帖](https://x.com/kaimonstre/status/2099684940090917262)

- **Image 2.5 分镜 → Seedance 广告生产线** — 先锁产品/人物/镜头/节奏分镜，再丢 Seedance 2.5，最后时间线精修。单模型是入场券，串成工作流才是下一轮差距。 [@Adam38363368936](https://x.com/Adam38363368936) · [原帖](https://x.com/Adam38363368936/status/2099665985569755159)

- **产品静帧→Seedance→CapCut：商业片一条龙** — 两张 GPT Image 2.5 产品视觉进 Seedance 2.5，再在 CapCut 剪成完整广告。Visuals → Video → Edit，一人团队可抄。 [@JaydenCoach](https://x.com/JaydenCoach) · [原帖](https://x.com/JaydenCoach/status/2099632182985625756)

- **Flare 出「真 GoPro 机位」再喂 Seedance** — 胸挂俯视极限坡口静帧配方锁死光学抓拍感，再接秒级分镜动画。想控视频，先把起步静帧拍「真」。 [@techhalla](https://x.com/techhalla) · [原帖](https://x.com/techhalla/status/2099627433754300803)
  <details>
  <summary>查看 / 复制提示词</summary>

```
DIRECTIVE:
Produce one still that reads as a real GoPro chest-mount first-person frame an instant before a downhill skate drop. Optical capture, available daylight, lived-in action-cam grit, extreme vertigo. Text-to-image only.

SUBJECT / POV:
Strict first-person from a chest-mounted GoPro on a woman skateboarder. Looking DOWN her own body: upper frame shows her athletic neckline and collarbones (fitted crop top / sports tank), mid frame her arms and the skateboard deck underfoot, lower frame her feet planted on the grip tape, trucks and wheels visible at the lip. Hands may enter for balance. No face — downward body POV only. One coherent body.

BEAT:
Stopped at the brink of ONE insanely steep wooden launch ramp on a canyon rim, about to roll. Board tip hangs over empty air.

SCENE / RAMP (ONE ONLY):
A single continuous steep wooden downhill skate ramp under the board — planks visibly slope down toward empty air. No second ramp. Beyond the lip: Grand Canyon / Colorado River canyon, sheer red-rock cliffs, the river a thin ribbon far below. Real outdoor location, wind, dust.

COMPOSITION:
3:4 vertical GoPro. Extreme downward tilt: body and board dominate the near field; the canyon yawns beyond the ramp lip. Feet huge, river tiny — pure vertigo. Tall frame stacks top → deck → plunging ramp → abyss.

CAMERA PACK:
GoPro chest mount, wide fisheye-ish action FOV, high shutter daylight, slight rolling shutter, scuffs on the lens, single JPEG from a real session.

LIGHT:
Harsh high-desert sun, hard shadows on the deck and collarbones, bright canyon bounce from red rock.

PHOTOGRAPHIC CHARACTER:
Consumer action-cam realism, flat-ish GoPro color, grit and dust motes, cliff-edge vertigo.
```

  </details>

- **Flare 钢琴静帧 → Seedance 成片** — Images 2.5 Flare 锁气质，再进 Seedance 2.5 补动态（Topview）。静图锁定→动态补全的短链路样板。 [@hashimura55](https://x.com/hashimura55) · [原帖](https://x.com/hashimura55/status/2099476928218685914)

- **跑步品牌短片：Gemini Omni × Image 2.5** — 从起步到日出一镜感广告，楼下有 prompt。跨模型拼管线做运动品牌投放可参考。 [@Strength04_X](https://x.com/Strength04_X) · [原帖](https://x.com/Strength04_X/status/2099470223384740047)

- **Fish Thief：角色圣经锁脸→Seedance 成片** — split-screen character bible 严格参考不改脸，再接 Seedance 2.5。品牌 IP 短片流水线样板。 [@TechieBySA](https://x.com/TechieBySA) · [原帖](https://x.com/TechieBySA/status/2099460129833783779)

- **先锁世界观再 Seedance：暗黑 ARPG 一镜成片** — 银发+青铜半面甲+青绿斗篷+火山废墟，用 Image 2.5 钉死视觉身份，再丢 Seedance 2.5 打成电影感战斗镜头。 [@atlas_remake](https://x.com/atlas_remake) · [原帖](https://x.com/atlas_remake/status/2099434423884390583)

- **Nokia 旧照手绘叠层：白线日记风改图** — 十几年前 N82 原图，2.5 加手绘描边+繁中旁白+爱心蒸汽。旅行/生活照「时髦随性」一层滤镜配方。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099429070723551484)
  <details>
  <summary>查看 / 复制提示词</summary>

```
在圖片上方加上一層手繪疊加。最終成品要時髦、放鬆、毫不費力地隨性。繪製規則：用細細的手繪線條，像是用白色筆畫上去。保持單筆勾勒風格：粗糙、略帶不均。沿著物件外緣加上描邊。可用箭頭或虛線引導視線。文字規則：使用手寫繁体中文。保持簡短，像輕鬆的內心獨白。語氣：像日記、簡短、以情緒為主。旁白要正面又甜甜的。裝飾：適度加入蒸氣、閃光、愛心、小小表情臉。不要太滿；留一些「留白」。
```

  </details>

- **日系日常 STYLE 锁：钢笔淡彩+小红点** — 当代日式 slice-of-life 完整 STYLE 块：笔触、配色、避雷清单都写死，场景槽位可换。杂志风插画母版。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2099417903858843997)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a delicate contemporary Japanese slice-of-life illustration showing a quiet, cozy everyday moment.

STYLE

Hand-drawn pen-and-ink artwork with fine expressive lines, naturally imperfect contours, subtle watercolor washes, visible paper texture, soft edges, and generous negative space. Blend Japanese minimalism with the charm of an independent sketchbook, café magazine, or modern lifestyle art book. Keep the artwork elegant, airy, tactile, and slightly unfinished.

CHARACTERS

Two young adults with simplified facial features, subtle expressions, relaxed body language, and natural interaction. Dress them in casual oversized contemporary clothing. Avoid realistic facial rendering; communicate personality through posture, gestures, and eye direction.

ENVIRONMENT

A warm, lived-in interior such as a café, apartment, studio, bookstore, kitchen corner, or creative workspace. Include selective details like wooden furniture, coffee cups, books, shelves, plants, windows, ceramics, stationery, and small everyday objects. Keep the setting uncluttered.

COMPOSITION

Full-body or three-quarter view at eye level. Seat the characters naturally facing one another. Use a balanced asymmetrical composition with generous clean space and an editorial framing. The relationship between the characters should be the main storytelling element.

COLORS

Use only muted, desaturated tones: warm cream, ivory, dusty blue, soft beige, light gray, sage green, natural brown, and off-white. Add one small red accent such as a mug, shoe, sock, notebook, or object.

LIGHTING

Soft natural daylight through a window with gentle ambient illumination and minimal shadows. Create a peaceful, warm, nostalgic atmosphere without dramatic lighting.

RENDERING

Sparse detail, delicate watercolor fills within fine ink outlines, subtle tonal variation, visible paper grain, and authentic hand-drawn imperfections. Avoid overly polished digital rendering.

AVOID

Anime, manga panels, cel shading, photorealism, hyperrealism, 3D rendering, glossy surfaces, vibrant colors, cinematic effects, heavy outlines, harsh shadows, and cluttered backgrounds.

SCENE

[Scene Description]

The final image should feel like a premium contemporary Japanese lifestyle illustration-quiet, intimate, nostalgic, and beautifully ordinary, with the warmth of a carefully observed sketchbook moment.
```

  </details>

- **赛博编舞表 → MiniMax H3：静帧变整段舞** — Image 2.5 出 cyberpunk dance pose sheet，再接 MiniMax H3 拉成连续编舞。产品内容/投放短视频的静转动管线。 [@aaliya_va](https://x.com/aaliya_va) · [原帖](https://x.com/aaliya_va/status/2099405356300726410)

- **GTA 爷爷分镜：Image 2.5×Seedance 生日任务片** — 六格电影分镜锁同一位台北大爷：邮箱邀请→翻墙→屋顶→跨楼跳→破窗送礼。Image 2.5 钉角色再 Seedance 成片，动作喜剧分镜母版。 [@feesyiam](https://x.com/feesyiam) · [原帖](https://x.com/feesyiam/status/2099401891654615283)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 6-panel cinematic storyboard for a 30-second action-comedy video, presented as a professional film storyboard/contact sheet. Use a photorealistic open-world video-game aesthetic inspired by modern AAA game engines, with realistic character rendering, detailed environments, cinematic lighting, physically believable materials, dramatic camera work, and subtle game HUD elements.

GLOBAL CHARACTER CONSISTENCY

The exact same elderly Asian grandfather must appear in every panel.

Character: approximately 70–75 years old, short neatly trimmed grey hair, thick grey eyebrows, deep natural facial wrinkles, slightly weathered face, determined but expressive eyes, lean athletic build, surprisingly agile for his age. He wears the same simple beige sleeveless vest over a light-colored collared shirt, dark trousers, practical worn sneakers, and a simple wristwatch throughout the entire sequence.

Maintain identical facial features, hairstyle, clothing, body proportions, and accessories across all six panels. No character redesign, no costume changes.

VISUAL STYLE

Photorealistic AAA open-world game-engine graphics, cinematic realism, detailed skin texture, realistic wrinkles, natural fabric folds, physically accurate reflections, realistic glass, concrete, asphalt and roof tiles, atmospheric Taipei city depth, cinematic color grading, realistic shadows, subtle motion blur.

The world should feel like a living modern Taipei neighborhood, combining traditional narrow shophouses, tiled roofs, dense apartment buildings, scooters, overhead utility wires, signage, narrow streets, modern glass towers, and Taipei 101 in the distance.

Add a subtle GTA-style game HUD overlay consistently throughout action-oriented panels: circular minimap in the lower-left corner, health/stamina bar, small weapon/item icons and minimal interface elements. The HUD should remain secondary to the cinematic visuals and must never obscure the character.

Aspect ratio: 16:9 widescreen.
Six clearly separated storyboard panels arranged in chronological order.
Each panel should communicate a distinct moment of the story.

---

PANEL 1 — THE UNEXPECTED INVITATION | 0–5 SECONDS

Wide establishing shot.

A quiet residential street in Taipei during bright late-morning daylight. Traditional Taiwanese shophouses stand beside modern apartment buildings. Scooters are parked along the street, utility cables cross overhead, balconies are filled with plants, and distant traffic creates subtle city atmosphere.

The elderly grandfather stands beside an old metal mailbox attached to a residential gate, casually checking the mail.

He pulls out a colorful birthday invitation card.

In the far background, Taipei 101 rises above the dense city skyline.

Camera: cinematic wide-angle shot, approximately 24mm lens, slightly low camera position, environmental storytelling.

The grandfather initially looks relaxed and curious.

Mood: peaceful, ordinary, slightly comedic.

---

PANEL 2 — HE REALIZES WHOSE BIRTHDAY IT IS | 5–9 SECONDS

Extreme close-up transitioning into a dramatic reaction shot.

The grandfather holds the birthday invitation directly in front of him.

His expression suddenly changes from curiosity to complete shock and excitement.

Eyes wide open, eyebrows raised, mouth slightly open, deep facial wrinkles becoming highly visible. His grip tightens around the invitation.

The card clearly communicates that it is a birthday celebration invitation, without relying on excessive readable text.

Softly blurred Taipei apartment buildings fill the background.

A small breeze moves his shirt collar and grey hair.

Camera: 85mm portrait lens, shallow depth of field, dramatic facial close-up, cinematic bokeh.

Add subtle game-style HUD elements at the edges of the frame.

Mood: surprise → determination.

---

PANEL 3 — NO TIME TO WASTE | 9–14 SECONDS

Dynamic over-the-shoulder action shot.

The grandfather suddenly starts running through the narrow neighborhood.

He reaches a wooden fence blocking his shortcut, plants one hand on it and vaults over it with unexpected athletic ability.

One leg is already over the fence while the other pushes off the ground. His beige vest and shirt move naturally with the motion.

Behind him: narrow Taipei houses, hanging laundry, scooters, air-conditioning units, plants and dense residential architecture.

In front of him: a narrow alley leading toward the city.

Camera: low-angle tracking shot from behind and slightly to the side, approximately 28mm lens.

Add stronger motion blur, dust particles, realistic fabric movement and dynamic sunlight.

HUD becomes more visible: minimap showing his route toward the destination, health/stamina indicator and minimal game interface.

Mood: sudden urgency, humorous action-movie energy.

---

PANEL 4 — THE ROOFTOP SHORTCUT | 14–19 SECONDS

Epic dynamic rooftop chase shot.

The grandfather reaches the rooftops and continues sprinting across the tiled roofs of tightly packed low-rise Taipei buildings.

He runs surprisingly fast despite his age.

Traditional orange-brown roof tiles, satellite dishes, water tanks, antennas and rooftop structures surround him. Far below, narrow streets contain tiny moving scooters, pedestrians and cars.

In the distance, Taipei's modern skyline rises dramatically, with tall glass towers contrasting against the older neighborhood.

Camera: cinematic side-tracking shot combined with a slightly elevated perspective, approximately 35mm lens.

His feet land naturally on individual roof tiles. Clothing reacts realistically to each stride. Strong afternoon sunlight creates long shadows across the rooftops.

Mood: spectacular, fast-paced, unexpectedly heroic.

---

PANEL 5 — THE IMPOSSIBLE JUMP | 19–25 SECONDS

Large-scale cinematic aerial action shot.

The grandfather reaches the edge of a rooftop and launches himself into a massive leap between two high-rise buildings.

His body is completely airborne, arms extended forward, determined expression visible on his face.

Below him, Taipei streets appear dramatically far away. Glass skyscrapers surround him, reflecting the bright sky.

Taipei 101 dominates the background, creating an unmistakable sense of scale and location.

Use a dramatic camera positioned slightly below and in front of him, making the grandfather appear heroic and larger-than-life.

Camera: wide cinematic lens, approximately 24mm.

Add realistic atmospheric perspective, wind pushing his clothing, subtle motion blur, reflections in surrounding glass buildings and dramatic sunlight.

HUD minimap, stamina bar and interface remain visible but subtle.

Mood: absurdly heroic, high-stakes, comedic exaggeration.

---

PANEL 6 — THE GRAND ENTRANCE | 25–30 SECONDS

Cinematic interior payoff shot.

Inside a luxurious modern high-floor Taipei apartment with floor-to-ceiling windows, contemporary furniture and warm interior lighting.

The grandfather bursts through a large glass window, creating a dramatic but non-gory shower of sparkling glass fragments.

Capture the exact moment after impact: glass suspended in the air around him as he lands firmly on both feet inside the living room.

He straightens his beige vest, completely calm as if nothing unusual happened.

He reaches into his pocket and produces a small wrapped birthday gift.

A surprised group of family members in the apartment stare at him in disbelief.

The grandfather simply gives them a confident, satisfied smile.

Through the broken window behind him, the enormous Taipei skyline and Taipei 101 are clearly visible.

Camera: medium-wide cinematic shot from inside the apartment, approximately 28mm lens, slight low angle.

Warm interior lighting contrasts with the bright blue city outside. Floating glass particles catch the sunlight. Subtle dust and atmospheric particles add realism.

The HUD briefly fades or becomes minimal as the cinematic moment concludes.

Final emotional beat: everyone is shocked; the grandfather is completely calm.

FINAL VISUAL DIRECTION

The entire storyboard should feel like a 30-second cinematic GTA-style action-comedy trailer: ordinary elderly grandfather → shocking invitation → sudden parkour → rooftop chase → impossible skyscraper leap → hilarious birthday entrance.

Maintain perfect character continuity across every panel, consistent Taipei geography, realistic proportions, coherent lighting progression, cinematic composition, realistic physics, detailed environments, and a premium AAA game-engine appearance.

Avoid cartoon styling, anime aesthetics, exaggerated body proportions, character duplication, inconsistent clothing, extra fingers, distorted hands, malformed faces, floating objects, unreadable excessive text, random weapons, unnecessary explosions, or changes to the grandfather's appearance.
```

  </details>

- **Astra 写分镜 + Sunburst 出图：同界面一条链** — 同一工具里先让 Astra 写分镜提示，再切 GPT 2.5 Sunburst 出静帧，不用跳平台。短片/广告前期分镜管线可抄。 [@zeng_wt](https://x.com/zeng_wt) · [原帖](https://x.com/zeng_wt/status/2099392855982723213)

- **角色表+场景板钉死：Seedance 最多 50 参考** — 先钉角色表与 location plate，再写戏；Seedance 2.5 可吃到约 50 张参考。写实多角戏的防漂配方。 [@kayforkind](https://x.com/kayforkind) · [原帖](https://x.com/kayforkind/status/2099391447128518810)

- **InVideo 拆帧 → Image 2.5 逐帧 rotoscope** — 片子丢进 InVideo 拆帧，代理按风格用 Image 2.5 重绘每帧，仍可逐帧改。定格/转绘从月级压到下午级。 [@ohneisserdemy](https://x.com/ohneisserdemy) · [原帖](https://x.com/ohneisserdemy/status/2099390701582598195)

- **Sunburst 4K 纸雕奎师那：金线+卷纸浮雕** — 纸艺浮雕+金属金线+棚拍阴影，Sunburst 4K 细节直接拉满。节日/文创主视觉可整段复用。 [@yourPlugAI](https://x.com/yourPlugAI) · [原帖](https://x.com/yourPlugAI/status/2099386679551279392)
  <details>
  <summary>查看 / 复制提示词</summary>

```
A detailed 3D paper quilling bas-relief artwork of Lord Krishna playing a golden flute, shown in side profile with closed eyes, soft blue skin, a yellow tilak on his forehead, and a peaceful expression.

His flowing dark hair is crafted from intricate coiled paper strips, adorned with large paper-quilled peacock feathers in vibrant teal, yellow, and orange, paired with a beaded gold headband. His hands softly hold the wooden flute while a small stylized blue paper peacock perches near the end.

Richly layered paper swirls in vibrant orange, yellow, red, and blue cascade around his shoulders. Clean off-white background with subtle embossed white paper swirl patterns and dramatic studio shadows. High-detail paper sculpture aesthetic, 3D papercraft depth.
```

  </details>

- **品牌人格灌进城市：换输入就长成街景广告** — 套用 mmmiyama 杂志广告配方，把品牌人格塞进东京蓝调街景（人行天桥 + 巨 Logo）。营销向：同一骨架换品牌词，城市视觉秒站队。 [@kraqvoid](https://x.com/kraqvoid) · [原帖](https://x.com/kraqvoid/status/2099375310747926862)

- **Blueprint Racer：Codex+Godot+Blender+Sunburst 贴图** — 一人团队赛车：Godot 引擎、Blender 模、GPT Image 2.5 Sunburst 出图与贴图，Codex 写测代码。游戏资产里 Sunburst 怎么嵌进管线。 [@Parastashvilii](https://x.com/Parastashvilii) · [原帖](https://x.com/Parastashvilii/status/2099371368710037793)

- **同角色换装过场：Image 2.5 静帧 → Seedance 2.5** — 休闲→校服→学院正装，画外换装、人设不漂。先用 GPT Image 2.5 锁静帧，再 Seedance 串成一条概念片——UGC/穿搭广告的省心管线。 [@RXwhale](https://x.com/RXwhale) · [原帖](https://x.com/RXwhale/status/2099367352676864223)

- **16 姿态编舞表 → Seedance 连续舞：先锁关键帧** — GPT Image 2.5 出 16-pose choreography sheet，再丢 Seedance 2.5。关键姿态当地标，过渡更稳、少 AI 鬼畜。 [@gptproto](https://x.com/gptproto) · [原帖](https://x.com/gptproto/status/2099356107605180871)

- **整集角色表 × Image 2.5：Seedance 2.5 连载短剧** — THA TRENCHEZ Ep.04：每镜、每人设、每场景都按 Seedance 2.5 建，顺手测 Image 2.5。连载短剧资产管线可对标。 [@BGriffinCreator](https://x.com/BGriffinCreator) · [原帖](https://x.com/BGriffinCreator/status/2099352480119398736)

- **TV 商业广告管线：Image 2.5 静帧 + Seedance 分镜 prompt** — 汉堡 TVC 向：先出 4:5 静帧构图，再接 18 秒 9:16 Seedance 广告 prompt。投放素材双端配方都摊开。 [@itsPixieVerse](https://x.com/itsPixieVerse) · [原帖](https://x.com/itsPixieVerse/status/2099348903699362138)

- **产品页 → 40 张静态广告：Astra 读品牌 + Image 2.5 赶量** — 一页产品详情进，Astra 写文案定角度，Image 2.5 当天吐 40 张成品静态。一人营销队核按钮。 [@spect3ral](https://x.com/spect3ral) · [原帖](https://x.com/spect3ral/status/2099293802813182089)

- **品牌 30 秒广告管线：双参考 × Image 2.5 × Seedance** — 两张自定义参考 + GPT Image 2.5 + Seedance 2.5；完整 workflow、选型与视频 prompt。UGC/品牌短片可复用。 [@itsphotogptai](https://x.com/itsphotogptai) · [原帖](https://x.com/itsphotogptai/status/2099232072980484262)

- **UGC 广告全流程：Image 2.5 + Seedance + 六视角角色表** — 照片→六视角角色表，外加 Image 2.5×Seedance 全套 prompt。一人团队假用户真广告流水线。 [@abxxai](https://x.com/abxxai) · [原帖](https://x.com/abxxai/status/2098426534025634085)

- **可换角广告模板：角色锁 + 海报锁，城市变身即插即用** — Seedance 2.5 广告配方：@[image1] 锁角色、@[image2] 锁海报，城市/变身可换槽。一人团队产品概念片骨架。 [@Iancu_ai](https://x.com/Iancu_ai) · [原帖](https://x.com/Iancu_ai/status/2098420840073236536)

- **2.5 分镜 → Seedance 皮克斯片开源工作流** — 任意想法先出细拆 storyboard，再丢 Seedance 2.5 成皮克斯级镜头序列。叙事广告/短片管线直接抄，原帖附开源 workflow。 [@EHuanglu](https://x.com/EHuanglu) · [原帖](https://x.com/EHuanglu/status/2098411370815643837)

- **爱因斯坦 3D：Images 2.5 → Tripo → Astra 管线** — 静帧出人设 → Tripo 几分钟成模 → GPT-6 Astra High 绑骨动画。概念角色进可动 3D 的最短路径演示。 [@SimonasLTU1](https://x.com/SimonasLTU1) · [原帖](https://x.com/SimonasLTU1/status/2098405779912978525)

- **Flare 把天折起来：超写实天空折叠构图** — 几张「天空折叠」光影尺度很冲。要氛围海报、不想写长 prompt 时，先偷构图再补细节。 [@ZephyraLeigh](https://x.com/ZephyraLeigh) · [原帖](https://x.com/ZephyraLeigh/status/2098381709050097920)

- **Flare 故事板 → PixVerse Canvas 三页漫画** — 同一角色设定表：写实分镜跑视频，再丢进 Flare 出漫画风，PS 加字。一条资产两套交付，内容团队该偷。 [@lukmanfebrianto](https://x.com/lukmanfebrianto) · [原帖](https://x.com/lukmanfebrianto/status/2098381056172847326)

- **Images 2.5 九宫格 → Gemini 10 秒游戏 CM** — 停动猫头鹰咖啡店九格静帧，再丢 Gemini 出 10 秒 CM。游戏预告两步走，提示词在回复。 [@uniyume](https://x.com/uniyume) · [原帖](https://x.com/uniyume/status/2098379926642831769)
  <details>
  <summary>查看 / 复制提示词</summary>

```
架空的喫茶店経営ゲーム「月灯喫茶」。
人間の出演なし。手作りストップモーションの質感。
夜の路面電車を改装した喫茶店。
白いフクロウ店主、丸メガネ、紺エプロン。
インディゴとバターイエロー。金の細い明朝体。

9コマ：
1. 月明かりの電車喫茶に一灯ともる
2. フクロウが鍵を開けるマクロ
3. 青い陶器にミルクを注ぐ俯瞰
4. 客のハリネズミが小さな手紙を置く
5. スマホのゲーム画面で飲み物を選ぶ
6. フクロウがカップを差し出す
7. 客が帰った窓際の席と星空
8. 「眠る前に、ひとつ灯そう。」
9. ゲーム画面、「月灯喫茶」「最初の夜へ」

陶器、木、布の手触りを精密に。静かな接客の楽しさを伝える。
```

  </details>

- **2.5 静帧 + Seedance：影院破屏巨鲸几乎真感** — Image 2.5 定主体，Seedance 接 handheld POV 破屏路径。广告级「假真感」时间线，配方在回复里。 [@renoiseai](https://x.com/renoiseai) · [原帖](https://x.com/renoiseai/status/2098361198173651328)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Photorealistic live-action smartphone footage in a real dark movie theater; handheld seated POV, natural motion blur, red upholstered seats, screen-motivated light and realistic skin tones. Awe and playful surprise. Avoid animation, game rendering, subtitles, added logos, deformed anatomy, and sudden changes of audience identity.

SOURCE REFERENCE: image1 controls the auditorium, audience arrangement, timing, handheld camera path, composition, transition rhythm, screen-breakout effect, overhead passage and reaction beats. Rebuild the source action smoothly over the requested duration. Keep the auditorium and nearby spectators consistent throughout. The source spaceship is replaced completely.

SUBJECT REFERENCE: image2 controls the blue-gray giant whale's appearance, mottled skin, head, long pectoral fins, belly grooves and tail. Use this image for the creature only; the theater remains a dry indoor auditorium.  0-2 seconds: Start beside the nearby seated female spectator holding her drink, matching the source composition. The handheld camera turns toward the cinema screen past rows of red seats. 2-4 seconds: On the screen, show dark blue open ocean with the reference whale approaching head-first from depth. Screen glow falls naturally across the spectators. 4-9 seconds: The same whale seamlessly crosses the screen boundary into the auditorium and glides above the audience along the source spaceship's path. Its near pectoral fin and grooved belly pass overhead while the camera tilts up to follow. The tail slowly sweeps up and down; the body moves with weight and inertia. Keep the screen behind it visible briefly so the spatial illusion is readable. No flooding or water filling the theater. 9-12 seconds: Follow the source camera back toward the nearby spectator. She ducks slightly, then looks upward with wide eyes, still holding the same drink cup. Finish with her amazed reaction as the frame holds steady.

CONTINUITY: Keep the same nearby spectators, clothing, drink cup, red seats and auditorium geometry from beginning to end. The creature is always one coherent body at a consistent scale. Preserve the original camera direction and the ordered setup, approach, overhead passage and reaction beats.

AUDIO: Generate subtle theater room tone, a synchronized rush of air and nonverbal audience gasps. No spoken dialogue, narration, lyrics, or background music. These are newly designed sounds, not a reconstruction of unverified source audio.
```

  </details>

- **指定「3D 游戏图」：提质更好出味** — 同样提质，写清 3D 游戏画面风格，细节与材质更稳。短指令，大差别。 [@aruomoteomote](https://x.com/aruomoteomote) · [原帖](https://x.com/aruomoteomote/status/2098346705456656668)

- **2D→Image 2.5→hi3d→Three.js：两小时可逛 3D** — 概念渲染进 Astra/Image 2.5 定光影材质，hi3d 出干净 mesh，再 Flora MCP + Julius 交浏览器。出图秀升级成可交付交互环境。 [@Motion_Viz](https://x.com/Motion_Viz) · [原帖](https://x.com/Motion_Viz/status/2098324667287359560)

- **Blender 建模 → Sunburst 精修渲染** — Minimax/Blender 出三维结构，再丢 Sunburst 提质。控形归建模、皮相归 2.5——3D×图像的正经分工。 [@Banyu_Biroeee](https://x.com/Banyu_Biroeee) · [原帖](https://x.com/Banyu_Biroeee/status/2098308242279727175)

- **Flare 车×建筑隐喻海报：路长成了 Camry** — 「THE ROAD BECOMES THE CAMRY」——沥青线跟着车身轮廓走。15 段工业级 Art Director prompt 在评论区，汽车广告概念向教科书。 [@Diplomeme](https://x.com/Diplomeme) · [原帖](https://x.com/Diplomeme/status/2098299916166873371)

- **Instant 邪门一句话：诡异不安照片** — 中文短 prompt + Instant：禁止提问、禁止解释文字，专出「暗网硬盘感」。玩恐怖/异质审美的人收藏这句就够。 [@dtzy_88](https://x.com/dtzy_88) · [原帖](https://x.com/dtzy_88/status/2098290580581486858)
  <details>
  <summary>查看 / 复制提示词</summary>

```
把照片做得极其诡异且令人不安！不要提问，不要有任何解释性文字
```

  </details>

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

- **Perler Bead 可填槽：[COUNTRY] 4:5 编辑图** — 填国家/地标自动抽主体 → 拼豆质感 + 白描边 + 大留白。旅游/城市系列海报流水线，换词即出下一城。 [@Goodmanprotocol](https://x.com/Goodmanprotocol) · [原帖](https://x.com/Goodmanprotocol/status/2102318473997426892)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a premium 4:5 vertical Perler Bead editorial artwork for [COUNTRY / LOCATION / SUBJECT].

VISUAL GENERATION
Build the entire composition creatively from [COUNTRY / LOCATION / SUBJECT]. Automatically identify the most recognizable subject, landmark, character, animal, architecture, landscape, or cultural element associated with it.

PERLER BEAD ART
Transform the main subject into a miniature Perler Bead artwork made from precisely arranged rounded plastic beads. Every bead should have a clearly visible central hole, authentic matte plastic texture, subtle dimensionality, and realistic heat-fused construction.

Preserve the subject's most recognizable silhouette, proportions, pose, and signature colors while simplifying unnecessary details. Build highlights, shadows, and depth entirely through neighboring solid-color beads. No gradients, watercolor effects, soft brushwork, or painterly transitions.

Add a clean white Perler Bead outline around the entire artwork, following the subject with a naturally stepped pixel-like edge.

COMPOSITION
Place the finished Perler Bead artwork small and refined in the upper-center of the frame, surrounded by generous negative space. Divide the composition into two balanced horizontal zones, creating a clean 50/50 editorial structure.

Use a soft, low-saturation background palette inspired by [COUNTRY / LOCATION / SUBJECT], with subtle paper grain and tactile printed texture. Add only a very soft natural shadow beneath the bead artwork so it feels physically placed on the surface.

TYPOGRAPHY
Keep typography minimal and restrained. If text is used, include only a short elegant English title related to [COUNTRY / LOCATION / SUBJECT]. No excessive labels, captions, logos, or decorative text.

FINAL AESTHETIC
Perler Bead craftsmanship × minimalist travel editorial × lifestyle photography book × tactile paper texture × refined negative space. The result should feel like a premium physical art piece photographed from above, combining playful bead craftsmanship with sophisticated editorial design.

Avoid photorealistic subjects, CGI plastic, smooth gradients, watercolor, painterly effects, oversized bead art, clutter, excessive text, logos, watermarks, or distorted bead patterns.

FORMAT: 4:5 vertical, 50/50 balanced composition, small centered Perler Bead artwork, generous negative space.
```

  </details>

- **角色图→5×5 像素精灵表→循环 reaction GIF** — 先出一致性精灵表再拼动效：25 帧哭戏循环、脚钉死基线、纯白无格线。表情包 / 社区互动素材流水线，prompt 在楼中。 [@MedioConxx](https://x.com/MedioConxx) · [原帖](https://x.com/MedioConxx/status/2102247966786375740)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded character image as the ONLY identity reference.

Create a clean 5×5 pixel-art sprite sheet containing 25 consecutive animation frames of the same chibi girl crying dramatically.

Preserve her blonde hair, straight bangs, purple eyes, white beret with blue trim, blue hair clips, white-and-navy outfit, striped stockings and small chibi body proportions consistently in every frame.

The animation should form one smooth seamless loop. She begins with watery eyes and a trembling mouth. Her eyebrows lift, her cheeks turn pink and tears gradually gather beneath both eyes. The tears then burst outward into two exaggerated blue streams while she raises both hands beside her face and cries dramatically.

Across the following frames, her body bounces slightly, her shoulders shake, her mouth opens and closes, and the tear streams move naturally in curved arcs. End by reducing the tears and returning smoothly to the opening pose so the animation can loop without a visible jump.

Use crisp retro pixel art, limited colors, sharp pixel edges and consistent pixel density. Keep the character centered at the same scale and position in every cell. Her feet must remain fixed to the same baseline.

Pure white background, five equal columns and five equal rows. No grid lines, no borders, no numbers, no labels and no text.

No character duplication within an individual frame, no missing legs, no changing outfit, no changing hairstyle, no inconsistent face, no blurred pixels, no anti-aliasing, no deformed hands, no cropped tears and no watermark.
```

  </details>

- **Astra×Sunburst 定格恶搞广告：全流程约 $3.97** — 嫌官方 TV 广告没把吉祥物做成定格？用 Image 2.5 Sunburst 出帧 + Astra 串成 stop-motion 恶搞广告，成本约 $3.97。短视频投放测创意，先算清楚帧成本再卷特效。 [@pritopian](https://x.com/pritopian) · [原帖](https://x.com/pritopian/status/2102175407277801806)

- **Claude Code→VOX 科普片六步：Image2.5 同源局部+MiniMax H3** — 每句旁白必须有可证明的图；图1总控+图2–5同源局部特写（带图1一起生成）；中文烧进图里；MiniMax H3 Ref2VA 四档保留词。15 秒约¥7.5——Agent 出科普短片的可抄流水线。 [@AlistairVadkqv](https://x.com/AlistairVadkqv) · [原帖](https://x.com/AlistairVadkqv/status/2101861488189431919)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【Claude Code → VOX 科普片 · 六步】
1. 立规矩：每句旁白都得有一张能证明它的图；否则删掉空美。
2. 先写旁白，再想画面；一句话一个视觉想法，追问「这句拿什么图能证明」。
3. GPT Image 2.5 出图：图1=总控图（也是视频最后一帧）；图2–5=局部特写。关键：图2–5必须带着图1一起生成，写死「同一张版面的局部，除取景外别的不许变」。
4. 中文字印在图里，别让视频模型自己写。
5. MiniMax H3 参考模式 Ref2VA；提示词六段式，保留程度只认 fully_preserved / partially_preserved / attribute_transfer / weak_reference。
6. 旁白分句生成，用 ffprobe 量真实时长再排；字幕位置先抽帧避挡信息层。

【账本参考】15s / 约¥7.5（视频为主）；配音可忽略。
```

  </details>

- **八格分镜 contact sheet→竖屏爆米花车祸** — 先用 Image 2.5 出 4×2 八格连续 contact sheet（车内 POV、热风机→玉米→爆米花链式反应），再整图喂 Seedance 2.5 成 25s 竖屏伪实拍。分镜控连续 + 视频模型收口的病毒片母版。 [@Raul_IA_Prod](https://x.com/Raul_IA_Prod) · [原帖](https://x.com/Raul_IA_Prod/status/2101592798180814900)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【Image 2.5 · 八格 contact sheet】
Create a highly realistic 8-panel cinematic storyboard contact sheet for an AI-generated vertical social-media video.

IMPORTANT:
This is a STORYBOARD REFERENCE IMAGE, not the final video.

Arrange exactly 8 sequential panels in a clean 4x2 grid, read LEFT TO RIGHT, TOP TO BOTTOM.

Every panel represents the SAME continuous scene filmed from inside the SAME slowly moving car.

Maintain PERFECT VISUAL CONTINUITY across all 8 panels:
- same overturned semi-trailer
- same truck design and damage
- same highway / worker / clothing / hot-air blower / weather / lighting

VISUAL STYLE:
Ultra-photorealistic live-action. Authentic smartphone footage. Passenger filming through the windshield of a moving car. Wet highway after rain. Gray overcast daylight. No commercial or movie aesthetic.

CORE SCENE:
A large semi-trailer carrying dry yellow corn has overturned onto its RIGHT SIDE beside a highway. Corn kernels spill onto wet asphalt. One road worker with a large industrial HOT-AIR BLOWER (NOT a flamethrower — only subtle heat distortion) accidentally triggers a progressive popcorn chain reaction.

PANEL PROGRESSION:
1 APPROACH — normal highway accident
2 CLOSER VIEW — worker approaches corn
3 BLOWER ACTIVATED — hot air, no flames
4 FIRST POPS — first yellow kernels → white popcorn (critical)
5 CHAIN REACTION — ~half pile popcorn, worker steps back
6 OUT OF CONTROL — trailer fills with popcorn
7 MASSIVE POPCORN AVALANCHE — popcorn hits windshield
8 AFTERMATH — highway covered like snow; same truck/worker/vehicles

Do NOT show lots of popcorn in panels 1–3. Panel 4 must clearly show the FIRST transformation. Amount of popcorn must progressively increase. Camera always inside the same moving car.

NEGATIVE: cartoon, CGI look, flamethrower, explosion, inconsistent truck/worker, captions, logos.

【Seedance 2.5 · 竖屏成片】
Image1 is an 8-panel storyboard. Read left to right, top to bottom. Use as reference for story progression. DO NOT reproduce the grid — transform into ONE continuous 25s vertical 9:16 photoreal found-footage video from inside the moving car. Progressive: yellow corn → first pops → chain reaction → avalanche. Full Seedance prompt in original reply thread.
```

  </details>

- **Image 2.5 做 GIF：中文一句就能玩** — 用 GPT-Image 2.5 出帧再拼 GIF，中文说明 + 示范动图。表情包 / 短动效种草门槛被砍到「会说话就行」。 [@_AIBOZ_](https://x.com/_AIBOZ_) · [原帖](https://x.com/_AIBOZ_/status/2100893023416811712)

- **毡艺静帧→Seedance 短片：Image 2.5 出图链路** — 先用 GPT Image 2.5 锁一张毡艺世界观静帧，再丢进 Seedance 2.0 Mini 动起来。一帧图也能讲出小故事——静转动种草管线。 [@akiwithai](https://x.com/akiwithai) · [原帖](https://x.com/akiwithai/status/2100794645639012728)

- **Image2.5任务精灵表：11格分镜→成片管线** — 先用 Image 2.5 出带 HUD/小地图/倒计时的 11 格任务分镜，再喂视频模型成片。开放世界任务短片流水线可抄，附分镜核心 prompt。 [@Raul_IA_Prod](https://x.com/Raul_IA_Prod) · [原帖](https://x.com/Raul_IA_Prod/status/2100521058331759057)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create ONE professional storyboard sheet containing EXACTLY 11 sequential 16:9 frames for a 30-second fictional open-world video game mission.

CORE CONCEPT:
This must look like actual gameplay from a fictional next-generation open-world action game, NOT a cinematic movie trailer.

The player is completing a timed delivery mission in a fictional tropical coastal American city.

MISSION:
“ENTREGA EXPRÉS”
Objective: deliver a package to the port before the timer reaches zero.

The storyboard must clearly communicate:
mission received → travel toward objective → obstacle → route change → unexpected NPC event → progress → arrival → delivery → mission completed → reward.

VISUAL STYLE:
Photorealistic next-generation AAA open-world game graphics.
Tropical coastal city, palm trees, beaches, neon hotels, traffic, pedestrians, downtown skyline, port and ocean.
Late golden hour transitioning naturally into early evening.

ORIGINAL GAME HUD:
Every gameplay frame should use the SAME original interface design.

Include:
- circular minimap in bottom-left corner
- orange GPS route
- destination marker
- subtle health/energy bar
- countdown timer
- distance to objective
- money/points indicator

The HUD must feel polished and believable but MUST NOT copy the interface of any existing video game.

Use orange as the primary accent color for mission markers, GPS route, progress indicators and important HUD elements.

STRICT CONTINUITY:
Same adult female protagonist throughout.
Long dark brown wavy hair, white fitted tank top, blue jeans, white sneakers, gold hoop earrings.

Same bright orange sports car throughout.
Identical design, paint, wheels and interior in every frame.

Same city, weather and continuous sunset lighting.

STORYBOARD FRAMES 01–11:
01 Mission start outside convenience store — receive package, “NUEVA MISIÓN / ENTREGA EXPRÉS”, timer 00:30
02 Run to orange sports car — distance 1.8 km, timer 00:27
03 Departure onto boulevard — distance 1.5 km, timer 00:24
04 Progress through tropical city — distance 1.2 km, timer 00:21
05 Obstacle: delivery truck blocks road — “RUTA BLOQUEADA”, timer 00:18
06 Route updated into side street — “RUTA ACTUALIZADA”, distance 850 m, timer 00:15
07 Unexpected NPC on crosswalk — brake safely, timer 00:12, distance 620 m
08 Final push along coastal road to port — distance 350 m, timer 00:09
09 Destination zone at port — distance 50 m, timer 00:05
10 Delivery to waiting NPC — “PAQUETE ENTREGADO ✓”, timer stops ~00:02
11 Mission complete — “MISIÓN COMPLETADA / +2.500 / REPUTACIÓN +”

CRITICAL:
Timer and distance must decrease logically across frames.
Keep HUD design, typography, placement and scale visually consistent.
Most shots use recognizable third-person gameplay camera, not cinematic trailer angles.
No existing game logos, no GTA UI, no weapons, no collisions, no violence, no watermark.
Exactly 11 storyboard panels, numbered 01–11.

(Pipeline note: feed this sheet to a video model as reference for continuous third-person gameplay; keep HUD/minimap/orange GPS locked.)
```

  </details>

- **精灵表能打，动效会翻车：Image 2.5 诚实对照** — spritesheet 仍是他见过最稳的图像模型，但某些动作类型会惨烈失败；同帖并排自家动画模型 12 帧。做游戏素材/表情包先看这条能力边界。 [@GrilliotTodd](https://x.com/GrilliotTodd) · [原帖](https://x.com/GrilliotTodd/status/2100335015100043300)

- **16 格舞姿分镜→Wan 3.0 连续动画** — 先用 Image 2.5 铺 16-panel 动作表，再 Wan 3.0 整段成片。分镜当运动规划，比瞎生成省后悔。 [@SeeGen_Official](https://x.com/SeeGen_Official) · [原帖](https://x.com/SeeGen_Official/status/2100102904011190648)

- **Sunburst 粘土 skill：24 帧场景不崩脸** — ChatGPT skill 硬刚「同一粘土场景跨 24 帧一致」，横竖画幅都能出短片。一人团队短内容管线可抄思路（作者考虑开源）。 [@bahaa_alghazawy](https://x.com/bahaa_alghazawy) · [原帖](https://x.com/bahaa_alghazawy/status/2100073038603780182)

- **单图→4×4 舞蹈参考表→MiniMax 成片** — 上传角色一图，Image 2.5 出 16 格连续舞姿 sheet，再丢 MiniMax H3 接成流畅舞蹈视频。像素/二次元短动效流水线可直接抄图 prompt。 [@Scenario_gg](https://x.com/Scenario_gg) · [原帖](https://x.com/Scenario_gg/status/2099797670516695385)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a polished square-format dance reference sheet featuring the character from the uploaded reference image. The final image should be arranged as a clean 4×4 grid containing exactly 16 equally sized panels. Each panel represents the next key pose in a single uninterrupted dance sequence, read from left to right and then top to bottom.

Reference Fidelity

Treat the uploaded character as the definitive visual reference throughout the sheet.

Across all 16 frames, keep the character’s identity completely stable, including:

face and facial features
hairstyle and hair length
color palette
body proportions and species
clothing and garment construction
accessories
overall illustration and rendering style

Any part of the character that is not visible in the reference should be inferred conservatively and then depicted the same way throughout the entire sequence.

Choose a style of dance that feels natural for the character’s personality, anatomy, outfit, and available range of motion.

Movement Logic

The sixteen images are consecutive moments from one continuous routine, not sixteen unrelated dance poses.

Every pose should flow naturally into the next through small steps, weight transfers, pivots, or continuing arm gestures. Keep the supporting limbs and direction of rotation physically consistent from frame to frame.

Changes in orientation, body height, balance, and momentum should happen progressively rather than suddenly.

Each frame should remain visually distinct while the overall routine develops through a clear progression: a relaxed opening, gradual build-up, expressive peak, and controlled settling finish.

Choreography

Follow this exact movement sequence:

1. Begin with feet comfortably apart, knees relaxed, and arms resting low.

2. Shift weight left, tapping the right foot outward as the hands drift left.

3. Transfer weight onto the right foot, letting both hands sweep low toward the right.

4. Draw the left foot inward while the hands continue upward to waist height.

5. Step the left foot forward diagonally, turning the torso slightly left as the arms round forward.

6. Rock onto the front left foot, allowing the rounded arms to rise toward chest height.

7. Push gently back onto the right foot, drawing the elbows toward the ribs.

8. Step the left foot out to the left, opening the left arm in the same direction.

9. Settle into a shallow left lunge while the right arm sweeps across the chest toward the left.

10. Deepen the lunge slightly as the right arm continues its arc overhead into a gentle left side bend.

11. Straighten gradually, keeping the right arm overhead while the left arm opens outward.

12. Reach the routine’s peak in a tall, grounded stance, extending both arms into an open upward diagonal.

13. Soften the knees and lower both arms outward through shoulder height.

14. Shift weight onto the left foot and pivot a quarter-turn left, letting the arms continue downward.

15. Bring the right foot forward into a small staggered stance, lifting the chest as the arms settle low behind the hips.

16. Finish in that same stance, turning the head toward the viewer with a character-appropriate expression and relaxed, deliberate hands.

If the character has nonhuman anatomy, reinterpret the steps and gestures as the closest anatomically appropriate equivalents while preserving the same order, rhythm, direction, and continuity.

Secondary Motion

Hair, loose garments, and hanging accessories should react naturally to the choreography rather than remaining static.

Their movement should follow the character’s momentum:

hair and fabric lag slightly behind steps and sweeping gestures
loose elements swing naturally during turns
hair and garments fall with gravity during bends
movement gradually settles as the routine approaches the final pose
light fabrics flutter subtly
heavier fabrics move with greater weight and slower follow-through
fitted clothing develops believable folds around bending and twisting joints

Keep all secondary motion proportional to this relatively gentle routine.

Hair length, clothing construction, and accessory placement must remain consistent in every frame.

Communicate movement through the changing shapes and positions of the hair and fabric themselves. Do not use motion lines, speed lines, ghosting, or movement trails.

Sheet Presentation

Use a square canvas containing a precise 4×4 grid.

The presentation should include:

exactly 16 equally sized panels
one full-body character in every panel
small, clearly readable numbers 1–16 in the upper-left corner of their corresponding panels
a clean white background
thin grid lines
consistent character scale
a fixed camera viewpoint
consistent lighting and rendering
comfortable empty space around every limb, hairstyle, ear, wing, tail, garment, and accessory
subtle ground shadows
clear silhouettes
anatomically plausible joints
convincing weight distribution and balance

The character should never be cropped by the panel boundaries.

Constraints

Do not introduce repeated or near-identical poses, abrupt movement transitions, identity drift, costume changes, additional characters, new props, scenery, captions, or watermarks.

Avoid extra or missing limbs, malformed hands, implausible joints, inconsistent supporting feet, accidental panel overlap, cropped features, sudden changes in character scale, or unexplained changes in orientation.

The finished sheet should read immediately as sixteen carefully selected consecutive keyframes from one coherent dance performance by the same character.
```

  </details>

- **Sunburst 粘土龙：蛋孵化 one-shot 定格** — 一句话故事板：孵化→打喷嚏小火→烤糊蛋壳。玩梗短广告钩子，prompt 可直接抄改角色。 [@reach_vb](https://x.com/reach_vb) · [原帖](https://x.com/reach_vb/status/2099545621040422979)
  <details>
  <summary>查看 / 复制提示词</summary>

```
I want you to make a cinematic, cute and heartwarming stop motion video with gpt image 2.5 sunburst with the following ideas:

egg to baby dragon transformation in claymation

rough story: It hatches, sneezes a tiny flame, accidentally toasts its shell
```

  </details>

- **定格动画：描述镜头就能出序列** — Image 2.5 做 stop-motion 实测，附 prompt。短广告分镜/产品动效一人团队可偷师。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2099466924572983460)

- **黏土狐狸烤鲷鱼烧：16 格停格序列** — 4×4 contact sheet 一把梭：锁机位、只动爪子/模具/表情。短视频/封面动效母版，完整 prompt 可抄。 [@renoiseai](https://x.com/renoiseai) · [原帖](https://x.com/renoiseai/status/2099459517373391327)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a beautiful handmade clay stop-motion animation contact sheet, exactly 4 columns by 4 rows, sixteen equally sized square frames in chronological row-major order. No borders, gutters, frame numbers or overlaid text. Original little fox baking Japanese taiyaki in a nostalgic Japanese neighborhood taiyaki shop at night.

Character: charming original orange-red little fox clay puppet, cream pointed muzzle and chest, large triangular ears with dark tips, black bead eyes, distinct elegant fox face and one fluffy sculpted tail visible beside torso, happy gentle expression. White cloth headband, muted rust-red cross-collar work jacket with cream cuffs and cream waist apron. Matte plasticine with subtle fingerprints, rounded hand sculpted forepaws, miniature practical photography.
Set: beautifully aged dark cedar shop interior, warm buttery light from vintage milk-glass pendant at upper right, softly glowing frosted wood lattice window at left, faded rust-red short noren at upper back center, old ceramic jars on a small back ledge, subtle patina and handcraft. Dark warm walnut counter. Golden subject against softly blurred brown background. 

Cozy Showa-inspired sweets shop, amber highlights, not uniformly orange. No sushi, no rice barrel, no modern bright tiles. No other characters.

Props: one hinged cast iron single-fish taiyaki mold centered on a small vintage cooking stand on counter, lower fish-shaped cavity clearly visible to camera, hinged upper lid swings back upright when open. Small cream bowl of pale batter at screen left with spoon, small brown bowl of burgundy red bean paste at screen right, small cream serving plate near front right. The finished taiyaki is a golden fish-shaped waffle with recognizable tail, round eye and embossed scale pattern, not a real fish.

Critical: identical locked slightly elevated frontal medium shot in all 16 cells, exactly same fox identity and torso placement, background, counter and prop positions. Only forepaws, mold lid, batter and facial expression change. Keep camera perfectly static for stop motion. Full ears and hands in frame, mold large and readable.

Frame sequence:
1 fox holding spoon of pale batter above open empty fish mold.
2 batter starts pouring from spoon.
3 lower fish cavity filled with batter.
4 spoon set down, other paw reaches bean bowl.
5 spoon of burgundy bean paste above fish cavity.
6 deposits red bean paste into center of batter.
7 adds a little pale batter over bean filling.
8 paw reaches open upper lid handle.
9 upper lid lowered halfway.
10 upper lid fully closed.
11 both paws turn closed mold slightly by its handles.
12 closed mold settled back on cooking stand, fox anticipates.
13 opens upper lid halfway, golden taiyaki revealed.
14 upper lid fully open, fox lifts golden fish waffle with small wooden pick.
15 fox holds finished golden taiyaki over cream plate, proud smile.
16 fox displays taiyaki resting on plate held in both paws at chest height, closed-eye delighted smile.

Coherent readable food preparation, tiny frame-to-frame changes, handcrafted clay food and set, premium charming stop-motion look. Exactly 16 equal frames in strict 4x4 grid.
```

  </details>

- **角色自适应 4×4 舞蹈姿态表** — 上传人设自动选舞风，16 格连贯姿态；可再接视频 prompt 出片。短视频种草/表情包流水线。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2099457417528692871)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 4×4 dance pose sheet featuring the character in the uploaded reference image, with exactly 16 equally sized panels in one square image.

CHARACTER CONSISTENCY Use the uploaded character as the sole reference for character identity and appearance. Preserve the character’s face, hairstyle, colors, body proportions, species, outfit, accessories, and original art style across all 16 panels. Do not redesign the character or add an idol costume. If any body or costume details are not visible in the reference, infer them conservatively and keep them consistent throughout.  

ADAPTIVE CHOREOGRAPHY Design a cohesive dance sequence tailored to this specific character’s personality, appearance, anatomy, clothing, and range of motion. 

Choose a suitable dance style automatically: lively for an energetic character, graceful for an elegant character, confident for a bold character, playful for a cute character, or restrained for a serious character. Do not force every character into cute idol poses.  Show 16 distinct key poses from the same dance routine, ordered from left to right and top to bottom. Make the sequence feel connected, with natural transitions and a clear beginning, build-up, climax, and ending.  

Use the following movement structure, adapting each action to the character: 
1. Opening pose that establishes the character’s personality. 
2. Small rhythmic step with a coordinated arm gesture. 
3. Side step with one arm extended. 
4. Compact expressive gesture near the face or upper body. 
5. Grounded stance with arms crossing or sweeping inward. 
6. Knee lift or an anatomically appropriate weight shift. 
7. Open, expansive pose with arms spread. 
8. Playful or expressive balance pose. 
9. Turning pose showing a three-quarter rear view. 
10. Forward-reaching movement with a diagonal body lean. 
11. Strong upward-reaching accent. 
12. Climactic jump or a grounded full-body extension if jumping is unsuitable. 
13. Lowered stance with a forward gesture. 
14. Elegant or dynamic side-facing transition. 
15. Signature gesture that suits the character. 
16. Confident final pose with a clear finishing silhouette.  

COMPOSITION AND PRESENTATION Use a clean white background, thin grid lines, and small readable numbers 1–16 in the upper-left corner of each panel. Include exactly one full-body depiction of the same character per panel. Keep the character’s scale, camera distance, lighting, and rendering style consistent. Use a fixed camera while allowing the character to turn naturally.  Keep the entire character, including hair, ears, horns, wings, tail, hands, feet, and accessories, inside each panel with comfortable margins. Allow room for extended limbs and jumps. Add subtle ground shadows. Show natural secondary movement in hair, fabric, and accessories.  Every pose must have a clear silhouette, convincing balance, anatomically plausible joints, and expressive body language. Adapt all movements to nonhuman anatomy when applicable.  

AVOID Repeated or nearly identical poses, character identity drift, costume changes, inconsistent proportions, extra or missing limbs, malformed hands, cropped body parts, overlapping panels, additional characters, motion trails, background scenery, props not present in the reference, speech bubbles, captions, and watermarks.  

Final output: one polished square image containing a clearly organized 4×4 grid of 16 distinct, character-appropriate dance poses.
```

  </details>

- **角色→4×4 偶像舞姿表→GIF** — 像素猫示例：先锁人设再压 16 格连贯舞姿，Ima Studio 可直接拼 GIF。表情包/短动效流水线，舞姿表 prompt 可抄。 [@ImaStudio_ai](https://x.com/ImaStudio_ai) · [原帖](https://x.com/ImaStudio_ai/status/2099445897457446934)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the provided character image as the exact reference. Create a clean 4×4 pose sheet with exactly 16 full-body dance poses of the same character, arranged left to right, top to bottom. Keep the character fully consistent in every panel: same design, outfit, colors, and shading. Preserve the same pixel-art style, chibi proportions, sprite scale, outline, colors, and shading.
Make 16 clearly different but smoothly connectable cute idol dance poses, including: neutral pose, wink, side sway, raised arm, hands-near-cheeks, walking step, slight lean, side turn, crouch, side kick, both paws raised, shy pose, back/three-quarter turn, forward kick, low diagonal lean, and final raised-paw wink pose. The whole sequence should feel like one continuous dance.
Each panel must contain only one complete full-body character with enough margin around ears, feet, and tail. Use a plain white background with thin black grid dividers and small black numbers 1–16 in the top-left of each panel. No extra characters, extra limbs, missing parts, costume changes, hairstyle changes, props, watermark, or text other than the panel numbers.
```

  </details>

- **飞吻 4×4 序列帧：没跑过不出厂** — Line 表情包向 16 格实测入库；「爱你哦」白底 1:1 通挂，飞吻循环连贯性偏弱也写进评测。反营销滤镜的真·合集。 [@zouyanjian](https://x.com/zouyanjian) · [原帖](https://x.com/zouyanjian/status/2099422284666884445)

- **粘土定格 GIF：胖青蛙 DJ 一次出循环** — 24 帧塑料泥质感，金链耳机全入画，再把精灵表转 GIF。短视频贴纸 / 表情包流水线，抄走就能量产。 [@MrDasOnX](https://x.com/MrDasOnX) · [原帖](https://x.com/MrDasOnX/status/2098360111597244532)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Create a 24-frame clay stop-motion loop of a chubby green frog DJing. Handmade plasticine texture, tiny gold chain, oversized black headphones, one hand on the turntable. The frog bobs its head, scratches the record, throws both arms up, spins once, and loops back. Square 1:1, solid off-white background, full character always visible, no cropped limbs/headphones/tables, no frame leakage, only a subtle horizontal ground shadow. Slightly choppy handcrafted motion, not smooth CGI.

2) Turn sprites into GIFs.
```

  </details>

- **舞蹈分镜预测法 → Seedance 细指令成片** — Image 2.5 出舞蹈分镜用「预测法」留自由度，Seedance 再写细指令。零到一舞蹈短视频，应用面比单支舞宽。 [@FantasistaAI](https://x.com/FantasistaAI) · [原帖](https://x.com/FantasistaAI/status/2098348945562878436)

- **LINE 动态贴纸全链路：2.5→Seedance→ClaudeCode** — 角色图→24 姿绿幕→Seedance 动起来→ClaudeCode 转申请素材。动态贴纸从零到上架的一条龙。 [@emi4900](https://x.com/emi4900) · [原帖](https://x.com/emi4900/status/2098346806900146176)

- **一张角色图 → 16 格 chibi 贴纸 + GIF** — 锁发型服装→16 表情英文短 caption→白底 GIF。聊天贴纸量产管线，prompt 完整可抄。 [@renoiseai](https://x.com/renoiseai) · [原帖](https://x.com/renoiseai/status/2098329229490581950)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the uploaded image as the character reference. Create a personalized set of 16 chibi reaction stickers, then export a white-background animated GIF that cycles through them.

CHARACTER ADAPTATION
Study the character’s hairstyle, hair color, facial features, clothing, accessories, signature colors, and overall visual mood. Preserve these recognizable details in every sticker.

Infer a suitable personality from the visual design—for example: elegant and witty, cool and reserved, cheerful and energetic, mysterious and mischievous, or gentle and shy. Treat this as a creative interpretation, not established character lore. If I provide personality details, prioritize them.

STYLE
Use expressive big-head chibi anime illustrations with glossy eyes, soft cel shading, clean lines, and a polished chat-sticker finish. Add thick white die-cut borders with a subtle light-gray outer outline.
Use mostly chest-up compositions with clearly visible gestures.
Keep the character design consistent across all 16 stickers.
Use a solid pure-white background (#FFFFFF).

EXPRESSIONS AND ENGLISH CAPTIONS
Create 16 distinct combinations of expressions, gestures, and short English captions tailored to this character’s personality.

Cover a useful mix of everyday reactions:
greeting, curiosity, confidence, gratitude, affection, embarrassment, excitement, skepticism, refusal, frustration, surprise, encouragement, teasing, celebration, tiredness, and farewell.

Adapt these reactions to the character rather than using a generic caption set. A proud character might respond with dry wit; a gentle character might use warmer wording.

Write original, natural English captions, preferably 1–4 words each. Make them readable, expressive, and useful in real conversations. Avoid repetitive wording, forced slang, and invented backstory.

Place each caption above its character in large, playful, readable lettering. Choose text colors and small decorative symbols that complement the character’s palette. Keep decorations restrained.

LAYOUT
Arrange exactly 16 complete stickers in 2 rows of 8 equal-sized cells.
Read left to right across the first row, then the second.
Keep the entire caption, character, hands, hair, accessories, and sticker border inside each cell with generous white margins.
No overlap, clipped elements, visible grid lines, frame numbers, logos, or watermarks.

GIF AND FILE EXPORT
Deliver:
1. One PNG sheet containing all 16 stickers.
2. All 16 individual stickers as separate PNG files in a ZIP.
3. One animated GIF cycling through the 16 stickers in order, holding each sticker for approximately 1.2 seconds and looping continuously.

For the GIF:
Use identical canvas dimensions and consistent positioning.
Keep captions fully visible and avoid accidental jitter.
Every frame must have an opaque pure-white background.
Explicitly disable transparency and preserve pure white in the GIF palette.
This is a sticker slideshow, not a continuous character-motion animation.
```

  </details>

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

- **物体→时装：核心特征提取×时装设计重构公式** — 月饼礼盒、胶带、化肥袋、烟盒——只换主体，中间「核心特征提取 × 时装设计重构」固定，材质纹理色彩形态转成可穿时装摄影。电商/IP 联名服装概念别从零瞎画，先让物件长出剪裁语言。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2103335668391031035)
  <details>
  <summary>查看 / 复制提示词</summary>

```
主体：XX × 核心特征提取 × 时装设计重构

提取主体最具辨识度的材质、纹理、色彩、形态与结构特征，将其重新转化为完整的时装设计语言。通过合理的面料组织、服装结构与细节设计完成自然转译，使最终服装能够清晰体现主体特征，同时保持真实、合理、可穿着的服装形态。整体采用真实时装摄影质感，材质自然，纹理清晰，结构明确，光影真实，避免直接复制主体形态、简单拼贴、复杂堆叠、过度装饰与人为制造的视觉效果。

用法：只换「主体：XX」；例：月饼礼盒 / DeepBlue牌黄色胶带 / 尿素化肥袋 / 烟盒。
生成：GPT Image 2.5
```

  </details>

- **自然形态→跨域工程重构：生物仿生槽位公式** — 荷花变高跟鞋、细胞壁变交通枢纽、海螺变耳机——固定中间「跨域工程设计重构」，只换两端槽。产品概念图别从零找灵感，先抄自然当结构母题。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2103113405532127629)
  <details>
  <summary>查看 / 复制提示词</summary>

```
【源对象】 → 跨域工程设计重构 → 【目标对象】

用法：只换两端槽位，中间「跨域工程设计重构」固定。自然形态当结构母题，产品/建筑当落点。
例：
- 荷花 → 跨域工程设计重构 → 高跟鞋
- 细胞壁 → 跨域工程设计重构 → 交通枢纽
- 海螺 → 跨域工程设计重构 → 耳机
- 噬菌体 → 跨域工程设计重构 → 【目标产品】

生成：GPT Image 2.5
```

  </details>

- **对话史→复古 RPG 状态屏一句话玩法** — 「過去の会話履歴からスキルを分析して、レトロRPG風ステータス画面にして」——把工作/生活聊过的技能烤成ドラクエ风能力值。职场吐槽素材别只会做表情包，先让聊天记录变角色卡。 [@akatsuki_cs](https://x.com/akatsuki_cs) · [原帖](https://x.com/akatsuki_cs/status/2102897045958963549)

- **恋爱纪念日相册：iOS Liquid Glass 截图配方** — iPhone 原生照片 App 全屏胶卷，每行 4 格混照片/短视频/实况；半透明控件透暖色环境光。假 UI 种草别只会磨皮棚拍——先做出不对外公开的亲密相册感。 [@Mrpinecone888](https://x.com/Mrpinecone888) · [原帖](https://x.com/Mrpinecone888/status/2102743607258087610)
  <details>
  <summary>查看 / 复制提示词</summary>

```
生成一张以「恋爱纪念日碎片」为主题的 iPhone 18 Pro Max 原生照片 App 截图，使用最新版 iOS Liquid Glass 风格，温暖环境色透过半透明顶部与底部控件，界面克制而真实；全屏展示相机胶卷，每行严格排列 4 张缩略图，混合普通照片、短视频和实况照片。内容包括两位成年人的餐厅合照、贴近镜头的面部自拍、牵手与肩颈局部、试衣镜合影、甜点、夜景散步、酒店窗边剪影，以及闭眼瞬间、被裁掉的脸、焦点落在背景、闪光灯反射和重复连拍，保留自然肤质、手机镜头畸变与不对外公开的亲密相册感。画面比例 1:2.17。
```

  </details>

- **Codex + Image 2.5：角色替换 LoRA 数据集流水线** — Codex 调 imagegen 直接出场景、角色参考、再把人塞进画面——Character Swap LoRA 数据集开刷。一人团队训 LoRA：别手搓九宫格，让 agent 先把图堆齐。 [@akatz_ai](https://x.com/akatz_ai) · [原帖](https://x.com/akatz_ai/status/2102639049366495425)

- **任意图→JSON 提示词：只改要改的部分** — 上传任意图，让它「转成含尺寸与细节的 JSON 提示词」，再局部改字段重出。可编辑配方，改图一次一事的标准操作。 [@wad0427](https://x.com/wad0427) · [原帖](https://x.com/wad0427/status/2102382659880296846)
  <details>
  <summary>查看 / 复制提示词</summary>

```
画像を JSON プロンプトに変換し、サイズと詳細を含めてください
```

  </details>

- **指定 px 直出：免 Canva/PS 再裁** — Images 2.5 按指定像素出图，比例与 px 一并守住。社媒/投放素材少一道二次裁切——尺寸写进指令就够。 [@kawai_design](https://x.com/kawai_design) · [原帖](https://x.com/kawai_design/status/2102328384424735036)

- **直出可读 QR：须写「按规格生成」** — 不经程序也能出可扫 QR；关键一句「QRコードの規格に沿って」。海报/落地页二维码别只写「做个二维码」——不写规格常出废码。 [@hideki_climax](https://x.com/hideki_climax) · [原帖](https://x.com/hideki_climax/status/2102319962757148910)
  <details>
  <summary>查看 / 复制提示词</summary>

```
**任意のURL**
このURLに対応するQRコードを、QRコードの規格に沿って作って。
```

  </details>

- **GPT 出横幅 → Canva 动画：五分钟静转动** — Images 2.5 出横幅 → GPT 写动画指令 → Canva 直接做成动效。别停在静图——社媒投放素材从静到动的最短桥。 [@revolvtech](https://x.com/revolvtech) · [原帖](https://x.com/revolvtech/status/2102231420387086632)

- **先 Image 2.5 出站视觉 mock，再让 Codex 写站** — 别先甩代码：把受众/文案/品牌色/参考图丢给 Codex，明确「先出 imagegen 网页 mock 再写前端」。审完布局与 CTA 再落实现、对照截图修差分——Images 2→2.5 一路变稳的一人队建站法。 [@shannholmberg](https://x.com/shannholmberg) · [原帖](https://x.com/shannholmberg/status/2102163474709389562)
  <details>
  <summary>查看 / 复制提示词</summary>

```
use imagegen to create a website mockup from this brief and the attached references
use the supplied copy, brand assets and product information
show the page layout, typography, imagery and calls to action, and wait for my feedback before writing code

---

build the approved mockup as a responsive page
preserve its layout, spacing, typography and visual hierarchy, use the approved copy and implement the interactions we agreed
flag anything that needs a design decision before changing it
```

  </details>

- **Image 2.5 出 logo → Astra SVG 到指南/Banner** — 先用 GPT Image 2.5 出 logo，再丢 Astra 转 SVG，精度够用后一套做指南、Banner、站点替换。品牌视觉从栅格到矢量的最短链路。 [@gaku_oregin](https://x.com/gaku_oregin) · [原帖](https://x.com/gaku_oregin/status/2100913069270687991)

- **Images 2.5 出设计 → Codex 直接搓 LP** — 别先开 Figma：ChatGPT Images 2.5 出整页视觉，原图丢给 Codex 转 HTML，只改刺眼处。落地页从「好看」到「能上线」的最短桥。 [@revolvtech](https://x.com/revolvtech) · [原帖](https://x.com/revolvtech/status/2100881842513850425)

- **角色当壁纸：16:9 macOS 桌面构图完整公式** — 上传角色图 → 自适应配色壁纸 + 日文菜单栏/Dock/三图标，主体靠右留白。Image 2.5 静帧再接 Wan 动效；桌面壁纸/虚拟桌面素材一条龙。 [@Mayz1169](https://x.com/Mayz1169) · [原帖](https://x.com/Mayz1169/status/2100854831837782439)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Using the uploaded image as the subject reference, create a polished 16:9 macOS desktop composition.

Subject:
Identify the main subject or characters in the reference and preserve their recognizable appearance, facial features, hairstyle, clothing, accessories, proportions, and original visual style. Keep interacting characters together. If the reference is a character design sheet with multiple views of the same character, use only one main view. Remove the original background, reference-sheet panels, captions, and decorative borders.

Composition:
Place the subject on the RIGHT side, occupying approximately 35–45% of the canvas. Leave generous uncluttered space across the left and center. Keep faces and important gestures fully visible. Preserve the full body when the reference provides it; otherwise, use a natural crop without inventing unseen anatomy. Keep the subject clear of the menu bar and Dock.

Adaptive wallpaper:
Design a custom background that matches the subject's colors, personality, clothing, and mood. Combine the broad flowing curves and smooth gradients of classic macOS wallpapers with a palette drawn from the reference.

For soft or gentle subjects, use delicate pastel gradients. For energetic subjects, use restrained vibrant accents. For elegant or mysterious subjects, use rich darker tones with subtle highlights. Make these choices based on the actual reference rather than applying the same palette to every image.

Keep the background simpler and less visually dominant than the subject. Use tonal separation so dark clothing remains visible against dark backgrounds and light hair remains visible against pale backgrounds. Add only a few subtle thematic details when appropriate.

Desktop interface:
Include a thin translucent macOS menu bar across the top, with the Apple symbol, Finder, and Japanese menu labels:
ファイル  編集  表示  移動  ウインドウ  ヘルプ
Place small system status icons and a clock at the upper right.

On the upper left, arrange exactly three modestly sized desktop items in one vertical column:
• A blue folder labeled "仕事"
• A blue folder labeled "写真"
• A screenshot thumbnail labeled "スクリーンショット"

Use consistent spacing and small, readable white labels with subtle shadows.

Add a realistically sized translucent macOS Dock near the bottom center, shifting slightly left if necessary to avoid overlapping the subject. Include Finder, Safari, LINE, Mail, Calendar, Notes, Music, System Settings, followed by a separator, Downloads, and Trash.

Final appearance:
The result should look like a cohesive personalized Mac desktop screenshot, with a character-inspired wallpaper and clean, believable interface elements. Preserve the reference's art style rather than converting every subject to anime or photorealism.

No physical laptop, monitor frame, open application windows, extra characters, duplicated subjects, large titles, or additional desktop icons. Render the desktop directly edge to edge in a wide 16:9 image.
```

  </details>

- **Canva×Images 2.5×Codex：约十分钟夏祭落地页** — Canva 找参考 → Images 2.5 出 LP 视觉 → Codex 落 HTML。深蓝×花火大人味夏祭站，一人队做活动页现成三步链。 [@revolvtech](https://x.com/revolvtech) · [原帖](https://x.com/revolvtech/status/2100552230298652694)

- **先锁UI完成图再写代码：Image2.5→Claude Artifact** — 先用 Image 2.5 钉死 UI 方向，再让 Claude Code Artifact 出 3 案、人只改差分。实现/token 体感约 1/3，产品落地页与后台 mock 工作流值得抄。 [@hata_AI_master](https://x.com/hata_AI_master) · [原帖](https://x.com/hata_AI_master/status/2100536994598465775)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Workflow (Image 2.5 → Claude Code Artifact UI):
1) First generate a finished UI visual with GPT Image 2.5 to lock direction.
2) Ask Claude Code Artifact for ~3 UI variants.
3) Human picks the best; only patch the delta.

Why: less token churn than coding UI from words alone; fewer misaligned redesign loops; ~1/3 time/tokens in practice.
```

  </details>

- **Arrow 2 + Images 2.5：可编辑 SVG logo 全家桶** — logo / wordmark / banner 一次出，而且真是可编辑 SVG——不是位图假矢量。品牌视觉从「能看」到「能改」的演示。 [@ulrikberntzen](https://x.com/ulrikberntzen) · [原帖](https://x.com/ulrikberntzen/status/2100531608465903644)

- **Image 2.5 分层资产 → Astra 视差沉浸站** — 先用 2.5 出场景分层，再 Astra 做滚动视差/遮挡/转场。一人队做「走进画面」落地页的现成链路。 [@happycapyai](https://x.com/happycapyai) · [原帖](https://x.com/happycapyai/status/2100194873529991441)

- **一人团队 Agentic YouTube：Image 2.5 管视觉** — DaVinci/Remotion/Blender 管剪辑与动效，GPT Image 2.5 出视觉，agent 串调研到发布。超级个体制片栈。 [@SimonHoiberg](https://x.com/SimonHoiberg) · [原帖](https://x.com/SimonHoiberg/status/2100193439329452091)

- **Images 2.5 当选色轮毂：Astra 产品变体站** — 无 3D：coding agent + LTX 转场，用 Image 2.5 定车色与轮毂。一人队做产品变体页可偷师。 [@Sourav1533032](https://x.com/Sourav1533032) · [原帖](https://x.com/Sourav1533032/status/2100117185930924248)

- **Codex×DaVinci MCP：实拍帧局部改不劣化** — 平静实拍丢 DaVinci Resolve + Codex（Image 2.5）：消杯子、换椅子，比重生视频少糊。剪辑后期局部修的正经备胎。 [@IntLab0000](https://x.com/IntLab0000) · [原帖](https://x.com/IntLab0000/status/2099867092568977674)

- **iPad / MacBook 相册截图：角色×城市×系统 UI** — 继 iPhone 相册后，DeepBlue 把同一配方扩到 iPad Pro / iPadOS 假截图。产品 mock / 角色 UGC 换设备外壳就能出系列。 [@DeepBlueX0](https://x.com/DeepBlueX0) · [原帖](https://x.com/DeepBlueX0/status/2099693409950998899)
  <details>
  <summary>查看 / 复制提示词</summary>

```
海賊王女帝 ×杭州游 × iPad Pro相册截图× iPadOS 27 × 竖版3:4
```

  </details>

- **Codex Pets 语音小画室：Live 调 Flare 改画** — Astra 里 gpt-live-1 听指令，甩给 gpt-image-2.5-flare 改画（月亮变柠檬）。互动 demo / 语音改图灵感包。 [@gabrielchua](https://x.com/gabrielchua) · [原帖](https://x.com/gabrielchua/status/2099493015761129874)

- **一句话出 iPhone 相机胶卷界面** — 挂参考图+短 prompt，直接生成像真机 Photos 里刷了一天的相机卷。UGC 广告 / 产品 mock 超好用。 [@Kel_vinleven](https://x.com/Kel_vinleven) · [原帖](https://x.com/Kel_vinleven/status/2099419041672699933)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Turn one full day's worth of camera roll for the person in the reference image into a single image that captures the iPhone's Photos app screen as-is. Make it a realistic camera roll that feels like it captures casual everyday moments 9:16 aspect ratio.
```

  </details>

- **Sunburst 做 App Store 截图：质感碾压糊 UI 假图** — 一图说明 2.5 Sunburst 出应用商店展示图。独立开发者截图升级捷径，别再随便糊假界面。 [@calicastle](https://x.com/calicastle) · [原帖](https://x.com/calicastle/status/2098419053899698339)

- **标注圈选改图：annotations × Images 2.5** — 圈一下就改局部，产品图/广告迭代的 UI 范式。作者预告即将开源——一人团队做精修工具可先抄交互。 [@SaihholdZhao](https://x.com/SaihholdZhao) · [原帖](https://x.com/SaihholdZhao/status/2098347672923251128)

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
