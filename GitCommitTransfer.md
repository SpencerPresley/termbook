## Make a backup, ive tested this and it worked but good idea to be safe  

1. clone repo
2. cd into root folder of repo
3. run setup commands  

```bash
git log --author="coleb177"
```

and

```bash
chmod u+x filer.sh
```

4. Run [Filter Script](filter.sh) 

```bash
./filter.sh
```

5. push the changes 

run:  

```bash
git push origin --force --all
```

6. cleanup

remove backup references  

```bash
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d
```

cleanup other files  

```bash
rm -Rf .git/logs .git/refs/original
```




