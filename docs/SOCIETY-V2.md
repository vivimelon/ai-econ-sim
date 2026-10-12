# Society v2: what the engine actually does

This describes the implemented prototype, not the final wishlist. Core: `dist/society-next.js`. Renderer: `dist/society-view.js`. Website integration: `dist/village-shell.js`.

## One resident

Each resident stores five fixed OCEAN numbers (0–100), five changing needs (hunger, fatigue, boredom, loneliness, stress), food/material/tool inventory, individual hats, a preferred color, known recipes and attempted trials, current hub/activity, memberships and evidence. There is no skill or interests array. Work history is accumulated production time, not a mediation ability.

O increases curiosity and preference for unusual locally observed colors. C increases commitment and preparation scores and makes changing hats less attractive. E increases social initiation and loneliness accumulation, indirectly increasing exposure to others. A increases aid and compromise and reduces the attraction of theft. N increases desired food reserves and risk/stress sensitivity. These coefficients are game-design assumptions, not empirically validated psychology. No trait is inherently best.

When free, a resident generates viable actions: eat, rest, gather, buy, produce, socialise, gift, borrow, repay, visit, experiment, build, leave, steal, and optionally seek insight. Each action has named score components. The highest score normally wins, with a small seeded tie variation. Long activities last multiple ticks. Commitments add urgency but are not guaranteed to win. This is a utility chooser, not a long-horizon planner.

## Relationships and memory

A relationship is a sparse record keyed `observerId>subjectId`. It holds familiarity, affection, grievance and separate economic/social/mediation reliability evidence. Bob's view of Joe can differ from Joe's view of Bob. A 30-resident population has at most 870 directed pairs. This is an in-memory graph represented by keyed records; no graph server is used.

Reliability is `positiveEvidence / (positiveEvidence + negativeEvidence)`, starting at 3 / 6. Evidence records carry event ID, subject, domain, outcome, impact, source, confidence, time and hop count. A resident displays its latest 40 memories, while deduplication IDs survive for 720 simulated minutes. Summary beliefs persist. An old rumor cannot be reintroduced after this horizon. Stronger firsthand evidence replaces weaker hearsay from the same event rather than counting both.

Gossip sends one eligible memory during a social interaction. It is capped at two hops. Confidence is multiplied by 0.6 and the listener's social trust in the speaker. This prototype transmits noisy evidence through confidence discounting; agents do not yet deliberately invent lies.

Affection approaches a ceiling with diminishing returns: a positive experience changes it by `(80 - affection) × 0.045 × experienceQuality`. Negative experiences separately increase grievance and reduce affection. Conversation quality depends on openness similarity, agreeableness and stress; substantial differences can lead to disagreement. This is templated interaction with readable event text, not generated dialogue. Neutral affection drifts toward 10. Gift giving is offered primarily to a needy peer when the giver has surplus; it cannot be requested repeatedly through the player UI.

## Contracts and ownership

Contracts are structured records: ID, kind, participants, terms, creation/deadline, state and consent. Immediate gifts and sales settle immediately. Social appointments reserve two creatures' time. Recurring supply contracts have a good, quantity, interval, fixed price and deadline. Loans transfer two existing food with a promise to repay 2.1; outstanding unresolved debt blocks further unsecured borrowing.

A missed loan becomes disputed and records adverse evidence. Mediation requires both parties to know an available third resident. Mutual reputation, familiarity, conscientiousness and conflicting affiliations determine candidates. The proposal succeeds only when each side's acceptance rule passes. A mediator cannot seize assets. Unresolved loans remain payable and are not discarded during compaction.

Three willing established producers can contribute timber, food and time to build a workshop. Each gets one third ownership, a member production slot and proportional treasury distributions. Common workshop access remains available. Members can leave under the charter's explicit payout and share redistribution terms. Social circles, workshops and price agreements can overlap. Coordinators are selected by one-member-one-vote using trust, affection and conscientiousness. These election and membership rules are provided by the engine; they are not invented constitutional law.

## Production and value

Common resource sources regenerate. Fibre becomes cloth; pigment and water become dye; cloth and dye become a colored hat. Timber and ore become a productive tool. Tools improve gathering output and wear down. Workshop capacity is reserved before ingredients are consumed. A protected recipe batch and the final tool are not listed for spot sale.

Agents initially know different recipes. Experiments consume fibre and time; a seeded success can reveal one of four authored recipes. Occasional social teaching shares knowledge. There is no generated recipe space or scientific productivity improvement yet.

Hats have one hex color. Similarity is based on perceptual OKLab color distance, not arithmetic on hex integers. Appeal combines stable taste, novelty/familiarity and observed trusted-peer colors. Creatures only observe hats in their current hub, with a 180-minute window. Purchase decisions compare improvement, price, reserves, trust and a switching cooldown. Hats are not equally desired by everyone.

Public color requests inform hat producers. Input production also uses the model's visible market demand for known recipe inputs. The optional insight action spends time to access aggregate private current preferences, weighted by affordability and supply. Advice retains its source and loses confidence when shared. It reveals no future event.

Food is currently the only payment commodity. Labor reference values are explicit constants derived from extraction and recipe assumptions. Asking prices vary with stock, time unsold, hunger, demand and price agreements. Every trade records the labor of the good and its payment. The earlier dynamic labor benchmark module is retained in the classic model; integrating changing productivity into v2 remains future work. This is not yet an inflation or multiple-currency model.

## Inspection, runtime and limits

The UI shows a reason before numbers. Graphs separate people, economic obligations and memberships; only six strongest social connections are drawn. Detailed traits, evidence, score components and terms are expandable. The map is an observer of hub state, not a pathfinding simulation. The website's hill shows five residents from the same save.

Seeded state is serializable and tested for deterministic replay. Events, detailed transactions, histories and displayed memories are bounded; open obligations are retained. Resource and share invariants are tested throughout experiment runs. Results are measured over multiple seeds, with assumptions and failures reported separately.

This version saves to browser local storage and pauses while hidden. It does not run while the browser is closed. There is no shared server, authentication, offline tick catch-up, authoritative ledger, player-command concurrency or external agent API. Multiple active tabs can overwrite saves. Those are production milestones after the behavior model is convincing.
