let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = 'json/pointsPositions.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
    let pointsPosText = request.response;
    let pointsPosJSON = JSON.parse(pointsPosText);
    showPointsPos(pointsPosJSON);
};

function showPointsPos(jsonObj) {
    let points = jsonObj['DrawLines'];

    for (let i = 0; i < points.length; i++) {
        let myArticle = document.createElement('article');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');

        myPara1.textContent = 'ID: ' + points[i].ID;
        myPara2.textContent = 'FilePath: ' + points[i].FilePath;
        myPara3.textContent = 'Lines:';

        let lines = points[i].Lines;
        for(let j = 0; j < lines.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = 'row: ' + lines[j].row + ' column: ' + lines[j].column;
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}