# Society simulation: current model and next steps

This is a small deterministic rules simulation, not an LLM. The goal is to make individual choices, social memory, contracts, and group rules inspectable, then look for patterns that appear over repeated runs.

## What exists now

- **Creature state:** five OCEAN traits; hunger, fatigue, loneliness, boredom, and stress; skills; interests; inventory; known recipes; and current obligations.
- **Relationships:** a directed edge is created only when two creatures interact. Each direction has its own evidence counts, familiarity, social enjoyment, help, cooperation, resentment, and interaction cooldowns. Trust is estimated from positive and negative evidence. Affection is a bounded summary of social experiences, not a synonym for trust or trade volume.
- **Memory and gossip:** events are structured records. A creature stores a bounded set of memories and evidence keyed by the source event. Gossip carries the origin and a confidence discounted by the listener's trust in the speaker. Repeating the same event cannot count as fresh evidence.
- **Contracts:** trade, commissions, loans, gifts, social plans, association charters, and disputes have explicit parties, terms, consent, status, and event history. A completed gift is a record of a transfer; it does not create an automatic debt.
- **Groups:** a group is its own record linked to members. The prototype has a small workshop association with pooled food, one-member-one-vote coordinator elections, limited aid, and an exit rule. Membership and assets are not hard-coded as a social class.
- **Emergent outcomes under test:** scarcity, trait variation, gossip, theft, dispute resolution, small associations, and limited craft discovery can be switched or compared in repeatable seeded experiments. Those results are evidence about this prototype's rules, not proof that real societies must behave the same way.

The graph representation is a way to describe connected records. It does not require a graph database. The current population is capped at 30; only known relationships are stored, so a creature does not get a permanent record for every stranger. Contracts and groups are separate nodes linked to participants. The interface can show summaries and reveal individual records on demand.

## How choices happen

On each simulated minute, an agent scores actions it can currently take. Need pressure, OCEAN traits, skills, interests, food reserves, promises, and what it believes about a potential partner contribute to those scores. A small seeded random tie-breaker prevents identical agents from acting in lockstep while keeping runs reproducible. The selected action changes the world, writes an event, and updates only the relevant relationships and obligations. There is no background web service yet: this lab runs locally in the browser or in Node tests.

## Labor-value benchmark

`dist/labor-value.js` is the first economy foundation. The **Labor values** tab makes assumptions inspectable, and **Trade accounting** compares completed sales and commissions with the benchmark. It calculates a reference labor requirement for each good:

```text
reference labor per unit = (usual direct production labor + reference labor in inputs) / output quantity
```

Resource extraction has a starting reference labor requirement too. A productivity change lowers a recipe's standard time, and therefore the benchmark for goods made from it. An individual worker's inefficiency does not increase the good's reference value. `basketLaborCost` provides a stable labor-measured basket for comparing snapshots.

This is a benchmark, not a forced transaction price or a spendable currency. Actual deals can differ because of scarcity, demand, bargaining, and property claims. Current completed trades record the good, buyer, seller, food paid, benchmark labor and labor represented by that payment. Only food barter exists now; future currency purchasing power can be measured against the same labor-valued basket once other payment instruments exist. Reference labor, negotiated prices, and payment instruments stay separate.

## Next implementation stages

1. **Economy accounting.** Completed trades now record goods and food payment against the labor benchmark. Next, measure basket prices per currency only when there is enough trade evidence. Do not create a currency just to make the economy screen look complete.
2. **Property and group evolution.** Add explicit access, use, exclusion, transfer, and fee rights to assets. Let groups recognize or dispute claims through contracts and decisions. Keep communal access as the seed-world rule.
3. **Test and tune emergence.** Run matched scenarios with multiple seeds and report distributions for hunger, debt, concentration, group stability, and production. Keep outcomes explainable and avoid hard-coding named regimes such as capitalism or a cartel.

## Current limits

The society lab and the website village are separate prototypes. The lab has no persistent server, account system, external agent protocol, or always-on background simulation. The labor benchmark is not wired into trade decisions: it observes completed prices but does not force them. Resource labor values and recipe times are explicit starting assumptions to test, not facts discovered by the simulation. Political organizations beyond a small association, nested groups, private land claims, multiple currencies, inflation, and rent are not implemented yet.
