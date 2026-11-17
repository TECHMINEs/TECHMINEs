// Builds the profile's stat cards as SVG from the GitHub GraphQL API.
// Usage: GITHUB_TOKEN=... node scripts/cards.mjs [outDir]
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const USER = process.env.GH_USER || 'TECHMINEs';
const TOKEN = process.env.GITHUB_TOKEN;
const OUT = process.argv[2] || 'dist';
if (!TOKEN) throw new Error('GITHUB_TOKEN is required');

const SKIP_REPOS = new Set([USER, `${USER}.github.io`]);
const SKIP_LANGS = new Set(['HTML', 'CSS', 'SCSS', 'Dockerfile', 'Shell', 'Makefile', 'Batchfile', 'PowerShell']);
const ALIAS = { PLSQL: 'SQL', PLpgSQL: 'SQL', TSQL: 'SQL' };

const C = {
  bg: '#000000', line: '#2E2E2E', red: '#FF2626', text: '#FFFFFF', dim: '#8A8A8A',
  greys: ['#E6E6E6', '#ADADAD', '#7A7A7A', '#575757', '#3D3D3D'],
};
const MONO = `'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`;
const DISPLAY = `'Chakra Petch','Segoe UI',Helvetica,Arial,sans-serif`;

const query = `query($login: String!) {
  user(login: $login) {
    repositories(ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, first: 100) {
      totalCount
      nodes { name languages(first: 12, orderBy: { field: SIZE, direction: DESC }) { edges { size node { name } } } }
    }
    contributionsCollection {
      totalCommitContributions
      contributionCalendar { totalContributions }
    }
  }
}`;

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { Authorization: `bearer ${TOKEN}`, 'Content-Type': 'application/json', 'User-Agent': 'profile-cards' },
  body: JSON.stringify({ query, variables: { login: USER } }),
});
const body = await res.json();
if (!res.ok || body.errors) throw new Error(JSON.stringify(body.errors || body));
const { repositories, contributionsCollection: cc } = body.data.user;

const fmt = (n) => n.toLocaleString('en-US');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const frame = (w, h, inner, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">` +
  `<title>${esc(title)}</title>` +
  `<rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" fill="${C.bg}" stroke="${C.line}"/>` +
  `<rect x="0" y="0" width="28" height="3" fill="${C.red}"/>` +
  inner + `</svg>\n`;
const label = (x, y, s, fill = C.dim, size = 12, anchor = 'start') =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="${MONO}" font-size="${size}" text-anchor="${anchor}">${esc(s)}</text>`;
const figure = (x, y, s, size = 34) =>
  `<text x="${x}" y="${y}" fill="${C.text}" font-family="${DISPLAY}" font-size="${size}" font-weight="600" style="font-variant-numeric:tabular-nums">${esc(s)}</text>`;

// ---- languages across project repos
const totals = {};
for (const repo of repositories.nodes) {
  if (SKIP_REPOS.has(repo.name)) continue;
  for (const { size, node } of repo.languages.edges) {
    if (SKIP_LANGS.has(node.name)) continue;
    const name = ALIAS[node.name] || node.name;
    totals[name] = (totals[name] || 0) + size;
  }
}
const langCount = Object.keys(totals).length;
const sum = Object.values(totals).reduce((a, b) => a + b, 0) || 1;
let langs = Object.entries(totals).sort((a, b) => b[1] - a[1]);
if (langs.length > 6) {
  const rest = langs.slice(5).reduce((a, [, v]) => a + v, 0);
  langs = [...langs.slice(0, 5), ['Other', rest]];
}

mkdirSync(OUT, { recursive: true });

// ---- card 1: the year in figures
{
  const W = 480, H = 200;
  const cells = [
    [fmt(cc.contributionCalendar.totalContributions), 'contributions'],
    [fmt(cc.totalCommitContributions), 'commits'],
    [fmt(repositories.totalCount), 'public repos'],
    [fmt(langCount), 'languages shipped'],
  ];
  let inner = label(28, 40, 'Last 12 months', C.red, 13);
  cells.forEach(([v, k], i) => {
    const x = 28 + (i % 2) * 220, y = 90 + Math.floor(i / 2) * 68;
    inner += figure(x, y, v) + label(x, y + 22, k);
  });
  writeFileSync(join(OUT, 'stats.svg'), frame(W, H, inner, `${USER}: last 12 months`));
}

// ---- card 2: languages
{
  const W = 480, H = 200, BX = 28, BW = 424;
  let inner = label(28, 40, 'Languages, by code written', C.red, 13);
  let x = BX;
  langs.forEach(([, v], i) => {
    const w = i === langs.length - 1 ? BX + BW - x : Math.max(2, Math.round((v / sum) * BW));
    inner += `<rect x="${x}" y="62" width="${w}" height="10" fill="${i === 0 ? C.red : C.greys[i - 1] || C.greys[4]}"/>`;
    x += w;
  });
  langs.forEach(([name, v], i) => {
    const cx = 28 + (i % 2) * 220, cy = 104 + Math.floor(i / 2) * 30;
    inner += `<rect x="${cx}" y="${cy - 9}" width="10" height="10" fill="${i === 0 ? C.red : C.greys[i - 1] || C.greys[4]}"/>`;
    inner += label(cx + 20, cy, name, C.text, 13);
    inner += label(cx + 196, cy, `${((v / sum) * 100).toFixed(1)}%`, C.dim, 12, 'end');
  });
  writeFileSync(join(OUT, 'languages.svg'), frame(W, H, inner, `${USER}: languages`));
}

console.log(`cards written to ${OUT}: ${cc.contributionCalendar.totalContributions} contributions, ${langs.map(([n]) => n).join(', ')}`);
