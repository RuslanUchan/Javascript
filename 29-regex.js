var pattern = new RegExp("/pattern/");

/*
* /java/ - Matches java
* /s$/ - Matches word with s in the end

used punctuation
^ $ . * + ? = ! : | \ / ( ) [ ] { }

backslash should be escaped
/\\/ like this


*/

'/[abc]' - matches any one letters contain a, b, or c
'^[abc]' - matches any one letters not containing a, b, or c
'/[a-z]/' - matches any one lowercase letter
'/[a-zA-Z0-9]/' - matches all letters and digits
'\w' - ASCII char === [a-zA-Z0-9_]
'\W' - not ASCII char === [^a-zA-Z0-9_]
'\s' - Unicode char === ' ' // space
'\S' - not Unicode char === ^' ' // not space
'\d' - digit [0-9]
'\D' - not digit ^[0-9]

// repetition
{n, m} - matches n times, no more than m
{n, } - matches n times and more
{n} - matches exactly n times
? - matches zero or one === {0, 1}
+ - matches one or more === {1, }
* - matches zero or more === {0, }

/\d{2, 4}/ - matches at least 2, no more than 4
/\w{3}\d?/ - matches exactly 3 char and zero or one digit
/\s+java\s+/ - matches java keyword, separated with whitespace (before and after)
/[^(]*/ - matches zero or more characters except (


// Pipe
/ab|cd|ef/ - matches ab or cd or ef
/\d{3}|[a-z]{4}/ - matches either 3 digits or 4 characters

/java(script)?/ - matches java with optional 'script'
/(ab|cd)+|ef/ - matches ef or repetition of ab or cd
/(['"])[^'"]*['"]/ - mathes single or double quotes with optional words between them

it equals to /(['"])[^'"]*\1/
where \1 references the first parenthesis

/^Javascript$/ - match the word from start as Javascript until the end of the string

/\bjava\b/ - matches java with boundaries before and after

/\B[Ss]cript/ - matches non boundaries and Script or script word
    ex: JavaScript, postscript

// (?= ) - lookahead characters

/[Jj]ava([Ss]cript)?(?=\:)/ - matches Javascript, javascript, JavaScript, javaScript with extra ':' at the end

// (?! ) -- negative lookahead assertion

/Java(?!Script)([A-Z]\w*) - matches Java and some capital letters, but no Script.

?: - match and ignore pattern. used with () such as
(?:) - it'll match the pattern, get it, but ignore the matched result

see more: https://stackoverflow.com/questions/3512471/what-is-a-non-capturing-group-what-does-do

(?:^|[^a-z])([a-z]{3})(?:$|[^a-z])

r'(\d+).*(?::|\d\d\s(.*(?=\n)))'
r'(\d+).*\d\d\s(.*(?=\n))'

"""
Python example

p1 = r'(?:foo){1,2}' // matches foo 1 or 2 times
p2 = r'foo{1,2}' // matches foo or fooo
s = 'fooooofooooo'

?: remembers the matched, but forget the group (things inside parenthesis or substring matches)
"""
