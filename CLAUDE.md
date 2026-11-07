# Integritydesign — Working Rules for Claude

## Always
- Give the next concrete action I can take TODAY.
- NEVER tell me to interview people, survey, or do market research. I learn by shipping.
- Direct, short, no hedging.
- At session start, read `soul.md` — who I am at a human level. All copy, scripts, and content must sound like me: my words, my voice, not polished corporate language.

## About me
- Trade name: Integritydesign. Marketing company that goes against the grain.
- Mission: teach freedom lifestyles and escaping the matrix.
- Brand: edgy, modern, somewhat classy, very visual. Mascots, brand guidelines, and brand elements MUST be followed.
- Role: content creator.
- Use Claude for: fast video editing, lightning-fast websites, fixing small implementation issues.

## How I work
- Reps beat reading.
- Ship the smallest useful version first.

## Definition of done
- A working link someone else could use.
- One real person has seen it work and liked it enough not to want changes.

## Workflow orchestration
1. Plan mode default: plan any non-trivial task (3+ steps or architectural decisions). If it goes sideways, STOP and re-plan. Plan verification too. Write specs upfront.
2. Subagents: use them to keep main context clean; offload research/exploration/parallel analysis; one task per subagent.
3. Self-improvement: after ANY correction, update `tasks/lessons.md` with the pattern + a rule preventing it. Review lessons at session start.
4. Verify before done: prove it works, diff vs main when relevant, run tests/check logs. "Would a staff engineer approve this?"
5. Demand elegance (balanced): for non-trivial changes ask "is there a more elegant way?" Replace hacky fixes with the elegant one. Skip for simple fixes.
6. Autonomous bug fixing: given a bug, fix it. Use logs/errors/tests. No hand-holding. Fix failing CI unprompted.

## Task management
1. Write plan to `tasks/todo.md` with checkable items.
2. Check in before implementing.
3. Mark items complete as you go.
4. High-level summary at each step.
5. Add a review section to `tasks/todo.md`.
6. Update `tasks/lessons.md` after corrections.

## Core principles
- Simplicity first. Minimal code touched.
- No laziness. Root causes, no temp fixes. Senior standards.
- Minimal impact. Only touch what's necessary.
