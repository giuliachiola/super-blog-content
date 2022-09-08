---
title: Fix developer path after upgrade to MacOS Catalina
abstract: My git commands did not work as expected after I upgraded to MacOS Catalina, here is how to fix the developer path error.
quote: When a new day begins, <br class="u-ty-break-t">dare to smile gratefully
quoteAuthor: Steve Maraboli

date: 2021-01-24

permalink: posts/fix-developer-path-after-upgrade-to-macos-catalina/
crossPostDEV: https://dev.to/giulia_chiola/fix-developer-path-after-upgrade-to-macos-catalina-32in
crossPostHashnode: https://giuliachiola.hashnode.dev/fix-developer-path-after-upgrade-to-macos-catalina

mainTag: mac-os
tags:
  - mac-os
  - git
id: 12
---

After MacOS system upgrade to [Catalina](https://www.apple.com/macos/catalina/), on my computer **git** did not work anymore. If you happened the same, the following steps resolve it for me!

Running any of git commands, you would probably got this error

```shell
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```

To fix it, you had to run

```shell
xcode-select --install
```

The "xcode-select" command requires the command line developer tools.

A prompt will appear asking you to install it now.

<img loading="lazy" src="https://res.cloudinary.com/giuliachiola/image/upload/v1585479297/super-blog/012-mac-os-catalina/xcode-prompt_n6obrx.jpg" alt="xcode-prompt" width="1146" height="604">

When installation is completed, git should work as expected! 😎

> 📚 More info
>
> [Invalid active developer path](https://apple.stackexchange.com/questions/254380/why-am-i-getting-an-invalid-active-developer-path-when-attempting-to-use-git-a)
