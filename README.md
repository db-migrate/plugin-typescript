# Plugin-Typescript
A TypeScript plugin for db-migrate.

Usage is very simple. Simply install this plugin via `npm install db-migrate-plugin-typescript`
or if using yarn: `yarn add db-migrate-plugin-typescript` 

The plugin will automatically resolve and compile any `.ts` files in your migrations directory,
using your regular `tsconfig.json`

Do however note that this has no effect on generating new migrations.
Using `db-migrate create FooMigrations.ts` will not create a TypeScript migration file.
