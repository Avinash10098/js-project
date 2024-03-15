const url = "https://randomuser.me/api/";
const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const person = data.results[0];
    // console.log(person);
    const { first, last } = person.name;
    const { street: {
        number, name
    } } = person.location;
    const { dob: { age } } = person;
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;

    return {
        name: `${first}${last}`,
        age,
        phone,
        email,
        password,
        image,
        street: `${number}${name}`
    }

}

export default getUser;