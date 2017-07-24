# plugin-typescript
A TypeScript plugin for db-migrate.

## Usage
To use this plugin you need to use the latest `db-migrate` version (the one on the beta tree) and you need to have this plugin installed in your project (there must be an entry in your `package.json`). `db-migrate` will pick up on the plugin automatically if the entry in the `package.json` is found.

The plugin then hooks into functionality of `db-migrate` itself. In this case it hooks into `migrator:migration:hook:require`, which in this case requires another transpiler (TypeScript) and registers also a new file extension (.ts). Make sure to name your migrations accordingly (ending with .ts).
