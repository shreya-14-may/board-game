var data =
{
    "levelConfigs": [
        {
            "levelName": "Level 1",
            "gridSize": 3,
            "cellLitDuration": 1000,
            "levelDuration": 5000,
            "levelPassingScore": 2
        },
        {
            "levelName": "Level 2",
            "gridSize": 4,
            "cellLitDuration": 700,
            "levelDuration": 5000,
            "levelPassingScore": 4
        },
        {
            "levelName": "Level 3",
            "gridSize": 5,
            "cellLitDuration": 500,
            "levelDuration": 5000,
            "levelPassingScore": 6
        }
    ]
}


const loadCharacters = async () => {
    let level = localStorage.getItem("levelArr");
    let levelIndex = localStorage.getItem("levelIndex");
    let clickedIndex = localStorage.getItem("clickedIndex");

    if (!level) {
        localStorage.setItem('levelArr', JSON.stringify(data["levelConfigs"][0]));
        localStorage.setItem('levelIndex', 0);
    }
    if (clickedIndex = 1 && levelIndex != null && levelIndex == clickedIndex) {
        localStorage.setItem('levelArr', JSON.stringify(data["levelConfigs"][levelIndex + 1]));
        localStorage.setItem('levelIndex', levelIndex + 1);
    }
    // else {
    //     localStorage.removeItem("levelArr");
    //     localStorage.removeItem("levelIndex");
    // }
    console.log(localStorage.getItem("levelArr"))
    console.log(localStorage.getItem("levelIndex"))
    console.log(localStorage.getItem("clickedIndex"))

    displayCharacters(JSON.parse(level), levelIndex, clickedIndex)
};

const displayCharacters = (level, levelIndex, clickedIndex) => {
    let rows = columns = parseInt(level.gridSize) * parseInt(level.gridSize);

    console.log(rows);
    // const htmlString = characters
    //     .map((character) => {
    //         return `
    //         <div class="flex-cell">
    //                 <div class="flex-item">1</div>
    //             </div>
    //         <li class="character">
    //             <h2>${character.name}</h2>
    //             <p>House: ${character.house}</p>
    //             <img height="500" width="100" src="${character.image}" alt="noimage"></img>
    //         </li>
    //     `;
    //     })
    //     .join('');
    // charactersList.innerHTML = htmlString;
};

loadCharacters();



