import React, {useState} from 'react';
import { useGlobalContext } from '../context';

export default function SearchOutput({ data }) {
    const {value, setValue} = useGlobalContext();
    
    const [searchIndex, setSearchIndex] = useState(false);

    const clickHandler = (title) => {
        if(searchIndex){
            const temp = value.slice().sort((a,b)=> a[title] - b[title]);
            console.log("true");
            setValue(temp);
        } else {
            console.log("false")
            setValue(value.sort((a,b)=> b[title] - a[title]));
        }
    }

    return (
      <table>
        <tbody>
          <th id='id' onClick={(e)=>{
            setSearchIndex(!searchIndex);
            clickHandler(e.target.id)}}>Id</th>
          <th id="product_name" onClick={(e)=>{
            setSearchIndex(!searchIndex);
            clickHandler(e.target.id)}}>Product</th>
          <th id='product_weight' onClick={(e)=>{
            setSearchIndex(!searchIndex);
            clickHandler(e.target.id)}}>Weight</th>
          <th id='price' onClick={(e)=>{
            setSearchIndex(!searchIndex);
            clickHandler(e.target.id)}}>Price</th>
          <th id='calories' onClick={(e)=>{
            setSearchIndex(!searchIndex);
            clickHandler(e.target.id)}}>Calories</th>
          <th id='Id'>Ingredients</th>
        </tbody>
        {data.map((item) => {
            const {id, product_name, product_weight, price, calories, ingredients} = item;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{product_name}</td>
              <td>{product_weight}</td>
              <td>{price}</td>
              <td>{calories}</td>
              <td>
                {
                    ingredients.map((item) => {
                        return item
                    })
                }
              </td>
            </tr>
          );
        })}
      </table>
    );
  }
  