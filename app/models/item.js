import DS from 'ember-data';

export default DS.Model.extend({
  detailFields: DS.hasMany('item-detail-field')
});
