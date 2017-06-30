tui.util.defineNamespace("fedoc.content", {});
fedoc.content["base_common.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Mixin object for base class\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar _ = require('underscore');\n\n/**\n * Mixin object for base class\n * @mixin\n * @exports module:base/common\n */\nvar common = {\n    /**\n     * 주어진 객체의 프라퍼티들을 this에 복사해서 추가한다.\n     * @param  {object} properties 추가할 프라퍼티 객체\n     */\n    setOwnProperties: function(properties) {\n        _.each(properties, function(value, key) {\n            this[key] = value;\n        }, this);\n    }\n};\nmodule.exports = common;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"