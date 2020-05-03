document.addEventListener("DOMContentLoaded", function () {
    let addButton = document.createElement('button');
    // add HTML to button
    addButton.innerHTML = "Sing";
    // attach classname to button (used to keep button on it's own line)
    addButton.className = "button"
    // add button to the body
    document.body.appendChild(addButton);

    // add event listener for button click
    addButton.addEventListener("click", function () {
        // friends array
        let friends = ['Matt', 'Joe', 'Danica', 'MeiLee', 'Nikki'];
        // looping through friends array
        for (let i = 0; i < friends.length; ++i) {
            // creating div for each friend with class name friend
            let div = document.createElement('div');
            div.className = "friend"
            // creating h3 with friends name and attaching it to div
            let name = friends[i];
            let h3 = document.createElement('h3')
            let h3Text = document.createTextNode(name);
            h3.appendChild(h3Text);
            div.appendChild(h3);

            for (let l = 99; l > 0; l--) {
                let line = l - 1;
                if (l == 1) {
                    // last line of code
                    let p = document.createElement('p');
                    let pText = document.createTextNode(l + ' line of code in the file, ' + l + ' line of code; ' + name + ' strikes one out, clears it all out, no more lines of code in the file')
                    p.appendChild(pText);
                    div.appendChild(p);
                } else if (l == 2) {
                    // second to last line of code
                    let p = document.createElement('p');
                    let pText = document.createTextNode(l + ' lines of code in the file, ' + l + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + line + ' line of code in the file')
                    p.appendChild(pText);
                    div.appendChild(p);
                } else {
                    // all lines of 99-2
                    let p = document.createElement('p');
                    let pText = document.createTextNode(l + ' lines of code in the file, ' + l + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + line + ' lines of code in the file')
                    p.appendChild(pText);
                    div.appendChild(p);
                }
            };
            // adding div to document body
            document.body.appendChild(div);
        }
    })
})