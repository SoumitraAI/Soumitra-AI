# Soumitra.AI — Owner's Manual

This is your website. It's a "static site": your writing lives as simple text
files, and a free tool called Eleventy turns them into fast web pages.
You never need a terminal — everything is done in your web browser on GitHub,
and the site rebuilds itself automatically about a minute after every change.

---

## Publish a new blog post

1. On GitHub, open the folder `src/blog`.
2. Click **Add file → Create new file**.
3. Name it in lowercase with hyphens, ending in `.md` — e.g. `why-agents-matter.md`
   (this becomes the web address: soumitra.ai/blog/why-agents-matter/).
4. Paste this at the top and fill it in:

   ---
   title: "Your headline here"
   description: "One sentence that appears under the headline and in listings."
   date: 2026-06-10
   tags: ["AI strategy"]
   ---

5. Write your post below it. Plain text works; you can also use:
   - `## Subheading`
   - `**bold**` and `*italics*`
   - `[link text](https://example.com)`
6. Click **Commit changes**. Done — live in about a minute.

## Publish a research report

Same as a blog post, but in the `src/research` folder, and the top block also
takes a reference code:

   ---
   title: "AI in retail banking: a sector deep dive"
   description: "One-line summary shown on the report card."
   date: 2026-07-01
   ref: "R-2026-02"
   tags: ["Retail banking"]
   ---

**To attach a downloadable PDF:** upload the PDF to the `src/files` folder
(Add file → Upload files), then add this line to the block at the top of the
report: `pdf: "/files/your-report.pdf"`. A download button appears automatically.

## Tags / sectors

Just write them in the `tags` line of any post or report, e.g.
`tags: ["Healthcare", "Policy"]`. Pages for each tag, and the Sectors index
at /tags/, are created automatically.

## Edit fixed pages

- **About** → `src/about.md`
- **Work with me** → `src/work-with-me.md`
- **Your email / site name / tagline** → `src/_data/site.json`
- **Homepage wording** → `src/index.njk` (edit the text between the tags)

To edit any file on GitHub: open it, click the pencil icon, make your change,
**Commit changes**.

## Delete the sample content

Once you've published real work, delete:
- `src/blog/sample-post.md`
- `src/research/sample-sector-deep-dive.md`
(Open the file on GitHub → the three-dots menu → Delete file.)

## If something breaks

The site only changes when you commit a file, so the most recent edit is
always the cause. The usual culprit is the block at the top of a post —
check that it starts and ends with a line of three dashes (---) and that the
title is inside straight quotes "like this". GitHub keeps every previous
version, so nothing is ever lost.
