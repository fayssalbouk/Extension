const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsfromLocalstorage = JSON.parse( localStorage.getItem("myLeads"))


if (leadsfromLocalstorage) {
    myLeads = leadsfromLocalstorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
       myLeads.push(tabs[0].URL)
       localStorage.setItem("myLeads", JSON.stringify(myLeads))
       render(myLeads)
      }) 
   })
   
   
   deleteBtn.addEventListener("dblclick", function() {
       localStorage.clear()
       myLeads = []
       render(myLeads)
   })
   
   
   inputBtn.addEventListener("click", function() {
       myLeads.push(inputEl.value)
       inputEl.value = ""
       localStorage.setItem("myLeads", JSON.stringify(myLeads))
       render(myLeads)
   })