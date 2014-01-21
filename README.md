# identity

define [holon](en.wikipedia.org/wiki/Holon_%28philosophy%29)ic identities for people

## design

holonic relationships can be described through a [directed acyclic graph](http://en.wikipedia.org/wiki/Directed_acyclic_graph) where
  - each vertex is a holon
  - each directed edge is an inclusion of a holon in another holon

## implementation

- holons are stored on a [JSON-LD graph database](https://github.com/mcollina/levelgraph-jsonld)
- follows [Web Identity spec](https://web-payments.org/specs/source/web-identity/)
- exports [BrowserID](https://developer.mozilla.org/en-US/Persona)

