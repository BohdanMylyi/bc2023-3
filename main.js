let fs = require('node:fs');

const fileName = 'data.json';
let finalTxt = '';

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.log('Error reading file!', err);
    return;
    }
    try {
        const jsonObjectParse = JSON.parse(data);
    
        // const jsonToText = JSON.stringify(jsonObjectParse);
    
        const myData = jsonObjectParse.filter(item => item.txt === 'Доходи, усього' || item.txt === 'Витрати, усього');
    
        for (const item of myData) {
            finalTxt += `${item.txt}: ${item.value}\n`;
        }
        }catch (error) {
        console.log('Error writing file!', error);
        return;
    }

    fs.writeFile('output.txt', finalTxt, (err) => {
        if (err) {
            console.log('Error writing file!', err)
        }else{
        console.log('Data succesfully saved in file!');
        }
    });
});

