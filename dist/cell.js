// Generated by CoffeeScript 1.9.1
var React, cn;

React = require('react');

cn = require('classnames');

module.exports = React.createClass({
  displayName: 'Cell',
  render: function() {
    var classes;
    classes = cn(this.props.classes.cell, this.props.level, this.props.type, {
      selected: this.props.selected
    }, {
      today: this.props.today
    });
    return React.createElement("div", {
      "className": classes,
      "onClick": ((function(_this) {
        return function() {
          return _this.props.onClick(_this.props.moment);
        };
      })(this))
    }, this.props.label);
  },
  propTypes: {
    label: React.PropTypes.string,
    level: React.PropTypes.string,
    type: React.PropTypes.string,
    selected: React.PropTypes.bool,
    today: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    classes: React.PropTypes.object
  }
});
