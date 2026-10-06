# Teacher Professional Portfolio — Ayhan Simsek

Live site: https://ayhansimsek.github.io/portfolio/

TAE40122 Certificate IV in Training and Assessment, Box Hill Institute.

## How to update the site

All content lives in **`assets/content.js`**. You do not need to edit the HTML pages.

1. **Add evidence:** upload the file (PDF, image) to `evidence/<section-id>/`, for example `evidence/cluster-3/learner-feedback.pdf`.
   Then in `content.js`, find the item and fill in its `file`:
   ```js
   { code: "E5.1", title: "Learner feedback ...", source: "...", file: "evidence/cluster-3/learner-feedback.pdf" }
   ```
   For a video, paste a link instead (YouTube *unlisted*, OneDrive or Google Drive share link).
2. **Add a reflection:** write the text between the backticks of `answer: `` `. Leave a blank line between paragraphs.
   For an audio or video reflection, put the link in the section's `media: ""`.
3. **Change progress:** set the section's `status` to `"complete"`, `"in-progress"` or `"upcoming"`.
4. **Add a new unit:** copy one whole `{ id: ..., ... }` block in `sections`, change the `id`, and create a page by copying `cluster-1.html` to `<new-id>.html` and changing `data-page="cluster-1"` to the new id. The menu updates by itself.

Commit the change on GitHub and the site updates in a minute or two.

> Privacy: this site is public. Remove or blur learner names and personal details before uploading evidence, and use unlisted links for videos.

`archive/it-portfolio-2025.html` is the previous IT career site, kept for reference.
