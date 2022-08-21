import {useState, useEffect} from 'react';

const SingleItem = () => {

    const [item, setItem] = useState([])


    function getItems() {
        fetch("http://localhost:4000/item")
            .then(res => res.json())
            .then(data => {
                setItem(data.message)
                const itemsnew = data.message.map(x=> ({id: x.id, image:x.image}))
                setItem(itemsnew)

                console.log(data.message)
                console.log("asdasda")

            })
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="itemsListWrapper">
            {item.map((x) => (<img src={x.image} alt=""/>))}
        </div>
    );
};

export default SingleItem;