# [AngularBudget](https://angularbuilders.github.io/angular-budget/)

## Manage budgets for projects.

### Sample app for learning Angular testing

This sample project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

[Read docs](https://github.com/angularbuilders/angular-budget/blob/main/docs/cli.md) to see how it was generated.

Run `npm i` after clone or fork

## Workflows

Run `npm start` for a dev server.

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run release` to create a new release with semantic versions and a change file

Run `npm run deply` to deploy to gitHub Pages

## Architecture

Simple repository, organized in modules:

- CoreModule: contains services with app wide related logic
- SharedModule: components, directives and pipes to be shared in pages
- Domain/: Modules for page components lazy loaded by routes

## Functionality

Basic CRUD of projects.

### To Be implemented

To be done at the classroom or used like an exercise.

- A project should have a list to tasks to be done.
- A project should have a list of economic transactions.

## Credits

Created by [Alberto Basalo](https://twitter.com/albertobasalo) to be used a sample in his Angular Courses.
Part of [Angular.builders](https://www.angular.builders)
