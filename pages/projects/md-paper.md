# Markdown Paper

Markdown Paper is a CLI tool I created in order to write scientific papers in Markdown. Originally, this sprung up from the need to typeset papers for school in LaTeX. Since the syntax of LaTeX is a tad dated, I decided I would prefer to write stuff in Markdown.

## Documentation

The following documentation has been reformatted, but the content is the same (for now). If you wish to view the original version, you can visit the [Original Documentation](https://md-paper.now.sh/docs)

_Currently only designed to work on macOS, but should theoretically also work on Linux._

### Setup

For those unfamiliar with the command line:

1.  Go to **Applications**
2.  Go to **Utilities** (inside Applications)
3.  Open **Terminal.app** (inside Utilities)
4.  Copy one of the below options and paste it into Terminal.

#### Installing

-   With [Homebrew](https://brew.sh):
    ```
    brew tap nico-bachner/formulae
    brew install md-paper
    ```
-   With `curl`:
    ```
    curl https://md-paper.nicob.dev/install.sh | sh
    ```

#### Version Check

When installed, you can check which version you are on:

```
md-paper --version
```

Shorthand: `-v`

### Writing

1. Create a folder that will contain your project.
2. Create your Markdown (`.md`) document inside that folder.
3. Check out the [YAML Options](#YAML-Options) section of this README for formatting options.
4. Start writing

### PDF Generation

1.  Open a new terminal window.
2.  Create a folder for your project if you haven't already
    ```
    mkdir FOLDER_NAME
    ```
    and navigate into your project folder
    ```
    cd FOLDER_NAME
    ```
    Don't forget to replace `FOLDER_NAME` with the actual name of your project folder
3.  Now you can generate your pdf:
    ```
    md-paper
    ```

### Build Options

This is the base command for pdf generation:

```
md-paper
```

This base command can be extended by adding one or more of the following arguments:

-   `--log`: basic logs
-   `--aux`: auxiliary files (essentially logs for each small part of your document, e.g. table of contents)

For example, the following would keep all the logs generated while building the pdf, as well as the .

```
md-paper --log --aux
```

If you just want to generate a LaTeX file, for example when sending your paper off to a publication, you can use

```
md-paper tex
```

If you have a custom LaTeX file, you can process that and get back a PDF by using

```
md-paper pdf
```

### Formatting Options

There are quite a few options for customisation, so not all will be listed here.

#### Basic structure

Customisation can be done in a YAML (**Y**AML **A**in't **M**arkup **L**anguage) header which is an extra section above the content of your document:

```YAML
---
YAML HEADER # formatting
---

MARKDOWN # content
```

#### Document types

-   For articles and short reports:
    ```YAML
    document-type: article
    ```
-   For longer reports:
    ```YAML
    document-type: report
    ```

#### Title, Author, Date

These are essential parts of any standalone document:

```YAML
title: "YOUR DOCUMENT TITLE"
authors:
    - "YOUR NAME"
    - "CO-PUBLISHER'S NAME"
date: \today  # or write out a specific date in parentheses
```

#### Custom Margins

LaTeX defines margins that are quite generous by default. If you should want to customise the margins, you can override the default as follows:

```YAML
margins:
    top: 3cm
    bottom: 1in
    left: 20pt
    right: 3em
```

Adjust values as needed.

#### Importing packages

For specialised functionality, external packages may need to be imported:

```YAML
packages:
    - package1
    - package2
```

If your TeX distribution doesn't include the full CTAN archive, non-standard packages will have to be downloaded individually before building:

```
md-paper install PACKAGE_NAME # shorthand: `i`
```

### Further Customisation

For all those with basic TeX knowledge, it is really easy to customise the build output even further than just through the YAML header. All the YAML options are derived from the `template.tex` file, located wherever you installed **md-paper** to, so feel free to check that out for the full customisation options)

**_WARNING:_**
_All of your changes to `template.tex` will be erased once you update **md-paper**, so edit the file at your own risk._ (unless of course you save your file and replace the one installed on update)

However, this is good enough for a quick fix if you can't wait long enough the [Github](https://github.com/nico-bachner/md-paper) issue to be addressed.

### Demo

```YAML
---
document-type: article
title-page: true
paper-size: a4
margins:
    top: 3cm
    bottom: 2cm
    left: 2cm
    right: 2cm
font:
    general: lmodern # kpfonts / fourier / tgtermes / dejavu / libertine
    math: euler
    size: 12pt # 10pt / 11pt / 12pt
    height: double # "onehalf" / "double"
header:
    center: My Awesome Paper
footer:
    center: Page \thepage
table-of-contents:
    list-of-figures: yes
bibliography:
    file: 'bibliography' # file 'bibliography.bib'
    style: unsrturl
image-sources:
    - ./images/
    - ./graphs/
packages:
    - hyperref
    - xcolor
title: |
    **Paper Title** \
    *Funky Subtitle*
authors:
    - Me
    - Myself
    - I
date: |
    \today # why over-complicate life?
other: | # create custom TeX commands in this field if necessary

---
# Introduction
*Hello, World!*
```

### Reinstalling & Uninstalling

-   Reinstalling

```
md-paper reinstall # shorthand: `r`
```

-   Uninstalling

```
md-paper uninstall # shorthand: `u`
```