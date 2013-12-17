# identity

define holonic identities for people

## design

holonic relationships can be described through a [directed acyclic graph](http://en.wikipedia.org/wiki/Directed_acyclic_graph) where
  - each vertex is a holon
  - each directed edge is an inclusion of a holon in another holon

## implementation

- users are on [SQL database](http://bookshelfjs.org/)
- holonic relationships are on [graph database](https://github.com/brikteknologier/seraph-model)
- [HTTP keys](payswarm.com/specs/source/web-keys/)
- [OpenID Connect](http://openid.net/connect) or [BrowserID](https://developer.mozilla.org/en-US/Persona)

