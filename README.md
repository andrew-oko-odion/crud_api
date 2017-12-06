

# BASIC API USING ELASTICSEARCH AS BACKEND

A barebones Node.js app using [Express 4](http://expressjs.com/) and [ElasticSearch](https://www.elastic.co/products/elasticsearch/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [ElasticSearch](https://www.elastic.co/products/elasticsearch/) installed.

```sh
git clone git@github.com/andrew-oko-odion/crud_api.git
cd crud_api
npm install
node app.js
```

Your Express server should be running on [localhost:3000](http://localhost:3000/).

Endpoints 
```
	'/movies/elastic/ping'
	
	Ping the elasticsearch server for response. 
	Parameters: index_name 
	
	'/movies/elastic/index/init'
	
	Initializes elasticsearch with a index.
	Parameters: index_name 
	
	'/movies/elastic/index/check'
	
	Check if an index exists
	Parameters: index_name 
	
	'/movies/elastic/index/mapping'
	
	Defines Mapping properties for document.
	Parameters: index_name
	Parameters: payload
	
	'/movies/elastic/add'
	
	Adds a new Document to an index.
	Parameters: index_name
	Parameters: payload 
	Parameters: _id
	Parameters: type
	
	'/movies/elastic/update'
	
	Update an existing document 
	Parameters: index_name
	Parameters: payload 
	Parameters: _id
	Parameters: type

	'/movies/elastic/search'

	Search an Index for a document record.
	Parameters: index_name
	Parameters: payload 
	Parameters: type

	'/movies/elastic/delete-document'

	Deletes a document form the specified Index.
	Parameters: index_name
	Parameters: _id
	Parameters: type

	'/movies/elastic/delete_all'

	Deletes a Index form elasticsearch. 
```


