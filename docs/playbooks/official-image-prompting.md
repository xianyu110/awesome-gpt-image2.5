# GPT Image 2.5 官方提示与选型要点

> 来源：[OpenAI · Image prompting](https://developers.openai.com/api/docs/guides/image-prompting) · 摘要整理进 awesome-gpt-image2.5（非全文转载）  
> 相关 Skill：官方提示与选型 · 分类：选型评测  
> 社区玩法见首页画廊；本页是官方方法论摘要。

## 选型

| 型号 | 定位 | 相对 Image 2 |
| --- | --- | --- |
| **Flare**（`gpt-image-2.5-flare`） | 速度向（small） | 质量 ≈ Image 2，延迟更优 |
| **Sunburst**（`gpt-image-2.5-sunburst`） | 质量向（base） | 质量优于 Image 2 |

迁移口诀：

- 现有 **Image 2 已够用** → 先试 **Flare**，看能否保质降延迟。
- Image 2 **搞不定的复杂案** → 先用 **Sunburst** 证明质量，再拿同一套 prompt 试 Flare；Flare 也过线才切，否则留 Sunburst。
- **先选型，再调 `quality`**。不够好先抬质量档；达标后再降档换延迟。`xhigh` / `max` 只在确有缺口且延迟预算够时用。

## API 参数（简表）

| 参数 | 取值 |
| --- | --- |
| `model` | `gpt-image-2.5-flare` 或 `gpt-image-2.5-sunburst` |
| `quality` | `auto` / `low` / `medium` / `high` / `xhigh` / `max` |
| `size` | `auto` 或 `WIDTHxHEIGHT`：边长 ≤3840、均为 16 倍数、长宽比 ≤3:1、总像素 655360–8294400；>3686400（如 2560×1440）为实验档 |
| `background` | `auto` / `opaque` / `transparent` — 透明须 PNG/WebP，并检查真实 alpha（棋盘格绘制 ≠ 透明） |

首轮横评时：模型候选确定后，固定 quality / 尺寸 / 参考图 / prompt，再比延迟与质量。

## 提示基础（8）

1. **定义结果**：用途 + 主体 + 构图/画幅 + 约束；复杂请求拆成 scene / subject / details / constraints。
2. **可维护格式**：短句、段落、JSON、标签均可——选可读、易改的，没有魔法语法。
3. **写可见细节**：材质、光、色、媒介；要写实就明确写 photorealistic；镜头参数是外观线索，不是物理保证。
4. **人物与动作**：取景、视线、与物体的互动（如「全身含脚」「低头看书」「手自然握把」）。
5. **精确文字**：必出文案放引号，写位置与字体；禁止多余字；核对拼写与可读性。
6. **改图**：只改 X + must-stay 清单；写清排除项（多余 logo/水印等）。
7. **参考图按序号分工**：主体 / 风格 / 服装 / 背景，说明如何组合。
8. **迭代**：每轮只改一件事；漂移就重申 must-stay；要像素级不变的区域，自己合成，别只靠提示。

## 改图模式（一行备忘）

- **翻译保版式**：只换文案语言，其余不动。
- **风格迁移**：参考图只借调色/质感/媒介，新主体另写。
- **身份+换装**：锁脸/体型/姿态，只换衣服。
- **多参考合成**：按图号点名搬谁、放到哪、什么必须不动。
- **透明抠图**：`background=transparent` + PNG/WebP，查真实 alpha。
- **草图→写实**：保布局透视，补材质光影，勿加新元素。
- **去物体**：点名要删的，周围全保留。
- **插入人物**：保身份，写清取景/视线/互动与光影。
- **多轮精修**：以上一轮输出为输入，一次改一个条件。
- **角色一致性**：先立人设参考，后续场景重申外观约束。

## 验收清单

- 必出文字是否准确可读（含图注关系）
- 身份 / 产品外形 / 标签是否漂移
- 改图是否只动了该动的
- 透明需求：文件是否含真实 alpha，而非画出来的棋盘底

---

完整说明与示例见官方文档：[Image prompting](https://developers.openai.com/api/docs/guides/image-prompting)。
