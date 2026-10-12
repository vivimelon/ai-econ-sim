# Society v2: experiment findings

48 reproducible runs: 8 shared seeds × 6 rule configurations × 12 residents × 1,440 simulated minutes. Measured compute time on this laptop: 43.1 seconds for the whole batch. This is a local benchmark, not a hosting cost estimate. Resource accounting and ownership invariants were checked every 120 ticks and at the end of every run.

## Results

Values are means, with observed minimum–maximum in parentheses. Workshop counts are surviving shared groups; supply agreements and exits are lifetime counts.

| Approach | Hat sales | Input trades | Hunger /100 | Workshops | Supply agreements | Exits | Insights |
|---|---|---|---|---|---|---|---|
| Taste only | 2.88 (1–5) | 32.38 (27–43) | 18.74 (15.08–23.5) | 1.63 (1–3) | 1.38 (0–3) | 1 (0–2) | 0 (0–0) |
| Social fashion | 5 (3–7) | 37.38 (28–46) | 21.91 (14.33–30.33) | 1.25 (0–2) | 2.38 (1–5) | 1.63 (0–4) | 0 (0–0) |
| No groups | 4.88 (4–6) | 39.13 (34–47) | 22.09 (14.17–29.08) | 0 (0–0) | 1.5 (0–4) | 0 (0–0) | 0 (0–0) |
| No price pacts | 4.63 (2–5) | 41.13 (29–50) | 21.29 (15.58–25.5) | 1.75 (0–3) | 2.13 (0–4) | 0.38 (0–2) | 0 (0–0) |
| Hidden market insight | 4.13 (1–7) | 33.5 (25–50) | 20.22 (14.17–29.58) | 1.5 (1–3) | 1.38 (0–3) | 0.88 (0–2) | 17.25 (8–28) |
| Food shortage | 0.13 (0–1) | 16.13 (13–19) | 68 (64.75–73.75) | 0.13 (0–1) | 0 (0–0) | 0.88 (0–3) | 0 (0–0) |

## What I conclude

The useful foundation is a small rule-based simulation with inspectable motives, directed memories and real transfers. Keep that foundation. Do not add governments, religion and many currencies yet.

Social fashion increased average hat trades from 2.88 to 5 per simulated day compared with taste alone. This is a promising demand mechanism, though the ranges overlap and eight seeds cannot validate a theory of human behavior. Hat sales remain infrequent: most creatures eventually satisfy their preferences. Color similarity among friends does not demonstrate gangs or uniform-based political identity.

Shared workshops formed in seven of eight default runs. Default surviving workshop counts range from zero to two, and membership exits range from zero to four. Participants and timing emerge from decisions; the three-person charter, contribution requirements and coordinator election are authored. No government or class revolt has emerged.

Removing price coordination raised mean input trades from 37.38 to 41.13. This is compatible with a friction effect, but changing one rule also changes later random choices. A price pact is an attempted coordination mechanism, not proof of monopoly power or a successful cartel.

Food shortage nearly eliminated hat sales (0.13 average) and raised hunger from 21.91 to 68. Nobody dies. This is the clearest useful outcome: optional consumption loses priority when subsistence is constrained.

Optional hidden-market insight generated 17.25 signals and 34.25 advice transfers on average, but hat sales fell to 4.13 from 5 in the default. There is no demonstrated economic benefit yet. Leave this feature off by default; spending time on information has an opportunity cost. It reads current latent demand, not the future, and it is not a priesthood or a religion model.

## A recorded example, not a scripted story

Seed 11, default social-fashion rules:

- Minute 80: Bob, Fern formed a price-pact.
- Minute 160: Ivy, Kit formed a price-pact.
- Minute 160: Alice, Nell formed a price-pact.
- Minute 274: Bram and Kit agreed recurring cloth deliveries at a fixed price.
- Minute 295: Reed, Bob, Kit formed a workshop.
- Minute 367: Otto, Alice, Nell formed a workshop.
- Minute 640: Nell, Joe, Moss formed a circle.
- Minute 1116: Ivy proposed 1.79 food to settle c1464; both parties accepted.
- Minute 1119: Joe proposed 1.59 food to settle c1472; both parties accepted.
- Minute 1120: Kit, Bram, Ivy formed a circle.
- Minute 1244: Pip proposed 1.43 food to settle c1550; both parties accepted.
- Minute 1304: Nell proposed 1.88 food to settle c1703; both parties accepted.

Full run summaries and event samples: [recorded JSON](../dist/society-next-experiments.json).

## Problems found and repaired

- Producers initially resold their own recipe inputs and productive tools, inflating trades. The spot market now protects a recipe batch and the last tool. The reported experiments were rerun after that correction.
- Rumors could be counted twice after falling out of the 40-memory display list. Evidence IDs now persist for a 720-minute deduplication window, independently of that display list. Firsthand evidence replaces weaker hearsay.
- Unresolved loans could permit repeated unsecured borrowing. They now block new borrowing and survive record compaction.
- Busy workshops now reject work before taking its ingredients.
- Classic browser experiment workers had a missing dependency and mediated repayments were miscounted. Both are covered by regression tests.

## What still needs work

- Production has only cloth, dye, hats and tools. Recipe discovery is a finite authored trial, not open-ended science. Raw resources regenerate; elemental energy and construction supply chains are not implemented.
- Supply contracts fix quantity and price, and often fail when demand, stock or reserves change. Renegotiation and cancellation terms are the next useful economic module.
- Choices score immediate options with a small commitment bonus. Creatures do not yet plan multi-step refinancing such as borrowing from Alice specifically to pay Bob.
- Social circles do not yet enforce recurring meetings or a shared household budget. Workshop membership is contractual and overlapping; nested federations and alliances are not implemented.
- Mediators rely on mutual reputation, familiarity, conflicts and personality. Settlements require both parties to accept. There is no separate mediation skill, coercive court or enforcement authority.
- Labor benchmarks are explicit fixed recipe assumptions. There is no productivity-driven dynamic recalculation in v2 yet; the classic benchmark module remains preserved for that next integration. Food is the payment commodity. No fiat currencies or inflation index are claimed.
- Asset ownership means workshop shares, production access and treasury distributions. Land, houses, wages, rent and transferable share markets are not implemented.
- Belief summaries retain evidence indefinitely; only detailed memories are bounded. There is no calibrated forgetting or deliberate lying yet.
- This is browser-local, pauses when hidden, and saves locally. It does not keep a common world running while computers are off. Accounts, authoritative server ticks, concurrent-player control, MCP access and notifications remain future work. Multiple active tabs can overwrite each other's saves.
- Art, map and animation remain placeholders as requested. Existing approved character art is reused.

## Next milestone

Renegotiable supply agreements and explicit household obligations, with a two-step planner and a visible trace for every decision. Add each separately and compare it against this baseline. Only after that should we add federations and competing property rules. Before multiplayer, move this deterministic core to authoritative server ticks with a durable ledger, idempotent commands and scoped agent permissions.
