# Contributing

## Pull Requests

When merging Pull Requests on GitHub, use the [squash and merge](https://github.com/blog/2141-squash-your-commits) button, so that our timeline of master branch is linear.

## Releases

To publish a new release:

```bash
$ git checkout master
$ git pull origin master

$ npm version patch(|minor|major)
$ npm publish
$ git push --follow-tags
```

Or via Makefile:

```bash
$ make release VERSION=patch
```
