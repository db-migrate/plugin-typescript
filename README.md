# Plugin-Typescript
A TypeScript plugin for db-migrate.

## Usage

Usage is very simple. Simply install this plugin via `npm install db-migrate-plugin-typescript`
or if using yarn: `yarn add db-migrate-plugin-typescript` 

The plugin will automatically resolve and compile any `.ts` files in your migrations directory,
using your regular `tsconfig.json`

Do however note that this has no effect on generating new migrations.
Using `db-migrate create FooMigrations.ts` will not create a TypeScript migration file.

## Immplementation Detail

The plugin hooks into the functionality of `db-migrate` itself. In this case it hooks into `migrator:migration:hook:require`, which in this case requires another transpiler (TypeScript) and registers also a new file extension (.ts). Make sure to name your migrations accordingly (ending with .ts).
