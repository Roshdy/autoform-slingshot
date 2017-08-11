Package.describe({
  name: "roshdy:autoform-slingshot",
  summary: "File upload for AutoForm with Slingshot",
  description: "File upload for AutoForm with Slingshot",
  version: "1.1.2",
  git: "https://github.com/Roshdy/meteor-autoform-slingshot"
});

Package.onUse(function(api) {
  configure(api);
});

function configure(api) {
  api.versionsFrom('METEOR@1.2');

  api.use([
    'coffeescript',
    'underscore',
    'templating',
    'less',
    'jquery',
    'aldeed:autoform@5.8.1',
    'edgee:slingshot@0.7.1'
  ], ['client', 'server']);

  api.imply([
    'aldeed:autoform',
    'edgee:slingshot'
  ]);

  api.addFiles([
    'lib/client/autoform-slingshot.html',
    //'lib/client/autoform-slingshot.less',
    'lib/client/autoform-slingshot.coffee'
  ], 'client');

  api.export('SwapTemp');
}
