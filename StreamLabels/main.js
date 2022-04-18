const TIMING = 5000;
const CONTAINER = document.querySelector('ul');
const labelsFolder = "./labels/";
const labelsList = [
    'most_recent_follower',
    'most_recent_subscriber',
    // 'most_recent_donator',
    'most_recent_cheerer'
]

// On charge les images en commençant par la deuxième image
const imagesSRC = [
    'images/follow.png',
    'images/sub.png',
    // '',
    'images/bits.png'
]

function fetchLabel(labelNum){
    let labelName = labelsList[labelNum];
    fetch(`${labelsFolder}${labelName}.txt`)
        .then(response=>response.text())
        .then(text=>{
            updateLabel(text, labelNum);
            labelNum++;
            if(labelNum>=labelsList.length){
                labelNum = 0;
            }
            setTimeout(fetchLabel,TIMING,labelNum);
        })
}

function updateLabel(text, labelNum){
    let liItem = document.createElement('li');
    liItem.innerText = `${text}`;
    CONTAINER.append(liItem);
    if (CONTAINER.childNodes.length==1 || CONTAINER.childNodes.length==2 || CONTAINER.childNodes.length==3  ){
        let digits = document.querySelector("li:nth-last-child(1)")
        digits.innerHTML = digits.textContent.replace(/(\$?\d+ (?:mois|bits)?) /g, '<span>$1</span>');
        let imgItem = document.createElement('img');
        imgItem.src = `${imagesSRC[labelNum]}`;
        digits.prepend(imgItem);
    }
    else if (CONTAINER.childNodes.length>3){
        CONTAINER.childNodes[0].remove();
        let digits = document.querySelector("li:nth-last-child(1)")
        digits.innerHTML = digits.textContent.replace(/(\$?\d+ (?:mois|bits)?) /g, '<span>$1</span>');
        let imgItem = document.createElement('img');
        imgItem.src = `${imagesSRC[labelNum]}`;
        digits.prepend(imgItem);
    }
}

fetchLabel(0);


