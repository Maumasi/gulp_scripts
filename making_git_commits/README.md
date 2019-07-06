
# Quickly add, commit with comment, and push
---
<b>

## Requirements: NPM/NPX
Command in the Terminal:
```bash
npm install gulp shelljs yargs --save
```
---
<b>

This Gulpfile.js is a script that ``` git add .``` then ```git commit``` then finally ```git push [branch] [remote]```.
---
<b>

## Message types:

Messages are formatted to to show which **BRANCH** changes were committed to. Which **USER** made the commit. The message type, **AUTO-COMMIT, MESSAGE, HOTFIX, FEATURE, STABLE,** or **BROKEN**.
<b>

To add a message to a commit, provide the **-m** option.
<b>

### Setting a specific commit header:
Message options are:
* **-s**: *STABLE*
* **-b**: *BROKEN*
* **-f**: *FEATURE*
* **-x**: *HOTFIX*
* *Note: if no options are provided an auto-commit __AUTO-COMMIT__ *message header will be provided.*
<b>

Commands in the Terminal:
```bash
# Pushing a commit with a message
gulp push -m "setting up gulp automation"
# output
# [BRANCH] master | [USER] Liu Maumasi :: MESSAGE :: setting up gulp automation


# STABLE with message
gulp push -sm "setting up gulp automation"
# output
# [BRANCH] master | [USER] Liu Maumasi :: STABLE :: setting up gulp automation


# BROKEN with message
gulp push -bm "feature not working as expected"
# output
# [BRANCH] master | [USER] Liu Maumasi :: BROKEN :: feature not working as expected


# AUTO-COMMIT
gulp push
# output
# [BRANCH] master | [USER] Liu Maumasi :: AUTO-COMMIT :: no message for commit.


# AUTO-COMMIT message with option header
gulp push -s
# output
# [BRANCH] master | [USER] Liu Maumasi :: STABLE :: no message for commit.
```
---
<b>

## Generated message:

The **[BRANCH]** and **[USER]** components of the message are auto generated and will be generated from the current active branch and the git user assigned when to the GIT instance on the machine.
<b>

When pushing up to a remote branch the branch must be hardcoded at this time. It will become an option in the future.
