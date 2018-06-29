# simple-javascript-templates
load file tmpl.js

create template require id ex: <script type="text/html" id="example"></script>

use template tmpl(\<id_template\>, \<parameters\>) ex: var html = tmpl('example', {data: 'hello word'});

syntax in template use like javascript but content between <% %> and print value use <%= data %>
