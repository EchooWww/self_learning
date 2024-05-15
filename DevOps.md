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

### Filters & IO Redirection

#### Take `grep` as an example
`grep keyword filename` to search for a keyword in a file, the line containing the keyword will be displayed. (Note that Linux is case-sensitive, so searching for `keyword` will not match `Keyword`, but we could also use `grep -i keyword filename` to ignore the case)  

- The default direction is `<', so `grep keyword filename` is the same as `grep keyword < filename`, means the 