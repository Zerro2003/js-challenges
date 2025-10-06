PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git add home.html
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash
Saved working directory and index state WIP on dev: f27b493 creating new proj
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash list
stash@{0}: WIP on dev: f27b493 creating new proj
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git add about.html
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash
Saved working directory and index state WIP on dev: f27b493 creating new proj
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git add team.html
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash
Saved working directory and index state WIP on dev: f27b493 creating new proj
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash list
stash@{0}: WIP on dev: f27b493 creating new proj
stash@{1}: WIP on dev: f27b493 creating new proj
stash@{2}: WIP on dev: f27b493 creating new proj
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash pop 'stash@{1}'
On branch dev
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   about.html

Dropped stash@{1} (e492e4ab477d3cab35fd2d91cc5239e1ca6e2611)
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash pop 'stash@{1}'
On branch dev
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   about.html
        new file:   home.html

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    indx.html

Dropped stash@{1} (496ce46603a6b8e6200ba21de39b8aa77c2f4bb5)
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git add .
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git commit -m "creating about and home pages"
[dev 79688e4] creating about and home pages
 3 files changed, 20 insertions(+)
 create mode 100644 about.html
 create mode 100644 home.html
 delete mode 100644 indx.html
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git push 
fatal: The current branch dev has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin dev

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git push origin main
Everything up-to-date
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git push origin dev
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 16 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 505 bytes | 252.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
remote:
remote: Create a pull request for 'dev' on GitHub by visiting:
remote:      https://github.com/Zerro2003/Gym-Git-Exercise-Solutions/pull/new/dev
remote:
To https://github.com/Zerro2003/Gym-Git-Exercise-Solutions.git
 * [new branch]      dev -> dev
PS C:\Users\user\Downloads\Gym-Git-Exercise-Solutions> git stash pop
On branch dev
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   team.html

Dropped refs/stash@{0} (780fc8f2de25edd98cc83327375a70d5c0870b2d)