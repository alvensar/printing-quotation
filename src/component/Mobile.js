import  {react, useState, useEffect} from "react"

function Mobile() {

    const products = [
        { id: 1, name: 'Tarpaulin', price: 25},
        { id: 2, name: 'Sticker', price: 100},
        { id: 3, name: 'Sintra Frame', price: 250},
        { id: 4, name: 'Sintra Sign', price: 200},
        { id: 5, name: 'Sintra Standee', price: 250},
      ]

    const units = [
        { id: 1, name: 'in', detail: 'inch' },
        { id: 2, name: 'ft', detail: 'feet' },
        { id: 3, name: 'cm', detail: 'centimeter' },
        { id: 4, name: 'mm', detail: 'milimeter' },
        { id: 5, name: 'm', detail: 'meter' },
      ]
    
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);

    const [product, setProduct] = useState(0);
    const [productName, setProductName] = useState();

    const [selectedUnit, setSelectedUnit] = useState(0);

    useEffect(() => {
        
        if(selectedUnit === 'ft') {
            setArea(width * height * product)
            setProductName('Feet')
        } else if (selectedUnit === 'in'){
            setArea((width / 12) * (height / 12) * product)
            setProductName('Inch')
        } else if (selectedUnit === 'cm'){
            setArea((width / 30.48) * (height / 30.48) * product)
            setProductName('Centimenter')
        } else if (selectedUnit === 'mm'){
            setArea((width / 304.8) * (height / 304.8) * product)
            setProductName('Milimiter')
        } else {
            setArea((width * 3.281) * (height * 3.281) * product)
            setProductName('Meter')
        }
        
    }, [width, height, area, product, selectedUnit, productName]);

    return(
        <>
            <div className="flex-container">
                <div className="wrapper">
                    <p>Price</p>
                </div>
                <div className="wrapper">
                    <h3>{area}</h3>
                </div>
                <div className="wrapper">
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Width</span>
                        <input type="number" 
                            onChange={(e) => setWidth(e.target.value)}
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Height</span>
                        <input type="number" 
                            onChange={(e) => setHeight(e.target.value)}
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" />
                    </div> 
                </div>
                <div className="wrapper">
                    {units.map((p) => (
                        <button type="button" className="btn btn-outline-primary btn-sm" 
                            onClick={() => setSelectedUnit(p.name)} key={p.id}>{p.name}</button>
                    ))}
                </div>
                <div className="wrapper">
                    {products.map((p) => (
                        <button type="button" className="btn btn-primary btn-sm" 
                            onClick={() => setProduct(p.price)} key={p.id}>{p.name}</button>
                    ))}
                </div>
            </div>
        </>
    );

}

export default Mobile;