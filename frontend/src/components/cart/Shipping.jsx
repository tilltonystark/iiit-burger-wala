import React from 'react';
import {Country, State} from 'country-state-city';

const Shipping = () => {
    return <section className='shipping'>
        <main>
            <h1>Shipping Details</h1>
            <form action="">
                <div>
                    <label>House No.</label>
                    <input type="text" placeholder='Enter Complete Adress'/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder='Enter your city'/>
                </div>
                <div>
                    <label>Country</label>

                    <select>
                        <option value="">Country</option>
                        {Country && Country.getAllCountries().map((country) => (
                            <option value={country.isoCode} key={country.isoCode}>
                                {country.name}
                            </option>
                        ) )}
                    </select>

                </div>
                <div>
                    <label>State</label>

                    <select>
                        <option value="">State</option>
                        {State && State.getStatesOfCountry("IN").map((state) => (
                            <option value={state.isoCode} key={state.isoCode}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Pincode</label>
                    <input type="text" placeholder='Enter your pincode'/>
                </div>
                <div>
                    <label>Phone No.</label>
                    <input type="text" placeholder='+91-999-999-9999'/>
                </div>
                <button type='submit'>Confirm Order</button>
            </form>
        </main>
    </section>
}

export default Shipping