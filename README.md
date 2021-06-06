# Regex with Javascript

## There is two way to create a regex

-   Regex('exp', 'flag') constructor
-   /{regex}/{flag}

# Flag

| Flag | Description                                                                        |
| ---- | ---------------------------------------------------------------------------------- |
| g    | by default regex find first match but when we use this flag regex find all matches |
| i    | regex is case sensitive but when we use it. regex find insensitive match also      |
| m    | multiline selection for anchor                                                     |

# Operator

-   | - or operator like /color|colour/
-   ^ - not operator like /[^abc]/ select any character without 'a', 'b' or 'c'

# Grouping

we can group multiple exp with first brace () for higher precedence

# Character classes

| Character | Description                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| /w        | select all english word character and english number. not select newline, space or tab |
| /d        | select english digit number                                                            |
| /s        | select whitespace and tabs                                                             |
| /n        | select newline                                                                         |
| /t        | select tab                                                                             |
| .         | select all character without newline                                                   |
| /W        | select all without english word character and newline                                  |
| /D        | select all without any english digit and newline                                       |
| /S        | select all without any whitespace, tabs and newline                                    |

# Match any character with third brace

> ## Specific character:
>
> Regex select any character inside third brace
>
> **/[abc]/gi** --> select any 'a','b' or 'c'

> ## Character range:
>
> We also can select character with character range
>
> **/[a-z]/gi** --> select any character between (a-z)

> ## Without specific character(^):
>
> **/[^1-5]/gi** --> select any character without (1-5) and newline
>
> **note:** if we use (^) symbol outside third brace it will behave start [anchor](#anchor-character)

# Quantify character

> ## Optional character(?):
>
> Optional character meaning it may occur zero times or one time.
> the 'u' character is allowed to occur, but the pattern also matches when it is missing
>
> **/colou?r/gi** --> optional_character ?

> ## Zero, One or multiple occurrence(\*):
>
> before (\*) character can occur 0, 1, 2, 3, ... it can select all situation
>
> **/color\*/gi** --> 'r' can occur 0,1,2,3.....
>
> like colo(0 occur) color(1 occur) colorr(2 occurs) colorrr(3 occurs)

> ## One or multiple occurrence(+):
>
> before (\+) character can occur minimum one or multiple occurrence
>
> **/color\+/gi** --> 'r' can occurs 1, 2, 3, ...
>
> like color(1 occur) colorr(2 occurs) colorrr(3 occurs)

> ## Specific {n} occurrence:
>
> before ({n=1,2,3...}) character can occur only {n} times
>
> **/color{2}/gi** --> 'r' can occurs only 2 times
>
> like colorr(2 occurs)

> ## Specific range {min,max} occurrence:
>
> before ({min,max}) character can occur minimum (min) times and maximum (max) times
> **/color{2,4}/gi** --> 'r' can occurs minimum 2 times and maximum 4 times
>
> like colorr(2 occurs) colorrr(3 occurs) colorrrr(4 occurs)

# Regex key character escaping

> we can escape key character with backslash(\\)
>
> /why\\?/ --> here ? is behave like string not optional character chain
>
> /color\\+/, /color\\\*/

# Anchor character

> ## Starts anchor(^):
>
> We can select first character with (^) symbol of a string
>
> "My name is marzuk zarir"
>
> /^my/gi --> My
>
> **note:** if we use (^) symbol inside third brace it will behave [Without specific character](#match-any-character-with-third-brace)

> ## Ends anchor($):
>
> We can select last character with ($) symbol of a string
>
> "My name is marzuk zarir"
>
> /rir$/gi --> za**_rir_**
>
> **note:** selected character should set before ($) symbol

> ## Anchor match line by line:
>
> we can select line by line anchor with (m) means multiline flag see
>
> "I am Marzuk zarir.
>
> I am 16 years old."
>
> /^i/gim --> I (1st line) I (2nd line)
>
> /.$/gim --> . (1st line end) . (2nd line end)
