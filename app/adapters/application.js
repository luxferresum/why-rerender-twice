import Ember from 'ember';
import DS from 'ember-data';

const {get} = Ember;


export default DS.JSONAPIAdapter.extend({
  findAll() {
    return Ember.RSVP.resolve({
      "data": [{
        "id": "0055805",
        "type": "item"
      }],
      "included": [{
        "attributes": {
          "description": "lorem ipsum",
        },
        "id": "0055805",
        "links": {
          "self": "/api/ng/item/0055805"
        },
        "relationships": {
          "detail-fields": {
            "links": {
              "related": "/api/ng/item/0055805/detail-fields",
              "self": "/api/ng/item/0055805/relationships/detail-fields"
            }
          }
        },
        "type": "item"
      }]
    });
  },
  findHasMany() {
    return new Ember.RSVP.Promise(() => {
      console.log('should load detail fields');
    });
  }
});
