# CLI 202

## Customize the command prompt in zsh with the parebt directory in green and a timestamp

Add this code to **.zshrc**

```
. ~/.alias
# ------------------------------------------------------------------------------# Import aliases
# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# CUSTOMIZE THE COMMMAND PROMPT
# ------------------------------------------------------------------------------
# '%{...%} non-printable characters must be wrapped like this in order for line wrapping to work as expected
# `%F{} seta a foreground (i.e. text) color
# ~%1~ shows the current directory only (~ removes everything above the current directory)
# `%%` shows the prompts as `%` (it appears that each new command must be preceded by ` %`)
# `RPrompt` places characters at the right-hand side of the terminal
# `%F{235} is a foreground color (i.e. text) of light gray
# `D{%k:%M:%S}` renders a timestamp in 24-hr format
# ------------------------------------------------------------------------------
# PROMPT='%n~$'
# ------------------------------------------------------------------------------

```