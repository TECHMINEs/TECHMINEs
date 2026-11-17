<div align="center">

<a href="https://techmines.github.io">
  <img src="https://techmines.github.io/icons/og-card.jpg" alt="Pranav Jangid, TECHMINES: building software, and the case for it" width="100%">
</a>

<a href="https://techmines.github.io">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=17&duration=2600&pause=1500&color=FF2626&center=true&vCenter=true&width=640&height=40&lines=Building+software%2C+and+the+case+for+it.;Gateways+that+keep+answering+when+providers+fail.;Evidence+trails+that+prove+nobody+touched+them.;Dashboards+that+catch+burnout+before+it+lands." alt="Building software, and the case for it">
</a>

<br>

<a href="https://techmines.github.io"><img src="https://img.shields.io/badge/techmines.github.io-000000?style=for-the-badge&logo=googlechrome&logoColor=FF2626" alt="Portfolio"></a>
<a href="https://www.linkedin.com/in/pranavjangid"><img src="https://img.shields.io/badge/LinkedIn-000000?style=for-the-badge&logo=linkedin&logoColor=FF2626" alt="LinkedIn"></a>
<a href="mailto:Pjangid.work@gmail.com"><img src="https://img.shields.io/badge/Pjangid.work@gmail.com-000000?style=for-the-badge&logo=gmail&logoColor=FF2626" alt="Email"></a>
<a href="https://techmines.github.io/resume.pdf"><img src="https://img.shields.io/badge/Résumé-FF2626?style=for-the-badge&logo=readdotcv&logoColor=000000" alt="Résumé"></a>

</div>

<br>

I study engineering at MIT Manipal and business at IIM Bangalore. I build both halves of a product: software that holds up under load, and a clear case for why it should exist. My work leans to the backend (gateways, ledgers, analytics pipelines), with an interface on top that someone outside engineering can actually use.

Away from the editor, I head business development and PR at MTTN, Manipal's student media network, which has 25k+ followers.

<br>

## Selected work

<table>
  <tr>
    <td width="76" valign="top" align="center">
      <a href="https://github.com/TECHMINEs/Relay"><img src="https://techmines.github.io/logos/relay/mark.svg" width="56" alt="Relay"></a>
    </td>
    <td valign="top">
      <b><a href="https://github.com/TECHMINEs/Relay">Relay</a></b> &nbsp;·&nbsp; fault-tolerant LLM gateway<br>
      A drop-in, OpenAI-compatible gateway in Go. It routes requests by weight across providers, with a circuit breaker and half-open probes per provider, jittered retries, and a Redis Lua token bucket for rate limits and daily token quotas. Every request is metered in Prometheus.<br>
      <code>257 req/s</code> &nbsp; <code>3.4 ms p99</code> &nbsp; <code>0 failed / 20,594</code> &nbsp;<sub>local k6 run against a mock provider</sub><br>
      <sub>Go · Redis · PostgreSQL · Prometheus · Grafana · Next.js</sub><br>
      <a href="https://techmines.github.io/Relay/">Live walkthrough</a> &nbsp;·&nbsp; <a href="https://github.com/TECHMINEs/Relay/blob/main/loadtest/results/steady.json">k6 results</a>
    </td>
  </tr>
  <tr>
    <td width="76" valign="top" align="center">
      <a href="https://github.com/TECHMINEs/ChainProof"><img src="https://techmines.github.io/logos/chainproof/mark.svg" width="56" alt="ChainProof"></a>
    </td>
    <td valign="top">
      <b><a href="https://github.com/TECHMINEs/ChainProof">ChainProof</a></b> &nbsp;·&nbsp; chain of custody for forensic evidence<br>
      Every hand-off from seizure to courtroom is hashed, pinned to IPFS and anchored on Polygon. A tampered record fails a three-way check (database, IPFS, chain), which anyone can run from the public verify portal. Transfers carry Groth16 proofs.<br>
      <sub>Next.js 14 · TypeScript · PostgreSQL · Prisma · Solidity · IPFS · Redis</sub><br>
      <a href="https://techmines.github.io/ChainProof/">Live demo</a> &nbsp;·&nbsp; <a href="https://github.com/TECHMINEs/ChainProof">Source</a>
    </td>
  </tr>
  <tr>
    <td width="76" valign="top" align="center">
      <a href="https://github.com/TECHMINEs/DevPulse"><img src="https://techmines.github.io/logos/devpulse/mark.svg" width="56" alt="DevPulse"></a>
    </td>
    <td valign="top">
      <b><a href="https://github.com/TECHMINEs/DevPulse">DevPulse</a></b> &nbsp;·&nbsp; developer wellness analytics<br>
      Reads your GitHub history for signs of burnout. Night and weekend commits, sprint-and-crash cycles and streaks add up to a 0–100 wellness score, with a 7-day forecast from a scikit-learn model served by FastAPI. Includes live sync, team views, PDF reports and a Monday digest.<br>
      <sub>React 18 · Express · FastAPI · scikit-learn · Socket.io</sub><br>
      <a href="https://techmines.github.io/DevPulse/">Live demo</a> &nbsp;·&nbsp; <a href="https://github.com/TECHMINEs/DevPulse">Source</a>
    </td>
  </tr>
  <tr>
    <td width="76" valign="top" align="center">
      <a href="https://github.com/TECHMINEs/Nexora"><img src="https://techmines.github.io/logos/nexora/mark.svg" width="56" alt="Nexora"></a>
    </td>
    <td valign="top">
      <b><a href="https://github.com/TECHMINEs/Nexora">Nexora</a></b> &nbsp;·&nbsp; pre-disaster resilience for industrial sites<br>
      Models how floods, cyclones, toxic releases and grid outages would hit a facility: exposed assets, dependency chains, losses, insurance gaps and response access. Every number traces back to its source, and 377 golden assertions check the engines. It runs on synthetic facility data.<br>
      <sub>TypeScript (strict) · Next.js 14 · React · Tailwind · Radix UI</sub><br>
      <a href="https://techmines.github.io/Nexora/">Live demo</a> &nbsp;·&nbsp; <a href="https://github.com/TECHMINEs/Nexora">Source</a>
    </td>
  </tr>
  <tr>
    <td width="76" valign="top" align="center">
      <a href="https://github.com/TECHMINEs/AutoLine"><img src="https://techmines.github.io/logos/autoline/mark.svg" width="56" alt="AutoLine"></a>
    </td>
    <td valign="top">
      <b><a href="https://github.com/TECHMINEs/AutoLine">AutoLine</a></b> &nbsp;·&nbsp; car manufacturing operations<br>
      One control room for a vehicle plant, covering production output, parts inventory, line-side consumption and quality testing, with views for admins, managers and operators. It started on Oracle SQL as a Database Systems project and now runs on SQLite through an Oracle-dialect translation layer.<br>
      <sub>React 19 · Express 5 · Oracle SQL → SQLite · Tailwind</sub><br>
      <a href="https://techmines.github.io/AutoLine/">Live demo</a> &nbsp;·&nbsp; <a href="https://github.com/TECHMINEs/AutoLine">Source</a>
    </td>
  </tr>
</table>

<br>

## The long version

<a href="https://techmines.github.io"><b>techmines.github.io</b></a> has live demos of all five projects, plus a few things I built for fun: a Walkman that actually plays music, a phone handset you can pick up, and a logo hanging by a cord you can throw around. It's black and red with square corners, tuned down to the pixel.

<br>

## Stack

<p>
  <img src="https://img.shields.io/badge/Go-000000?style=for-the-badge&logo=go&logoColor=FF2626" alt="Go">
  <img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=FF2626" alt="TypeScript">
  <img src="https://img.shields.io/badge/Python-000000?style=for-the-badge&logo=python&logoColor=FF2626" alt="Python">
  <img src="https://img.shields.io/badge/Redis-000000?style=for-the-badge&logo=redis&logoColor=FF2626" alt="Redis">
  <img src="https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=FF2626" alt="Docker">
  <img src="https://img.shields.io/badge/PostgreSQL-000000?style=for-the-badge&logo=postgresql&logoColor=FF2626" alt="PostgreSQL">
</p>
<p>
  <img src="https://img.shields.io/badge/Next.js-111111?style=flat-square&logo=nextdotjs&logoColor=FFFFFF" alt="Next.js">
  <img src="https://img.shields.io/badge/React-111111?style=flat-square&logo=react&logoColor=FFFFFF" alt="React">
  <img src="https://img.shields.io/badge/Node.js-111111?style=flat-square&logo=nodedotjs&logoColor=FFFFFF" alt="Node.js">
  <img src="https://img.shields.io/badge/FastAPI-111111?style=flat-square&logo=fastapi&logoColor=FFFFFF" alt="FastAPI">
  <img src="https://img.shields.io/badge/Solidity-111111?style=flat-square&logo=solidity&logoColor=FFFFFF" alt="Solidity">
  <img src="https://img.shields.io/badge/Prometheus-111111?style=flat-square&logo=prometheus&logoColor=FFFFFF" alt="Prometheus">
  <img src="https://img.shields.io/badge/scikit--learn-111111?style=flat-square&logo=scikitlearn&logoColor=FFFFFF" alt="scikit-learn">
  <img src="https://img.shields.io/badge/Tailwind-111111?style=flat-square&logo=tailwindcss&logoColor=FFFFFF" alt="Tailwind CSS">
</p>

<br>

## By the numbers

<p>
  <img src="https://raw.githubusercontent.com/TECHMINEs/TECHMINEs/output/stats.svg" width="49%" alt="Contributions, commits, public repos and languages over the last 12 months">
  <img src="https://raw.githubusercontent.com/TECHMINEs/TECHMINEs/output/languages.svg" width="49%" alt="Languages across my projects, by code written">
</p>

<sub>Both cards are drawn by <a href="scripts/cards.mjs">a small script</a> from the GitHub API and refresh every night.</sub>

<br><br>

<div align="center">

<sub>Open to internships and collaborations.</sub>

<br><br>

<img src="https://komarev.com/ghpvc/?username=TECHMINEs&color=FF2626&style=flat-square&label=profile+views&labelColor=000000" alt="Profile views">

</div>

<img src="assets/rule.svg" width="100%" alt="">
