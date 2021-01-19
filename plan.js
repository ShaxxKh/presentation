// a way to write a certain patter to search for a word, numbers through a text

// syntax
// we create regex using enclosed slashes like "/abc/"
// or we also can use constructor function RegExp(regex) - and we pass our regex as a parameter

// Some of the main meta character to write your own search pattern




// . - ANY single symbol (that can be a number, letter, and so on)
// [] - any of the symbol from this range [a,b,c], [a-c], [0-9]
// $ - the end of A line
// ^ - the beginning of a line
// \ - switcher between special characters and literal character, for example /d/ - here d is a literal character, letter. But /\d/ in this case d turn up to be special that means any single digit
// \d - any single digit 0-9
// \D - any symbol besides digits
// \s - space
// \S - any symbol besides spaces
// \w - any letter or digit
// \W - any symbol besides letters and digits
// \b - borders of a word
// \B - not a border


// QUANTIFIERS
// n{4} - searchs for 4 n-symbols in a row
// {4,6} - seachs for 4-6 n-symbols in a row
// n* - 0 or more of n
// n+ - 1 or more of n
// n? - 0 or 1 of n
// 

// regexpal.com in the end to test regular expressions


// Speech

// character classes - help distinguishing between kinds of characters like letters and digits