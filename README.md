

# BASIC API USING ELASTICSEARCH AS BACKEND

A barebones Node.js app using [Express 4](http://expressjs.com/) and [ElasticSearch](https://www.elastic.co/products/elasticsearch/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [ElasticSearch](https://www.elastic.co/products/elasticsearch/) installed.

```sh
git clone git@github.com/andrew-oko-odion/crud_api.git
cd crud_api
npm install
npm start
```

Endpoints 

```sh
	'/movies/elastic/ping' --- Ping the elasticsearch server for response. 
	'/movies/elastic/index/init'  --- Initializes elasticsearch with a index.
	'/movies/elastic/index/check' --- Check if an index exists
	'/movies/elastic/index/mapping' --- Defines Mapping properties for document.
	'/movies/elastic/add' --- Adds a new Document to an index. 
	'/movies/elastic/update' --- Update an existing document 
'/movies/elastic/search' --- Search an Index for a document record.
'/movies/elastic/delete-document' --- Deletes a document form the specified Index. 
'/movies/elastic/delete_all' --- Deletes a Index form elasticsearch. 
```
Your Express server should be running on [localhost:3000](http://localhost:3000/).


