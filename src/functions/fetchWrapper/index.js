const fetchWrapper = async (input, init) => {
    let result = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${input}`,
        {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            ...init,
        },
    );

    return result.json();
}

export default fetchWrapper