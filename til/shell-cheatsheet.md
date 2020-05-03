---
title: Shell cheatsheet
abstract: Few commands to speed up development using the shell.
quote: Be kind whenever possible. It is always possible.
quoteAuthor: Dalai Lama
date: 2020-05-03
readingTime: 1 mins
mainTag: shell
tags:
  - shell
---

Few commands I found very useful during development.

| Command                               | Description                                             |
|---------------------------------------|:--------------------------------------------------------|
| `man ls`                              | show manual for command 'ls'                            |
| `wc <file>`                           | words count                                             |
| `rm <file>`                           | remove/delete file                                      |
| `rm -i <file>`                        | remove/delete file (interactive, ask confirm)           |
| `rmdir <directory>`                   | remove/delete directory                                 |
| `rm -R <directory>`                   | remove/delete directory and subdirectory                |
| `rm -iR <directory>`                  | remove/delete directory (interactive)                   |
| `cp <current location> <destination>` | copy files                                              |
| `chmod -R 755 <folder>`               | add writing permission to folder                        |
| `pwd`                                 | present working directory / Print Working Directory     |
| `cd`                                  | change directory                                        |
| `mkdir`                               | make directory                                          |
| `ls`                                  | list files                                              |
| `ls -l`                               | list files (long form)                                  |
| `ls -lah`                             | list files (long form, all also hidden, human readable) |
| `touch [filename]`                    | create file                                             |
| `chown`                               | change owner                                            |
| `cat <file>`                          | show file                                               |
| `<cmd> > <file>`                      | direct the output of "cmd" into "file"                  |
| `grep -rl "<text>" <dir>`             | search for all files containing <text> inside <dir>     |
| `ln`                                  | symbolic link                                           |
| `alias`                               | show available alias on shell                           |
| `cd -`                                | go to previous folder                                   |
