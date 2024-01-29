# Missing Semester of Your CS Education

Study notes for the [Missing Semester of Your CS Education](https://missing.csail.mit.edu/) course.

## Table of Contents

1. [The Shell](#the-shell)
2. [Shell Tools and Scripting](#shell-tools-and-scripting)
3. [Editors (Vim)](#editors-vim)
4. [Data Wrangling](#data-wrangling)
5. [Command-line Environment](#command-line-environment)
6. [Version Control (Git)](#version-control-git)
7. [Debugging and Profiling](#debugging-and-profiling)
8. [Metaprogramming](#metaprogramming)
9. [Security and Cryptography](#security-and-cryptography)

## The Shell <a name="the-shell"></a>

The shell allows us to interact with the operating system, without the limitations of a GUI.

Most platforms have a default shell, but there are many alternatives. The most common shell is called `bash`, which stands for Bourne Again Shell. It is the default shell for most Linux distributions and macOS.

### Shell Commands

The shell is a command line interface (CLI). This means that we interact with the shell by typing commands as text and receiving text output.

Commands can have arguments. If the argument contains spaces, it must be surrounded by quotes. We can also escape a single space with a backslash.

To clear the terminal: `clear`, `ctrl + l` or `cmd + k`

### Environment Variables

> But how does the shell know what these commands are supposed to do?

It actually has a list of directories that it searches through to find the command. This list is stored in an environment variable called `PATH`. We can view the current value of `PATH` by running `echo $PATH`.

There's a command called `which`, which will tell us the Path of a command. For example, `which echo` will tell us where the `echo` command is located. This is the same command that the shell will run when we type `echo`.

### What is a Path?

Path is a way to name the location of a file or directory. On MacOS and Linux, the path is separated by a forward slash (`/`). On Windows, the path is separated by a backslash (`\`).

On Linux and MacOS, all absolute paths start with a forward slash (`/`). This is called the root directory.

There are also relative paths, which are relative to the current directory. The current directory is represented by a single dot (`.`). The parent directory is represented by two dots (`..`).

### Commands for Navigating the File System

> To find out the usage of a command we can use `man` command to see the manual. For example, `man ls` will show the manual for the `ls` command. We can hit `q` to quit the manual.

- We can use the command `pwd` to print the current working directory.
- We can use the command `cd` to change the current working directory.
- We can use the command `ls` to list the contents of a directory.
  - `ls -a` will list all files, including hidden files.
  - `ls -l` will list all files in long format, with the permission info.
- To move up one directory, we can use `cd ..`
- To move to the root directory, we can use `cd /`
- To go back to the previous directory, we can use `cd -`
- To move to the home directory of the logged in user, we can use `cd ~` (the tilda)

We can also move the files.

- `mv` command is used to move files and directories. It can also be used to rename files and directories. For example, `mv file1.txt file2.txt` will rename `file1.txt` to `file2.txt`. If we wanna move it, we can add the destination path as the third argument. For example, `mv file1.txt file2.txt /tmp` will move `file1.txt` and `file2.txt` to the `/tmp` directory.
- `cp` command is used to copy files and directories. It takes two arguments: the source and the destination. For example, `cp file1.txt file2.txt` will copy `file1.txt` to `file2.txt`. If we wanna copy it to a directory, we can add the destination path as the third argument. For example, `cp file1.txt file2.txt /tmp` will copy `file1.txt` and `file2.txt` to the `/tmp` directory.
- `rm` command is used to remove files and directories.
  - `rm` is by default not recursive. It takes one argument (only file, not dir): the path to the file to remove. `rm file1.txt`
  - If we wanna remove a directory, we can add the `-r` flag. For example, `rm -r directory1` will remove `directory1` and all of its contents.
  - `rmdir` will remove an empty directory.
- `mkdir` command is used to create directories.
- to open a file in the default editor, we can use `open` command. For example, `open file1.txt` will open `file1.txt` in the default editor.

### I/O Streams Redirection

- `<` means to redirect the input stream to a file. For example, `cat < file1.txt` will print the content of `file1.txt`.
- `>` means to redirect the output stream to a file. For example, `echo "Hello" > file1.txt` will write `Hello` to `file1.txt`. If the file doesn't exist, it will be created. If the file exists, it will be overwritten.
- So we can use `<` and `>` together to copy a file. For example, `cat < file1.txt > file2.txt` will copy `file1.txt` to `file2.txt`.
- `>>` means to append the output stream to a file. For example, `echo "World" >> file1.txt` will append `World` to `file1.txt`.
- `|` pipe character means to pipe the output to the left, and use it as the input to the right. For example, `ls -l / | tail -n10` will list the last 10 lines of the output of `ls -l /`.

### The root user and sudo

The root user is a 'superuser' that has permission to do anything, including deleting the entire operating system. So we should be careful when using the root user. The root user has a user ID of 0.

Most of the time, we're not the root user. We're a regular user. We can check our user ID by running `id -u`.

We can use the `sudo` command to run a command as the root user.

To change the brightness of the screen, we can use `echo 1060 | sudo tee /sys/class/backlight/intel_backlight/brightness`, instead of `sudo echo 1060 > /sys/class/backlight/intel_backlight/brightness`, because we don't need to run `sudo` for the `echo` command, but we need to run `sudo` for the `tee` command.

## Shell Tools and Scripting <a name="shell-tools-and-scripting"></a>

Spaces are really critical in shell scripting. By `foo=bar`, we're assigning the value `bar` to the variable `foo`. If we add a space, `foo = bar`, we're running the command `foo` with the argument `=`, and `bar`.

> Single and double quotes are different when it comes to variable expansion. Single quotes will not expand the variables, but double quotes will. For example, `echo 'Value is $foo'` will print `Value is $foo`, but `echo "Value is $foo"` will print `Value is bar`.

We can also define functions in shell scripts.

```sh
mcd(){
  ## $1 is like argv[1] in C, meaning the first argument passed to the function
    mkdir -p "$1"
    cd "$1" ## double quotes are used to prevent word splitting, here we don't need it because we're using $1
}
```

After we define the function in `mcd.sh`, we can run `source mcd.sh` to load the function into the current shell. Then we can run `mcd test` to create a directory called `test` and move into it.

Dollar signs can do other things: `$?` is the exit code of the last command (0 or 1), `$_` is the last argument of the previous command.

We can also get the last argument with `!!`, e.g., when we have no permission to run a command, we can run `sudo !!` to run the command as the root user.

We can concatenate commands with `&&`, e.g., `cd /tmp && ls -l`. Also with semicolon, e.g., `cd /tmp; ls -l`.

We can also get an output of a command into a variable, e.g., `output=$(pwd)`. We can also use backticks, e.g., `output=`pwd``.

Process substitution is a way to pass the output of a command as an input to another command. For example, `diff <(ls foo) <(ls bar)` will compare the output of `ls foo` and `ls bar`. We can also use `cat` to print the output of a command, e.g., `cat <(ls) < (ls ..)`.

We can use wildcards to match files and directories. For example, `ls *.txt` will list all files with the `.txt` extension. `ls file?.txt` will list all files with the `.txt` extension and the name `file` with one character after it.

We can easily do a lot of things with our shell commands. For example, `convert image.png image.jpg` will convert `image.png` to `image.jpg`. `convert image.{png, jpg}` will do the same thing.

Curly braces can also be used to generate sequences. For example, `echo {1..10}` will print `1 2 3 4 5 6 7 8 9 10`. `echo {a..z}` will print `a b c d e f g h i j k l m n o p q r s t u v w x y z`. `touch` command is used to create an empty file. For example, `touch file{1..10}.txt` will create 10 empty files.

we can use the `shellcheck` command to check our shell scripts for errors.

There's a useful tool called `tldr`, which will show us the brief usage of a command. For example, `tldr ls` will show us the brief usage of the `ls` command.

There's a command `find` that can be used to find files and directories. For example, `find . -name src -type d` will find all directories named `src` in the current directory. `find . -name "*.txt"` will find all files with the `.txt` extension in the current directory.

`find` can also do something: `find . -name "*.txt" -exec rm {} \;` will find all files with the `.txt` extension in the current directory and remove them.

`grep` is a command that can be used to search for text in files. For example, `grep "foo" file1.txt` will search for `foo` in `file1.txt`.
