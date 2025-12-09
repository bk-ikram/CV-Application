export default function PersonalInfo(){
    const initialEntry = {fullname: undefined
                        ,address: undefined
                        ,city: undefined
                        ,zipCode: undefined
                        ,email: undefined
                        ,phone: undefined
                        ,githubURL: undefined
                        };
    return (
        <>
        <h1>Personal Information</h1>
        <h2>For Employers to know who you are and how to contact you.</h2>
        <form>
            <div className="formSection">
                <label>
                    Fullname
                    <input type="text" id="name"></input>
                </label>
            </div>
            <div className="formSection">
                <label>
                    Address
                    <input type="text" id="address"></input>
                </label>
                <div className="form-subsection">
                    <label>
                    City
                    <input type="text" id="city"></input>
                </label>
                <label>
                    Zip Code
                    <input type="number" id="zip" min="0"></input>
                </label>
                </div>
            </div>
            <div className="formSection">
                <label>
                    Email
                    <input type="email" id="email"></input>
                </label>
                <label>
                    Phone
                    <input type="tel" id="phone"></input>
                </label>
            </div>
            <div className="formSection">
                <label>
                    GitHub Profile URL
                    <input type="url" id="github"></input>
                </label>
            </div>
            
        </form>
        </>
    )
}