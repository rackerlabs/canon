(function (global, define) {
  var globalDefine = global.define;
/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                name = baseParts.concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            return req.apply(undef, aps.call(arguments, 0).concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

define("../../node_modules/almond/almond", function(){});

/*!
  * klass: a classical JS OOP façade
  * https://github.com/ded/klass
  * License MIT (c) Dustin Diaz & Jacob Thornton 2012
  */

!function (name, definition) {
  if (typeof define == 'function') define('klass',definition)
  else if (typeof module != 'undefined') module.exports = definition()
  else this[name] = definition()
}('klass', function () {
  var context = this
    , old = context.klass
    , f = 'function'
    , fnTest = /xyz/.test(function () {xyz}) ? /\bsupr\b/ : /.*/
    , proto = 'prototype'

  function klass(o) {
    return extend.call(isFn(o) ? o : function () {}, o, 1)
  }

  function isFn(o) {
    return typeof o === f
  }

  function wrap(k, fn, supr) {
    return function () {
      var tmp = this.supr
      this.supr = supr[proto][k]
      var undef = {}.fabricatedUndefined
      var ret = undef
      try {
        ret = fn.apply(this, arguments)
      } finally {
        this.supr = tmp
      }
      return ret
    }
  }

  function process(what, o, supr) {
    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        what[k] = isFn(o[k])
          && isFn(supr[proto][k])
          && fnTest.test(o[k])
          ? wrap(k, o[k], supr) : o[k]
      }
    }
  }

  function extend(o, fromSub) {
    // must redefine noop each time so it doesn't inherit from previous arbitrary classes
    function noop() {}
    noop[proto] = this[proto]
    var supr = this
      , prototype = new noop()
      , isFunction = isFn(o)
      , _constructor = isFunction ? o : this
      , _methods = isFunction ? {} : o
    function fn() {
      if (this.initialize) this.initialize.apply(this, arguments)
      else {
        fromSub || isFunction && supr.apply(this, arguments)
        _constructor.apply(this, arguments)
      }
    }

    fn.methods = function (o) {
      process(prototype, o, supr)
      fn[proto] = prototype
      return this
    }

    fn.methods.call(fn, _methods).prototype.constructor = fn

    fn.extend = arguments.callee
    fn[proto].implement = fn.statics = function (o, optFn) {
      o = typeof o == 'string' ? (function () {
        var obj = {}
        obj[o] = optFn
        return obj
      }()) : o
      process(this, o, supr)
      return this
    }

    return fn
  }

  klass.noConflict = function () {
    context.klass = old
    return this
  }
  context.klass = klass

  return klass
});
define('canon/core/component', ['klass'], function (klass) {

  var Component = klass({
    _element: null,
    _isDisposed: false,

    attach: function (selector) {
      if (this._element) {
        throw 'Component is already attached.';
      }

      this._element = $(selector);
    },
    dispose: function () {
      if (this._isDisposed) {
        return;
      }

      this._isDisposed = true;
      this.disposeInternal();
    },
    disposeInternal: function () {
      this._element = null;
    },
    getElement: function () {
      return this._element;
    }
  });

  return Component;
});

define('canon/menu', ['canon/core/component'], function (Component) {

  var Menu;

  Menu = Component.extend({
    _isVisible: false,

    attach: function (selector) {
      this.supr(selector);

      if (!this._element.hasClass('rs-dropdown')) {
        throw 'Component must be attached to element with "rs-dropdown".';
      }

      $('.rs-dropdown-menu', this._element).addClass('hidden');

      $(document).on('click.menu', $.proxy(function (e) {
        if ($.contains(this._element.context, e.target)) {
          return;
        }

        this.hide();
      }, this));

      this._element.on('click.menu', '.rs-dropdown-toggle', $.proxy(function () {
        this.toggle();
      }, this));

      this._element.on('click.menu', '.rs-dropdown-menu a', $.proxy(function () {
        this.hide();
      }, this));
    },
    show: function () {

      var menuElement;

      this._isVisible = true;

      menuElement = $('.rs-dropdown-menu', this._element);
      menuElement.removeClass('hidden');
      menuElement.addClass('visible');
    },
    hide: function () {

      var menuElement;

      this._isVisible = false;

      menuElement = $('.rs-dropdown-menu', this._element);
      menuElement.addClass('hidden');
      menuElement.removeClass('visible');
    },
    toggle: function () {
      this._isVisible ? this.hide() : this.show();
    },
    disposeInternal: function () {
      this._element.off('click.menu');
      $(document).off('click.menu');

      this.supr();
    }
  });

  return Menu;
});

define('canon/core/positioning', [], function () {
  return {
    /**
     * Positions an element relative to the bottom-right corner
     * of a target element. If the provided offset results in the
     * element being moved offscreen, it positions the element
     * relative to the opposite corner and flips the offset.
     *
     * @method
     * @param {Element} element
     * @param {Element} target
     * @param {Object} position
     */
    offset: function (element, target, position) {

      var page, targetOffset, elementOffset;

      page = $(document);
      targetOffset = target.offset();

      elementOffset = {
        top: target.outerHeight() + targetOffset.top + position.top,
        left: target.outerWidth() + targetOffset.left + position.left
      };

      if ((element.outerWidth() + elementOffset.left) > page.outerWidth()) {
        elementOffset.left = targetOffset.left - element.outerWidth() - position.left;
      }

      if ((element.outerHeight() + elementOffset.top) > page.outerHeight()) {
        elementOffset.top = targetOffset.top - element.outerHeight() - position.top;
      }

      element.offset(elementOffset);
    }
  };
});

define('canon/tooltip', ['canon/core/component', 'canon/core/positioning'], function (Component, positioning) {

  var THRESHOLD = 500, OFFSET = 0, Tooltip;

  function extractTitleFromToggle() {
    this._title = this._element.attr('title');
    this._element.removeAttr('title');
  }

  function createTooltipWithTitle(title) {

    var innerContent;

    innerContent = $('<div class="rs-tooltip-inner"></div>');
    innerContent.html(title);

    this._content = $('<div class="rs-tooltip"></div>');
    this._content.append(innerContent);
    this._content.appendTo('body');
  }

  function showTooltip(tooltip) {
    setTimeout(function () {
      if (tooltip._isToggleActive) {
        tooltip.show();
      }
    }, THRESHOLD);
  }

  function hideTooltip(tooltip) {
    setTimeout(function () {
      if (tooltip._isToggleActive || tooltip._isTooltipActive) {
        return;
      }

      tooltip.hide();
    }, THRESHOLD);
  }

  Tooltip = Component.extend({
    _title: null,
    _content: null,
    _isToggleActive: false,
    _isTooltipActive: false,

    attach: function (selector) {
      this.supr(selector);

      extractTitleFromToggle.call(this);
      createTooltipWithTitle.call(this, this._title);

      this._element.on('mouseover.tooltip', $.proxy(function () {
        this._isToggleActive = true;
        showTooltip(this);
      }, this));

      this._element.on('mouseout.tooltip', $.proxy(function () {
        this._isToggleActive = false;
        hideTooltip(this);
      }, this));

      this._content.on('mouseover.tooltip', $.proxy(function () {
        this._isTooltipActive = true;
      }, this));

      this._content.on('mouseout.tooltip', $.proxy(function () {
        this._isTooltipActive = false;
        hideTooltip(this);
      }, this));

      this.hide();
    },
    show: function () {
      this._content.addClass('visible');
      this._content.removeClass('hidden');

      positioning.offset(this._content, this._element, {
        top: OFFSET,
        left: OFFSET
      });
    },
    hide: function () {
      this._content.addClass('hidden');
      this._content.removeClass('visible');
    },
    disposeInternal: function () {
      this._element.attr('title', this._title);
      this._element.off('mouseover.tooltip');
      this._element.off('mouseout.tooltip');

      this._content.remove();
      this._content.off('mouseover.tooltip');
      this._content.off('mouseout.tooltip');
      this._content = null;

      this.supr();
    },
    getContent: function () {
      return this._content;
    }
  });

  return Tooltip;
});

define('canon', ['canon/menu', 'canon/tooltip'], function (Menu, Tooltip) {

  var canon = {};

  canon.Menu = Menu;
  canon.Tooltip = Tooltip;

  return canon;
});

  var canon = require('canon');

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = canon;
  }
  else if (globalDefine) {
    (function (define) {
      define(function () { return canon; });
    }(globalDefine));
  }
  else {
    global['canon'] = canon;
  }
}(this));
