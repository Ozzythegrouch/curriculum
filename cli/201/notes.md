# CLI 201 - Aliases

## Create Aliases to speed up workflow

Steps to configuring aliases(do the following in your own directory)
- `touch .alias`
- inside of **.alias** add alias with this format `alias gb = 'git branch'`
- Import **alias** into **.zshrc** or **bash_profile** with `. ~/.alias`(this should be at the top of your file)

zshrc profile on Mac
alias [some key] = "[path]"
alias gs = "git push"
reset terminal with source .zshrc
