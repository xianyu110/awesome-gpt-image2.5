# Awesome GPT Image 2.5

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://xianyu110.github.io/awesome-gpt-image2.5/)

> ChatGPT Images 2.5 / GPT-Image-2.5（Flare · Sunburst）社区好玩用法精选。每条附原帖；偏一人团队、营销素材、可抄工作流。

维护：MaynorAI / [@xianyu110](https://github.com/xianyu110) · 整理日期：2026-09-10 · **收录约 80 条**

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
## 选型评测

Flare / Sunburst / 2.0 阶梯、速度成本、质量档位、硬对比与 4K 踩坑。

- **加一颗草莓看出 Flare vs Sunburst 精度差** — 同咖啡馆再只加一颗草莓；Sunburst 仍比 Image-2 更快更便宜，精度编辑才是卖点。做广告迭代别盲选「快模式」。 [@nocodemba](https://x.com/nocodemba) · [原帖](https://x.com/nocodemba/status/2097785065547984984)
- **付费社媒静态广告：Flare/Sunburst 四块分工** — 拆成投放可用四块：Flare 默认量产、Sunburst 精修、reference lock、focused edit。产品图/offer 变体可抄。 [@nipuntaneja](https://x.com/nipuntaneja) · [原帖](https://x.com/nipuntaneja/status/2097694013469982745)
- **官方 Prompt 八股文，中文一页抄走** — 生成目的、可见细节、姿态视线、画面文字位置……别再堆氛围词。小红书/落地页文案直接当 checklist。 [@csoooooooo](https://x.com/csoooooooo) · [原帖](https://x.com/csoooooooo/status/2097864779859976637)
- **Flare 打七大模型：商业大片梯队 + 成本** — 官方样本 prompt 横评，第一梯队写死 gpt-image-2.5-flare（更快更接近 Image 2）。选型/报价话术现成。 [@wquguru](https://x.com/wquguru) · [原帖](https://x.com/wquguru/status/2097853425669329128)
- **关灯只留蜡烛** — 同图同设置：一句「关灯，只留蜡烛」横评 Image 2 vs 2.5 Sunburst。烛光谁更真，选型一眼定。 [@SandbaseAI](https://x.com/SandbaseAI) · [原帖](https://x.com/SandbaseAI/status/2097806703186055263)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Turn off the lights. Keep only the candles.
```

  </details>
- **Image 2 vs 2.5 对比笔记（API 坑）** — 2 没有 variant（2.5 默认 Flare）；参考图从 image 变 image_references——写教程/测评时这些细节拉开专业度。 [@Lucas_IA_](https://x.com/Lucas_IA_) · [原帖](https://x.com/Lucas_IA_/status/2097705361830531366)
- **Flare vs Sunburst：冻结任务再打分** — 别靠玄学选型。冻结 3 个真实编辑任务、标死 must-stay 区域，按指令成功率/漂移/主体一致/延迟/图 token 成本选赢家。 [@evankang_ai](https://x.com/evankang_ai) · [原帖](https://x.com/evankang_ai/status/2097704377142407323)
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

---

## Sketch

Sketch 工作流演示：控形、打光、画框布局与容错。

- **零画功 Sketch：棒人 + 角色图 → 完整场景** — 不会画画也能用棒人构图 + 角色参考生成场景；给客户讲「手绘即提示词」最直观。 [@sunouku](https://x.com/sunouku) · [原帖](https://x.com/sunouku/status/2097696764103201143)
- **画质不是杀招，Sketch 才是** — @Sketch 棒人草图 + 一句指令 → 成品；「再往左一点」那种往返可以扔了。内容号讲工作流就讲这个。 [@tatsumoto2222](https://x.com/tatsumoto2222) · [原帖](https://x.com/tatsumoto2222/status/2097858154793222529)
- **Sketch：不会画画也能迭代出片** — 草图 → Images 2.5 → 继续改。视频演示「不会画也能出货」，Sketch 种草最佳素材之一。 [@derrickcchoi](https://x.com/derrickcchoi) · [原帖](https://x.com/derrickcchoi/status/2097703973671334359)
- **鼠标手绘 Sketch 也能懂** — Sketch 容错示范。 [@MathisYanis](https://x.com/MathisYanis) · [原帖](https://x.com/MathisYanis/status/2097650763174391836)
- **Sketch 画框做封面布局** — 少跟模型解释构图：@Sketch 标标题/人物/产品位置。 [@tokenai888](https://x.com/tokenai888) · [原帖](https://x.com/tokenai888/status/2097648993388093656)
- **Sketch 演示视频** — 完整录屏：怎么画、怎么点、怎么迭代。 [@minchoi](https://x.com/minchoi) · [原帖](https://x.com/minchoi/status/2097641752169427250)
- **Sketch 动漫海报** — 海报级文字与角色，草图先行再 Sunburst 精修。 [@lycoris_zephyr](https://x.com/lycoris_zephyr) · [原帖](https://x.com/lycoris_zephyr/status/2097612107818664107)
- **火柴人哥斯拉** — 极简线稿也能控住巨型生物构图，Sketch 控形示范。 [@GeekCatX](https://x.com/GeekCatX) · [原帖](https://x.com/GeekCatX/status/2097608369947435116)
- **Sketch 前后对比** — 从线稿到成片的 before/after，适合给客户演示流程。 [@ontm0422ai](https://x.com/ontm0422ai) · [原帖](https://x.com/ontm0422ai/status/2097585415264125325)
- **Sketch 打光指南** — 草图阶段就把光位画对，出图少返工。 [@micchan8_](https://x.com/micchan8_) · [原帖](https://x.com/micchan8_/status/2097566459308417382)
- **手绘点选编辑** — Sketch + 点选改局部，一人团队最快闭环之一。 [@yupi996](https://x.com/yupi996) · [原帖](https://x.com/yupi996/status/2097546394827632727)

---

## 海报排版

海报、字体压力、竖版构图与奢侈品 / SMM 排版系统。

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
COLOR SYSTEM: Lunar White, Linea Rossa Crimson, Deep Space Black, Earth Atmospheric Cyan.…
```

全文见 [原帖](https://x.com/sebatheepan/status/2097778936646091084)（画廊卡片可一键复制完整提示词）。

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

---

## 人像角色

人像一致性、穿搭、UGC 写真与角色锁脸。

- **噪点 × 透明金属反光的多风格混剪** — Images 2.5 多风格混合质感：噪点被透明金属 + 反光包住；品牌视觉想玩材质差异可跟。 [@ZHO_ZHO_ZHO](https://x.com/ZHO_ZHO_ZHO) · [原帖](https://x.com/ZHO_ZHO_ZHO/status/2097698044733276309)
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

Outerwear / layers:…
```

全文见 [原帖](https://x.com/MoodLock_JP/status/2097653761569423653)（画廊卡片可一键复制完整提示词）。

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

She has a very small heart-shaped face with a narrow lower face, a softly tapered jawline, a short delicate chin, smooth understated cheekbones, a compact midface, and refined symmetrical features. Her eyes are exceptionally large, luminous, and slightly wide-set, with a rounded almond shape, pale gray-green irises, dark defined upper lash lines, softly extended outer eyeliner, fine lower lashes, and bright glassy catchlights. Her eyebrows are slim, softly arched, and light ash brown. S…
```

全文见 [原帖](https://x.com/johnAGI168/status/2097548765389258913)（画廊卡片可一键复制完整提示词）。

  </details>

---

## 电商改图

商品图、局部编辑、包装与货架感。

- **「只改文字」Before→After 实测** — 长文验证「图挺好、字想换」痛点改善多少；电商主图、海报改文案的人值得看。 [@dansyu_callenge](https://x.com/dansyu_callenge) · [原帖](https://x.com/dansyu_callenge/status/2097818810493685854)
- **「把灯挪到右边」——精密局部编辑** — Higgsfield 上测 GPT-Image 2.5，一句指令改光源位置，局部编辑不是 PPT。 [@prompts_ig](https://x.com/prompts_ig) · [原帖](https://x.com/prompts_ig/status/2097858572319072601)
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

---

## 场景视觉

场景、长卷、视频工作流与氛围大图。

- **Astra × Image 2.5 拼贴流水线** — 逐片生成 → PS 拼 → AE 动起来；社媒拼贴 / 情绪板类内容批产。 [@higgsfield_ai](https://x.com/higgsfield_ai) · [原帖](https://x.com/higgsfield_ai/status/2097860770210152638)
- **手办经典测图** — 每出新模型必测的 1/7 手办桌面场景：透明底座 + 屏上 ZBrush + BANDAI 包装盒。2.5 直出质感直接能当选品样张。 [@cnyzgkc](https://x.com/cnyzgkc) · [原帖](https://x.com/cnyzgkc/status/2097868249392390473)
  <details>
  <summary>查看 / 复制提示词</summary>

```
Use the model to create a 1/7 scale commercialized figure of the character in the illustration, in a reaalistic style and environment. Place the figure on a computer desk, using a circular transparent acrylic base without any text. On the computer screen, display the ZBrush modeling process of the figure. Next to the computer screen, place a BANDAI-style toy packaging box printed with the original artwork.
```

  </details>
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
Three figures, each about two centimeters tall, inhabit the cave: one lies on a citrus segment as if it were a bed; one climbs upward along the white pith ridge between two segments as if it were a staircase; one stands at the cave entrance looking out into darkness. A single tangerine seed lies on the ground, scaled like a massive millstone. Every membrane layer and every individual juice vesicle is fully resolved.…
```

全文见 [原帖](https://x.com/JohnnyWang8802/status/2097800514633429315)（画廊卡片可一键复制完整提示词）。

  </details>
- **枫叶点水 Prompt1** — 半透明金叶点触暗水面，脉纹里开粉花。Flare 氛围大图，竖版奇幻场景一键出片。 [@churvikv](https://x.com/churvikv) · [原帖](https://x.com/churvikv/status/2097784050660376617)
  <details>
  <summary>查看 / 复制提示词</summary>

```
An enchanting and surreal digital art piece featuring a translucent, golden maple leaf hovering magically above the surface of calm, dark water. The leaf glows from within with a warm, ethereal light, its delicate veins clearly visible. Inside the translucent structure of the leaf, tiny, vibrant pink flowers and closed buds are embedded, appearing to bloom within its very veins. The tips of the leaf are edged with a sparkling, golden glitter that drifts into the air like magic dust. The leaf's stem extends downward, just touching the water's surface, creating concentric ripples that spread outward. Below the water, a reflection of the glowing leaf and stem is faintly visible. The background is a dreamy twilight forest with silhouetted pine trees against a soft, gradient sky of purple, orange, and blue. Several pink water lilies float on the dark water, adding to the serene and magical at…
```

全文见 [原帖](https://x.com/churvikv/status/2097784050660376617)（画廊卡片可一键复制完整提示词）。

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

服务区占约 16%，左侧窄栏标题“创意服务”、简短介绍和“查看全部服务 →”；右侧三张等宽卡片：蓝底卡片以手持灯泡摄影配“品牌创意”，黄底卡片以彩色几何积木配“传播设计”，珊瑚红底卡片以打开的笔记本电脑配“数字体验”。每张卡片下方有两行简短中文介绍和右箭头。…
```

全文见 [原帖](https://x.com/listudio/status/2097652659788619894)（画廊卡片可一键复制完整提示词）。

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

“Ultra-detailed photorealistic isometric miniature scale-model diorama of [COUNTRY], floating on a pure off-white studio background with a soft drop shadow beneath. The diorama takes the exact real-world silhouette shape of the country — not a square tile, but the true precise geographic outline of the country's borders and coastline, extruded downward into a thick slab of raw rock and earth with rough natural cliff-like edges, like a chunk of the real land physically cut out and lifted. The shape of the slab matches the country's actual geography precisely, including any islands, peninsulas or coastline indentations.…
```

全文见 [原帖](https://x.com/abxxai/status/2097651231569399814)（画廊卡片可一键复制完整提示词）。

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

---

## 像素动效

像素、精灵表与动效向玩法。

- **任意角色 → 4×4 战斗像素精灵表** — 角色参考压成 combat sprite sheet（测了炭治郎），prompt 在 thread；游戏素材 / meme 模板一键量产。 [@andytng28](https://x.com/andytng28) · [原帖](https://x.com/andytng28/status/2097701567042609236)
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
- **定格动画：一帧 12 姿态** — 单图塞满关键姿势，停格流程可抄。 [@Lucas_IA_](https://x.com/Lucas_IA_) · [原帖](https://x.com/Lucas_IA_/status/2097640115409469657)
- **黑猫 vs 老鼠 Sprite 循环** — 循环动作帧，角色动画 demo。 [@Agonyframe](https://x.com/Agonyframe) · [原帖](https://x.com/Agonyframe/status/2097639113415631121)
- **像素对战 GIF** — 像素战斗动画向，适合小游戏预告。 [@Re7_AI](https://x.com/Re7_AI) · [原帖](https://x.com/Re7_AI/status/2097595058757500947)
- **4×4 Sprite Sheet** — 一图导出精灵表，游戏原型直接用。 [@HitPawCreators](https://x.com/HitPawCreators) · [原帖](https://x.com/HitPawCreators/status/2097584582367527358)
- **定格 vs Nano Banana** — 停格质感横向对比，选型参考。 [@ekcheungAI](https://x.com/ekcheungAI) · [原帖](https://x.com/ekcheungAI/status/2097565834931548309)

---

## UX产品

产品 UI / UX 视觉与落地页 mock。

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
