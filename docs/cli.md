```bash
npm i -g @angular/cli@latest
ng new angular-budget --interactive=false --prefix=ab --routing=true --style=sass
cd angular-budget

npm i -D eslint @typescript-eslint/eslint-plugin
npm i -D prettier eslint-plugin-prettier prettier-eslint eslint-config-prettier
npm i -D standard-version
ng add angular-cli-ghpages
npm i rxjs@7
npm i bulma

ng g m core/layout
ng g c core/layout/footer --export=true
ng g c core/layout/header --export=true
ng g m domain/about --module=app --route=about --routing
ng g m domain/home --module=app --route=home --routing
ng g m domain/login --module=app --route=login --routing
ng g m shared/ui
ng g c shared/ui/page --export=true

ng g s domain/home/home
ng g c domain/home/projects
ng g m core/global
ng g m shared/data
ng g s shared/data/projects
ng g c shared/ui/card --export=true

ng g c shared/ui/tag --export=true
ng g pipe shared/ui/status --export=true
ng g m shared/util

ng g s shared/data/tasks
ng g class shared/util/store
ng g s domain/home/homeStore
```
