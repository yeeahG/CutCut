import React, { useEffect, useState } from 'react'
import Haircut from './HairCut';
import './HairStyle.css'

const hairDesign = [
    {
        id: "cut1",
        image: "https://images.unsplash.com/photo-1615363001828-acfd7ac403cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "여성 커트일반",
        price: 2.5,
        designer: 'a',
    },
    {
        id: "cut2",
        image: "https://images.unsplash.com/photo-1587776535733-b4c80a99ef82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=341&q=80",
        name: "남성 커트일반",
        price: 2.5,
        designer: 'b',
    },
    {
        id: "cut3",
        image: "https://images.unsplash.com/photo-1617896848219-5ec29570d680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "염색",
        price: 2.2,
        designer: 'c',
    },

    {
        id: "cut4",
        image: "https://images.unsplash.com/photo-1620122830785-a18b43585b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "드라이",
        price: 3.5,
        designer: 'd',
    },
    {
        id: "cut5",
        image: "https://images.unsplash.com/photo-1629617375711-8f591cfa357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        name: "펌",
        price: 5.5,
        designer: 'e',
    }
];

const BASE_URL = 'http://localhost:8090/hairs';


const HairStyle = () => {
    const [hairs, setHairs] = useState(hairDesign);
    
    const hairList = hairs.map(hair =>
        <Haircut
            key={hair.id}
            id={hair.id}
            image={hair.image}
            name={hair.name}
            price={hair.price}
            designer={hair.designer}
        />
    )


   useEffect(() => {
       console.log('호출');

       const fetchHairs = async () => {
           const response = await fetch(BASE_URL);

           console.log(response.ok);
           const responseData = await response.json();

           const listData = [];

           for (const key in responseData) {
               listData.push(
                   {id: key,
                    image: responseData[key].image,
                    name: responseData[key].name,
                    price: responseData[key].price,
                    designer: responseData[key].designer,
                });
           };
           setHairs(listData);
       };
       fetchHairs().catch(error => console.log(error));
   }, []);

   console.log(hairList);


  return (
        <div className='hairBox'>
            <div className='hairContainer'>
                {hairList}
            </div>
        </div>
  )
}

export default HairStyle