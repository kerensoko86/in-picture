'use strict';

var gQuests = createQuests();

var gCurrQuestIdx = 0;

function initGame() {

    renderQuest();
}

function createQuests() {
    var quests = [{
            id: 1,
            opts: ['The people in the picture love each other', 'The people in the picture hate each other'],
            correctOptIndex: 1
        },
        {
            id: 2,
            opts: ['The girl in the picture is cooking', 'The girl in the picture is running'],
            correctOptIndex: 2
        },
        {
            id: 3,
            opts: ['The boy in the picture is happy', 'The boy in the picture is sad'],
            correctOptIndex: 2
        },
        {
            id: 4,
            opts: ['This is Superman', 'This is Batman'],
            correctOptIndex: 2
        }
    ]
    return quests;
}


function renderQuest() {
    var isFirst = true;
    var strHtml = '';
    for (var i = 0; i < gQuests.length; i++) {
        strHtml += `<div class="question_${gQuests[i].id}" style="${isFirst ? '' : 'display:none'}">`;
        strHtml += `<div ><img src="images/${i+1}.jpg" class="picture"/></div>`;
        for (var j = 0; j < gQuests[i].opts.length; j++) {
            strHtml += `<div class="sentence${j+1}" onclick="checkAnswer(this)" data-number="${j+1}">${gQuests[i].opts[j]}</div>`;

        }
        strHtml += `<div class="victory">`;

        strHtml += '</div>';
        isFirst = false;
    }

    document.querySelector('.pic-container').innerHTML = strHtml;
}

function checkAnswer(optIdx) {
    if (optIdx.getAttribute('data-number') == gQuests[gCurrQuestIdx].correctOptIndex) {

        var prevQuest = document.querySelector(`.question_${gQuests[gCurrQuestIdx].id}`);
        prevQuest.style.setProperty('display', 'none');
        gCurrQuestIdx++;

        var currQuest = document.querySelector(`.question_${gQuests[gCurrQuestIdx].id}`);
        currQuest.style.setProperty('display', 'block');

    }
}