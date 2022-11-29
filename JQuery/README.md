# jQuery

A javascript library. It makes things like HTML document traversal and manipulation, event handling, animation, and **Ajax** much simpler with an easy-to-use API that works across a multitude of browsers

```
$ == jQuery
```

With the help of $ we can select DOM elements

**NOTE :** Add your script after the jQuery.

## Selector

when we select the item in jQuey, unlike JavaScript where object is returned here in jQuery the list (array) of items (html elements) is returned.

```
$('#one') == document.getElementById('one)

output : false
```

```
$('#one')[0] == document.getElementById('one)

output : true
```

## Attributes

```
let one = $('#one')
one.attr('height', '200')
```

we can use _attr()_ or _css()_ function on the jQuery/JS object to change the attributes or css properties of the html tags.
Note that both of these function return the _one_ object back which we have created, means that we can chain multiple functions together on the object

```
let one = $('#one')
one.attr('height', '200').css('color', 'blue')
```

## Append Prepend

_mostly used in TO-DO list kind of projects._

## AJAX requests

```
$.get(`url on which request is made`, (data)=>{
  // rest of the code goes here
  // this code will be about what we wanna do with the data we've received from that request.
})
```
