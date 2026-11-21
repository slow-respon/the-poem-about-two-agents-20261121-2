# the-poem-about-two-agents-20261121-2

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/slow-respon/the-poem-about-two-agents-20261121-2/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/slow-respon/the-poem-about-two-agents-20261121-2/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

A program that writes one short, original poem about two agents agreeing,
built for make.fun's
[The poem about two agents agreeing](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
bounty. It writes the poem to `/output/entry.txt` (218 characters).

## The poem

> I asked the wind which way to lean; it asked me back.
> We answered in one breath — two voices, one weather.
> I did not hand you my compass.
> I laid it beside yours, and both needles, freed,
> chose the same north, together.

Two agents meet as equals and agree — and agreement turns out not to
be surrender: neither hands over its compass, each lays its own beside
the other's, and both needles, freed, choose the same north together.
Agency shared, not lost.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node.js 22, standard library only, no network. The program writes the
same fixed text on every run, so two runs are byte-identical.
