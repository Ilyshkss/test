// let table = document.querySelector("table");
// const labelsInTable = table.querySelectorAll("label");

// console.log(labelsInTable);

// const age = table.querySelector("td");
// console.log(age)
// const secondForm = document.querySelectorAll("form")[1];
// console.log(secondForm)
// const search = document.querySelector("form[name='search']");
// console.log(search)
// const inputInSearch = search.querySelectorAll("input")[0];
// console.log(inputInSearch)
// const inputs = document.querySelectorAll("input");
// const lastInput = inputs[inputs.length-1]
// console.log(lastInput);
// const info = document.getElementsByName("info[0]");
// console.log(info)






// let arr = [1, 'aaa', null, -3];
// arr.reverse();
// let [elem1, elem2, elem3, elem4] = arr;
// console.log(elem1);
// console.log(elem2);

// let arr = [2];
// let [, elem2 = 'bbb', elem3 = 'eee'] = arr;
// console.log(elem2);
// console.log(elem3);

// let person = {name: 'Петр', surname: 'Петров'};
// let {name = 'Аноним', surname = 'Анонимович', age = '? лет'} = person;
// console.log(name);
// console.log(surname);
// console.log(age);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
// }
// function topSalary(salaries){
//     let arr = Object.entries(salaries);
//     let [[name1, salary1], [name2, salary2],[name3, salary3], ] = arr;
//     if (salary1 > salary2 && salary1 > salary3) {
//         console.log(name1);
//     } else if (salary2 > salary1 & salary2 > salary3) {
//         console.log(name2);
//     } else {
//         console.log(name3);
//     }
// }

// topSalary(salaries);


    const metadata = {
        title: "Scratchpad",
        translations: [
        {
            locale: "de",
            localization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        }
        ],
        url: "/en-US/docs/Tools/Scratchpad"
    };

    let {title, translations: [{title: subTitle}]} = metadata;
console.log(title);
console.log(subTitle);


    const people = [
        {
            name: "Mike Smith",
            family: {
                mother: "Jane Smith",
                father: "Harry Smith",
                sister: "Samantha Smith"
            },
            age: 35
        },
        {
            name: "Tom Jones",
            family: {
                mother: "Norah Jones",
                father: "Richard Jones",
                brother: "Howard Jones"
            },
            age: 25
        }
    ];

    for (let i of people) {
        let {name, family: {mother, father, sister}} = i;
        console.log(`Name: ${name}, father: ${father}`);
    }


        const user = {
        id: 42,
        displayName: "jdoe",
        fullName: {
            firstName: "John",
            lastName: "Doe"
        }
    };

    let getFullName = ({displayName, fullName: {firstName}}) => {
        console.log(`${displayName} is ${firstName}`);
    }
    getFullName(user)