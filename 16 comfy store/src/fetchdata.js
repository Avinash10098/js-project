const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (response) {
            const data = await response.json();
            return data;
        }
    }
    catch (error) {
        console.log(error);
    }
}

// export default fetchDrink;
export default fetchData;