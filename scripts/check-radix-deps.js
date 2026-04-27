const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const pkgJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"),
);
const rootDeps = Object.entries(pkgJson.dependencies || {}).map(
  ([name, version]) => `${name}@${version}`,
);
const visited = new Set();
const queue = rootDeps.map((pkg) => ({ pkg, chain: [pkg] }));
const target = "@radix-ui/react-label";

const parseJson = (raw) => {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "undefined") return {};
  try {
    return JSON.parse(trimmed);
  } catch {
    return {};
  }
};

const getMeta = (pkg, field, chain) => {
  try {
    const raw = execSync(`npm view ${pkg} ${field} --json`, {
      encoding: "utf8",
    });
    return parseJson(raw);
  } catch (err) {
    console.error(
      `ERROR resolving ${pkg} in chain ${chain.join(" -> ")}: ${err.message}`,
    );
    return {};
  }
};

while (queue.length) {
  const { pkg, chain } = queue.shift();
  if (visited.has(pkg)) continue;
  visited.add(pkg);

  const deps = getMeta(pkg, "dependencies", chain);
  const peers = getMeta(pkg, "peerDependencies", chain);
  const optional = getMeta(pkg, "optionalDependencies", chain);
  const all = { ...deps, ...peers, ...optional };
  if (Object.prototype.hasOwnProperty.call(all, target)) {
    console.log("Found direct requirement in chain:", chain.join(" -> "));
    console.log("Dependency spec:", all[target]);
    process.exit(0);
  }

  const children = Object.entries(all)
    .filter(([name]) => !visited.has(`${name}@${all[name]}`))
    .map(([name, version]) => {
      const child = {
        pkg: `${name}@${version}`,
        chain: [...chain, `${name}@${version}`],
      };
      if (name === target) {
        console.log("Found invalid child path:", child.chain.join(" -> "));
      }
      return child;
    });
  queue.push(...children);
}
console.log(
  "No direct requirement for",
  target,
  "found in root dependency tree.",
);
