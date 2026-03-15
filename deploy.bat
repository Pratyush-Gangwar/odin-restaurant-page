@echo off

git checkout gh-pages
git merge main --no-edit
call npm run build
git add dist -f

git commit -m "Deployment commit"
if %errorlevel% neq 0 (
    echo Nothing to commit.
)

git subtree push --prefix dist origin gh-pages
git checkout main

echo Deployment complete!