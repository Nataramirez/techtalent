
const getToken = async () => {
    const body = {
        agencyId: "DQgPjq82EpDunKRGv",
        agencyKey: "wnaurtm4FIGFV9QZ7hjTvkNfNRHKkE/w7XzbsL4sSMCdYuvVDT8JRJ3PArlbQJZpTFZIyg5oQmxUsujV0DS8TA==",
        clientId: "https://test.destinojet.co"
    }

    const result = await fetch('https://auth-testing.smartlinks.dev/api/auth/agency/token', {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    })
    const data = await result.json()
    return data;
}

export default getToken;