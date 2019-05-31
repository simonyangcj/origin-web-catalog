OpenShift Catalog Console Library
=========================
A component library created for the cataloging components for [The OpenShift Web Console](https://github.com/openshift/origin-web-console).

[![Build Status](https://travis-ci.org/openshift/origin-web-catalog.svg?branch=master)](https://travis-ci.org/openshift/origin-web-catalog)

## Translate step

```
1. use webpack to build
$ npm run build
2. add translate for html files, add gettext/gettextCatalog.getString for ts files
3. use grunt to generate pot file
$ grunt --gruntfile Gruntfile.translate.js
4. edit po file to generate po file
5. use grunt to generate translations-catalog.js file
$ grunt --gruntfile Gruntfile.translate.js
6. replace dist/orgin-web-catalog.js to origin-web-console/bower_components/origin-web-catalog/dist/orgin-web-catalog.js
7. replace dist/translations-catalog.js to origin-web-console/app/scripts/translations-catalog.js
7. origin-web-console rebuild
```

## Quick start

```
# install the dependencies with npm and bower
$ npm install
$ bower install

# build the library
$ npm run build
```

## Showcase Application

There is a showcase application used to help develop and view the existing components in the library.

```
# run the server
$ npm run start
```

Go to [https://localhost:9001](https://localhost:9001) in your browser. (though it should auto-launch)
This will watch for asset changes.

You will need to patch the web console oauth client to allow for port 9001:
```
$ oc login -u system:admin
$ oc patch oauthclient/openshift-web-console -p '{"redirectURIs":["https://localhost:9001/"]}'
```

Contributing
------------

#### Getting started
1. Install [Nodejs](http://nodejs.org/) and [npm](https://www.npmjs.org/)
2. Build the library with 'npm run build'
3. Run the test server with 'npm run start'
4. Launch a browser at https://localhost:9001/ this will watch for asset changes.

## Testing

### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test:watch`
