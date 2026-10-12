# Ready for review

Demo: https://internet-bench-demo.upbeatbasil8.chatgpt.site/lab.html

Findings: https://internet-bench-demo.upbeatbasil8.chatgpt.site/findings.html

Public source: https://github.com/vivimelon/ai-econ-sim

Deployment version 5 succeeded. Existing website access restrictions were preserved. Public source visibility is independent of website access.

## What changed

A new inspectable simulation core powers the village. The website shows its saved world, with five observers on the landing hill. The laboratory explains motives first and reveals graphs, decisions, memories and contract terms on demand. It includes overlapping social/economic groups, directed trust, gossip, food payments, colored hats, supply agreements, workshop shares and exits. Approved artwork remains in use; map and animations are placeholders.

## What the experiments support

48 runs across six configurations and eight seeds, with resource conservation checks. Social fashion increased average hat sales from 2.88 to 5. Scarcity raised average hunger from 21.91 to 68 and largely stopped hat purchases. Shared workshops survived in seven of eight default runs. Hidden-market insight showed no demonstrated economic advantage; it is off by default.

The engine passes 50 tests across the preserved and new models. The actual browser comparison worker completed its 24-run batch. Save/reload, advancing time, reset to a six-person world, responsive layout and website integration were checked. A 30-resident day and continued restored run also passed invariants.

## My recommendation

Continue with this core. Add renegotiable supply agreements and explicit recurring household obligations next, then a small multi-step planner. This does not yet produce governments, historical economic stages, federations or purposeful refinancing. Keep those goals separate from the demonstrated results.

The prototype is browser-local and pauses while hidden. It is not always-on or multiplayer yet. A durable authoritative server, player permissions and external agent API come after behavior tuning. No server or LLM spending was introduced.

See docs/EXPERIMENT-FINDINGS.md for measured ranges and failures, and docs/SOCIETY-V2.md for the exact mechanics. The repaired prior implementation remains on codex/baseline-repaired; the new work is on codex/society-v2 and master. All comparisons are same-engine configuration ablations.
