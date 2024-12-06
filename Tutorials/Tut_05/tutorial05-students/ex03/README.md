# Instructions

With reference to the semantic tags taught, revamp the html using HTML5 semantic tags instead.

## Steps

1. Place the ul, h1 and p elements at the top of the page inside an element that represents a group of introductory content.
2. Next, place the paragraphs at the bottom of the page inside an element that typically contains information about the site, copyright data or related links.
3. Place the content between the header and footer inside an element that represents standalone sections of content.
4. Finally, place the top `<ul>` inside an element that represents a major section of navigation.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Portfolio</title>
    </head>
    <body>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <h1>My Web Design &amp; Development Portfolio!</h1>
        <p>A site featuring my latest work.</p>

        <h2>Welcome</h2>
        <p>
            Fusce semper id ipsum sed scelerisque. Etiam nec elementum massa.
            Pellentesque tristique ex ac ipsum hendrerit, eget feugiat ante
            faucibus.
        </p>
        <ul>
            <li><a href="#">Recent project #1</a></li>
            <li><a href="#">Recent project #2</a></li>
            <li><a href="#">Recent project #3</a></li>
        </ul>

        <p>&copy; 2020 My Portfolio</p>
        <p>
            Follow me on <a href="#">Twitter</a>, <a href="#">Instagram</a> and
            <a href="#">Dribbble</a>
        </p>
    </body>
</html>
```
