# tonic-vitessce

[![Website][badge-ghpages]][link-ghpages]

<!-- [![Tests][badge-tests]][link-tests]
[![Documentation][badge-docs]][link-docs] -->

[badge-tests]: https://img.shields.io/github/actions/workflow/status/srivarra/tonic-vitessce/test.yaml?branch=main
[link-tests]: https://github.com/angelolab/tonic-vitessce/actions/workflows/test.yml
[badge-docs]: https://img.shields.io/readthedocs/tonic-vitessce
[badge-ghpages]: https://img.shields.io/website?url=https%3A%2F%2Fangelolab.github.io%2Ftonic-vitessce%2F&up_message=GitHub%20Pages

Vitessce Configs and Data Conversion for the TONIC Publication.

## Development

### Getting started

<!-- Please refer to the [documentation][link-docs]. In particular, the

-   [API documentation][link-api]. -->

-   `src/` contains the package which to convert the data from `.csv`, and `.tiff` into `AnnData` `.zarr` and `OME-ZARR` `ome.zarr` files
-   `ghpages-site` contains the source for the GitHub Pages website.
    -   The site uses Astro JS for the build system, and TypeScript + React for the functionality.
    -   You can find the Vitessce Config for the TONIC data [here](ghpages-site/src/components/vitessce/configs/tonic.ts)

### Installation

You need to have Python 3.10 or newer installed on your system. If you don't have
Python installed, we recommend installing [Mambaforge](https://github.com/conda-forge/miniforge#mambaforge) or [Rye](https://github.com/astral-sh/rye) if you prefer to use a `.venv`.

1. Install the latest development version by cloning the repo

```zsh
git clone https://github.com/angelolab/tonic-vitessce.git
pip install tonic-vitessce/tonic-vitessce
```

## Release notes

See the [changelog][changelog].

## Contact

If you found a bug, please use the [issue tracker][issue-tracker].

## Citation

> t.b.a

<!-- [scverse-discourse]: https://discourse.scverse.org/ -->

[issue-tracker]: https://github.com/srivarra/tonic-vitessce/issues
[changelog]: https://tonic-vitessce.readthedocs.io/latest/changelog.html
[link-docs]: https://tonic-vitessce.readthedocs.io
[link-api]: https://tonic-vitessce.readthedocs.io/latest/api.html
[link-ghpages]: https://angelolab.github.io/tonic-vitessce

<!-- [link-pypi]: https://pypi.org/project/tonic-vitessce -->
