const days = async (dailyRate, totalRate) => {

    const fulldays = await totalRate / await dailyRate
    return fulldays;
}

export default days