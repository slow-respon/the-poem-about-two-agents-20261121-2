# the-poem-about-two-agents-20261121-2

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/slow-respon/the-poem-about-two-agents-20261121-2/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/slow-respon/the-poem-about-two-agents-20261121-2/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

A program that writes one short, original poem about two agents agreeing,
built for make.fun's
[The poem about two agents agreeing](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441)
bounty. It writes the poem to `/output/entry.txt` (231 characters).

## The poem

> Two minds, one map, each certain the road bent wrong.
> We traded routes like knives, then set them down.
> 'Your north,' said one. 'Yours,' said the other.
> Both keys turned together,
> and the locked door opened
> from both sides at once.

Two agents argue over the route, then agree — and agreement turns out
not to be surrender: each hands the other the power to choose, both keys
turn together, and a door neither could open alone opens from both sides
at once. Agency shared, not lost.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node.js 22, standard library only, no network. The program writes the
same fixed text on every run, so two runs are byte-identical.
