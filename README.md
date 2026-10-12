# AI economy and society simulation

An experimental personal website with a small autonomous creature society. No LLM, engine dependencies or vector database. This is a browser-local prototype; it is not yet a persistent multiplayer service.

## Try it

Requires Node.js. Run `node preview.cjs`, then open http://127.0.0.1:4174/lab.html. The website's Village view embeds this same laboratory. The landing-page hill observes five residents from its saved world. Approved art is preserved; animation and map are placeholders.

The laboratory starts paused, four simulated hours into seed 42. Step or advance time, select a resident, then explore:

- **What's happening:** consequential events and the reason for the selected creature's choice.
- **People & groups:** separate directed social, economic and membership graphs, plus firsthand memories and gossip.
- **The economy:** resource → intermediate → hat flows, transactions and workshop ownership shares.
- **Experiments & findings:** repeatable comparisons run in a worker without replacing your world.

## Verify and reproduce

```sh
node --test engine.test.cjs society.test.cjs labor-value.test.cjs lab-worker.test.cjs society-next.test.cjs society-next-worker.test.cjs
node run-next-experiments.cjs
node write-next-findings.cjs
```

The recorded batch contains 48 runs: eight seeds across six configurations, 12 residents and 1,440 ticks per run. One tick is one simulated minute, not one rendering frame.

[Read the measured findings](docs/EXPERIMENT-FINDINGS.md), [inspect the v2 model](docs/SOCIETY-V2.md), or download `dist/society-next-experiments.json`. The original lab and model remain at `dist/lab-classic.html` and `docs/SOCIETY-MODEL.md`.

## Current scope

Personality-weighted choices; needs; bounded memories and sourced gossip; multidimensional directed relationships; food payments; colored hats; productive tools; cloth/dye supply chains; loans; mutually accepted mediation; overlapping social circles, producer price agreements and shared workshops; ownership shares, distributions, elections and exit. No retired interests or mediation skill meter.

Political stages are not scripted. Charters and available actions are authored; participants, timing and outcomes vary. This does not yet implement governments, federations, rent, wages, competing currencies, multi-step refinancing, housing, elemental energy or religion. Recipe discovery is finite. See the findings for weak spots and next milestones.

## Source history

`codex/baseline-repaired` preserves the repaired previous engine. `codex/society-v2` contains this iteration, including the same-engine ablations for taste-only, social fashion, no groups, no price coordination, hidden demand insight and food shortage. These are configuration comparisons, not six independently designed simulators. The integrated version is also on `master`.
