
/*1.დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს. გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას.გამოიყენეთ (...) ოპერატორი.*/ 
const person = {
    name : 'Sopo',
    surname : 'Chokuri',
    address : {
        city: 'Tbilis'
    }
}

const dublicate = person => {
    const d = {
        ...person,
        address : {
            ...person.address
        }
    }
    return d;
}
//dublicate();
console.log(dublicate(person));

/*2.დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს city-ს. გამოიყენეთ destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined.*/ 
const user = {
    name : 'Sopo',
    surname : 'Chokuri',
    banks : {
                address : {
                    city: 'Tbilisi'
                }
            }
    }

const destuct = ({name,surname,banks:{address:{city}}})=> {
    return city;
}

console.log(destuct(user));