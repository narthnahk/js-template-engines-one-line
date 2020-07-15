# simple-javascript-templates
load file tmpl.js

create template require id ex: `<script type="text/html" id="example">
    <% if (data.show) { %>
       <div><%= data.title %></div>
    <% } %>
</script>`

use template `tmpl(\<id_template\>, \<parameters\>)` ex: 
syntax in template use like javascript but content between `<% %>` and print value use `<%= data %>`


`var template = tmpl('example', {data: { title: 'hello word', show: true }});`
`$('body').html = template;`

