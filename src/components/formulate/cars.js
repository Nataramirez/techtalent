import getToken from './token'

const getCars = async () => {
    const token = await getToken()

    const body = {
        PickUpLocation: {
            cityCode: "MIA",
            continentCode: 0,
            countryCode: "US",
            region: "unitedStates",
            id: "",
            name: "",
            provider: "",
            latitude: 25.793,
            longitude: -80.291
        },
        DropOffLocation: {
            cityCode: "MIA",
            continentCode: 0,
            countryCode: "US",
            region: "unitedStates",
            id: "",
            name: "",
            provider: "",
            latitude: 25.793,
            longitude: -80.291
        },
        PickUpDate: "2022-02-08",
        PickUpTime: "0930",
        DropOffDate: "2022-02-10",
        DropOffTime: "0930",
        RateTypeCode: 0,
        CarCategoryType: 0,
        PaymentType: 0,
        corporateDiscount: "0",
        AgencyUrl: "test.destinojet.co"
    }

    const result = await fetch('https://search-testing.smartlinks.dev/api/cars/search', {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })

    const data = await result.json()

    return data;

}

export default getCars;