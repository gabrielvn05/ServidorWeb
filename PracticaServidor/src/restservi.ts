interface IPost {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

async function fetchData<Type>(url: string): Promise<Type[]> {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2a$10$OS2JsS4brlMSCAnNChGJze0sTQHfdjg/SzbUBrmUF9EmVuDmD2cFC', // Reemplaza con tu clave API de JSONBin
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching data');
        }

        return await response.json();  // Devuelve los datos en formato JSON
    } catch (error) {
        throw error;
    }
}

export {
    IPost,
    fetchData
}