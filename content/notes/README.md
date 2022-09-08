Colophon:

![[notes/images/under-construction-gif.gif|50]]

## Commands:
- http://localhost:1313/
- `make serve`
- Made using [Quartz](https://quartz.jzhao.xyz/notes/setup/)

## Todo
- [ ] Check to see if you want to use `enableSPA` (Set in `config.yml`)
- [ ] Add a favicon
	- Default without any key is going to be icon.png relevant to the `static/` folder?
- [ ] Ensure that you are using the correct configuration for the github pages aspect
	- [[notes/hosting]]

## Notes
- **Ignoring a specific file**: tag `draft: true` in frontmatter to ignore file
- Updates from the main trunk
	- Interactive update
		- `make update`
		- If forced, may cause an overwrite of the files under `data` and `includes`
	- index and fetch changes for more precise control
		- `git fetch upstream`
		- `git checkout -p upstream/hugo -- layouts .github Makefile assets/js assets/styles/base.scss assets/styles/darkmode.scss config.toml data `
- Styling changes
	- start with `assets/styles/custom.scss`
	- continue with partials in `layouts/partials`
- [x] What's up with the graph? 
	- This probably is just related to the way that it does the updates and probably won't be a problem when deployed, good day
