import '../styles/sections.css';

export default function PersonalInfo({dataObj, handleInputChange}){
    
    function handleLocalChange(e){
        const field = e.target.id;
        const value = e.target.value;
        handleInputChange(field,value);
    }
        
    return (
        <>
        <h1>Personal Information</h1>
        <h2>For Employers to know who you are and how to contact you.</h2>
        <form>
            <div className="formSection">
                <span className="input">
                    <label htmlFor="name">Fullname</label>
                    <input type="text" id="name" onChange={handleLocalChange} value={dataObj.name}></input>
                </span>
                
            </div>
            <div className="formSection">
                <span className="input">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" onChange={handleLocalChange} value={dataObj.address}></input>
                </span>
                <div className="form-subsection">
                    <span className="input">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={handleLocalChange} value={dataObj.city}></input>
                    </span>
                    <span className="input">
                        <label htmlFor="zip">Zip Code</label>
                        <input type="number" id="zip" min="0" onChange={handleLocalChange} value={dataObj.zip}></input>
                    </span>
                </div>
            </div>
            <div className="formSection">
                <span className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleLocalChange} value={dataObj.email}></input>
                </span>
                <span className="input">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" onChange={handleLocalChange} value={dataObj.phone}></input>
                </span>
            </div>
            <div className="formSection">
                <span className="input">
                    <label>GitHub Profile URL</label>
                    <input type="url" id="github" onChange={handleLocalChange} value={dataObj.github}></input>
                </span>
            </div>
        </form>
        </>
    )
}