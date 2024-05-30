## Virtualization

With virtualization, we can distribute the physical resources of one machine to multiple virtual machines, each having
its own operating system and applications.

### Virtual Terminologies

- Host OS: The operating system that runs on the physical machine.
- Guest OS: The operating system that runs on the virtual machine.
- VM: Virtual Machine.
- Snapshot: A snapshot is a copy of the virtual machine's disk file at a specific point in time.
- Hypervisor: A hypervisor is a software that creates and runs virtual machines. There are 2 types of hypervisors:
  - Type 1: Bare-metal hypervisor. It runs directly on the hardware.
  - Type 2: Hosted hypervisor. It runs on the host operating system as a software.

👍 Thumb rule: If we are to automate something, we should be able to do it manually first.

### Creating and managing virtual machines with Vagrant and VMWare

We are using Vagrant to create virtual machines. Vagrant is a tool that helps in creating and managing virtual machines. VMWare, another tool we'll be using, is a type 2 hypervisor, which means it runs on the host operating system as a software.

With Vagrant and VMWare, we're creating Ubuntu and Fedora virtual machines (Fedora is similar to CentOS).

### Vagrantfile

```bash
  Vagrant.configure("2") do |config|
  # box is the base image of the virtual machine, and if we assign a box, it will download the image from the internet and create a VM from that
  # We can find the available boxes at https://app.vagrantup.com/boxes/search
  config.vm.box = "spox/ubuntu-arm"
  # the version is only for the specified box, if not specified, it will take the latest version
  config.vm.box_version = "1.0.0"
  # IP address of the virtual machine
  config.vm.network "private_network", ip: "192.168.56.11"
  config.vm.provider "vmware_desktop" do |vmware|
    vmware.gui = true
    vmware.allowlist_verified = true
   end
 end
```

After creating the Vagrantfile, we can run `vagrant up` to create the virtual machine.
And to access the virtual machine, we can run `vagrant ssh` to SSH into the virtual machine.

Now in the terminal, we can see from the prompt we are in the virtual machine `vagrant@vagrant:~$`.

We can `sudo -i` to switch to root user, and `exit` to exit the root user, and `exit` again to exit the virtual machine.

We can run `vagrant status` to see the status of the virtual machine, and `vagrant halt` to stop the virtual machine.

We can delete the virtual machine by running `vagrant destroy`. When running `vagrant up` again, it will create a new virtual machine.

## Linux

Everything is file in Linux.

### Understanding the prompt

In the prompt `vagrant@vagrant:~$`, the first `vagrant` is the username, and the second `vagrant` is the hostname. The `~` symbol indicates the home directory, and the `$` symbol indicates the user is not root.

If we run `sudo -i`, the prompt will change to `root@vagrant:~#`, where `root` is the username, and `vagrant` is the hostname, and `#` indicates this is the root user's shell.

### Commands and File Systems

- Home directory: /root for root user, /home/username for other users.
- User executables: /bin, /usr/bin, /usr/local/bin
- System executables: /sbin, /usr/sbin, /usr/local/sbin
- Other mountpoints: /mnt, /media
- Configuration files: /etc
- Temporary files: /tmp
- Kernels and bootLoader: /boot
- Server data: /var, /srv
- System information: /proc, /sys
- Shared libraries: /lib, /usr/lib, /usr/local/lib

### Some important commands

- `whoami`: To know the current user.
- `sudo -i`: To switch to root user.
- `cd /` will take us to the root directory, which is different from the root user's home directory `/root`. `cd ` will take us to the home directory of the current user.

  ```bash
  echo@UbuntuM1:~$ ls
  Desktop  Documents  Downloads  Music  Pictures  Public  snap  Templates  Videos
  echo@UbuntuM1:~$ sudo -i
  [sudo] password for echo:
  root@UbuntuM1:~# whoami
  rootß
  root@UbuntuM1:~# pwd
  /root
  root@UbuntuM1:~# cd /
  root@UbuntuM1:/# ls
  bin   cdrom  etc   lib         media  opt   root  sbin  srv       sys  usr
  boot  dev    home  lost+found  mnt    proc  run   snap  swapfile  tmp  var
  ```

### Some more commands

The general syntax of a command is `command -options arguments`. Sometimes we can just run `command` without any options or arguments, like `ls`, `pwd`, `whoami`. One command can have many options, to see the options, we can use `command --help` or `man command`. If the option is just a single letter, it's usually just a single dash, like `ls -l`, but if it's a word, it's usually double dash, like `ls --help`.

We can do multiple things at ones with regular expressions, like `mv *.txt dir1` to move all files with `.txt` extension to `dir1`.

- `mkdir dir1` to create a directory. `mkdir -p dir1/dir2` to create a nested directory.
- `touch newDoc.txt` to create a file. We can also create multiple files at once by running `touch file{1..10}.txt`
- `cp file1.txt dir1` to copy a file to a directory. To copy a directory, we can run `cp -r dir1 dir2`
- `mv file1.txt dir1` to move a file to a directory. To move a directory, we can run `mv dir1 dir2`, we can also rename a file by running `mv file1.txt file2.txt`
- `rm file1.txt` to remove a file. To remove a directory, we can run `rm -r dir1`. We can remove all files with a specific extension by running `rm -r *`. A dangerous command is `rm -rf *`, `rf` stands for recursive and force, which will remove all files and directories in the current directory.
- `history` to see the history of commands we've run.

### vim editor

To install vim on fedora, we can run `sudo yum install vim -y`

3 modes in vim:

- Command mode: default mode, to enter command mode from insert mode, press `esc`
- Insert mode: to insert text, press `i` to enter insert mode
- Extended mode: to enter extended mode, press `:`, to save and exit, press `:wq`, to exit without saving, press `:q!`

- `o` to insert a new line below the current line
- `:se nu` to show line numbers
- `G` to go to the end of the file, `gg` to go to the beginning of the file
- `yy` to copy a line, `p` to paste a line below the current line, `P` to paste a line above the current line
- `dd` to delete a line, `u` to undo. When doing `dd`, the line is copied to the clipboard, so we can paste it with `p
- To manipulate multiple lines, we can use `3yy` to copy 3 lines, `3p` to paste 3 lines, `3dd` to delete 3 lines
- `/` to search for a word, `n` to go to the next occurrence, `N` to go to the previous occurrence

### File Types

Everyting is file in Linux, and files can be of different types:

To see details about the files, we can use `ls -l`: the first character indicates the file type, and the next 9 characters indicate the permissions. If it starts with `-`, it's a regular file, if it starts with `d`, it's a directory, if it starts with `l` (shortcut we have), it's a symbolic link, `c` is for character device(like keyboard. Remember? Everything is filfe in Linux!), `b` is for block device(block disk), `s` is for socket, `p` is for pipe.

We can use `file filename` to see the type of the file.

#### Link Operations

We can use `ln -s whole/path/to/file1 file2` to create a symbolic link, to use the link, we can run `cat file2`. If we move or delete the original file, the link will be broken, but when we recreate the original file, the link will work again automatically.

We can remove a link with `rm` command or `unlink` command with the link name.

To see the timestamp of the file when it's last modified, we can use `ls -lt` command. It will show the latest modified file first, we can also reverse the order with `ls -ltr`.

### Filters

#### Take `grep` as an example

`grep keyword filename` to search for a keyword in a file, the line containing the keyword will be displayed. (Note that Linux is case-sensitive, so searching for `keyword` will not match `Keyword`, but we could also use `grep -i keyword filename` to ignore the case)

- The default direction is `<`, so `grep keyword filename` is the same as `grep keyword < filename`, means the input is from the file.
- We can use `grep` with `*` to search for a keyword in multiple files, like `grep keyword *`, if we wanna go into the subdirectories, we can use `grep -r  keyword *`
- There's also a `grep -v` option to search for lines that don't contain the keyword.

#### Other commands

- `less filename` to view the content of a file, `more filename` is similar to `less`, but `less` is more powerful.
- `head filename` to see the first 10 lines of a file, `tail filename` to see the last 10 lines of a file, `tail -f filename` to see the last 10 lines of a file and keep watching the file for changes, which is useful to check the logs
- `/etc/passwd` file contains the information of all users, we can check the user information with `cat /etc/passwd`. As different columns are separated by `:`, we can use `cut -d: -f1 /etc/passwd` to get the first column, which is the username. `cut` is a command to make use of delimiters, `-d` is the delimiter, and `-f` is the field (1-based index).
- If we don't have a specific delimiter, we can use `awk` command, like `awk -F ' ' '{print $1}' /etc/passwd`, which will print the first column of the file. `awk` is a powerful command to manipulate text files, especially in searching.

- Search and replace: in vim, we can use `:%s/old/new` to replace `old` with `new` in the whole file, but just once in a line. To replace all occurrences in a line, we can use `:%s/old/new/g`. We can also use the `sed` command to replace text in a file, like `sed 's/old/new/g' filename`. But this won't change the original file, to change the original file, we can use `sed -i 's/old/new/g' filename`.

### Redirections

The default output, aka 'standard output', is our monitor, but we could redirect it to a file with `>`, like `uptime > uptime.txt`. We can also append the output to a file with `>>`, like `uptime >> uptime.txt`.

If we don not want to see the output, we can redirect it to `/dev/null`, which is like a black hole, like `uptime > /dev/null`. If we made a mistake but we don't want to see the error message, we can redirect the error message to `/dev/null`, like `uptime 2> /dev/null`. (2 is for standard error, 1 is for standard output, the default value). If we wanna direct everything, we can use `uptime &> /dev/null`.

We can also redirect `/dev/null` to a file, like `uptime.txt < /dev/null`, to clear the file.

### Pipes

- Taking `wc -l` as an example, `wc` is a command to count. We can use `wc -l filename` to count the number of lines in a file. We can also use `wc -l < filename` to count the number of lines in a file, but the filename is not displayed. The `<` means the input of the command is from the file.
- How can we use the pipe? We can use `|` to connect the output of one command to the input of another command, like `ls -l | wc -l`, which will count the number of files in the current directory (bc each file is a line in the output of `ls -l`).
- Searching a file
  - Real-time search: `find <directory> -name <filename>` to search for a file in a directory, like `find / -name passwd`, which will search for the file named `passwd` in the root directory.
  - Static search with `locate`: `locate passwd` to search for the file named `passwd`, but it's not real-time, it's based on the database, so we need to update the database with `updatedb` before searching.

### Users and Groups

- Users and groups are user to control the access to the files and directories. Every file and every process has an owner and a group.
- Username and uid are stored in `/etc/passwd`, password and other information are stored in `/etc/shadow` encrypted, group information is stored in `/etc/group`.

```
head -1 /etc/passwd
root:x:0:0:root:/root:/bin/bash
```

- The first column is the username, the second column is the password (shafow file encrypted), the third column is the uid, the fourth column is the gid (group id), the fifth column is the comment, the sixth column is the home directory, the seventh column is the login shell.

- To check groups, we can use `cat /etc/group`, the first column is the group name, the second column is the password, the third column is the gid, the fourth column is the users in the group.

```
id vagrant
uid=1000(vagrant) gid=1000(vagrant) groups=1000(vagrant)
```

- We can create users with `useradd username`, and create groups with `groupadd groupname`. We can add users to groups with `usermod -aG groupname username`, or edit the `/etc/group` file directly. We can also delete users with `userdel username`, and delete groups with `groupdel groupname`. If we wanna remove the home directory of the user, we can use `userdel -r username`.
- We can change the password with `passwd username`. But as a root user, we could switch to another user with `su username` without a password, and switch back with `exit`.
- Another useful command is `lsof`, which stands for list open files, to see the files opened by a user, like `lsof -u username`. This command could also help us tell which user is logged in.
