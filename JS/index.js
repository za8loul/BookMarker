var siteURLInput = document.getElementById('siteURL');
var siteNameInput = document.getElementById('siteName');
var siteContainer ;
var btnVisit = document.getElementById('visitBtn')

if (localStorage.getItem("sites") == null) {
    var siteContainer = [];
}
else {
    siteContainer = JSON.parse(localStorage.getItem('sites'));
    displaySites(siteContainer);
}

function addSite() {
    var sites = {
        siteURL: siteURLInput.value,
        siteName: siteNameInput.value
    }
    siteContainer.push(sites);
    localStorage.setItem('sites', JSON.stringify(siteContainer));
    displaySites(siteContainer);
    clearSite();
    console.log(siteContainer);
}

function clearSite() {
    siteURLInput.value = '';
    siteNameInput.value = '';
}
//
function displaySites(siteArray) {
    var cartona = ``;
    for (var i = 0; i < siteArray.length; i++) {
        cartona += `<tr>
            <td>${i+1}</td>
            <td>${siteArray[i].siteName}</td>
            <td >
              <button onclick="visitSites();" class="visit-btn"><i class="fa-solid fa-eye"></i> Visit</button>
            </td>
            <td >
              <button onclick="deleteSites(${i});" class="delete-btn"><i class="fa-solid fa-trash"></i> Delete</button>
            </td>
          </tr>`
    }
    document.getElementById('tableContent').innerHTML = cartona;
} 

function deleteSites(deletedIndex) {
siteContainer.splice(deletedIndex, 1);
    localStorage.setItem('sites', JSON.stringify(siteContainer));
    displaySites(siteContainer);
}

function visitSites() {
    window.open(siteURLInput.value, '_blank');
}

function validateUrl () {
    var regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (regex.test(siteURL.value)==true) {
        siteURL.classList.add('is-valid');
        siteURL.classList.remove('is-invalid');
        return true;
    }
    else {
        siteURL.classList.add('is-invalid');
        siteURL.classList.remove('is-valid');
        return false;
    }
}
function validateName () {
    var regex = /^\w{3,}(\s+\w+)*$/ ;
    if (regex.test(siteName.value)==true) {
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        return true;
    }
    else {
        siteName.classList.add('is-invalid');
        siteName.classList.remove('is-valid');
        return false;
    }
}

    
