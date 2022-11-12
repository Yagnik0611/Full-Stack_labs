const Data = ({email, name,address,address2,province,postalcode,city }) => {
    return (
        < >
        <div className="div">
        <h2>Email      : {email}</h2>
        <h2>Full Name  : {name}</h2>
        <h2>Address    : {address} {address2}</h2>
        <h2>City       : {city}</h2>
        <h2>Province   : {province}</h2>
        <h2>Postal Code : {postalcode}</h2>
        </div>
    

        </>
    )
}

export default Data