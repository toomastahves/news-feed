[![Build Status](https://travis-ci.org/toomastahves/news-feed.svg?branch=master)](https://travis-ci.org/toomastahves/news-feed)
[![codecov](https://codecov.io/gh/toomastahves/news-feed/branch/master/graph/badge.svg)](https://codecov.io/gh/toomastahves/news-feed)
[![Dependency Status](https://david-dm.org/toomastahves/news-feed.svg)](https://david-dm.org/toomastahves/news-feed)
[![devDependency Status](https://david-dm.org/toomastahves/news-feed/dev-status.svg)](https://david-dm.org/toomastahves/news-feed#info=devDependencies)

### Setup and Configuration
Run:
```
npm install
npm start
http://localhost:1337/
```

---
### Functionality
Fetches news data from Postimees API.  
Fetches article image, title and description.  
Infinite scroll fetches 3 articles per request.  
Fetches list of sections and allows to change section.  

---
### Issues
Description is sometimes too long and does not fit fixed height of article. Refactor using flex-shrink and flex-grow.

---
### Todos
Write more unit tests.  
Implement proper error handling.  
Add page for reading article content.  
List comments.  
Add authentication.  
