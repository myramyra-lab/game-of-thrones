import React from 'react';
// import characterImages from './images';


function CharacterItem({character}) {
    return (
        <div className = 'card'>
            <div className='card-inner'>
                <div className='card-front'>
                    {/* <img src={process.env.PUBLIC_URL + '/images/Daenerys.jpg'}/> */}
                    {/* {characterImages.map(({src, aliases}) => <img src={src} aliases={aliases}/>)} */}
                    {/* <img src="{item.img}" alt=""/> */}
                </div>
                <div className="card-back">
                    <h1>{character.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong>{character.aliases}
                        </li>
                        <li>
                            <strong>Gender:</strong>{character.gender}
                        </li>
                        <li>
                            <strong>Culture:</strong>{character.culture}
                        </li>
                    </ul>
                </div>
            </div>
           
        </div>
    )
}

export default CharacterItem
