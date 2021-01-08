import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/ui/characters/CharacterGrid';

const imageArray = [
  process.env.PUBLIC_URL + '/images/Daenerys.jpg',
  process.env.PUBLIC_URL + '/images/hodor.jpg',
]
const GetCharacters = () => {
  const [characters, setCharacters]=useState([]);
  const [isLoading, setIsLoading]=useState([]);

  const fetchCharacters= async()=>{
    const newArray = [];
    const results = await axios(`https://www.anapioficeandfire.com/api/characters?pageSize=100`);
    console.log(results.data);

    for(let result in results){
      const character = results[result];
      newArray.push({
        image: character.imageArray, 
      })
      console.log(`${newArray}`);
      }
      // results.map(({result, index}) => {
        //   newArray.push({
          //     id: index,
          //     image: imageArray[index],
          //     name: result.name,
          //     gender: result.gender,
          //     culture: result.culture
          //   })
          // })
          setCharacters(newArray);
          setIsLoading(false);
        }
        useEffect(() => {
        fetchCharacters();
  },[])
  return (
    <div className="container">
      <Header/>
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default GetCharacters;
