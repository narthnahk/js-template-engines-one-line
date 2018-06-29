$(function(){
	'use strict';
	var data = [{name: 'John', gender: 'Male', email: 'john@mail.us'}, {name: 'Jenny', gender: 'Female', email: 'jenny@mail.us'}];
	$.get('template/body.html').then(function(rs){
		$('body').append(rs);
		var html = tmpl('component1', {data: data});
		$('#content1').html(html);
	});

	var html = tmpl('component2', {data: data});
	$('#content2').html(html);
});