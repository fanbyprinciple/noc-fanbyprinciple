# Learning Regex

1. They are used universally for search patterns
2. They contain meta characters that denote more than one characters

\d - any digit 0-9
. - any character
* - 0 or more characters
\w - A-Z, a-z, 0-9 
\W -  !\w
\s - whitespace
\S - !\s

![](slash_w.png)

### Quantifiers-
* - 0 or more
+ - 1 or more
? - 0 or 1
{min, max}
{n}

### Positions-
^ - begining
$ - end
\b - word beginning

^\w$ will match any line with one word
\b\w{4,6}\b - will give me all words with 4,5 and 6 characters

### Character classes -
[a,b,c] - match any of these characters

[a-z] a through z

[-.{] - or . or{

[s^bc] s or b and c

[^sbc] not s b c

pink
pynk

![](link_pink.png)

(212)111-2222
![](match_this.png)

matching any four letter word with characteres in it
![](match_four.png)

Alternation

(net | com) - matches net or com

ashwin.jayaprakash@navy.gov.in

![](email.png)

ashwin jayaprakash
ashish jyaparakash

![](replace_fnamme.gif)