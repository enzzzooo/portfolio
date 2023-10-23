passing padding-top to child of layout. Having nav be on top of background main content but not over any h1/images,
{children}

- used fixed, zindex: 10;
  -have to apply padding 5rem to first element of each new page,
  how can I do this in layout (by default)

sdfsdfsdfsdfsdfdsfds
using rgba to adjust transparency with inherited color value css

-- can use filter: opacity(30%); -- for images
or opacity: 0.5; which adjusts all; background too

or, and recommended, rgba using css variables and O at the end of name, with transparency value
rgba(var(--purpleO), 0.5)
but for normal usage of purple
var(--purple)
purpleO is a rgb value but without rgb and parentheses
--purpleO: 130, 65, 121;
vs without rgb or ()
--purple: rgb(130, 65, 121);
