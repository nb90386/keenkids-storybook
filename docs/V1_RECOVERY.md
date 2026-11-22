# Restoring V1

V1 is preserved in two independent places.

## 1. Local file snapshot

`.snapshots/v1-2026-11-10.tar.gz`: the complete project as of the V1 release on 2026-11-10, including uncommitted files, docs, skills and the original photos. It excludes `node_modules`, `.next`, `.env*`, `.vercel`, test output and other snapshots. The folder is git-ignored and Vercel-ignored.

```bash
mkdir ../keenkids-v1 && tar -xzf .snapshots/v1-2026-11-10.tar.gz -C ../keenkids-v1
cd ../keenkids-v1 && npm install && npm run build && npm run start
```

To roll the working copy itself back, extract the archive over a clean checkout of the folder, then run `npm install`.

## 2. The V1 production deployment on Vercel

V1 was the production deployment `keenkids-storybook-preview-z92tuaycf-neel-s-projects9.vercel.app` (deployment `dpl_…z92tuaycf`, 2026-11-10). Vercel keeps it after newer deploys. To put it back on the stable URL:

```bash
vercel promote https://keenkids-storybook-preview-z92tuaycf-neel-s-projects9.vercel.app --scope neel-s-projects9
# or: vercel rollback
```

Promoting it again re-points https://keenkids-storybook-preview.vercel.app at V1 instantly, with no rebuild.
