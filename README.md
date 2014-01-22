# identity

### WORK IN PROGRESS

define [holon](en.wikipedia.org/wiki/Holon_%28philosophy%29)ic identities for people

[![build status](https://travis-ci.org/holonomy/identity.png)](https://travis-ci.org/holonomy/identity)
[![coverage status](https://coveralls.io/repos/holonomy/identity/badge.png)](https://coveralls.io/r/holonomy/identity)
[![dependency status](https://david-dm.org/holonomy/identity.png?theme=shields.io)](https://david-dm.org/holonomy/identity)
[![devDependency status](https://david-dm.org/holonomy/identity/dev-status.png?theme=shields.io)](https://david-dm.org/holonomy/identity#info=devDependencies)

## design

- holons are described as [directed acyclic graph](http://en.wikipedia.org/wiki/Directed_acyclic_graph) using [linked data](http://json-ld.org/spec/latest/json-ld/).
  - leaf holons (those without subholons) are of type [foaf:Person](http://xmlns.com/foaf/spec/#term_Person)].
  - all other holons are of type [foaf:Group](http://xmlns.com/foaf/spec/#term_Group).
    - inclusion of a holon in another holon is expressed through the [foaf:member](foaf:member) property.
- holons are stored in a [graph database](https://github.com/mcollina/levelgraph-jsonld).
- all holons implement the [Web Identity spec](https://web-payments.org/specs/source/web-identity/).
  - all holons should export a [BrowserID](https://developer.mozilla.org/en-US/Persona)
  - this means even a foaf:Group is a first-class identity that you can authenticate with and execute commands as.
- other possible options:
  - [Organization Ontology spec](http://www.w3.org/TR/vocab-org/)
