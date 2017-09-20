window.storyFormat({
  "name":"TwingeX",
  "version":"0.0.29",
  "author":'Ben (that guy) Winding',
  "description":"The extremely simple 'twingex' format.",
  "image":"icon.svg",
  "url":"http://github.com/benwinding/twingex/",
  "license":'MIT License',
  "proofing":false,
  "source": "<html>\n\n<head>\n  <title>{{STORY_NAME}}</title>\n  <meta charset=\"UTF-8\">\n  <script type=\"text/javascript\">\n    window.onload = function () {\n      if (typeof (window.TwingeX) === \"undefined\") {\n        window.TwingeX = {\n          convert: function () {\n            var output = window.document.getElementById(\"output\");\n            output.innerHTML = this.export();\n          },\n          export: function () {\n            var buffer = [];\n            var storyData = window.document.getElementsByTagName(\"tw-storydata\");\n            if (storyData) {\n              buffer.push(this.buildPassage(\"StoryTitle\", \"\", storyData[0].getAttribute(\"name\")));\n            }\n            var userScript = window.document.getElementById(\"twine-user-script\");\n            if (userScript) {\n              buffer.push(this.buildPassage(\"UserScript\", \"script\", userScript.innerHTML));\n            }\n            var userStylesheet = window.document.getElementById(\"twine-user-stylesheet\");\n            if (userStylesheet) {\n              buffer.push(this.buildPassage(\"UserStylesheet\", \"stylesheet\", userStylesheet.innerHTML));\n            }\n            var passages = window.document.getElementsByTagName(\"tw-passagedata\");\n            for (var i = 0; i < passages.length; ++i) {\n              buffer.push(this.buildPassageFromElement(passages[i]));\n            }\n            return buffer.join('');\n          },\n          buildPassageFromElement: function (passage) {\n            var name = passage.getAttribute(\"name\");\n            if (!name) {\n              name = \"Untitled Passage\";\n            }\n            var tags = passage.getAttribute(\"tags\");\n            var content = passage.textContent;\n            return this.buildPassage(name, tags, content);\n          },\n          buildPassage: function (title, tags, content) {\n            var result = [];\n            result.push(\":: \", title);\n            if (tags) {\n              result.push(\"[\", tags, \"]\");\n            }\n            result.push(\"\\r\\n\", this.scrub(content), \"\\r\\n\\r\\n\");\n            return result.join('');\n          },\n          scrub: function (content) {\n            if (content) {\n              content = content.replace(/^::/gm, \" ::\");\n              content = content.replace(/\\</gm, \"&lt;\");\n              content = content.replace(/\\>/gm, \"&gt;\");\n            }\n            return content;\n          }\n        }\n      }\n      window.TwingeX.convert();\n      window.document.body.removeChild(document.getElementById('storyData'));\n    };\n  </script>\n</head>\n\n<body>\n<pre id=\"output\">\n</pre>\n<div id=\"storyData\">\n  {{STORY_DATA}}\n</div>\n</body>\n\n</html>"
});