# Regex with Javascript

### There is two way to create a regex

-   Regex('exp', 'flag') constructor
-   /{regex}/{flag}

### Flag

-   g - by default regex find first match but when we use this flag regex find all matches

-   i - regex is case sensitive but when we use it. regex find insensitive match also

### Operator

-   | - or operator like /color|colour/

### Grouping

we can group multiple exp with first bracket () for higher precedence

### Character classes

-   /w - match all english word character and english number. not select newline, space or tab
-   /d - select english digit number
-   /s - select whitespace and tabs
-   /n - select newline
-   /t - select tab
-   . - select all character without newline
-   /W - select all without english word character and newline
-   /D - select all without any english digit and newline
-   /S - select all without any whitespace, tabs and newline
