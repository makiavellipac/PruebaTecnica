 const dateParse = (date:number) =>{
    const parseDate = new Date(date)
    const year = parseDate.getFullYear()
    const month = parseDate.getMonth()+1
    const day = parseDate.getDate()
    return `${year}/${month<10?'0'+month:month}/${day}`
}

export default dateParse;