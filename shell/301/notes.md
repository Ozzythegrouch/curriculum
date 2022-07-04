# Shell 301
## Execute custom commands defined in shell script

### Converting a shell script to be a custom CLI command

- Define the script
- Save the file with a `.sh` extension
- Run the script to make sure it works --> `sh <somefile>.sh`
- Change its permissions to be an executable with `chmod 755 <somefile>.sh`
- Remove the `.sh` extension
- place the executable in a **~/ .bin** directory (create the directory if it does not exist already)
- Add **~/ .bin** to the PATH
- Restart or reset the CLI
- Run the command from the CLI using the filename as the command itself

#!/bin/bash 
- Starts a bash file

