function changePhoto1() {
  document.getElementById('mockup').style.backgroundImage = "url('./images/enviroHP.png')";
}

function changePhoto2() {
  document.getElementById('mockup').style.backgroundImage = "url('./images/gardengateHP.png')";
}

function changePhoto3() {
  document.getElementById('mockup').style.backgroundImage = "url('./images/travelzHP.png')";
}

function showProject() {
  console.log(document.getElementById('mockup').style.backgroundImage);
  if (document.getElementById('mockup').style.backgroundImage === 'url("./images/enviroHP.png")') {
    window.location.href = "enviro.html";
  } else if (document.getElementById('mockup').style.backgroundImage === 'url("./images/gardengateHP.png")') {
    window.location.href = "gardengate.html";
  } else if (document.getElementById('mockup').style.backgroundImage === 'url("./images/travelzHP.png")') {
    window.location.href = "Travelz.html";
  }
}

function switchTo1() {
  let wireframeEN1 = document.getElementById('enviroW1');
  let wireframeEN2 = document.getElementById('enviroW2');
  let wireframeEN3 = document.getElementById('enviroW3');
  let wireframeEN4 = document.getElementById('enviroW4');
  let wireframeEN5 = document.getElementById('enviroW5');
  if (document.getElementById('enviroTo').textContent === 'Wireframes (Click to switch to prototypes)'){
    wireframeEN1.style.backgroundImage = "url('./images/enviroPr1.png')";
    wireframeEN2.style.backgroundImage = "url('./images/enviroPr2.png')";
    wireframeEN3.style.backgroundImage = "url('./images/enviroPr3.png')";
    wireframeEN4.style.backgroundImage = "url('./images/enviroPr4.png')";
    wireframeEN5.style.backgroundImage = "url('./images/enviroPr5.png')";
    document.getElementById('enviroTo').textContent = "Prototypes (Click to switch to wireframes)";
  } else {
    wireframeEN1.style.backgroundImage = "url('./images/enviroW1.png')";
    wireframeEN2.style.backgroundImage = "url('./images/enviroW2.png')";
    wireframeEN3.style.backgroundImage = "url('./images/enviroW3.png')";
    wireframeEN4.style.backgroundImage = "url('./images/enviroW4.png')";
    wireframeEN5.style.backgroundImage = "url('./images/enviroW5.png')";
    document.getElementById('enviroTo').textContent = "Wireframes (Click to switch to prototypes)";
  }


}

function switchTo2() {
  let wireframeGG1 = document.getElementById('gardengateW1');
  let wireframeGG2 = document.getElementById('gardengateW2');
  let wireframeGG3 = document.getElementById('gardengateW3');
  let wireframeGG4 = document.getElementById('gardengateW4');
  let wireframeGG5 = document.getElementById('gardengateW5');
  if (document.getElementById('gardengateTo').textContent === 'Wireframes (Click to switch to prototypes)') {
    wireframeGG1.style.backgroundImage = "url('./images/gardengatePr1.png')";
    wireframeGG2.style.backgroundImage = "url('./images/gardengatePr2.png')";
    wireframeGG3.style.backgroundImage = "url('./images/gardengatePr3.png')";
    wireframeGG4.style.backgroundImage = "url('./images/gardengatePr4.png')";
    wireframeGG5.style.backgroundImage = "url('./images/gardengatePr5.png')";
    document.getElementById('gardengateTo').textContent = "Prototypes (Click to switch to wireframes)";
  } else {
     wireframeGG1.style.backgroundImage = "url('./images/gardengateW1.png')";
    wireframeGG2.style.backgroundImage = "url('./images/gardengateW2.png')";
    wireframeGG3.style.backgroundImage = "url('./images/gardengateW3.png')";
    wireframeGG4.style.backgroundImage = "url('./images/gardengateW4.png')";
    wireframeGG5.style.backgroundImage = "url('./images/gardengateW5.png')";
    document.getElementById('gardengateTo').textContent = "Wireframes (Click to switch to prototypes)";
  }
}

function switchTo3() {
  let wireframeTZ1 = document.getElementById('travelzW1');
  let wireframeTZ2 = document.getElementById('travelzW2');
  let wireframeTZ3 = document.getElementById('travelzW3');
  let wireframeTZ4 = document.getElementById('travelzW4');
  let wireframeTZ5 = document.getElementById('travelzW5');
  if (document.getElementById('travelzTo').textContent === 'Wireframes (Click to switch to prototypes)') {
    wireframeTZ1.style.backgroundImage = "url('./images/travelzPr1.png')";
    wireframeTZ2.style.backgroundImage = "url('./images/travelzPr2.png')";
    wireframeTZ3.style.backgroundImage = "url('./images/travelzPr3.png')";
    wireframeTZ4.style.backgroundImage = "url('./images/travelzPr4.png')";
    wireframeTZ5.style.backgroundImage = "url('./images/travelzPr5.png')";
    document.getElementById('travelzTo').textContent = "Prototypes (Click to switch to wireframes)";
} else {
    wireframeTZ1.style.backgroundImage = "url('./images/travelzW1.png')";
    wireframeTZ2.style.backgroundImage = "url('./images/travelzW2.png')";
    wireframeTZ3.style.backgroundImage = "url('./images/travelzW3.png')";
    wireframeTZ4.style.backgroundImage = "url('./images/travelzW4.png')";
    wireframeTZ5.style.backgroundImage = "url('./images/travelzW5.png')";
    document.getElementById('travelzTo').textContent = "Wireframes (Click to switch to prototypes)";
}


}