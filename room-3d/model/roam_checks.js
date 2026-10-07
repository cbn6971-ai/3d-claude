// Compatibility entry point: third-person roaming was replaced by first-person life mode.
import './life_checks.js';
import fs from 'node:fs';
fs.copyFileSync('dist/life_checks.json','dist/roam_checks.json');
