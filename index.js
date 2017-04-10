module.exports = {

  loadPlugin: function() {

    module.exports = Object.assign(module.exports, {

      'migrator:migration:hook:require': function() {

        // We use ts-node because the official typescript module does not implement the register() method
        require('ts-node/register');

        /**
          * Return value of this hook can be both, pure value or a promise.
          */
        return {
          extensions: 'ts'
        };
      }
    });

    delete module.exports.loadPlugin;
  },
  name: 'typescript',
  hooks: [
    'migrator:migration:hook:require'
  ]
};
