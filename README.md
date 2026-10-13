# resume-yaml-to-pdf

A real-time resume editor that turns YAML into a print-ready page for PDF export.

https://resume-yaml-to-pdf.pages.dev

## Features

- **Live preview**: Edit YAML on the left, and the resume on the right updates as you type.
- **Clear error messages**: If the YAML has a mistake, the app shows what is wrong. The preview keeps the last valid version.
- **Auto-save**: Your resume is saved in your browser (`localStorage`). Reload the page and continue where you stopped.
- **Import and export**: Load a `.yaml` / `.yml` file, or download your resume as `resume.yaml`.
- **A4 preview**: The preview has the same width as an A4 page. A dotted line shows about where each page ends.
- **PDF export**: Click **Save PDF** and choose "Save as PDF" in the print dialog of your browser.
- **Private by design**: The app has no server and no tracking. Your data stays in your browser.

Notes:

- The app is made for desktop browsers (window width of 1200px or more).
- In the print dialog, turn on **Background graphics** to print the sidebar color.
- On a shared computer, click **Reset** when you finish. It deletes the saved resume from the browser.

## Getting Started

Requirements: Node.js `^20.19.0` or `>=22.12.0`

```bash
# clone the repository
git clone https://github.com/chocolat5/resume-yaml-to-pdf.git
cd resume-yaml-to-pdf

# install dependencies
npm install

# run locally
npm run dev
```

Open http://localhost:5173/

The app starts with the sample resume (`src/data/sample.yaml`).
To start with your own data during development, create `src/data/resume.local.yaml`.
This file is ignored by git and is never included in a production build.

Other commands:

```bash
# build for production
npm run build

# lint and format check
npm run check
```

## Roadmap

### high

- [ ] Input field for the PDF file name
- [ ] Change the resume colors from YAML (`theme`)

### medium

- [ ] Show the error position inside the editor
- [ ] Show more than one syntax error at a time
- [ ] Import a YAML file by drag and drop
- [ ] Improve the color contrast of error messages

### low

- [ ] Show the number of pages
- [ ] Let users choose the preview size (50% / 75% / 100%)
- [ ] Show the time of the last save

## Development Process

I designed this project and wrote most of the code myself.
I used **Claude Code** ([@claude-code](https://github.com/anthropics/claude-code)) as a pair-programming navigator for:

- requirement definition and roadmap creation
- code review and refactoring advice
- debugging and investigation of browser behavior (print layout, CodeMirror)

Claude Code wrote a few small parts at my request (the CodeMirror theme and the page-break guide styles). I reviewed and tested all of them.

> No code was directly generated or copied from AI without review.

## Feedback

If you find a bug or have a suggestion to improve the app, you can:

- Open an [issue](https://github.com/chocolat5/resume-yaml-to-pdf/issues) with the "bug" or "enhancement" label
- Or reach out via [GitHub Discussions](https://github.com/chocolat5/resume-yaml-to-pdf/discussions)

Your feedback is appreciated.

## Author

[@chocolat5](https://github.com/chocolat5)

## License

[The MIT License](./LICENSE)
