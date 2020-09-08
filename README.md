# Recommender 

## Service which will same Asset objects to recommendation engine

- [x] Setup Elatistsearch
- [x] Import dummy data 
  - [x] `curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/assets/_bulk?' --data-binary @esBulk.data`
- [ ] Setup API to store object to elastic index
- [x] Setup API to retrive similar objects
  - https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html

## Backend service to list Asset objects

- [x] Setup Express Service to expose Mongo Asset Objects
- [ ] Setup API to expose Above service
  - [ ] POST
  - [x] GET
  - [ ] PUT
  - [ ] DELETE

## Frontend APP to use above service

- [ ] Page to show Asset with its meta data 
- [ ] Page will show simillar assets using Inline simmilar objects
- [ ] Pagination of Asset objects
- [ ] Pagination of simillar objects

## Docker-compose

- [ ] nginx
- [ ] Elasticesearch
- [ ] Express
- [ ] React FE