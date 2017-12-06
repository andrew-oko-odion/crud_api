var elasticService = require('./service');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Welcome to a smiple API example application on Express and Elastic search');
})

router.get('/elastic/ping', function(req, res){
    elasticService.ping(req, res);
})

router.post('/elastic/index/init', function(req, res){
    var index = req.param('index_name');
    elasticService.initIndex(req, res, index);
})

router.post('/elastic/index/check', function(req, res){
    // Check if Index exists already
    var index = req.param('index_name');
    elasticService.indexExists(req, res, index);
})

router.post('/elastic/index/mapping', function(req, res){
    //  Prepare index and its mapping
    var payload = req.param('payload');
    var index = req.param('index_name');
    elasticService.initMapping(req, res, index, payload);
    return null;
})

router.post('/elastic/add', function(req, res){
    //  Add a document to index
    var payload = req.param('payload');
    var index = req.param('index_name');
    var _id = req.param('_id');
    var docType = req.param('type');
    elasticService.addDocument(req, res, index, _id, docType, payload);
    return null; 
})

router.put('/elastic/update', function(req, res){
    //  Update a document
    var payload = req.param('payload');
    var index = req.param('index_name');
    var _id = req.param('_id');
    var docType = req.param('type');
    elasticService.updateDocument(req, res, index, _id, docType, payload);
    return null; 
})

router.post('/elastic/search', function(req, res, next){
    //  Search an index
    var index = req.param('index_name');
    var payload = req.param('payload');
    var docType = req.param('type');
    elasticService.search(req, res, index, docType, payload);
})

router.delete('/elastic/delete-document', function(req, res){
    //  Delete a document
    var index = req.param('index_name');
    var _id = req.param('_id');
    var docType = req.param('type');
    elasticService.deleteDocument(req, res, index, _id, docType);
    return null; 
})

// Use with care
router.get('/elastic/delete_all', function(req, res){
    // Delete all indexes
    elasticService.deleteAll(req, res);
})

module.exports = router;
