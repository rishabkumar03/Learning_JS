// FOR IN - this type of loops is generally used in objects

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); //here, myObject[key] shows only values
    
}

const arr =["js", "py", "cpp", "java", "rb"]

for (const element in arr) {
    console.log(arr[element]);
}

const map = new Map()
map.set('JH', "Jharkhand")
map.set('WB', "West Bengal")
map.set('BR', "Bihar")
map.set('JH', "Jharkhand")

for (const key in map) {
    console.log(key);
    
}