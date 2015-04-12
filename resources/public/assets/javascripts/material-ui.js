(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.MaterialUI = require('material-ui');
},{"material-ui":2}],2:[function(require,module,exports){
module.exports = {
  AppBar: require('./js/app-bar'),
  AppCanvas: require('./js/app-canvas'),
  Checkbox: require('./js/checkbox'),
  DatePicker: require('./js/date-picker/date-picker'),
  Dialog: require('./js/dialog'),
  DialogWindow: require('./js/dialog-window'),
  DropDownIcon: require('./js/drop-down-icon'),
  DropDownMenu: require('./js/drop-down-menu'),
  EnhancedButton: require('./js/enhanced-button'),
  FlatButton: require('./js/flat-button'),
  FloatingActionButton: require('./js/floating-action-button'),
  FontIcon: require('./js/font-icon'),
  IconButton: require('./js/icon-button'),
  Input: require('./js/input'),
  LeftNav: require('./js/left-nav'),
  Menu: require('./js/menu/menu'),
  MenuItem: require('./js/menu/menu-item'),
  Mixins: {
    Classable: require('./js/mixins/classable'),
    ClickAwayable: require('./js/mixins/click-awayable'),
    WindowListenable: require('./js/mixins/window-listenable')
  },
  Paper: require('./js/paper'),
  RadioButton: require('./js/radio-button'),
  RadioButtonGroup: require('./js/radio-button-group'),
  RaisedButton: require('./js/raised-button'),
  Slider: require('./js/slider'),
  SvgIcon: require('./js/svg-icons/svg-icon'),
  Icons: {
    NavigationMenu: require('./js/svg-icons/navigation-menu'),
    NavigationChevronLeft: require('./js/svg-icons/navigation-chevron-left'),
    NavigationChevronRight: require('./js/svg-icons/navigation-chevron-right')
  },
  Tab: require('./js/tabs/tab'),
  Tabs: require('./js/tabs/tabs'),
  Toggle: require('./js/toggle'),
  Snackbar: require('./js/snackbar'),
  TextField: require('./js/text-field'),
  Toolbar: require('./js/toolbar'),
  ToolbarGroup: require('./js/toolbar-group'),
  Tooltip: require('./js/tooltip'),
  Utils: {
    CssEvent: require('./js/utils/css-event'),
    Dom: require('./js/utils/dom'),
    Events: require('./js/utils/events'),
    KeyCode: require('./js/utils/key-code'),
    KeyLine: require('./js/utils/key-line')
  }
};

},{"./js/app-bar":3,"./js/app-canvas":4,"./js/checkbox":5,"./js/date-picker/date-picker":11,"./js/dialog":14,"./js/dialog-window":13,"./js/drop-down-icon":15,"./js/drop-down-menu":16,"./js/enhanced-button":17,"./js/flat-button":20,"./js/floating-action-button":21,"./js/font-icon":22,"./js/icon-button":23,"./js/input":25,"./js/left-nav":26,"./js/menu/menu":29,"./js/menu/menu-item":28,"./js/mixins/classable":31,"./js/mixins/click-awayable":32,"./js/mixins/window-listenable":33,"./js/paper":35,"./js/radio-button":37,"./js/radio-button-group":36,"./js/raised-button":38,"./js/slider":42,"./js/snackbar":43,"./js/svg-icons/navigation-chevron-left":45,"./js/svg-icons/navigation-chevron-right":46,"./js/svg-icons/navigation-menu":47,"./js/svg-icons/svg-icon":48,"./js/tabs/tab":53,"./js/tabs/tabs":55,"./js/text-field":56,"./js/toggle":57,"./js/toolbar":59,"./js/toolbar-group":58,"./js/tooltip":60,"./js/utils/css-event":62,"./js/utils/dom":64,"./js/utils/events":65,"./js/utils/key-code":66,"./js/utils/key-line":67}],3:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var IconButton = require('./icon-button');
var NavigationMenu = require('./svg-icons/navigation-menu');
var Paper = require('./paper');

var AppBar = React.createClass({displayName: "AppBar",

  mixins: [Classable],

  propTypes: {
    onMenuIconButtonTouchTap: React.PropTypes.func,
    showMenuIconButton: React.PropTypes.bool,
    iconClassNameLeft: React.PropTypes.string,
    iconElementLeft: React.PropTypes.element,
    iconElementRight: React.PropTypes.element,
    title : React.PropTypes.node,
    zDepth: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      showMenuIconButton: true,
      title: '',
      zDepth: 1
    }
  },

  componentDidMount: function() {
    if ("development" !== 'production' &&
       (this.props.iconElementLeft && this.props.iconClassNameLeft)) {
        var warning = 'Properties iconClassNameLeft and iconElementLeft cannot be simultaneously ' +
                      'defined. Please use one or the other.';
        console.warn(warning);
    }
  },

  render: function() {
    var $__0=


      this.props,onTouchTap=$__0.onTouchTap,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{onTouchTap:1});

    var classes = this.getClasses('mui-app-bar'),
      title, menuElementLeft, menuElementRight;

    if (this.props.title) {
      // If the title is a string, wrap in an h1 tag.
      // If not, just use it as a node.
      title = toString.call(this.props.title) === '[object String]' ?
        React.createElement("h1", {className: "mui-app-bar-title"}, this.props.title) :
        this.props.title;
    }

    if (this.props.showMenuIconButton) {
      if (this.props.iconElementLeft) {
        menuElementLeft = (
          React.createElement("div", {className: "mui-app-bar-navigation-icon-button"},
            this.props.iconElementLeft
          )
        );
      } else {
        var child = (this.props.iconClassNameLeft) ? '' : React.createElement(NavigationMenu, null);
        menuElementLeft = (
          React.createElement(IconButton, {
            className: "mui-app-bar-navigation-icon-button",
            iconClassName: this.props.iconClassNameLeft,
            onTouchTap: this._onMenuIconButtonTouchTap},
              child
          )
        );
      }
    }

    menuElementRight = (this.props.children) ? this.props.children :
                       (this.props.iconElementRight) ? this.props.iconElementRight : '';

    return (
      React.createElement(Paper, {rounded: false, className: classes, zDepth: this.props.zDepth},
        menuElementLeft,
        title,
        menuElementRight
      )
    );
  },

  _onMenuIconButtonTouchTap: function(e) {
    if (this.props.onMenuIconButtonTouchTap) this.props.onMenuIconButtonTouchTap(e);
  }

});

module.exports = AppBar;

},{"./icon-button":23,"./mixins/classable":31,"./paper":35,"./svg-icons/navigation-menu":47,"react":72}],4:[function(require,module,exports){
var React = require('react'),
  Classable = require('./mixins/classable');

var AppCanvas = React.createClass({displayName: "AppCanvas",

  mixins: [Classable],

  propTypes: {
    predefinedLayout: React.PropTypes.number
  },

  render: function() {
    var classes = this.getClasses({
      'mui-app-canvas': true,
      'mui-predefined-layout-1': this.props.predefinedLayout === 1
    });

    return (
      React.createElement("div", {className: classes},
        this.props.children
      )
    );
  }

});

module.exports = AppCanvas;

},{"./mixins/classable":31,"react":72}],5:[function(require,module,exports){
var React = require('react');
var EnhancedSwitch = require('./enhanced-switch');
var Classable = require('./mixins/classable');
var CheckboxOutline = require('./svg-icons/toggle-check-box-outline-blank');
var CheckboxChecked = require('./svg-icons/toggle-check-box-checked');

var Checkbox = React.createClass({displayName: "Checkbox",

  mixins: [Classable],

  propTypes: {
    onCheck: React.PropTypes.func,
  },

  render: function() {
    var $__0=


      this.props,onCheck=$__0.onCheck,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{onCheck:1});

    var classes = this.getClasses("mui-checkbox");

    var checkboxElement = (
      React.createElement("div", null,
        React.createElement(CheckboxOutline, {className: "mui-checkbox-box"}),
        React.createElement(CheckboxChecked, {className: "mui-checkbox-check"})
      )
    );

    var enhancedSwitchProps = {
      ref: "enhancedSwitch",
      inputType: "checkbox",
      switchElement: checkboxElement,
      className: classes,
      iconClassName: "mui-checkbox-icon",
      onSwitch: this._handleCheck,
      labelPosition: (this.props.labelPosition) ? this.props.labelPosition : "right"
    };

    return (
      React.createElement(EnhancedSwitch, React.__spread({},
        other,
        enhancedSwitchProps))
    );
  },

  isChecked: function() {
    return this.refs.enhancedSwitch.isSwitched();
  },

  setChecked: function(newCheckedValue) {
    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
  },

  _handleCheck: function(e, isInputChecked) {
    if (this.props.onCheck) this.props.onCheck(e, isInputChecked);
  }
});

module.exports = Checkbox;

},{"./enhanced-switch":18,"./mixins/classable":31,"./svg-icons/toggle-check-box-checked":49,"./svg-icons/toggle-check-box-outline-blank":50,"react":72}],6:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var DateTime = require('../utils/date-time');
var DayButton = require('./day-button');

var CalendarMonth = React.createClass({displayName: "CalendarMonth",

  mixins: [Classable],

  propTypes: {
    displayDate: React.PropTypes.object.isRequired,
    onDayTouchTap: React.PropTypes.func,
    selectedDate: React.PropTypes.object.isRequired
  },

  render: function() {
    var classes = this.getClasses('mui-date-picker-calendar-month');

    return (
      React.createElement("div", {className: classes},
        this._getWeekElements()
      )
    );
  },

  _getWeekElements: function() {
    var weekArray = DateTime.getWeekArray(this.props.displayDate);

    return weekArray.map(function(week, i) {
      return (
        React.createElement("div", {
          key: i,
          className: "mui-date-picker-calendar-month-week"},
          this._getDayElements(week)
        )
      );
    }, this);
  },

  _getDayElements: function(week) {
    return week.map(function(day, i) {
      var selected = DateTime.isEqualDate(this.props.selectedDate, day);
      return (
        React.createElement(DayButton, {
          key: i,
          date: day,
          onTouchTap: this._handleDayTouchTap,
          selected: selected})
      );
    }, this);
  },

  _handleDayTouchTap: function(e, date) {
    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
  }

});

module.exports = CalendarMonth;
},{"../mixins/classable":31,"../utils/date-time":63,"./day-button":12,"react":72}],7:[function(require,module,exports){
var React = require('react');
var DateTime = require('../utils/date-time');
var IconButton = require('../icon-button');
var NavigationChevronLeft = require('../svg-icons/navigation-chevron-left');
var NavigationChevronRight = require('../svg-icons/navigation-chevron-right');
var SlideInTransitionGroup = require('../transition-groups/slide-in');

var CalendarToolbar = React.createClass({displayName: "CalendarToolbar",

  propTypes: {
    displayDate: React.PropTypes.object.isRequired,
    onLeftTouchTap: React.PropTypes.func,
    onRightTouchTap: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      transitionDirection: 'up'
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var direction;

    if (nextProps.displayDate !== this.props.displayDate) {
      direction = nextProps.displayDate > this.props.displayDate ? 'up' : 'down';
      this.setState({
        transitionDirection: direction
      });
    }
  },

  render: function() {
    var month = DateTime.getFullMonth(this.props.displayDate);
    var year = this.props.displayDate.getFullYear();

    return (
      React.createElement("div", {className: "mui-date-picker-calendar-toolbar"},

        React.createElement(SlideInTransitionGroup, {
          className: "mui-date-picker-calendar-toolbar-title",
          direction: this.state.transitionDirection},
          React.createElement("div", {key: month + '_' + year}, month, " ", year)
        ),

        React.createElement(IconButton, {
          className: "mui-date-picker-calendar-toolbar-button-left",
          onTouchTap: this.props.onLeftTouchTap},
            React.createElement(NavigationChevronLeft, null)
        ),

        React.createElement(IconButton, {
          className: "mui-date-picker-calendar-toolbar-button-right",
          onTouchTap: this.props.onRightTouchTap},
            React.createElement(NavigationChevronRight, null)
        )

      )
    );
  }

});

module.exports = CalendarToolbar;

},{"../icon-button":23,"../svg-icons/navigation-chevron-left":45,"../svg-icons/navigation-chevron-right":46,"../transition-groups/slide-in":61,"../utils/date-time":63,"react":72}],8:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var WindowListenable = require('../mixins/window-listenable');
var DateTime = require('../utils/date-time');
var KeyCode = require('../utils/key-code');
var CalendarMonth = require('./calendar-month');
var CalendarToolbar = require('./calendar-toolbar');
var DateDisplay = require('./date-display');
var SlideInTransitionGroup = require('../transition-groups/slide-in');

var Calendar = React.createClass({displayName: "Calendar",

  mixins: [Classable, WindowListenable],

  propTypes: {
    initialDate: React.PropTypes.object,
    isActive: React.PropTypes.bool
  },

  windowListeners: {
    'keydown': '_handleWindowKeyDown'
  },

  getDefaultProps: function() {
    return {
      initialDate: new Date()
    };
  },

  getInitialState: function() {
    return {
      displayDate: DateTime.getFirstDayOfMonth(this.props.initialDate),
      selectedDate: this.props.initialDate,
      transitionDirection: 'left'
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.initialDate !== this.props.initialDate) {
      var d = nextProps.initialDate || new Date();
      this.setState({
        displayDate: DateTime.getFirstDayOfMonth(d),
        selectedDate: d
      });
    }
  },

  render: function() {
    var weekCount = DateTime.getWeekArray(this.state.displayDate).length;
    var classes = this.getClasses('mui-date-picker-calendar', {
      'mui-is-4week': weekCount === 4,
      'mui-is-5week': weekCount === 5,
      'mui-is-6week': weekCount === 6
    });

    return (
      React.createElement("div", {className: classes},

        React.createElement(DateDisplay, {
          className: "mui-date-picker-calendar-date-display",
          selectedDate: this.state.selectedDate}),

        React.createElement("div", {
          className: "mui-date-picker-calendar-container"},
          React.createElement(CalendarToolbar, {
            displayDate: this.state.displayDate,
            onLeftTouchTap: this._handleLeftTouchTap,
            onRightTouchTap: this._handleRightTouchTap}),

          React.createElement("ul", {className: "mui-date-picker-calendar-week-title"},
            React.createElement("li", {className: "mui-date-picker-calendar-week-title-day"}, "S"),
            React.createElement("li", {className: "mui-date-picker-calendar-week-title-day"}, "M"),
            React.createElement("li", {className: "mui-date-picker-calendar-week-title-day"}, "T"),
            React.createElement("li", {className: "mui-date-picker-calendar-week-title-day"}, "W"),
            React.createElement("li", {className: "mui-date-picker-calendar-week-title-day"}, "T"),
            React.createElement("li", {className: "mui-date-picker-calendar-week-title-day"}, "F"),
            React.createElement("li", {className: "mui-date-picker-calendar-week-title-day"}, "S")
          ),

          React.createElement(SlideInTransitionGroup, {
            direction: this.state.transitionDirection},
            React.createElement(CalendarMonth, {
              key: this.state.displayDate.toDateString(),
              displayDate: this.state.displayDate,
              onDayTouchTap: this._handleDayTouchTap,
              selectedDate: this.state.selectedDate})
          )
        )
      )
    );
  },

  getSelectedDate: function() {
    return this.state.selectedDate;
  },

  _addDisplayDate: function(m) {
    var newDisplayDate = DateTime.clone(this.state.displayDate);
    newDisplayDate.setMonth(newDisplayDate.getMonth() + m);
    this._setDisplayDate(newDisplayDate);
  },

  _addSelectedDays: function(days) {
    this._setSelectedDate(DateTime.addDays(this.state.selectedDate, days));
  },

  _addSelectedMonths: function(months) {
    this._setSelectedDate(DateTime.addMonths(this.state.selectedDate, months));
  },

  _setDisplayDate: function(d, newSelectedDate) {
    var newDisplayDate = DateTime.getFirstDayOfMonth(d);
    var direction = newDisplayDate > this.state.displayDate ? 'left' : 'right';

    if (newDisplayDate !== this.state.displayDate) {
      this.setState({
        displayDate: newDisplayDate,
        transitionDirection: direction,
        selectedDate: newSelectedDate || this.state.selectedDate
      });
    }
  },

  _setSelectedDate: function(d) {
    var newDisplayDate = DateTime.getFirstDayOfMonth(d);

    if (newDisplayDate !== this.state.displayDate) {
      this._setDisplayDate(newDisplayDate, d);
    } else {
      this.setState({
        selectedDate: d
      });
    }
  },

  _handleDayTouchTap: function(e, date) {
    this._setSelectedDate(date);
  },

  _handleLeftTouchTap: function() {
    this._addDisplayDate(-1);
  },

  _handleRightTouchTap: function() {
    this._addDisplayDate(1);
  },

  _handleWindowKeyDown: function(e) {
    var newSelectedDate;

    if (this.props.isActive) {

      switch (e.keyCode) {

        case KeyCode.UP:
          if (e.shiftKey) {
            this._addSelectedMonths(-1);
          } else {
            this._addSelectedDays(-7);
          }
          break;

        case KeyCode.DOWN:
          if (e.shiftKey) {
            this._addSelectedMonths(1);
          } else {
            this._addSelectedDays(7);
          }
          break;

        case KeyCode.RIGHT:
          if (e.shiftKey) {
            this._addSelectedMonths(1);
          } else {
            this._addSelectedDays(1);
          }
          break;

        case KeyCode.LEFT:
          if (e.shiftKey) {
            this._addSelectedMonths(-1);
          } else {
            this._addSelectedDays(-1);
          }
          break;

      }

    }
  }

});

module.exports = Calendar;
},{"../mixins/classable":31,"../mixins/window-listenable":33,"../transition-groups/slide-in":61,"../utils/date-time":63,"../utils/key-code":66,"./calendar-month":6,"./calendar-toolbar":7,"./date-display":9,"react":72}],9:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var DateTime = require('../utils/date-time');
var SlideInTransitionGroup = require('../transition-groups/slide-in');

var DateDisplay = React.createClass({displayName: "DateDisplay",

  mixins: [Classable],

  propTypes: {
    selectedDate: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      transitionDirection: 'up'
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var direction;

    if (nextProps.selectedDate !== this.props.selectedDate) {
      direction = nextProps.selectedDate > this.props.selectedDate ? 'up' : 'down';
      this.setState({
        transitionDirection: direction
      });
    }
  },

  render: function() {
    var $__0=


      this.props,selectedDate=$__0.selectedDate,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{selectedDate:1});
    var classes = this.getClasses('mui-date-picker-date-display');
    var dayOfWeek = DateTime.getDayOfWeek(this.props.selectedDate);
    var month = DateTime.getShortMonth(this.props.selectedDate);
    var day = this.props.selectedDate.getDate();
    var year = this.props.selectedDate.getFullYear();

    return (
      React.createElement("div", React.__spread({},  other, {className: classes}),

        React.createElement(SlideInTransitionGroup, {
          className: "mui-date-picker-date-display-dow",
          direction: this.state.transitionDirection},
          React.createElement("div", {key: dayOfWeek}, dayOfWeek)
        ),

        React.createElement("div", {className: "mui-date-picker-date-display-date"},

          React.createElement(SlideInTransitionGroup, {
            className: "mui-date-picker-date-display-month",
            direction: this.state.transitionDirection},
            React.createElement("div", {key: month}, month)
          ),

          React.createElement(SlideInTransitionGroup, {
            className: "mui-date-picker-date-display-day",
            direction: this.state.transitionDirection},
            React.createElement("div", {key: day}, day)
          ),

          React.createElement(SlideInTransitionGroup, {
            className: "mui-date-picker-date-display-year",
            direction: this.state.transitionDirection},
            React.createElement("div", {key: year}, year)
          )

        )

      )
    );
  }

});

module.exports = DateDisplay;
},{"../mixins/classable":31,"../transition-groups/slide-in":61,"../utils/date-time":63,"react":72}],10:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var WindowListenable = require('../mixins/window-listenable');
var KeyCode = require('../utils/key-code');
var Calendar = require('./calendar');
var DialogWindow = require('../dialog-window');
var FlatButton = require('../flat-button');

var DatePickerDialog = React.createClass({displayName: "DatePickerDialog",

  mixins: [Classable, WindowListenable],

  propTypes: {
    initialDate: React.PropTypes.object,
    onAccept: React.PropTypes.func,
    onShow: React.PropTypes.func,
    onDismiss: React.PropTypes.func,
  },

  windowListeners: {
    'keyup': '_handleWindowKeyUp'
  },

  getInitialState: function() {
    return {
      isCalendarActive: false
    };
  },

  render: function() {
    var $__0=



      this.props,initialDate=$__0.initialDate,onAccept=$__0.onAccept,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{initialDate:1,onAccept:1});
    var classes = this.getClasses('mui-date-picker-dialog');
    var actions = [
      React.createElement(FlatButton, {
        key: 0,
        label: "Cancel",
        secondary: true,
        onTouchTap: this._handleCancelTouchTap}),
      React.createElement(FlatButton, {
        key: 1,
        label: "OK",
        secondary: true,
        onTouchTap: this._handleOKTouchTap})
    ];

    return (
      React.createElement(DialogWindow, React.__spread({},  other,
        {ref: "dialogWindow",
        className: classes,
        actions: actions,
        contentClassName: "mui-date-picker-dialog-window",
        onDismiss: this._handleDialogDismiss,
        onShow: this._handleDialogShow,
        repositionOnUpdate: false}),
        React.createElement(Calendar, {
          ref: "calendar",
          initialDate: this.props.initialDate,
          isActive: this.state.isCalendarActive})
      )
    );
  },

  show: function() {
    this.refs.dialogWindow.show();
  },

  dismiss: function() {
    this.refs.dialogWindow.dismiss();
  },

  _handleCancelTouchTap: function() {
    this.dismiss();
  },

  _handleOKTouchTap: function() {
    this.dismiss();
    if (this.props.onAccept) {
      this.props.onAccept(this.refs.calendar.getSelectedDate());
    }
  },

  _handleDialogShow: function() {
    this.setState({
      isCalendarActive: true
    });

    if(this.props.onShow) {
      this.props.onShow();
    }
  },

  _handleDialogDismiss: function() {
    this.setState({
      isCalendarActive: false
    });

    if(this.props.onDismiss) {
      this.props.onDismiss();
    }
  },

  _handleWindowKeyUp: function(e) {
    if (this.refs.dialogWindow.isOpen()) {
      switch (e.keyCode) {
        case KeyCode.ENTER:
          this._handleOKTouchTap();
          break;
      }
    }
  }

});

module.exports = DatePickerDialog;
},{"../dialog-window":13,"../flat-button":20,"../mixins/classable":31,"../mixins/window-listenable":33,"../utils/key-code":66,"./calendar":8,"react":72}],11:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var WindowListenable = require('../mixins/window-listenable');
var DateTime = require('../utils/date-time');
var KeyCode = require('../utils/key-code');
var DatePickerDialog = require('./date-picker-dialog');
var TextField = require('../text-field');

var DatePicker = React.createClass({displayName: "DatePicker",

  mixins: [Classable, WindowListenable],

  propTypes: {
    defaultDate: React.PropTypes.object,
    formatDate: React.PropTypes.func,
    mode: React.PropTypes.oneOf(['portrait', 'landscape', 'inline']),
    onFocus: React.PropTypes.func,
    onTouchTap: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onShow: React.PropTypes.func,
    onDismiss: React.PropTypes.func,
  },

  windowListeners: {
    'keyup': '_handleWindowKeyUp'
  },

  getDefaultProps: function() {
    return {
      formatDate: DateTime.format
    };
  },

  getInitialState: function() {
    return {
      date: this.props.defaultDate,
      dialogDate: new Date()
    };
  },

  render: function() {
    var $__0=







      this.props,formatDate=$__0.formatDate,mode=$__0.mode,onFocus=$__0.onFocus,onTouchTap=$__0.onTouchTap,onShow=$__0.onShow,onDismiss=$__0.onDismiss,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{formatDate:1,mode:1,onFocus:1,onTouchTap:1,onShow:1,onDismiss:1});
    var classes = this.getClasses('mui-date-picker', {
      'mui-is-landscape': this.props.mode === 'landscape',
      'mui-is-inline': this.props.mode === 'inline'
    });
    var defaultInputValue;

    if (this.props.defaultDate) {
      defaultInputValue = this.props.formatDate(this.props.defaultDate);
    }

    return (
      React.createElement("div", {className: classes},
        React.createElement(TextField, React.__spread({},
          other,
          {ref: "input",
          defaultValue: defaultInputValue,
          onFocus: this._handleInputFocus,
          onTouchTap: this._handleInputTouchTap})),
        React.createElement(DatePickerDialog, {
          ref: "dialogWindow",
          initialDate: this.state.dialogDate,
          onAccept: this._handleDialogAccept,
          onShow: onShow,
          onDismiss: onDismiss})
      )

    );
  },

  getDate: function() {
    return this.state.date;
  },

  setDate: function(d) {
    this.setState({
      date: d
    });
    this.refs.input.setValue(this.props.formatDate(d));
  },

  _handleDialogAccept: function(d) {
    this.setDate(d);
    if (this.props.onChange) this.props.onChange(null, d);
  },

  _handleInputFocus: function(e) {
    e.target.blur();
    if (this.props.onFocus) this.props.onFocus(e);
  },

  _handleInputTouchTap: function(e) {
    this.setState({
      dialogDate: this.getDate()
    });

    this.refs.dialogWindow.show();
    if (this.props.onTouchTap) this.props.onTouchTap(e);
  },

  _handleWindowKeyUp: function(e) {
    //TO DO: open the dialog if input has focus
  }

});

module.exports = DatePicker;

},{"../mixins/classable":31,"../mixins/window-listenable":33,"../text-field":56,"../utils/date-time":63,"../utils/key-code":66,"./date-picker-dialog":10,"react":72}],12:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var DateTime = require('../utils/date-time');
var EnhancedButton = require('../enhanced-button');

var DayButton = React.createClass({displayName: "DayButton",

  mixins: [Classable],

  propTypes: {
    date: React.PropTypes.object,
    onTouchTap: React.PropTypes.func,
    selected: React.PropTypes.bool
  },

  render: function() {
    var $__0=





      this.props,className=$__0.className,date=$__0.date,onTouchTap=$__0.onTouchTap,selected=$__0.selected,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,date:1,onTouchTap:1,selected:1});
    var classes = this.getClasses('mui-date-picker-day-button', {
      'mui-is-current-date': DateTime.isEqualDate(this.props.date, new Date()),
      'mui-is-selected': this.props.selected
    });

    return this.props.date ? (
      React.createElement(EnhancedButton, React.__spread({},  other,
        {className: classes,
        disableFocusRipple: true,
        disableTouchRipple: true,
        onTouchTap: this._handleTouchTap}),
        React.createElement("div", {className: "mui-date-picker-day-button-select"}),
        React.createElement("span", {className: "mui-date-picker-day-button-label"}, this.props.date.getDate())
      )
    ) : (
      React.createElement("span", {className: classes})
    );
  },

  _handleTouchTap: function(e) {
    if (this.props.onTouchTap) this.props.onTouchTap(e, this.props.date);
  }

});

module.exports = DayButton;
},{"../enhanced-button":17,"../mixins/classable":31,"../utils/date-time":63,"react":72}],13:[function(require,module,exports){
var React = require('react');
var WindowListenable = require('./mixins/window-listenable');
var CssEvent = require('./utils/css-event');
var KeyCode = require('./utils/key-code');
var Classable = require('./mixins/classable');
var FlatButton = require('./flat-button');
var Overlay = require('./overlay');
var Paper = require('./paper');

var DialogWindow = React.createClass({displayName: "DialogWindow",

  mixins: [Classable, WindowListenable],

  propTypes: {
    actions: React.PropTypes.array,
    contentClassName: React.PropTypes.string,
    openImmediately: React.PropTypes.bool,
    onClickAway: React.PropTypes.func,
    onDismiss: React.PropTypes.func,
    onShow: React.PropTypes.func,
    repositionOnUpdate: React.PropTypes.bool
  },

  windowListeners: {
    'keyup': '_handleWindowKeyUp'
  },

  getDefaultProps: function() {
    return {
      actions: [],
      repositionOnUpdate: true
    };
  },

  getInitialState: function() {
    return {
      open: this.props.openImmediately || false
    };
  },

  componentDidMount: function() {
    this._positionDialog();
    if (this.props.openImmediately) {
      this.refs.dialogOverlay.preventScrolling();
      this._onShow();
    }
  },

  componentDidUpdate: function (prevProps, prevState) {
    this._positionDialog();
  },

  render: function() {
    var classes = this.getClasses('mui-dialog-window', {
      'mui-is-shown': this.state.open
    });
    var contentClasses = 'mui-dialog-window-contents';
    var actions = this._getActionsContainer(this.props.actions);

    if (this.props.contentClassName) {
      contentClasses += ' ' + this.props.contentClassName;
    }

    return (
      React.createElement("div", {className: classes},
        React.createElement(Paper, {ref: "dialogWindow", className: contentClasses, zDepth: 4},
          this.props.children,
          actions
        ),
        React.createElement(Overlay, {ref: "dialogOverlay", show: this.state.open, autoLockScrolling: false, onTouchTap: this._handleOverlayTouchTap})
      )
    );
  },

  isOpen: function() {
    return this.state.open;
  },

  dismiss: function() {
    CssEvent.onTransitionEnd(this.getDOMNode(), function() {
      this.refs.dialogOverlay.allowScrolling();
    }.bind(this));

    this.setState({ open: false });
    this._onDismiss();
  },

  show: function() {
    this.refs.dialogOverlay.preventScrolling();

    this.setState({ open: true });
    this._onShow();
  },

  _addClassName: function(reactObject, className) {
    var originalClassName = reactObject.props.className;

    reactObject.props.className = originalClassName ?
      originalClassName + ' ' + className : className;
  },

  _getAction: function(actionJSON, key) {
    var onClickHandler = actionJSON.onClick ? actionJSON.onClick : this.dismiss;
    return (
      React.createElement(FlatButton, {
        key: key,
        secondary: true,
        onClick: onClickHandler,
        label: actionJSON.text})
    );
  },

  _getActionsContainer: function(actions) {
    var actionContainer;
    var actionObjects = [];

    if (actions.length) {
      for (var i = 0; i < actions.length; i++) {
        currentAction = actions[i];

        //if the current action isn't a react object, create one
        if (!React.isValidElement(currentAction)) {
          currentAction = this._getAction(currentAction, i);
        }

        this._addClassName(currentAction, 'mui-dialog-window-action');
        actionObjects.push(currentAction);
      };

      actionContainer = (
        React.createElement("div", {className: "mui-dialog-window-actions"},
          actionObjects
        )
      );
    }

    return actionContainer;
  },

  _positionDialog: function() {
    var container, dialogWindow, containerHeight, dialogWindowHeight;

    if (this.state.open) {

      container = this.getDOMNode(),
      dialogWindow = this.refs.dialogWindow.getDOMNode(),
      containerHeight = container.offsetHeight,

      //Reset the height in case the window was resized.
      dialogWindow.style.height = '';
      dialogWindowHeight = dialogWindow.offsetHeight;

      //Vertically center the dialog window, but make sure it doesn't
      //transition to that position.
      if (this.props.repositionOnUpdate || !container.style.paddingTop) {
        container.style.paddingTop =
          ((containerHeight - dialogWindowHeight) / 2) - 64 + 'px';
      }
    }
  },

  _onShow: function() {
    if (this.props.onShow) this.props.onShow();
  },

  _onDismiss: function() {
    if (this.props.onDismiss) this.props.onDismiss();
  },

  _handleOverlayTouchTap: function() {
    this.dismiss();
    if (this.props.onClickAway) this.props.onClickAway();
  },

  _handleWindowKeyUp: function(e) {
    if (e.keyCode == KeyCode.ESC) {
      this.dismiss();
    }
  }

});

module.exports = DialogWindow;

},{"./flat-button":20,"./mixins/classable":31,"./mixins/window-listenable":33,"./overlay":34,"./paper":35,"./utils/css-event":62,"./utils/key-code":66,"react":72}],14:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var DialogWindow = require('./dialog-window');

var Dialog = React.createClass({displayName: "Dialog",

  mixins: [Classable],

  propTypes: {
    title: React.PropTypes.node
  },

  render: function() {
    var $__0=


      this.props,className=$__0.className,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1});
    var classes = this.getClasses('mui-dialog');
    var title;

    if (this.props.title) {
      // If the title is a string, wrap in an h3 tag.
      // If not, just use it as a node.
      title = toString.call(this.props.title) === '[object String]' ?
        React.createElement("h3", {className: "mui-dialog-title"}, this.props.title) :
        this.props.title;
    }

    return (
      React.createElement(DialogWindow, React.__spread({},
        other,
        {ref: "dialogWindow",
        className: classes}),

        title,
        React.createElement("div", {ref: "dialogContent", className: "mui-dialog-content"},
          this.props.children
        )

      )
    );
  },

  dismiss: function() {
    this.refs.dialogWindow.dismiss();
  },

  show: function() {
    this.refs.dialogWindow.show();
  }

});

module.exports = Dialog;

},{"./dialog-window":13,"./mixins/classable":31,"react":72}],15:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var ClickAwayable = require('./mixins/click-awayable');
var KeyLine = require('./utils/key-line');
var Paper = require('./paper');
var FontIcon = require('./font-icon');
var Menu = require('./menu/menu');

var DropDownIcon = React.createClass({displayName: "DropDownIcon",

  mixins: [Classable, ClickAwayable],

  propTypes: {
    onChange: React.PropTypes.func,
    menuItems: React.PropTypes.array.isRequired,
    closeOnMenuItemClick: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      open: false
    }
  },

  getDefaultProps: function() {
    return {
      closeOnMenuItemClick: true
    }
  },

  componentClickAway: function() {
    this.setState({ open: false });
  },

  render: function() {
    var classes = this.getClasses('mui-drop-down-icon', {
      'mui-open': this.state.open
    });

    var icon;
    if (this.props.iconClassName) icon = React.createElement(FontIcon, {className: this.props.iconClassName});

    return (
      React.createElement("div", {className: classes},
          React.createElement("div", {className: "mui-menu-control", onClick: this._onControlClick},
              icon,
              this.props.children
          ),
          React.createElement(Menu, {ref: "menuItems", menuItems: this.props.menuItems, hideable: true, visible: this.state.open, onItemClick: this._onMenuItemClick})
        )
    );
  },

  _onControlClick: function(e) {
    this.setState({ open: !this.state.open });
  },

  _onMenuItemClick: function(e, key, payload) {
    if (this.props.onChange) this.props.onChange(e, key, payload);

    if (this.props.closeOnMenuItemClick) {
      this.setState({ open: false });
    }
  }

});

module.exports = DropDownIcon;

},{"./font-icon":22,"./menu/menu":29,"./mixins/classable":31,"./mixins/click-awayable":32,"./paper":35,"./utils/key-line":67,"react":72}],16:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var ClickAwayable = require('./mixins/click-awayable');
var DropDownArrow = require('./svg-icons/drop-down-arrow');
var KeyLine = require('./utils/key-line');
var Paper = require('./paper');
var Menu = require('./menu/menu');

var DropDownMenu = React.createClass({displayName: "DropDownMenu",

  mixins: [Classable, ClickAwayable],

  propTypes: {
    autoWidth: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    menuItems: React.PropTypes.array.isRequired
  },

  getDefaultProps: function() {
    return {
      autoWidth: true
    };
  },

  getInitialState: function() {
    return {
      open: false,
      selectedIndex: this.props.selectedIndex || 0
    }
  },

  componentClickAway: function() {
    this.setState({ open: false });
  },

  componentDidMount: function() {
    if (this.props.autoWidth) this._setWidth();
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.hasOwnProperty('selectedIndex')) {
      this.setState({selectedIndex: nextProps.selectedIndex});
    }
  },

  render: function() {
    var classes = this.getClasses('mui-drop-down-menu', {
      'mui-open': this.state.open
    });

    return (
      React.createElement("div", {className: classes},
        React.createElement("div", {className: "mui-menu-control", onClick: this._onControlClick},
          React.createElement(Paper, {className: "mui-menu-control-bg", zDepth: 0}),
          React.createElement("div", {className: "mui-menu-label"},
            this.props.menuItems[this.state.selectedIndex].text
          ),
          React.createElement(DropDownArrow, {className: "mui-menu-drop-down-icon"}),
          React.createElement("div", {className: "mui-menu-control-underline"})
        ),
        React.createElement(Menu, {
          ref: "menuItems",
          autoWidth: this.props.autoWidth,
          selectedIndex: this.state.selectedIndex,
          menuItems: this.props.menuItems,
          hideable: true,
          visible: this.state.open,
          onItemClick: this._onMenuItemClick})
      )
    );
  },

  _setWidth: function() {
    var el = this.getDOMNode(),
      menuItemsDom = this.refs.menuItems.getDOMNode();

    el.style.width = menuItemsDom.offsetWidth + 'px';
  },

  _onControlClick: function(e) {
    this.setState({ open: !this.state.open });
  },

  _onMenuItemClick: function(e, key, payload) {
    if (this.props.onChange && this.state.selectedIndex !== key) this.props.onChange(e, key, payload);
    this.setState({
      selectedIndex: key,
      open: false
    });
  }

});

module.exports = DropDownMenu;
},{"./menu/menu":29,"./mixins/classable":31,"./mixins/click-awayable":32,"./paper":35,"./svg-icons/drop-down-arrow":44,"./utils/key-line":67,"react":72}],17:[function(require,module,exports){
var React = require('react');
var KeyCode = require('./utils/key-code');
var Classable = require('./mixins/classable');
var WindowListenable = require('./mixins/window-listenable');
var FocusRipple = require('./ripples/focus-ripple');
var TouchRipple = require('./ripples/touch-ripple');

var EnhancedButton = React.createClass({displayName: "EnhancedButton",

  mixins: [Classable, WindowListenable],

  propTypes: {
    centerRipple: React.PropTypes.bool,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    disableFocusRipple: React.PropTypes.bool,
    disableTouchRipple: React.PropTypes.bool,
    linkButton: React.PropTypes.bool,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onTouchTap: React.PropTypes.func
  },

  windowListeners: {
    'keydown': '_handleWindowKeydown',
    'keyup': '_handleWindowKeyup'
  },

  getInitialState: function() {
    return {
      isKeyboardFocused: false
    };
  },

  render: function() {
    var $__0=








         this.props,centerRipple=$__0.centerRipple,disabled=$__0.disabled,disableFocusRipple=$__0.disableFocusRipple,disableTouchRipple=$__0.disableTouchRipple,linkButton=$__0.linkButton,onBlur=$__0.onBlur,onFocus=$__0.onFocus,onTouchTap=$__0.onTouchTap,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{centerRipple:1,disabled:1,disableFocusRipple:1,disableTouchRipple:1,linkButton:1,onBlur:1,onFocus:1,onTouchTap:1});
    var classes = this.getClasses('mui-enhanced-button', {
      'mui-is-disabled': disabled,
      'mui-is-keyboard-focused': this.state.isKeyboardFocused,
      'mui-is-link-button': linkButton
    });
    var touchRipple = (
      React.createElement(TouchRipple, {
        ref: "touchRipple",
        key: "touchRipple",
        centerRipple: centerRipple},
        this.props.children
        )
    );
    var focusRipple = (
      React.createElement(FocusRipple, {
        key: "focusRipple",
        show: this.state.isKeyboardFocused})
    );
    var buttonProps = {
      className: classes,
      disabled: disabled,
      onBlur: this._handleBlur,
      onFocus: this._handleFocus,
      onTouchTap: this._handleTouchTap
    };
    var buttonChildren = [
      disabled || disableTouchRipple ? this.props.children : touchRipple,
      disabled || disableFocusRipple ? null : focusRipple
    ];

    if (disabled && linkButton) {
      return (
        React.createElement("span", React.__spread({},  other,
          {className: classes,
          disabled: disabled}),
          this.props.children
        )
      );
    }

    return linkButton ? (
      React.createElement("a", React.__spread({},  other,  buttonProps),
        buttonChildren
      )
    ) : (
      React.createElement("button", React.__spread({},  other,  buttonProps),
        buttonChildren
      )
    );
  },

  isKeyboardFocused: function() {
    return this.state.isKeyboardFocused;
  },

  _handleWindowKeydown: function(e) {
    if (e.keyCode == KeyCode.TAB) this._tabPressed = true;
    if (e.keyCode == KeyCode.ENTER && this.state.isKeyboardFocused) {
      this._handleTouchTap(e);
    }
  },

  _handleWindowKeyup: function(e) {
    if (e.keyCode == KeyCode.SPACE && this.state.isKeyboardFocused) {
      this._handleTouchTap(e);
    }
  },

  _handleBlur: function(e) {
    this.setState({
      isKeyboardFocused: false
    });

    if (this.props.onBlur) this.props.onBlur(e);
  },

  _handleFocus: function(e) {
    //setTimeout is needed becuase the focus event fires first
    //Wait so that we can capture if this was a keyboard focus
    //or touch focus
    setTimeout(function() {
      if (this._tabPressed) {
        this.setState({
          isKeyboardFocused: true
        });
      }
    }.bind(this), 150);

    if (this.props.onFocus) this.props.onFocus(e);
  },

  _handleTouchTap: function(e) {
    this._tabPressed = false;
    this.setState({
      isKeyboardFocused: false
    });
    if (this.props.onTouchTap) this.props.onTouchTap(e);
  }

});

module.exports = EnhancedButton;
},{"./mixins/classable":31,"./mixins/window-listenable":33,"./ripples/focus-ripple":40,"./ripples/touch-ripple":41,"./utils/key-code":66,"react":72}],18:[function(require,module,exports){
var React = require('react');
var KeyCode = require('./utils/key-code');
var Classable = require('./mixins/classable');
var UniqueId = require('./utils/unique-id');
var WindowListenable = require('./mixins/window-listenable');
var FocusRipple = require('./ripples/focus-ripple');
var TouchRipple = require('./ripples/touch-ripple');
var Paper = require('./paper');

var EnhancedSwitch = React.createClass({displayName: "EnhancedSwitch",

  mixins: [Classable, WindowListenable],

    propTypes: {
      id: React.PropTypes.string,
      inputType: React.PropTypes.string.isRequired,
      switchElement: React.PropTypes.element.isRequired,
      iconClassName: React.PropTypes.string.isRequired,
      name: React.PropTypes.string,
        value: React.PropTypes.string,
        label: React.PropTypes.string,
        onSwitch: React.PropTypes.func,
        required: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        defaultSwitched: React.PropTypes.bool,
      labelPosition: React.PropTypes.oneOf(['left', 'right']),
      disableFocusRipple: React.PropTypes.bool,
      disableTouchRipple: React.PropTypes.bool
      },

  windowListeners: {
    'keydown': '_handleWindowKeydown',
    'keyup': '_handleWindowKeyup'
  },

  getDefaultProps: function() {
    return {
      iconClassName: ''
    };
  },

  getInitialState: function() {
    return {
      switched: this.props.defaultSwitched ||
        (this.props.valueLink && this.props.valueLink.value),
      isKeyboardFocused: false
    }
  },

  componentDidMount: function() {
    var inputNode = this.refs.checkbox.getDOMNode();
    this.setState({switched: inputNode.checked});
  },

  componentWillReceiveProps: function(nextProps) {
    var hasCheckedLinkProp = nextProps.hasOwnProperty('checkedLink');
    var hasCheckedProp = nextProps.hasOwnProperty('checked');
    var hasToggledProp = nextProps.hasOwnProperty('toggled');
    var hasNewDefaultProp =
      (nextProps.hasOwnProperty('defaultSwitched') &&
      (nextProps.defaultSwitched != this.props.defaultSwitched));
    var newState = {};

    if (hasCheckedProp) {
      newState.switched = nextProps.checked;
    } else if (hasToggledProp) {
      newState.switched = nextProps.toggled;
    } else if (hasCheckedLinkProp) {
      newState.switched = nextProps.checkedLink.value;
    }

    if (newState) this.setState(newState);
  },

  render: function() {
    var $__0=

















      this.props,type=$__0.type,name=$__0.name,value=$__0.value,label=$__0.label,onSwitch=$__0.onSwitch,defaultSwitched=$__0.defaultSwitched,onBlur=$__0.onBlur,onFocus=$__0.onFocus,onMouseUp=$__0.onMouseUp,onMouseDown=$__0.onMouseDown,onMouseOut=$__0.onMouseOut,onTouchStart=$__0.onTouchStart,onTouchEnd=$__0.onTouchEnd,disableTouchRipple=$__0.disableTouchRipple,disableFocusRipple=$__0.disableFocusRipple,iconClassName=$__0.iconClassName,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{type:1,name:1,value:1,label:1,onSwitch:1,defaultSwitched:1,onBlur:1,onFocus:1,onMouseUp:1,onMouseDown:1,onMouseOut:1,onTouchStart:1,onTouchEnd:1,disableTouchRipple:1,disableFocusRipple:1,iconClassName:1});

    var classes = this.getClasses('mui-enhanced-switch', {
      'mui-is-switched': this.state.switched,
      'mui-is-disabled': this.props.disabled,
      'mui-is-required': this.props.required
    });

    var inputId = this.props.id || UniqueId.generate();

    var labelElement = this.props.label ? (
      React.createElement("label", {className: "mui-switch-label", htmlFor: inputId},
        this.props.label
      )
    ) : null;

    var inputProps = {
      ref: "checkbox",
      type: this.props.inputType,
      name: this.props.name,
      value: this.props.value,
      defaultChecked: this.props.defaultSwitched,
      onBlur: this._handleBlur,
      onFocus: this._handleFocus,
      onMouseUp: this._handleMouseUp,
      onMouseDown: this._handleMouseDown,
      onMouseOut: this._handleMouseOut,
      onTouchStart: this._handleTouchStart,
      onTouchEnd: this._handleTouchEnd
    };

    if (!this.props.hasOwnProperty('checkedLink')) {
      inputProps.onChange = this._handleChange;
    }

    var inputElement = (
      React.createElement("input", React.__spread({},
        other,
        inputProps,
        {className: "mui-enhanced-switch-input"}))
    );

    var touchRipple = (
      React.createElement(TouchRipple, {
        ref: "touchRipple",
        key: "touchRipple",
        centerRipple: true})
    );

    var focusRipple = (
      React.createElement(FocusRipple, {
        key: "focusRipple",
        show: this.state.isKeyboardFocused})
    );

    var ripples = [
      this.props.disabled || disableTouchRipple ? null : touchRipple,
      this.props.disabled || disableFocusRipple ? null : focusRipple
    ];

    iconClassName += ' mui-enhanced-switch-wrap';

    var switchElement = (this.props.iconClassName.indexOf("toggle") == -1) ? (
        React.createElement("div", {className: iconClassName},
          this.props.switchElement,
          ripples
        )
      ) : (
        React.createElement("div", {className: iconClassName},
          React.createElement("div", {className: "mui-toggle-track"}),
          React.createElement(Paper, {className: "mui-toggle-thumb", zDepth: 1}, " ", ripples, " ")
        )
    );

    var labelPositionExist = this.props.labelPosition;

    // Position is left if not defined or invalid.
    var elementsInOrder = (labelPositionExist &&
      (this.props.labelPosition.toUpperCase() === "RIGHT")) ? (
        React.createElement("div", null,
          switchElement,
          labelElement
        )
      ) : (
        React.createElement("div", null,
          labelElement,
          switchElement
        )
    );

    return (
      React.createElement("div", {className: classes},
          inputElement,
          elementsInOrder
      )
    );
  },


  isSwitched: function() {
    return this.refs.checkbox.getDOMNode().checked;
  },

  // no callback here because there is no event
  setSwitched: function(newSwitchedValue) {
    if (!this.props.hasOwnProperty('checked') || this.props.checked == false) {
      this.setState({switched: newSwitchedValue});
      this.refs.checkbox.getDOMNode().checked = newSwitchedValue;
    } else if ("development" !== 'production') {
      var message = 'Cannot call set method while checked is defined as a property.';
      console.error(message);
    }
  },

  getValue: function() {
    return this.refs.checkbox.getDOMNode().value;
  },

  isKeyboardFocused: function() {
    return this.state.isKeyboardFocused;
  },

  _handleChange: function(e) {

    this._tabPressed = false;
    this.setState({
      isKeyboardFocused: false
    });

    var isInputChecked = this.refs.checkbox.getDOMNode().checked;

    if (!this.props.hasOwnProperty('checked')) this.setState({switched: isInputChecked});
    if (this.props.onSwitch) this.props.onSwitch(e, isInputChecked);
  },

  /**
   * Because both the ripples and the checkbox input cannot share pointer
   * events, the checkbox input takes control of pointer events and calls
   * ripple animations manually.
   */

  // Checkbox inputs only use SPACE to change their state. Using ENTER will
  // update the ui but not the input.
  _handleWindowKeydown: function(e) {
    if (e.keyCode == KeyCode.TAB) this._tabPressed = true;
    if (e.keyCode == KeyCode.SPACE && this.state.isKeyboardFocused) {
      this._handleChange(e);
    }
  },

  _handleWindowKeyup: function(e) {
    if (e.keyCode == KeyCode.SPACE && this.state.isKeyboardFocused) {
      this._handleChange(e);
    }
  },

  _handleMouseDown: function(e) {
    //only listen to left clicks
    if (e.button === 0) this.refs.touchRipple.start(e);
  },

  _handleMouseUp: function(e) {
    this.refs.touchRipple.end();
  },

  _handleMouseOut: function(e) {
    this.refs.touchRipple.end();
  },

  _handleTouchStart: function(e) {
    this.refs.touchRipple.start(e);
  },

  _handleTouchEnd: function(e) {
    this.refs.touchRipple.end();
  },

  _handleBlur: function(e) {
    this.setState({
      isKeyboardFocused: false
    });

    if (this.props.onBlur) this.props.onBlur(e);
  },

  _handleFocus: function(e) {
    //setTimeout is needed becuase the focus event fires first
    //Wait so that we can capture if this was a keyboard focus
    //or touch focus
    setTimeout(function() {
      if (this._tabPressed) {
        this.setState({
          isKeyboardFocused: true
        });
      }
    }.bind(this), 150);

    if (this.props.onFocus) this.props.onFocus(e);
  }

});

module.exports = EnhancedSwitch;

},{"./mixins/classable":31,"./mixins/window-listenable":33,"./paper":35,"./ripples/focus-ripple":40,"./ripples/touch-ripple":41,"./utils/key-code":66,"./utils/unique-id":68,"react":72}],19:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');

var EnhancedTextarea = React.createClass({displayName: "EnhancedTextarea",

  mixins: [Classable],

  propTypes: {
    onChange: React.PropTypes.func,
    onHeightChange: React.PropTypes.func,
    textareaClassName: React.PropTypes.string,
    rows: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      rows: 1
    };
  },

  getInitialState: function() {
    return {
      height: this.props.rows * 24
    };
  },

  componentDidMount: function() {
    this._syncHeightWithShadow();
  },

  render: function() {

    var $__0=







      this.props,className=$__0.className,onChange=$__0.onChange,onHeightChange=$__0.onHeightChange,textareaClassName=$__0.textareaClassName,rows=$__0.rows,valueLink=$__0.valueLink,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,onChange:1,onHeightChange:1,textareaClassName:1,rows:1,valueLink:1});

    var classes = this.getClasses('mui-enhanced-textarea');
    var textareaClassName = 'mui-enhanced-textarea-input';
    var style = {
      height: this.state.height + 'px'
    };

    if (this.props.textareaClassName) {
      textareaClassName += ' ' + this.props.textareaClassName;
    }

    if (this.props.hasOwnProperty('valueLink')) {
      other.value = this.props.valueLink.value;
    }

    return (
      React.createElement("div", {className: classes},
        React.createElement("textarea", {
          ref: "shadow",
          className: "mui-enhanced-textarea-shadow",
          tabIndex: "-1",
          rows: this.props.rows,
          defaultValue: this.props.defaultValue,
          readOnly: true,
          value: this.props.value}),
        React.createElement("textarea", React.__spread({},
          other,
          {ref: "input",
          className: textareaClassName,
          rows: this.props.rows,
          style: style,
          onChange: this._handleChange}))
      )
    );
  },

  getInputNode: function() {
    return this.refs.input.getDOMNode();
  },

  _syncHeightWithShadow: function(newValue, e) {
    var shadow = this.refs.shadow.getDOMNode();
    var currentHeight = this.state.height;
    var newHeight;

    if (newValue !== undefined) shadow.value = newValue;
    newHeight = shadow.scrollHeight;

    if (currentHeight !== newHeight) {
      this.setState({height: newHeight});
      if (this.props.onHeightChange) this.props.onHeightChange(e, newHeight);
    }
  },

  _handleChange: function(e) {
    this._syncHeightWithShadow(e.target.value);

    if (this.props.hasOwnProperty('valueLink')) {
      this.props.valueLink.requestChange(e.target.value);
    }

    if (this.props.onChange) this.props.onChange(e);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value != this.props.value) {
      this._syncHeightWithShadow(nextProps.value);
    }
  }
});

module.exports = EnhancedTextarea;

},{"./mixins/classable":31,"react":72}],20:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var EnhancedButton = require('./enhanced-button');

var FlatButton = React.createClass({displayName: "FlatButton",

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    label: function(props, propName, componentName){
      if (!props.children && !props.label) {
        return new Error('Warning: Required prop `label` or `children` was not specified in `'+ componentName + '`.')
      }
    },
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool
  },

  render: function() {
    var $__0=




        this.props,label=$__0.label,primary=$__0.primary,secondary=$__0.secondary,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{label:1,primary:1,secondary:1});
    var classes = this.getClasses('mui-flat-button', {
      'mui-is-primary': !this.props.disabled && primary,
      'mui-is-secondary': !this.props.disabled && !primary && secondary
    });
    var children;

    if (label) children = React.createElement("span", {className: "mui-flat-button-label"}, label);
    else children = this.props.children;

    return (
      React.createElement(EnhancedButton, React.__spread({},  other,
        {className: classes}),
        children
      )
    );
  }

});

module.exports = FlatButton;
},{"./enhanced-button":17,"./mixins/classable":31,"react":72}],21:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var EnhancedButton = require('./enhanced-button');
var FontIcon = require('./font-icon');
var Paper = require('./paper');

var getZDepth = function(disabled) {
  var zDepth = disabled ? 0 : 2;
  return {
    zDepth: zDepth,
    initialZDepth: zDepth
  };
};


var RaisedButton = React.createClass({displayName: "RaisedButton",

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    mini: React.PropTypes.bool,
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onMouseOut: React.PropTypes.func,
    onTouchEnd: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    secondary: React.PropTypes.bool
  },

  componentWillMount: function() {
    this.setState(getZDepth(this.props.disabled));
  },

  componentWillReceiveProps: function(newProps) {
    if(newProps.disabled !== this.props.disabled){
      this.setState(getZDepth(newProps.disabled));
    }
  },

  componentDidMount: function() {
    if ("development" !== 'production') {
      if (this.props.iconClassName && this.props.children) {
        var warning = 'You have set both an iconClassName and a child icon. ' +
                      'It is recommended you use only one method when adding ' +
                      'icons to FloatingActionButtons.';
        console.warn(warning);
      }
    }
  },


  render: function() {
    var $__0=



         this.props,icon=$__0.icon,mini=$__0.mini,secondary=$__0.secondary,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{icon:1,mini:1,secondary:1});
    var classes = this.getClasses('mui-floating-action-button', {
      'mui-is-mini': mini,
      'mui-is-secondary': !this.props.disabled && secondary
    });

    var icon;
    if (this.props.iconClassName) icon = React.createElement(FontIcon, {className: "mui-floating-action-button-icon " + this.props.iconClassName})


    return (
      React.createElement(Paper, {
        className: classes,
        innerClassName: "mui-floating-action-button-inner",
        zDepth: this.state.zDepth,
        circle: true},

        React.createElement(EnhancedButton, React.__spread({},  other,
          {className: "mui-floating-action-button-container",
          onMouseDown: this._handleMouseDown,
          onMouseUp: this._handleMouseUp,
          onMouseOut: this._handleMouseOut,
          onTouchStart: this._handleTouchStart,
          onTouchEnd: this._handleTouchEnd}),

          icon,
          this.props.children

        )

      )
    );
  },

  _handleMouseDown: function(e) {
    //only listen to left clicks
    if (e.button === 0) {
      this.setState({ zDepth: this.state.initialZDepth + 1 });
    }
    if (this.props.onMouseDown) this.props.onMouseDown(e);
  },

  _handleMouseUp: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  },

  _handleMouseOut: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseOut) this.props.onMouseOut(e);
  },

  _handleTouchStart: function(e) {
    this.setState({ zDepth: this.state.initialZDepth + 1 });
    if (this.props.onTouchStart) this.props.onTouchStart(e);
  },

  _handleTouchEnd: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
  }

});

module.exports = RaisedButton;

},{"./enhanced-button":17,"./font-icon":22,"./mixins/classable":31,"./paper":35,"react":72}],22:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');

var FontIcon = React.createClass({displayName: "FontIcon",

  mixins: [Classable],

  render: function() {

    var $__0=


      this.props,className=$__0.className,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1});
    var classes = this.getClasses('mui-font-icon');

    return (
      React.createElement("span", React.__spread({},  other, {className: classes}))
    );
  }

});

module.exports = FontIcon;
},{"./mixins/classable":31,"react":72}],23:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var EnhancedButton = require('./enhanced-button');
var FontIcon = require('./font-icon');
var Tooltip = require('./tooltip');

var IconButton = React.createClass({displayName: "IconButton",

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    iconClassName: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    tooltip: React.PropTypes.string,
    touch: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      tooltipShown: false
    };
  },

  componentDidMount: function() {
    if (this.props.tooltip) {
      this._positionTooltip();
    }
    if ("development" !== 'production') {
      if (this.props.iconClassName && this.props.children) {
        var warning = 'You have set both an iconClassName and a child icon. ' +
                      'It is recommended you use only one method when adding ' +
                      'icons to IconButtons.';
        console.warn(warning);
      }
    }
  },

  render: function() {
    var $__0=


         this.props,tooltip=$__0.tooltip,touch=$__0.touch,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{tooltip:1,touch:1});
    var classes = this.getClasses('mui-icon-button');
    var tooltip;
    var fonticon;

    if (this.props.tooltip) {
      tooltip = (
        React.createElement(Tooltip, {
          ref: "tooltip",
          className: "mui-icon-button-tooltip",
          label: tooltip,
          show: this.state.tooltipShown,
          touch: touch})
      );
    }

    if (this.props.iconClassName) {
      fonticon = (
        React.createElement(FontIcon, {className: this.props.iconClassName})
      );
    }

    return (
      React.createElement(EnhancedButton, React.__spread({},  other,
        {ref: "button",
        centerRipple: true,
        className: classes,
        onBlur: this._handleBlur,
        onFocus: this._handleFocus,
        onMouseOut: this._handleMouseOut,
        onMouseOver: this._handleMouseOver}),

        tooltip,
        fonticon,
        this.props.children

      )
    );
  },

  _positionTooltip: function() {
    var tooltip = this.refs.tooltip.getDOMNode();
    var tooltipWidth = tooltip.offsetWidth;
    var buttonWidth = 48;

    tooltip.style.left = (tooltipWidth - buttonWidth) / 2 * -1 + 'px';
  },

  _showTooltip: function() {
    if (!this.props.disabled) this.setState({ tooltipShown: true });
  },

  _hideTooltip: function() {
    this.setState({ tooltipShown: false });
  },

  _handleBlur: function(e) {
    this._hideTooltip();
    if (this.props.onBlur) this.props.onBlur(e);
  },

  _handleFocus: function(e) {
    this._showTooltip();
    if (this.props.onFocus) this.props.onFocus(e);
  },

  _handleMouseOut: function(e) {
    if (!this.refs.button.isKeyboardFocused()) this._hideTooltip();
    if (this.props.onMouseOut) this.props.onMouseOut(e);
  },

  _handleMouseOver: function(e) {
    this._showTooltip();
    if (this.props.onMouseOver) this.props.onMouseOver(e);
  }

});

module.exports = IconButton;

},{"./enhanced-button":17,"./font-icon":22,"./mixins/classable":31,"./tooltip":60,"react":72}],24:[function(require,module,exports){
var React = require('react');

var InkBar = React.createClass({displayName: "InkBar",

  propTypes: {
    position: React.PropTypes.string
  },

  render: function() {

    var styles = {
      left: this.props.left,
      width: this.props.width
    }

    return (
      React.createElement("div", {className: "mui-ink-bar", style: styles},
        " "
      )
    );
  }

});

module.exports = InkBar;
},{"react":72}],25:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var ClassNames = require('classnames');

var Input = React.createClass({displayName: "Input",

  propTypes: {
    multiline: React.PropTypes.bool,
    inlinePlaceholder: React.PropTypes.bool,
    rows: React.PropTypes.number,
    inputStyle: React.PropTypes.string,
    error: React.PropTypes.string,
    description: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    type: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  mixins: [Classable],

  getInitialState: function() {
    return {
      value: this.props.defaultValue,
      rows: this.props.rows
    };
  },

  getDefaultProps: function() {
    return {
      multiline: false,
      type: "text"
    };
  },

  componentDidMount: function() {
    if ("development" !== 'production') {
      console.warn('Input has been deprecated. Please use TextField instead. See http://material-ui.com/#/components/text-fields');
    }
  },

  render: function() {
    var classes = this.getClasses('mui-input', {
      'mui-floating': this.props.inputStyle === 'floating',
      'mui-text': this.props.type === 'text',
      'mui-error': this.props.error || false,
      'mui-disabled': !!this.props.disabled,
    });
    var placeholder = this.props.inlinePlaceholder ? this.props.placeholder : "";
    var inputIsNotEmpty = !!this.state.value;
    var inputClassName = ClassNames({
      'mui-is-not-empty': inputIsNotEmpty
    });
    var textareaClassName = ClassNames({
      'mui-input-textarea': true,
      'mui-is-not-empty': inputIsNotEmpty
    });
    var inputElement = this.props.multiline ?
      this.props.valueLink ?
        React.createElement("textarea", React.__spread({},  this.props, {ref: "input",
          className: textareaClassName,
          placeholder: placeholder,
          rows: this.state.rows})) :
        React.createElement("textarea", React.__spread({},  this.props, {ref: "input",
          value: this.state.value,
          className: textareaClassName,
          placeholder: placeholder,
          rows: this.state.rows,
          onChange: this._onTextAreaChange})) :
        this.props.valueLink ?
          React.createElement("input", React.__spread({},  this.props, {ref: "input",
            className: inputClassName,
            placeholder: placeholder})) :
          React.createElement("input", React.__spread({},  this.props, {ref: "input",
            className: inputClassName,
            value: this.state.value,
            placeholder: placeholder,
            onChange: this._onInputChange}));
    var placeholderSpan = this.props.inlinePlaceholder ? null :
      React.createElement("span", {className: "mui-input-placeholder", onClick: this._onPlaceholderClick},
        this.props.placeholder
      );

    return (
      React.createElement("div", {ref: this.props.ref, className: classes},
        inputElement,
        placeholderSpan,
        React.createElement("span", {className: "mui-input-highlight"}),
        React.createElement("span", {className: "mui-input-bar"}),
        React.createElement("span", {className: "mui-input-description"}, this.props.description),
        React.createElement("span", {className: "mui-input-error"}, this.props.error)
      )
    );
  },

  getValue: function() {
    return this.state.value;
  },

  setValue: function(txt) {
    this.setState({value: txt});
  },

  clearValue: function() {
    this.setValue('');
  },

  blur: function() {
    if(this.isMounted()) this.refs.input.getDOMNode().blur();
  },

  focus: function() {
    if (this.isMounted()) this.refs.input.getDOMNode().focus();
  },

  _onInputChange: function(e) {
    var value = e.target.value;
    this.setState({value: value});
    if (this.props.onChange) this.props.onChange(e, value);
  },

  _onPlaceholderClick: function(e) {
    this.focus();
  },

  _onTextAreaChange: function(e) {
    this._onInputChange(e);
    this._onLineBreak(e);
  },

  _onLineBreak: function(e) {
    var value = e.target.value;
    var lines = value.split('\n').length;

    if (lines > this.state.rows) {
      if (this.state.rows !== 20) {
        this.setState({ rows: ((this.state.rows) + 1)});
      }
    }
  }

});

module.exports = Input;

},{"./mixins/classable":31,"classnames":69,"react":72}],26:[function(require,module,exports){
var React = require('react'),
  KeyCode = require('./utils/key-code'),
  Classable = require('./mixins/classable'),
  WindowListenable = require('./mixins/window-listenable'),
  Overlay = require('./overlay'),
  Paper = require('./paper'),
  Menu = require('./menu/menu');

var LeftNav = React.createClass({displayName: "LeftNav",

  mixins: [Classable, WindowListenable],

  propTypes: {
    docked: React.PropTypes.bool,
    header: React.PropTypes.element,
    onChange: React.PropTypes.func,
    menuItems: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number
  },

  windowListeners: {
    'keyup': '_onWindowKeyUp'
  },

  getDefaultProps: function() {
    return {
      docked: true
    };
  },

  getInitialState: function() {
    return {
      open: this.props.docked
    };
  },

  toggle: function() {
    this.setState({ open: !this.state.open });
    return this;
  },

  close: function() {
    this.setState({ open: false });
    return this;
  },

  open: function() {
    this.setState({ open: true });
    return this;
  },

  render: function() {
    var classes = this.getClasses('mui-left-nav', {
        'mui-closed': !this.state.open
      }),
      selectedIndex = this.props.selectedIndex,
      overlay;

    if (!this.props.docked) overlay = React.createElement(Overlay, {show: this.state.open, onTouchTap: this._onOverlayTouchTap});

    return (
      React.createElement("div", {className: classes},

        overlay,
        React.createElement(Paper, {
          ref: "clickAwayableElement",
          className: "mui-left-nav-menu",
          zDepth: 2,
          rounded: false},

          this.props.header,
          React.createElement(Menu, {
            ref: "menuItems",
            zDepth: 0,
            menuItems: this.props.menuItems,
            selectedIndex: selectedIndex,
            onItemClick: this._onMenuItemClick})

        )
      )
    );
  },

  _onMenuItemClick: function(e, key, payload) {
    if (this.props.onChange && this.props.selectedIndex !== key) {
      this.props.onChange(e, key, payload);
    }
    if (!this.props.docked) this.close();
  },

  _onOverlayTouchTap: function() {
    this.close();
  },

  _onWindowKeyUp: function(e) {
    if (e.keyCode == KeyCode.ESC &&
        !this.props.docked &&
        this.state.open) {
      this.close();
    }
  }

});

module.exports = LeftNav;
},{"./menu/menu":29,"./mixins/classable":31,"./mixins/window-listenable":33,"./overlay":34,"./paper":35,"./utils/key-code":66,"react":72}],27:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');

var LinkMenuItem = React.createClass({displayName: "LinkMenuItem",

    mixins: [Classable],

    propTypes: {
        index: React.PropTypes.number.isRequired,
        payload: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        target: React.PropTypes.string,
        disabled: React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            disabled: false
        };
    },

    render: function() {
        var classes = this.getClasses('mui-menu-item', {
          'mui-is-disabled': this.props.disabled
        });
        var onClickHandler = (this.props.disabled) ? this._stopLink : undefined;
        // Prevent context menu 'Open In New Tab/Window'
        var linkAttribute = (this.props.disabled) ? 'data-href' : 'href';
        var link = {};
        link[linkAttribute] = this.props.payload

        return (
            React.createElement("a", React.__spread({key: this.props.index, className: classes},  link, {target: this.props.target, onClick: onClickHandler}), this.props.text)
        );
    },

    _stopLink: function(event) {
      event.preventDefault();
    }
});

module.exports = LinkMenuItem;

},{"../mixins/classable":31,"react":72}],28:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var FontIcon = require('../font-icon');
var Toggle = require('../toggle');

var Types = {
  LINK: 'LINK',
  SUBHEADER: 'SUBHEADER',
  NESTED: 'NESTED'
};

var MenuItem = React.createClass({displayName: "MenuItem",

  mixins: [Classable],

  propTypes: {
    index: React.PropTypes.number.isRequired,
    iconClassName: React.PropTypes.string,
    iconRightClassName: React.PropTypes.string,
    attribute: React.PropTypes.string,
    number: React.PropTypes.string,
    data: React.PropTypes.string,
    toggle: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onTouchTap: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onToggle: React.PropTypes.func,
    selected: React.PropTypes.bool
  },

  statics: {
    Types: Types
  },

  getDefaultProps: function() {
    return {
      toggle: false,
      disabled: false
    };
  },

  render: function() {
    var classes = this.getClasses('mui-menu-item', {
      'mui-is-selected': this.props.selected,
      'mui-is-disabled': this.props.disabled
    });
    var icon;
    var data;
    var iconRight;
    var attribute;
    var number;
    var toggle;

    if (this.props.iconClassName) icon = React.createElement(FontIcon, {className: 'mui-menu-item-icon ' + this.props.iconClassName});
    if (this.props.iconRightClassName) iconRight = React.createElement(FontIcon, {className: 'mui-menu-item-icon-right ' + this.props.iconRightClassName});
    if (this.props.data) data = React.createElement("span", {className: "mui-menu-item-data"}, this.props.data);
    if (this.props.number !== undefined) number = React.createElement("span", {className: "mui-menu-item-number"}, this.props.number);
    if (this.props.attribute !== undefined) attribute = React.createElement("span", {className: "mui-menu-item-attribute"}, this.props.attribute);

    if (this.props.toggle) {
      var $__0=






        this.props,toggle=$__0.toggle,onClick=$__0.onClick,onToggle=$__0.onToggle,children=$__0.children,label=$__0.label,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{toggle:1,onClick:1,onToggle:1,children:1,label:1});
      toggle = React.createElement(Toggle, React.__spread({},  other, {onToggle: this._handleToggle}));
    }

    return (
      React.createElement("div", {
        key: this.props.index,
        className: classes,
        onTouchTap: this._handleTouchTap,
        onClick: this._handleOnClick},

        icon,
        this.props.children,
        data,
        attribute,
        number,
        toggle,
        iconRight

      )
    );
  },

  _handleTouchTap: function(e) {
    if (!this.props.disabled && this.props.onTouchTap) this.props.onTouchTap(e, this.props.index);
  },

  _handleOnClick: function(e) {
    if (!this.props.disabled && this.props.onClick) this.props.onClick(e, this.props.index);
  },

  _handleToggle: function(e, toggled) {
    if (!this.props.disabled && this.props.onToggle) this.props.onToggle(e, this.props.index, toggled);
  }

});

module.exports = MenuItem;

},{"../font-icon":22,"../mixins/classable":31,"../toggle":57,"react":72}],29:[function(require,module,exports){
var React = require('react');
var CssEvent = require('../utils/css-event');
var Dom = require('../utils/dom');
var KeyLine = require('../utils/key-line');
var Classable = require('../mixins/classable');
var ClickAwayable = require('../mixins/click-awayable');
var Paper = require('../paper');
var MenuItem = require('./menu-item');
var LinkMenuItem = require('./link-menu-item');
var SubheaderMenuItem = require('./subheader-menu-item');

/***********************
* Nested Menu Component
***********************/
var NestedMenuItem = React.createClass({displayName: "NestedMenuItem",

  mixins: [Classable, ClickAwayable],

  propTypes: {
    index: React.PropTypes.number.isRequired,
    text: React.PropTypes.string,
    menuItems: React.PropTypes.array.isRequired,
    zDepth: React.PropTypes.number,
    disabled: React.PropTypes.bool,
    onItemClick: React.PropTypes.func,
    onItemTap: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false
    };
  },

  getInitialState: function() {
    return { open: false }
  },

  componentClickAway: function() {
    this._closeNestedMenu();
  },

  componentDidMount: function() {
    this._positionNestedMenu();
  },

  componentDidUpdate: function(prevProps, prevState) {
    this._positionNestedMenu();
  },

  render: function() {
    var classes = this.getClasses('mui-nested-menu-item', {
      'mui-open': this.state.open,
      'mui-is-disabled': this.props.disabled
    });

    return (
      React.createElement("div", {className: classes, onMouseEnter: this._openNestedMenu, onMouseLeave: this._closeNestedMenu},
        React.createElement(MenuItem, {index: this.props.index, disabled: this.props.disabled, iconRightClassName: "muidocs-icon-custom-arrow-drop-right", onClick: this._onParentItemClick},
          this.props.text
        ),
        React.createElement(Menu, {
          ref: "nestedMenu",
          menuItems: this.props.menuItems,
          onItemClick: this._onMenuItemClick,
          onItemTap: this._onMenuItemTap,
          hideable: true,
          visible: this.state.open,
          zDepth: this.props.zDepth + 1})
      )
    );
  },

  _positionNestedMenu: function() {
    var el = this.getDOMNode(),
      nestedMenu = this.refs.nestedMenu.getDOMNode();

    nestedMenu.style.left = el.offsetWidth + 'px';
  },

  _openNestedMenu: function() {
    if (!this.props.disabled) this.setState({ open: true });
  },

  _closeNestedMenu: function() {
    this.setState({ open: false });
  },

  _toggleNestedMenu: function() {
    if (!this.props.disabled) this.setState({ open: !this.state.open });
  },

  _onParentItemClick: function() {
    this._toggleNestedMenu();
  },

  _onMenuItemClick: function(e, index, menuItem) {
    if (this.props.onItemClick) this.props.onItemClick(e, index, menuItem);
    this._closeNestedMenu();
  },

  _onMenuItemTap: function(e, index, menuItem) {
    if (this.props.onItemTap) this.props.onItemTap(e, index, menuItem);
    this._closeNestedMenu();
  }

});


/****************
* Menu Component
****************/
var Menu = React.createClass({displayName: "Menu",

  mixins: [Classable],

  propTypes: {
    autoWidth: React.PropTypes.bool,
    onItemTap: React.PropTypes.func,
    onItemClick: React.PropTypes.func,
    onToggleClick: React.PropTypes.func,
    menuItems: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number,
    hideable: React.PropTypes.bool,
    visible: React.PropTypes.bool,
    zDepth: React.PropTypes.number
  },

  getInitialState: function() {
    return { nestedMenuShown: false }
  },

  getDefaultProps: function() {
    return {
      autoWidth: true,
      hideable: false,
      visible: true,
      zDepth: 1
    };
  },

  componentDidMount: function() {
    var el = this.getDOMNode();

    //Set the menu with
    this._setKeyWidth(el);

    //Save the initial menu height for later
    this._initialMenuHeight = el.offsetHeight + KeyLine.Desktop.GUTTER_LESS;

    //Show or Hide the menu according to visibility
    this._renderVisibility();
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.props.visible !== prevProps.visible) this._renderVisibility();
  },

  render: function() {
    var classes = this.getClasses('mui-menu', {
      'mui-menu-hideable': this.props.hideable,
      'mui-visible': this.props.visible
    });

    return (
      React.createElement(Paper, {ref: "paperContainer", zDepth: this.props.zDepth, className: classes},
        this._getChildren()
      )
    );
  },

  _getChildren: function() {
    var children = [],
      menuItem,
      itemComponent,
      isSelected,
      isDisabled;

    //This array is used to keep track of all nested menu refs
    this._nestedChildren = [];

    for (var i=0; i < this.props.menuItems.length; i++) {
      menuItem = this.props.menuItems[i];
      isSelected = i === this.props.selectedIndex;
      isDisabled = (menuItem.disabled === undefined) ? false : menuItem.disabled;

      var $__0=







        menuItem,icon=$__0.icon,data=$__0.data,attribute=$__0.attribute,number=$__0.number,toggle=$__0.toggle,onClick=$__0.onClick,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{icon:1,data:1,attribute:1,number:1,toggle:1,onClick:1});

      switch (menuItem.type) {

        case MenuItem.Types.LINK:
          itemComponent = (
            React.createElement(LinkMenuItem, {
              key: i,
              index: i,
              payload: menuItem.payload,
              target: menuItem.target,
              text: menuItem.text,
              disabled: isDisabled})
          );
          break;

        case MenuItem.Types.SUBHEADER:
          itemComponent = (
            React.createElement(SubheaderMenuItem, {
              key: i,
              index: i,
              text: menuItem.text})
          );
          break;

        case MenuItem.Types.NESTED:
          itemComponent = (
            React.createElement(NestedMenuItem, {
              ref: i,
              key: i,
              index: i,
              text: menuItem.text,
              disabled: isDisabled,
              menuItems: menuItem.items,
              zDepth: this.props.zDepth,
              onItemClick: this._onNestedItemClick,
              onItemTap: this._onNestedItemClick})
          );
          this._nestedChildren.push(i);
          break;

        default:
          itemComponent = (
            React.createElement(MenuItem, React.__spread({},
              other,
              {selected: isSelected,
              key: i,
              index: i,
              icon: menuItem.icon,
              data: menuItem.data,
              attribute: menuItem.attribute,
              number: menuItem.number,
              toggle: menuItem.toggle,
              disabled: isDisabled,
              onClick: this._onItemClick,
              onTouchTap: this._onItemTap}),
              menuItem.text
            )
          );
      }
      children.push(itemComponent);
    }

    return children;
  },

  _setKeyWidth: function(el) {
    var menuWidth = this.props.autoWidth ?
      KeyLine.getIncrementalDim(el.offsetWidth) + 'px' :
      '100%';

    //Update the menu width
    Dom.withoutTransition(el, function() {
      el.style.width = menuWidth;
    });
  },

  _renderVisibility: function() {
    var el;

    if (this.props.hideable) {
      el = this.getDOMNode();
      var innerContainer = this.refs.paperContainer.getInnerContainer().getDOMNode();

      if (this.props.visible) {

        //Open the menu
        el.style.height = this._initialMenuHeight + 'px';

        //Set the overflow to visible after the animation is done so
        //that other nested menus can be shown
        CssEvent.onTransitionEnd(el, function() {
          //Make sure the menu is open before setting the overflow.
          //This is to accout for fast clicks
          if (this.props.visible) innerContainer.style.overflow = 'visible';
        }.bind(this));

      } else {

        //Close the menu
        el.style.height = '0px';

        //Set the overflow to hidden so that animation works properly
        innerContainer.style.overflow = 'hidden';
      }
    }
  },

  _onNestedItemClick: function(e, index, menuItem) {
    if (this.props.onItemClick) this.props.onItemClick(e, index, menuItem);
  },

  _onNestedItemTap: function(e, index, menuItem) {
    if (this.props.onItemTap) this.props.onItemTap(e, index, menuItem);
  },

  _onItemClick: function(e, index) {
    if (this.props.onItemClick) this.props.onItemClick(e, index, this.props.menuItems[index]);
  },

  _onItemTap: function(e, index) {
    if (this.props.onItemTap) this.props.onItemTap(e, index, this.props.menuItems[index]);
  },

  _onItemToggle: function(e, index, toggled) {
    if (this.props.onItemToggle) this.props.onItemToggle(e, index, this.props.menuItems[index], toggled);
  }

});

module.exports = Menu;

},{"../mixins/classable":31,"../mixins/click-awayable":32,"../paper":35,"../utils/css-event":62,"../utils/dom":64,"../utils/key-line":67,"./link-menu-item":27,"./menu-item":28,"./subheader-menu-item":30,"react":72}],30:[function(require,module,exports){
var React = require('react');

var SubheaderMenuItem = React.createClass({displayName: "SubheaderMenuItem",

    propTypes: {
        index: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement("div", {key: this.props.index, className: "mui-subheader"}, this.props.text)
        );
    }

});

module.exports = SubheaderMenuItem;
},{"react":72}],31:[function(require,module,exports){
var React = require('react');
var classNames = require('classnames');

module.exports = {

  propTypes: {
    className: React.PropTypes.string
  },

  getClasses: function(initialClasses, additionalClassObj) {
    var classString = '';

    //Initialize the classString with the classNames that were passed in
    if (this.props.className) classString += ' ' + this.props.className;

    //Add in initial classes
    if (typeof initialClasses === 'object') {
      classString += ' ' + classNames(initialClasses);
    } else {
      classString += ' ' + initialClasses;
    }

    //Add in additional classes
    if (additionalClassObj) classString += ' ' + classNames(additionalClassObj);

    //Convert the class string into an object and run it through the class set
    return classNames(this.getClassSet(classString));
  },

  getClassSet: function(classString) {
    var classObj = {};

    if (classString) {
      classString.split(' ').forEach(function(className) {
        if (className) classObj[className] = true;
      });
    }

    return classObj;
  }

}

},{"classnames":69,"react":72}],32:[function(require,module,exports){
var Events = require('../utils/events');
var Dom = require('../utils/dom');

module.exports = {

  //When the component mounts, listen to click events and check if we need to
  //Call the componentClickAway function.
  componentDidMount: function() {
    if (!this.manuallyBindClickAway) this._bindClickAway();
  },

  componentWillUnmount: function() {
    this._unbindClickAway();
  },

  _checkClickAway: function(e) {
    var el = this.getDOMNode();

    // Check if the target is inside the current component
    if (this.isMounted() &&
      e.target != el &&
      !Dom.isDescendant(el, e.target)) {
      if (this.componentClickAway) this.componentClickAway();
    }
  },

  _bindClickAway: function() {
    Events.on(document, 'click', this._checkClickAway);
  },

  _unbindClickAway: function() {
    Events.off(document, 'click', this._checkClickAway);
  }

};

},{"../utils/dom":64,"../utils/events":65}],33:[function(require,module,exports){
var Events = require('../utils/events');

module.exports = {

  componentDidMount: function() {
    var listeners = this.windowListeners;

    for (var eventName in listeners) {
       var callbackName = listeners[eventName];
       Events.on(window, eventName, this[callbackName]);
    }
  },

  componentWillUnmount: function() {
    var listeners = this.windowListeners;

    for (var eventName in listeners) {
       var callbackName = listeners[eventName];
       Events.off(window, eventName, this[callbackName]);
    }
  }

}
},{"../utils/events":65}],34:[function(require,module,exports){
var React = require('react'),
  Classable = require('./mixins/classable');

var Overlay = React.createClass({displayName: "Overlay",

  mixins: [Classable],

  propTypes: {
    show: React.PropTypes.bool,
    autoLockScrolling: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      autoLockScrolling: true
    };
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.props.autoLockScrolling) (this.props.show) ? this._preventScrolling() : this._allowScrolling();
  },

  render: function() {
    var
      $__0=


        this.props,className=$__0.className,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1}),
      classes = this.getClasses('mui-overlay', {
        'mui-is-shown': this.props.show
      });

    return (
      React.createElement("div", React.__spread({},  other, {className: classes}))
    );
  },

  preventScrolling: function() {
    if (!this.props.autoLockScrolling) this._preventScrolling();
  },

  allowScrolling: function() {
    if (!this.props.autoLockScrolling) this._allowScrolling();
  },

  _preventScrolling: function() {
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
  },

  _allowScrolling: function() {
    var body = document.getElementsByTagName('body')[0];
    body.style.overflow = '';
  }

});

module.exports = Overlay;
},{"./mixins/classable":31,"react":72}],35:[function(require,module,exports){
var React = require('react'),
  Classable = require('./mixins/classable');

var Paper = React.createClass({displayName: "Paper",

  mixins: [Classable],

  propTypes: {
    circle: React.PropTypes.bool,
    innerClassName: React.PropTypes.string,
    innerStyle: React.PropTypes.object,
    rounded: React.PropTypes.bool,
    zDepth: React.PropTypes.oneOf([0,1,2,3,4,5])
  },

  getDefaultProps: function() {
    return {
      innerClassName: '',
      rounded: true,
      zDepth: 1
    };
  },

  render: function() {
    var $__0=





         this.props,className=$__0.className,circle=$__0.circle,innerClassName=$__0.innerClassName,rounded=$__0.rounded,zDepth=$__0.zDepth,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,circle:1,innerClassName:1,rounded:1,zDepth:1}),
      classes = this.getClasses(
        'mui-paper ' +
        'mui-z-depth-' + this.props.zDepth, {
        'mui-rounded': this.props.rounded,
        'mui-circle': this.props.circle
      }),
      insideClasses =
        this.props.innerClassName + ' ' +
        'mui-paper-container ' +
        'mui-z-depth-bottom';

    return (
      React.createElement("div", React.__spread({},  other, {className: classes}),
        React.createElement("div", {ref: "innerContainer", className: insideClasses, style: this.props.innerStyle || {}},
          this.props.children
        )
      )
    );
  },

  getInnerContainer: function() {
    return this.refs.innerContainer;
  }

});

module.exports = Paper;

},{"./mixins/classable":31,"react":72}],36:[function(require,module,exports){
var React = require('react');
var Paper = require('./paper');
var Classable = require('./mixins/classable');
var EnhancedSwitch = require('./enhanced-switch');
var RadioButton = require('./radio-button');

var RadioButtonGroup = React.createClass({displayName: "RadioButtonGroup",

    mixins: [Classable],

    propTypes: {
        name: React.PropTypes.string.isRequired,
    valueSelected: React.PropTypes.string,
    defaultSelected: React.PropTypes.string,
    labelPosition: React.PropTypes.oneOf(['left', 'right']),
        onChange: React.PropTypes.func
    },

  _hasCheckAttribute: function(radioButton) {
    return radioButton.props.hasOwnProperty('checked') &&
      radioButton.props.checked;
  },

  getInitialState: function() {
    return {
      numberCheckedRadioButtons: 0,
      selected: this.props.valueSelected || this.props.defaultSelected || ''
    };
  },

  componentWillMount: function() {
    var cnt = 0;

    this.props.children.forEach(function(option) {
      if (this._hasCheckAttribute(option)) cnt++;
    }, this);

    this.setState({numberCheckedRadioButtons: cnt});
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.hasOwnProperty('valueSelected')) {
      this.setState({selected: nextProps.valueSelected});
    }
  },

    render: function() {

    var options = this.props.children.map(function(option) {

      var $__0=





        option.props,name=$__0.name,value=$__0.value,label=$__0.label,onCheck=$__0.onCheck,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{name:1,value:1,label:1,onCheck:1});

      return React.createElement(RadioButton, React.__spread({},
        other,
        {ref: option.props.value,
        name: this.props.name,
        key: option.props.value,
        value: option.props.value,
        label: option.props.label,
        labelPosition: this.props.labelPosition,
        onCheck: this._onChange,
        checked: option.props.value == this.state.selected}))

        }, this);

        return (
            React.createElement("div", null,
                options
            )
        );
    },

  _updateRadioButtons: function(newSelection) {
    if (this.state.numberCheckedRadioButtons == 0) {
      this.setState({selected: newSelection});
    } else if ("development" !== 'production') {
      var message = "Cannot select a different radio button while another radio button " +
                    "has the 'checked' property set to true.";
      console.error(message);
    }
  },

    _onChange: function(e, newSelection) {
    this._updateRadioButtons(newSelection);

    // Successful update
    if (this.state.numberCheckedRadioButtons == 0) {
      if (this.props.onChange) this.props.onChange(e, newSelection);
    }
    },

  getSelectedValue: function() {
    return this.state.selected;
  },

  setSelectedValue: function(newSelection) {
    this._updateRadioButtons(newSelection);
  },

  clearValue: function() {
    this.setSelectedValue('');
  }

});

module.exports = RadioButtonGroup;

},{"./enhanced-switch":18,"./mixins/classable":31,"./paper":35,"./radio-button":37,"react":72}],37:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var EnhancedSwitch = require('./enhanced-switch');
var RadioButtonOff = require('./svg-icons/toggle-radio-button-off');
var RadioButtonOn = require('./svg-icons/toggle-radio-button-on');

var RadioButton = React.createClass({displayName: "RadioButton",

  mixins: [Classable],

  propTypes: {
    onCheck: React.PropTypes.func
  },

  render: function() {

    var $__0=


      this.props,onCheck=$__0.onCheck,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{onCheck:1});

    var radioButtonElement = (
      React.createElement("div", null,
          React.createElement(RadioButtonOff, {className: "mui-radio-button-target"}),
          React.createElement(RadioButtonOn, {className: "mui-radio-button-fill"})
      )
    );

    var enhancedSwitchProps = {
      ref: "enhancedSwitch",
      inputType: "radio",
      switchElement: radioButtonElement,
      className: "mui-radio-button",
      iconClassName: "mui-radio-button-icon",
      onSwitch: this._handleCheck,
      labelPosition: (this.props.labelPosition) ? this.props.labelPosition : "right"
    };

    return (
      React.createElement(EnhancedSwitch, React.__spread({},
        other,
        enhancedSwitchProps))
    );
  },

  // Only called when selected, not when unselected.
  _handleCheck: function(e) {
    if (this.props.onCheck) this.props.onCheck(e, this.props.value);
  },

  isChecked: function() {
    return this.refs.enhancedSwitch.isSwitched();
  },

  setChecked: function(newCheckedValue) {
    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    this.setState({switched: newCheckedValue});
  },

  getValue: function() {
    return this.refs.enhancedSwitch.getValue();
  }
});

module.exports = RadioButton;

},{"./enhanced-switch":18,"./mixins/classable":31,"./svg-icons/toggle-radio-button-off":51,"./svg-icons/toggle-radio-button-on":52,"react":72}],38:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var EnhancedButton = require('./enhanced-button');
var Paper = require('./paper');

var RaisedButton = React.createClass({displayName: "RaisedButton",

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    label: function(props, propName, componentName){
      if (!props.children && !props.label) {
        return new Error('Warning: Required prop `label` or `children` was not specified in `'+ componentName + '`.')
      }
    },
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onMouseOut: React.PropTypes.func,
    onTouchEnd: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool
  },

  getInitialState: function() {
    var zDepth = this.props.disabled ? 0 : 1;
    return {
      zDepth: zDepth,
      initialZDepth: zDepth
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var zDepth = nextProps.disabled ? 0 : 1;
    this.setState({
      zDepth: zDepth,
      initialZDepth: zDepth
    });
  },

  render: function() {
    var $__0=



         this.props,label=$__0.label,primary=$__0.primary,secondary=$__0.secondary,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{label:1,primary:1,secondary:1});
    var classes = this.getClasses('mui-raised-button', {
      'mui-is-primary': !this.props.disabled && primary,
      'mui-is-secondary': !this.props.disabled && !primary && secondary
    });
    var children;

    if (label) children = React.createElement("span", {className: "mui-raised-button-label"}, label);
    else children = this.props.children;

    return (
      React.createElement(Paper, {className: classes, zDepth: this.state.zDepth},
        React.createElement(EnhancedButton, React.__spread({},  other,
          {className: "mui-raised-button-container",
          onMouseUp: this._handleMouseUp,
          onMouseDown: this._handleMouseDown,
          onMouseOut: this._handleMouseOut,
          onTouchStart: this._handleTouchStart,
          onTouchEnd: this._handleTouchEnd}),
          children
        )
      )
    );
  },

  _handleMouseDown: function(e) {
    //only listen to left clicks
    if (e.button === 0) {
      this.setState({ zDepth: this.state.initialZDepth + 1 });
    }
    if (this.props.onMouseDown) this.props.onMouseDown(e);
  },

  _handleMouseUp: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  },

  _handleMouseOut: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseOut) this.props.onMouseOut(e);
  },

  _handleTouchStart: function(e) {
    this.setState({ zDepth: this.state.initialZDepth + 1 });
    if (this.props.onTouchStart) this.props.onTouchStart(e);
  },

  _handleTouchEnd: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
  }

});

module.exports = RaisedButton;
},{"./enhanced-button":17,"./mixins/classable":31,"./paper":35,"react":72}],39:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');

var RippleCircle = React.createClass({displayName: "RippleCircle",

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    started: React.PropTypes.bool,
    ending: React.PropTypes.bool
  },

  render: function() {
    var $__0=




      this.props,innerClassName=$__0.innerClassName,started=$__0.started,ending=$__0.ending,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{innerClassName:1,started:1,ending:1});
    var classes = this.getClasses('mui-ripple-circle', {
      'mui-is-started': this.props.started,
      'mui-is-ending': this.props.ending
    });

    return (
      React.createElement("div", React.__spread({},  other, {className: classes}),
        React.createElement("div", {className: "mui-ripple-circle-inner"})
      )
    );
  }

});

module.exports = RippleCircle;
},{"../mixins/classable":31,"react":72}],40:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');

var FocusRipple = React.createClass({displayName: "FocusRipple",

  mixins: [Classable],

  propTypes: {
    show: React.PropTypes.bool
  },

  componentDidMount: function() {
    this._setRippleSize();
  },

  render: function() {
    var classes = this.getClasses('mui-focus-ripple', {
      'mui-is-shown': this.props.show
    });

    return (
      React.createElement("div", {className: classes},
        React.createElement("div", {className: "mui-focus-ripple-inner"})
      )
    );
  },

  _setRippleSize: function() {
    var el = this.getDOMNode();
    var height = el.offsetHeight;
    var width = el.offsetWidth;
    var size = Math.max(height, width);

    el.style.height = size + 'px';
    el.style.top = (size / 2 * -1) + (height / 2) + 'px';
  }

});

module.exports = FocusRipple;
},{"../mixins/classable":31,"react":72}],41:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var Dom = require('../utils/dom');
var RippleCircle = require('./circle');

var TouchRipple = React.createClass({displayName: "TouchRipple",

  mixins: [Classable],

  propTypes: {
    centerRipple: React.PropTypes.bool,
    className: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      ripples: [{
        key: 0,
        started: false,
        ending: false
      }]
    };
  },

  render: function() {
    var classes = this.getClasses('mui-touch-ripple');

    return (
      React.createElement("div", {
        onMouseUp: this._handleMouseUp,
        onMouseDown: this._handleMouseDown,
        onMouseOut: this._handleMouseOut,
        onTouchStart: this._handleTouchStart,
        onTouchEnd: this._handleTouchEnd},
        React.createElement("div", {className: classes},
          this._getRippleElements()
        ),
        this.props.children
      )
    );
  },

  start: function(e) {
    var ripples = this.state.ripples;
    var nextKey = ripples[ripples.length-1].key + 1;
    var style = !this.props.centerRipple ? this._getRippleStyle(e) : {};
    var ripple;

    //Start the next unstarted ripple
    for (var i = 0; i < ripples.length; i++) {
      ripple = ripples[i];
      if (!ripple.started) {
        ripple.started = true;
        ripple.style = style;
        break;
      }
    };

    //Add an unstarted ripple at the end
    ripples.push({
      key: nextKey,
      started: false,
      ending: false
    });

    //Re-render
    this.setState({
      ripples: ripples
    });
  },

  end: function() {
    var ripples = this.state.ripples;
    var ripple;
    var endingRipple;

    //End the the next un-ended ripple
    for (var i = 0; i < ripples.length; i++) {
      ripple = ripples[i];
      if (ripple.started && !ripple.ending) {
        ripple.ending = true;
        endingRipple = ripple;
        break;
      }
    };

    //Only update if a ripple was found
    if (endingRipple) {
      //Re-render
      this.setState({
        ripples: ripples
      });

      //Wait 2 seconds and remove the ripple from DOM
      setTimeout(function() {
        ripples.shift();
        if (this.isMounted()) {
          this.setState({
            ripples: ripples
          });
        }
      }.bind(this), 2000);
    }
  },

  _handleMouseDown: function(e) {
    //only listen to left clicks
    if (e.button === 0) this.start(e);
  },

  _handleMouseUp: function(e) {
    this.end();
  },

  _handleMouseOut: function(e) {
    this.end();
  },

  _handleTouchStart: function(e) {
    this.start(e);
  },

  _handleTouchEnd: function(e) {
    this.end();
  },

  _getRippleStyle: function(e) {
    var style = {};
    var el = this.getDOMNode();
    var elHeight = el.offsetHeight;
    var elWidth = el.offsetWidth;
    var offset = Dom.offset(el);
    var pageX = e.pageX == undefined ? e.nativeEvent.pageX : e.pageX;
    var pageY = e.pageY == undefined ? e.nativeEvent.pageY : e.pageY;
    var pointerX = pageX - offset.left;
    var pointerY = pageY - offset.top;
    var topLeftDiag = this._calcDiag(pointerX, pointerY);
    var topRightDiag = this._calcDiag(elWidth - pointerX, pointerY);
    var botRightDiag = this._calcDiag(elWidth - pointerX, elHeight - pointerY);
    var botLeftDiag = this._calcDiag(pointerX, elHeight - pointerY);
    var rippleRadius = Math.max(
      topLeftDiag, topRightDiag, botRightDiag, botLeftDiag
    );
    var rippleSize = rippleRadius * 2;
    var left = pointerX - rippleRadius;
    var top = pointerY - rippleRadius;

    style.height = rippleSize + 'px';
    style.width = rippleSize + 'px';
    style.top = top + 'px';
    style.left = left + 'px';

    return style;
  },

  _calcDiag: function(a, b) {
    return Math.sqrt((a * a) + (b * b));
  },

  _getRippleElements: function() {
    return this.state.ripples.map(function(ripple) {
      return (
        React.createElement(RippleCircle, {
          key: ripple.key,
          started: ripple.started,
          ending: ripple.ending,
          style: ripple.style})
      );
    }.bind(this));
  }

});

module.exports = TouchRipple;

},{"../mixins/classable":31,"../utils/dom":64,"./circle":39,"react":72}],42:[function(require,module,exports){
var React = require('react'),
    Paper = require('./paper'),
    Classable = require('./mixins/classable'),
    Draggable = require('react-draggable2');

var Slider = React.createClass({displayName: "Slider",

  propTypes: {
    required: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    error: React.PropTypes.string,
    description: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    onDragStart: React.PropTypes.func,
    onDragStop: React.PropTypes.func
  },

  mixins: [Classable],

  getDefaultProps: function() {
    return {
      required: true,
      disabled: false,
      defaultValue: 0,
      min: 0,
      max: 1,
      dragging: false
    };
  },

  getInitialState: function() {
    var value = this.props.value;
    if (value == null) value = this.props.defaultValue;
    var percent = (value - this.props.min) / (this.props.max - this.props.min);
    if (isNaN(percent)) percent = 0;
    return {
      value: value,
      percent: percent
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value != null) {
      this.setValue(nextProps.value);
    }
  },

  render: function() {
    var classes = this.getClasses('mui-input', {
      'mui-error': this.props.error != null
    });

    var sliderClasses = this.getClasses('mui-slider', {
      'mui-slider-zero': this.state.percent == 0,
      'mui-disabled': this.props.disabled
    });

    var percent = this.state.percent;
    if (percent > 1) percent = 1; else if (percent < 0) percent = 0;

    return (
      React.createElement("div", {className: classes, style: this.props.style},
        React.createElement("span", {className: "mui-input-highlight"}),
        React.createElement("span", {className: "mui-input-bar"}),
        React.createElement("span", {className: "mui-input-description"}, this.props.description),
        React.createElement("span", {className: "mui-input-error"}, this.props.error),
        React.createElement("div", {className: sliderClasses, onClick: this._onClick},
          React.createElement("div", {ref: "track", className: "mui-slider-track"},
            React.createElement(Draggable, {axis: "x", bound: "point",
              cancel: this.props.disabled ? '*' : null,
              start: {x: (percent * 100) + '%'},
              onStart: this._onDragStart,
              onStop: this._onDragStop,
              onDrag: this._onDragUpdate},
              React.createElement("div", {className: "mui-slider-handle", tabIndex: 0})
            ),
            React.createElement("div", {className: "mui-slider-selection mui-slider-selection-low",
              style: {width: (percent * 100) + '%'}},
              React.createElement("div", {className: "mui-slider-selection-fill"})
            ),
            React.createElement("div", {className: "mui-slider-selection mui-slider-selection-high",
              style: {width: ((1 - percent) * 100) + '%'}},
              React.createElement("div", {className: "mui-slider-selection-fill"})
            )
          )
        ),
        React.createElement("input", {ref: "input", type: "hidden",
          name: this.props.name,
          value: this.state.value,
          required: this.props.required,
          min: this.props.min,
          max: this.props.max,
          step: this.props.step})
      )
    );
  },

  getValue: function() {
    return this.state.value;
  },

  setValue: function(i) {
    // calculate percentage
    var percent = (i - this.props.min) / (this.props.max - this.props.min);
    if (isNaN(percent)) percent = 0;
    // update state
    this.setState({
      value: i,
      percent: percent
    });
  },

  getPercent: function() {
    return this.state.percent;
  },

  setPercent: function (percent) {
    var value = this._percentToValue(percent);
    this.setState({value: value, percent: percent});
  },

  clearValue: function() {
    this.setValue(0);
  },

  _onClick: function (e) {
    // let draggable handle the slider
    if (this.state.dragging || this.props.disabled) return;
    var value = this.state.value;
    var node = this.refs.track.getDOMNode();
    var boundingClientRect = node.getBoundingClientRect();
    var offset = e.clientX - boundingClientRect.left;
    this._updateWithChangeEvent(e, offset / node.clientWidth);
  },

  _onDragStart: function(e, ui) {
    this.setState({
      dragging: true
    });
    if (this.props.onDragStart) this.props.onDragStart(e, ui);
  },

  _onDragStop: function(e, ui) {
    this.setState({
      dragging: false
    });
    if (this.props.onDragStop) this.props.onDragStop(e, ui);
  },

  _onDragUpdate: function(e, ui) {
    if (!this.state.dragging) return;
    if (!this.props.disabled) this._dragX(e, ui.position.left);
  },

  _dragX: function(e, pos) {
    var max = this.refs.track.getDOMNode().clientWidth;
    if (pos < 0) pos = 0; else if (pos > max) pos = max;
    this._updateWithChangeEvent(e, pos / max);
  },

  _updateWithChangeEvent: function(e, percent) {
    if (this.state.percent === percent) return;
    this.setPercent(percent);
    var value = this._percentToValue(percent);
    if (this.props.onChange) this.props.onChange(e, value);
  },

  _percentToValue: function(percent) {
    return percent * (this.props.max - this.props.min) + this.props.min;
  }

});

module.exports = Slider;

},{"./mixins/classable":31,"./paper":35,"react":72,"react-draggable2":70}],43:[function(require,module,exports){
var React = require('react');
var CssEvent = require('./utils/css-event');
var Classable = require('./mixins/classable');
var ClickAwayable = require('./mixins/click-awayable');
var FlatButton = require('./flat-button');

var Snackbar = React.createClass({displayName: "Snackbar",

  mixins: [Classable, ClickAwayable],

  manuallyBindClickAway: true,

  propTypes: {
    action: React.PropTypes.string,
    message: React.PropTypes.string.isRequired,
    openOnMount: React.PropTypes.bool,
    onActionTouchTap: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      open: this.props.openOnMount || false
    };
  },

  componentClickAway: function() {
    this.dismiss();
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.open != this.state.open) {
      if (this.state.open) {
        //Only Bind clickaway after transition finishes
        CssEvent.onTransitionEnd(this.getDOMNode(), function() {
          this._bindClickAway();
        }.bind(this));
      } else {
        this._unbindClickAway();
      }
    }
  },

  render: function() {
    var classes = this.getClasses('mui-snackbar', {
      'mui-is-open': this.state.open
    });
    var action;

    if (this.props.action) {
      action = (
        React.createElement(FlatButton, {
          className: "mui-snackbar-action",
          label: this.props.action,
          onTouchTap: this.props.onActionTouchTap})
      );
    }

    return (
      React.createElement("span", {className: classes},
        React.createElement("span", {className: "mui-snackbar-message"}, this.props.message),
        action
      )
    );
  },

  show: function() {
    this.setState({ open: true });
  },

  dismiss: function() {
    this.setState({ open: false });
  }

});

module.exports = Snackbar;
},{"./flat-button":20,"./mixins/classable":31,"./mixins/click-awayable":32,"./utils/css-event":62,"react":72}],44:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var DropDownArrow = React.createClass({displayName: "DropDownArrow",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
        React.createElement("polygon", {points: "7,9.5 12,14.5 17,9.5 "})
      )
    );
  }

});

module.exports = DropDownArrow;
},{"./svg-icon":48,"react":72}],45:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var NavigationChevronLeft = React.createClass({displayName: "NavigationChevronLeft",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
        React.createElement("path", {d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})
      )
    );
  }

});

module.exports = NavigationChevronLeft;
},{"./svg-icon":48,"react":72}],46:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var NavigationChevronLeft = React.createClass({displayName: "NavigationChevronLeft",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
        React.createElement("path", {d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})
      )
    );
  }

});

module.exports = NavigationChevronLeft;


},{"./svg-icon":48,"react":72}],47:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var NavigationMenu = React.createClass({displayName: "NavigationMenu",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
        React.createElement("path", {d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})
      )
    );
  }

});

module.exports = NavigationMenu;
},{"./svg-icon":48,"react":72}],48:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');

var SvgIcon = React.createClass({displayName: "SvgIcon",

  mixins: [Classable],

  render: function() {
    var classes = this.getClasses('mui-svg-icon');

    return (
      React.createElement("svg", React.__spread({},
        this.props,
        {className: classes,
        viewBox: "0 0 24 24"}),
        this.props.children
      )
    );
  }

});

module.exports = SvgIcon;
},{"../mixins/classable":31,"react":72}],49:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var ToggleCheckBoxChecked = React.createClass({displayName: "ToggleCheckBoxChecked",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
        React.createElement("path", {d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10,17l-5-5l1.4-1.4 l3.6,3.6l7.6-7.6L19,8L10,17z"})
      )
    );
  }

});

module.exports = ToggleCheckBoxChecked;
},{"./svg-icon":48,"react":72}],50:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var ToggleCheckBoxOutlineBlank = React.createClass({displayName: "ToggleCheckBoxOutlineBlank",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
        React.createElement("path", {d: "M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z"})
      )
    );
  }

});

module.exports = ToggleCheckBoxOutlineBlank;
},{"./svg-icon":48,"react":72}],51:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var RadioButtonOff = React.createClass({displayName: "RadioButtonOff",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
        React.createElement("path", {d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})
      )
    );
  }

});

module.exports = RadioButtonOff;
},{"./svg-icon":48,"react":72}],52:[function(require,module,exports){
var React = require('react');
var SvgIcon = require('./svg-icon');

var RadioButtonOn = React.createClass({displayName: "RadioButtonOn",

  render: function() {
    return (
      React.createElement(SvgIcon, React.__spread({},  this.props),
       React.createElement("path", {d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})
      )
    );
  }

});

module.exports = RadioButtonOn;
},{"./svg-icon":48,"react":72}],53:[function(require,module,exports){
var React = require('react');
var Classable = require('../mixins/classable');
var TabTemplate = require('./tabTemplate');


var Tab = React.createClass({displayName: "Tab",

  mixins: [Classable],

  propTypes: {
    handleTouchTap: React.PropTypes.func,
    selected: React.PropTypes.bool
  },


  handleTouchTap: function(){
    this.props.handleTouchTap(this.props.tabIndex, this);
  },

  render: function(){
    var styles = {
      width: this.props.width
    };

    var classes = this.getClasses('mui-tab-item', {
      'mui-tab-is-active': this.props.selected
    });

    return (
    React.createElement("div", {className: classes, style: styles, onTouchTap: this.handleTouchTap, routeName: this.props.route},
      this.props.label
    )
    )
  }

});

module.exports = Tab;
},{"../mixins/classable":31,"./tabTemplate":54,"react":72}],54:[function(require,module,exports){
var React = require('react');

var TabTemplate = React.createClass({displayName: "TabTemplate",

  render: function(){

    return (
      React.createElement("div", {className: "mui-tab-template"},
        this.props.children
      )
    );
  },
});

module.exports = TabTemplate;
},{"react":72}],55:[function(require,module,exports){
var React = require('react/addons');
var Tab = require('./tab');
var TabTemplate = require('./tabTemplate');
var InkBar = require('../ink-bar');

var Tabs = React.createClass({displayName: "Tabs",

  propTypes: {
    initialSelectedIndex: React.PropTypes.number,
    onActive: React.PropTypes.func,
    tabWidth: React.PropTypes.number
  },

  getInitialState: function(){
    var selectedIndex = 0;
    if (this.props.initialSelectedIndex && this.props.initialSelectedIndex < this.props.children.length) {
      selectedIndex = this.props.initialSelectedIndex;
    }
    return {
      selectedIndex: selectedIndex
    };
  },

  getEvenWidth: function(){
    return (
      parseInt(window
        .getComputedStyle(this.getDOMNode())
        .getPropertyValue('width'), 10)
    );
  },

  componentDidMount: function(){
    if(this.props.tabWidth) {
      if(!(this.props.children.length * this.props.tabWidth > this.getEvenWidth())){
        this.setState({
          width: this.props.tabWidth,
          fixed: false
        });
        return;
      }
    }
    this.setState({
      width: this.getEvenWidth(),
      fixed: true
    });
  },

  handleTouchTap: function(tabIndex, tab){
    if (this.props.onChange && this.state.selectedIndex !== tabIndex) {
      this.props.onChange(tabIndex, tab);
    }

    this.setState({selectedIndex: tabIndex});
    //default CB is _onActive. Can be updated in tab.jsx
    if(tab.props.onActive) tab.props.onActive(tab);
  },

  render: function(){
    var _this = this;
    var width = this.state.fixed ?
      this.state.width/this.props.children.length :
      this.props.tabWidth;
    var left = width * this.state.selectedIndex || 0;
    var currentTemplate;
    var tabs = React.Children.map(this.props.children, function(tab, index){
      if(tab.type.displayName === "Tab"){
        if(_this.state.selectedIndex === index) currentTemplate = tab.props.children;
         return React.addons.cloneWithProps(tab, {
            key: index,
            selected: _this.state.selectedIndex === index,
            tabIndex: index,
            width: width,
            handleTouchTap: _this.handleTouchTap
          })
      } else {
        var type = tab.type.displayName || tab.type;
        throw "Tabs only accepts Tab Components as children. Found " + type + " as child number " + (index + 1) + " of Tabs";
      }
    });

    return (
      React.createElement("div", {className: "mui-tabs-container"},
        React.createElement("div", {className: "mui-tab-item-container"},
          tabs
        ),
        React.createElement(InkBar, {left: left, width: width}),
        React.createElement(TabTemplate, null,
          currentTemplate
        )
      )
    )
  },

});

module.exports = Tabs;

},{"../ink-bar":24,"./tab":53,"./tabTemplate":54,"react/addons":71}],56:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var UniqueId = require('./utils/unique-id');
var EnhancedTextarea = require('./enhanced-textarea');

var TextField = React.createClass({displayName: "TextField",

  mixins: [Classable],

  propTypes: {
    errorText: React.PropTypes.string,
    floatingLabelText: React.PropTypes.string,
    hintText: React.PropTypes.string,
    id: React.PropTypes.string,
    multiLine: React.PropTypes.bool,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    onEnterKeyDown: React.PropTypes.func,
    type: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      type: 'text'
    };
  },

  getInitialState: function() {
    return {
      errorText: this.props.errorText,
      hasValue: this.props.value || this.props.defaultValue ||
        (this.props.valueLink && this.props.valueLink.value)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var hasErrorProp = nextProps.hasOwnProperty('errorText');
    var hasValueLinkProp = nextProps.hasOwnProperty('valueLink');
    var hasValueProp = nextProps.hasOwnProperty('value');
    var hasNewDefaultValue = nextProps.defaultValue !== this.props.defaultValue;
    var newState = {};

    if (hasValueProp) {
      newState.hasValue = nextProps.value;
    } else if (hasValueLinkProp) {
      newState.hasValue = nextProps.valueLink.value;
    } else if (hasNewDefaultValue) {
      newState.hasValue = nextProps.defaultValue;
    }

    if (hasErrorProp) newState.errorText = nextProps.errorText;
    if (newState) this.setState(newState);
  },

  render: function() {
    var $__0=











      this.props,className=$__0.className,errorText=$__0.errorText,floatingLabelText=$__0.floatingLabelText,hintText=$__0.hintText,id=$__0.id,multiLine=$__0.multiLine,onBlur=$__0.onBlur,onChange=$__0.onChange,onFocus=$__0.onFocus,type=$__0.type,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,errorText:1,floatingLabelText:1,hintText:1,id:1,multiLine:1,onBlur:1,onChange:1,onFocus:1,type:1});

    var classes = this.getClasses('mui-text-field', {
      'mui-has-error': this.props.errorText,
      'mui-has-floating-labels': this.props.floatingLabelText,
      'mui-has-value': this.state.hasValue,
      'mui-is-disabled': this.props.disabled,
      'mui-is-focused': this.state.isFocused,
      'mui-is-multiLine': this.props.multiLine
    });

    var inputId = this.props.id || UniqueId.generate();

    var errorTextElement = this.state.errorText ? (
      React.createElement("div", {className: "mui-text-field-error"}, this.state.errorText)
    ) : null;

    var hintTextElement = this.props.hintText ? (
      React.createElement("div", {className: "mui-text-field-hint"}, this.props.hintText)
    ) : null;

    var floatingLabelTextElement = this.props.floatingLabelText ? (
      React.createElement("label", {
        className: "mui-text-field-floating-label",
        htmlFor: inputId},
        this.props.floatingLabelText
      )
    ) : null;

    var inputProps;
    var inputElement;

    inputProps = {
      ref: 'input',
      className: 'mui-text-field-input',
      id: inputId,
      onBlur: this._handleInputBlur,
      onFocus: this._handleInputFocus,
      onKeyDown: this._handleInputKeyDown
    };

    if (!this.props.hasOwnProperty('valueLink')) {
      inputProps.onChange = this._handleInputChange;
    }

    inputElement = this.props.multiLine ? (
      React.createElement(EnhancedTextarea, React.__spread({},
        other,
        inputProps,
        {onHeightChange: this._handleTextAreaHeightChange,
        textareaClassName: "mui-text-field-textarea"}))
    ) : (
      React.createElement("input", React.__spread({},
        other,
        inputProps,
        {type: this.props.type}))
    );

    return (
      React.createElement("div", {className: classes},

        floatingLabelTextElement,
        hintTextElement,
        inputElement,

        React.createElement("hr", {className: "mui-text-field-underline"}),
        React.createElement("hr", {className: "mui-text-field-focus-underline"}),

        errorTextElement

      )
    );
  },

  blur: function() {
    if (this.isMounted()) this._getInputNode().blur();
  },

  clearValue: function() {
    this.setValue('');
  },

  focus: function() {
    if (this.isMounted()) this._getInputNode().focus();
  },

  getValue: function() {
    return this.isMounted() ? this._getInputNode().value : undefined;
  },

  setErrorText: function(newErrorText) {
    if ("development" !== 'production' && this.props.hasOwnProperty('errorText')) {
      console.error('Cannot call TextField.setErrorText when errorText is defined as a property.');
    } else if (this.isMounted()) {
      this.setState({errorText: newErrorText});
    }
  },

  setValue: function(newValue) {
    if ("development" !== 'production' && this._isControlled()) {
      console.error('Cannot call TextField.setValue when value or valueLink is defined as a property.');
    } else if (this.isMounted()) {
      this._getInputNode().value = newValue;
      this.setState({hasValue: newValue});
    }
  },

  _getInputNode: function() {
    return this.props.multiLine ?
      this.refs.input.getInputNode() : this.refs.input.getDOMNode();
  },

  _handleInputBlur: function(e) {
    this.setState({isFocused: false});
    if (this.props.onBlur) this.props.onBlur(e);
  },

  _handleInputChange: function(e) {
    this.setState({hasValue: e.target.value});
    if (this.props.onChange) this.props.onChange(e);
  },

  _handleInputFocus: function(e) {
    this.setState({isFocused: true});
    if (this.props.onFocus) this.props.onFocus(e);
  },

  _handleInputKeyDown: function(e) {
    if (e.keyCode === 13 && this.props.onEnterKeyDown) this.props.onEnterKeyDown(e);
    if (this.props.onKeyDown) this.props.onKeyDown(e);
  },

  _handleTextAreaHeightChange: function(e, height) {
    var newHeight = height + 24;
    if (this.props.floatingLabelText) newHeight += 24;
    this.getDOMNode().style.height = newHeight + 'px';
  },

  _isControlled: function() {
    return this.props.hasOwnProperty('value') ||
      this.props.hasOwnProperty('valueLink');
  }

});

module.exports = TextField;

},{"./enhanced-textarea":19,"./mixins/classable":31,"./utils/unique-id":68,"react":72}],57:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');
var Paper = require('./paper');
var EnhancedSwitch = require('./enhanced-switch');

var Toggle = React.createClass({displayName: "Toggle",

  mixins: [Classable],

  propTypes: {
    onToggle: React.PropTypes.func,
    toggled: React.PropTypes.bool,
    defaultToggled: React.PropTypes.bool
  },

  render: function() {
    var $__0=


      this.props,onToggle=$__0.onToggle,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{onToggle:1});

    var toggleElement = (
      React.createElement("div", null,
        React.createElement("div", {className: "mui-toggle-track"}),
        React.createElement(Paper, {className: "mui-toggle-thumb", zDepth: 1})
      )
    );

    var enhancedSwitchProps = {
      ref: "enhancedSwitch",
      inputType: "checkbox",
      switchElement: toggleElement,
      className: "mui-toggle",
      iconClassName: "mui-toggle-icon",
      onSwitch: this._handleToggle,
      defaultSwitched: this.props.defaultToggled,
      labelPosition: (this.props.labelPosition) ? this.props.labelPosition : "left"
    };

    if (this.props.hasOwnProperty('toggled')) enhancedSwitchProps.checked = this.props.toggled;

    return (
      React.createElement(EnhancedSwitch, React.__spread({},
        other,
        enhancedSwitchProps))
    );
  },

  isToggled: function() {
    return this.refs.enhancedSwitch.isSwitched();
  },

  setToggled: function(newToggledValue) {
    this.refs.enhancedSwitch.setSwitched(newToggledValue);
  },

  _handleToggle: function(e, isInputChecked) {
    if (this.props.onToggle) this.props.onToggle(e, isInputChecked);
  }
});

module.exports = Toggle;

},{"./enhanced-switch":18,"./mixins/classable":31,"./paper":35,"react":72}],58:[function(require,module,exports){
var Classable = require('./mixins/classable');
var React = require('react');

var ToolbarGroup = React.createClass({displayName: "ToolbarGroup",

  propTypes: {
    float: React.PropTypes.string
  },

  mixins: [Classable],

  render: function() {

    var classes = this.getClasses('mui-toolbar-group', {
      'mui-left': this.props.float === 'left',
      'mui-right': this.props.float === 'right'
    });

    return (
      React.createElement("div", {className: classes},
        this.props.children
      )
    );
  }

});

module.exports = ToolbarGroup;

},{"./mixins/classable":31,"react":72}],59:[function(require,module,exports){
var Classable = require('./mixins/classable');
var React = require('react');

var Toolbar = React.createClass({displayName: "Toolbar",

  mixins: [Classable],

  render: function() {
    var classes = this.getClasses('mui-toolbar', {
    });

    return (
      React.createElement("div", {className: classes},
        this.props.children
      )
    );
  }

});

module.exports = Toolbar;

},{"./mixins/classable":31,"react":72}],60:[function(require,module,exports){
var React = require('react');
var Classable = require('./mixins/classable');

var Tooltip = React.createClass({displayName: "Tooltip",

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    show: React.PropTypes.bool,
    touch: React.PropTypes.bool
  },

  componentDidMount: function() {
    this._setRippleSize();
  },

  componentDidUpdate: function(prevProps, prevState) {
    this._setRippleSize();
  },

  render: function() {
    var $__0=


         this.props,className=$__0.className,label=$__0.label,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,label:1});
    var classes = this.getClasses('mui-tooltip', {
      'mui-is-shown': this.props.show,
      'mui-is-touch': this.props.touch
    });

    return (
      React.createElement("div", React.__spread({},  other, {className: classes}),
        React.createElement("div", {ref: "ripple", className: "mui-tooltip-ripple"}),
        React.createElement("span", {className: "mui-tooltip-label"}, this.props.label)
      )
    );
  },

  _setRippleSize: function() {
    var ripple = this.refs.ripple.getDOMNode();
    var tooltipSize = this.getDOMNode().offsetWidth;
    var ripplePadding = this.props.touch ? 45 : 20;
    var rippleSize = tooltipSize + ripplePadding + 'px';

    if (this.props.show) {
      ripple.style.height = rippleSize;
      ripple.style.width = rippleSize;
    } else {
      ripple.style.width = '0px';
      ripple.style.height = '0px';
    }
  }

});

module.exports = Tooltip;
},{"./mixins/classable":31,"react":72}],61:[function(require,module,exports){
var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Classable = require('../mixins/classable');

var SlideIn = React.createClass({displayName: "SlideIn",

  mixins: [Classable],

  propTypes: {
    direction: React.PropTypes.oneOf(['left', 'right', 'up', 'down'])
  },

  getDefaultProps: function() {
    return {
      direction: 'left'
    };
  },

  render: function() {
    var $__0=



      this.props,className=$__0.className,direction=$__0.direction,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,direction:1});
    var classes = this.getClasses('mui-transition-slide-in');

    classes += ' mui-is-' + this.props.direction;

    //Add a custom className to every child
    React.Children.forEach(this.props.children, function(child) {
      child.props.className = child.props.className ?
        child.props.className + ' mui-transition-slide-in-child':
        'mui-transition-slide-in-child';
    });

    return (
      React.createElement(ReactCSSTransitionGroup, React.__spread({},  other,
        {className: classes,
        transitionName: "mui-transition-slide-in",
        component: "div"}),
        this.props.children
      )
    );
  }

});

module.exports = SlideIn;
},{"../mixins/classable":31,"react/addons":71}],62:[function(require,module,exports){
var Events = require('./events');

module.exports = {

  _testSupportedProps: function(props) {
    var i,
      undefined,
      el = document.createElement('div');

    for (i in props) {
      if (props.hasOwnProperty(i) && el.style[i] !== undefined) {
        return props[i];
      }
    }
  },

  //Returns the correct event name to use
  transitionEndEventName: function() {
    return this._testSupportedProps({
      'transition':'transitionend',
      'OTransition':'otransitionend',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    });
  },

  animationEndEventName: function() {
    return this._testSupportedProps({
      'animation': 'animationend',
      '-o-animation': 'oAnimationEnd',
      '-moz-animation': 'animationend',
      '-webkit-animation': 'webkitAnimationEnd'
    });
  },

  onTransitionEnd: function (el, callback) {
    var transitionEnd = this.transitionEndEventName();

    Events.once(el, transitionEnd, function() {
      return callback();
    });
  },

  onAnimationEnd: function (el, callback) {
    var animationEnd = this.animationEndEventName();

    Events.once(el, animationEnd, function() {
      return callback();
    });
  }

};
},{"./events":65}],63:[function(require,module,exports){
module.exports = {

  addDays: function(d, days) {
    var newDate = this.clone(d);
    newDate.setDate(d.getDate() + days);
    return newDate;
  },

  addMonths: function(d, months) {
    var newDate = this.clone(d);
    newDate.setMonth(d.getMonth() + months);
    return newDate;
  },

  clone: function(d) {
    return new Date(d.getTime());
  },

  getDaysInMonth: function(d) {
    var resultDate = this.getFirstDayOfMonth(d);

    resultDate.setMonth(resultDate.getMonth() + 1);
    resultDate.setDate(resultDate.getDate() - 1);

    return resultDate.getDate();
  },

  getFirstDayOfMonth: function(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  },

  getFullMonth: function(d) {
    var month = d.getMonth();
    switch (month) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
    }
  },

  getShortMonth: function(d) {
    var month = d.getMonth();
    switch (month) {
      case 0: return 'Jan';
      case 1: return 'Feb';
      case 2: return 'Mar';
      case 3: return 'Apr';
      case 4: return 'May';
      case 5: return 'Jun';
      case 6: return 'Jul';
      case 7: return 'Aug';
      case 8: return 'Sep';
      case 9: return 'Oct';
      case 10: return 'Nov';
      case 11: return 'Dec';
    }
  },

  getDayOfWeek: function(d) {
    var dow = d.getDay();
    switch (dow) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
    }
  },

  getWeekArray: function(d) {
    var dayArray = [];
    var daysInMonth = this.getDaysInMonth(d);
    var daysInWeek;
    var emptyDays;
    var firstDayOfWeek;
    var week;
    var weekArray = [];

    for (var i = 1; i <= daysInMonth; i++) {
      dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
    };

    while (dayArray.length) {
      firstDayOfWeek = dayArray[0].getDay();
      daysInWeek = 7 - firstDayOfWeek;
      emptyDays = 7 - daysInWeek;
      week = dayArray.splice(0, daysInWeek);

      for (var i = 0; i < emptyDays; i++) {
        week.unshift(null);
      };

      weekArray.push(week);
    }

    return weekArray;
  },

  format: function(date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var y = date.getFullYear();
    return m + '/' + d + '/' + y;
  },

  isEqualDate: function(d1, d2) {
    return d1 && d2 &&
      (d1.getFullYear() === d2.getFullYear()) &&
      (d1.getMonth() === d2.getMonth()) &&
      (d1.getDate() === d2.getDate());
  },

  monthDiff: function(d1, d2) {
    var m;
    m = (d1.getFullYear() - d2.getFullYear()) * 12;
    m += d1.getMonth();
    m -= d2.getMonth();
    return m;
  }

}
},{}],64:[function(require,module,exports){
module.exports = {

  isDescendant: function(parent, child) {
    var node = child.parentNode;

    while (node != null) {
      if (node == parent) return true;
      node = node.parentNode;
    }

    return false;
  },

  offset: function(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  },

  addClass: function(el, className) {
    if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;
  },

  removeClass: function(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  },

  hasClass: function(el, className) {
    if (el.classList)
      return el.classList.contains(className);
    else
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  },

  toggleClass: function(el, className) {
    if (this.hasClass(el, className))
      this.removeClass(el, className);
    else
      this.addClass(el, className);
  },

  forceRedraw: function(el) {
    var originalDisplay = el.style.display;

    el.style.display = 'none';
    el.offsetHeight;
    el.style.display = originalDisplay;
  },

  withoutTransition: function(el, callback) {
    //turn off transition
    el.style.transition = 'none';

    callback();

    //force a redraw
    this.forceRedraw(el);

    //put the transition back
    el.style.transition = '';
  }

}
},{}],65:[function(require,module,exports){
module.exports = {

  once: function(el, type, callback) {
    var typeArray = type.split(' ');
    var recursiveFunction = function(e){
      e.target.removeEventListener(e.type, recursiveFunction);
      return callback(e);
    };

    for (var i = typeArray.length - 1; i >= 0; i--) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },

  // IE8+ Support
  on: function(el, type, callback) {
    if(el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      el.attachEvent('on' + type, function() {
        callback.call(el);
      });
    }
  },

  // IE8+ Support
  off: function(el, type, callback) {
    if(el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      el.detachEvent('on' + type, callback);
    }
  }
};
},{}],66:[function(require,module,exports){
module.exports = {
  DOWN: 40,
  ESC: 27,
  ENTER: 13,
  LEFT: 37,
  RIGHT: 39,
  SPACE: 32,
  TAB: 9,
  UP: 38
}
},{}],67:[function(require,module,exports){
module.exports = {

  Desktop: {
    GUTTER: 24,
    GUTTER_LESS: 16,
    INCREMENT: 64,
    MENU_ITEM_HEIGHT: 32
  },

  getIncrementalDim: function(dim) {
    return Math.ceil(dim / this.Desktop.INCREMENT) * this.Desktop.INCREMENT;
  }
}

},{}],68:[function(require,module,exports){
var index = 0;

module.exports = {
  generate: function() {
    return "mui-id-" + (index++);
  }
};

},{}],69:[function(require,module,exports){
function classNames() {
    var classes = '';
    var arg;

    for (var i = 0; i < arguments.length; i++) {
        arg = arguments[i];
        if (!arg) {
            continue;
        }

        if ('string' === typeof arg || 'number' === typeof arg) {
            classes += ' ' + arg;
        } else if (Object.prototype.toString.call(arg) === '[object Array]') {
            classes += ' ' + classNames.apply(null, arg);
        } else if ('object' === typeof arg) {
            for (var key in arg) {
                if (!arg.hasOwnProperty(key) || !arg[key]) {
                    continue;
                }
                classes += ' ' + key;
            }
        }
    }
    return classes.substr(1);
}

// safely export classNames in case the script is included directly on a page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = classNames;
}

},{}],70:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var emptyFunction = function () {};

// for accessing browser globals
var root = typeof window !== 'undefined' ? window : this;
var bodyElement;
if (typeof document !== 'undefined' && 'body' in document) {
  bodyElement = document.body;
}

function updateBoundState (state, bound) {
  if (!bound) return state;
  bound = String(bound);
  var boundTop = !!~bound.indexOf('top');
  var boundRight = !!~bound.indexOf('right');
  var boundBottom = !!~bound.indexOf('bottom');
  var boundLeft = !!~bound.indexOf('left');
  var boundAll = !!~bound.indexOf('all') ||
    !(boundTop || boundRight || boundBottom || boundLeft);
  var boundBox = !~bound.indexOf('point');
  state.boundTop = boundAll || boundTop;
  state.boundRight = boundAll || boundRight;
  state.boundBottom = boundAll || boundBottom;
  state.boundLeft = boundAll || boundLeft;
  state.boundBox = boundBox;
  return state;
};

function createUIEvent(draggable) {
  return {
    position: {
      top: draggable.state.offsetTop,
      left: draggable.state.offsetLeft
    }
  };
}

function canDragY(draggable) {
  return draggable.props.axis === 'both' ||
      draggable.props.axis === 'y';
}

function canDragX(draggable) {
  return draggable.props.axis === 'both' ||
      draggable.props.axis === 'x';
}

function isFunction(func) {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]'
}

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array, callback) {
  for (var i = 0, length = array.length, element = null; i < length, element = array[i]; i++) {
    if (callback.apply(callback, [element, i, array])) return element;
  }
}

function matchesSelector(el, selector) {
  var method = findInArray([
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector'
  ], function(method){
    return isFunction(el[method]);
  });

  return el[method].call(el, selector);
}

// @credits: http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
var isTouchDevice = 'ontouchstart' in root // works on most browsers
                 || 'onmsgesturechange' in root; // works on ie10 on ms surface

// look ::handleDragStart
//function isMultiTouch(e) {
//  return e.touches && Array.isArray(e.touches) && e.touches.length > 1
//}

/**
 * simple abstraction for dragging events names
 * */
var dragEventFor = (function () {
  var eventsFor = {
    touch: {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    },
    mouse: {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    }
  };
  return eventsFor[isTouchDevice ? 'touch' : 'mouse'];
})();

/**
 * get {clientX, clientY} positions of control
 * */
function getControlPosition(e) {
  var position = (e.touches && e.touches[0]) || e;
  return {
    clientX: position.clientX,
    clientY: position.clientY
  }
}

function addEvent(el, event, handler) {
  if (!el) { return; }
  if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    el['on' + event] = handler;
  }
}

function removeEvent(el, event, handler) {
  if (!el) { return; }
  if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    el['on' + event] = null;
  }
}

module.exports = React.createClass({
  displayName: 'Draggable',
  mixins: [React.addons.PureRenderMixin],

  propTypes: {
    /**
     * `axis` determines which axis the draggable can move.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     *
     * Defaults to 'both'.
     */
    axis: React.PropTypes.oneOf(['both', 'x', 'y']),

    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *  var App = React.createClass({
     *      render: function () {
     *        return (
     *          <Draggable handle=".handle">
     *            <div>
     *                <div className="handle">Click me to drag</div>
     *                <div>This is some other content</div>
     *            </div>
     *          </Draggable>
     *        );
     *      }
     *  });
     * ```
     */
    handle: React.PropTypes.string,

    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *  var App = React.createClass({
     *      render: function () {
     *          return(
     *              <Draggable cancel=".cancel">
     *                  <div>
     *                    <div className="cancel">You can't drag from here</div>
     *            <div>Dragging here works fine</div>
     *                  </div>
     *              </Draggable>
     *          );
     *      }
     *  });
     * ```
     */
    cancel: React.PropTypes.string,

    /**
     * `bound` determines whether to bound the movement to the parent box.
     *
     * The property takes a list of space-separated strings. The Draggable
     * is bounded by the nearest DOMNode.offsetParent. To set the offset
     * parent, give it a position value other than 'static'.
     *
     * Optionally choose one or more bounds from:
     * 'top' bounds movement to the top edge of the parent box.
     * 'right' bounds movement to the right edge of the parent box.
     * 'bottom' bounds movement to the bottom edge of the parent box.
     * 'left' bounds movement to the left edge of the parent box.
     * 'all' bounds movement to all edges (default if not specified).
     *
     * Optionally choose one anchor from:
     * 'point' to constrain only the top-left corner.
     * 'box' to constrain the entire box (default if not specified).
     *
     * You may use more than one bound, e.g. 'top left point'. Set to a
     * falsy value to disable.
     *
     * Defaults to 'all box'.
     */
    bound: React.PropTypes.string,

    /**
     * `grid` specifies the x and y that dragging should snap to.
     *
     * Example:
     *
     * ```jsx
     *   var App = React.createClass({
     *       render: function () {
     *           return (
     *              <Draggable grid={[25, 25]}>
     *                   <div>I snap to a 25 x 25 grid</div>
     *               </Draggable>
     *           );
     *      }
     *   });
     * ```
     */
    grid: React.PropTypes.arrayOf(React.PropTypes.number),

    /**
     * `constrain` takes a function to constrain the dragging.
     *
     * Example:
     *
     * ```jsx
     *   function constrain (snap) {
     *         function constrainOffset (offset, prev) {
     *               var delta = offset - prev;
     *               if (Math.abs(delta) >= snap) {
     *                     return prev + (delta < 0 ? -snap : snap);
     *               }
     *               return prev;
     *         }
     *         return function (pos) {
     *               return {
     *                     top: constrainOffset(pos.top, pos.prevTop),
     *                     left: constrainOffset(pos.left, pos.prevLeft)
     *               };
     *         };
     *   }
     *   var App = React.createClass({
     *       render: function () {
     *           return (
     *               <Draggable constrain={constrain}>
     *                   <div>I snap to a 25 x 25 grid</div>
     *               </Draggable>
     *           );
     *       }
     *   });
     * ```
     */
    constrain: React.PropTypes.func,

    /**
     * `start` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *  var App = React.createClass({
     *      render: function () {
     *          return (
     *              <Draggable start={{x: 25, y: 25}}>
     *                  <div>I start with left: 25px; top: 25px;</div>
     *              </Draggable>
     *          );
     *      }
     *  });
     * ```
     */
    start: React.PropTypes.object,

    /**
     * `zIndex` specifies the zIndex to use while dragging.
     *
     * Example:
     *
     * ```jsx
     *  var App = React.createClass({
     *      render: function () {
     *          return (
     *              <Draggable zIndex={100}>
     *                  <div>I have a zIndex</div>
     *              </Draggable>
     *          );
     *      }
     *  });
     * ```
     */
    zIndex: React.PropTypes.number,

    /**
     * `useChild` determines whether to use the first child as root.
     *
     * If false, a div is created. This option is required if any children
     * have a ref.
     *
     * Defaults to true.
     */
    useChild: React.PropTypes.bool,

    /**
     * Called when dragging starts.
     *
     * Example:
     *
     * ```js
     *  function (event, ui) {}
     * ```
     *
     * `event` is the Event that was triggered.
     * `ui` is an object:
     *
     * ```js
     *  {
     *    position: {top: 0, left: 0}
     *  }
     * ```
     */
    onStart: React.PropTypes.func,

    /**
     * Called while dragging.
     *
     * Example:
     *
     * ```js
     *  function (event, ui) {}
     * ```
     *
     * `event` is the Event that was triggered.
     * `ui` is an object:
     *
     * ```js
     *  {
     *    position: {top: 0, left: 0}
     *  }
     * ```
     */
    onDrag: React.PropTypes.func,

    /**
     * Called when dragging stops.
     *
     * Example:
     *
     * ```js
     *  function (event, ui) {}
     * ```
     *
     * `event` is the Event that was triggered.
     * `ui` is an object:
     *
     * ```js
     *  {
     *    position: {top: 0, left: 0}
     *  }
     * ```
     */
    onStop: React.PropTypes.func,

    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed, since it'll always be blocked (due to that there's internal use of onMouseDown)
     *
     */
    onMouseDown: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      axis: 'both',
      bound: null,
      handle: null,
      cancel: null,
      grid: null,
      start: {},
      zIndex: NaN,
      useChild: true,
      onStart: emptyFunction,
      onDrag: emptyFunction,
      onStop: emptyFunction,
      onMouseDown: emptyFunction
    };
  },

  getInitialState: function () {
    var state = {
      // Whether or not currently dragging
      dragging: false,

      // Pointer offset on screen
      clientX: 0, clientY: 0,

      // DOMNode offset relative to parent
      offsetLeft: this.props.start.x || 0, offsetTop: this.props.start.y || 0
    };

    updateBoundState(state, this.props.bound);

    return state;
  },

  componentWillReceiveProps: function (nextProps) {
    var state = updateBoundState({}, nextProps.bound);
    if (nextProps.start) {
      if (nextProps.start.x != null) {
        state.offsetLeft = nextProps.start.x || 0;
      }
      if (nextProps.start.y != null) {
        state.offsetTop = nextProps.start.y || 0;
      }
    }
    this.setState(state);
  },

  componentWillUnmount: function() {
    // Remove any leftover event handlers
    removeEvent(root, dragEventFor['move'], this.handleDrag);
    removeEvent(root, dragEventFor['end'], this.handleDragEnd);
  },

  handleDragStart: function (e) {
    // todo: write right implementation to prevent multitouch drag
    // prevent multi-touch events
    // if (isMultiTouch(e)) {
    //     this.handleDragEnd.apply(e, arguments);
    //     return
    // }

    // Make it possible to attach event handlers on top of this one
    this.props.onMouseDown(e);

    // Short circuit if handle or cancel prop was provided and selector doesn't match
    if ((this.props.handle && !matchesSelector(e.target, this.props.handle)) ||
      (this.props.cancel && matchesSelector(e.target, this.props.cancel))) {
      return;
    }

    var dragPoint = getControlPosition(e);

    // Initiate dragging
    this.setState({
      dragging: true,
      clientX: dragPoint.clientX,
      clientY: dragPoint.clientY
    });

    // Call event handler
    this.props.onStart(e, createUIEvent(this));

    // Add event handlers
    addEvent(root, dragEventFor['move'], this.handleDrag);
    addEvent(root, dragEventFor['end'], this.handleDragEnd);

    // Add dragging class to body element
    if (bodyElement) bodyElement.className += ' react-draggable-dragging';
  },

  handleDragEnd: function (e) {
    // Short circuit if not currently dragging
    if (!this.state.dragging) {
      return;
    }

    // Turn off dragging
    this.setState({
      dragging: false
    });

    // Call event handler
    this.props.onStop(e, createUIEvent(this));

    // Remove event handlers
    removeEvent(root, dragEventFor['move'], this.handleDrag);
    removeEvent(root, dragEventFor['end'], this.handleDragEnd);

    // Remove dragging class from body element
    if (bodyElement) {
      var className = bodyElement.className;
      bodyElement.className =
        className.replace(/(?:^|\s+)react-draggable-dragging\b/, ' ');
    }
  },

  handleDrag: function (e) {
    var dragPoint = getControlPosition(e);
    var offsetLeft = this._toPixels(this.state.offsetLeft);
    var offsetTop = this._toPixels(this.state.offsetTop);

    var state = {
      offsetLeft: offsetLeft,
      offsetTop: offsetTop
    };

    // Get parent DOM node
    var node = this.getDOMNode();
    var offsetParent = node.offsetParent;
    var offset, boundingValue;

    if (canDragX(this)) {
      // Calculate updated position
      offset = offsetLeft + dragPoint.clientX - this.state.clientX;

      // Bound movement to parent box
      if (this.state.boundLeft) {
        boundingValue = state.offsetLeft - node.offsetLeft;
        if (offset < boundingValue) {
          offset = boundingValue;
        }
      }
      if (this.state.boundRight) {
        boundingValue += offsetParent.clientWidth;
        if (this.state.boundBox) {
          boundingValue -= node.offsetWidth;
        }
        if (offset > boundingValue) {
          offset = boundingValue;
        }
      }
      // Update left
      state.offsetLeft = offset;
    }

    if (canDragY(this)) {
      // Calculate updated position
      offset = offsetTop + dragPoint.clientY - this.state.clientY;
      // Bound movement to parent box
      if (this.state.boundTop) {
        boundingValue = state.offsetTop - node.offsetTop;
        if (offset < boundingValue) {
          offset = boundingValue;
        }
      }
      if (this.state.boundBottom) {
        boundingValue += offsetParent.clientHeight;
        if (this.state.boundBox) {
          boundingValue -= node.offsetHeight;
        }
        if (offset > boundingValue) {
          offset = boundingValue;
        }
      }
      // Update top
      state.offsetTop = offset;
    }

    var constrain = this.props.constrain;
    var grid = this.props.grid;

    // Backwards-compatibility for snap to grid
    if (!constrain && Array.isArray(grid)) {
      var constrainOffset = function (offset, prev, snap) {
        var delta = offset - prev;
        if (Math.abs(delta) >= snap) {
          return prev + parseInt(delta / snap, 10) * snap;
        }
        return prev;
      };
      constrain = function (pos) {
        return {
          left: constrainOffset(pos.left, pos.prevLeft, grid[0]),
          top: constrainOffset(pos.top, pos.prevTop, grid[1])
        };
      };
    }

    // Constrain if function has been provided
    var positions;
    if (constrain) {
      // Constrain positions
      positions = constrain({
        prevLeft: this.state.offsetLeft,
        prevTop: this.state.offsetTop,
        left: state.offsetLeft,
        top: state.offsetTop
      });
      if (positions) {
        // Update left
        if ('left' in positions && !isNaN(positions.left)) {
          state.offsetLeft = positions.left;
        }
        // Update top
        if ('top' in positions && !isNaN(positions.top)) {
          state.offsetTop = positions.top;
        }
      }
    }

    // Save new state
    state.clientX = this.state.clientX + (state.offsetLeft - offsetLeft);
    state.clientY = this.state.clientY + (state.offsetTop - offsetTop);
    this.setState(state);

    // Call event handler
    this.props.onDrag(e, createUIEvent(this));
  },

  onTouchStart: function (e) {
    e.preventDefault(); // prevent for scroll
    return this.handleDragStart.apply(this, arguments);
  },

  render: function () {
    var style = {
      top: this.state.offsetTop,
      left: this.state.offsetLeft
    };

    // Set zIndex if currently dragging and prop has been provided
    if (this.state.dragging && !isNaN(this.props.zIndex)) {
      style.zIndex = this.props.zIndex;
    }

    var props = {
      style: style,
      className: 'react-draggable',

      onMouseDown: this.handleDragStart,
      onTouchStart: this.onTouchStart,

      onMouseUp: this.handleDragEnd,
      onTouchEnd: this.handleDragEnd
    };

    // Reuse the child provided
    // This makes it flexible to use whatever element is wanted (div, ul, etc)
    if (this.props.useChild) {
      return React.addons.cloneWithProps(React.Children.only(this.props.children), props);
    }

    return React.DOM.div(props, this.props.children);
  },

  _toPixels: function (value) {

    // Support percentages
    if (typeof value == 'string' && value.slice(-1) == '%') {
      return parseInt((+value.replace('%', '') / 100) *
        this.getDOMNode().offsetParent.clientWidth, 10) || 0;
    }

    // Invalid values become zero
    var i = parseInt(value, 10);
    if (isNaN(i) || !isFinite(i)) return 0;

    return i;
  }

});

},{"react/addons":71}],71:[function(require,module,exports){
//module.exports = require('./lib/ReactWithAddons');
module.exports = window.React;

},{}],72:[function(require,module,exports){
// module.exports = require('./lib/React');
module.exports = window.React;

},{}]},{},[1])
