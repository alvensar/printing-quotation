import  {react, useState, useEffect} from "react"


function Tarpaulin() {


    const pricing = [
        { id: 1, name: 'tarp', price: 25},
        { id: 2, name: 'sticker', price: 100},
        { id: 3, name: 'sintra-frame', price: 250},
        { id: 4, name: 'sintra-sign', price: 200},
        { id: 5, name: 'sintra-standee', price: 250},
      ]

    const units = [
        { id: 1, name: 'mm', detail: 'milimeter' },
        { id: 2, name: 'cm', detail: 'centimeter' },
        { id: 3, name: 'in', detail: 'inch' },
        { id: 4, name: 'ft', detail: 'feet' },
        { id: 5, name: 'm', detail: 'meter' },
      ]
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);

    const [toUnit, setToUnit] = useState();
    const [product, setProduct] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        
        if(toUnit === 'ft') {
            setArea(width * height * price)
            console.log('Price', price)
            console.log('Unit', toUnit)
        } else if (toUnit === 'in'){
            setArea((width / 12) * (height / 12) * price)
        } else if (toUnit === 'cm'){
            setArea((width / 30.48) * (height / 30.48) * price)
        } else if (toUnit === 'mm'){
            setArea((width / 304.8) * (height / 304.8) * price)
        } else {
            setArea((width * 3.281) * (height * 3.281) * price)
        }
        
    }, [width, height, area, toUnit, product, price]);

    return(
        <>
            <h1>{product}</h1>
            <h3>Price: {area}</h3>
            <div className="col col-3">
                <select className="form-select" aria-label="Default select example"
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    value={price}
                    >
                    {pricing.map((p) => (
                        <option key={p.id} value={p.price}>
                        {p.name}
                        </option>
                    ))}
                </select>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Width</span>
                    <input type="number" 
                        onChange={(e) => setWidth(e.target.value)}
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm" />

                    <select className="form-select" aria-label="Default select example"
                        onChange={(e) => {
                            setToUnit(e.target.value);
                        }}
                        value={toUnit}
                        >
                        {units.map((p) => (
                            <option key={p.id} value={p.name}>
                            {p.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Height</span>
                    <input type="number" 
                        onChange={(e) => setHeight(e.target.value)}
                        className="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm" />

                    <select className="form-select" aria-label="Default select example"
                        onChange={(e) => {
                            setToUnit(e.target.value);
                        }}
                        value={toUnit}
                        >
                        {units.map((p) => (
                            <option key={p.id} value={p.name}>
                            {p.name}
                            </option>
                        ))}
                    </select>
                </div>            
            </div>
        </>
    );
}

export default Tarpaulin;

