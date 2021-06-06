// const text = '#fd724e';
// const regex = /#?([\da-f]{2})([\da-f]{2})([\da-f]{2})/gi;

const text = '01618728304';
const regex = /(\+88)?-?01[1-9]\d{8}/g;

// match --> returns array of match element
const match = text.match(regex);

// search --> return match index
const search = text.search(regex);

// replace --> match text will replace by its 2nd argument
const replace = text.replace(regex, 'Marzuk');

// test --> check is regex match with text if match it returns true
const test = regex.test(text);

console.log(match, search, replace, test);
