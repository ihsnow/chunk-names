# ChunkNames

This is a project to reproduce a bug, when files with unique content have the same hash in the name

Steps to reproduce:

- `npm run build1`
- change a number inside constructor in app.component.ts from 1 to 2
- `npm run build2`
- compare files from `dist1` and `dist2`, notice generated chunks with the same name, but different code inside
