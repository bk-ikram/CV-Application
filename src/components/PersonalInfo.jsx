import '../styles/sections.css';

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
                <span className="input">
                    <label htmlFor="name">Fullname</label>
                    <input type="text" id="name"></input>
                </span>
                
            </div>
            <div className="formSection">
                <span className="input">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address"></input>
                </span>
                <div className="form-subsection">
                    <span className="input">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city"></input>
                    </span>
                    <span className="input">
                        <label htmlFor="zip">Zip Code</label>
                        <input type="number" id="zip" min="0"></input>
                    </span>
                </div>
            </div>
            <div className="formSection">
                <span className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"></input>
                </span>
                <span className="input">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone"></input>
                </span>
            </div>
            <div className="formSection">
                <span className="input">
                    <label>GitHub Profile URL</label>
                    <input type="url" id="github"></input>
                </span>
            </div>
        </form>
        </>
    )
}