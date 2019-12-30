---
title: Ubuntu
---

## Apt packages

<!-- {.-two-column} -->

### Quick apt cheatsheet

| Command                              | Description                    |
| ------------------------------------ | ------------------------------ |
| `apt install git`                    | Install a package 'git'        |
| `apt install --reinstall git`        | Reinstall a package            |
|                                      |                                |
| `apt remove git`                     | Uninstall 'git'                |
| `apt search git`                     | Search packages                |
|                                      |                                |
| `apt list --installed`               | List installed packages        |
| `apt list`                           | List all packages              |
|                                      |                                |
| `dpkg -s git`                        | Is 'git' installed?            |
| `dpkg -L git`                        | What does 'git' install?       |
| `dpkg -S /usr/bin/git`               | Who installed '/usr/bin/git'?  |
| `dpkg -i *.deb`                      | Install a deb file             |
|                                      |                                |
| `apt-cache rdepends --installed git` | What packages depend on 'git'? |

### List installed packages

```bash
apt list --installed
```

### Check if package is installed

```bash
dpkg -s qtbase5-dev
```

```
dpkg-query: package 'qtbase5-dev' is not installed
```

<!-- {.-setup} -->

### Query installed packages

```bash
apt search qt
```

#### or

```bash
dpkg-query -l '*qt*'
```

Checks what `qt` packages are installed.

### Who owns a package

```bash
dpkg -S /bin/bash
```

```bash
bash: /bin/bash
```

<!-- {.-setup} -->

Checks what package owns `/bin/bash`.

### What does a package contain

```bash
dpkg -L bash
# /etc
# /etc/bash.bashrc
# /bin
# /bin/bash
# /usr
# ...
```

Checks what files does the package `bash` provide.

## Services

<!-- {.-three-column} -->

### Services cheatsheet

| Command                      | Description       |
| ---------------------------- | ----------------- |
| `sudo service <svc> start`   | Start a service   |
| `sudo service <svc> stop`    | Stop a service    |
| `sudo service <svc> restart` | Restart a service |
|                              |                   |
| `sudo service --status-all`  | List services     |

### List services

```bash
systemctl
```

### Start/stop

```bash
service <service> stop
service <service> start
service <service> restart
```

Only for Ubuntu.
