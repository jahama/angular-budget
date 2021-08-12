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
```
