const fetchProjects = async () => {
    try {
        const res = await fetch("./data.json");
        const data = await res.json();
        return data
    } catch (error) {
        console.error(error)
    }
}
//OBJECT -HINT FROM PURSIZZLE
let data = fetchProjects();

console.log(data)