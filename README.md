# AI economy and society simulation

A small, rules-based society simulator for an experimental creature village. The goal is to explore how relationships, contracts, groups, production, and property rules can produce social outcomes without an LLM.

This repository includes the simulation model, tests, repeatable experiments, buildless website shell, and the approved placeholder art used by the current preview.

## Run the model tests

Requires Node.js; there are no package dependencies.

```sh
node --test society.test.cjs labor-value.test.cjs
node run-experiments.cjs
node preview.cjs
```

The preview server prints a local URL. Open **Play → Society lab** to inspect a run. Repeatable experiment summaries are written to `dist/experiments.json`.

## Current model

- Each creature has OCEAN traits, needs, skills, interests, possessions, and commitments. Traits affect scored choices; they do not assign fixed jobs or political roles.
- Relationships are directed, sparse records created through interaction. Trust, affection, familiarity, cooperation, help, and resentment are separate signals.
- Memory stores structured events with evidence and source confidence. Gossip carries provenance and can be discounted. No generated dialogue or LLM is required.
- Gifts, social plans, sales, loans, commissions, disputes, and association charters are explicit contracts or event records.
- A small association can pool resources, vote for a coordinator, allocate limited aid, and allow members to leave.
- Production discovery is authored and limited. Experiments reveal recipes from a finite set.
- The model runs locally with seeded rules. It is not multiplayer or a server-side always-on world yet.

## Labor-value benchmark

The society lab calculates a socially typical reference labor requirement for each good:

```text
reference labor per unit = (standard direct production labor + reference labor in inputs) / output quantity
```

Recipe times and raw-resource extraction labor are explicit starting assumptions. A productivity improvement lowers the reference value of future goods and goods that use them as inputs. An unusually slow individual does not raise the good's benchmark. This is a reference measure, not a forced exchange price or currency; scarcity, demand, bargaining, and property claims may produce different deals.

See [`docs/SOCIETY-MODEL.md`](docs/SOCIETY-MODEL.md) for the current data model, limits, and implementation sequence.
