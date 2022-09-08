---
title: Shell cheatsheet
abstract: Few commands to speed up development using the shell.
quote: Be kind whenever possible. <br class="u-ty-break-t">It is always possible
quoteAuthor: Dalai Lama

date: 2021-01-20

permalink: posts/shell-cheatsheet/
crossPostDEV: https://dev.to/giulia_chiola/shell-cheatsheet-46jo
crossPostHashnode: https://giuliachiola.hashnode.dev/shell-cheatsheet

mainTag: shell
tags:
  - shell
id: 17
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
| `pwd`                                 | present working directory / print working directory     |
| `cd`                                  | change directory                                        |
| `mkdir`                               | make directory                                          |
| `ls`                                  | list files                                              |
| `ls -l`                               | list files (long form)                                  |
| `ls -lah`                             | list files (long form, all also hidden, human readable) |
| `touch [filename]`                    | create file                                             |
| `chown`                               | change owner                                            |
| `cat <file>`                          | show file                                               |
| `<cmd> > <file>`                      | direct the output of "cmd" into "file"                  |
| `grep -rl "<text>" <dir>`             | search for all files containing `<text>` inside `<dir>` |
| `ln`                                  | symbolic link                                           |
| `alias`                               | show available alias on shell                           |
| `cd -`                                | go to the previous current directory                    |
| `ctrl` + `r`                          | advanced search (search any word in bash history)       |

<div class="s-giphy s-giphy--small-d">
  <video autoplay loop muted playsinline>
    <source src="https://i.giphy.com/media/LqafmeaBVxCRG/giphy.mp4" type="video/mp4">
  </video>
  <p><a href="https://giphy.com/gifs/mensweardog-cute-dog-LqafmeaBVxCRG">via GIPHY</a></p>
</div>
